# Optima — Image Generation Guide

All images are editorial photography. Photorealistic. Vietnamese subjects.  
Warm, human, optimistic tone — not corporate stock photo aesthetics.

**Recommended tools:** Midjourney v6, DALL-E 3, Stable Diffusion XL

---

## 🔴 Critical — required before launch

### `hero-bg.jpg`
**Dimensions:** 1920 × 1080px  
**Used in:** Hero section — desktop background

**Prompt:**
> A Vietnamese woman in her early 30s sitting at a small desk in a bright warm apartment, looking at her phone with a calm slightly surprised expression — like she just discovered something good. Natural window light from the left. Modern but modest home. Soft bokeh background. Warm cream and green tones. Photorealistic, 85mm lens feel. Subject on the RIGHT third of frame — left half empty for text overlay.

---

### `hero-bg-mobile.jpg`
**Dimensions:** 750 × 1334px  
**Used in:** Hero section — mobile background

**Layout constraint (critical):**
Text overlay occupies the **top 65% of the screen** (navbar + headline + badge + refund card).
The subject's face and expression must sit in the **bottom 35%** — roughly from y=870px downward.
The top 65% must be dark enough for white/green text to read clearly, but not pure black — it should feel like a real environment fading into shadow, not a void.

**Prompt:**
> A Vietnamese woman in her early 30s, photographed from the waist up in portrait orientation (9:16 ratio). She is positioned in the BOTTOM THIRD of the frame — her face and shoulders occupy roughly the lower 35% of the image. She is looking slightly upward and to the left, smiling with quiet satisfaction — like she just received good news on her phone, which she holds in both hands at chest level. The phone screen emits a soft warm green glow upward onto her face.
>
> Lighting: warm late-afternoon window light from camera-left, catching her face from below-left. The upper two-thirds of the frame is her home interior — a modest Vietnamese apartment, slightly out of focus, with warm amber and dark olive tones. The ceiling/wall area at top is naturally dark (not black — think deep warm shadow, like #1a1208) so white text overlays are readable.
>
> No harsh flash. No studio lighting. Shot feel: 50mm f/1.8, slight under-exposure in the upper zone, correctly exposed on her face. Colour grade: desaturated warm greens and ambers, dark upper half, subject bright and alive at the bottom. Photorealistic. NOT stock photography aesthetic.
>
> **Do not place the face above the 65% mark from the top.** The upper region must remain uncluttered and dim enough for text legibility.

---

## 🟡 Important

### `og-image.jpg`
**Dimensions:** 1200 × 630px  
**Used in:** `<meta og:image>` — link preview when shared on Zalo, Facebook, etc.

**Prompt:**
> Clean graphic: dark background #0D0D0D. Top-left: "Optima" in large bold green (#1DB954) Syne font. Below: "Lấy lại tiền thuế đã nộp thừa" in white. Right side: simple phone mockup showing a green card "Có thể hoàn: 8,250,000đ ✨". Bottom small text: "Miễn phí nếu lương ≤ 15.5 triệu/tháng". Minimal, professional, 1200×630px.

---

### `refund-moment.jpg`
**Dimensions:** 1200 × 500px (wide banner)  
**Used in:** TheProblem section

**Prompt:**
> A Vietnamese office worker (late 20s, gender-neutral) staring at their phone in mild disbelief and growing excitement — the face of someone who just discovered they have money owed to them. Open-plan office or café background, soft focus. Natural candid feel, not posed. Slightly cool background, warm face light. Wide 12:5 crop. Photorealistic.

---

### `family-deductions.jpg`
**Dimensions:** 1200 × 300px (very wide banner)  
**Used in:** Deductions section — family anchor

**Prompt:**
> Vietnamese family of three — father, mother, primary-school-age child — at a kitchen table doing homework together. Warm evening indoor light. Parents looking at child's schoolwork, smiling. Modern modest apartment. Warm amber and cream tones. Candid feel, not posed stock. 4:1 crop.

---

### `payslip-qr.jpg`
**Dimensions:** 700 × 500px  
**Used in:** PayslipBridge section

**Prompt:**
> Close-up of Vietnamese hands holding a smartphone scanning a QR code on a printed payslip. Factory or office environment slightly blurred behind. Phone screen shows a green checkmark. Natural light. Authentic Vietnamese workplace. 4:3 ratio. Photorealistic.

---

## 🟢 Nice to have

### `document-vault.jpg`
**Dimensions:** 800 × 300px (wide)  
**Used in:** DocumentVault section — top anchor image

**Prompt:**
> Flat lay on a cream/white surface: Vietnamese CCCD card, a school tuition invoice, a life insurance policy booklet, a medical receipt, a smartphone showing a QR code. Neatly but naturally arranged. Warm overhead lighting. Cream, white, sage green accents. Photorealistic editorial style. Wide crop.

---

### `tax-declaration.jpg`
**Dimensions:** 1200 × 320px (very wide banner)  
**Used in:** HowItWorks section — bottom anchor

**Prompt:**
> Vietnamese person sitting confidently at a laptop, relaxed and satisfied — just completed something. Laptop screen blurred but suggests a form was submitted. Clean desk, cup of tea. Warm neutrals, soft green screen glow. Wide 4:1 crop. Photorealistic.

---

### `cta-bg.jpg`
**Dimensions:** 1200 × 600px  
**Used in:** CtaBanner section — optional background

**Prompt:**
> Vietnamese woman late 20s holding her phone with both hands, looking down at it with a big genuine smile — the face of someone who just received money back. Warm golden-hour light. Candid and joyful, not posed. Warm greens and gold tones. Background soft bokeh. Photorealistic.

---

## 📐 Dimensions Summary

| File | W | H | Section |
|---|---|---|---|
| `hero-bg.jpg` | 1920 | 1080 | Hero desktop |
| `hero-bg-mobile.jpg` | 750 | 1334 | Hero mobile |
| `og-image.jpg` | 1200 | 630 | SEO / social |
| `refund-moment.jpg` | 1200 | 500 | TheProblem |
| `family-deductions.jpg` | 1200 | 300 | Deductions |
| `payslip-qr.jpg` | 700 | 500 | PayslipBridge |
| `document-vault.jpg` | 800 | 300 | DocumentVault |
| `tax-declaration.jpg` | 1200 | 320 | HowItWorks |
| `cta-bg.jpg` | 1200 | 600 | CtaBanner |

---

## 🎨 Photography Direction

**Do:**
- Real Vietnamese faces, homes, workplaces
- Natural light — morning or late afternoon
- Candid moments — not posed "stock photo" body language
- Modest realistic settings (apartments, offices, factories, cafés)
- Colors: cream `#F5F0E8`, green `#1DB954`, warm ambers

**Avoid:**
- Western models or settings
- Pure white studio backgrounds
- Heavy filters or Instagram grading
- Images that look like Shutterstock

**The feeling should be:** *this is someone like me, in a place like mine, getting money back that was always theirs.*