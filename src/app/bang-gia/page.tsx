// src/app/bang-gia/page.tsx — Optima Pricing Page
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

const examples = [
  { salary: '8 triệu/tháng',  annual: '96 triệu/năm',   fee: '0đ — Miễn phí mãi mãi', highlight: true,  note: 'Công nhân, lao động phổ thông' },
  { salary: '12 triệu/tháng', annual: '144 triệu/năm',  fee: '0đ — Miễn phí mãi mãi', highlight: true,  note: 'Dưới ngưỡng thuế TNCN' },
  { salary: '20 triệu/tháng', annual: '240 triệu/năm',  fee: '2,400,000đ/năm',          highlight: false, note: '~200,000đ/tháng · Kỹ sư, kế toán' },
  { salary: '30 triệu/tháng', annual: '360 triệu/năm',  fee: '3,600,000đ/năm',          highlight: false, note: '~300,000đ/tháng · Quản lý trung cấp' },
  { salary: '50 triệu/tháng', annual: '600 triệu/năm',  fee: '6,000,000đ/năm',          highlight: false, note: '~500,000đ/tháng · Director, chuyên gia' },
]

const freeFeatures = [
  'Vault lưu chứng từ (tối đa 20 tài liệu)',
  'Scan phiếu lương QR (12 lần/năm)',
  'Máy tính thuế TNCN 2026 đầy đủ',
  'Detector "Bạn đang nộp thừa" (ước tính)',
  'Tất cả 8 danh mục giảm trừ',
  'Hoạt động 100% offline',
  'Xuất XML quyết toán chuẩn Mẫu 02/QTT-TNCN',
  'Hướng dẫn từng bước nộp lên eTax',
]

const paidFeatures = [
  'Tất cả tính năng gói Miễn Phí',
  'Vault không giới hạn chứng từ',
  'Scan phiếu lương không giới hạn',
  'Detector chính xác real-time (không phải ước tính)',
  'Wizard quyết toán từng bước đầy đủ',
  'Phát hiện tự động chứng từ bị bỏ sót',
  'Báo cáo so sánh năm trước',
  'Hỗ trợ ưu tiên qua email',
]

const nexusFeatures = [
  'Backup vault lên Nexus Cloud',
  'Đồng bộ đa thiết bị (2 điện thoại)',
  'Heartbeat + xác thực chính sách',
  'Khôi phục dữ liệu khi mất/đổi điện thoại',
  'Không lưu dữ liệu thuế nhạy cảm',
  'Huỷ bất kỳ lúc nào',
]

const faqs = [
  {
    q: 'Ngưỡng 15.5 triệu/tháng là gì?',
    a: 'Đây là mức giảm trừ gia cảnh cơ bản theo Luật Thuế TNCN 2026 (15,500,000đ/tháng). Nếu tổng thu nhập của bạn không vượt quá mức này, thu nhập tính thuế của bạn về 0 — bạn không có nghĩa vụ nộp TNCN, và Optima miễn phí hoàn toàn.',
  },
  {
    q: '1% tính trên thu nhập nào?',
    a: 'Trên tổng thu nhập gộp (gross annual income). Ví dụ: lương 20 triệu/tháng × 12 = 240 triệu/năm → phí Optima = 2,400,000đ/năm (~200,000đ/tháng). Không tính trên lợi nhuận hay thu nhập sau giảm trừ.',
  },
  {
    q: 'Tôi có thu nhập từ hai nguồn — tính thế nào?',
    a: 'Optima cộng tổng tất cả nguồn thu nhập chịu thuế (lương, thưởng, thu nhập kinh doanh cá nhân...). Nếu tổng > 15.5 triệu/tháng quy đổi, áp dụng phí 1% trên tổng đó.',
  },
  {
    q: 'Nexus Backup có bắt buộc không?',
    a: 'Hoàn toàn không. Optima hoạt động 100% offline trên thiết bị của bạn. Nexus Backup là tuỳ chọn cho những ai muốn đề phòng mất điện thoại hoặc cần đồng bộ hai máy. Không ảnh hưởng gì đến tính năng thuế.',
  },
  {
    q: 'Phí được thu như thế nào?',
    a: 'Phí được tính một lần mỗi năm khi bạn hoàn thành quyết toán thuế trong app. Thanh toán qua ví điện tử (MoMo, ZaloPay) hoặc chuyển khoản ngân hàng. Không tự động trừ tiền mà không thông báo.',
  },
  {
    q: 'Nếu tôi không quyết toán năm nay thì sao?',
    a: 'Không sao. Optima không có phí đăng ký hàng năm. Phí chỉ phát sinh khi bạn thực sự tạo hồ sơ quyết toán. Nếu bạn chỉ dùng để lưu chứng từ hoặc tra cứu thuế mà không quyết toán, phí không áp dụng.',
  },
]

export default function BangGia() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">

        {/* Hero */}
        <div className="py-20 px-page text-center bg-gradient-to-b from-[#0a120a] to-[#0D0D0D] border-b border-white/[0.07]">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">Bảng giá</p>
          <h1 className="font-display font-black text-[clamp(2.2rem,4.5vw,4rem)] tracking-tight leading-tight max-w-2xl mx-auto mb-5">
            Đơn giản. Minh bạch.{' '}
            <span className="text-[#1DB954]">Không ràng buộc.</span>
          </h1>
          <p className="text-[#888] font-light max-w-xl mx-auto leading-relaxed mb-8">
            Nếu thu nhập bạn dưới ngưỡng thuế, Optima miễn phí mãi mãi — không thẻ ngân hàng, không dùng thử, không điều kiện. Nếu bạn có nghĩa vụ thuế, bạn trả 1% thu nhập năm và gần như chắc chắn Optima tìm lại cho bạn nhiều hơn thế.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-bold text-[#1DB954] bg-[#1DB954]/8 border border-[#1DB954]/25 px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
            Thu nhập ≤ 15.5 triệu/tháng → Miễn phí mãi mãi
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-page py-16">

          {/* Two main tiers */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 reveal">

            {/* Free */}
            <div className="bg-[#141414] border border-white/[0.08] rounded-2xl p-8">
              <div className="text-[0.76rem] font-black tracking-[0.14em] uppercase text-[#888] mb-4">Miễn Phí</div>
              <div className="font-display font-black text-5xl text-[#1DB954] mb-2">0đ</div>
              <div className="text-sm text-[#1DB954]/80 font-semibold mb-1">Thu nhập ≤ 15.5 triệu/tháng</div>
              <div className="text-xs text-[#666] italic mb-6">Dưới ngưỡng thuế TNCN — miễn phí mãi mãi, không điều kiện</div>
              <ul className="space-y-2.5 mb-8">
                {freeFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.82rem] text-[#999]">
                    <span className="text-[#1DB954] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="#download"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-[0.88rem]
                           border border-white/15 text-[#F5F0E8] hover:bg-white/[0.06] transition-all">
                Tải miễn phí
              </Link>
            </div>

            {/* Paid */}
            <div className="bg-[#141414] border-2 border-[#1DB954] rounded-2xl p-8 relative
                            bg-gradient-to-b from-[#1DB954]/[0.06] to-[#141414]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1DB954] text-[#0D0D0D]
                              text-[0.78rem] font-black px-4 py-1 rounded-full tracking-widest uppercase">
                PHỔ BIẾN NHẤT
              </div>
              <div className="text-[0.76rem] font-black tracking-[0.14em] uppercase text-[#888] mb-4">Tiêu Chuẩn</div>
              <div className="font-display font-black text-5xl text-[#1DB954] mb-2">1%</div>
              <div className="text-sm font-semibold mb-1" style={{color:'#F5A623'}}>của tổng thu nhập năm</div>
              <div className="text-xs text-[#666] italic mb-6">Thu nhập &gt; 15.5 triệu/tháng · Thanh toán một lần khi quyết toán</div>
              <ul className="space-y-2.5 mb-8">
                {paidFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.82rem] text-[#999]">
                    <span className="text-[#1DB954] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="#download"
                className="block w-full text-center py-3.5 rounded-xl font-bold text-[0.88rem]
                           bg-[#1DB954] text-[#0D0D0D] hover:opacity-90 transition-all border border-[#1DB954]">
                Bắt đầu ngay
              </Link>
            </div>
          </div>

          {/* Nexus add-on */}
          <div className="bg-[#141414] border border-[#6496ff]/25 rounded-2xl p-8 mb-14 reveal">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-[0.76rem] font-black tracking-[0.14em] uppercase text-[#888] mb-3">
                  Tuỳ chọn thêm — Nexus Cloud Backup
                </div>
                <div className="font-display font-black text-4xl text-[#6496ff] mb-2">
                  $10<span className="text-base font-normal text-[#888]">/năm</span>
                </div>
                <div className="text-sm text-[#6496ff]/70 font-medium mb-1">≈ 250,000đ/năm · ~21,000đ/tháng</div>
                <div className="text-xs text-[#666] italic mb-4">Không bắt buộc. Không ảnh hưởng tính năng thuế.</div>
                <p className="text-[#888] text-sm font-light leading-relaxed">
                  Chỉ backup vault và cài đặt. Không backup dữ liệu thuế nhạy cảm — chỉ heartbeat và xác thực để đảm bảo chính sách người dùng. Dùng để khôi phục khi đổi/mất điện thoại.
                </p>
              </div>
              <ul className="space-y-2.5">
                {nexusFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.82rem] text-[#999]">
                    <span className="text-[#6496ff] font-bold flex-shrink-0 mt-0.5">–</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing examples table */}
          <div className="reveal mb-14">
            <h2 className="font-display font-black text-[clamp(1.5rem,2.5vw,2.2rem)] tracking-tight mb-8 text-center">
              Ví dụ tính phí theo mức lương
            </h2>
            <div className="bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-4 bg-[#111] border-b border-white/[0.07] px-6 py-3">
                <div className="text-[0.75rem] font-bold text-[#666] uppercase tracking-wide">Mức lương</div>
                <div className="text-[0.75rem] font-bold text-[#666] uppercase tracking-wide">Thu nhập năm</div>
                <div className="text-[0.75rem] font-bold text-[#666] uppercase tracking-wide">Phí Optima</div>
                <div className="text-[0.75rem] font-bold text-[#666] uppercase tracking-wide">Đối tượng</div>
              </div>
              {examples.map((ex, i) => (
                <div key={ex.salary}
                  className={`grid grid-cols-4 px-6 py-4 items-center
                    ${i < examples.length - 1 ? 'border-b border-white/[0.05]' : ''}
                    ${ex.highlight ? 'bg-[#1DB954]/[0.04]' : ''}`}>
                  <div className="text-sm font-semibold text-[#F5F0E8]">{ex.salary}</div>
                  <div className="text-sm text-[#888]">{ex.annual}</div>
                  <div className={`text-sm font-bold ${ex.highlight ? 'text-[#1DB954]' : 'text-[#F5A623]'}`}>
                    {ex.fee}
                  </div>
                  <div className="text-xs text-[#666]">{ex.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#555] mt-4">
              Phí thanh toán một lần khi quyết toán — không phí đăng ký hàng tháng.
            </p>
          </div>

          {/* Value framing */}
          <div className="bg-[#0A0A0A] border border-[#1DB954]/15 rounded-2xl p-8 mb-14 reveal">
            <h3 className="font-display font-black text-xl mb-6 text-center">
              Optima luôn có lợi cho bạn
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  example: 'Lương 20tr/tháng · 1 con · bảo hiểm nhân thọ',
                  refund: '~8,250,000đ',
                  fee: '2,400,000đ',
                  net: '+5,850,000đ',
                  color: '#1DB954',
                },
                {
                  example: 'Lương 30tr/tháng · bố mẹ phụ thuộc · học phí',
                  refund: '~15,000,000đ',
                  fee: '3,600,000đ',
                  net: '+11,400,000đ',
                  color: '#1DB954',
                },
                {
                  example: 'Lương 50tr/tháng · đổi công ty giữa năm',
                  refund: '~22,000,000đ',
                  fee: '6,000,000đ',
                  net: '+16,000,000đ',
                  color: '#1DB954',
                },
              ].map(v => (
                <div key={v.example} className="bg-[#141414] border border-white/[0.07] rounded-xl p-5">
                  <div className="text-xs text-[#666] mb-4 leading-relaxed">{v.example}</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Thuế được hoàn</span>
                      <span className="font-bold text-[#F5F0E8]">{v.refund}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Phí Optima (1%)</span>
                      <span className="font-bold text-[#E8381A]">−{v.fee}</span>
                    </div>
                    <div className="border-t border-white/[0.07] pt-2 flex justify-between">
                      <span className="font-bold text-[#F5F0E8]">Bạn nhận về</span>
                      <span className="font-display font-black text-lg" style={{ color: v.color }}>{v.net}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-[#555] mt-6 italic">
              * Ước tính dựa trên các giảm trừ điển hình. Số thực tế phụ thuộc vào chứng từ bạn có.
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-[760px] mx-auto reveal">
            <h2 className="font-display font-black text-[clamp(1.5rem,2.5vw,2.2rem)] tracking-tight mb-8 text-center">
              Câu hỏi thường gặp
            </h2>
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.q} className="bg-[#141414] border border-white/[0.08] rounded-xl p-6">
                  <div className="font-semibold text-[#F5F0E8] mb-3 text-[0.95rem]">{faq.q}</div>
                  <p className="text-[0.85rem] text-[#888] font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
