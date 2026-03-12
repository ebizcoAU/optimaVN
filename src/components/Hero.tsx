// src/components/Hero.tsx — Optima
import Link from 'next/link'

const stats = [
  { num: '90',   suffix: '%', label: 'Chưa bao giờ quyết toán', sub: 'nguồn: Tổng cục Thuế',  col: 'text-[#E8381A]', bg: 'bg-[#E8381A]/[0.07]' },
  { num: '8.25', suffix: 'tr', label: 'Hoàn lại trung bình',    sub: 'người có 1 con + BH',    col: 'text-[#1DB954]', bg: 'bg-[#1DB954]/[0.07]' },
  { num: '3',    suffix: ' ngày', label: 'Hoàn thuế tự động',   sub: 'theo NĐ 70/2025',        col: '',               bg: '' },
  { num: '0đ',   suffix: '',  label: 'Chi phí nếu ≤ 15.5tr/th', sub: 'miễn phí mãi mãi',       col: '',               bg: '' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-page pt-28 pb-52 md:pb-36 overflow-hidden bg-[#0D0D0D]">

      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Người lao động Việt Nam nhận lại tiền thuế"
          className="absolute inset-0 w-full h-full object-cover object-[60%_center]
                     opacity-[0.45] brightness-[1.1] saturate-[1.05] hidden md:block"
        />
        <img
          src="/images/hero-bg-mobile.jpg"
          alt="Người lao động Việt Nam"
          className="absolute inset-0 w-full h-full object-cover object-[center_bottom]
                     opacity-[0.75] brightness-[0.95] block md:hidden"
        />
        <div className="hidden md:block absolute inset-y-0 left-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/65 to-transparent" style={{ width: '60%' }} />
        {/* Mobile: light top scrim so text reads but image shows through */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/30 to-transparent
                        block md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0D0D0D]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[120px] md:mt-[160px] max-w-2xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase
                        text-[#1DB954] border border-[#1DB954]/35 px-3.5 py-1.5 rounded-full
                        bg-[#1DB954]/8 mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-[#1DB954] rounded-full animate-pulse" />
          NĐ 70/2025 · Hoàn thuế trong 3 ngày làm việc
        </div>

        <h1 className="font-display font-black text-[clamp(2rem,4vw,4.8rem)] leading-[1.05]
                       tracking-tight mb-5 text-white animate-fade-up-delay-1">
          Bạn đang nộp{' '}
          <span className="text-[#1DB954]">thừa thuế.</span>
          <br />
          Chúng tôi giúp bạn{' '}
          <span className="text-[#F5A623]">lấy lại.</span>
        </h1>

        {/* Live refund display */}
        <div className="bg-[#111]/90 border border-[#1DB954]/25 rounded-2xl px-5 py-5 mb-7
                        animate-fade-up-delay-2 max-w-md backdrop-blur-sm">
          <div className="text-[0.72rem] font-bold tracking-[0.1em] uppercase text-[#1DB954]/70 mb-3">
            💰 Ví dụ — Người lương 20 triệu/tháng, 1 con đi học
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
            <div className="text-[#888]">Đã khấu trừ năm nay</div>
            <div className="text-right font-bold text-[#F5F0E8]">8,250,000đ</div>
            <div className="text-[#888]">Thuế thực tế phải nộp</div>
            <div className="text-right font-bold text-[#1DB954]">0đ</div>
          </div>
          <div className="border-t border-white/[0.08] pt-3 flex items-center justify-between">
            <span className="text-[#888] text-sm">Có thể hoàn lại</span>
            <span className="font-display font-black text-2xl text-[#1DB954]">8,250,000đ ✨</span>
          </div>
        </div>

        <p className="text-white/75 text-[clamp(0.9rem,1.1vw,1.1rem)] leading-relaxed max-w-lg mb-8
                      font-light animate-fade-up-delay-2">
          Optima tính toán khoản nộp thừa, thu thập chứng từ từ vault của bạn, và tạo{' '}
          <strong className="text-white font-semibold">hồ sơ quyết toán XML chuẩn eTax</strong>
          {' '}— bạn chỉ cần upload lên cổng thuế.
        </p>

        <div className="flex flex-wrap gap-3 mb-10 animate-fade-up-delay-3">
          <Link href="#download"
            className="inline-flex items-center gap-2.5 bg-[#1DB954] text-[#0D0D0D] font-bold
                       px-7 py-3.5 rounded-lg hover:-translate-y-0.5
                       hover:shadow-[0_12px_36px_rgba(29,185,84,0.35)] transition-all">
            <span className="text-md leading-none">🤖</span>talkpos
            <div className="text-left leading-tight">
              <div className="text-[0.6rem] font-semibold opacity-60 leading-none mb-0.5">Google Play</div>
              <div className="text-[0.9rem]">Tải Android</div>
            </div>
          </Link>
          <Link href="#download"
            className="inline-flex items-center gap-2.5 bg-white text-[#0D0D0D] font-bold
                       px-7 py-3.5 rounded-lg hover:-translate-y-0.5
                       hover:shadow-[0_12px_36px_rgba(255,255,255,0.15)] transition-all">
            <span className="text-md leading-none">🍎</span>
            <div className="text-left leading-tight">
              <div className="text-[0.6rem] font-semibold opacity-40 leading-none mb-0.5">App Store</div>
              <div className="text-[0.9rem]">Tải iPhone</div>
            </div>
          </Link>
          <Link href="/may-tinh-thue"
            className="inline-flex items-center gap-2 text-white font-medium
                       px-6 py-3.5 rounded-lg border border-white/20
                       hover:border-white/50 hover:bg-white/[0.06] transition-all">
            Tính thuế của tôi →
          </Link>
        </div>

        <div className="flex flex-wrap gap-5 animate-fade-up-delay-4">
          {[
            'Miễn phí nếu lương ≤ 15.5tr/tháng',
            'Dữ liệu lưu trên máy bạn',
            'Không cần biết kế toán',
          ].map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm text-white/70 font-medium">
              <span className="w-2 h-2 bg-[#1DB954] rounded-full flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.10]
                      bg-[#0D0D0D]/80 backdrop-blur-md">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.10]" style={{ maxWidth: '90rem' }}>
          {stats.map((s, i) => (
            <div key={s.label}
              className={`py-5 px-6 flex flex-col items-center justify-center text-center ${s.bg}
                          ${i < 2 ? 'border-b border-white/[0.10] md:border-b-0' : ''}`}>
              <div className={`font-display font-black text-[clamp(1.4rem,2.2vw,2.6rem)]
                              tracking-[-0.04em] leading-none mb-0.5 ${s.col || 'text-white'}`}>
                {s.num}<span className={s.col ? '' : 'text-[#1DB954]'}>{s.suffix}</span>
              </div>
              <div className="text-[0.78rem] text-white/75 leading-tight">{s.label}</div>
              <div className="text-[0.70rem] text-white/45 mt-0.5 italic">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}