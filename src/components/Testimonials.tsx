// src/components/Testimonials.tsx — Optima

const testimonials = [
  {
    quote: 'Con tôi học lớp 3, tôi đóng học phí cả năm mà không biết là được trừ thuế. Optima tìm ra và làm hết — tôi chỉ cần upload hóa đơn.',
    name: 'Nguyễn Thị Lan',
    role: 'Kế toán viên · TP.HCM',
    refund: 'Hoàn lại: 6,400,000đ',
    avatar: '👩‍💼',
  },
  {
    quote: 'Tôi đổi công ty tháng 7. Không biết hai bên đều khấu trừ thuế theo lương riêng, không cộng lại. Optima phát hiện khoản chồng lấp và làm quyết toán cho tôi.',
    name: 'Trần Văn Minh',
    role: 'Kỹ sư phần mềm · Hà Nội',
    refund: 'Hoàn lại: 9,150,000đ',
    avatar: '👨‍💻',
  },
  {
    quote: 'Tôi nuôi bố mẹ nhưng chưa bao giờ đăng ký người phụ thuộc. Optima hướng dẫn từng bước đăng ký và tính lại từ đầu năm. Tiền hoàn về nhiều hơn tôi nghĩ.',
    name: 'Phạm Thị Hương',
    role: 'Giáo viên · Đà Nẵng',
    refund: 'Hoàn lại: 11,200,000đ',
    avatar: '👩‍🏫',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-5 md:px-14 bg-[#0D0D0D]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[520px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">
            Người dùng thực
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight">
            Tiền thật. Được hoàn thật.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 reveal">
          {testimonials.map((t) => (
            <div key={t.name}
              className="bg-[#141414] border border-white/[0.08] rounded-2xl p-7
                           hover:border-[#1DB954]/25 transition-colors">
              <div className="text-[#1DB954] text-2xl mb-4">❝</div>
              <p className="text-[0.88rem] text-[#ccc] leading-relaxed font-light mb-6 italic">
                {t.quote}
              </p>
              <div className="border-t border-white/[0.07] pt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/25
                                   flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.85rem] text-[#F5F0E8]">{t.name}</div>
                    <div className="text-[0.75rem] text-[#666]">{t.role}</div>
                  </div>
                </div>
                <div className="text-[0.75rem] font-bold text-[#1DB954] bg-[#1DB954]/10
                                 border border-[#1DB954]/20 px-2.5 py-1.5 rounded-lg text-right">
                  {t.refund}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
