// src/components/DocumentVault.tsx — Optima

const vaultItems = [
  { icon: '🪪', label: 'CCCD / Hộ chiếu', sub: 'Giấy tờ tùy thân' },
  { icon: '💰', label: 'Phiếu lương', sub: 'Scan QR tự động' },
  { icon: '🎓', label: 'Hóa đơn học phí', sub: '→ Giảm trừ con cái' },
  { icon: '🏥', label: 'Hóa đơn y tế', sub: '→ Giảm trừ sức khỏe' },
  { icon: '🛡️', label: 'Hợp đồng bảo hiểm', sub: '→ Giảm trừ BH nhân thọ' },
  { icon: '❤️', label: 'Biên lai từ thiện', sub: '→ Giảm trừ nhân đạo' },
  { icon: '🧾', label: 'Hóa đơn điện tử', sub: 'Chuẩn NĐ 70/2025' },
  { icon: '📜', label: 'Bằng cấp & chứng chỉ', sub: 'Hồ sơ nghề nghiệp' },
]

export default function DocumentVault() {
  return (
    <section id="vault" className="py-24 px-5 md:px-14 bg-[#141414]">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="reveal">
            <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">
              Document Vault
            </p>
            <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight mb-5">
              Mọi chứng từ quan trọng —{' '}
              <span className="text-[#1DB954]">một nơi duy nhất.</span>
            </h2>
            <p className="text-[#888] font-light leading-relaxed mb-6">
              Người Việt không có nơi lưu trữ tập trung cho các giấy tờ tài chính cá nhân. Vault của Optima lấp đầy khoảng trống đó — không chỉ để giữ tài liệu, mà để biến chúng thành khoản giảm trừ thuế.
            </p>
            <div className="space-y-3">
              {[
                'AI tự phân loại khi bạn upload',
                'Gán tự động vào đúng danh mục giảm trừ',
                'Lưu offline — không cần kết nối internet',
                'Backup lên Nexus Cloud (tuỳ chọn, $10/năm)',
              ].map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm text-[#ccc]">
                  <span className="text-[#1DB954] mt-0.5 flex-shrink-0 font-bold">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right — vault grid */}
          <div className="reveal">
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden mb-5">
              <img
                src="/images/document-vault.jpg"
                alt="Chứng từ cá nhân lưu trong Optima Vault"
                className="w-full h-[200px] object-cover object-center"
              />
            </div>

            {/* Vault items grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {vaultItems.map((item) => (
                <div key={item.label}
                  className="bg-[#1C1C1C] border border-white/[0.07] rounded-xl px-3.5 py-3
                               flex items-center gap-3 hover:border-[#1DB954]/25 transition-colors">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-[0.78rem] font-semibold text-[#F5F0E8] leading-tight">{item.label}</div>
                    <div className="text-[0.68rem] text-[#666] mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
