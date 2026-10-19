"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import {
  FIELD_LIMITS,
  MAX_PHOTOS,
  MAX_PHOTO_EDGE_PX,
  MAX_TOTAL_PHOTO_BYTES,
} from "@/lib/commission";
import Link from "next/link";
import { BUDGET_RANGES, formatPrice, PORTRAIT_TYPES, SIZES } from "@/lib/pricing";
import { PRICE_NOTE, RUSH_NOTE, TURNAROUND_TYPICAL } from "@/lib/policies";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string>;

const inputClass =
  "mt-1 block min-h-12 w-full border border-ink/40 bg-white px-4 py-2 text-base text-ink placeholder:text-ink-soft/70 focus:border-sage-deep";
const legendClass =
  "mb-2 font-display text-2xl text-ink";

/** Scales a photo down in the browser so a handful of phone photos fit in one upload. */
async function shrinkPhoto(file: File): Promise<File> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_PHOTO_EDGE_PX / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.82)
    );
    if (!blob) return file;
    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return blob.size < file.size ? new File([blob], name, { type: "image/jpeg" }) : file;
  } catch {
    // The browser could not decode it (for example HEIC outside Safari); upload as-is if it is small enough.
    return file;
  }
}

export function CommissionForm() {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoNote, setPhotoNote] = useState("");

  const id = (name: string) => `${uid}-${name}`;
  const fieldProps = (name: string) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });

  async function addPhotos(fileList: FileList | null) {
    if (!fileList?.length) return;
    setPhotoNote("");
    const shrunk = await Promise.all([...fileList].map(shrinkPhoto));
    const combined = [...photos, ...shrunk];
    if (combined.length > MAX_PHOTOS) {
      setPhotoNote(`You can add up to ${MAX_PHOTOS} photos. Extras were not added.`);
    }
    const next: File[] = [];
    let total = 0;
    for (const file of combined.slice(0, MAX_PHOTOS)) {
      if (total + file.size > MAX_TOTAL_PHOTO_BYTES) {
        setPhotoNote(
          "Those photos are too large to upload together. Add fewer, or email the rest to Sindy after you enquire."
        );
        continue;
      }
      total += file.size;
      next.push(file);
    }
    setPhotos(next);
    setErrors((e) => ({ ...e, photos: "" }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    data.delete("photos");
    photos.forEach((photo) => data.append("photos", photo));

    if (photos.length === 0) {
      setErrors({ photos: "Please add at least one photo of your dog." });
      document.getElementById(id("photos"))?.focus();
      return;
    }

    setStatus("submitting");
    setErrors({});
    try {
      const response = await fetch("/api/commission", { method: "POST", body: data });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        errors?: FieldErrors;
      };
      if (!response.ok) {
        setErrors(result.errors ?? {});
        setMessage(result.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      formEl.reset();
      setPhotos([]);
    } catch {
      setMessage("We couldn’t reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-sage bg-sage-soft/60 p-10 text-center"
      >
        <h2 className="text-4xl">Thank you!</h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Your enquiry has been sent. Sindy will be in touch soon to talk
          through your portrait and your photos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-12">
      {status === "error" ? (
        <p role="alert" className="border border-red-800 bg-red-50 p-4 text-red-900">
          {message}
        </p>
      ) : null}

      <fieldset className="space-y-5">
        <legend className={legendClass}>Your dog</legend>
        <Field label="Dog’s name" name="dogName" error={errors.dogName} id={id("dogName")}>
          <input
            {...fieldProps("dogName")}
            type="text"
            required
            maxLength={FIELD_LIMITS.dogName}
            autoComplete="off"
            className={inputClass}
          />
        </Field>

        <div>
          <label htmlFor={id("photos")} className="block text-sm font-medium">
            Photos of your dog <span aria-hidden="true">*</span>
          </label>
          <p id={id("photos-hint")} className="text-sm text-ink-soft">
            Clear, well-lit photos where their face is easy to see work best. Up
            to {MAX_PHOTOS}. We shrink them for upload; Sindy may ask for the
            originals by email. Not sure which to send? See our guide to the{" "}
            <Link href="/guides/best-photos-for-a-dog-portrait" className="underline hover:text-sage-deep">
              best photos for a dog portrait
            </Link>
            .
          </p>
          <input
            id={id("photos")}
            type="file"
            accept="image/*"
            multiple
            aria-describedby={`${id("photos-hint")}${errors.photos ? ` ${id("photos-error")}` : ""}`}
            aria-invalid={errors.photos ? true : undefined}
            onChange={(e) => {
              void addPhotos(e.target.files);
              e.target.value = "";
            }}
            className="mt-2 block w-full min-h-12 border border-dashed border-ink/40 bg-white p-3 text-sm file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-2 file:text-cream"
          />
          {errors.photos ? <ErrorText id={id("photos-error")}>{errors.photos}</ErrorText> : null}
          {photoNote ? <p className="mt-2 text-sm text-ink-soft" role="status">{photoNote}</p> : null}
          {photos.length > 0 ? (
            <ul className="mt-3 space-y-1 text-sm">
              {photos.map((photo, index) => (
                <li key={`${photo.name}-${index}`} className="flex items-center justify-between gap-3 border-b border-line py-1">
                  <span className="truncate">{photo.name}</span>
                  <button
                    type="button"
                    onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                    className="min-h-9 shrink-0 px-2 text-sage-deep underline"
                    aria-label={`Remove ${photo.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </fieldset>

      <fieldset>
        <legend className={legendClass}>Type of portrait</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {PORTRAIT_TYPES.map((type) => (
            <label
              key={type.id}
              className="flex cursor-pointer flex-col border border-ink/40 bg-white p-4 has-[:checked]:border-sage-deep has-[:checked]:bg-sage-soft has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sage-deep"
            >
              <span className="flex items-center gap-2 font-medium">
                <input
                  type="radio"
                  name="portraitType"
                  value={type.label}
                  required
                  className="accent-sage-deep"
                />
                {type.label}
              </span>
              <span className="mt-1 text-sm text-ink-soft">{type.hint}</span>
            </label>
          ))}
        </div>
        {errors.portraitType ? <ErrorText id={id("portraitType-error")}>{errors.portraitType}</ErrorText> : null}
      </fieldset>

      <fieldset>
        <legend className={legendClass}>Size</legend>
        <p className="mb-3 text-sm text-ink-soft">{PRICE_NOTE}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {SIZES.map((size) => (
            <label
              key={size.id}
              className="flex cursor-pointer items-start gap-3 border border-ink/40 bg-white p-4 has-[:checked]:border-sage-deep has-[:checked]:bg-sage-soft has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sage-deep"
            >
              <input
                type="radio"
                name="size"
                value={`${size.name} (from ${formatPrice(size.from)})`}
                required
                className="mt-1.5 accent-sage-deep"
              />
              <span>
                <span className="block font-medium">
                  {size.name} · from {formatPrice(size.from)}
                </span>
                <span className="block text-sm text-ink-soft">{size.dimensions}</span>
              </span>
            </label>
          ))}
        </div>
        {errors.size ? <ErrorText id={id("size-error")}>{errors.size}</ErrorText> : null}
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legendClass}>The occasion</legend>
        <Field label="Occasion (optional)" name="occasion" error={errors.occasion} id={id("occasion")}>
          <input
            {...fieldProps("occasion")}
            type="text"
            maxLength={FIELD_LIMITS.occasion}
            placeholder="e.g. a birthday gift, or in memory of Bella"
            className={inputClass}
          />
        </Field>
        <Field label="Deadline (optional)" name="deadline" error={errors.deadline} id={id("deadline")}>
          <input {...fieldProps("deadline")} type="date" className={inputClass} />
          <p className="mt-1 text-sm text-ink-soft">
            {TURNAROUND_TYPICAL} {RUSH_NOTE}.
          </p>
        </Field>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legendClass}>Your ideas</legend>
        <Field label="Background and style notes (optional)" name="notes" error={errors.notes} id={id("notes")}>
          <textarea
            {...fieldProps("notes")}
            rows={5}
            maxLength={FIELD_LIMITS.notes}
            placeholder="Colours, a favourite spot, a collar or toy, a traditional or looser style, anything you’d like captured."
            className={`${inputClass} py-3`}
          />
        </Field>
        <Field label="Budget range (optional)" name="budget" error={errors.budget} id={id("budget")}>
          <select {...fieldProps("budget")} defaultValue="" className={inputClass}>
            <option value="">Prefer not to say</option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legendClass}>Your details</legend>
        <Field label="Your name" name="name" required error={errors.name} id={id("name")}>
          <input {...fieldProps("name")} type="text" required autoComplete="name" maxLength={FIELD_LIMITS.name} className={inputClass} />
        </Field>
        <Field label="Email" name="email" required error={errors.email} id={id("email")}>
          <input {...fieldProps("email")} type="email" required autoComplete="email" maxLength={FIELD_LIMITS.email} className={inputClass} />
        </Field>
        <Field label="Phone (optional)" name="phone" error={errors.phone} id={id("phone")}>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" maxLength={FIELD_LIMITS.phone} className={inputClass} />
        </Field>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="ukDelivery" value="yes" required className="mt-1.5 size-5 accent-sage-deep" />
          <span className="text-sm">
            My portrait will be delivered to a UK address. Shipping is UK only.
          </span>
        </label>
        {errors.ukDelivery ? <ErrorText id={id("ukDelivery-error")}>{errors.ukDelivery}</ErrorText> : null}
      </fieldset>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="min-h-12 w-full bg-ink px-8 py-3 text-sm font-medium uppercase tracking-[0.14em] text-cream transition-colors hover:bg-sage-deep disabled:cursor-wait disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
        <p className="mt-3 text-sm text-ink-soft">
          We’ll only use your details to reply to your enquiry. By submitting,
          you agree to our{" "}
          <Link href="/privacy" className="underline hover:text-sage-deep">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline hover:text-sage-deep">
            Terms
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  id,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  id: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div data-field={name}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? <ErrorText id={`${id}-error`}>{error}</ErrorText> : null}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1 text-sm text-red-800">
      {children}
    </p>
  );
}
