import PageShell from '@/components/PageShell'

const services = [
  { name: 'API Giọng nói AI (GPT-4o)', status: 'operational', uptime: '99.97%' },
  { name: 'Nexus Cloud Sync', status: 'operational', uptime: '99.95%' },
  { name: 'Hóa đơn điện tử (E-Invoice)', status: 'operational', uptime: '99.91%' },
  { name: 'Cổng eTax (Tổng cục Thuế)', status: 'operational', uptime: '99.80%' },
  { name: 'Ứng dụng Android', status: 'operational', uptime: '99.99%' },
  { name: 'Backup & Khôi phục', status: 'operational', uptime: '100%' },
  { name: 'Thông báo & Nhắc nhở', status: 'operational', uptime: '99.88%' },
  { name: 'Dashboard Doanh nghiệp', status: 'operational', uptime: '99.93%' },
]

const incidents = [
  {
    date: '28/02/2026',
    title: 'Chậm đồng bộ Nexus Cloud — Đã khắc phục',
    severity: 'minor',
    desc: '09:15 – 10:42 ICT: Một số thiết bị gặp độ trễ đồng bộ 15–30 phút. Nguyên nhân: tắc nghẽn tạm thời ở datacenter Singapore. Đã khắc phục, không mất dữ liệu.',
  },
  {
    date: '14/02/2026',
    title: 'Bảo trì định kỳ — Nexus Cloud',
    severity: 'maintenance',
    desc: '02:00 – 03:30 ICT: Bảo trì định kỳ. Đồng bộ cloud tạm dừng trong thời gian này. Ứng dụng offline hoạt động bình thường.',
  },
]

const statusColors: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  operational: { bg: 'bg-[#1DB954]/10', text: 'text-[#1DB954]', dot: 'bg-[#1DB954]', label: 'Hoạt động bình thường' },
  degraded:    { bg: 'bg-[#F5A623]/10', text: 'text-[#F5A623]', dot: 'bg-[#F5A623]', label: 'Hiệu suất giảm' },
  outage:      { bg: 'bg-[#E8381A]/10', text: 'text-[#E8381A]', dot: 'bg-[#E8381A]', label: 'Gián đoạn dịch vụ' },
  maintenance: { bg: 'bg-[#6496ff]/10', text: 'text-[#6496ff]', dot: 'bg-[#6496ff]', label: 'Bảo trì' },
}
const incidentColors: Record<string, { color: string; label: string }> = {
  minor:       { color: '#F5A623', label: 'Sự cố nhỏ' },
  maintenance: { color: '#6496ff', label: 'Bảo trì' },
  major:       { color: '#E8381A', label: 'Sự cố lớn' },
}

export default function StatusPage() {
  const allOperational = services.every(s => s.status === 'operational')

  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Hệ thống</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3.5rem)] tracking-tight leading-tight mb-6">
            Tình trạng hệ thống
          </h1>
          {/* Overall status */}
          <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border ${allOperational ? 'bg-[#1DB954]/10 border-[#1DB954]/25' : 'bg-[#F5A623]/10 border-[#F5A623]/25'}`}>
            <span className={`w-3 h-3 rounded-full animate-pulse ${allOperational ? 'bg-[#1DB954]' : 'bg-[#F5A623]'}`} />
            <span className={`font-bold ${allOperational ? 'text-[#1DB954]' : 'text-[#F5A623]'}`}>
              {allOperational ? 'Tất cả hệ thống hoạt động bình thường' : 'Một số dịch vụ đang gặp sự cố'}
            </span>
          </div>
          <p className="text-[#555] text-sm mt-3">Cập nhật lần cuối: 09/03/2026, 08:00 ICT</p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[780px] mx-auto">
        {/* Services */}
        <h2 className="font-display font-black text-xl mb-5">Trạng thái dịch vụ</h2>
        <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl overflow-hidden mb-12">
          {services.map((svc, i) => {
            const s = statusColors[svc.status]
            return (
              <div key={svc.name}
                className={`flex items-center justify-between px-6 py-4 ${i < services.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${s.dot}`} />
                  <span className="text-[0.88rem] font-medium">{svc.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[0.7rem] text-[#555]">{svc.uptime} uptime</span>
                  <span className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full border ${s.bg} ${s.text}`}
                    style={{ borderColor: `${s.text.replace('text-[', '').replace(']', '')}40` }}>
                    {s.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Incidents */}
        <h2 className="font-display font-black text-xl mb-5">Sự cố gần đây</h2>
        <div className="space-y-4 mb-12">
          {incidents.map((inc) => {
            const c = incidentColors[inc.severity]
            return (
              <div key={inc.date} className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs text-[#555]">{inc.date}</span>
                  <span className="text-[0.62rem] font-bold px-2 py-0.5 rounded-full border"
                    style={{ color: c.color, borderColor: `${c.color}40`, background: `${c.color}12` }}>
                    {c.label}
                  </span>
                </div>
                <p className="font-bold text-[0.92rem] mb-2">{inc.title}</p>
                <p className="text-[0.82rem] text-[#888] font-light leading-relaxed">{inc.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-2xl p-6 text-center">
          <p className="text-[#888] text-sm font-light mb-4">
            Đăng ký nhận thông báo khi có sự cố qua Zalo hoặc email.
          </p>
          <a href="https://zalo.me/84412783132" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8381A] text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-all text-sm">
            🔔 Đăng ký thông báo sự cố
          </a>
        </div>
      </section>
    </PageShell>
  )
}
