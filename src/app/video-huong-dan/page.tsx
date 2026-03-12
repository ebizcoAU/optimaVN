import PageShell from '@/components/PageShell'

const videos = [
  {
    id: 'getting-started',
    title: 'Bắt đầu với TalkPOS trong 5 phút',
    desc: 'Cài đặt, thiết lập từ đánh thức và thực hiện giao dịch đầu tiên bằng giọng nói.',
    duration: '5:12',
    category: 'Bắt đầu',
    categoryColor: '#1DB954',
    thumbnail: '🎬',
  },
  {
    id: 'voice-commands',
    title: 'Toàn bộ lệnh giọng nói — Hướng dẫn chi tiết',
    desc: 'Xem danh sách đầy đủ các lệnh giọng nói: bán hàng, mua hàng, ghi nợ, tra cứu.',
    duration: '8:45',
    category: 'Giọng nói AI',
    categoryColor: '#E8381A',
    thumbnail: '🎤',
  },
  {
    id: 'ledger-reports',
    title: 'Sổ sách & Xuất báo cáo tháng',
    desc: 'Xem sổ sách, lọc giao dịch, tổng kết và xuất báo cáo tháng để nộp thuế.',
    duration: '6:30',
    category: 'Sổ sách',
    categoryColor: '#1DB954',
    thumbnail: '📊',
  },
  {
    id: 'tax-filing',
    title: 'Kê khai thuế quý — Từng bước một',
    desc: 'Hướng dẫn chi tiết kê khai thuế quý và xuất file XML nộp eTax của Tổng cục Thuế.',
    duration: '11:20',
    category: 'Thuế',
    categoryColor: '#E8381A',
    thumbnail: '🧾',
  },
  {
    id: 'debt-management',
    title: 'Quản lý công nợ khách hàng',
    desc: 'Ghi nợ bằng giọng nói, xem danh sách công nợ, nhắc nợ và đánh dấu đã thanh toán.',
    duration: '4:55',
    category: 'Công nợ',
    categoryColor: '#F5A623',
    thumbnail: '💸',
  },
  {
    id: 'payroll',
    title: 'Tính lương nhân viên và xuất phiếu lương',
    desc: 'Thêm nhân viên, thiết lập lương, tính BHXH/BHYT/BHTN và xuất file chuyển khoản ngân hàng.',
    duration: '9:10',
    category: 'Nhân sự',
    categoryColor: '#a78bfa',
    thumbnail: '👥',
  },
  {
    id: 'multi-store',
    title: 'Quản lý nhiều cơ sở kinh doanh',
    desc: 'Thêm cơ sở mới, chuyển đổi giữa các cửa hàng và xem báo cáo tổng hợp toàn HKD.',
    duration: '7:40',
    category: 'Đa cơ sở',
    categoryColor: '#00b4d8',
    thumbnail: '🏪',
  },
  {
    id: 'offline-sync',
    title: 'Offline-first & Đồng bộ Nexus Cloud',
    desc: 'Hiểu cách dữ liệu được lưu trữ cục bộ và đồng bộ lên cloud — khôi phục sau khi mất điện thoại.',
    duration: '5:50',
    category: 'Offline & Sync',
    categoryColor: '#6496ff',
    thumbnail: '📡',
  },
]

export default function VideoPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Hỗ trợ</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Video hướng dẫn
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl">
            Học cách dùng TalkPOS qua video ngắn. Mỗi video tập trung vào một tính năng cụ thể.
          </p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[1100px] mx-auto">
        {/* Featured video */}
        <div className="mb-12 bg-[#1C1C1C] border border-white/[0.08] rounded-2xl overflow-hidden">
          <div className="bg-[#111] aspect-video flex items-center justify-center relative">
            <div className="text-8xl">🎬</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#E8381A]/90 flex items-center justify-center
                              hover:bg-[#E8381A] transition-colors cursor-pointer shadow-[0_8px_32px_rgba(232,56,26,0.5)]">
                <span className="text-white text-3xl ml-1">▶</span>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">5:12</div>
          </div>
          <div className="p-7">
            <span className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full border border-[#1DB954]/40 bg-[#1DB954]/12 text-[#1DB954] inline-block mb-3">
              Bắt đầu
            </span>
            <h2 className="font-display font-black text-xl mb-2">Bắt đầu với TalkPOS trong 5 phút</h2>
            <p className="text-[#888] text-sm font-light">Cài đặt, thiết lập từ đánh thức và thực hiện giao dịch đầu tiên bằng giọng nói.</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.slice(1).map((v) => (
            <div key={v.id}
              className="group bg-[#1C1C1C] border border-white/[0.08] rounded-2xl overflow-hidden
                         hover:border-[#E8381A]/35 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
              {/* Thumbnail */}
              <div className="bg-[#111] aspect-video flex items-center justify-center relative">
                <span className="text-5xl">{v.thumbnail}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-[#E8381A]/90 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl ml-0.5">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[0.65rem] px-1.5 py-0.5 rounded">{v.duration}</div>
              </div>
              <div className="p-5">
                <span className="text-[0.62rem] font-bold px-2 py-0.5 rounded-full border inline-block mb-2"
                  style={{ color: v.categoryColor, borderColor: `${v.categoryColor}40`, background: `${v.categoryColor}12` }}>
                  {v.category}
                </span>
                <h3 className="font-bold text-[0.9rem] leading-snug mb-1.5 group-hover:text-[#E8381A] transition-colors">{v.title}</h3>
                <p className="text-[0.75rem] text-[#777] font-light leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-7 text-center">
          <p className="font-bold mb-2">Cần hướng dẫn trực tiếp?</p>
          <p className="text-[#888] text-sm font-light mb-5">Đội hỗ trợ TalkPOS có thể demo trực tiếp qua Zalo Video Call.</p>
          <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8381A] text-white font-bold px-7 py-3 rounded-lg hover:opacity-90 transition-all">
            📹 Đặt lịch demo Zalo Video
          </a>
        </div>
      </section>
    </PageShell>
  )
}
