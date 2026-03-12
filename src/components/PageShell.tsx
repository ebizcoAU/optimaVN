// src/components/PageShell.tsx
import React from 'react'

export interface PageShellProps {
  children: React.ReactNode
  label?: string
  title?: string
  subtitle?: string
  accentColor?: string
}

export default function PageShell({ children, label, title, subtitle, accentColor = '#1DB954' }: PageShellProps) {
  return (
    <main className="pt-20 min-h-screen bg-[#0D0D0D] text-[#F5F0E8]">
      {(label || title || subtitle) && (
        <div className="py-20 px-page text-center bg-gradient-to-b from-[#111] to-[#0D0D0D] border-b border-white/[0.07]">
          {label && (
            <p className="text-xs font-bold tracking-[0.13em] uppercase mb-3" style={{ color: accentColor }}>
              {label}
            </p>
          )}
          {title && (
            <h1 className="font-display font-black text-[clamp(2rem,4vw,3.8rem)] tracking-tight leading-tight max-w-3xl mx-auto mb-4">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-[#888] font-light leading-relaxed max-w-xl mx-auto text-[1rem]">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="px-page py-14">
        {children}
      </div>
    </main>
  )
}