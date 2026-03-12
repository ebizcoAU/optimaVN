// src/components/TheProblem.tsx — Optima
// Why workers overpay and never claim back

const reasons = [
  {
    icon: '📋',
    color: '#E8381A',
    bg: 'bg-[#E8381A]/[0.08]',
    border: 'border-[#E8381A]/20',
    title: 'Sự kiện không được cập nhật',
    desc: 'Con bắt đầu đi học. Bố mẹ cần chăm sóc y tế. Mua bảo hiểm nhân thọ. Đổi công ty giữa năm. Tất cả đều là giảm trừ hợp lệ — nhưng phòng kế toán của công ty bạn không biết.',
    stat: 'Nguyên nhân số 1 gây nộp thừa',
  },
  {
    icon: '😶',
    color: '#F5A623',
    bg: 'bg-[#F5A623]/[0.08]',
    border: 'border-[#F5A623]/20',
    title: 'Không biết mình được hoàn',
    desc: 'Thuế TNCN chỉ là một dòng trừ trên phiếu lương. Không ai nói cho bạn biết khoản đó có thể lấy lại. 90% người lao động chưa bao giờ làm quyết toán TNCN.',
    stat: '90% chưa từng làm quyết toán',
  },
  {
    icon: '🗂️',
    color: '#6496ff',
    bg: 'bg-[#6496ff]/[0.08]',
    border: 'border-[#6496ff]/20',
    title: 'Quy trình quá phức tạp',
    desc: 'Cổng eTax tồn tại — nhưng không có hướng dẫn thông minh. Không biết chứng từ nào cần, không biết điền mẫu gì, không biết nộp ở đâu. Bỏ qua là dễ nhất.',
    stat: 'Cơ chế có sẵn — người dùng thì không',
  },
]

export default function TheProblem() {
  return (
    <section id="problem" className="py-24 px-5 md:px-14 bg-[#080808]">
      <div className="max-w-[1100px] mx-auto">

        <div className="text-center max-w-[640px] mx-auto reveal mb-14">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#1DB954] mb-3">
            Vấn đề thực sự
          </p>
          <h2 className="font-display font-black text-[clamp(1.8rem,3.5vw,2.9rem)] tracking-tight leading-tight mb-4">
            Mỗi năm, nhà nước giữ{' '}
            <span className="text-[#F5A623]">hàng nghìn tỷ đồng</span>{' '}
            tiền hoàn thuế chưa được nhận.
          </h2>
          <p className="text-[#888] font-light leading-relaxed">
            Không phải vì người lao động không đủ điều kiện. Mà vì họ không biết, không có công cụ, và quy trình quá phức tạp để tự làm.
          </p>
        </div>

        {/* Visual — refund moment photo */}
        <div className="reveal mb-10 rounded-2xl overflow-hidden relative min-h-[240px]">
          <img
            src="/images/refund-moment.jpg"
            alt="Người lao động phát hiện ra số tiền thuế có thể hoàn lại"
            className="w-full h-[260px] object-cover object-center brightness-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-[#080808]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 px-7 pb-7">
            <div className="font-display font-black text-2xl text-white mb-1">
              "Tôi có tiền được hoàn không?"
            </div>
            <div className="text-[#1DB954] text-sm font-medium">
              Câu hỏi mà 90% người lao động chưa bao giờ hỏi — dù câu trả lời thường là Có.
            </div>
          </div>
        </div>

        {/* 3 reason cards */}
        <div className="grid md:grid-cols-3 gap-5 reveal mb-12">
          {reasons.map((r) => (
            <div key={r.title} className={`${r.bg} border ${r.border} rounded-2xl p-6`}>
              <div className="text-3xl mb-3">{r.icon}</div>
              <div className="font-display font-bold text-base mb-2">{r.title}</div>
              <p className="text-[0.82rem] text-[#aaa] leading-relaxed font-light mb-3">{r.desc}</p>
              <div className="text-[0.76rem] font-bold px-3 py-1.5 rounded-full border inline-block"
                style={{ color: r.color, borderColor: `${r.color}40`, background: `${r.color}12` }}>
                {r.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Pivot to solution */}
        <div className="bg-[#111] border border-[#1DB954]/20 rounded-2xl p-8 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[#1DB954] text-xs font-bold tracking-[0.1em] uppercase mb-3">
                Giải pháp của Optima
              </div>
              <h3 className="font-display font-black text-2xl mb-4 leading-tight">
                Optima làm thay bạn —{' '}
                <span className="text-[#1DB954]">từ phát hiện đến hồ sơ.</span>
              </h3>
              <p className="text-[#888] font-light leading-relaxed text-sm">
                Scan phiếu lương, thêm chứng từ gia đình và y tế, Optima tự tính số tiền được hoàn và tạo file XML chuẩn quyết toán để bạn nộp lên eTax — mà không cần biết một chữ về kế toán.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '🔍', label: 'Phát hiện nộp thừa tự động' },
                { icon: '📁', label: 'Vault lưu mọi chứng từ' },
                { icon: '🧮', label: 'Tính toán theo luật 2026' },
                { icon: '📄', label: 'Xuất XML chuẩn eTax' },
              ].map((item) => (
                <div key={item.label}
                  className="bg-[#1DB954]/[0.06] border border-[#1DB954]/15 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-[0.78rem] text-[#ccc] font-medium leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
