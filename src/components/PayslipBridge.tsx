// src/components/PayslipBridge.tsx — Optima QR payslip connection

export default function PayslipBridge() {
  return (
    <section id="payslip" className="py-24 px-5 md:px-14 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — photo */}
          <div className="reveal order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src="/images/payslip-qr.jpg"
                alt="Scan QR phiếu lương để nhập dữ liệu vào Optima"
                className="w-full h-[340px] object-cover object-center"
              />
              {/* Overlay: QR scan confirmed */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#0D0D0D]/90 border border-[#1DB954]/30 rounded-2xl px-5 py-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/40
                                     flex items-center justify-center text-[#1DB954] font-bold text-sm">✓</div>
                    <div className="font-bold text-sm text-[#F5F0E8]">Phiếu lương tháng 12/2025 đã nhập</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[0.72rem]">
                    <div>
                      <div className="text-[#888]">Lương gross</div>
                      <div className="font-bold text-[#F5F0E8]">20.0tr</div>
                    </div>
                    <div>
                      <div className="text-[#888]">BHXH</div>
                      <div className="font-bold text-[#F5F0E8]">1.4tr</div>
                    </div>
                    <div>
                      <div className="text-[#888]">Thuế khấu trừ</div>
                      <div className="font-bold text-[#E8381A]">687K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal order-1 md:order-2">
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#F5A623] mb-3">
              Payslip QR Bridge
            </p>
            <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight mb-5">
              Không gõ tay —{' '}
              <span className="text-[#F5A623]">chỉ cần scan.</span>
            </h2>
            <p className="text-[#888] font-light leading-relaxed mb-6">
              Nếu công ty bạn dùng TalkPOS, mỗi tháng họ tạo một phiếu lương QR chứa đủ thông tin: lương gross, BHXH, thuế đã khấu trừ, phụ cấp. Bạn scan QR bằng Optima — dữ liệu vào thẳng, không cần nhập tay, không sai số.
            </p>

            <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-5 mb-6">
              <div className="text-[0.75rem] font-bold tracking-widest uppercase text-[#666] mb-3">
                Nếu công ty bạn không dùng TalkPOS
              </div>
              <p className="text-[0.83rem] text-[#999] font-light leading-relaxed">
                Không sao. Bạn nhập phiếu lương thủ công (mất ~2 phút) hoặc upload ảnh chụp phiếu lương — OCR tự đọc con số. Kết quả như nhau.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: '🔐', text: 'QR ký HMAC-SHA256 — không giả mạo được' },
                { icon: '📴', text: 'Hoạt động offline — không cần mạng' },
                { icon: '💾', text: 'Lưu local SQLite — dữ liệu của bạn, trên máy bạn' },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3 text-sm text-[#999]">
                  <span className="text-lg flex-shrink-0">{f.icon}</span>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
