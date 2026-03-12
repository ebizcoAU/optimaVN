// src/components/Footer.tsx
import Link from 'next/link'

const cols = [
  {
    title: 'Sản phẩm',
    links: [
      { label: 'Tính năng',           href: '/tinh-nang' },
      { label: 'Máy tính thuế',       href: '/may-tinh-thue' },
      { label: 'Bảng giá',            href: '/bang-gia' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'Trung tâm trợ giúp',  href: '/tro-giup' },
      { label: 'Tình trạng hệ thống', href: '/tinh-trang-he-thong' },
      { label: 'Liên hệ',             href: '/lien-he' },
    ],
  },
  {
    title: 'Pháp lý & Thuế',
    links: [
      { label: 'Luật thuế 2026',       href: '/luat-thue-2026' },
      { label: 'Chính sách bảo mật',   href: '/chinh-sach-bao-mat' },
      { label: 'Điều khoản sử dụng',   href: '/dieu-khoan' },
      { label: 'ABN: 44 091 466 858',  href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.08]">
      <div className="grid md:grid-cols-4 gap-12 px-page py-14">
        <div>
          <div className="font-display font-black text-xl mb-2.5 text-[#1DB954]">
            Optima
          </div>
          <p className="text-[0.8rem] text-[#666] leading-relaxed max-w-[240px] font-light mb-4">
            Trợ lý tài chính cá nhân cho người lao động Việt Nam. Phát hiện nộp thừa thuế — giúp bạn lấy lại tiền.
          </p>
          <div className="mb-4">
            <div className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#555] mb-2">
              Một sản phẩm của TalkPOS Ecosystem
            </div>
            <Link href="https://talkpos.vn" target="_blank"
              className="text-[0.75rem] text-[#555] hover:text-[#F5F0E8] transition-colors block">
              → TalkPOS — Dành cho hộ kinh doanh
            </Link>
          </div>
          <div className="space-y-1.5">
            <a href="mailto:ebizco.au@gmail.com"
              className="flex items-center gap-2 text-[0.75rem] text-[#555] hover:text-[#F5F0E8] transition-colors">
              ✉️ ebizco.au@gmail.com
            </a>
            <a href="tel:+84328160528"
              className="flex items-center gap-2 text-[0.75rem] text-[#555] hover:text-[#F5F0E8] transition-colors">
              📞 VN: +84 328 160 528
            </a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <div className="text-[0.72rem] font-bold tracking-[0.08em] uppercase text-[#888] mb-4">
              {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-[0.82rem] text-[#666] hover:text-[#F5F0E8] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.08] px-page py-5 flex flex-wrap justify-between
                      gap-2 text-[0.75rem] text-[#555]">
        <span>© 2026 Optima — Sản phẩm của <a href="https://ebizco.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-[#888] transition-colors">Ebizco Australia Pty Ltd</a> (ABN 44 091 466 858).</span>
        <span>Làm với ❤️ cho người lao động Việt Nam 🇻🇳</span>
      </div>
    </footer>
  )
}