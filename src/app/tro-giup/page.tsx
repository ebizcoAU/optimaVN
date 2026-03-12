import Link from 'next/link'
import PageShell from '@/components/PageShell'

const categories = [
  {
    icon: '🎤', color: '#E8381A', title: 'Giọng nói AI',
    articles: ['Cách thiết lập từ đánh thức', 'Danh sách lệnh giọng nói', 'Tại sao AI không nhận diện được?', 'Thay đổi ngôn ngữ / giọng vùng miền']
  },
  {
    icon: '📊', color: '#1DB954', title: 'Sổ sách & Báo cáo',
    articles: ['Cách xem sổ sách theo ngày', 'Xuất báo cáo tháng', 'Sửa / xóa giao dịch', 'Lọc giao dịch theo loại']
  },
  {
    icon: '🧾', color: '#F5A623', title: 'Thuế & Kê khai',
    articles: ['Kê khai thuế quý — từng bước', 'Xuất file XML nộp eTax', 'Quyết toán TNCN cuối năm', 'Phương pháp khoán vs lợi nhuận thực']
  },
  {
    icon: '💸', color: '#6496ff', title: 'Công nợ',
    articles: ['Ghi nợ khách hàng bằng giọng nói', 'Xem danh sách công nợ', 'Đánh dấu đã thanh toán', 'Nhắc nợ tự động hoạt động như thế nào?']
  },
  {
    icon: '👥', color: '#a78bfa', title: 'Nhân sự & Lương',
    articles: ['Thêm nhân viên mới', 'Cài đặt ca làm việc', 'Tính lương tháng', 'Xuất file chuyển khoản ngân hàng']
  },
  {
    icon: '📡', color: '#00b4d8', title: 'Đồng bộ & Offline',
    articles: ['Tại sao dữ liệu chưa đồng bộ?', 'Khôi phục dữ liệu sau khi mất điện thoại', 'Thiết lập Edge Server', 'Backup thủ công lên Nexus Cloud']
  },
]

const faqs = [
  { q: 'TalkPOS hoạt động trên điện thoại nào?', a: 'Android 8.0 trở lên. Phiên bản iOS đang phát triển, dự kiến Q2 2026.' },
  { q: 'Dữ liệu của tôi có an toàn không?', a: 'Dữ liệu được lưu trực tiếp trên thiết bị của bạn. Chỉ bạn mới có quyền truy cập. Backup cloud được mã hoá đầu-cuối.' },
  { q: 'Tôi có thể dùng TalkPOS mà không có internet không?', a: 'Có. TalkPOS hoạt động 100% offline. Dữ liệu sẽ đồng bộ lên cloud khi có kết nối.' },
  { q: 'Làm thế nào để khôi phục dữ liệu khi mất điện thoại?', a: 'Cài TalkPOS trên điện thoại mới, đăng nhập bằng số điện thoại + CCCD, chọn "Khôi phục từ cloud" — toàn bộ dữ liệu sẽ được tải về.' },
  { q: 'Tôi có thể dùng TalkPOS cho nhiều cửa hàng không?', a: 'Có, gói Kinh doanh và Doanh nghiệp hỗ trợ đa cơ sở dưới cùng một tài khoản CCCD.' },
]

export default function HelpPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Hỗ trợ</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Trung tâm trợ giúp
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl mb-8">
            Tìm câu trả lời nhanh hoặc liên hệ đội hỗ trợ của chúng tôi.
          </p>
          {/* Contact shortcuts */}
          <div className="flex flex-wrap gap-3">
            <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8381A] text-white font-bold px-5 py-2.5 rounded-lg hover:opacity-90 transition-all text-sm">
              💬 Zalo / WhatsApp hỗ trợ
            </a>
            <a href="mailto:ebizco.au@gmail.com"
              className="inline-flex items-center gap-2 border border-white/15 text-[#F5F0E8] font-medium px-5 py-2.5 rounded-lg hover:border-white/40 hover:bg-white/[0.04] transition-all text-sm">
              ✉️ Email hỗ trợ
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-page py-16 max-w-[1100px] mx-auto">
        <h2 className="font-display font-black text-2xl mb-8">Chủ đề hỗ trợ</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map((cat) => (
            <div key={cat.title}
              className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(to right, ${cat.color}60, transparent)` }} />
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 border"
                style={{ background: `${cat.color}15`, borderColor: `${cat.color}30` }}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-[1rem] mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.articles.map((a) => (
                  <li key={a}>
                    <span className="text-[0.8rem] text-[#6496ff] hover:text-[#8ab4ff] cursor-pointer transition-colors">
                      → {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="font-display font-black text-2xl mb-6">Câu hỏi thường gặp</h2>
        <div className="space-y-3 mb-14">
          {faqs.map((item) => (
            <div key={item.q} className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5">
              <p className="font-bold text-[0.95rem] mb-2">{item.q}</p>
              <p className="text-[0.85rem] text-[#888] font-light leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Escalation */}
        <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-8 text-center">
          <p className="text-2xl mb-3">🙋</p>
          <p className="font-bold text-lg mb-2">Không tìm thấy câu trả lời?</p>
          <p className="text-[#888] text-sm font-light mb-6 max-w-md mx-auto">
            Đội hỗ trợ TalkPOS sẵn sàng giúp bạn qua Zalo / WhatsApp hoặc email. Thời gian phản hồi: trong vòng 2 giờ (giờ hành chính).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8381A] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-all">
              💬 Zalo / WhatsApp: +61 412 783 132
            </a>
            <a href="mailto:ebizco.au@gmail.com"
              className="inline-flex items-center gap-2 border border-white/15 text-[#F5F0E8] font-medium px-6 py-3 rounded-lg hover:border-white/40 transition-all">
              ✉️ ebizco.au@gmail.com
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
