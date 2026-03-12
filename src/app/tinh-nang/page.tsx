// src/app/tinh-nang/page.tsx
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import PageShell from '@/components/PageShell'

const features = [
  {
    icon: '🔍',
    color: '#1DB954',
    bg: 'bg-[#1DB954]/[0.07]',
    border: 'border-[#1DB954]/20',
    title: 'Detector "Bạn đang nộp thừa"',
    desc: 'Banner trực tiếp trên màn hình chính. Cập nhật real-time khi bạn thêm chứng từ hay phiếu lương mới. Hiển thị: đã khấu trừ, thuế thực tế, số tiền có thể hoàn — không phải ước đoán, mà tính theo luật thực.',
    badge: 'Tính năng cốt lõi',
  },
  {
    icon: '📱',
    color: '#F5A623',
    bg: 'bg-[#F5A623]/[0.07]',
    border: 'border-[#F5A623]/20',
    title: 'Payslip QR Bridge',
    desc: 'Scan QR từ phiếu lương TalkPOS: dữ liệu lương, BHXH, thuế khấu trừ vào thẳng — ký HMAC-SHA256, không giả được. Nhập thủ công hoặc OCR ảnh chụp nếu công ty không dùng TalkPOS.',
    badge: 'Không cần gõ tay',
  },
  {
    icon: '🗂️',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.07]',
    border: 'border-[#6496ff]/20',
    title: 'Document Vault',
    desc: 'Lưu CCCD, bằng cấp, hóa đơn y tế, học phí, hợp đồng bảo hiểm, biên lai từ thiện. AI tự phân loại và gán vào đúng danh mục giảm trừ. Offline-first SQLite — dữ liệu trên máy bạn.',
    badge: 'AI phân loại tự động',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    color: '#1DB954',
    bg: 'bg-[#1DB954]/[0.07]',
    border: 'border-[#1DB954]/20',
    title: 'Quản lý người phụ thuộc',
    desc: 'Khai báo con, bố mẹ, anh chị em. Hướng dẫn đăng ký người phụ thuộc với cơ quan thuế nếu chưa làm. 4.4 triệu/người/tháng — tự động tính vào tổng giảm trừ.',
    badge: 'Hướng dẫn đăng ký',
  },
  {
    icon: '🧮',
    color: '#F5A623',
    bg: 'bg-[#F5A623]/[0.07]',
    border: 'border-[#F5A623]/20',
    title: 'Máy tính thuế TNCN 2026',
    desc: 'Nhập lương, dependents, chi phí → xem ngay thuế phải nộp và số tiền được hoàn. Biểu thuế lũy tiến 7 bậc, đầy đủ các khoản giảm trừ theo Luật 2026. Có thể dùng mà không cần cài app.',
    badge: 'Công khai, không cần đăng nhập',
  },
  {
    icon: '📄',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.07]',
    border: 'border-[#6496ff]/20',
    title: 'Xuất XML quyết toán chuẩn eTax',
    desc: 'Tạo file Mẫu 02/QTT-TNCN đúng schema của Tổng cục Thuế. Bạn chỉ cần đăng nhập eTax và upload — không cần điền mẫu. Kèm PDF tóm tắt để kiểm tra trước khi nộp.',
    badge: 'Chuẩn Mẫu 02/QTT-TNCN',
  },
  {
    icon: '📴',
    color: '#1DB954',
    bg: 'bg-[#1DB954]/[0.07]',
    border: 'border-[#1DB954]/20',
    title: 'Offline-First',
    desc: 'Mọi tính năng hoạt động không cần internet. SQLite local, không phụ thuộc server. Dành cho công nhân khu công nghiệp vùng sâu hay nơi sóng yếu.',
    badge: 'Không cần mạng',
  },
  {
    icon: '☁️',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.07]',
    border: 'border-[#6496ff]/20',
    title: 'Nexus Cloud Backup',
    desc: 'Tuỳ chọn $10/năm. Backup vault và cài đặt lên Nexus Cloud — khôi phục khi đổi điện thoại. Không backup dữ liệu thuế nhạy cảm, chỉ heartbeat + auth.',
    badge: 'Tuỳ chọn · $10/năm',
  },
]

export default function TinhNang() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <PageShell
        label="Tính năng"
        title="Mọi công cụ bạn cần để lấy lại tiền thuế."
        subtitle="Từ phát hiện đến hồ sơ quyết toán — Optima xử lý toàn bộ quy trình."
        accentColor="#1DB954"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto mt-14">
          {features.map((f) => (
            <div key={f.title}
              className={`${f.bg} border ${f.border} rounded-2xl p-6 reveal
                           hover:scale-[1.01] transition-transform`}>
              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="font-display font-bold text-[1rem] mb-2" style={{ color: f.color }}>
                {f.title}
              </div>
              <p className="text-[0.82rem] text-[#999] leading-relaxed font-light mb-4">{f.desc}</p>
              <span className="text-[0.72rem] font-bold px-2.5 py-1 rounded-full border inline-block"
                style={{ color: f.color, borderColor: `${f.color}35`, background: `${f.color}12` }}>
                {f.badge}
              </span>
            </div>
          ))}
        </div>
      </PageShell>
      <Footer />
    </>
  )
}