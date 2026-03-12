// src/app/may-tinh-thue/page.tsx
'use client'
// src/app/may-tinh-thue/page.tsx — Optima Interactive Tax Calculator
// ─────────────────────────────────────────────────────────────────────────────
// TAX LAW BASIS (all figures verified against primary sources):
//
//   Law 109/2025/QH15  — PIT Law 2025, passed 10 Dec 2025, Art. 9 (brackets)
//   Resolution 110/2025/UBTVQH15 — family deduction amounts (15.5M self, 6.2tr/dependent)
//   Law 109/2025/QH15, Art. 11 Cl. 2 — education & medical deduction ENABLED but
//       cap/amount delegated to a Government Decree not yet issued as of Mar 2026.
//   Law 109/2025/QH15, Art. 10 Cl. 4 — dependent definition (incl. full-time students)
//   Circular 111/2013/TT-BTC, Art. 9 — dependent conditions still referenced
//       until new guiding circular is issued.
//
//   Effective date for salary/wage income: 1 January 2026.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useMemo } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

// ── UI HELPERS — defined outside component to prevent remount on every render ──

function Slider({
  label, value, onChange, min, max, step = 1, unit = ' triệu', note, color = '#1DB954',
}: {
  label: string; value: number; onChange: (n: number) => void
  min: number; max: number; step?: number; unit?: string; note?: string; color?: string
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[0.83rem] text-[#ccc] font-medium">{label}</span>
        <span className="font-display font-bold text-[0.95rem]" style={{ color }}>
          {value}{unit}
        </span>
      </div>
      {note && <p className="text-[0.70rem] text-[#555] mb-2 leading-snug">{note}</p>}
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{ accentColor: color }} />
      <div className="flex justify-between text-[0.65rem] text-[#444] mt-1">
        <span>{min}{unit}</span><span>{max}{unit}</span>
      </div>
    </div>
  )
}

function SectionCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[#141414] border border-white/[0.08] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}

function H3({ emoji, label, color }: { emoji: string; label: string; color: string }) {
  return (
    <h3 className="font-display font-bold text-[0.95rem] mb-4" style={{ color }}>
      {emoji} {label}
    </h3>
  )
}

function ResultRow({ label, value, sub, indent = false, color }: {
  label: string; value: string; sub?: string; indent?: boolean; color?: string
}) {
  return (
    <div className={`flex justify-between items-start gap-3 ${indent ? 'pl-4' : ''}`}>
      <div>
        <div className={indent ? 'text-[0.72rem] text-[#666]' : 'text-[0.82rem] text-[#999]'}>{label}</div>
        {sub && <div className="text-[0.65rem] text-[#555] mt-0.5">{sub}</div>}
      </div>
      <span className={`font-semibold whitespace-nowrap ${indent ? 'text-[0.72rem]' : 'text-[0.82rem]'}`}
        style={{ color: color || (indent ? '#666' : '#F5F0E8') }}>
        {value}
      </span>
    </div>
  )
}

// ── 5-BRACKET SCALE — Art. 9, Law 109/2025/QH15 ─────────────────────────────
// Replaces the 7-bracket scale in force under PIT Law 2007 (Law 04/2007/QH12).
// Annual taxable income thresholds (VND):
const BRACKETS = [
  { max:   120_000_000, rate: 0.05, monthly: '≤ 10 triệu/tháng'   },
  { max:   360_000_000, rate: 0.10, monthly: '10 – 30 triệu/tháng' },
  { max:   720_000_000, rate: 0.20, monthly: '30 – 60 triệu/tháng' },
  { max: 1_200_000_000, rate: 0.30, monthly: '60 – 100 triệu/tháng'},
  { max: Infinity,      rate: 0.35, monthly: '> 100 triệu/tháng'   },
]

// ── DEDUCTIONS — Resolution 110/2025/UBTVQH15 ────────────────────────────────
const SELF_DEDUCTION_MONTHLY     = 15_500_000   // 15.5M/month = 186M/year
const DEPENDENT_DEDUCTION_MONTHLY = 6_200_000   // 6.2tr/person/month — NEW (was 4.4tr)

function calcPIT(taxable: number): number {
  if (taxable <= 0) return 0
  let tax = 0, prev = 0
  for (const b of BRACKETS) {
    if (taxable <= prev) break
    tax += (Math.min(taxable, b.max) - prev) * b.rate
    prev = b.max
  }
  return Math.round(tax)
}

function fmt(n: number, short = false): string {
  if (n === 0) return '0đ'
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, '') + ' tỷ'
  if (n >= 1_000_000) {
    const m = n / 1_000_000
    return (Number.isInteger(m) ? m.toString() : m.toFixed(1)) + (short ? 'tr' : ' triệu')
  }
  return n.toLocaleString('vi-VN') + 'đ'
}

// Tuition reference ranges (Decree 238/2025/NĐ-CP, 2025–2026):
//   Public non-autonomous: ~14–37tr/yr  |  Public autonomous: ~25–55tr/yr
//   Private: ~25–60tr/yr+               |  International in VN: ~80–200tr/yr
// Education deduction = depsStudent × tuitionPerStudent (actual invoice amount)
// Specific cap delegated to a Govt Decree not yet issued as of Mar 2026
// (Law 109/2025/QH15, Art. 11 Cl. 2: "theo mức do Chính phủ quy định")

export default function MayTinhThue() {
  // ── Income
  const [monthlyGross, setMonthlyGross] = useState(20)
  const [bhxhRate,     setBhxhRate]     = useState(10.5)

  // ── Dependents — broken into 3 qualifying categories
  // Art. 10, Cl. 4, Law 109/2025/QH15:
  //   (a) Con chưa thành niên / mất năng lực / khuyết tật không có khả năng lao động
  //   (b) Con thành niên đang học ĐH, CĐ, THCN, học nghề; vợ/chồng/bố mẹ không có thu nhập > 1M/tháng
  const [depsMinor,    setDepsMinor]    = useState(0)  // children under 18
  const [depsStudent,  setDepsStudent]  = useState(0)  // children 18+ full-time student
  const [depsOther,    setDepsOther]    = useState(0)  // spouse, parents, siblings

  const totalDeps = depsMinor + depsStudent + depsOther

  // ── Education deduction
  // Art. 11, Cl. 2, Law 109/2025/QH15: chi giáo dục của người phụ thuộc được giảm trừ
  // "theo mức do Chính phủ quy định" — implementing Decree PENDING as of Mar 2026.
  // Logic: user enters actual tuition PER student → system multiplies by depsStudent count.
  // Cap is unknown until Decree is issued; we calculate full amount and flag clearly.
  const [tuitionPerStudent, setTuitionPerStudent] = useState(20) // triệu/năm/sinh viên
  const totalTuition = depsStudent * tuitionPerStudent             // triệu/năm total

  // ── Other deductions
  const [medical,   setMedical]   = useState(0)  // triệu/năm
  const [insurance, setInsurance] = useState(0)  // triệu/năm (cap 12M)
  const [charity,   setCharity]   = useState(0)  // triệu/năm

  // ── Main calculation ──────────────────────────────────────────────────────
  const calc = useMemo(() => {
    const gross     = monthlyGross * 12 * 1_000_000
    const bhxh      = Math.round(gross * bhxhRate / 100)
    const selfDed   = SELF_DEDUCTION_MONTHLY * 12        // 186M
    const depDed    = totalDeps * DEPENDENT_DEDUCTION_MONTHLY * 12
    const eduDed    = totalTuition * 1_000_000
    const medDed    = medical   * 1_000_000
    const insDed    = Math.min(insurance, 12) * 1_000_000
    const charDed   = charity   * 1_000_000
    const totalDed  = bhxh + selfDed + depDed + eduDed + medDed + insDed + charDed
    const taxable   = Math.max(0, gross - totalDed)
    const pit       = calcPIT(taxable)

    // Employer's baseline withholding: only BHXH + self deduction known to payroll
    const baselinePIT = calcPIT(Math.max(0, gross - bhxh - selfDed))
    const refund      = Math.max(0, baselinePIT - pit)
    const owed        = Math.max(0, pit - baselinePIT)

    // Per-bracket breakdown
    const breakdown: { rate: number; slice: number; tax: number; monthly: string }[] = []
    let prev = 0
    for (const b of BRACKETS) {
      if (taxable <= prev) break
      const slice = Math.min(taxable, b.max) - prev
      breakdown.push({ rate: b.rate, slice, tax: Math.round(slice * b.rate), monthly: b.monthly })
      prev = b.max
    }

    return {
      gross, bhxh, selfDed, depDed, eduDed, medDed, insDed, charDed,
      totalDed, taxable, pit, baselinePIT, refund, owed, breakdown,
      effectiveRate: gross > 0 ? (pit / gross * 100).toFixed(1) : '0',
    }
  }, [monthlyGross, bhxhRate, totalDeps, totalTuition, medical, insurance, charity])

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">

        {/* Page header */}
        <div className="py-14 px-page text-center bg-gradient-to-b from-[#090f09] to-[#0D0D0D] border-b border-white/[0.07]">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">Công cụ miễn phí</p>
          <h1 className="font-display font-black text-[clamp(1.9rem,4vw,3.4rem)] tracking-tight leading-tight max-w-2xl mx-auto mb-3">
            Máy tính thuế TNCN 2026
          </h1>
          <p className="text-[#888] font-light max-w-lg mx-auto text-sm leading-relaxed mb-5">
            Biểu thuế 5 bậc mới · Giảm trừ gia cảnh cập nhật · Tính học phí theo số sinh viên.
            Không đăng nhập, không lưu dữ liệu.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3 text-xs">
            {[
              { text: 'Luật 109/2025/QH15', color: '#1DB954' },
              { text: 'NQ 110/2025/UBTVQH15', color: '#1DB954' },
              { text: 'Hiệu lực từ 1/1/2026', color: '#F5A623' },
            ].map(t => (
              <span key={t.text} className="font-bold px-3 py-1.5 rounded-full border"
                style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}10` }}>
                {t.text}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1160px] mx-auto px-page py-10">
          <div className="grid lg:grid-cols-2 gap-7">

            {/* ─── LEFT: INPUTS ─────────────────────────────────────── */}
            <div className="space-y-5">

              {/* 1. Income */}
              <SectionCard>
                <H3 emoji="💰" label="Thu nhập" color="#F5A623" />
                <Slider label="Lương tháng (gross)" value={monthlyGross} onChange={setMonthlyGross}
                  min={5} max={120} unit=" triệu" color="#F5A623"
                  note="Thu nhập gộp trước khi trừ BHXH và thuế." />
                <Slider label="Tỷ lệ BHXH người lao động đóng" value={bhxhRate} onChange={setBhxhRate}
                  min={8} max={12} step={0.5} unit="%" color="#F5A623"
                  note="Thường 10.5% = BHXH 8% + BHYT 1.5% + BHTN 1%. Xem phiếu lương để xác nhận." />
              </SectionCard>

              {/* 2. Dependents — 3 categories */}
              <SectionCard>
                <div className="flex items-start justify-between mb-1">
                  <H3 emoji="👨‍👩‍👧" label="Người phụ thuộc" color="#1DB954" />
                  {totalDeps > 0 && (
                    <span className="text-xs font-bold text-[#1DB954] bg-[#1DB954]/10 border border-[#1DB954]/25
                                     px-2.5 py-1 rounded-full -mt-1 shrink-0">
                      {totalDeps} người · −{fmt(totalDeps * DEPENDENT_DEDUCTION_MONTHLY * 12)}/năm
                    </span>
                  )}
                </div>
                <div className="bg-[#1DB954]/[0.05] border border-[#1DB954]/15 rounded-xl px-4 py-3 mb-5 text-[0.75rem] text-[#888] leading-relaxed">
                  <strong className="text-[#1DB954]">6.2 triệu/người/tháng</strong> theo Nghị quyết 110/2025/UBTVQH15
                  (tăng từ mức cũ 4.4tr). Mỗi người phụ thuộc chỉ được tính cho một người nộp thuế.
                </div>

                <Slider
                  label="Con chưa thành niên (dưới 18 tuổi)"
                  value={depsMinor} onChange={setDepsMinor}
                  min={0} max={6} unit=" người" color="#1DB954"
                  note="Con ruột, con nuôi, con ngoài giá thú. Không cần chứng minh thu nhập." />

                <div className="border-l-2 border-[#1DB954]/20 pl-4 mb-5">
                  <Slider
                    label="Con 18+ đang học ĐH / CĐ / THCN / học nghề (toàn thời gian)"
                    value={depsStudent} onChange={setDepsStudent}
                    min={0} max={4} unit=" người" color="#1DB954"
                    note="Điều kiện: học toàn thời gian tại VN hoặc nước ngoài, thu nhập ≤ 1 triệu/tháng. (Luật 109/2025/QH15, Điều 10, Khoản 4b)" />
                  {depsStudent > 0 && (
                    <div className="bg-[#6496ff]/[0.06] border border-[#6496ff]/20 rounded-xl px-4 py-3 text-[0.72rem] text-[#6496ff]/80 -mt-2">
                      💡 {depsStudent} sinh viên → học phí được tính tự động trong mục Giảm trừ học phí bên dưới.
                    </div>
                  )}
                </div>

                <Slider
                  label="Vợ/chồng, bố mẹ, anh chị em"
                  value={depsOther} onChange={setDepsOther}
                  min={0} max={6} unit=" người" color="#1DB954"
                  note="Hết tuổi lao động hoặc không có khả năng lao động, thu nhập ≤ 1 triệu/tháng. Cần đăng ký với cơ quan thuế." />
              </SectionCard>

              {/* 3. Education deduction */}
              <SectionCard>
                <div className="flex items-center justify-between mb-3">
                  <H3 emoji="🎓" label="Giảm trừ học phí" color="#6496ff" />
                  {depsStudent > 0 && totalTuition > 0 && (
                    <span className="text-xs font-bold text-[#6496ff] bg-[#6496ff]/10 border
                                     border-[#6496ff]/25 px-2.5 py-1 rounded-full -mt-1 shrink-0">
                      −{fmt(totalTuition * 1_000_000)}/năm
                    </span>
                  )}
                </div>

                {/* Legal status — always visible */}
                <div className="bg-[#F5A623]/[0.06] border border-[#F5A623]/25 rounded-xl px-4 py-3 mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[0.72rem] font-bold text-[#F5A623] uppercase tracking-wide">⚠️ Trạng thái pháp lý</span>
                  </div>
                  <p className="text-[0.73rem] text-[#999] leading-relaxed">
                    <strong className="text-[#F5F0E8]">Luật 109/2025/QH15, Điều 11, Khoản 2</strong> cho phép
                    giảm trừ chi phí giáo dục-đào tạo của người phụ thuộc, nhưng giao
                    <strong className="text-[#F5F0E8]"> Chính phủ quy định mức cụ thể</strong>.
                    Nghị định hướng dẫn <span className="text-[#F5A623] font-bold">chưa được ban hành</span> tính
                    đến tháng 3/2026. Máy tính này dùng học phí thực tế bạn nhập làm ước tính —
                    mức trần thực tế có thể thấp hơn.
                  </p>
                </div>

                {/* Who qualifies note */}
                <div className="bg-[#6496ff]/[0.05] border border-[#6496ff]/15 rounded-xl px-4 py-3 mb-5 text-[0.73rem] text-[#888] leading-relaxed">
                  <strong className="text-[#6496ff]">Điều kiện được công nhận người phụ thuộc sinh viên</strong>
                  <span className="text-[#555]"> (Luật 109/2025/QH15, Điều 10, Khoản 4b):</span>
                  <ul className="mt-2 space-y-1 text-[#777]">
                    <li>✓ Con thành niên đang học <strong className="text-[#F5F0E8]">đại học, cao đẳng, THCN hoặc học nghề</strong></li>
                    <li>✓ Học <strong className="text-[#F5F0E8]">toàn thời gian</strong> tại VN hoặc nước ngoài</li>
                    <li>✓ Thu nhập cá nhân ≤ mức do Bộ trưởng Bộ Tài chính quy định (hiện ~1 triệu/tháng)</li>
                    <li>✓ Đã đăng ký người phụ thuộc với cơ quan thuế (Mẫu 02/ĐK-NPT-TNCN)</li>
                  </ul>
                </div>

                {depsStudent === 0 ? (
                  <div className="text-center py-3 bg-[#111] rounded-xl">
                    <p className="text-[0.80rem] text-[#555]">
                      Thêm "con 18+ đang học" trong mục Người phụ thuộc để kích hoạt.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Per-student tuition slider */}
                    <Slider
                      label={`Học phí thực tế mỗi sinh viên (năm)`}
                      value={tuitionPerStudent}
                      onChange={setTuitionPerStudent}
                      min={0} max={200} step={5} unit=" triệu" color="#6496ff"
                      note="Theo hóa đơn điện tử từ trường. Nếu học nhiều trường, nhập tổng cộng." />

                    {/* Reference ranges */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Công lập (chưa tự chủ)', range: '14–37tr/năm', tap: 20 },
                        { label: 'Công lập tự chủ',         range: '25–55tr/năm', tap: 40 },
                        { label: 'Dân lập / tư thục',       range: '25–60tr/năm', tap: 45 },
                        { label: 'Quốc tế tại VN',          range: '80–200tr/năm', tap: 100 },
                      ].map(p => (
                        <button key={p.label} onClick={() => setTuitionPerStudent(p.tap)}
                          className={`text-left px-3 py-2.5 rounded-xl border text-[0.72rem] transition-all ${
                            tuitionPerStudent === p.tap
                              ? 'bg-[#6496ff]/15 border-[#6496ff]/40 text-[#6496ff]'
                              : 'border-white/[0.07] text-[#666] hover:border-white/15'
                          }`}>
                          <div className="font-bold leading-tight">{p.label}</div>
                          <div className="text-[0.65rem] opacity-60 mt-0.5">{p.range}</div>
                        </button>
                      ))}
                    </div>

                    {/* Auto-calculated total */}
                    <div className="flex items-center justify-between bg-[#6496ff]/[0.08] border border-[#6496ff]/20 rounded-xl px-4 py-3">
                      <div className="text-[0.80rem] text-[#888]">
                        Tổng học phí ({depsStudent} sv × {tuitionPerStudent}tr)
                      </div>
                      <div className="font-display font-bold text-[#6496ff] text-[1.1rem]">
                        {fmt(totalTuition * 1_000_000)}
                      </div>
                    </div>

                    {/* Tax saving preview */}
                    {totalTuition > 0 && (
                      <div className="flex items-center justify-between bg-[#1DB954]/[0.06] border border-[#1DB954]/15 rounded-xl px-4 py-3">
                        <div className="text-[0.78rem] text-[#888]">
                          Tiết kiệm thuế ước tính từ học phí
                          <div className="text-[0.65rem] text-[#555] mt-0.5">dựa trên thuế suất bậc đang áp dụng</div>
                        </div>
                        <div className="font-display font-bold text-[#1DB954]">
                          {fmt(calcPIT(totalTuition * 1_000_000))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SectionCard>

              {/* 4. Other deductions */}
              <SectionCard>
                <H3 emoji="📋" label="Chi phí khác" color="#E8381A" />
                <Slider label="Chi phí y tế (năm)" value={medical} onChange={setMedical}
                  min={0} max={150} unit=" triệu" color="#E8381A"
                  note="Viện phí, thuốc kê đơn — bản thân và người phụ thuộc. Cần hóa đơn điện tử. (Luật 109/2025/QH15, Điều 11 — chờ Nghị định hướng dẫn về mức trần)" />
                <Slider label="Bảo hiểm nhân thọ / hưu trí tự nguyện (năm)" value={insurance}
                  onChange={setInsurance} min={0} max={12} unit=" triệu" color="#E8381A"
                  note="Tối đa 12 triệu/năm được giảm trừ. Không tính BHXH/BHYT bắt buộc." />
                <Slider label="Từ thiện & nhân đạo (năm)" value={charity} onChange={setCharity}
                  min={0} max={50} unit=" triệu" color="#E8381A"
                  note="Tổ chức từ thiện được nhà nước công nhận. Cần biên lai." />
              </SectionCard>
            </div>

            {/* ─── RIGHT: RESULTS ───────────────────────────────────── */}
            <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">

              {/* Main result */}
              <div className={`rounded-2xl p-7 border-2 ${
                calc.refund > 0
                  ? 'bg-gradient-to-b from-[#1DB954]/10 to-[#141414] border-[#1DB954]'
                  : calc.owed > 0
                    ? 'bg-gradient-to-b from-[#E8381A]/10 to-[#141414] border-[#E8381A]'
                    : 'bg-[#141414] border-white/15'
              }`}>
                {calc.refund > 0 ? (
                  <>
                    <div className="text-xs font-bold tracking-widest uppercase text-[#1DB954] mb-2">
                      💰 Ước tính được hoàn thuế
                    </div>
                    <div className="font-display font-black text-[3rem] text-[#1DB954] leading-none mb-2">
                      {fmt(calc.refund)}
                    </div>
                    <p className="text-[#888] text-sm font-light">
                      Thuế công ty đã khấu trừ vượt mức thực tế phải nộp.
                      Làm quyết toán để lấy lại khoản này.
                    </p>
                  </>
                ) : calc.owed > 0 ? (
                  <>
                    <div className="text-xs font-bold tracking-widest uppercase text-[#E8381A] mb-2">
                      ⚠️ Ước tính cần nộp thêm
                    </div>
                    <div className="font-display font-black text-[3rem] text-[#E8381A] leading-none mb-2">
                      {fmt(calc.owed)}
                    </div>
                    <p className="text-[#888] text-sm font-light">
                      Thu nhập thực tế cao hơn ước tính của công ty.
                      Cần tự quyết toán và nộp bổ sung.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-xs font-bold tracking-widest uppercase text-[#1DB954] mb-2">
                      ✓ Cân bằng
                    </div>
                    <div className="font-display font-black text-[3rem] text-[#1DB954] leading-none mb-2">0đ</div>
                    <p className="text-[#888] text-sm font-light">
                      Thuế đã khấu trừ khớp với số thực tế phải nộp.
                    </p>
                  </>
                )}

                <div className="border-t border-white/[0.08] mt-5 pt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  <div>
                    <div className="text-[#666] mb-0.5">Thuế thực tế</div>
                    <div className="font-bold text-[#F5F0E8]">{fmt(calc.pit, true)}</div>
                  </div>
                  <div>
                    <div className="text-[#666] mb-0.5">Công ty khấu trừ</div>
                    <div className="font-bold text-[#F5F0E8]">{fmt(calc.baselinePIT, true)}</div>
                  </div>
                  <div>
                    <div className="text-[#666] mb-0.5">Thuế suất thực</div>
                    <div className="font-bold text-[#F5F0E8]">{calc.effectiveRate}%</div>
                  </div>
                </div>
              </div>

              {/* Full breakdown */}
              <SectionCard>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#666] mb-4">
                  Bảng tính chi tiết
                </h3>
                <div className="space-y-2">
                  <ResultRow label="Thu nhập năm (gross)" value={fmt(calc.gross)} />
                  <ResultRow label="– BHXH / BHYT / BHTN" value={`−${fmt(calc.bhxh)}`} indent color="#666" />
                  <ResultRow label="– Giảm trừ bản thân (15.5tr × 12)" value={`−${fmt(calc.selfDed)}`} indent color="#666" />
                  {calc.depDed > 0 && (
                    <ResultRow
                      label={`– Người phụ thuộc (${totalDeps} × 6.2tr × 12)`}
                      value={`−${fmt(calc.depDed)}`} indent color="#1DB954"
                      sub={[
                        depsMinor   > 0 ? `${depsMinor} con < 18t` : '',
                        depsStudent > 0 ? `${depsStudent} sinh viên` : '',
                        depsOther   > 0 ? `${depsOther} vợ/chồng/bố mẹ` : '',
                      ].filter(Boolean).join(' · ')} />
                  )}
                  {calc.eduDed > 0 && (
                    <ResultRow
                      label={`– Học phí (${depsStudent} sv × ${tuitionPerStudent}tr)`}
                      value={`−${fmt(calc.eduDed)}`} indent color="#6496ff"
                      sub="⚠️ Chờ Nghị định hướng dẫn về mức trần" />
                  )}
                  {calc.medDed > 0 && (
                    <ResultRow label="– Y tế" value={`−${fmt(calc.medDed)}`} indent color="#666"
                      sub="⚠️ Chờ Nghị định hướng dẫn về mức trần" />
                  )}
                  {calc.insDed > 0 && (
                    <ResultRow label="– Bảo hiểm nhân thọ" value={`−${fmt(calc.insDed)}`} indent color="#666" />
                  )}
                  {calc.charDed > 0 && (
                    <ResultRow label="– Từ thiện & nhân đạo" value={`−${fmt(calc.charDed)}`} indent color="#666" />
                  )}
                  <div className="border-t border-white/[0.07] pt-2.5 space-y-2">
                    <ResultRow label="Tổng giảm trừ" value={fmt(calc.totalDed)} color="#1DB954" />
                    <ResultRow
                      label="Thu nhập tính thuế"
                      value={calc.taxable === 0 ? '0đ — không phải nộp thuế' : fmt(calc.taxable)}
                      color={calc.taxable === 0 ? '#1DB954' : '#F5A623'} />
                  </div>
                </div>
              </SectionCard>

              {/* Bracket breakdown */}
              {calc.breakdown.length > 0 && (
                <SectionCard>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-[#666] mb-4">
                    Phân tích theo bậc thuế
                  </h3>
                  <div className="space-y-2">
                    {calc.breakdown.map((b, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-1 bg-white/[0.04] rounded-lg h-2 overflow-hidden">
                          <div className="h-full rounded-lg bg-[#1DB954]"
                            style={{ width: `${Math.min(100, b.slice / calc.taxable * 100)}%`, opacity: 0.4 + i * 0.15 }} />
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs text-[#888]">{(b.rate * 100).toFixed(0)}% · </span>
                          <span className="text-xs font-bold text-[#F5F0E8]">{fmt(b.tax, true)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* CTA */}
              <div className="bg-[#1DB954]/[0.07] border border-[#1DB954]/20 rounded-2xl p-5 text-center">
                <div className="font-bold text-sm mb-1.5 text-[#F5F0E8]">
                  Muốn kết quả chính xác từ phiếu lương thật?
                </div>
                <p className="text-xs text-[#888] mb-4 leading-relaxed">
                  Tải Optima cho Android hoặc iPhone, scan QR phiếu lương — dữ liệu BHXH, thuế khấu trừ thực tế vào thẳng.
                </p>
                <a href="#" className="inline-block bg-[#1DB954] text-[#0D0D0D] font-bold
                  px-6 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
                  Tải Optima miễn phí
                </a>
              </div>

              {/* Disclaimer */}
              <div className="bg-[#111] border border-white/[0.05] rounded-xl p-4">
                <p className="text-[0.72rem] text-[#555] leading-relaxed">
                  Đây là ước tính dựa trên thông tin bạn nhập. Số thực tế phụ thuộc vào chứng từ thực tế,
                  các Nghị định hướng dẫn chưa ban hành, và cách tính của cơ quan thuế.
                  Không phải tư vấn thuế chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>

          {/* ── PIT BRACKET TABLE ─────────────────────────────────────────── */}
          <div className="mt-12 reveal">
            <div className="bg-[#141414] border border-white/[0.08] rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-display font-black text-[1.2rem] tracking-tight">
                    Biểu thuế TNCN lũy tiến 2026 — 5 bậc
                  </h2>
                  <p className="text-[0.78rem] text-[#666] mt-1">
                    Luật số 109/2025/QH15, Điều 9 · Thay thế biểu 7 bậc của Luật 04/2007/QH12
                  </p>
                </div>
                <span className="text-xs font-bold text-[#1DB954] bg-[#1DB954]/10 border border-[#1DB954]/25
                                 px-2.5 py-1.5 rounded-full shrink-0 ml-4">Hiệu lực 1/1/2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08] text-[0.72rem] text-[#555] uppercase tracking-wide">
                      <th className="pb-3 text-left font-bold">Bậc</th>
                      <th className="pb-3 text-left font-bold">Thu nhập tính thuế / năm</th>
                      <th className="pb-3 text-left font-bold">Tương đương / tháng</th>
                      <th className="pb-3 text-left font-bold">Thuế suất</th>
                      <th className="pb-3 text-left font-bold hidden md:table-cell">Biểu cũ (2007)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {[
                      { b: 1, year: '≤ 120 triệu',            month: '≤ 10 triệu',    rate: '5%',  old: '5% (≤60tr)',  color: '#1DB954' },
                      { b: 2, year: '120 – 360 triệu',         month: '10 – 30 triệu', rate: '10%', old: '10%+15%',    color: '#5BC87A' },
                      { b: 3, year: '360 – 720 triệu',         month: '30 – 60 triệu', rate: '20%', old: '20%+25%',    color: '#F5A623' },
                      { b: 4, year: '720 triệu – 1.2 tỷ',      month: '60 – 100 triệu',rate: '30%', old: '30%',        color: '#F5A623' },
                      { b: 5, year: '> 1.2 tỷ',                month: '> 100 triệu',   rate: '35%', old: '35% (>80tr)', color: '#E8381A' },
                    ].map(r => (
                      <tr key={r.b} className="group">
                        <td className="py-3 text-[#666] font-bold">Bậc {r.b}</td>
                        <td className="py-3 text-[#ccc]">{r.year}</td>
                        <td className="py-3 text-[#888]">{r.month}</td>
                        <td className="py-3 font-black text-lg" style={{ color: r.color }}>{r.rate}</td>
                        <td className="py-3 text-[#555] text-xs hidden md:table-cell">{r.old}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[0.72rem] text-[#555] mt-4 leading-relaxed">
                Biểu 2026 gộp 7 bậc thành 5 bậc, mở rộng ngưỡng bậc 1 từ 60tr lên 120tr/năm,
                bỏ bậc 15% và 25%, nâng ngưỡng bậc cao nhất từ 960tr lên 1.2 tỷ/năm.
              </p>
            </div>
          </div>

          {/* ── BIBLIOGRAPHY ─────────────────────────────────────────────── */}
          <div className="mt-8 reveal">
            <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-7">
              <h2 className="font-display font-bold text-[1rem] text-[#888] mb-5 flex items-center gap-2">
                📚 Cơ sở pháp lý
                <span className="text-xs font-normal text-[#555] bg-white/[0.04] border border-white/[0.07]
                                 px-2 py-0.5 rounded-full">
                  Luật có thể được cập nhật bất kỳ lúc nào — kiểm tra phiên bản mới nhất trước khi quyết toán
                </span>
              </h2>
              <div className="space-y-4 text-[0.80rem]">
                {[
                  {
                    ref: '[1]',
                    title: 'Luật Thuế Thu nhập Cá nhân 2025 (Luật số 109/2025/QH15)',
                    detail: 'Quốc hội thông qua ngày 10/12/2025. Điều 9: biểu thuế lũy tiến 5 bậc. Điều 10: người phụ thuộc. Điều 11: giảm trừ y tế và giáo dục-đào tạo. Hiệu lực từ 01/07/2026; riêng thu nhập lương áp dụng từ 01/01/2026.',
                    url: 'https://luatvietnam.vn/thue/luat-thue-thu-nhap-ca-nhan-2025-so-109-2025-qh15-422733-d1.html',
                    status: 'Có hiệu lực',
                    statusColor: '#1DB954',
                  },
                  {
                    ref: '[2]',
                    title: 'Nghị quyết số 110/2025/UBTVQH15 của Ủy ban Thường vụ Quốc hội',
                    detail: 'Quy định mức giảm trừ gia cảnh: người nộp thuế 15.5 triệu đồng/tháng; người phụ thuộc 6.2 triệu đồng/người/tháng (tăng từ 11tr và 4.4tr theo NQ 954/2020).',
                    url: null,
                    status: 'Có hiệu lực',
                    statusColor: '#1DB954',
                  },
                  {
                    ref: '[3]',
                    title: 'Luật Thuế Thu nhập Cá nhân 2007 (Luật số 04/2007/QH12, sửa đổi 2012, 2014)',
                    detail: 'Biểu thuế 7 bậc cũ (5/10/15/20/25/30/35%) được thay thế bởi Luật 109/2025/QH15 kể từ 01/01/2026 (phần lương). Vẫn dùng để tham chiếu khi đối chiếu năm 2025 trở về trước.',
                    url: null,
                    status: 'Thay thế từ 1/1/2026',
                    statusColor: '#888',
                  },
                  {
                    ref: '[4]',
                    title: 'Thông tư số 111/2013/TT-BTC của Bộ Tài chính',
                    detail: 'Hướng dẫn chi tiết điều kiện người phụ thuộc: con thành niên đang học ĐH/CĐ/THCN/học nghề, thu nhập ≤ 1 triệu/tháng. Tiếp tục được tham chiếu cho đến khi Thông tư mới hướng dẫn Luật 109/2025 được ban hành.',
                    url: null,
                    status: 'Tham chiếu (chờ thay thế)',
                    statusColor: '#F5A623',
                  },
                  {
                    ref: '[5]',
                    title: 'Nghị định số 238/2025/NĐ-CP của Chính phủ',
                    detail: 'Khung học phí 2025–2026: ĐH công lập chưa tự chủ tối đa 3.11 triệu/tháng/sinh viên (~37tr/năm); ĐH tự chủ và tư thục cao hơn. Dùng làm tham chiếu ước tính học phí trong máy tính này.',
                    url: 'https://vanban.chinhphu.vn/?docid=215169&pageid=27160',
                    status: 'Có hiệu lực từ 9/2025',
                    statusColor: '#1DB954',
                  },
                  {
                    ref: '[6]',
                    title: 'Nghị định hướng dẫn Điều 11 Luật 109/2025/QH15 (giảm trừ y tế & giáo dục)',
                    detail: 'Luật 109 ủy quyền Chính phủ quy định mức trần cụ thể cho khoản giảm trừ y tế và học phí. Nghị định này CHƯA được ban hành tính đến tháng 3/2026. Mức trần thực tế có thể khác với ước tính trong máy tính này.',
                    url: null,
                    status: '⚠️ Chưa ban hành',
                    statusColor: '#E8381A',
                  },
                ].map(item => (
                  <div key={item.ref} className="flex gap-4 border-b border-white/[0.05] pb-4 last:border-0 last:pb-0">
                    <div className="text-[#555] font-bold shrink-0 w-8">{item.ref}</div>
                    <div className="flex-1">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <span className="font-semibold text-[#ccc]">{item.title}</span>
                        <span className="text-[0.68rem] font-bold px-2 py-0.5 rounded-full border shrink-0"
                          style={{ color: item.statusColor, borderColor: `${item.statusColor}35`, background: `${item.statusColor}12` }}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-[#666] leading-relaxed">{item.detail}</p>
                      {item.url && (
                        <a href={item.url} target="_blank" rel="noopener noreferrer"
                          className="text-[#6496ff] hover:underline text-[0.72rem] mt-1 inline-block">
                          {item.url} ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[0.70rem] text-[#444] mt-5 leading-relaxed border-t border-white/[0.05] pt-4">
                Thông tin trên mang tính tham khảo. Pháp luật thuế có thể thay đổi bất kỳ lúc nào.
                Luôn kiểm tra văn bản pháp quy mới nhất tại{' '}
                <a href="https://luatvietnam.vn" target="_blank" rel="noopener noreferrer"
                  className="text-[#6496ff] hover:underline">luatvietnam.vn</a> và{' '}
                <a href="https://gdt.gov.vn" target="_blank" rel="noopener noreferrer"
                  className="text-[#6496ff] hover:underline">gdt.gov.vn</a> trước khi quyết toán thuế.
                Optima tự động cập nhật khi luật thay đổi — tải app để nhận cập nhật.
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}