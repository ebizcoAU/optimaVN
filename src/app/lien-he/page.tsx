import PageShell from '@/components/PageShell'

export default function ContactPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Liên hệ</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Chúng tôi luôn sẵn sàng hỗ trợ
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl">
            Liên hệ qua Zalo, WhatsApp hoặc email — đội ngũ TalkPOS sẽ phản hồi trong vòng 2 giờ.
          </p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact cards */}
          <div className="space-y-4">
            <h2 className="font-display font-black text-xl mb-6">Kênh hỗ trợ</h2>

            {/* Zalo / WhatsApp — primary */}
            <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
              className="group flex items-start gap-5 bg-[#E8381A]/[0.07] border border-[#E8381A]/30 rounded-2xl p-6
                         hover:border-[#E8381A]/60 hover:-translate-y-0.5 transition-all duration-200 block">
              <div className="w-14 h-14 rounded-xl bg-[#E8381A]/15 border border-[#E8381A]/25 flex items-center justify-center text-3xl flex-shrink-0">
                💬
              </div>
              <div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#E8381A] mb-1">Nhanh nhất</div>
                <div className="font-bold text-[1rem] mb-1">Zalo / WhatsApp</div>
                <div className="text-[#888] text-sm font-light mb-2">Phản hồi trong vòng 30 phút (giờ hành chính)</div>
                <div className="font-bold text-[#F5F0E8]">+61 412 783 132</div>
                <div className="text-xs text-[#555] mt-1">Scan QR hoặc nhấn để mở Zalo</div>
              </div>
            </a>

            {/* Vietnam phone */}
            <a href="tel:+84328160528"
              className="group flex items-start gap-5 bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6
                         hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 block">
              <div className="w-14 h-14 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/25 flex items-center justify-center text-3xl flex-shrink-0">
                📞
              </div>
              <div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#F5A623] mb-1">Hỗ trợ tại Việt Nam</div>
                <div className="font-bold text-[1rem] mb-1">Điện thoại / Zalo VN</div>
                <div className="text-[#888] text-sm font-light mb-2">Thứ 2 – Thứ 6: 8:00 – 17:00 ICT</div>
                <div className="font-bold text-[#F5F0E8]">+84 328 160 528</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:ebizco.au@gmail.com"
              className="group flex items-start gap-5 bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6
                         hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 block">
              <div className="w-14 h-14 rounded-xl bg-[#1DB954]/10 border border-[#1DB954]/25 flex items-center justify-center text-3xl flex-shrink-0">
                ✉️
              </div>
              <div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-[#1DB954] mb-1">Email</div>
                <div className="font-bold text-[1rem] mb-1">Gửi email</div>
                <div className="text-[#888] text-sm font-light mb-2">Phản hồi trong vòng 24 giờ</div>
                <div className="font-bold text-[#F5F0E8]">ebizco.au@gmail.com</div>
              </div>
            </a>
          </div>

          {/* Office info */}
          <div>
            <h2 className="font-display font-black text-xl mb-6">Văn phòng</h2>

            <div className="space-y-4">
              {/* Vietnam office */}
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇻🇳</span>
                  <div>
                    <div className="font-bold">Văn phòng Việt Nam</div>
                    <div className="text-[0.68rem] text-[#E8381A] font-bold uppercase tracking-wide">Địa chỉ tạm thời</div>
                  </div>
                </div>
                <p className="text-[#888] text-sm font-light leading-relaxed">
                  497/62 Thống Nhất<br />
                  Phường An Hội Tây, Gò Vấp<br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
                <p className="text-[0.72rem] text-[#555] mt-3 italic">
                  * Đang trong quá trình đăng ký thành lập pháp nhân tại Việt Nam.
                </p>
              </div>

              {/* Australia HQ */}
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇦🇺</span>
                  <div>
                    <div className="font-bold">Trụ sở Úc — Ebizco Australia Pty Ltd</div>
                    <div className="text-[0.68rem] text-[#6496ff] font-bold uppercase tracking-wide">Công ty mẹ</div>
                  </div>
                </div>
                <p className="text-[#888] text-sm font-light leading-relaxed">
                  Unit 1/9 Boag Rd<br />
                  Morley WA 6062<br />
                  Australia
                </p>
                <div className="mt-3 pt-3 border-t border-white/[0.06] space-y-1">
                  <p className="text-[0.72rem] text-[#555]">ABN: 44 091 466 858</p>
                  <p className="text-[0.72rem] text-[#555]">
                    <a href="https://ebizco.com.au" target="_blank" rel="noopener noreferrer"
                      className="text-[#6496ff] hover:underline">ebizco.com.au</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5">
                <div className="font-bold text-sm mb-3">🕐 Giờ hỗ trợ</div>
                <div className="space-y-1.5">
                  {[
                    { day: 'Thứ 2 – Thứ 6', hours: '08:00 – 17:00 ICT' },
                    { day: 'Thứ 7', hours: '09:00 – 12:00 ICT' },
                    { day: 'Chủ nhật & Lễ', hours: 'Chỉ hỗ trợ khẩn cấp qua Zalo' },
                  ].map(r => (
                    <div key={r.day} className="flex justify-between text-[0.8rem]">
                      <span className="text-[#888]">{r.day}</span>
                      <span className="text-[#aaa] font-medium">{r.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
