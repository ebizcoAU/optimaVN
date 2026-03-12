// src/app/luat-thue-2026/page.tsx — Optima 2026 Tax Law Reference
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const deductionLimits = [
  { category: 'Giảm trừ bản thân',                    amount: '15,500,000đ/tháng',   annual: '186,000,000đ/năm',   note: 'Áp dụng tự động cho mọi người nộp thuế' },
  { category: 'Người phụ thuộc',                       amount: '6,200,000đ/người/tháng', annual: '74,400,000đ/người/năm', note: 'Con, bố/mẹ, anh/chị/em không tự nuôi sống' },
  { category: 'Bảo hiểm nhân thọ / hưu trí tự nguyện', amount: '1,000,000đ/tháng',  annual: '12,000,000đ/năm',    note: 'Không tính BHYT/BHXH bắt buộc' },
  { category: 'Học phí con cái',                       amount: 'Theo hóa đơn thực tế', annual: 'Không giới hạn',    note: 'Mầm non, tiểu học, trung học, đại học' },
  { category: 'Chi phí y tế',                          amount: 'Theo hóa đơn thực tế', annual: 'Không giới hạn',    note: 'Bản thân và người phụ thuộc' },
  { category: 'Từ thiện & nhân đạo',                   amount: 'Theo biên lai thực tế', annual: '≤ Thu nhập chịu thuế', note: 'Tổ chức từ thiện được nhà nước công nhận' },
  { category: 'BHXH / BHYT / BHTN bắt buộc',           amount: 'Toàn bộ phần NLĐ đóng', annual: '~10.5% lương gross', note: 'Tự động trừ từ phiếu lương' },
]

const qualifyingDependents = [
  { type: 'Con ruột, con nuôi hợp pháp', condition: 'Dưới 18 tuổi; hoặc từ 18 tuổi trở lên đang học đại học/cao đẳng tại Việt Nam hoặc nước ngoài, không có thu nhập' },
  { type: 'Vợ hoặc chồng', condition: 'Không có thu nhập hoặc thu nhập không vượt 1 triệu/tháng trong năm' },
  { type: 'Bố, mẹ (cả bên ruột và bên vợ/chồng)', condition: 'Không có thu nhập hoặc thu nhập không vượt 1 triệu/tháng; ở trong độ tuổi lao động phải không có khả năng lao động' },
  { type: 'Anh, chị, em ruột', condition: 'Không có thu nhập hoặc thu nhập không vượt 1 triệu/tháng; không có khả năng lao động (tàn tật, bệnh tật)' },
  { type: 'Ông, bà nội/ngoại', condition: 'Không có thu nhập hoặc thu nhập không vượt 1 triệu/tháng; không có khả năng lao động và không có ai khác nuôi dưỡng' },
  { type: 'Người khác', condition: 'Cần chứng minh đang nuôi dưỡng trực tiếp và đủ điều kiện theo hướng dẫn cơ quan thuế' },
]

const timeline = [
  { date: '1/1/2025', event: 'Nghị định 70/2025/NĐ-CP có hiệu lực', tag: 'Đã áp dụng', color: '#1DB954' },
  { date: '1/3/2025', event: 'Hệ thống hoàn thuế tự động 3 ngày làm việc chính thức vận hành', tag: 'Đã áp dụng', color: '#1DB954' },
  { date: '31/3/2026', event: 'Hạn cuối quyết toán TNCN năm 2025 nếu ủy quyền cho công ty. Dùng mức giảm trừ cũ: 11tr/tháng (bản thân), 4.4tr/tháng (phụ thuộc)', tag: '⚠️ Deadline', color: '#E8381A' },
  { date: '30/4/2026', event: 'Hạn cuối quyết toán TNCN năm 2025 nếu cá nhân tự nộp (dời sang 2/5/2026 vì trùng lễ)', tag: '⚠️ Deadline', color: '#E8381A' },
  { date: '1/7/2026', event: 'Luật 109/2025/QH15 chính thức có hiệu lực toàn bộ. Hóa đơn điện tử bắt buộc cho mọi giao dịch.', tag: '2026', color: '#F5A623' },
  { date: '1/1/2026', event: 'Biểu thuế 5 bậc mới và mức giảm trừ mới áp dụng: bản thân 15.5tr/tháng, người phụ thuộc 6.2tr/người/tháng — tăng ~40% so với 2025', tag: 'Đang áp dụng', color: '#1DB954' },
  { date: '31/3/2027', event: 'Hạn cuối quyết toán TNCN năm 2026', tag: 'Sắp tới', color: '#888' },
]

const commonMistakes = [
  {
    mistake: 'Không đăng ký người phụ thuộc',
    impact: 'Mất 6.2 triệu/người/tháng giảm trừ — với 1 con là mất 74.4 triệu/năm (kỳ thuế 2026)',
    fix: 'Đăng ký người phụ thuộc qua cổng eTax hoặc phòng thuế quận/huyện. Optima hướng dẫn từng bước.',
  },
  {
    mistake: 'Không thu thập hóa đơn học phí',
    impact: 'Học phí trường học là chi phí giảm trừ không giới hạn — nhưng cần hóa đơn điện tử hợp lệ',
    fix: 'Yêu cầu hóa đơn điện tử từ trường ngay khi đóng học phí. Upload vào Optima Vault.',
  },
  {
    mistake: 'Đổi công ty giữa năm mà không quyết toán',
    impact: 'Mỗi công ty tính thuế độc lập, dẫn đến cả hai đều khấu trừ theo mức thấp nhất — khi cộng lại thì nộp thiếu',
    fix: 'Bắt buộc phải tự quyết toán khi có 2 nguồn thu nhập trong năm. Không được ủy quyền cho công ty.',
  },
  {
    mistake: 'Không nộp quyết toán vì nghĩ "đã ủy quyền cho công ty"',
    impact: 'Nếu có khoản giảm trừ công ty không biết (học phí, bảo hiểm cá nhân, y tế...), ủy quyền vẫn thiếu',
    fix: 'Tự làm quyết toán bổ sung nếu có chứng từ mà công ty chưa tính. Optima tạo XML bổ sung.',
  },
  {
    mistake: 'Không giữ hóa đơn y tế',
    impact: 'Viện phí, thuốc kê đơn là chi phí giảm trừ không giới hạn — nhưng hết hóa đơn là hết bằng chứng',
    fix: 'Giữ tất cả hóa đơn y tế điện tử. Từ 1/7/2026 bệnh viện phải xuất hóa đơn điện tử — lưu vào Vault.',
  },
]

export default function LuatThue2026() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">

        {/* Hero */}
        <div className="py-16 px-page text-center bg-gradient-to-b from-[#0a0a14] to-[#0D0D0D] border-b border-white/[0.07]">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#6496ff] mb-3">Tài liệu pháp lý</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            Thuế TNCN 2026 —{' '}
            <span className="text-[#1DB954]">Hướng dẫn đầy đủ</span>
          </h1>
          <p className="text-[#888] font-light max-w-xl mx-auto mb-8">
            Tất cả những gì bạn cần biết về Luật Thuế Thu nhập cá nhân 2026, Nghị định 70/2025/NĐ-CP, mức giảm trừ hiện hành và cách làm quyết toán đúng.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[#6496ff] bg-[#6496ff]/8 border border-[#6496ff]/25 px-5 py-2.5 rounded-full">
            📅 Cập nhật theo Nghị định 70/2025/NĐ-CP
          </div>
        </div>

        {/* Urgent deadline banner */}
        <div className="bg-[#E8381A]/10 border-b border-[#E8381A]/30 px-page py-4">
          <div className="max-w-[900px] mx-auto flex flex-wrap items-center gap-3">
            <span className="text-[#E8381A] font-black text-sm">⚠️ ĐANG TRONG MÙA QUYẾT TOÁN 2025</span>
            <span className="text-[#ccc] text-sm font-light">
              Quyết toán thuế <strong className="text-white">năm 2025</strong> dùng mức giảm trừ cũ:
              bản thân <strong className="text-white">11tr/tháng</strong>, phụ thuộc <strong className="text-white">4.4tr/tháng</strong>.
              Hạn nộp: <strong className="text-[#E8381A]">31/3/2026</strong> (ủy quyền) hoặc <strong className="text-[#E8381A]">2/5/2026</strong> (tự nộp).
            </span>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-page py-14 space-y-14">

          {/* Timeline */}
          <div className="reveal">
            <h2 className="font-display font-black text-[1.6rem] tracking-tight mb-8">Mốc thời gian quan trọng</h2>
            <div className="space-y-4">
              {timeline.map(t => (
                <div key={t.date} className="flex gap-5 items-start bg-[#141414] border border-white/[0.07] rounded-xl p-5">
                  <div className="flex-shrink-0 text-center min-w-[90px]">
                    <div className="font-bold text-[0.75rem] text-[#888]">{t.date}</div>
                    <div className="text-[0.68rem] font-bold px-2 py-0.5 rounded-full mt-1 inline-block"
                      style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}30` }}>
                      {t.tag}
                    </div>
                  </div>
                  <p className="text-[0.88rem] text-[#ccc] font-light leading-relaxed">{t.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deduction limits table */}
          <div className="reveal">
            <h2 className="font-display font-black text-[1.6rem] tracking-tight mb-2">Mức giảm trừ năm 2026</h2>
            <p className="text-[#888] text-sm font-light mb-8">Theo Nghị định 70/2025/NĐ-CP và Luật sửa đổi thuế TNCN</p>
            <div className="bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-[#111] border-b border-white/[0.07] px-5 py-3">
                {['Loại giảm trừ', 'Mức tháng', 'Mức năm', 'Ghi chú'].map(h => (
                  <div key={h} className="text-[0.72rem] font-bold text-[#666] uppercase tracking-wide">{h}</div>
                ))}
              </div>
              {deductionLimits.map((d, i) => (
                <div key={d.category}
                  className={`grid grid-cols-4 px-5 py-4 items-start gap-3 text-sm
                    ${i < deductionLimits.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                  <div className="font-medium text-[#F5F0E8] text-[0.85rem]">{d.category}</div>
                  <div className="text-[#1DB954] font-bold text-[0.82rem]">{d.amount}</div>
                  <div className="text-[#888] text-[0.82rem]">{d.annual}</div>
                  <div className="text-[#666] text-[0.78rem]">{d.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Who qualifies as dependent */}
          <div className="reveal">
            <h2 className="font-display font-black text-[1.6rem] tracking-tight mb-2">Ai được tính là người phụ thuộc?</h2>
            <p className="text-[#888] text-sm font-light mb-8">6,200,000đ/người/tháng (kỳ thuế 2026) — cần đăng ký với cơ quan thuế để được áp dụng</p>
            <div className="space-y-3">
              {qualifyingDependents.map(q => (
                <div key={q.type} className="bg-[#141414] border border-white/[0.08] rounded-xl p-5">
                  <div className="font-semibold text-[#F5F0E8] mb-2 text-[0.9rem]">{q.type}</div>
                  <p className="text-[0.82rem] text-[#888] font-light leading-relaxed">{q.condition}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-[#F5A623]/[0.06] border border-[#F5A623]/20 rounded-xl p-5">
              <div className="text-[#F5A623] font-bold text-sm mb-2">⚠️ Lưu ý quan trọng</div>
              <p className="text-[0.83rem] text-[#888] font-light leading-relaxed">
                Người phụ thuộc phải được đăng ký với cơ quan thuế trước khi khấu trừ. Nếu đăng ký muộn trong năm, chỉ được tính từ tháng đăng ký. Optima nhắc bạn đăng ký ngay từ đầu năm và hướng dẫn quy trình.
              </p>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="reveal">
            <h2 className="font-display font-black text-[1.6rem] tracking-tight mb-2">5 sai lầm phổ biến nhất</h2>
            <p className="text-[#888] text-sm font-light mb-8">Những lý do khiến người lao động bị mất tiền hoàn thuế hợp lệ</p>
            <div className="space-y-4">
              {commonMistakes.map((m, i) => (
                <div key={m.mistake} className="bg-[#141414] border border-white/[0.08] rounded-xl overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <div className="w-8 h-8 rounded-full bg-[#E8381A]/10 border border-[#E8381A]/30
                                    flex items-center justify-center text-[#E8381A] font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#F5F0E8] mb-1 text-[0.92rem]">{m.mistake}</div>
                      <p className="text-[0.80rem] text-[#888] font-light leading-relaxed mb-3">{m.impact}</p>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1DB954] font-bold text-xs flex-shrink-0 mt-0.5">→ Cách xử lý:</span>
                        <span className="text-[0.80rem] text-[#1DB954]/80 font-light leading-relaxed">{m.fix}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* XML submission guide */}
          <div className="reveal bg-[#141414] border border-[#6496ff]/25 rounded-2xl p-8">
            <h2 className="font-display font-black text-[1.4rem] tracking-tight mb-5">
              📄 Cách nộp quyết toán TNCN trên eTax
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-bold text-[0.9rem] text-[#6496ff] mb-3">Phương pháp 1: Tự điền mẫu trên eTax</h3>
                <ol className="space-y-2">
                  {[
                    'Đăng nhập cổng eTax (thuedientu.gdt.gov.vn)',
                    'Chọn "Khai thuế" → "Quyết toán TNCN" → "Mẫu 02/QTT-TNCN"',
                    'Điền từng ô thủ công theo chứng từ',
                    'Kiểm tra và gửi',
                    'Theo dõi trạng thái hoàn thuế (3 ngày làm việc)',
                  ].map((s, i) => (
                    <li key={s} className="flex items-start gap-2.5 text-[0.82rem] text-[#888]">
                      <span className="text-[#6496ff] font-bold flex-shrink-0 min-w-[18px]">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-bold text-[0.9rem] text-[#1DB954] mb-3">Phương pháp 2: Upload XML từ Optima</h3>
                <ol className="space-y-2">
                  {[
                    'Nhập dữ liệu vào Optima (scan QR + vault)',
                    'Optima tạo file XML Mẫu 02/QTT-TNCN đầy đủ',
                    'Đăng nhập eTax → chọn "Nộp hồ sơ XML"',
                    'Upload file XML từ Optima — tất cả trường đã điền sẵn',
                    'Xác nhận và gửi trong 2 phút',
                  ].map((s, i) => (
                    <li key={s} className="flex items-start gap-2.5 text-[0.82rem] text-[#888]">
                      <span className="text-[#1DB954] font-bold flex-shrink-0 min-w-[18px]">{i + 1}.</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bg-[#1DB954]/[0.06] border border-[#1DB954]/15 rounded-xl p-4">
              <p className="text-[0.82rem] text-[#888]">
                <strong className="text-[#1DB954]">Lưu ý:</strong> Optima không tương tác trực tiếp với hệ thống của Tổng cục Thuế. Bạn tự upload file XML lên eTax — điều này có nghĩa là bạn luôn kiểm soát hoàn toàn việc nộp hồ sơ, và không có vấn đề về chứng chỉ điện tử hay uỷ quyền bên thứ ba.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="reveal text-center">
            <h3 className="font-display font-black text-2xl mb-4">
              Sẵn sàng làm quyết toán?
            </h3>
            <p className="text-[#888] mb-8 text-sm font-light max-w-md mx-auto">
              Optima hướng dẫn bạn từng bước, tính đúng mọi khoản giảm trừ và tạo file XML sẵn sàng upload lên eTax.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/"
                className="inline-flex items-center gap-2 bg-[#1DB954] text-[#0D0D0D] font-bold
                           px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
                💚 Tải Optima miễn phí
              </Link>
              <Link href="/may-tinh-thue"
                className="inline-flex items-center gap-2 border border-white/20 text-[#F5F0E8]
                           font-semibold px-8 py-3.5 rounded-xl hover:border-white/40 hover:bg-white/[0.05] transition-all">
                🧮 Thử máy tính thuế
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}