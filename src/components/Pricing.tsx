// src/components/Pricing.tsx — Optima
// Pricing model (updated Mar 2026):
//   Free:     0đ mãi mãi — thu nhập ≤ 15.5tr/tháng (dưới ngưỡng TNCN)
//             Nexus Backup tuỳ chọn: +200,000đ/năm
//   Standard: 0.5% thu nhập TÍNH THUẾ (sau giảm trừ) — không phải thu nhập gộp
//             Nexus Backup: ĐÃ BAO GỒM
import Link from 'next/link'

// Example calculations for the table:
// Taxable income = gross annual − BHXH (10.5%) − self deduction (15.5M×12) − dependents
// 20tr/th gross: 240tr − 25.2tr BHXH − 186tr self = 28.8tr taxable → 0.5% = 144,000đ
// 30tr/th gross: 360tr − 37.8tr BHXH − 186tr self = 136.2tr taxable → 0.5% = 681,000đ
// 50tr/th gross: 600tr − 63tr BHXH − 186tr self = 351tr taxable → 0.5% = 1,755,000đ

const tiers = [
  {
    name: 'Miễn Phí',
    price: '0đ',
    unit: '',
    condition: 'Thu nhập ≤ 15.5 triệu/tháng',
    conditionNote: 'Dưới ngưỡng giảm trừ bản thân — thu nhập tính thuế = 0đ',
    badge: 'Miễn phí mãi mãi',
    badgeColor: 'text-[#1DB954] bg-[#1DB954]/8 border-[#1DB954]/20',
    accentColor: '#1DB954',
    featured: false,
    features: [
      'Vault lưu tối đa 20 chứng từ',
      'Scan phiếu lương QR (12 lần/năm)',
      'Máy tính thuế cơ bản',
      'Detector "Bạn đang nộp thừa" (ước tính)',
      'Lưu offline — dữ liệu trên máy bạn',
      'Kê khai thuế — xuất XML chuẩn eTax',
      { text: 'Nexus Backup tuỳ chọn: +200,000đ/năm', highlight: true },
    ],
    nexus: 'add-on',
    cta: 'Tải miễn phí',
    ctaStyle: 'border border-white/15 text-[#F5F0E8] hover:bg-white/[0.06]',
  },
  {
    name: 'Tiêu Chuẩn',
    price: '0.5%',
    unit: ' thu nhập tính thuế',
    condition: 'Thu nhập > 15.5 triệu/tháng',
    conditionNote: 'Tính trên thu nhập sau giảm trừ — không phải lương gộp',
    badge: 'Trả phí khi có nghĩa vụ thuế',
    badgeColor: 'text-[#F5A623] bg-[#F5A623]/8 border-[#F5A623]/25',
    accentColor: '#1DB954',
    featured: true,
    features: [
      'Tất cả tính năng gói Miễn Phí',
      'Vault không giới hạn chứng từ',
      'Scan phiếu lương không giới hạn',
      'Detector chính xác theo thời gian thực',
      'Hồ sơ quyết toán XML đầy đủ Mẫu 02/QTT-TNCN',
      'Wizard quyết toán từng bước',
      'Tất cả 8 danh mục giảm trừ',
      { text: 'Nexus Backup đã bao gồm — không phụ phí', highlight: true },
      'Hỗ trợ ưu tiên',
    ],
    nexus: 'included',
    cta: 'Bắt đầu ngay',
    ctaStyle: 'bg-[#1DB954] border-[#1DB954] text-[#0D0D0D] hover:opacity-90',
  },
]

type Feature = string | { text: string; highlight: boolean }

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5 md:px-14 bg-[#141414] text-center">

      <div className="reveal">
        <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">Bảng giá</p>
        <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight max-w-xl mx-auto mb-4">
          Đơn giản. Minh bạch.{' '}
          <span className="text-[#1DB954]">Không ràng buộc.</span>
        </h2>
        <p className="text-[#888] font-light max-w-lg mx-auto text-sm leading-relaxed mb-10">
          Nếu bạn dưới ngưỡng thuế, Optima miễn phí mãi mãi. Nếu bạn có nghĩa vụ thuế,
          bạn chỉ trả <strong className="text-[#F5F0E8]">0.5% thu nhập tính thuế</strong> —
          và khoản hoàn thuế Optima tìm lại cho bạn gần như luôn lớn hơn nhiều.
        </p>
      </div>

      {/* 2-column cards */}
      <div className="grid md:grid-cols-2 gap-5 max-w-[780px] mx-auto reveal items-start">
        {tiers.map((t) => (
          <div key={t.name}
            className={`relative rounded-2xl p-7 text-left transition-all duration-200
                        hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]
              ${t.featured
                ? 'bg-[#1C1C1C] border-2 border-[#1DB954] bg-gradient-to-b from-[#1DB954]/6 to-[#1C1C1C]'
                : 'bg-[#1C1C1C] border border-white/[0.08]'}`}>

            {t.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1DB954] text-[#0D0D0D]
                              text-[0.80rem] font-black px-3.5 py-1 rounded-full tracking-widest
                              whitespace-nowrap uppercase">
                PHỔ BIẾN NHẤT
              </div>
            )}

            <div className="text-[0.76rem] font-black tracking-[0.14em] uppercase text-[#888] mb-3">
              {t.name}
            </div>

            <div className="font-display font-black text-[2.6rem] tracking-[-0.04em] leading-none mb-1"
                 style={{ color: t.accentColor }}>
              {t.price}
              <span className="text-[0.85rem] font-normal text-[#888] ml-1">{t.unit}</span>
            </div>

            {/* Nexus indicator */}
            <div className="flex items-center gap-2 mb-3 mt-2">
              {t.nexus === 'included' ? (
                <span className="text-[0.72rem] font-bold text-[#6496ff] bg-[#6496ff]/10
                                 border border-[#6496ff]/25 px-2.5 py-1 rounded-full">
                  ☁️ Nexus Backup đã bao gồm
                </span>
              ) : (
                <span className="text-[0.72rem] font-bold text-[#888] bg-white/[0.04]
                                 border border-white/[0.10] px-2.5 py-1 rounded-full">
                  ☁️ Nexus Backup +200,000đ/năm
                </span>
              )}
            </div>

            <div className={`text-[0.76rem] font-bold px-2.5 py-1.5 rounded-lg border inline-block mb-1 ${t.badgeColor}`}>
              ✓ {t.badge}
            </div>

            <div className="text-[0.73rem] text-[#1DB954]/80 font-semibold mb-0.5">{t.condition}</div>
            <div className="text-[0.72rem] text-[#666] italic mb-5">{t.conditionNote}</div>

            <ul className="space-y-2 mb-7">
              {(t.features as Feature[]).map((f) => {
                const isObj = typeof f === 'object'
                const text = isObj ? f.text : f
                const hi   = isObj ? f.highlight : false
                return (
                  <li key={text} className="flex items-start gap-2 text-[0.77rem]">
                    <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: t.accentColor }}>–</span>
                    <span className={hi ? 'text-[#6496ff] font-semibold' : 'text-[#888]'}>{text}</span>
                  </li>
                )
              })}
            </ul>

            <Link href="#download"
              className={`block w-full text-center py-3 rounded-xl font-bold text-[0.82rem]
                          tracking-wide border transition-all ${t.ctaStyle}`}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Examples table — based on TAXABLE income, not gross */}
      <div className="max-w-[780px] mx-auto mt-10 reveal">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-left">
          <div className="font-bold text-sm mb-1 text-[#F5F0E8]">📊 Ví dụ tính chi phí</div>
          <p className="text-[0.72rem] text-[#666] mb-5 leading-relaxed">
            Phí tính trên <strong className="text-[#F5F0E8]">thu nhập tính thuế</strong> (sau khi trừ
            BHXH 10.5%, giảm trừ bản thân 15.5tr/tháng, giảm trừ người phụ thuộc).
            Không phải trên lương gộp.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-[0.70rem] text-[#555] uppercase tracking-wide">
                  <th className="pb-2.5 text-left font-bold">Lương gộp</th>
                  <th className="pb-2.5 text-right font-bold">Thu nhập tính thuế</th>
                  <th className="pb-2.5 text-right font-bold">Phí Optima</th>
                  <th className="pb-2.5 text-right font-bold">Nexus (nếu thêm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {[
                  {
                    salary: '≤ 15.5tr/tháng',
                    taxable: '0đ',
                    fee: 'Miễn phí',
                    nexus: '+200,000đ/năm',
                    freeplan: true,
                  },
                  {
                    salary: '20tr/tháng',
                    taxable: '~28.8 triệu/năm',
                    fee: '~144,000đ/năm',
                    nexus: 'Đã bao gồm',
                    freeplan: false,
                  },
                  {
                    salary: '30tr/tháng',
                    taxable: '~136 triệu/năm',
                    fee: '~681,000đ/năm',
                    nexus: 'Đã bao gồm',
                    freeplan: false,
                  },
                  {
                    salary: '50tr/tháng',
                    taxable: '~351 triệu/năm',
                    fee: '~1,755,000đ/năm',
                    nexus: 'Đã bao gồm',
                    freeplan: false,
                  },
                ].map((ex) => (
                  <tr key={ex.salary}>
                    <td className="py-3 text-[#ccc] text-[0.80rem]">{ex.salary}</td>
                    <td className="py-3 text-right text-[#888] text-[0.78rem]">{ex.taxable}</td>
                    <td className="py-3 text-right font-bold text-[0.80rem]">
                      <span className={ex.freeplan ? 'text-[#1DB954]' : 'text-[#F5F0E8]'}>
                        {ex.fee}
                      </span>
                    </td>
                    <td className="py-3 text-right text-[0.75rem]">
                      <span className={ex.freeplan ? 'text-[#888]' : 'text-[#6496ff]'}>
                        {ex.nexus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.68rem] text-[#555] mt-4 leading-relaxed">
            * Ví dụ giả định 1 người, không người phụ thuộc, BHXH 10.5%, giảm trừ bản thân 15.5tr/tháng.
            Dùng <Link href="/may-tinh-thue" className="text-[#1DB954] hover:underline">máy tính thuế</Link> để
            tính chính xác theo tình huống của bạn.
          </p>
        </div>
      </div>

      <p className="text-[#666] text-xs mt-8 reveal">
        Không có phí ẩn. Không tự động gia hạn mà không thông báo. Huỷ bất kỳ lúc nào.
        Nexus Backup là tuỳ chọn với gói Miễn Phí — đã bao gồm trong gói Tiêu Chuẩn.
      </p>
    </section>
  )
}