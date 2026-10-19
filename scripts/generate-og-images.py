"""Regenerates the social-sharing (Open Graph) images and the logo PNG.

Usage: FONTS_DIR=/path/to/fonts python3 scripts/generate-og-images.py
FONTS_DIR needs AlexBrush-Regular.ttf, CormorantGaramond[wght].ttf and Jost[wght].ttf
(all from https://github.com/google/fonts). Output goes to public/og/ and public/logo.png.
"""
import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = Path(os.environ.get("FONTS_DIR", "fonts"))
CREAM, INK, SAGE, SAGE_DEEP, INK_SOFT = "#FAF9F4", "#232620", "#8A9178", "#5E6650", "#4B5046"
W, H = 1200, 630


def font(name, size, weight=None):
    f = ImageFont.truetype(str(FONTS / name), size)
    if weight:
        f.set_variation_by_axes([weight])
    return f


def bezier(p0, p1, p2, p3, n=40):
    pts = []
    for i in range(n + 1):
        t = i / n
        a, b, c, d = (1 - t) ** 3, 3 * (1 - t) ** 2 * t, 3 * (1 - t) * t**2, t**3
        pts.append((a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]))
    return pts


def brush_mark(draw, x, y, scale, color=SAGE, width=None):
    """The line-drawn mark from the logo (56x40 viewBox), top-left at (x, y)."""
    segs = [
        ((4, 36), (4, 20), (14, 8), (24, 6)),
        ((24, 6), (22, 4), (22, 2), (24, 2)),
        ((24, 2), (30, 2), (34, 10), (34, 16)),
        ((34, 16), (42, 18), (50, 26), (52, 36)),
    ]
    w = width or max(2, round(2.2 * scale))
    prev = None
    for seg in segs:
        for px, py in bezier(*seg):
            cx, cy = x + px * scale, y + py * scale
            draw.ellipse([cx - w / 2, cy - w / 2, cx + w / 2, cy + w / 2], fill=color)
            if prev:
                draw.line([prev, (cx, cy)], fill=color, width=w)
            prev = (cx, cy)


def cover(path, size, focus=(0.5, 0.3)):
    im = Image.open(path).convert("RGB")
    tw, th = size
    s = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    ox = round((im.width - tw) * focus[0])
    oy = round((im.height - th) * focus[1])
    return im.crop((ox, oy, ox + tw, oy + th))


def wordmark(draw, x, y, size):
    f = font("AlexBrush-Regular.ttf", size)
    draw.text((x, y), "Sindy’s", font=f, fill=INK)
    draw.text((x, y + size * 0.78), "Dog Art", font=f, fill=INK)


def tracked(draw, xy, text, f, fill, spacing):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + spacing


def make(name, panel_builder, headline, sub, headline_size=46):
    img = Image.new("RGB", (W, H), CREAM)
    panel_builder(img)
    d = ImageDraw.Draw(img)
    d.line([(660, 0), (660, H)], fill=SAGE, width=3)
    brush_mark(d, 70, 52, 2.4)
    wordmark(d, 66, 128, 138)
    d.line([(72, 388), (132, 388)], fill=SAGE, width=3)
    hf = font("CormorantGaramond[wght].ttf", headline_size, 500)
    y = 406
    for line in headline:
        d.text((70, y), line, font=hf, fill=INK)
        y += headline_size * 1.12
    tracked(d, (72, 566), sub.upper(), font("Jost[wght].ttf", 19, 500), SAGE_DEEP, 3)
    img.save(ROOT / "public" / "og" / f"{name}.jpg", quality=90)
    print("wrote", name)


def single(path, focus):
    return lambda img: img.paste(cover(ROOT / path, (540, H), focus), (660, 0))


def strips(paths, focuses):
    def build(img):
        sw = 540 // len(paths)
        for i, (p, f) in enumerate(zip(paths, focuses)):
            img.paste(cover(ROOT / p, (sw, H), f), (660 + i * sw, 0))
    return build


make("og-default", single("public/gallery/memorial-01.jpg", (0.5, 0.15)),
     ["Every good dog", "deserves a masterpiece."], "Hand-painted oil dog portraits · UK")
make("og-gallery", strips(["public/gallery/memorial-03.jpg", "public/gallery/gift-03.jpg", "public/gallery/gift-07.jpg"],
                          [(0.37, 0.4), (0.5, 0.3), (0.45, 0.5)]),
     ["Portraits, painted", "with love."], "Memorial · Gift · Multi-pet")
make("og-commission", single("public/gallery/gift-11-photo.jpg", (0.7, 0.5)),
     ["Commission a portrait", "of your dog."], "Painted from your photo · UK shipping", 42)

# Square logo for structured data
logo = Image.new("RGB", (512, 512), CREAM)
d = ImageDraw.Draw(logo)
brush_mark(d, 196, 92, 2.2)
f = font("AlexBrush-Regular.ttf", 120)
for i, line in enumerate(["Sindy’s", "Dog Art"]):
    w = d.textlength(line, font=f)
    d.text(((512 - w) / 2, 170 + i * 100), line, font=f, fill=INK)
logo.save(ROOT / "public" / "logo.png")
print("wrote logo")
