import PageShell from '@/components/PageShell'

const quarters = [
  {
    period: 'Q2 2026',
    status: 'upcoming',
    statusLabel: 'Sắp ra mắt',
    statusColor: '#E8381A',
    items: [
      { icon: '🤖', title: 'AI dự báo tồn kho', desc: 'Phân tích xu hướng bán hàng và đề xuất lượng hàng cần nhập mỗi tuần.' },
      { icon: '📱', title: 'Ứng dụng iOS (Beta)', desc: 'Phiên bản iPhone đầy đủ tính năng, bao gồm giọng nói AI và sổ sách.' },
      { icon: '🔗', title: 'Tích hợp Shopee / TikTok Shop', desc: 'Đồng bộ đơn hàng online vào sổ sách TalkPOS tự động.' },
    ]
  },
  {
    period: 'Q3 2026',
    status: 'planned',
    statusLabel: 'Đang lên kế hoạch',
    statusColor: '#F5A623',
    items: [
      { icon: '💳', title: 'Tích hợp thanh toán POS vật lý', desc: 'Kết nối máy POS vật lý (Visa/Mastercard/NAPAS) với TalkPOS.' },
      { icon: '📦', title: 'Quản lý kho nâng cao', desc: 'Theo dõi tồn kho theo lô, hạn sử dụng và vị trí lưu kho.' },
      { icon: '🌐', title: 'Giao diện web (Dashboard)', desc: 'Truy cập sổ sách và báo cáo từ trình duyệt máy tính.' },
    ]
  },
  {
    period: 'Q4 2026',
    status: 'exploring',
    statusLabel: 'Đang nghiên cứu',
    statusColor: '#6496ff',
    items: [
      { icon: '🇻🇳', title: 'Tích hợp VNeID', desc: 'Xác thực chủ HKD trực tiếp qua ứng dụng VNeID của Bộ Công an.' },
      { icon: '🏦', title: 'Đối soát ngân hàng tự động', desc: 'Kết nối Open Banking để đối chiếu giao dịch chuyển khoản với sổ sách.' },
      { icon: '📊', title: 'Báo cáo BI (Business Intelligence)', desc: 'Dashboard phân tích sâu cho chuỗi cửa hàng Doanh nghiệp.' },
    ]
  },
  {
    period: '2027+',
    status: 'future',
    statusLabel: 'Tầm nhìn dài hạn',
    statusColor: '#a78bfa',
    items: [
      { icon: '🌏', title: 'Mở rộng Đông Nam Á', desc: 'Hỗ trợ tiếng Anh, Bahasa Indonesia và Tiếng Thái. Tuân thủ thuế địa phương.' },
      { icon: '🤝', title: 'Marketplace nhà cung cấp', desc: 'Kết nối tiểu thương trực tiếp với nhà cung cấp, đặt hàng bằng giọng nói.' },
      { icon: '💡', title: 'AI tư vấn kinh doanh', desc: 'Phân tích lợi nhuận và đề xuất chiến lược định giá, thời điểm bán hàng tốt nhất.' },
    ]
  },
]

const done = [
  'Giọng nói AI GPT-4o với từ đánh thức tùy chỉnh',
  'Sổ sách điện tử & báo cáo tự động',
  'Kê khai thuế tháng, quý, năm, TNCN',
  'Hóa đơn điện tử (E-Invoice)',
  'Quản lý nhân sự & lương BHXH/BHYT/BHTN',
  'Đa cơ sở kinh doanh (1 tài khoản CCCD)',
  'Offline-first + Nexus Cloud sync',
  'Edge Server cho chuỗi cửa hàng',
  'Quick Receipts (in biên lai Bluetooth)',
  'AI Revenue Insights',
]

export default function RoadmapPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Lộ trình phát triển</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Roadmap TalkPOS 2026–2027
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl">
            Chúng tôi xây dựng TalkPOS dựa trên phản hồi thực tế của tiểu thương. Đây là những gì đang đến.
          </p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[1100px] mx-auto">
        {/* Already done */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-[#1DB954] rounded-full" />
            <h2 className="font-display font-black text-xl text-[#1DB954]">Đã hoàn thành ✓</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {done.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#1DB954]/[0.05] border border-[#1DB954]/15 rounded-xl px-4 py-3">
                <span className="text-[#1DB954] font-bold flex-shrink-0">✓</span>
                <span className="text-[0.82rem] text-[#aaa]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future quarters */}
        <div className="space-y-10">
          {quarters.map((q) => (
            <div key={q.period}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: q.statusColor }} />
                <h2 className="font-display font-black text-xl">{q.period}</h2>
                <span className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full border"
                  style={{ color: q.statusColor, borderColor: `${q.statusColor}40`, background: `${q.statusColor}12` }}>
                  {q.statusLabel}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {q.items.map((item) => (
                  <div key={item.title}
                    className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(to right, ${q.statusColor}60, transparent)` }} />
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <div className="font-bold text-[0.92rem] mb-1.5">{item.title}</div>
                    <p className="text-[0.78rem] text-[#777] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-7 text-center">
          <p className="font-bold mb-2">Có ý tưởng tính năng mới?</p>
          <p className="text-[#888] text-sm font-light mb-5">
            Chúng tôi luôn lắng nghe phản hồi từ tiểu thương. Gửi đề xuất qua Zalo hoặc email.
          </p>
          <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8381A] text-white font-bold px-7 py-3 rounded-lg hover:opacity-90 transition-all">
            💬 Gửi đề xuất tính năng
          </a>
        </div>
      </section>
    </PageShell>
  )
}
