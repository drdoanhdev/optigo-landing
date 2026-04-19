import Link from "next/link";

const metrics = [
  { value: "21+", label: "module chuyên sâu, từ đo khám đến CRM chăm khách" },
  { value: "< 2s", label: "tra hồ sơ & lịch sử khám, kể cả gõ không dấu" },
  { value: "4 vai trò", label: "chủ · quản lý · bác sĩ · nhân viên — phân quyền đến từng nút" },
  { value: "3 tháng", label: "dùng thử miễn phí, full tính năng, không cần thẻ" },
];

const painPoints = [
  {
    icon: "📋",
    title: "Ghi tay sai SPH, CYL, PD — mất khách vì đơn sai",
    description:
      "Đơn kính phải qua 5-6 bước thủ công: ghi thị lực không kính, có kính cũ, đo kính mới, chọn tròng, chọn gọng, tính tiền. Nhầm một con số — làm lại từ đầu, khách mất kiên nhẫn.",
    solution: "Form đo khám chuẩn quốc tế: tách mắt phải/trái, auto-fill tròng theo SPH×CYL×ADD, chọn gọng từ kho real-time, so sánh kính cũ vs mới ngay trên màn hình. In đơn 1 click.",
  },
  {
    icon: "📦",
    title: "Tồn kho ảo — bán hết mà không biết, còn hàng mà tưởng hết",
    description:
      'Gọng nhập về ghi vào sổ, bán xong quên trừ. Tròng loạn thị CYL -1.50 "hết hàng" nhưng thực tế còn 3 cặp trong ngăn kéo. Mất cả doanh thu lẫn uy tín.',
    solution: "Tồn kho tự trừ tức thì khi xuất đơn. Tròng quản lý đến từng tổ hợp SPH×CYL×ADD×mắt. Gọng theo mã chuẩn hoặc nhóm giá. Cảnh báo sắp hết, tính giá trị tồn theo giá vốn.",
  },
  {
    icon: "💰",
    title: "Bán 50 triệu/ngày nhưng không biết lãi thật bao nhiêu",
    description:
      "Doanh thu trông có vẻ tốt, nhưng trừ giá nhập gọng, giá nhập tròng Essilor, chiết khấu nhà phân phối, công nợ khách chưa thu — lãi thật là bao nhiêu? Không ai trả lời được.",
    solution: "Báo cáo lãi gộp real-time: tách riêng doanh thu kính/thuốc/thủ thuật. Trừ giá vốn tự động. Công nợ phân tầng 30-60-90 ngày. Bảo vệ số liệu lãi bằng mật khẩu riêng — nhân viên không thể xem.",
  },
  {
    icon: "📅",
    title: "Khách hẹn tái khám nhưng không ai nhắc — mất khách vĩnh viễn",
    description:
      "Khách làm kính xong, bác sĩ dặn 2 tuần quay lại kiểm tra. Nhưng không ai ghi, không ai nhắc. Khách không quay lại, đi shop khác. Mất khách cũ đắt gấp 5 lần tìm khách mới.",
    solution: "Lịch hẹn tự nhắc qua SMS và Zalo. Dashboard sáng sáng hiện danh sách khách cần gọi. CRM tự chấm điểm A/B/C và gắn cờ khách lâu không quay lại — không bao giờ quên một ai.",
  },
];

const workflow = [
  { step: "1", title: "Tiếp nhận thông minh", desc: "Khách bước vào → thêm vào phòng chờ real-time. Hệ thống nhận diện khách cũ qua tên hoặc camera, hiển thị toàn bộ lịch sử khám + đơn kính cũ ngay lập tức." },
  { step: "2", title: "Khám & kê đơn", desc: "Đo thị lực mắt phải/trái, ghi SPH/CYL/AXIS/ADD/PD. Chọn tròng Essilor/Hoya/Zeiss từ kho, chọn gọng, kê thuốc từ đơn mẫu. Mỗi bước 2-3 click." },
  { step: "3", title: "Bán & thu tiền", desc: "Tự tính tổng tiền kính + thuốc. Thanh toán đủ, trả một phần hoặc ghi nợ. Tồn kho tự trừ tức thì. In đơn kính có logo + chữ ký bác sĩ." },
  { step: "4", title: "Chăm sóc sau bán", desc: "Tự đặt lịch tái khám, nhắc qua SMS/Zalo. CRM chấm điểm khách VIP, gắn cờ khách cần gọi lại. Tin nhắn nội bộ phân việc cho nhân viên." },
  { step: "5", title: "Báo cáo & kiểm soát", desc: "Lãi gộp real-time, doanh thu theo ngày/tháng, top thuốc bán chạy, tồn kho theo giá vốn, công nợ phân tầng tuổi nợ. Ẩn lãi với nhân viên bằng mật khẩu." },
];

const featureBlocks = [
  {
    icon: "👁️",
    title: "Đơn kính chuyên sâu — chuẩn quốc tế",
    desc: "Form đo khám tách riêng mắt phải/trái: thị lực không kính, có kính cũ, có kính mới, SPH, CYL, AXIS, ADD, PD từng mắt. So sánh kính cũ vs mới side-by-side khi tái khám.",
    highlights: ["Thị lực 3 mức: không kính / kính cũ / kính mới", "Auto-fill tròng Essilor, Hoya, Zeiss từ kho", "In đơn kính có logo + chữ ký + QR code"],
  },
  {
    icon: "💊",
    title: "Kê đơn thuốc 30 giây với đơn mẫu",
    desc: "Chọn thuốc từ danh mục 10,000+ mặt hàng, dùng đơn mẫu theo bệnh lý (viêm kết mạc, khô mắt, glaucoma...). Tự trừ tồn kho, theo dõi lô và hạn sử dụng. Hỗ trợ cả thủ thuật.",
    highlights: ["Đơn mẫu theo chuyên khoa mắt/TMH", "Quản lý lô, hạn dùng, hủy thuốc hết hạn", "In đơn có chữ ký số + logo phòng khám"],
  },
  {
    icon: "📦",
    title: "Tồn kho tròng — quản lý đến từng thông số",
    desc: "Quản lý tròng theo từng tổ hợp SPH × CYL × ADD × mắt. Hai chế độ: sẵn kho (bán ngay) hoặc đặt khi có khách. Cảnh báo hết hàng real-time, nhập lô từ Excel.",
    highlights: ["Tồn chính xác theo SPH/CYL/ADD/mắt", "Hai chế độ: sẵn kho & đặt theo đơn", "Nhập lô Excel, ghi hư hao cắt sai/lỗi"],
  },
  {
    icon: "🏪",
    title: "Quản lý gọng — linh hoạt theo thực tế",
    desc: "Shop nhỏ nhập vài chiếc? Dùng nhóm giá. Chuỗi nhập hàng trăm mẫu? Dùng mã chuẩn. OptiGo hỗ trợ cả hai — biết lãi từng cái gọng, từng lần bán.",
    highlights: ["Mã chuẩn hoặc nhóm giá, tùy quy mô", "Tồn số lượng + tồn tiền theo giá vốn", "Lãi gộp từng cái: giá bán − giá nhập"],
  },
  {
    icon: "📊",
    title: "Báo cáo lãi thật — không chỉ số đẹp",
    desc: "12+ loại báo cáo: lãi gộp, doanh thu theo kênh (kính/thuốc/thủ thuật), top thuốc bán chạy, công nợ phân tầng, ARPU, biểu đồ giờ cao điểm. Bảo vệ bằng mật khẩu riêng.",
    highlights: ["Lãi gộp real-time theo ngày/tháng/quý", "Công nợ 30-60-90 ngày, bắt nợ xấu sớm", "Ẩn toàn bộ số liệu lãi với nhân viên"],
  },
  {
    icon: "🤖",
    title: "CRM thông minh — chấm điểm khách tự động",
    desc: "AI tự phân loại khách hạng A/B/C dựa trên: bao lâu chưa quay lại, giá trị đơn gần nhất, tổng chi tiêu, số lần khám. Dashboard sáng ra biết ngay hôm nay cần gọi ai.",
    highlights: ["Chấm điểm tự động A/B/C, có thể tùy chỉnh", "Nhắc hẹn tái khám qua SMS & Zalo", "Gắn cờ khách VIP & khách sắp mất"],
  },
];

const comparisonRows = [
  { feature: "Hồ sơ bệnh nhân + toàn bộ lịch sử khám", excel: false, pos: false, optigo: true },
  { feature: "Đơn kính: thị lực, SPH, CYL, AXIS, ADD, PD", excel: false, pos: false, optigo: true },
  { feature: "So sánh kính cũ vs kính mới khi tái khám", excel: false, pos: false, optigo: true },
  { feature: "Tồn tròng theo từng tổ hợp SPH×CYL×ADD×mắt", excel: false, pos: false, optigo: true },
  { feature: "Tồn gọng + giá vốn + lãi gộp từng cái", excel: "Thủ công", pos: "Một phần", optigo: true },
  { feature: "Kê đơn thuốc + quản lý lô/hạn dùng + trừ tồn", excel: false, pos: false, optigo: true },
  { feature: "Phòng chờ real-time, đếm thời gian chờ", excel: false, pos: false, optigo: true },
  { feature: "CRM tự chấm điểm + nhắc gọi khách hôm nay", excel: false, pos: false, optigo: true },
  { feature: "Lịch hẹn tái khám + nhắc SMS/Zalo tự động", excel: false, pos: false, optigo: true },
  { feature: "Báo cáo lãi gộp real-time + top thuốc bán chạy", excel: "Thủ công", pos: "Một phần", optigo: true },
  { feature: "Phân quyền 4 cấp, ẩn lãi/giá nhập với NV", excel: false, pos: false, optigo: true },
  { feature: "Tin nhắn nội bộ + nhắc việc từng người", excel: false, pos: false, optigo: true },
  { feature: "In đơn tùy chỉnh: logo, chữ ký số, QR code", excel: false, pos: "Một phần", optigo: true },
  { feature: "Tìm kiếm tiếng Việt không dấu, tức thì", excel: false, pos: false, optigo: true },
];

const testimonials = [
  {
    quote:
      "Trước đây nhân viên ghi đơn rời rạc, hay nhầm SPH với CYL. Giờ tra hồ sơ khách cũ chưa đầy 2 giây, xuất đơn kính có đầy đủ thông số mắt. Tôi ngồi nhà vẫn biết hôm nay lãi bao nhiêu mà không cần gọi nhân viên.",
    name: "Chị Hương",
    role: "Chủ cửa hàng kính, Quận 7, TP.HCM",
    highlight: "Biết lãi real-time từ xa",
  },
  {
    quote:
      "Quản lý 3 chi nhánh mà trước đây mỗi chi nhánh dùng 1 file Excel khác nhau, cuối tháng tổng hợp muốn phát điên. Giờ dữ liệu tập trung, mỗi chi nhánh tách biệt, báo cáo tổng hợp 1 click. Đỡ 3 ngày báo cáo mỗi tháng.",
    name: "Anh Minh",
    role: "Quản lý chuỗi 3 chi nhánh, Đà Nẵng",
    highlight: "Tiết kiệm 3 ngày/tháng",
  },
  {
    quote:
      "Luồng khám rất mượt: khách vào phòng chờ → bấm khám → đơn kính + đơn thuốc → in → xong. Khách quay lại là có toàn bộ lịch sử, so sánh kính cũ ngay. Nhân viên mới dùng được sau 1 buổi sáng, không cần đào tạo dài.",
    name: "Bác sĩ Lan",
    role: "Phòng khám mắt Sáng Ngời, Hà Nội",
    highlight: "Nhân viên mới dùng ngay sau 1 buổi",
  },
  {
    quote:
      "Phần CRM là thứ tôi không ngờ nhất. Hệ thống tự chấm điểm khách nào cần gọi lại, sáng ra mở dashboard thấy danh sách luôn. Từ khi dùng, tỷ lệ khách quay lại tăng rõ rệt — trước mất 40% khách sau tái khám, giờ còn dưới 15%.",
    name: "Anh Tuấn",
    role: "Chủ chuỗi kính mắt, Bình Dương",
    highlight: "Giảm mất khách từ 40% xuống 15%",
  },
];

const pricing = [
  {
    name: "Dùng thử",
    price: "0đ",
    period: "3 tháng",
    description: "Dùng đầy đủ tính năng trong 3 tháng hoặc 1.000 đơn — không cần thẻ, không giới hạn tính năng.",
    items: [
      "Tất cả tính năng của gói Pro",
      "Không cần thẻ tín dụng",
      "3 tháng hoặc 1.000 đơn",
      "Hỗ trợ trực tiếp qua tin nhắn trong app",
      "Chuyển sang gói trả phí bất kỳ lúc nào",
    ],
    highlight: false,
    cta: "Bắt đầu dùng thử",
  },
  {
    name: "Basic",
    price: "99k",
    period: "/tháng",
    description: "Đủ dùng cho phòng khám nhỏ 1-2 người: khám, kê đơn, in đơn, quản lý bệnh nhân và lịch hẹn cơ bản.",
    items: [
      "Hồ sơ bệnh nhân không giới hạn",
      "Đơn kính + đơn thuốc không giới hạn",
      "Phòng chờ real-time",
      "Danh mục thuốc + gọng + tròng",
      "Lịch hẹn + nhắc tái khám",
      "In đơn tùy chỉnh logo + chữ ký",
      "Báo cáo doanh thu cơ bản",
    ],
    highlight: false,
    cta: "Chọn gói Basic",
  },
  {
    name: "Pro",
    price: "199k",
    period: "/tháng",
    description: "Toàn diện cho cửa hàng kính chuyên nghiệp: tồn kho chi tiết, báo cáo nâng cao, CRM chăm khách, tin nhắn nội bộ.",
    items: [
      "Tất cả tính năng Basic",
      "Tồn kho tròng theo SPH×CYL×ADD",
      "Tồn kho thuốc: lô, hạn dùng, hư hao",
      "Báo cáo lãi gộp, ARPU, giờ cao điểm",
      "CRM tự chấm điểm khách A/B/C",
      "Tin nhắn nội bộ + nhắc việc",
      "Lên đến 10 tài khoản nhân viên",
    ],
    highlight: true,
    cta: "Chọn gói Pro",
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Dành cho chuỗi cửa hàng: nhiều chi nhánh, phân quyền sâu 4 cấp, ẩn dữ liệu nhạy cảm, báo cáo tổng hợp liên chi nhánh.",
    items: [
      "Tất cả tính năng Pro",
      "Lên đến 20 chi nhánh + 50 tài khoản",
      "Phân quyền 4 cấp: chủ/quản lý/bác sĩ/NV",
      "Ẩn giá nhập, lợi nhuận với nhân viên",
      "Tích hợp Zalo nhắc hẹn tự động",
      "Báo cáo tổng hợp toàn hệ thống",
      "Hỗ trợ triển khai 1-1 + đào tạo tại chỗ",
    ],
    highlight: false,
    cta: "Liên hệ tư vấn",
  },
];

const faqs = [
  {
    q: "Có bắt buộc phải quản lý gọng theo mã chuẩn không?",
    a: "Không. OptiGo hỗ trợ cả mã chuẩn lẫn nhóm giá. Cửa hàng nhỏ chỉ nhập vài chiếc? Dùng nhóm giá cho nhanh. Chuỗi nhập hàng trăm mẫu? Dùng mã chuẩn để kiểm soát chi tiết. Cả hai đều tính được lãi từng cái.",
  },
  {
    q: "Dùng thử miễn phí có giới hạn tính năng không?",
    a: "Không giới hạn gì cả. Bạn được dùng đầy đủ tính năng Pro (bao gồm tồn kho, CRM, báo cáo nâng cao) trong 3 tháng hoặc đến khi tạo đủ 1.000 đơn. Sau đó chọn gói phù hợp để tiếp tục.",
  },
  {
    q: "Nhân viên có nhìn được giá nhập và lợi nhuận không?",
    a: "Không, trừ khi bạn cho phép. Hệ thống phân quyền 4 cấp: nhân viên chỉ thấy thông tin cần thiết để làm việc. Giá nhập, nguồn nhập, lợi nhuận được ẩn theo vai trò. Báo cáo lãi còn được bảo vệ thêm bằng mật khẩu riêng.",
  },
  {
    q: "Tìm kiếm bệnh nhân có hỗ trợ gõ không dấu không?",
    a: "Có. OptiGo có hệ thống tìm kiếm tiếng Việt thông minh: gõ 'nguyen van a' vẫn tìm được 'Nguyễn Văn A'. Tìm theo tên, số điện thoại hoặc mã bệnh nhân — kết quả hiện trong chưa đầy 2 giây.",
  },
  {
    q: "Có quản lý được tồn tròng theo từng thông số SPH, CYL không?",
    a: "Đây là thế mạnh của OptiGo. Tồn tròng được quản lý theo từng tổ hợp SPH × CYL × ADD × mắt (phải/trái). Hệ thống tự trừ khi xuất đơn, cảnh báo khi sắp hết, và hỗ trợ nhập lô từ Excel.",
  },
  {
    q: "Có phù hợp cho chuỗi nhiều cửa hàng không?",
    a: "Rất phù hợp. Mỗi chi nhánh là một workspace riêng biệt với dữ liệu tách biệt hoàn toàn. Chủ chuỗi nhìn được báo cáo tổng hợp toàn hệ thống, phân quyền theo vai trò từng chi nhánh. Hỗ trợ lên đến 20 chi nhánh.",
  },
  {
    q: "Dữ liệu bệnh nhân có an toàn không?",
    a: "An toàn tuyệt đối. Dữ liệu được mã hóa và lưu trên hạ tầng Supabase với Row-Level Security — mỗi phòng khám chỉ truy cập được dữ liệu của mình, kể cả kỹ thuật viên OptiGo cũng không can thiệp được vào dữ liệu khám bệnh.",
  },
  {
    q: "Có cần cài phần mềm hay mua server không?",
    a: "Không cần cài gì cả. OptiGo chạy trên trình duyệt web — máy tính, tablet, điện thoại đều dùng được. Dữ liệu lưu trên cloud, không lo mất khi hỏng máy. Đăng ký xong là dùng ngay trong 5 phút.",
  },
];

export default function Home() {
  return (
    <main className="text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">O</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">OptiGo</p>
              <p className="hidden text-sm font-medium text-slate-600 sm:block">Phần mềm quản lý phòng khám mắt & cửa hàng kính</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#pain" className="transition hover:text-slate-950">Vấn đề</a>
            <a href="#features" className="transition hover:text-slate-950">Tính năng</a>
            <a href="#comparison" className="transition hover:text-slate-950">So sánh</a>
            <a href="#proof" className="transition hover:text-slate-950">Khách hàng</a>
            <a href="#pricing" className="transition hover:text-slate-950">Bảng giá</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="https://app.optigo.vn" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white sm:inline-flex">
              Đăng nhập
            </Link>
            <a href="#pricing" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Dùng thử miễn phí
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_36%),radial-gradient(circle_at_left,rgba(15,23,42,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Đang được 150+ phòng khám & cửa hàng kính tin dùng
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-[3.5rem] md:leading-[1.15]">
                Phần mềm duy nhất hiểu đơn kính, tồn tròng và lãi thật — xây riêng cho ngành mắt
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                OptiGo không phải phần mềm POS bán lẻ gắn thêm module kính. Đây là hệ thống được thiết kế từ đầu cho phòng khám mắt: đo khám SPH/CYL/PD, kê đơn thuốc + đơn kính, tồn kho tròng theo thông số quang học, CRM tự chấm điểm khách, và báo cáo lãi gộp real-time.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800">
                Dùng thử miễn phí 3 tháng
              </a>
              <a href="#features" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Xem tính năng
              </a>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-0.5 text-sm leading-5 text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero dashboard mock */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Dashboard thực tế</p>
                  <p className="text-lg font-semibold text-slate-900">Phòng khám mắt Sáng Ngời</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Online</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Bệnh nhân</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-950">2,847</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Đang chờ khám</p>
                  <p className="mt-1 text-2xl font-semibold text-amber-600">5</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-400">Hẹn hôm nay</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-600">8</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-emerald-50 p-3">
                  <p className="text-xs text-emerald-600">Doanh thu hôm nay</p>
                  <p className="mt-1 text-2xl font-semibold text-emerald-700">18.4tr</p>
                  <p className="text-xs text-emerald-500">Kính: 11.2tr · Thuốc: 5.8tr · Thủ thuật: 1.4tr</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-3">
                  <p className="text-xs text-sky-600">Lãi gộp tháng</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-700">127.5tr</p>
                  <p className="text-xs text-sky-500">Đã trừ giá vốn · Margin 42%</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3">
                <p className="text-xs font-medium text-amber-700">⚠️ Cần xử lý hôm nay</p>
                <div className="mt-2 space-y-1.5 text-sm text-amber-800">
                  <div className="flex items-center justify-between">
                    <span>Gọng sắp hết: <strong>16 mẫu</strong></span>
                    <span className="text-xs text-amber-600">Cần nhập thêm</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hẹn quá hạn: <strong>3 khách</strong></span>
                    <span className="text-xs text-amber-600">Cần gọi lại</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Công nợ &gt;30 ngày: <strong>2.1tr</strong></span>
                    <span className="text-xs text-amber-600">Cần thu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm font-medium text-slate-500">Phần mềm duy nhất trên thị trường Việt Nam quản lý tồn tròng theo SPH×CYL×ADD — từ cửa hàng 1 người đến chuỗi 20 chi nhánh</p>
            <div className="flex items-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Mã hóa + Row-Level Security</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Tìm kiếm tiếng Việt không dấu</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Web app — dùng trên mọi thiết bị</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section id="pain" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Bạn đang mất tiền mỗi ngày</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            4 lỗ hổng khiến cửa hàng kính mất doanh thu, mất khách, mất lãi — và cách OptiGo xử lý triệt để
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {painPoints.map((item) => (
            <article key={item.title} className="group rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-500">{item.description}</p>
              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-sm font-medium text-emerald-800">✅ {item.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Đúng cách bạn làm việc</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Từ lúc khách bước vào đến lúc biết lãi thật — chỉ 5 bước, mỗi bước 2-3 click
            </h2>
            <p className="mt-4 text-slate-300 leading-8">
              OptiGo bám theo cách phòng khám mắt thật sự vận hành hàng ngày. Không ép bạn học quy trình mới — hệ thống thích nghi theo bạn.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {workflow.map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sm font-bold text-sky-300">{item.step}</div>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">21+ module chuyên sâu</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Mỗi tính năng giải quyết một vấn đề thật — không có tính năng thừa
          </h2>
          <p className="mt-4 text-slate-600 leading-8">
            OptiGo hiểu sự khác biệt giữa SPH và CYL, giữa tròng đơn tròng và đa tròng, giữa gọng nhóm giá và gọng theo mẫu. Phần mềm POS bán lẻ thông thường không hiểu được những điều này.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureBlocks.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Extra features grid */}
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-center text-lg font-semibold text-slate-950">Và 15+ tính năng khác đi kèm</h3>
          <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Phòng chờ real-time, hiện thời gian chờ theo màu",
              "Nhận diện khuôn mặt — tự thêm vào phòng chờ",
              "Đơn thuốc mẫu theo chuyên khoa mắt & TMH",
              "In đơn kính + đơn thuốc: logo, chữ ký, QR code",
              "Diễn tiến bệnh nhân — ghi chú qua từng lần khám",
              "Tin nhắn nội bộ real-time giữa nhân viên",
              "Nhắc việc hôm nay cho từng người trong team",
              "Quản lý thuốc: lô, hạn dùng, hủy thuốc hết hạn",
              "Thanh toán một phần, ghi nợ, theo dõi công nợ",
              "Phát hiện & gộp bệnh nhân trùng tự động",
              "Tìm kiếm tiếng Việt không dấu, tức thì",
              "Nhà cung cấp: gọng, tròng, thuốc — lưu đầy đủ",
              "Thanh toán online qua SePay + QR code",
              "Hướng dẫn sử dụng tùy chỉnh cho nhân viên mới",
              "Hỗ trợ trực tiếp qua tin nhắn trong app 24/7",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section id="comparison" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Sự thật không ai nói</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Sổ tay, Excel và phần mềm POS đang thiếu gì?
            </h2>
            <p className="mt-4 text-slate-300 leading-8">
              Phần mềm POS bán lẻ không biết SPH là gì, không quản lý tồn tròng theo thông số quang học, không nhắc tái khám, không biết lãi thật.
              OptiGo là phần mềm duy nhất xây từ đầu cho ngành kính mắt Việt Nam.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 text-left font-medium text-slate-400">Tính năng</th>
                  <th className="py-3 text-center font-medium text-slate-400">Sổ tay / Excel</th>
                  <th className="py-3 text-center font-medium text-slate-400">Phần mềm POS</th>
                  <th className="py-3 text-center font-medium text-sky-300">OptiGo</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5">
                    <td className="py-3 text-slate-200">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.excel === true ? <span className="text-emerald-400">✓</span> : row.excel === false ? <span className="text-slate-500">✗</span> : <span className="text-amber-400">{row.excel}</span>}
                    </td>
                    <td className="py-3 text-center">
                      {row.pos === true ? <span className="text-emerald-400">✓</span> : row.pos === false ? <span className="text-slate-500">✗</span> : <span className="text-amber-400">{row.pos}</span>}
                    </td>
                    <td className="py-3 text-center">
                      {row.optigo === true ? <span className="text-emerald-400 font-bold">✓</span> : <span className="text-slate-500">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">150+ phòng khám & cửa hàng kính tin dùng</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Từ phòng khám 1 bác sĩ đến chuỗi 10 chi nhánh — đều thấy kết quả sau tuần đầu
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6">
              <div className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                {item.highlight}
              </div>
              <blockquote className="text-slate-700 leading-7">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                  {item.name.charAt(item.name.indexOf(" ") + 1)}
                </div>
                <div>
                  <div className="font-semibold text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">-72%</p>
            <p className="mt-1 text-sm text-slate-500">sai sót đơn kính & đơn thuốc</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">&lt; 2s</p>
            <p className="mt-1 text-sm text-slate-500">tra hồ sơ + lịch sử khám</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">+35%</p>
            <p className="mt-1 text-sm text-slate-500">khách quay lại tái khám</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">5 phút</p>
            <p className="mt-1 text-sm text-slate-500">đăng ký → bắt đầu kê đơn</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Bảng giá minh bạch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Dùng thử miễn phí 3 tháng — sau đó từ 99k/tháng</h2>
            <p className="mt-4 text-slate-600">
              Rẻ hơn một ly cà phê mỗi ngày. Không cần thẻ tín dụng. Full tính năng khi dùng thử. Chuyển gói bất kỳ lúc nào.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-[2rem] border p-6 ${plan.highlight ? "border-sky-500 bg-white shadow-[0_20px_50px_rgba(14,165,233,0.08)]" : "border-slate-200 bg-white"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">Phổ biến nhất</span>
                  ) : null}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-slate-950">{plan.price}</span>
                  {plan.period && <span className="text-slate-500">{plan.period}</span>}
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-7">{plan.description}</p>
                <ul className="mt-5 flex-1 space-y-3 text-sm text-slate-600">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === "Enterprise" ? "mailto:hello@optigo.vn" : "https://app.optigo.vn/register"}
                  className={`mt-6 block rounded-full px-4 py-3 text-center font-semibold transition ${
                    plan.highlight ? "bg-slate-950 text-white hover:bg-slate-800" : "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Câu hỏi thường gặp</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">8 câu hỏi chủ shop & bác sĩ thường hỏi trước khi quyết định</h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-[1.75rem] border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {faq.q}
                  <span className="ml-4 text-slate-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            5 phút từ lúc đăng ký đến lúc kê đơn đầu tiên
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-8">
            Đăng ký email → nhập tên phòng khám → bắt đầu khám và kê đơn ngay. Không cần cài đặt, không cần server, không cần đào tạo, không cần thẻ tín dụng. Dùng thử 3 tháng miễn phí.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://app.optigo.vn/register" className="rounded-full bg-white px-8 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Dùng thử miễn phí 3 tháng
            </a>
            <Link href="https://app.optigo.vn" className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Đăng nhập
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">Không cần thẻ tín dụng · 150+ phòng khám đang dùng · Dữ liệu mã hóa Row-Level Security</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-950 text-xs font-semibold text-white">O</div>
            <span className="text-sm font-medium text-slate-600">OptiGo — Phần mềm quản lý phòng khám mắt & cửa hàng kính</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="mailto:hello@optigo.vn" className="transition hover:text-slate-900">hello@optigo.vn</a>
            <Link href="https://app.optigo.vn" className="transition hover:text-slate-900">Đăng nhập</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
