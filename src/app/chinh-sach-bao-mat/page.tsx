import PageShell from '@/components/PageShell'

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[780px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Pháp lý</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight mb-3">
            Chính sách bảo mật
          </h1>
          <p className="text-[#555] text-sm">Cập nhật lần cuối: 01/03/2026</p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[780px] mx-auto">
        <div className="prose-legal space-y-10 text-[0.92rem] text-[#aaa] font-light leading-relaxed">

          <div className="bg-[#1C1C1C] border border-[#1DB954]/25 rounded-xl p-6">
            <p className="text-[#1DB954] font-bold mb-2">🔒 Cam kết cốt lõi về quyền riêng tư</p>
            <p>Dữ liệu kinh doanh của bạn được lưu trữ <strong className="text-[#F5F0E8]">trực tiếp trên thiết bị của bạn</strong>. Ebizco không bán, chia sẻ hay khai thác dữ liệu kinh doanh của bạn cho bất kỳ mục đích thương mại nào.</p>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">1. Chủ thể thu thập dữ liệu</h2>
            <p>Chính sách này áp dụng cho ứng dụng TalkPOS được phát triển và vận hành bởi:</p>
            <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5 mt-3">
              <p><strong className="text-[#F5F0E8]">Ebizco Australia Pty Ltd</strong></p>
              <p>ABN: 44 091 466 858</p>
              <p>Unit 1/9 Boag Rd, Morley WA 6062, Australia</p>
              <p>Email: <a href="mailto:ebizco.au@gmail.com" className="text-[#6496ff] hover:underline">ebizco.au@gmail.com</a></p>
              <p>Điện thoại / Zalo: <a href="tel:+61412783132" className="text-[#6496ff] hover:underline">+61 412 783 132</a></p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">2. Dữ liệu chúng tôi thu thập</h2>
            <p className="mb-4">Chúng tôi phân loại dữ liệu thành hai nhóm:</p>

            <div className="space-y-3">
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5">
                <p className="font-bold text-[#F5F0E8] mb-2">a) Dữ liệu tài khoản (lưu trên máy chủ)</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Số điện thoại (dùng để xác thực và khôi phục)</li>
                  <li>Họ tên và số CCCD (chỉ lưu băm — không lưu bản gốc)</li>
                  <li>Thông tin đăng ký hộ kinh doanh (tên, mã số thuế, địa chỉ)</li>
                </ul>
              </div>
              <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5">
                <p className="font-bold text-[#F5F0E8] mb-2">b) Dữ liệu kinh doanh (lưu trên thiết bị, backup tùy chọn)</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Giao dịch bán hàng, mua hàng, công nợ</li>
                  <li>Thông tin nhân viên và bảng lương</li>
                  <li>Báo cáo thuế và hóa đơn điện tử</li>
                </ul>
                <p className="text-[#555] text-xs mt-2">Dữ liệu này chỉ tải lên Nexus Cloud nếu bạn bật tính năng backup. Được mã hoá đầu-cuối.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">3. Mục đích sử dụng dữ liệu</h2>
            <p>Chúng tôi sử dụng dữ liệu của bạn để:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Cung cấp và vận hành dịch vụ TalkPOS</li>
              <li>Xác thực danh tính và bảo vệ tài khoản</li>
              <li>Cho phép đồng bộ và khôi phục dữ liệu</li>
              <li>Gửi thông báo hệ thống và hỗ trợ kỹ thuật</li>
              <li>Cải tiến sản phẩm (dữ liệu ẩn danh tổng hợp, không liên kết với cá nhân)</li>
            </ul>
            <p className="mt-4 p-4 bg-[#E8381A]/[0.05] border border-[#E8381A]/15 rounded-xl text-[0.85rem]">
              ⚠️ Chúng tôi <strong className="text-[#F5F0E8]">KHÔNG</strong> bán dữ liệu của bạn, <strong className="text-[#F5F0E8]">KHÔNG</strong> chia sẻ với bên thứ ba vì mục đích quảng cáo, và <strong className="text-[#F5F0E8]">KHÔNG</strong> sử dụng dữ liệu kinh doanh để phân tích thương mại.
            </p>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">4. Giọng nói và xử lý AI</h2>
            <p>Khi bạn sử dụng tính năng giọng nói, đoạn âm thanh được gửi đến API GPT-4o của OpenAI để xử lý nhận diện. Chúng tôi không lưu trữ file âm thanh gốc. Kết quả nhận diện (văn bản) được lưu cục bộ trên thiết bị của bạn.</p>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">5. Bảo mật dữ liệu</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Mã hoá AES-256 cho dữ liệu lưu trữ cục bộ</li>
              <li>Mã hoá TLS 1.3 cho mọi kết nối mạng</li>
              <li>Backup cloud được mã hoá đầu-cuối (end-to-end encryption)</li>
              <li>Số CCCD không bao giờ được lưu dạng bản gốc</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">6. Quyền của bạn</h2>
            <p>Bạn có quyền:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Truy cập và xuất toàn bộ dữ liệu của mình (CSV)</li>
              <li>Xóa tài khoản và toàn bộ dữ liệu liên quan</li>
              <li>Tắt backup cloud bất kỳ lúc nào</li>
              <li>Yêu cầu chỉnh sửa thông tin cá nhân không chính xác</li>
            </ul>
            <p className="mt-3">Để thực hiện các quyền trên, liên hệ: <a href="mailto:ebizco.au@gmail.com" className="text-[#6496ff] hover:underline">ebizco.au@gmail.com</a></p>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">7. Thay đổi chính sách</h2>
            <p>Khi có thay đổi quan trọng, chúng tôi sẽ thông báo qua ứng dụng ít nhất 14 ngày trước khi có hiệu lực. Việc tiếp tục sử dụng dịch vụ sau ngày hiệu lực đồng nghĩa với việc bạn chấp nhận chính sách mới.</p>
          </div>

          <div>
            <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-4">8. Liên hệ về quyền riêng tư</h2>
            <p>Mọi thắc mắc về chính sách bảo mật:</p>
            <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-5 mt-3 space-y-1">
              <p><strong className="text-[#F5F0E8]">Ebizco Australia Pty Ltd</strong></p>
              <p>Email: <a href="mailto:ebizco.au@gmail.com" className="text-[#6496ff] hover:underline">ebizco.au@gmail.com</a></p>
              <p>Zalo/WhatsApp: <a href="tel:+61412783132" className="text-[#6496ff] hover:underline">+61 412 783 132</a></p>
              <p>VN: <a href="tel:+84328160528" className="text-[#6496ff] hover:underline">+84 328 160 528</a></p>
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  )
}
