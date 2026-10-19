import { NextResponse } from "next/server";
import {
  FIELD_LIMITS,
  MAX_PHOTOS,
  MAX_TOTAL_PHOTO_BYTES,
} from "@/lib/commission";
import { CONTACT_EMAIL } from "@/lib/site";
import { BUDGET_RANGES, PORTRAIT_TYPES, SIZES, formatPrice } from "@/lib/pricing";

const PORTRAIT_TYPE_VALUES: string[] = PORTRAIT_TYPES.map((t) => t.label);
const SIZE_VALUES: string[] = SIZES.map(
  (s) => `${s.name} (from ${formatPrice(s.from)})`
);
const BUDGET_VALUES: string[] = [...BUDGET_RANGES];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(form: FormData, key: string, max: number): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "We couldn’t read that submission.", code: "unreadable_submission" },
      { status: 400 }
    );
  }

  // Honeypot: pretend success so bots move on.
  if (text(form, "website", 200)) return NextResponse.json({ ok: true });

  const enquiry = {
    dogName: text(form, "dogName", FIELD_LIMITS.dogName),
    portraitType: text(form, "portraitType", 40),
    size: text(form, "size", 60),
    occasion: text(form, "occasion", FIELD_LIMITS.occasion),
    deadline: text(form, "deadline", 10),
    notes: text(form, "notes", FIELD_LIMITS.notes),
    budget: text(form, "budget", 40),
    name: text(form, "name", FIELD_LIMITS.name),
    email: text(form, "email", FIELD_LIMITS.email),
    phone: text(form, "phone", FIELD_LIMITS.phone),
    ukDelivery: text(form, "ukDelivery", 3),
  };
  const photos = form
    .getAll("photos")
    .filter((f): f is File => f instanceof File && f.size > 0);

  const errors: Record<string, string> = {};
  if (!enquiry.dogName) errors.dogName = "Please tell us your dog’s name.";
  if (!PORTRAIT_TYPE_VALUES.includes(enquiry.portraitType))
    errors.portraitType = "Please choose a portrait type.";
  if (!SIZE_VALUES.includes(enquiry.size)) errors.size = "Please choose a size.";
  if (enquiry.budget && !BUDGET_VALUES.includes(enquiry.budget))
    errors.budget = "Please choose a budget range from the list.";
  if (enquiry.deadline && !/^\d{4}-\d{2}-\d{2}$/.test(enquiry.deadline))
    errors.deadline = "Please enter a valid date.";
  if (!enquiry.name) errors.name = "Please tell us your name.";
  if (!EMAIL_PATTERN.test(enquiry.email))
    errors.email = "Please enter a valid email address.";
  if (enquiry.ukDelivery !== "yes")
    errors.ukDelivery = "Please confirm delivery will be to a UK address.";
  if (photos.length === 0) errors.photos = "Please add at least one photo of your dog.";
  else if (photos.length > MAX_PHOTOS)
    errors.photos = `Please add no more than ${MAX_PHOTOS} photos.`;
  else if (photos.some((p) => !p.type.startsWith("image/")))
    errors.photos = "Photos must be image files.";
  else if (photos.reduce((sum, p) => sum + p.size, 0) > MAX_TOTAL_PHOTO_BYTES)
    errors.photos = "Those photos are too large to upload together.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Please check the details below and try again.", errors, code: "validation" },
      { status: 400 }
    );
  }

  const body = [
    `New portrait enquiry for ${enquiry.dogName}`,
    "",
    `Portrait type: ${enquiry.portraitType}`,
    `Size: ${enquiry.size}`,
    `Occasion: ${enquiry.occasion || "-"}`,
    `Deadline: ${enquiry.deadline || "-"}`,
    `Budget: ${enquiry.budget || "-"}`,
    "",
    "Background / style notes:",
    enquiry.notes || "-",
    "",
    `From: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "-"}`,
    `Confirmed UK delivery: ${enquiry.ukDelivery}`,
    `Photos attached: ${photos.length}`,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  // Enquiries go to the business inbox unless overridden. Without a verified sending domain,
  // Resend's test sender works only when the Resend account itself uses the same address.
  const to = process.env.ENQUIRY_TO_EMAIL ?? CONTACT_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL ?? "Sindy’s Dog Art <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[commission] Email not configured; enquiry logged only:\n${body}`);
      return NextResponse.json({ ok: true });
    }
    console.error("[commission] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Enquiries aren’t available right now.", code: "email_not_configured" },
      { status: 503 }
    );
  }

  const attachments = await Promise.all(
    photos.map(async (photo, index) => ({
      filename: photo.name.replace(/[^\w.\- ]/g, "_") || `photo-${index + 1}.jpg`,
      content: Buffer.from(await photo.arrayBuffer()).toString("base64"),
    }))
  );

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `Portrait enquiry: ${enquiry.dogName} (${enquiry.portraitType}, ${enquiry.size})`.replace(/[\r\n]+/g, " "),
        text: body,
        attachments,
      }),
    });
  } catch (error) {
    console.error("[commission] Could not reach Resend:", error);
    return NextResponse.json(
      { error: "We couldn’t send your enquiry.", code: "email_unreachable" },
      { status: 502 }
    );
  }

  if (!response.ok) {
    console.error(`[commission] Resend responded ${response.status}: ${await response.text()}`);
    return NextResponse.json(
      { error: "We couldn’t send your enquiry.", code: `email_rejected_${response.status}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
