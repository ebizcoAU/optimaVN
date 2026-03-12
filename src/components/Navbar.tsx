// src/components/Navbar.tsx — Optima
'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/tinh-nang',     label: 'Tính năng' },
  { href: '/#how-it-works', label: 'Cách hoạt động' },
  { href: '/may-tinh-thue', label: 'Máy tính thuế' },
  { href: '/bang-gia',      label: 'Bảng giá' },
  { href: '/luat-thue-2026',label: 'Luật 2026' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-page py-4
                      bg-[rgba(13,13,13,0.92)] backdrop-blur-2xl border-b border-white/[0.07]">
        <Link href="/"
          className="flex items-center gap-2 font-display font-black text-2xl tracking-tight"
          onClick={() => setOpen(false)}>
          <span className="text-[#1DB954]">Optima</span>
        </Link>

        <ul className="hidden lg:flex gap-8 list-none items-center">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}
                className="text-[#888] text-sm font-medium hover:text-[#F5F0E8] transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#download"
              className="bg-[#1DB954] text-[#0D0D0D] text-sm font-bold px-5 py-2.5 rounded-lg
                         hover:opacity-85 transition-opacity">
              Tải Android & iOS
            </Link>
          </li>
        </ul>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Mở menu">
          <span className={`block w-6 h-0.5 bg-[#F5F0E8] transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F0E8] transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#F5F0E8] transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-[#141414] border-l border-white/[0.08] shadow-2xl flex flex-col pt-20 px-6 pb-8 transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-1 flex-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}
                  className="block text-[#ccc] text-base font-medium py-3 px-3 rounded-xl hover:bg-white/[0.06] hover:text-[#F5F0E8] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="#download" onClick={() => setOpen(false)}
            className="block w-full text-center bg-[#1DB954] text-[#0D0D0D] font-bold px-5 py-3.5 rounded-xl hover:opacity-85 transition-opacity">
            Tải Android & iOS
          </Link>
        </div>
      </div>
    </>
  )
}