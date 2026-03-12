// src/components/Deductions.tsx — Full deduction categories Optima handles

const categories = [
  {
    icon: '👤',
    color: '#1DB954',
    bg: 'bg-[#1DB954]/[0.07]',
    border: 'border-[#1DB954]/20',
    title: 'Bản thân',
    amount: '15.5 triệu/tháng',
    desc: 'Giảm trừ cá nhân cơ bản — tự động áp dụng cho mọi người nộp thuế TNCN.',
    tag: 'Tự động',
    tagColor: '#1DB954',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    color: '#F5A623',
    bg: 'bg-[#F5A623]/[0.07]',
    border: 'border-[#F5A623]/20',
    title: 'Người phụ thuộc',
    amount: '4.4 triệu/người/tháng',
    desc: 'Con dưới 18 tuổi hoặc đang học đại học; bố mẹ, anh chị em không có thu nhập. Đăng ký qua cơ quan thuế.',
    tag: 'Cần đăng ký',
    tagColor: '#F5A623',
  },
  {
    icon: '🎓',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.07]',
    border: 'border-[#6496ff]/20',
    title: 'Học phí con cái',
    amount: 'Theo hóa đơn thực tế',
    desc: 'Học phí trường mầm non, tiểu học, trung học, đại học cho con là người phụ thuộc. Upload hóa đơn học phí là đủ.',
    tag: 'Upload chứng từ',
    tagColor: '#6496ff',
  },
  {
    icon: '🏥',
    color: '#E8381A',
    bg: 'bg-[#E8381A]/[0.07]',
    border: 'border-[#E8381A]/20',
    title: 'Chi phí y tế',
    amount: 'Theo hóa đơn thực tế',
    desc: 'Viện phí, thuốc kê đơn, xét nghiệm, phẫu thuật cho bản thân và người phụ thuộc. Hóa đơn điện tử được ưu tiên.',
    tag: 'Upload chứng từ',
    tagColor: '#E8381A',
  },
  {
    icon: '🛡️',
    color: '#1DB954',
    bg: 'bg-[#1DB954]/[0.07]',
    border: 'border-[#1DB954]/20',
    title: 'Bảo hiểm nhân thọ & sức khỏe',
    amount: 'Tối đa 1 triệu/tháng',
    desc: 'Phí bảo hiểm nhân thọ, bảo hiểm sức khỏe tự nguyện (không phải BHYT bắt buộc). Lưu hợp đồng và biên lai vào vault.',
    tag: 'Upload hợp đồng',
    tagColor: '#1DB954',
  },
  {
    icon: '❤️',
    color: '#F5A623',
    bg: 'bg-[#F5A623]/[0.07]',
    border: 'border-[#F5A623]/20',
    title: 'Từ thiện & nhân đạo',
    amount: 'Theo biên lai thực tế',
    desc: 'Đóng góp cho tổ chức từ thiện được nhà nước công nhận, quỹ nhân đạo, học bổng. Cần biên lai từ tổ chức nhận.',
    tag: 'Upload biên lai',
    tagColor: '#F5A623',
  },
  {
    icon: '📚',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.07]',
    border: 'border-[#6496ff]/20',
    title: 'Học nghề & đào tạo',
    amount: 'Theo hóa đơn thực tế',
    desc: 'Chi phí học thêm bằng cấp, chứng chỉ nghề nghiệp, khóa học chuyên môn cho bản thân. Áp dụng từ 2026.',
    tag: 'Upload hóa đơn',
    tagColor: '#6496ff',
  },
  {
    icon: '🏛️',
    color: '#888',
    bg: 'bg-white/[0.04]',
    border: 'border-white/[0.08]',
    title: 'BHXH / BHYT / BHTN',
    amount: 'Toàn bộ phần người lao động đóng',
    desc: 'Bảo hiểm xã hội, y tế, thất nghiệp bắt buộc. Được trừ toàn bộ khỏi thu nhập chịu thuế. Optima lấy tự động từ phiếu lương.',
    tag: 'Tự động từ phiếu lương',
    tagColor: '#888',
  },
]

export default function Deductions() {
  return (
    <section id="deductions" className="py-24 px-5 md:px-14 bg-[#0A0A0A]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[600px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">
            Các khoản được giảm trừ
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight mb-4">
            Optima tính đủ mọi khoản{' '}
            <span className="text-[#1DB954]">giảm trừ hợp lệ</span>{' '}
            theo luật 2026.
          </h2>
          <p className="text-[#888] font-light leading-relaxed text-sm">
            Phần lớn người lao động chỉ biết giảm trừ bản thân. Nhưng còn 6–7 khoản khác — và mỗi khoản đều có thể làm thuế phải nộp về 0đ.
          </p>
        </div>

        {/* Family photo anchor */}
        <div className="reveal mb-10 rounded-2xl overflow-hidden relative">
          <img
            src="/images/family-deductions.jpg"
            alt="Gia đình Việt Nam — người phụ thuộc và các khoản giảm trừ"
            className="w-full h-[220px] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/75 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div className="max-w-sm">
              <div className="font-display font-black text-xl text-white leading-tight mb-1">
                1 con + 1 hợp đồng bảo hiểm
              </div>
              <div className="text-[#1DB954] text-sm font-medium">
                = Giảm trừ 342 triệu/năm · Thuế về 0đ · Hoàn 8.25 triệu
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {categories.map((c) => (
            <div key={c.title}
              className={`${c.bg} border ${c.border} rounded-2xl p-5
                           hover:scale-[1.01] transition-transform cursor-default`}>
              <div className="text-2xl mb-3">{c.icon}</div>
              <div className="font-display font-bold text-[0.92rem] mb-1" style={{ color: c.color }}>
                {c.title}
              </div>
              <div className="text-[0.75rem] font-bold text-[#F5F0E8] mb-2">{c.amount}</div>
              <p className="text-[0.76rem] text-[#999] leading-relaxed font-light mb-3">{c.desc}</p>
              <span className="text-[0.70rem] font-bold px-2.5 py-1 rounded-full border inline-block"
                style={{ color: c.tagColor, borderColor: `${c.tagColor}35`, background: `${c.tagColor}12` }}>
                {c.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center reveal">
          <p className="text-[#666] text-sm font-light">
            Tất cả khoản giảm trừ tuân theo{' '}
            <span className="text-[#F5F0E8]">Luật Thuế TNCN sửa đổi 2026</span>
            {' '}và Nghị định 70/2025/NĐ-CP. Optima tự động cập nhật khi luật thay đổi.
          </p>
        </div>

      </div>
    </section>
  )
}
