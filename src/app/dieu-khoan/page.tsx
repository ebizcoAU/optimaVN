import PageShell from '@/components/PageShell'

export default function TermsPage() {
  return (
    <PageShell>
      <section className="px-page py-16 bg-[#141414] border-b border-white/[0.07]">
        <div className="max-w-[780px] mx-auto">
          <p className="text-xs font-bold tracking-[0.13em] uppercase text-[#E8381A] mb-3">Pháp lý</p>
          <h1 className="font-display font-black text-[clamp(2rem,4vw,3rem)] tracking-tight leading-tight mb-3">
            Điều khoản sử dụng
          </h1>
          <p className="text-[#555] text-sm">Cập nhật lần cuối: 01/03/2026 &nbsp;·&nbsp; Có hiệu lực từ: 01/03/2026</p>
        </div>
      </section>

      <section className="px-page py-16 max-w-[780px] mx-auto">
        <div className="space-y-10 text-[0.92rem] text-[#aaa] font-light leading-relaxed">

          <div className="bg-[#1C1C1C] border border-white/[0.08] rounded-xl p-6">
            <p>Bằng cách tạo tài khoản hoặc sử dụng ứng dụng TalkPOS, bạn đồng ý với các điều khoản dưới đây. Vui lòng đọc kỹ trước khi sử dụng. Nếu không đồng ý, vui lòng không tiếp tục sử dụng dịch vụ.</p>
          </div>

          {[
            {
              num: '1', title: 'Chủ thể cung cấp dịch vụ',
              body: 'TalkPOS là ứng dụng phần mềm quản lý bán hàng được phát triển bởi Ebizco Australia Pty Ltd (ABN 44 091 466 858), trụ sở tại Unit 1/9 Boag Rd, Morley WA 6062, Australia. Mọi giao dịch pháp lý liên quan đến TalkPOS thuộc thẩm quyền của Ebizco Australia Pty Ltd.'
            },
            {
              num: '2', title: 'Đối tượng sử dụng',
              body: 'TalkPOS được thiết kế dành cho hộ kinh doanh cá thể (HKD) và doanh nghiệp nhỏ tại Việt Nam. Bạn phải từ 18 tuổi trở lên và có năng lực pháp lý đầy đủ để giao kết hợp đồng khi đăng ký sử dụng.'
            },
            {
              num: '3', title: 'Đăng ký tài khoản',
              body: 'Bạn cần cung cấp số điện thoại và thông tin CCCD hợp lệ để đăng ký. Bạn chịu trách nhiệm bảo mật thông tin đăng nhập và mọi hoạt động xảy ra dưới tài khoản của mình. Ebizco có quyền từ chối hoặc đình chỉ tài khoản nếu phát hiện thông tin gian lận.'
            },
            {
              num: '4', title: 'Giấy phép sử dụng',
              body: 'Ebizco cấp cho bạn giấy phép sử dụng cá nhân, không độc quyền, không chuyển nhượng để sử dụng ứng dụng TalkPOS trên thiết bị thuộc quyền sở hữu hoặc kiểm soát của bạn. Bạn không được: sao chép, chỉnh sửa, dịch ngược, bán lại, hoặc tạo sản phẩm phái sinh từ TalkPOS.'
            },
            {
              num: '5', title: 'Thanh toán và hoàn tiền',
              body: 'Phí dịch vụ được tính theo tháng hoặc một lần tùy gói. Tất cả giao dịch đã hoàn thành không được hoàn tiền, ngoại trừ trường hợp lỗi kỹ thuật từ phía Ebizco dẫn đến dịch vụ không hoạt động liên tục trên 72 giờ. Trong trường hợp đó, bạn sẽ được hoàn tiền theo tỷ lệ thời gian gián đoạn.'
            },
            {
              num: '6', title: 'Dữ liệu và quyền sở hữu',
              body: 'Bạn là chủ sở hữu toàn bộ dữ liệu kinh doanh của mình. Ebizco không có quyền sử dụng dữ liệu kinh doanh cá nhân của bạn cho bất kỳ mục đích nào ngoài việc cung cấp dịch vụ. Khi bạn xóa tài khoản, toàn bộ dữ liệu trên máy chủ của Ebizco sẽ bị xóa vĩnh viễn trong vòng 30 ngày.'
            },
            {
              num: '7', title: 'Trách nhiệm về thông tin thuế',
              body: 'TalkPOS cung cấp công cụ hỗ trợ kê khai thuế dựa trên dữ liệu bạn nhập. Chúng tôi không phải là đơn vị tư vấn thuế được cấp phép. Bạn tự chịu trách nhiệm về tính chính xác của dữ liệu và việc nộp thuế đúng hạn theo quy định pháp luật Việt Nam. Ebizco không chịu trách nhiệm về bất kỳ khoản phạt thuế nào phát sinh.'
            },
            {
              num: '8', title: 'Giới hạn trách nhiệm',
              body: 'Trong phạm vi tối đa được pháp luật cho phép, Ebizco không chịu trách nhiệm về các thiệt hại gián tiếp, ngẫu nhiên hoặc hậu quả phát sinh từ việc sử dụng hoặc không thể sử dụng TalkPOS. Trách nhiệm tổng thể của Ebizco không vượt quá số tiền bạn đã thanh toán trong 12 tháng gần nhất.'
            },
            {
              num: '9', title: 'Đình chỉ và chấm dứt',
              body: 'Ebizco có thể đình chỉ hoặc chấm dứt tài khoản của bạn nếu: vi phạm điều khoản này, sử dụng dịch vụ cho mục đích bất hợp pháp, hoặc không thanh toán phí dịch vụ quá 30 ngày. Bạn có thể hủy dịch vụ bất kỳ lúc nào trong ứng dụng. Dữ liệu sẽ được giữ 30 ngày sau khi hủy trước khi bị xóa.'
            },
            {
              num: '10', title: 'Luật áp dụng',
              body: 'Điều khoản này được điều chỉnh theo luật pháp của bang Western Australia, Australia. Mọi tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại Perth, Western Australia. Đối với người dùng tại Việt Nam, các quyền bảo vệ người tiêu dùng theo Luật Bảo vệ quyền lợi người tiêu dùng Việt Nam vẫn được áp dụng đầy đủ.'
            },
            {
              num: '11', title: 'Thay đổi điều khoản',
              body: 'Ebizco có thể cập nhật điều khoản này theo thời gian. Với những thay đổi quan trọng, chúng tôi sẽ thông báo qua email hoặc ứng dụng ít nhất 14 ngày trước khi có hiệu lực. Việc tiếp tục sử dụng sau ngày hiệu lực đồng nghĩa chấp nhận điều khoản mới.'
            },
            {
              num: '12', title: 'Liên hệ',
              body: 'Mọi câu hỏi về điều khoản này, vui lòng liên hệ: ebizco.au@gmail.com hoặc Zalo/WhatsApp +61 412 783 132.'
            },
          ].map((sec) => (
            <div key={sec.num}>
              <h2 className="font-display font-black text-xl text-[#F5F0E8] mb-3">
                {sec.num}. {sec.title}
              </h2>
              <p>{sec.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
