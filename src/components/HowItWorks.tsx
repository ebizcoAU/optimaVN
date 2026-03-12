// src/components/HowItWorks.tsx — Optima

const steps = [
  {
    num: '01',
    icon: '📱',
    color: '#1DB954',
    title: 'Scan phiếu lương qua QR',
    desc: 'Yêu cầu phiếu lương QR từ công ty (nếu dùng TalkPOS) hoặc nhập thủ công. Optima đọc lương gross, thuế đã khấu trừ, BHXH — không cần gõ tay.',
    detail: 'Dữ liệu được ký HMAC-SHA256, lưu vào SQLite trên thiết bị của bạn.',
  },
  {
    num: '02',
    icon: '👨‍👩‍👧',
    color: '#F5A623',
    title: 'Thêm gia đình & chứng từ',
    desc: 'Khai báo người phụ thuộc (con, bố mẹ). Upload học phí, hóa đơn y tế, hợp đồng bảo hiểm, biên lai từ thiện. AI tự phân loại và gán vào đúng danh mục giảm trừ.',
    detail: 'Mỗi loại chi phí được ánh xạ đúng với điều khoản giảm trừ theo NĐ 70/2025.',
  },
  {
    num: '03',
    icon: '🧮',
    color: '#6496ff',
    title: 'Xem số tiền được hoàn',
    desc: 'Banner "Bạn đang nộp thừa" hiển thị ngay khi bạn thêm dữ liệu. Tính toán real-time theo đúng biểu thuế lũy tiến và tất cả giảm trừ hiện hành năm 2026.',
    detail: 'Số liệu cập nhật tức thì — không cần chờ cuối năm.',
  },
  {
    num: '04',
    icon: '📄',
    color: '#1DB954',
    title: 'Xuất XML & nộp lên eTax',
    desc: 'Optima tạo file XML theo đúng chuẩn Mẫu 02/QTT-TNCN của Tổng cục Thuế. Bạn đăng nhập eTax, upload file, xác nhận — xong. Hoàn thuế trong 3 ngày làm việc.',
    detail: 'Bạn không cần biết điền mẫu — Optima điền sẵn mọi trường cho bạn.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-5 md:px-14 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[560px] mx-auto reveal mb-16">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">
            Cách hoạt động
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight">
            4 bước. Không cần biết kế toán.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[3.5rem] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)]
                           h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent z-0" />

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {steps.map((s) => (
              <div key={s.num} className="reveal">
                {/* Step number bubble */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl
                                   border-2 mb-3 bg-[#111]"
                       style={{ borderColor: `${s.color}40` }}>
                    {s.icon}
                  </div>
                  <div className="font-display font-black text-4xl leading-none"
                       style={{ color: `${s.color}25` }}>
                    {s.num}
                  </div>
                </div>

                <div className="bg-[#141414] border border-white/[0.07] rounded-2xl p-5
                                 hover:border-white/[0.14] transition-colors">
                  <h3 className="font-display font-bold text-[0.95rem] mb-2 leading-snug"
                      style={{ color: s.color }}>
                    {s.title}
                  </h3>
                  <p className="text-[0.82rem] text-[#999] leading-relaxed font-light mb-3">
                    {s.desc}
                  </p>
                  <div className="text-[0.72rem] text-[#666] italic border-t border-white/[0.06] pt-3">
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax declaration photo */}
        <div className="mt-14 reveal rounded-2xl overflow-hidden relative">
          <img
            src="/images/tax-declaration.jpg"
            alt="Làm quyết toán thuế TNCN với Optima — đơn giản và tự tin"
            className="w-full h-[260px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-[#0D0D0D]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <div className="max-w-md">
              <div className="text-[#1DB954] text-xs font-bold tracking-widest uppercase mb-2">
                Kết quả thực tế
              </div>
              <div className="font-display font-black text-2xl text-white leading-tight mb-2">
                File XML sẵn sàng.<br />
                Upload lên eTax. Xong.
              </div>
              <div className="text-[#ccc] text-sm font-light">
                Không cần hiểu biết pháp lý. Optima đọc luật — bạn nhận tiền.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
