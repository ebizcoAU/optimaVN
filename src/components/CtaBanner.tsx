// src/components/CtaBanner.tsx — Optima
import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section id="download" className="py-24 px-5 md:px-14 bg-[#0A0A0A]">
      <div className="max-w-[820px] mx-auto text-center reveal">

        <div className="bg-gradient-to-b from-[#1DB954]/10 to-[#141414]
                        border border-[#1DB954]/20 rounded-3xl px-8 py-14">

          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                          text-[#1DB954] border border-[#1DB954]/30 px-3.5 py-1.5 rounded-full
                          bg-[#1DB954]/8 mb-8">
            <span className="w-1.5 h-1.5 bg-[#1DB954] rounded-full animate-pulse" />
            Android &amp; iOS — Tải ngay miễn phí
          </div>

          <h2 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-5">
            Tiền của bạn đang chờ.{' '}
            <span className="text-[#1DB954]">Lấy lại thôi.</span>
          </h2>

          <p className="text-[#888] font-light leading-relaxed max-w-lg mx-auto mb-10 text-[1rem]">
            Miễn phí nếu thu nhập ≤ 15.5 triệu/tháng.
            Dữ liệu của bạn, trên máy bạn — không ai xem được.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="#"
              className="inline-flex items-center justify-center gap-3 bg-[#1DB954] text-[#0D0D0D]
                         font-bold px-9 py-4 rounded-xl text-[0.95rem]
                         hover:shadow-[0_16px_40px_rgba(29,185,84,0.3)] hover:-translate-y-0.5 transition-all">
              <span className="text-xl leading-none">🤖</span>
              <div className="text-left">
                <div className="text-[0.65rem] font-semibold opacity-70 leading-none mb-0.5">Google Play</div>
                <div>Tải Android</div>
              </div>
            </Link>
            <Link href="#"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#0D0D0D]
                         font-bold px-9 py-4 rounded-xl text-[0.95rem]
                         hover:shadow-[0_16px_40px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 transition-all">
              <span className="text-xl leading-none">🍎</span>
              <div className="text-left">
                <div className="text-[0.65rem] font-semibold opacity-50 leading-none mb-0.5">App Store</div>
                <div>Tải iPhone</div>
              </div>
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#666]">
            {[
              '✓ Dữ liệu lưu offline trên máy bạn',
              '✓ Không cần tài khoản để bắt đầu',
              '✓ Tuân thủ NĐ 70/2025',
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          {/* Ecosystem link */}
          <div className="mt-10 pt-8 border-t border-white/[0.07]">
            <p className="text-[0.78rem] text-[#555]">
              Đang kinh doanh hộ gia đình?{' '}
              <Link href="https://talkpos.vn" target="_blank"
                className="text-[#F5A623] hover:text-[#F5A623]/80 font-semibold transition-colors">
                TalkPOS dành cho bạn →
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}