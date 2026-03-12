import PageShell from '@/components/PageShell'

const releases = [
  {
    version: 'v1.4.0',
    date: 'Tháng 3, 2026',
    type: 'major',
    label: 'Tính năng mới',
    labelColor: '#1DB954',
    items: [
      { tag: 'Mới', tagColor: '#1DB954', text: 'Hóa đơn điện tử (E-Invoice) tích hợp nhà cung cấp được Tổng cục Thuế chấp thuận' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Quick Receipts — in biên lai nhiệt nhanh qua Bluetooth' },
      { tag: 'Cải tiến', tagColor: '#F5A623', text: 'Nhận diện giọng nói tiếng Việt cải thiện thêm 18% độ chính xác' },
      { tag: 'Cải tiến', tagColor: '#F5A623', text: 'Giao diện sổ sách được thiết kế lại — rõ hơn, nhanh hơn' },
      { tag: 'Sửa lỗi', tagColor: '#888', text: 'Sửa lỗi đồng bộ hàng chờ khi pin yếu dưới 5%' },
    ]
  },
  {
    version: 'v1.3.2',
    date: 'Tháng 2, 2026',
    type: 'patch',
    label: 'Sửa lỗi',
    labelColor: '#888',
    items: [
      { tag: 'Sửa lỗi', tagColor: '#888', text: 'Sửa lỗi tính thuế TNCN khi có nhiều người phụ thuộc' },
      { tag: 'Sửa lỗi', tagColor: '#888', text: 'Khắc phục sự cố đăng nhập trên Android 12' },
      { tag: 'Cải tiến', tagColor: '#F5A623', text: 'Tăng tốc tải trang sổ sách lên 40%' },
    ]
  },
  {
    version: 'v1.3.0',
    date: 'Tháng 1, 2026',
    type: 'major',
    label: 'Tính năng mới',
    labelColor: '#1DB954',
    items: [
      { tag: 'Mới', tagColor: '#1DB954', text: 'Quản lý nhân sự & lương — hỗ trợ đến 15 nhân viên' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Xuất file chuyển khoản ngân hàng (Vietcombank, Techcombank, MB)' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'AI Revenue Insights — phân tích doanh thu và đề xuất tối ưu' },
      { tag: 'Cải tiến', tagColor: '#F5A623', text: 'Gói Doanh nghiệp: hỗ trợ đến 32 thiết bị (trước đây 16)' },
    ]
  },
  {
    version: 'v1.2.0',
    date: 'Tháng 12, 2025',
    type: 'major',
    label: 'Tính năng mới',
    labelColor: '#1DB954',
    items: [
      { tag: 'Mới', tagColor: '#1DB954', text: 'Đa cơ sở kinh doanh — quản lý nhiều cửa hàng dưới 1 tài khoản CCCD' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Kê khai quyết toán TNCN theo phương pháp lợi nhuận thực tế' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Xuất QR thanh tra thuế' },
      { tag: 'Cải tiến', tagColor: '#F5A623', text: 'Mẫu giao diện mở rộng lên 5 ngành nghề (thêm: nhà trọ, salon)' },
    ]
  },
  {
    version: 'v1.0.0',
    date: 'Tháng 9, 2025',
    type: 'launch',
    label: 'Ra mắt',
    labelColor: '#E8381A',
    items: [
      { tag: 'Ra mắt', tagColor: '#E8381A', text: 'TalkPOS chính thức ra mắt phiên bản đầu tiên' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Giọng nói AI với từ đánh thức tùy chỉnh' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Sổ sách điện tử, quản lý công nợ' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Kê khai thuế tháng, quý, năm' },
      { tag: 'Mới', tagColor: '#1DB954', text: 'Offline-first với đồng bộ Nexus Cloud' },
    ]
  },
]

export default function ChangelogPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Lịch sử cập nhật</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-4">
            Changelog
          </h1>
          <p className="text-[#888] font-light text-lg max-w-xl">
            Mỗi bản cập nhật mang đến tính năng mới, cải tiến hiệu suất và sửa lỗi dựa trên phản hồi của tiểu thương.
          </p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[780px] mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.08]" />

          <div className="space-y-12 pl-8">
            {releases.map((r) => (
              <div key={r.version} className="relative">
                {/* Dot */}
                <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#E8381A] bg-[#0D0D0D]" />

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-display font-black text-xl">{r.version}</span>
                  <span className="text-[0.65rem] font-bold px-2.5 py-1 rounded-full border"
                    style={{ color: r.labelColor, borderColor: `${r.labelColor}40`, background: `${r.labelColor}12` }}>
                    {r.label}
                  </span>
                  <span className="text-xs text-[#555]">{r.date}</span>
                </div>

                <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl overflow-hidden">
                  {r.items.map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 px-5 py-3.5 ${i < r.items.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                      <span className="text-[0.62rem] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 mt-0.5"
                        style={{ color: item.tagColor, borderColor: `${item.tagColor}40`, background: `${item.tagColor}12` }}>
                        {item.tag}
                      </span>
                      <span className="text-[0.85rem] text-[#aaa] font-light leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
