# Optima — Trợ Lý Tài Chính Cá Nhân
### Product Document v1.0 | TalkPOS Ecosystem

---

## The Problem We're Solving

Every year, millions of Vietnamese salaried workers quietly overpay their personal income tax (TNCN) and never get the money back.

This isn't a rare edge case. It's the default outcome for the majority of the workforce.

Here is how it happens. An employer withholds PIT from an employee's salary each month based on a rough estimate — the national personal deduction of 15.5 triệu/tháng, and whatever dependent deductions the employee remembered to register at the start of the year. But life doesn't stay static. A child starts school. A parent needs medical care. Someone takes out a life insurance policy. Someone changes jobs in July. These events all carry legitimate tax deductions — but they are rarely communicated to the employer's payroll department mid-year. The employer withholds too much. At year-end, the employee is owed a refund.

Vietnam does have a hoàn thuế TNCN system. From 2025, under Nghị định 70/2025/NĐ-CP, the tax authority processes electronic refund claims within three working days. The mechanism exists. The money is there. But roughly 90% of workers never file for it — not because they don't deserve it, but because they don't know they're owed it, don't know how to prove it, and the filing process is confusing enough without a guide.

Workers who don't file simply forfeit the overpayment. The tax authority keeps the money.

**Optima exists to close this gap.** It detects the overpayment, collects the evidence, calculates the exact refund, and guides the user through claiming it back.

---

## Who Uses Optima

### Primary User — The Salaried Worker

The core Optima user is a Vietnamese employee earning somewhere between 10 triệu and 100 triệu per month. They work at a factory, a tech company, a hospital, a school, or a retail chain. Their employer handles payroll. They never think much about tax because it's just a line item that disappears from their payslip each month.

They have a family. A child in school. Perhaps a parent they support financially. They pay for health insurance, maybe a life insurance policy their bank sold them. They make occasional donations. Every one of these is a legitimate tax deduction under Vietnamese law — and almost none of them are registered with their employer.

The consequence: they are being overtaxed every single month, and they don't know it.

**This is not a niche user. This is most of Vietnam's formal workforce.**

A more specific breakdown:

**Factory workers (roughly 80% of the user base)** typically earn 6 triệu in base salary plus up to 4 triệu in benefit allowances — meal allowances, transport allowances, toxic environment supplements. Critically, these benefit allowances are excluded from taxable income under Vietnamese labour law. After applying the 186 triệu/năm personal deduction, most factory workers' taxable income is effectively zero. They owe no PIT at all. For these users, Optima is permanently free. They may never generate a refund claim. But they still benefit from the document vault, the payslip record, and the eInvoice storage — and they are the distribution foundation that gives Optima scale.

**Office workers, engineers, teachers, and mid-level managers (roughly 20% of the user base)** earn enough that PIT withholding is real and significant. These are the users who are most likely to be owed a refund — and most likely to have unregistered deductions sitting unclaimed. An engineer earning 25 triệu/tháng with one school-age child and a life insurance policy may have annual deductions that total more than their entire taxable income. Their effective tax liability is zero, but their employer has been withholding PIT all year based on an incomplete picture. Optima finds this gap and quantifies it.

### Secondary Users

**HKD business owners using talkPOS** who also draw a personal salary. The owner of a phở shop paying themselves 15 triệu/tháng through the business has both a business tax obligation (handled in talkPOS) and a personal PIT obligation. Optima links to talkPOS via QR or deeplink so the owner's personal deductions flow seamlessly into the combined tax picture.

**Workers with side income** — the office developer who also runs a Shopee store at night, the teacher who tutors on weekends. These users have two income streams: one pre-taxed at source (salary), one not yet taxed (the side business). Optima handles both, segregates them correctly, and ensures no double taxation occurs while also capturing any legitimate business deductions.

---

## The Core Product

Optima is a free mobile app (React Native, same codebase as talkPOS with a feature flag) built around three things: **a document vault, a live refund detector, and a refund claim wizard.**

### 1. The Document Vault

The most underrated feature. Vietnamese workers have no organised place to store the documents that matter to their financial and legal life. Optima provides a personal vault for:

- **CCCD / hộ chiếu** — national ID documents
- **Bằng cấp & chứng chỉ** — qualifications and professional certificates
- **Hóa đơn điện tử** — electronic invoices received from service providers, compliant with NĐ 70/2025 standards
- **Hóa đơn y tế & học phí** — medical receipts and school fee invoices, which are deductible
- **Hợp đồng bảo hiểm** — insurance policy documents
- **Phiếu lương** — monthly payslips, imported automatically via QR scan

Every document uploaded is categorised automatically by AI and tagged to the appropriate tax deduction category where relevant. A school fee receipt from Trường Tiểu học doesn't just sit in a folder — it gets applied to the giảm trừ giáo dục con cái limit of 4.4 triệu/tháng/con and feeds directly into the refund calculation.

### 2. The "Bạn Đang Nộp Thừa" Detector

The centrepiece of the home screen. From the moment a user imports their first payslip, Optima shows a running live estimate of their overpayment:

```
💰 Ước tính hoàn thuế 2026

Đã khấu trừ:    8,250,000đ
Thuế thực tế:          0đ
─────────────────────────
Có thể hoàn:    8,250,000đ  ✨

[Thêm giảm trừ]   [Làm quyết toán ngay]
```

This banner updates in real time as users add deductions, upload receipts, or import new payslips. The number is not aspirational — it is calculated from actual withheld amounts against actual deductions, using the current PIT brackets and the 2026 deduction limits.

The banner appears under four trigger conditions:
- PIT withheld year-to-date exceeds projected tax liability
- User has unregistered dependents (prompted to add them)
- User changed employers mid-year, creating a calculation gap
- User has uncategorised receipts that may contain deductible expenses

### 3. The Payslip QR Bridge

The cleanest data acquisition mechanism in the product. talkPOS — the HKD business management app used by small business employers — generates a signed QR code for each monthly payslip. The payload contains the gross salary, PIT withheld, BHXH contributions, benefit allowances (excluded from taxable income), and net pay, signed with HMAC-SHA256.

The employee opens Optima, scans the QR, and the payslip is verified and written directly to their local SQLite database. No manual entry. No OCR errors. No disputes about what was withheld.

For employers or employees who both have the apps installed on the same device, this works as a deeplink: `talkpos://payslip?data={base64}` launches Optima automatically and imports the data.

At year-end, talkPOS generates the formal chứng từ khấu trừ TNCN in the XML format mandated by NĐ 70/2025. Optima ingests this document and runs the complete annual calculation — producing the exact refund amount attributable to the gap between what was withheld and what was actually owed.

### 4. The Refund Claim Wizard

The premium feature. Once the refund amount is calculated, Optima guides the user through the actual quyết toán TNCN filing process step by step:

1. Review and confirm income streams
2. Confirm all dependents registered with tax authority (hướng dẫn đăng ký người phụ thuộc if not)
3. Upload supporting documents for each deduction category
4. Generate the quyết toán XML in the format accepted by the General Department of Taxation's eTax portal
5. Submit electronically via the eTax system
6. Track refund status — under NĐ 70/2025, automatic refunds process within 3 working days

The wizard handles the most common failure modes: missing dependent registration, mismatched CCCD numbers, employers who haven't filed their end-of-year returns yet, and the scenario where an employer has already filed a quyết toán on the employee's behalf (ủy quyền) but the employee had unclaimed deductions not captured.

---

## How the Tax Math Works

A concrete example to illustrate what Optima actually calculates.

**User profile:** Office worker, 20 triệu/tháng salary, one school-age child, life insurance policy, BHXH contributor.

| Item | Monthly | Annual |
|---|---|---|
| Gross salary | 20,000,000 | 240,000,000 |
| PIT withheld (employer estimate) | ~687,500 | ~8,250,000 |

**Deductions Optima finds:**

| Deduction | Annual amount | Source |
|---|---|---|
| Giảm trừ bản thân | 186,000,000 | Statutory (15.5Tr × 12) |
| Người phụ thuộc (1 con) | 74,400,000 | Statutory (6.2Tr × 12) |
| Học phí con | 52,800,000 | School receipts scanned |
| Bảo hiểm nhân thọ | 12,000,000 | Policy doc in vault |
| BHXH đã đóng | ~16,800,000 | From payslips |
| **Tổng giảm trừ** | **~342,000,000** | |

**Tax calculation:**

```
Tổng thu nhập:          240,000,000
Tổng giảm trừ:         -342,000,000
─────────────────────────────────────
Thu nhập tính thuế:               0  (âm)

PIT thực tế phải nộp:             0đ
PIT đã bị khấu trừ:       8,250,000đ
─────────────────────────────────────
HOÀN LẠI:                8,250,000đ
```

Optima's message to the user: *"Bạn nộp thừa 8,250,000đ năm nay. Làm quyết toán để lấy lại tiền — chúng tôi hướng dẫn từng bước."*

This is not an edge case. This is an entirely ordinary outcome for a Vietnamese worker with one child and a life insurance policy. The reason it doesn't happen automatically is that the employer never had this information — and the employee never thought to gather it.

---

## Pricing Model — Success Fee

Optima is **free forever** for users who have no refund to claim. There is no subscription, no trial period, no paywall for the core features.

For users who complete a refund claim through the Refund Claim Wizard, Optima charges **10% of the refund amount recovered**, payable as a one-time fee at the point of filing.

### Why this model

**For the 80% of users (factory workers, low-income earners):** Genuinely free. No friction. No guilt. No subscription they forget to cancel. The value they receive — document vault, payslip records, eInvoice storage — is real and useful even at zero tax liability.

**For the 20% who have a refund:** They pay only after seeing the exact refund number. The fee is presented transparently before they confirm: *"Bạn được hoàn 8,250,000đ — Optima thu 10% = 825,000đ. Bạn nhận về 7,425,000đ."* The user walks away with 90% of money they would never have claimed at all. It is always a net gain. It never feels like a cost.

**For Optima:** Perfect incentive alignment. Revenue is earned only when real value is delivered. The refund amount comes from tax authority XML, not user self-reporting — there is no verification problem. At scale, with 2 million users and 400,000 annual refund claims averaging 5 triệu each, the success fee model generates approximately 200 tỷ VND per year.

### What is free vs. what triggers the fee

**Free — always:**
- Payslip import via QR scan (up to 12/năm)
- Document vault (up to 20 items)
- Basic PIT deduction calculator
- "Bạn nộp thừa" live detector (estimate only)
- eInvoice storage (NĐ 70/2025 compliant)
- PDF export of annual summary (1 lần/năm)

**Success fee (10% of refund):**
- Full Refund Claim Wizard — generates eTax-ready XML quyết toán and guides submission

**If user has zero refund but wants eTax XML for compliance:**
A small flat fee of 50,000đ for document generation only. No refund, no success fee.

---

## Technology Architecture

### Same Codebase as talkPOS

Optima is not a separate application. It is talkPOS running with `IS_OPTIMA_MODE = true`. The same React Native codebase, the same SQLite schema (23 tables), the same sync engine — with business-facing features hidden behind the config flag.

This has two important consequences:

**Upgrade path is frictionless.** When an Optima user decides to start a business, they tap "Mở kinh doanh." The config flag flips. All their existing data — deductions, documents, income history — migrates seamlessly into talkPOS. They start on the free tier (revenue under 500 triệu/năm). There is no data re-entry, no account migration, no lost history.

**Personal deductions flow into HKD tax calculations.** An HKD owner who also draws a personal salary benefits from having their family deductions already in the system. talkPOS detects when the owner's personal tax picture is incomplete and prompts: *"Mở Optima để tối ưu thuế cá nhân?"* The deeplink prefills all personal deductions into the combined PIT calculation — salary income plus business profit minus all legitimate deductions.

### Offline-First SQLite

Like talkPOS, Optima stores all data locally in SQLite. The user's documents, payslips, and tax calculations work completely offline. Nexus Cloud sync backs up data when connectivity is available — but the app never requires an internet connection to function. For a factory worker in an industrial zone with patchy mobile coverage, this matters.

### NĐ 70/2025 Compliance

The chứng từ khấu trừ TNCN XML format mandated by Nghị định 70/2025/NĐ-CP is machine-readable. Optima can ingest it directly — no OCR, no manual transcription. When an talkPOS employer generates the year-end certificate and shares it via QR or deeplink, Optima parses the structured data and runs the refund calculation instantly. This is the technical foundation that makes the Refund Claim Wizard accurate rather than approximate.

---

## Distribution Strategy — The talkPOS Viral Loop

Optima does not need a separate user acquisition budget. The HKD employers using talkPOS are its distribution channel.

Every time an talkPOS employer generates a monthly payslip QR for an employee, that employee is a potential Optima user. The QR scan is the first touch. The document vault and refund estimate keep them engaged. The refund claim — when it happens — is the monetisation moment.

A restaurant with eight staff generates eight potential Optima users. A factory with 200 workers on an talkPOS payroll generates 200. The employer doesn't need to do anything special — the payslip QR is already part of the talkPOS payroll workflow. Optima just catches the other end.

This is the flywheel:

```
talkPOS employers grow  →  more payslip QR codes generated
                        →  more Optima installs from employee scans
                        →  more document vault engagement
                        →  more refund claims completed
                        →  Optima success fee revenue grows
                        →  more workers tell colleagues about their refund
                        →  more Optima installs from word of mouth
                        →  some Optima users start businesses
                        →  more talkPOS users
```

---

## Competitive Landscape

There is no direct competitor to Optima in Vietnam as of 2026.

MISA CukCuk and KiotViet are POS products for business owners. They have no personal tax features. TurboTax-style consumer tax products do not exist in the Vietnamese market — the General Department of Taxation's own eTax portal exists but has no intelligence layer, no deduction detection, no guidance. It is a form, not a product.

The closest analogy is TurboTax in the United States, which built a dominant market position by making tax filing simple for ordinary people. The difference in Vietnam is the success-fee model rather than subscription — and the fact that most of the target users have never thought about their taxes at all. The marketing message isn't "file your taxes more easily." It is "you have money being held by the government and we will help you get it back."

---

## Open Questions

The following items are decided in principle but require legal and operational confirmation before launch:

1. **Does the 10% success fee require a financial services licence?** Current view: no — it is a software service fee, not a financial intermediary activity. Optima does not handle money, it generates documents. Needs legal confirmation.

2. **Charge timing:** Before the refund lands in the user's bank, or after? Recommendation: after, once the user receives the refund notification from the tax authority. Higher user trust, slightly more complex collection flow.

3. **Rejected claims:** If the tax authority rejects the quyết toán, the fee should be fully refunded to the user. Optima only earns on successful outcomes.

4. **Fee cap:** Consider a maximum fee of 2,000,000đ regardless of refund size, for very high-income users with large refunds. Without a cap, a user receiving a 30 triệu refund pays 3 triệu — which may feel disproportionate relative to the work Optima did.

5. **Employer-filed ủy quyền scenario:** If the employer already filed a quyết toán on the employee's behalf but missed some deductions, Optima should calculate only the delta (the additional refund from uncaptured deductions) and charge the fee only on that amount.

---

## Summary

Optima is a personal finance assistant built for Vietnamese salaried workers. Its core proposition — *giúp bạn lấy lại tiền thuế đã nộp thừa* — addresses a real, widespread, and currently unsolved problem. The product is free for the majority of users who have no tax liability. It earns revenue through a 10% success fee only when it delivers a measurable financial outcome. It distributes virally through the talkPOS payslip QR workflow. It upgrades frictionlessly into a full talkPOS account when a user starts a business.
# Optima — Trợ Lý Tài Chính Cá Nhân
### Product Document v1.0 | TalkPOS Ecosystem

---

## The Problem We're Solving

Every year, millions of Vietnamese salaried workers quietly overpay their personal income tax (TNCN) and never get the money back.

This isn't a rare edge case. It's the default outcome for the majority of the workforce.

Here is how it happens. An employer withholds PIT from an employee's salary each month based on a rough estimate — the national personal deduction of 15.5 triệu/tháng, and whatever dependent deductions the employee remembered to register at the start of the year. But life doesn't stay static. A child starts school. A parent needs medical care. Someone takes out a life insurance policy. Someone changes jobs in July. These events all carry legitimate tax deductions — but they are rarely communicated to the employer's payroll department mid-year. The employer withholds too much. At year-end, the employee is owed a refund.

Vietnam does have a hoàn thuế TNCN system. From 2025, under Nghị định 70/2025/NĐ-CP, the tax authority processes electronic refund claims within three working days. The mechanism exists. The money is there. But roughly 90% of workers never file for it — not because they don't deserve it, but because they don't know they're owed it, don't know how to prove it, and the filing process is confusing enough without a guide.

Workers who don't file simply forfeit the overpayment. The tax authority keeps the money.

**Optima exists to close this gap.** It detects the overpayment, collects the evidence, calculates the exact refund, and guides the user through claiming it back.

---

## Who Uses Optima

### Primary User — The Salaried Worker

The core Optima user is a Vietnamese employee earning somewhere between 10 triệu and 100 triệu per month. They work at a factory, a tech company, a hospital, a school, or a retail chain. Their employer handles payroll. They never think much about tax because it's just a line item that disappears from their payslip each month.

They have a family. A child in school. Perhaps a parent they support financially. They pay for health insurance, maybe a life insurance policy their bank sold them. They make occasional donations. Every one of these is a legitimate tax deduction under Vietnamese law — and almost none of them are registered with their employer.

The consequence: they are being overtaxed every single month, and they don't know it.

**This is not a niche user. This is most of Vietnam's formal workforce.**

A more specific breakdown:

**Factory workers (roughly 80% of the user base)** typically earn 6 triệu in base salary plus up to 4 triệu in benefit allowances — meal allowances, transport allowances, toxic environment supplements. Critically, these benefit allowances are excluded from taxable income under Vietnamese labour law. After applying the 186 triệu/năm personal deduction, most factory workers' taxable income is effectively zero. They owe no PIT at all. For these users, Optima is permanently free. They may never generate a refund claim. But they still benefit from the document vault, the payslip record, and the eInvoice storage — and they are the distribution foundation that gives Optima scale.

**Office workers, engineers, teachers, and mid-level managers (roughly 20% of the user base)** earn enough that PIT withholding is real and significant. These are the users who are most likely to be owed a refund — and most likely to have unregistered deductions sitting unclaimed. An engineer earning 25 triệu/tháng with one school-age child and a life insurance policy may have annual deductions that total more than their entire taxable income. Their effective tax liability is zero, but their employer has been withholding PIT all year based on an incomplete picture. Optima finds this gap and quantifies it.

### Secondary Users

**HKD business owners using talkPOS** who also draw a personal salary. The owner of a phở shop paying themselves 15 triệu/tháng through the business has both a business tax obligation (handled in talkPOS) and a personal PIT obligation. Optima links to talkPOS via QR or deeplink so the owner's personal deductions flow seamlessly into the combined tax picture.

**Workers with side income** — the office developer who also runs a Shopee store at night, the teacher who tutors on weekends. These users have two income streams: one pre-taxed at source (salary), one not yet taxed (the side business). Optima handles both, segregates them correctly, and ensures no double taxation occurs while also capturing any legitimate business deductions.

---

## The Core Product

Optima is a free mobile app (React Native, same codebase as talkPOS with a feature flag) built around three things: **a document vault, a live refund detector, and a refund claim wizard.**

### 1. The Document Vault

The most underrated feature. Vietnamese workers have no organised place to store the documents that matter to their financial and legal life. Optima provides a personal vault for:

- **CCCD / hộ chiếu** — national ID documents
- **Bằng cấp & chứng chỉ** — qualifications and professional certificates
- **Hóa đơn điện tử** — electronic invoices received from service providers, compliant with NĐ 70/2025 standards
- **Hóa đơn y tế & học phí** — medical receipts and school fee invoices, which are deductible
- **Hợp đồng bảo hiểm** — insurance policy documents
- **Phiếu lương** — monthly payslips, imported automatically via QR scan

Every document uploaded is categorised automatically by AI and tagged to the appropriate tax deduction category where relevant. A school fee receipt from Trường Tiểu học doesn't just sit in a folder — it gets applied to the giảm trừ giáo dục con cái limit of 4.4 triệu/tháng/con and feeds directly into the refund calculation.

### 2. The "Bạn Đang Nộp Thừa" Detector

The centrepiece of the home screen. From the moment a user imports their first payslip, Optima shows a running live estimate of their overpayment:

```
💰 Ước tính hoàn thuế 2026

Đã khấu trừ:    8,250,000đ
Thuế thực tế:          0đ
─────────────────────────
Có thể hoàn:    8,250,000đ  ✨

[Thêm giảm trừ]   [Làm quyết toán ngay]
```

This banner updates in real time as users add deductions, upload receipts, or import new payslips. The number is not aspirational — it is calculated from actual withheld amounts against actual deductions, using the current PIT brackets and the 2026 deduction limits.

The banner appears under four trigger conditions:
- PIT withheld year-to-date exceeds projected tax liability
- User has unregistered dependents (prompted to add them)
- User changed employers mid-year, creating a calculation gap
- User has uncategorised receipts that may contain deductible expenses

### 3. The Payslip QR Bridge

The cleanest data acquisition mechanism in the product. talkPOS — the HKD business management app used by small business employers — generates a signed QR code for each monthly payslip. The payload contains the gross salary, PIT withheld, BHXH contributions, benefit allowances (excluded from taxable income), and net pay, signed with HMAC-SHA256.

The employee opens Optima, scans the QR, and the payslip is verified and written directly to their local SQLite database. No manual entry. No OCR errors. No disputes about what was withheld.

For employers or employees who both have the apps installed on the same device, this works as a deeplink: `talkpos://payslip?data={base64}` launches Optima automatically and imports the data.

At year-end, talkPOS generates the formal chứng từ khấu trừ TNCN in the XML format mandated by NĐ 70/2025. Optima ingests this document and runs the complete annual calculation — producing the exact refund amount attributable to the gap between what was withheld and what was actually owed.

### 4. The Refund Claim Wizard

The premium feature. Once the refund amount is calculated, Optima guides the user through the actual quyết toán TNCN filing process step by step:

1. Review and confirm income streams
2. Confirm all dependents registered with tax authority (hướng dẫn đăng ký người phụ thuộc if not)
3. Upload supporting documents for each deduction category
4. Generate the quyết toán XML in the format accepted by the General Department of Taxation's eTax portal
5. Submit electronically via the eTax system
6. Track refund status — under NĐ 70/2025, automatic refunds process within 3 working days

The wizard handles the most common failure modes: missing dependent registration, mismatched CCCD numbers, employers who haven't filed their end-of-year returns yet, and the scenario where an employer has already filed a quyết toán on the employee's behalf (ủy quyền) but the employee had unclaimed deductions not captured.

---

## How the Tax Math Works

A concrete example to illustrate what Optima actually calculates.

**User profile:** Office worker, 20 triệu/tháng salary, one school-age child, life insurance policy, BHXH contributor.

| Item | Monthly | Annual |
|---|---|---|
| Gross salary | 20,000,000 | 240,000,000 |
| PIT withheld (employer estimate) | ~687,500 | ~8,250,000 |

**Deductions Optima finds:**

| Deduction | Annual amount | Source |
|---|---|---|
| Giảm trừ bản thân | 186,000,000 | Statutory (15.5Tr × 12) |
| Người phụ thuộc (1 con) | 74,400,000 | Statutory (6.2Tr × 12) |
| Học phí con | 52,800,000 | School receipts scanned |
| Bảo hiểm nhân thọ | 12,000,000 | Policy doc in vault |
| BHXH đã đóng | ~16,800,000 | From payslips |
| **Tổng giảm trừ** | **~342,000,000** | |

**Tax calculation:**

```
Tổng thu nhập:          240,000,000
Tổng giảm trừ:         -342,000,000
─────────────────────────────────────
Thu nhập tính thuế:               0  (âm)

PIT thực tế phải nộp:             0đ
PIT đã bị khấu trừ:       8,250,000đ
─────────────────────────────────────
HOÀN LẠI:                8,250,000đ
```

Optima's message to the user: *"Bạn nộp thừa 8,250,000đ năm nay. Làm quyết toán để lấy lại tiền — chúng tôi hướng dẫn từng bước."*

This is not an edge case. This is an entirely ordinary outcome for a Vietnamese worker with one child and a life insurance policy. The reason it doesn't happen automatically is that the employer never had this information — and the employee never thought to gather it.

---

## Pricing Model — Success Fee

Optima is **free forever** for users who have no refund to claim. There is no subscription, no trial period, no paywall for the core features.

For users who complete a refund claim through the Refund Claim Wizard, Optima charges **10% of the refund amount recovered**, payable as a one-time fee at the point of filing.

### Why this model

**For the 80% of users (factory workers, low-income earners):** Genuinely free. No friction. No guilt. No subscription they forget to cancel. The value they receive — document vault, payslip records, eInvoice storage — is real and useful even at zero tax liability.

**For the 20% who have a refund:** They pay only after seeing the exact refund number. The fee is presented transparently before they confirm: *"Bạn được hoàn 8,250,000đ — Optima thu 10% = 825,000đ. Bạn nhận về 7,425,000đ."* The user walks away with 90% of money they would never have claimed at all. It is always a net gain. It never feels like a cost.

**For Optima:** Perfect incentive alignment. Revenue is earned only when real value is delivered. The refund amount comes from tax authority XML, not user self-reporting — there is no verification problem. At scale, with 2 million users and 400,000 annual refund claims averaging 5 triệu each, the success fee model generates approximately 200 tỷ VND per year.

### What is free vs. what triggers the fee

**Free — always:**
- Payslip import via QR scan (up to 12/năm)
- Document vault (up to 20 items)
- Basic PIT deduction calculator
- "Bạn nộp thừa" live detector (estimate only)
- eInvoice storage (NĐ 70/2025 compliant)
- PDF export of annual summary (1 lần/năm)

**Success fee (10% of refund):**
- Full Refund Claim Wizard — generates eTax-ready XML quyết toán and guides submission

**If user has zero refund but wants eTax XML for compliance:**
A small flat fee of 50,000đ for document generation only. No refund, no success fee.

---

## Technology Architecture

### Same Codebase as talkPOS

Optima is not a separate application. It is talkPOS running with `IS_OPTIMA_MODE = true`. The same React Native codebase, the same SQLite schema (23 tables), the same sync engine — with business-facing features hidden behind the config flag.

This has two important consequences:

**Upgrade path is frictionless.** When an Optima user decides to start a business, they tap "Mở kinh doanh." The config flag flips. All their existing data — deductions, documents, income history — migrates seamlessly into talkPOS. They start on the free tier (revenue under 500 triệu/năm). There is no data re-entry, no account migration, no lost history.

**Personal deductions flow into HKD tax calculations.** An HKD owner who also draws a personal salary benefits from having their family deductions already in the system. talkPOS detects when the owner's personal tax picture is incomplete and prompts: *"Mở Optima để tối ưu thuế cá nhân?"* The deeplink prefills all personal deductions into the combined PIT calculation — salary income plus business profit minus all legitimate deductions.

### Offline-First SQLite

Like talkPOS, Optima stores all data locally in SQLite. The user's documents, payslips, and tax calculations work completely offline. Nexus Cloud sync backs up data when connectivity is available — but the app never requires an internet connection to function. For a factory worker in an industrial zone with patchy mobile coverage, this matters.

### NĐ 70/2025 Compliance

The chứng từ khấu trừ TNCN XML format mandated by Nghị định 70/2025/NĐ-CP is machine-readable. Optima can ingest it directly — no OCR, no manual transcription. When an talkPOS employer generates the year-end certificate and shares it via QR or deeplink, Optima parses the structured data and runs the refund calculation instantly. This is the technical foundation that makes the Refund Claim Wizard accurate rather than approximate.

---

## Distribution Strategy — The talkPOS Viral Loop

Optima does not need a separate user acquisition budget. The HKD employers using talkPOS are its distribution channel.

Every time an talkPOS employer generates a monthly payslip QR for an employee, that employee is a potential Optima user. The QR scan is the first touch. The document vault and refund estimate keep them engaged. The refund claim — when it happens — is the monetisation moment.

A restaurant with eight staff generates eight potential Optima users. A factory with 200 workers on an talkPOS payroll generates 200. The employer doesn't need to do anything special — the payslip QR is already part of the talkPOS payroll workflow. Optima just catches the other end.

This is the flywheel:

```
talkPOS employers grow  →  more payslip QR codes generated
                        →  more Optima installs from employee scans
                        →  more document vault engagement
                        →  more refund claims completed
                        →  Optima success fee revenue grows
                        →  more workers tell colleagues about their refund
                        →  more Optima installs from word of mouth
                        →  some Optima users start businesses
                        →  more talkPOS users
```

---

## Competitive Landscape

There is no direct competitor to Optima in Vietnam as of 2026.

MISA CukCuk and KiotViet are POS products for business owners. They have no personal tax features. TurboTax-style consumer tax products do not exist in the Vietnamese market — the General Department of Taxation's own eTax portal exists but has no intelligence layer, no deduction detection, no guidance. It is a form, not a product.

The closest analogy is TurboTax in the United States, which built a dominant market position by making tax filing simple for ordinary people. The difference in Vietnam is the success-fee model rather than subscription — and the fact that most of the target users have never thought about their taxes at all. The marketing message isn't "file your taxes more easily." It is "you have money being held by the government and we will help you get it back."

---

## Open Questions

The following items are decided in principle but require legal and operational confirmation before launch:

1. **Does the 10% success fee require a financial services licence?** Current view: no — it is a software service fee, not a financial intermediary activity. Optima does not handle money, it generates documents. Needs legal confirmation.

2. **Charge timing:** Before the refund lands in the user's bank, or after? Recommendation: after, once the user receives the refund notification from the tax authority. Higher user trust, slightly more complex collection flow.

3. **Rejected claims:** If the tax authority rejects the quyết toán, the fee should be fully refunded to the user. Optima only earns on successful outcomes.

4. **Fee cap:** Consider a maximum fee of 2,000,000đ regardless of refund size, for very high-income users with large refunds. Without a cap, a user receiving a 30 triệu refund pays 3 triệu — which may feel disproportionate relative to the work Optima did.

5. **Employer-filed ủy quyền scenario:** If the employer already filed a quyết toán on the employee's behalf but missed some deductions, Optima should calculate only the delta (the additional refund from uncaptured deductions) and charge the fee only on that amount.

---

## Summary

Optima is a personal finance assistant built for Vietnamese salaried workers. Its core proposition — *giúp bạn lấy lại tiền thuế đã nộp thừa* — addresses a real, widespread, and currently unsolved problem. The product is free for the majority of users who have no tax liability. It earns revenue through a 10% success fee only when it delivers a measurable financial outcome. It distributes virally through the talkPOS payslip QR workflow. It upgrades frictionlessly into a full talkPOS account when a user starts a business.

The opportunity is large. The mechanism is clear. The moat is the data — once a worker's documents, deductions, and payslip history are in Optima's vault, they will not move them elsewhere.

---

*Document maintained as part of the TalkPOS Ecosystem architecture. Cross-reference: `autopos_architecture.md` § APP 2, `optima_pricing_strategy_summary.md`.*
The opportunity is large. The mechanism is clear. The moat is the data — once a worker's documents, deductions, and payslip history are in Optima's vault, they will not move them elsewhere.

---

*Document maintained as part of the TalkPOS Ecosystem architecture. Cross-reference: `autopos_architecture.md` § APP 2, `optima_pricing_strategy_summary.md`.*