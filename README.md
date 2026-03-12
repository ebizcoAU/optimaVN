# OptimaVN — Trợ Lý Tài Chính Cá Nhân

Marketing website for **OptimaVN** — a personal tax assistant for Vietnamese salaried workers.  
Built with Next.js 14 App Router and Tailwind CSS.

> **Part of the TalkPOS Ecosystem** — sibling product to [TalkPOS](https://talkpos.vn) (for HKD business owners).

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout + fonts (Be Vietnam Pro, Syne)
│   ├── page.tsx                # Home — full landing page assembly
│   ├── globals.css             # Tailwind base + scroll-reveal animations
│   ├── bang-gia/               # /bang-gia        — Pricing page
│   ├── may-tinh-thue/          # /may-tinh-thue   — Interactive tax calculator
│   ├── tinh-nang/              # /tinh-nang       — Features deep-dive
│   ├── luat-thue-2026/         # /luat-thue-2026  — 2026 Tax Law reference (SEO)
│   ├── lien-he/                # /lien-he         — Contact
│   ├── chinh-sach-bao-mat/     # /chinh-sach-bao-mat  — Privacy policy
│   ├── dieu-khoan/             # /dieu-khoan      — Terms of service
│   ├── lo-trinh/               # /lo-trinh        — Product roadmap
│   ├── lich-su-cap-nhat/       # /lich-su-cap-nhat — Changelog
│   ├── tinh-trang-he-thong/    # /tinh-trang-he-thong — System status
│   ├── tro-giup/               # /tro-giup        — Help centre
│   └── video-huong-dan/        # /video-huong-dan — Tutorial videos
│
└── components/
    ├── ScrollReveal.tsx    # Intersection observer — adds .visible to .reveal elements
    ├── Navbar.tsx          # Fixed top nav — Optima green brand, mobile hamburger drawer
    ├── Hero.tsx            # "Bạn đang nộp thừa thuế" — live refund mockup + stats bar
    ├── TheProblem.tsx      # Why workers overpay — 3 root causes + solution pivot
    ├── HowItWorks.tsx      # 4-step process: scan → vault → detect → XML
    ├── Deductions.tsx      # 8 deduction categories with limits + family photo anchor
    ├── DocumentVault.tsx   # Vault feature — 8 document types + vault grid UI
    ├── PayslipBridge.tsx   # TalkPOS QR payslip bridge — scan = zero manual entry
    ├── Testimonials.tsx    # 3 testimonials with real refund amounts
    ├── Pricing.tsx         # Free / Standard 1% / Nexus $10/yr — with examples table
    ├── CtaBanner.tsx       # Download CTA + TalkPOS ecosystem crosslink
    ├── PageShell.tsx       # Inner-page wrapper (label + h1 + subtitle header)
    └── Footer.tsx          # Footer — Optima brand, TalkPOS ecosystem, contact
```

---

## 💰 Pricing Model

| Tier | Condition | Price |
|---|---|---|
| **Miễn Phí** | Monthly gross ≤ 15.5 triệu/tháng | 0đ — forever, no card required |
| **Tiêu Chuẩn** | Monthly gross > 15.5 triệu/tháng | 1% of gross annual income, paid once at quyết toán |
| **Nexus Backup** | Optional add-on, either tier | $10/year (~250,000đ) |

The 15.5tr threshold is the 2026 personal deduction (giảm trừ bản thân). Below it, taxable income = 0, no PIT obligation, Optima is permanently free. The 1% fee is charged once when the user completes their annual quyết toán — not monthly, not on signup.

Nexus Backup syncs vault documents and settings only. No sensitive tax data is uploaded. The sync is heartbeat + auth enforcement — not full data replication.

---

## 🖼️ Images

See `public/images/README.md` for AI generation prompts for all images.

| File | Section | Priority |
|---|---|---|
| `hero-bg.jpg` | Hero desktop (1920×1080) | 🔴 Critical |
| `hero-bg-mobile.jpg` | Hero mobile (750×1334) | 🔴 Critical |
| `og-image.jpg` | SEO/social sharing (1200×630) | 🟡 Important |
| `refund-moment.jpg` | TheProblem (1200×500) | 🟡 Important |
| `family-deductions.jpg` | Deductions (1200×300) | 🟡 Important |
| `payslip-qr.jpg` | PayslipBridge (700×500) | 🟡 Important |
| `document-vault.jpg` | DocumentVault (800×300) | 🟢 Nice to have |
| `tax-declaration.jpg` | HowItWorks (1200×320) | 🟢 Nice to have |
| `cta-bg.jpg` | CtaBanner (1200×600) | 🟢 Nice to have |

---

## 🎨 Design Tokens

```ts
// tailwind.config.ts
brand: {
  green: '#1DB954',   // Primary accent — money, success, recovery
  gold:  '#F5A623',   // Secondary — warnings, highlights
  red:   '#E8381A',   // Danger / overpayment indicators
  blue:  '#6496ff',   // Nexus / cloud / tertiary
  ink:   '#0D0D0D',   // Page background
  dark:  '#141414',   // Section background
  card:  '#1C1C1C',   // Card background
  cream: '#F5F0E8',   // Primary text
  muted: '#888888',   // Secondary text
}
```

**Fonts:** Be Vietnam Pro (body, Vietnamese-optimised) + Syne (display headings).

**Scroll Reveal:** Add `className="reveal"` to any element. `ScrollReveal.tsx` adds `.visible` via IntersectionObserver. Defined in `globals.css`.

---

## 🗺️ Page SEO Targets

| Route | Vietnamese SEO keywords |
|---|---|
| `/` | optima thuế tncn · lấy lại tiền thuế · quyết toán tncn 2026 |
| `/bang-gia` | giá optima · chi phí quyết toán thuế cá nhân |
| `/may-tinh-thue` | máy tính thuế tncn 2026 · tính thuế thu nhập cá nhân |
| `/tinh-nang` | tính năng optima · ứng dụng thuế tncn |
| `/luat-thue-2026` | luật thuế tncn 2026 · giảm trừ gia cảnh · nghị định 70/2025 |

---

## 🏗️ Architecture Notes

**Shared mobile codebase with TalkPOS.** The Optima app is TalkPOS with `IS_OPTIMA_MODE = true`. Same React Native codebase, same SQLite schema (23 tables), same Nexus sync engine. This website is a separate Next.js project with its own brand and content.

**Offline-first.** All app features work without internet. SQLite on device. Nexus is optional backup, never a requirement.

**XML declaration, not API integration.** Optima generates `Mẫu 02/QTT-TNCN` XML which the user manually uploads to the General Department of Taxation's eTax portal. No direct government API integration — no certification burden, user retains full control.

**TalkPOS payslip QR.** Employers on TalkPOS generate HMAC-SHA256-signed QR codes per payslip. Employees scan with Optima for zero-entry payslip import. Deeplink: `talkpos://payslip?data={base64}`.

---

## 🌐 Deployment

```bash
# Development
npm run dev

# Production build (static export → /out)
npm run build

# Deploy to Vercel
npx vercel
```

`next.config.js` is set to `output: 'export'` with `trailingSlash: true` — output in `/out` deploys to any static host (Vercel, Netlify, Cloudflare Pages, S3).

---

## 📦 Tech Stack

- **Next.js 14** — App Router, Server Components, static export
- **Tailwind CSS 3** — Utility-first, tokens in `tailwind.config.ts`  
- **TypeScript** — Full type safety
- **Be Vietnam Pro + Syne** — Google Fonts, zero layout shift via `next/font`

---

## 🔗 TalkPOS Ecosystem

| Product | Audience |
|---|---|
| **Optima** (this repo) | Salaried employees — personal TNCN assistant |
| **TalkPOS** | HKD business owners — POS + business tax |
| **Sentinel** | Tax inspection authorities |

---

*Ebizco Australia Pty Ltd (ABN 44 091 466 858) · Làm với ❤️ cho người lao động Việt Nam 🇻🇳*
# optimaVN
