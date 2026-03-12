import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Syne } from 'next/font/google'
import './globals.css'

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-bevietnam',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Optima — Lấy Lại Tiền Thuế Đã Nộp Thừa',
  description:
    'Hàng triệu người Việt đang nộp thừa thuế TNCN mỗi năm mà không biết. Optima phát hiện khoản nộp thừa, thu thập chứng từ, và tạo hồ sơ quyết toán XML sẵn sàng nộp lên eTax.',
  keywords: ['hoàn thuế tncn', 'quyết toán thuế', 'giảm trừ gia cảnh', 'thuế thu nhập cá nhân', 'optima', 'việt nam 2026'],
  openGraph: {
    title: 'Optima — Lấy Lại Tiền Thuế Đã Nộp Thừa',
    description: 'Phát hiện, tính toán và làm quyết toán thuế TNCN cho người lao động Việt Nam.',
    images: [{ url: '/images/og-image.jpg' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${syne.variable}`}>
      <body className="font-sans bg-[#0D0D0D] text-[#F5F0E8]">{children}</body>
    </html>
  )
}