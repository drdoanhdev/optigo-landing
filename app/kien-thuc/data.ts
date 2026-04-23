export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;       // dd/mm/yyyy
  readTime: string;   // "5 phút"
  author: string;
  content: string;    // HTML content
  tags: string[];
}

export const categories = [
  { label: "Tất cả", value: "all" },
  { label: "Đo khám", value: "do-kham" },
  { label: "Tồn kho", value: "ton-kho" },
  { label: "Kinh doanh", value: "kinh-doanh" },
  { label: "Quản lý", value: "quan-ly" },
  { label: "Mẹo nghề", value: "meo-nghe" },
];

export const posts: BlogPost[] = [
  {
    slug: "sai-lam-ghi-don-kinh-thu-cong",
    title: "5 sai lầm phổ biến khi ghi đơn kính thủ công — và cách tránh",
    excerpt:
      "Nhầm SPH với CYL, ghi thiếu AXIS, quên PD từng mắt — những lỗi nhỏ nhưng khiến khách phải quay lại làm lại kính. Bài viết phân tích 5 lỗi thường gặp nhất và giải pháp số hóa.",
    category: "do-kham",
    date: "15/04/2026",
    readTime: "6 phút",
    author: "OptiGo Team",
    tags: ["đơn kính", "SPH", "CYL", "sai sót", "số hóa"],
    content: `
<p>Trong một ngày bận rộn, nhân viên phòng khám mắt có thể lập 20-30 đơn kính. Mỗi đơn cần ghi chính xác: thị lực không kính, thị lực kính cũ, thị lực kính mới, SPH, CYL, AXIS, ADD, PD — cho cả hai mắt. Chỉ cần nhầm một con số, khách sẽ nhận kính sai và phải quay lại.</p>

<h2>1. Nhầm SPH và CYL</h2>
<p>Đây là lỗi phổ biến nhất. SPH (Sphere) là độ cận/viễn, CYL (Cylinder) là độ loạn. Khi ghi tay trên sổ, rất dễ ghi ngược vị trí hoặc nhầm dấu (+/-). Ví dụ: SPH -2.00 CYL -1.50 ghi thành SPH -1.50 CYL -2.00 — khách sẽ nhận kính sai hoàn toàn.</p>
<p><strong>Giải pháp:</strong> Form điện tử tách riêng ô SPH và CYL cho từng mắt, có dropdown chọn giá trị theo bước 0.25D. Không thể ghi nhầm vị trí.</p>

<h2>2. Quên ghi AXIS khi có loạn thị</h2>
<p>Khi CYL khác 0, bắt buộc phải có AXIS (trục loạn, từ 1° đến 180°). Nhiều đơn viết tay bỏ trống AXIS vì "quên" hoặc "viết nhanh". Thợ cắt kính không có AXIS sẽ phải gọi lại hỏi — mất thời gian và thiếu chuyên nghiệp.</p>
<p><strong>Giải pháp:</strong> Hệ thống tự bắt buộc nhập AXIS khi CYL ≠ 0. Không thể lưu đơn thiếu thông tin.</p>

<h2>3. Ghi PD chung thay vì PD từng mắt</h2>
<p>PD (Pupillary Distance - khoảng cách đồng tử) lý tưởng nên đo từng mắt (PD/2). Nhiều nơi chỉ ghi PD tổng (ví dụ 64mm) mà không tách phải/trái. Với kính đa tròng, PD từng mắt là bắt buộc.</p>
<p><strong>Giải pháp:</strong> Form có 2 ô PD riêng cho mắt phải và mắt trái. Hệ thống tự tính PD tổng từ PD/2.</p>

<h2>4. Không lưu số kính cũ để so sánh</h2>
<p>Khi khách quay lại tái khám sau 1-2 năm, bác sĩ cần biết số kính cũ để so sánh thay đổi. Nếu ghi trên sổ tay, phải lật tìm rất lâu — hoặc không tìm được.</p>
<p><strong>Giải pháp:</strong> Hệ thống lưu toàn bộ lịch sử đơn kính theo bệnh nhân. Khi mở đơn mới, số kính cũ hiển thị side-by-side để so sánh ngay.</p>

<h2>5. Viết tay khó đọc — thợ cắt kính hiểu sai</h2>
<p>Chữ bác sĩ viết tay nổi tiếng khó đọc. Số -1.50 có thể bị đọc thành -1.00 hoặc -4.50. Đặc biệt nguy hiểm khi đơn được fax hoặc chụp hình gửi cho thợ cắt.</p>
<p><strong>Giải pháp:</strong> In đơn kính rõ ràng với font chuẩn, có logo phòng khám, thông số quang học sắp xếp theo bảng dễ đọc.</p>

<h2>Kết luận</h2>
<p>Số hóa đơn kính không chỉ giảm sai sót mà còn tiết kiệm thời gian, tăng uy tín phòng khám, và cho phép tra cứu lịch sử khám bất kỳ lúc nào. Với OptiGo, toàn bộ quy trình từ đo khám đến in đơn chỉ mất 2-3 phút.</p>
    `,
  },
  {
    slug: "quan-ly-ton-trong-theo-thong-so-quang-hoc",
    title: "Tại sao quản lý tồn tròng theo SPH×CYL là bắt buộc — không phải tùy chọn",
    excerpt:
      "Hầu hết cửa hàng kính quản lý tròng theo tên hãng và số lượng chung. Nhưng tròng Essilor Crizal SPH -3.00 khác hoàn toàn tròng SPH -1.50. Bài viết giải thích tại sao phải quản lý đến từng thông số.",
    category: "ton-kho",
    date: "10/04/2026",
    readTime: "7 phút",
    author: "OptiGo Team",
    tags: ["tồn kho", "tròng kính", "SPH", "CYL", "Essilor"],
    content: `
<p>Một cửa hàng kính trung bình giữ tồn kho 200-500 cặp tròng. Nếu chỉ quản lý theo tên hãng ("còn 50 cặp Essilor Crizal"), bạn sẽ không biết có bao nhiêu cặp SPH -2.00, bao nhiêu cặp SPH -4.00 CYL -1.00. Khi khách cần, bạn phải mở tủ đếm tay.</p>

<h2>Vấn đề với cách quản lý truyền thống</h2>
<p>Hầu hết cửa hàng kính quản lý tồn tròng theo một trong hai cách:</p>
<ul>
<li><strong>Sổ tay:</strong> Ghi "nhập 20 cặp Essilor ngày 15/3", rồi gạch bớt khi bán. Sau 2 tháng, sổ chi chít không đọc được.</li>
<li><strong>Excel:</strong> Tạo bảng theo hãng, nhưng không tách được theo SPH×CYL×ADD. Khi kiểm kê, phải đếm tay từng ngăn tủ.</li>
</ul>

<h2>Tại sao phải quản lý đến SPH × CYL × ADD × mắt?</h2>
<p>Tròng kính không phải hàng hóa thông thường. Mỗi cặp tròng có thông số quang học riêng biệt:</p>
<ul>
<li><strong>SPH (Sphere):</strong> Độ cận/viễn, từ -20.00 đến +20.00, bước 0.25D</li>
<li><strong>CYL (Cylinder):</strong> Độ loạn, thường từ -6.00 đến 0</li>
<li><strong>ADD:</strong> Độ cộng thêm cho kính đa tròng, từ +0.75 đến +3.50</li>
<li><strong>Mắt:</strong> Phải (OD) hoặc Trái (OS)</li>
</ul>
<p>Một tròng SPH -2.00 CYL -1.00 không thể thay thế cho tròng SPH -2.00 CYL -0.50. Nếu không quản lý đến từng tổ hợp, bạn sẽ nói "còn hàng" trong khi thực tế không có đúng thông số khách cần.</p>

<h2>Hai chế độ quản lý: sẵn kho vs đặt theo đơn</h2>
<p>Không phải tất cả tròng đều cần giữ tồn kho:</p>
<ul>
<li><strong>Sẵn kho:</strong> Các thông số phổ biến (SPH -1.00 đến -6.00, CYL 0) nên có sẵn để giao ngay cho khách.</li>
<li><strong>Đặt theo đơn:</strong> Thông số đặc biệt (CYL cao, ADD, tròng đa tròng) thường đặt khi có khách vì ít bán.</li>
</ul>
<p>Hệ thống tốt cần hỗ trợ cả hai chế độ và tự cảnh báo khi thông số phổ biến sắp hết.</p>

<h2>Lợi ích khi số hóa tồn tròng</h2>
<ul>
<li>Biết ngay có đúng thông số khách cần không — không cần mở tủ</li>
<li>Tự trừ tồn khi xuất đơn — không bao giờ quên</li>
<li>Cảnh báo khi sắp hết — chủ động đặt hàng</li>
<li>Tính giá trị tồn kho theo giá vốn — biết tiền đang nằm trong tủ</li>
<li>Nhập lô từ Excel — không cần gõ tay từng thông số</li>
</ul>

<h2>Kết luận</h2>
<p>Quản lý tồn tròng theo SPH×CYL×ADD không phải "nâng cao" — đó là yêu cầu cơ bản để vận hành cửa hàng kính chuyên nghiệp. Phần mềm POS thông thường không hỗ trợ điều này vì họ không hiểu ngành kính mắt.</p>
    `,
  },
  {
    slug: "tinh-lai-gop-cua-hang-kinh",
    title: "Cách tính lãi gộp thật của cửa hàng kính — không phải chỉ nhìn doanh thu",
    excerpt:
      "Bán 50 triệu/ngày nghe rất ấn tượng. Nhưng trừ giá nhập gọng, giá nhập tròng, chiết khấu nhà phân phối, công nợ chưa thu — lãi thật là bao nhiêu? Bài viết hướng dẫn cách tính đúng.",
    category: "kinh-doanh",
    date: "05/04/2026",
    readTime: "8 phút",
    author: "OptiGo Team",
    tags: ["lãi gộp", "doanh thu", "giá vốn", "công nợ", "báo cáo"],
    content: `
<p>Rất nhiều chủ cửa hàng kính chỉ nhìn vào doanh thu cuối ngày và nghĩ rằng đó là "lãi". Nhưng doanh thu 50 triệu/ngày có thể chỉ còn lãi thật 15-20 triệu sau khi trừ hết chi phí. Vấn đề là: hầu hết không biết con số thật.</p>

<h2>Công thức lãi gộp cơ bản</h2>
<p><strong>Lãi gộp = Doanh thu bán hàng − Giá vốn hàng bán</strong></p>
<p>Nghe đơn giản, nhưng trong ngành kính mắt, "giá vốn" phức tạp hơn nhiều so với bán lẻ thông thường:</p>
<ul>
<li><strong>Giá vốn tròng:</strong> Mỗi cặp tròng có giá nhập khác nhau tùy SPH, CYL, hãng, loại tráng phủ</li>
<li><strong>Giá vốn gọng:</strong> Mỗi chiếc gọng giá nhập khác nhau, có thể theo mã hoặc theo nhóm giá</li>
<li><strong>Giá vốn thuốc:</strong> Thuốc nhập theo lô, mỗi lô giá khác nhau</li>
<li><strong>Chiết khấu:</strong> Nhà phân phối có thể cho chiết khấu theo số lượng</li>
</ul>

<h2>3 kênh doanh thu cần tách riêng</h2>
<p>Cửa hàng kính thường có 3 nguồn doanh thu khác nhau với biên lãi rất khác:</p>
<ol>
<li><strong>Kính (gọng + tròng):</strong> Biên lãi thường 40-60%. Đây là nguồn doanh thu chính.</li>
<li><strong>Thuốc mắt:</strong> Biên lãi thường 30-50%. Doanh thu nhỏ hơn nhưng ổn định.</li>
<li><strong>Thủ thuật:</strong> Biên lãi cao (70-90%) nhưng số lượng ít.</li>
</ol>
<p>Nếu gộp chung 3 kênh, bạn sẽ không biết kênh nào đang lãi tốt, kênh nào đang lỗ.</p>

<h2>Công nợ — kẻ thù thầm lặng</h2>
<p>Doanh thu ≠ tiền thật trong két. Nhiều khách trả một phần (đặt cọc 50%) rồi quay lại lấy kính mới trả nốt. Một số quên luôn không quay lại. Công nợ cần được theo dõi theo "tuổi nợ":</p>
<ul>
<li><strong>Dưới 30 ngày:</strong> Bình thường, chưa cần lo</li>
<li><strong>30-60 ngày:</strong> Nên nhắc nhẹ</li>
<li><strong>60-90 ngày:</strong> Cần gọi điện thu</li>
<li><strong>Trên 90 ngày:</strong> Khả năng mất cao, cần xử lý gấp</li>
</ul>

<h2>Tại sao nên bảo vệ số liệu lãi bằng mật khẩu?</h2>
<p>Nhân viên không nên biết lãi gộp của từng đơn hàng. Lý do:</p>
<ul>
<li>Tránh nhân viên giảm giá quá mức vì "biết còn lãi nhiều"</li>
<li>Bảo mật thông tin kinh doanh — tránh lộ ra ngoài</li>
<li>Chỉ chủ và quản lý mới cần nhìn số liệu lãi</li>
</ul>

<h2>Kết luận</h2>
<p>Biết lãi thật là bước đầu tiên để quản lý tài chính hiệu quả. Một hệ thống tự tính lãi gộp real-time, tách theo kênh, theo dõi công nợ và bảo vệ bằng mật khẩu sẽ giúp chủ shop ra quyết định đúng mỗi ngày.</p>
    `,
  },
  {
    slug: "phan-quyen-nhan-vien-cua-hang-kinh",
    title: "Phân quyền nhân viên cửa hàng kính: ai được xem gì, làm gì?",
    excerpt:
      "Chủ shop, quản lý, bác sĩ và nhân viên bán hàng có nhu cầu khác nhau. Ai được xem giá nhập? Ai được xóa đơn? Ai được xem báo cáo lãi? Bài viết hướng dẫn thiết lập phân quyền hợp lý.",
    category: "quan-ly",
    date: "28/03/2026",
    readTime: "5 phút",
    author: "OptiGo Team",
    tags: ["phân quyền", "vai trò", "bảo mật", "nhân viên"],
    content: `
<p>Cửa hàng kính thường có 3-5 nhân viên với vai trò khác nhau. Nếu ai cũng truy cập được mọi thứ, sẽ có rủi ro: nhân viên biết giá nhập → giảm giá quá tay, nhân viên xóa đơn → mất dữ liệu, nhân viên biết lãi → đòi chia nhiều hơn.</p>

<h2>4 vai trò phổ biến trong cửa hàng kính</h2>

<h3>1. Chủ shop (Owner)</h3>
<ul>
<li>Xem được mọi thứ: doanh thu, lãi, giá nhập, công nợ</li>
<li>Quản lý tài khoản nhân viên</li>
<li>Cấu hình hệ thống, mẫu in, phân quyền</li>
<li>Xem báo cáo tổng hợp liên chi nhánh</li>
</ul>

<h3>2. Quản lý (Admin)</h3>
<ul>
<li>Giống chủ shop nhưng không quản lý được tài khoản</li>
<li>Có thể xem báo cáo nếu được cấp quyền</li>
<li>Quản lý tồn kho, nhập hàng</li>
</ul>

<h3>3. Bác sĩ (Doctor)</h3>
<ul>
<li>Khám bệnh, kê đơn kính, kê đơn thuốc</li>
<li>Xem hồ sơ bệnh nhân, lịch sử khám</li>
<li>Không cần xem giá nhập hay lợi nhuận</li>
</ul>

<h3>4. Nhân viên bán hàng (Staff)</h3>
<ul>
<li>Tiếp nhận bệnh nhân, thêm vào phòng chờ</li>
<li>Xem đơn kính/thuốc đã kê</li>
<li>Thu tiền, in đơn</li>
<li>Không được xem giá nhập, không được xóa đơn</li>
</ul>

<h2>Những quyền cần kiểm soát chặt</h2>
<ul>
<li><strong>Xem giá nhập:</strong> Chỉ chủ và quản lý</li>
<li><strong>Xem lợi nhuận:</strong> Chỉ chủ, có thể thêm mật khẩu</li>
<li><strong>Xóa/sửa đơn:</strong> Chỉ chủ và quản lý</li>
<li><strong>Nhập hàng:</strong> Chỉ quản lý trở lên</li>
<li><strong>Quản lý tài khoản:</strong> Chỉ chủ</li>
</ul>

<h2>Kết luận</h2>
<p>Phân quyền đúng không phải là không tin nhân viên — mà là bảo vệ dữ liệu kinh doanh và giảm rủi ro sai sót. Một hệ thống có phân quyền tốt giúp mọi người làm đúng việc của mình mà không vô tình gây thiệt hại.</p>
    `,
  },
  {
    slug: "gong-kinh-ma-chuan-hay-nhom-gia",
    title: "Quản lý gọng kính: nên dùng mã chuẩn hay nhóm giá?",
    excerpt:
      "Chuỗi lớn cần quản lý theo từng mã SKU. Shop nhỏ chỉ cần biết 'gọng 200k' hay 'gọng 500k'. Bài viết phân tích ưu nhược điểm từng cách và gợi ý khi nào dùng cách nào.",
    category: "ton-kho",
    date: "20/03/2026",
    readTime: "5 phút",
    author: "OptiGo Team",
    tags: ["gọng kính", "tồn kho", "mã chuẩn", "nhóm giá", "quản lý"],
    content: `
<p>Gọng kính là mặt hàng đa dạng nhất trong cửa hàng kính. Một shop trung bình có 100-500 mẫu gọng khác nhau về thương hiệu, chất liệu, màu sắc, kích cỡ. Vấn đề: quản lý theo cách nào cho hiệu quả?</p>

<h2>Cách 1: Mã chuẩn (SKU)</h2>
<p>Mỗi mẫu gọng có một mã riêng biệt, ví dụ: <code>RAY-AV-5268-BLK-52</code> (Ray-Ban Aviator, mã 5268, đen, size 52).</p>
<p><strong>Ưu điểm:</strong></p>
<ul>
<li>Kiểm soát chính xác từng mẫu</li>
<li>Biết ngay còn bao nhiêu chiếc mỗi mẫu</li>
<li>Phù hợp chuỗi lớn, nhập hàng có hệ thống</li>
</ul>
<p><strong>Nhược điểm:</strong></p>
<ul>
<li>Tốn thời gian tạo mã và nhập liệu</li>
<li>Shop nhỏ nhập 5-10 chiếc gọng mỗi lần → tạo mã từng cái rất phiền</li>
<li>Nhiều gọng nhập lẻ không có mã từ nhà cung cấp</li>
</ul>

<h2>Cách 2: Nhóm giá</h2>
<p>Gom gọng thành các nhóm theo mức giá: "Gọng 150k-200k", "Gọng 300k-500k", "Gọng trên 1 triệu".</p>
<p><strong>Ưu điểm:</strong></p>
<ul>
<li>Nhanh, đơn giản, không cần tạo mã</li>
<li>Phù hợp shop nhỏ, nhập lẻ</li>
<li>Nhân viên dễ nhớ: "gọng nhóm 3" = gọng 300k</li>
</ul>
<p><strong>Nhược điểm:</strong></p>
<ul>
<li>Không biết chính xác mẫu nào còn, mẫu nào hết</li>
<li>Khó kiểm kê chi tiết</li>
</ul>

<h2>Khi nào dùng cách nào?</h2>
<ul>
<li><strong>Dưới 50 mẫu, nhập lẻ:</strong> Nhóm giá cho nhanh</li>
<li><strong>50-200 mẫu, có nhà cung cấp cố định:</strong> Mã chuẩn</li>
<li><strong>Chuỗi nhiều chi nhánh:</strong> Bắt buộc mã chuẩn để kiểm soát</li>
<li><strong>Kết hợp:</strong> Gọng nhập chính hãng dùng mã chuẩn, gọng nhập lẻ dùng nhóm giá</li>
</ul>

<h2>Kết luận</h2>
<p>Không có cách nào "đúng" cho mọi cửa hàng. Quan trọng là phần mềm phải hỗ trợ cả hai cách và cho phép bạn chuyển đổi linh hoạt. Dù dùng cách nào, bạn vẫn cần biết: tồn kho bao nhiêu chiếc, giá vốn bao nhiêu, lãi từng cái bao nhiêu.</p>
    `,
  },
  {
    slug: "tang-ty-le-khach-quay-lai-tai-kham",
    title: "3 cách tăng tỷ lệ khách quay lại tái khám — từ 60% lên 85%",
    excerpt:
      "Phần lớn cửa hàng kính mất 30-40% khách sau lần khám đầu tiên vì không có hệ thống nhắc. Bài viết chia sẻ 3 phương pháp đơn giản để giữ khách quay lại.",
    category: "meo-nghe",
    date: "12/03/2026",
    readTime: "6 phút",
    author: "OptiGo Team",
    tags: ["tái khám", "CRM", "giữ khách", "lịch hẹn", "SMS"],
    content: `
<p>Tìm khách mới tốn gấp 5 lần giữ khách cũ — đây là nguyên tắc kinh doanh cơ bản nhưng rất ít cửa hàng kính áp dụng. Hầu hết phòng khám mắt không có hệ thống nhắc tái khám, dẫn đến mất 30-40% khách sau lần khám đầu.</p>

<h2>Cách 1: Đặt lịch tái khám ngay lúc khách còn ở phòng khám</h2>
<p>Đừng nói "anh/chị nhớ quay lại sau 2 tuần nhé" — hãy đặt lịch cụ thể ngay. Khi khách đồng ý ngày giờ cụ thể, tỷ lệ quay lại tăng gấp đôi so với "nhớ quay lại".</p>
<p><strong>Mẹo:</strong> Tạo lịch hẹn ngay trên hệ thống trước khi khách rời phòng khám. Hệ thống sẽ tự nhắc khi đến hẹn.</p>

<h2>Cách 2: Nhắc tự động qua SMS/Zalo trước ngày hẹn</h2>
<p>Gửi tin nhắc trước 1-2 ngày. Nội dung ngắn gọn:</p>
<blockquote>"Phòng khám [Tên] nhắc anh/chị [Tên khách] có lịch tái khám ngày [dd/mm]. Vui lòng đến đúng hẹn hoặc liên hệ [SĐT] để dời lịch."</blockquote>
<p>SMS có tỷ lệ đọc 98% — cao hơn mọi kênh khác. Zalo cũng rất hiệu quả tại Việt Nam.</p>

<h2>Cách 3: CRM chấm điểm — biết khách nào sắp mất</h2>
<p>Không phải tất cả khách đều cần chăm sóc giống nhau. CRM thông minh tự phân loại:</p>
<ul>
<li><strong>Hạng A (ưu tiên cao):</strong> Khách VIP chi tiêu lớn nhưng lâu chưa quay lại → gọi ngay</li>
<li><strong>Hạng B (theo dõi):</strong> Khách bình thường, hẹn sắp đến → nhắc nhẹ</li>
<li><strong>Hạng C (chưa cần):</strong> Khách mới khám gần đây → chưa cần tác động</li>
</ul>
<p>Sáng ra, nhân viên mở dashboard thấy ngay: hôm nay cần gọi ai, nhắc ai, chăm sóc ai. Không bỏ sót, không lãng phí thời gian cho khách chưa cần.</p>

<h2>Kết quả thực tế</h2>
<p>Các phòng khám áp dụng cả 3 cách trên báo cáo tỷ lệ khách quay lại tăng từ 55-60% lên 80-85%. Doanh thu từ khách cũ chiếm 60-70% tổng doanh thu — đây là nguồn ổn định nhất.</p>

<h2>Kết luận</h2>
<p>Giữ khách không khó — chỉ cần có hệ thống. Đặt lịch ngay, nhắc tự động, và CRM chấm điểm là 3 công cụ đơn giản nhưng thay đổi hoàn toàn cách vận hành phòng khám.</p>
    `,
  },
];
