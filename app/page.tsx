import Link from "next/link";

const metrics = [
  { value: "20+", label: "module quản lý từ khám đến báo cáo lãi" },
  { value: "< 3s", label: "tra hồ sơ bệnh nhân cũ khi quay lại" },
  { value: "4 vai trò", label: "chủ · quản lý · bác sĩ · nhân viên" },
  { value: "3 tháng", label: "dùng thử miễn phí, không cần thẻ" },
];

const painPoints = [
  {
    icon: "📋",
    title: "Ghi tay sai SPH, CYL, PD",
    description:
      "Đơn kính qua nhiều bước thủ công: ghi thị lực, số kính cũ, số kính mới, chọn tròng, chọn gọng. Nhầm một số là làm lại từ đầu.",
    solution: "OptiGo có form đo khám chuẩn: tách riêng mắt phải/trái, auto-fill mẫu tròng, chọn gọng từ kho, in đơn ngay.",
  },
  {
    icon: "📦",
    title: "Không biết tồn kho thật",
    description:
      'Gọng nhập về ghi vào sổ, bán xong quên trừ. Tròng loạn thị "hết hàng" nhưng thực tế còn 3 cặp trong tủ.',
    solution: "Hệ thống tự trừ tồn khi xuất đơn, cảnh báo gọng/tròng sắp hết, tính giá trị tồn kho theo giá vốn.",
  },
  {
    icon: "💰",
    title: "Doanh thu cao nhưng không biết lãi bao nhiêu",
    description:
      "Bán 50 triệu/ngày nhưng trừ giá nhập gọng, giá nhập tròng, chiết khấu, công nợ ra thì lãi thật bao nhiêu?",
    solution: "Báo cáo lãi gộp theo ngày, tách riêng doanh thu mắt/kính/thuốc, theo dõi công nợ 30-60-90 ngày.",
  },
  {
    icon: "📅",
    title: "Quên nhắc khách tái khám",
    description:
      "Khách làm kính xong, hẹn 2 tuần quay lại kiểm tra nhưng không ai nhắc. Khách không quay lại, mất luôn.",
    solution: "Lịch hẹn tự nhắc, dashboard hiện danh sách khách cần gọi hôm nay, CRM tự gắn cờ khách lâu không quay lại.",
  },
];

const workflow = [
  { step: "1", title: "Tiếp nhận", desc: "Khách đến → thêm vào phòng chờ. Hệ thống tự nhận diện khách cũ, hiển thị lịch sử khám ngay." },
  { step: "2", title: "Khám & kê đơn", desc: "Đo thị lực, chọn tròng/gọng từ kho, kê đơn thuốc từ mẫu có sẵn. Mỗi bước 2-3 click." },
  { step: "3", title: "Bán & thu tiền", desc: "Tự tính tổng tiền, hỗ trợ trả một phần, ghi nợ, tự trừ tồn kho. In đơn kính hoặc đơn thuốc." },
  { step: "4", title: "Theo dõi sau bán", desc: "Đặt lịch tái khám, nhắc nhân viên gọi khách, gửi tin nhắn chăm sóc. Tất cả trên 1 màn hình." },
  { step: "5", title: "Báo cáo & kiểm soát", desc: "Xem lãi gộp, doanh thu theo ngày, tồn kho theo giá vốn, công nợ theo tuổi nợ. Ẩn lãi với nhân viên." },
];

const featureBlocks = [
  {
    icon: "👁️",
    title: "Đơn kính chuyên sâu cho phòng khám mắt",
    desc: "Form đo khám tách riêng mắt phải/trái: thị lực, SPH, CYL, AXIS, ADD, PD. Lưu số kính cũ để so sánh khi tái khám.",
    highlights: ["Thị lực có kính / không kính", "Mẫu tròng + gọng từ kho", "In đơn kính có logo phòng khám"],
  },
  {
    icon: "💊",
    title: "Kê đơn thuốc nhanh với mẫu có sẵn",
    desc: "Chọn thuốc từ danh mục, dùng đơn thuốc mẫu theo chuyên khoa, auto-trừ tồn kho thuốc. Hỗ trợ cả thủ thuật.",
    highlights: ["Đơn mẫu theo bệnh lý", "Tự trừ tồn kho thuốc", "In đơn có chữ ký số"],
  },
  {
    icon: "📦",
    title: "Tồn kho tròng theo từng thông số quang học",
    desc: "Quản lý tròng theo SPH × CYL × ADD × mắt. Hai chế độ: có sẵn trong kho hoặc đặt khi có khách. Cảnh báo hết hàng.",
    highlights: ["Tồn theo SPH/CYL/ADD", "Chế độ sẵn kho / đặt hàng", "Nhập lô, xuất đơn, ghi hư hao"],
  },
  {
    icon: "🏪",
    title: "Quản lý gọng linh hoạt theo thực tế",
    desc: "Quản lý theo mẫu mã chuẩn hoặc theo nhóm giá — phù hợp cửa hàng nhỏ chỉ nhập vài chiếc lẫn chuỗi nhập hàng trăm mẫu.",
    highlights: ["Mã chuẩn hoặc mã nội bộ", "Tồn số lượng + tồn tiền", "Giá nhập, giá bán, lãi từng cái"],
  },
  {
    icon: "📊",
    title: "Báo cáo lãi thật, không chỉ doanh thu",
    desc: "Tách riêng doanh thu mắt, kính, thuốc. Trừ giá vốn để ra lãi gộp. Theo dõi công nợ 30-60-90 ngày. Bảo vệ lãi bằng mật khẩu.",
    highlights: ["Lãi gộp theo ngày/tháng", "Công nợ theo tuổi nợ", "Ẩn lãi với nhân viên"],
  },
  {
    icon: "📅",
    title: "Lịch hẹn, nhắc việc và CRM tự động",
    desc: "Đặt lịch tái khám, nhắc nhân viên ai cần gọi hôm nay. CRM gắn cờ khách lâu không quay lại để chăm sóc lại.",
    highlights: ["Nhắc hẹn tự động", "Xử lý hàng loạt quá hạn", "Gọi trực tiếp từ hệ thống"],
  },
];

const comparisonRows = [
  { feature: "Hồ sơ bệnh nhân + lịch sử", excel: false, pos: false, optigo: true },
  { feature: "Đơn kính: thị lực, SPH, CYL, PD", excel: false, pos: false, optigo: true },
  { feature: "Tồn tròng theo thông số quang học", excel: false, pos: false, optigo: true },
  { feature: "Tồn gọng + giá vốn + lãi từng cái", excel: "Thủ công", pos: "Một phần", optigo: true },
  { feature: "Kê đơn thuốc + trừ tồn kho thuốc", excel: false, pos: false, optigo: true },
  { feature: "Lịch hẹn + nhắc tái khám", excel: false, pos: false, optigo: true },
  { feature: "Báo cáo lãi gộp theo ngày", excel: "Thủ công", pos: "Một phần", optigo: true },
  { feature: "Phân quyền: ẩn lãi, ẩn giá nhập", excel: false, pos: false, optigo: true },
  { feature: "Tin nhắn nội bộ + nhắc việc", excel: false, pos: false, optigo: true },
  { feature: "In đơn có logo, chữ ký, tùy chỉnh", excel: false, pos: "Một phần", optigo: true },
];

const testimonials = [
  {
    quote:
      "Trước đây nhân viên ghi đơn rời rạc, giờ tra hồ sơ và xuất hàng nhanh hơn hẳn. Chủ shop nhìn được tồn và lãi theo ngày mà không cần hỏi nhân viên.",
    name: "Chị Hương",
    role: "Chủ cửa hàng kính độc lập",
    highlight: "Tìm hồ sơ khách cũ trong 3 giây",
  },
  {
    quote:
      "Điểm mình thích nhất là phần gọng kính: không cần ép quản lý theo mã quá chi tiết mà vẫn theo dõi được số lượng và giá vốn. Phù hợp cửa hàng vừa và nhỏ.",
    name: "Anh Minh",
    role: "Quản lý chuỗi 3 chi nhánh",
    highlight: "Quản lý gọng theo nhóm giá",
  },
  {
    quote:
      "Luồng khám và tái khám rõ ràng hơn nhiều. Khách quay lại là có lịch sử ngay, không cần hỏi lại từ đầu. Nhân viên mới cũng dùng được sau 1 buổi.",
    name: "Bác sĩ Lan",
    role: "Phòng khám mắt",
    highlight: "Nhân viên mới dùng được ngay",
  },
];

const pricing = [
  {
    name: "Dùng thử",
    price: "0đ",
    period: "3 tháng",
    description: "Dùng đầy đủ tính năng Pro trong 3 tháng hoặc 1.000 đơn — không cần thẻ, không giới hạn.",
    items: [
      "Tất cả tính năng Pro",
      "Không cần thẻ tín dụng",
      "3 tháng hoặc 1.000 đơn",
      "Hỗ trợ qua tin nhắn trong app",
      "Chuyển sang gói trả phí bất kỳ lúc nào",
    ],
    highlight: false,
    cta: "Bắt đầu dùng thử",
  },
  {
    name: "Pro",
    price: "499k",
    period: "/tháng",
    description: "Dành cho cửa hàng muốn vận hành trơn tru: nhắc việc, chăm khách, báo cáo lãi và tin nhắn nội bộ.",
    items: [
      "Hồ sơ bệnh nhân + đơn kính + đơn thuốc",
      "Tồn kho tròng, gọng, thuốc",
      "Lịch hẹn + nhắc tái khám tự động",
      "Tin nhắn nội bộ giữa nhân viên",
      "Báo cáo lãi gộp, tồn tiền, công nợ",
      "In đơn tùy chỉnh logo + chữ ký",
      "Nhắc việc hôm nay cho nhân viên",
    ],
    highlight: true,
    cta: "Chọn gói Pro",
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    period: "",
    description: "Dành cho chuỗi cửa hàng cần phân quyền sâu, ẩn dữ liệu nhạy cảm và quản lý nhiều chi nhánh.",
    items: [
      "Tất cả tính năng Pro",
      "Nhiều tài khoản + 4 cấp phân quyền",
      "Ẩn giá nhập, lợi nhuận với nhân viên",
      "Audit log: ai sửa gì, lúc nào",
      "Tích hợp Zalo nhắc hẹn tự động",
      "Nhiều chi nhánh + báo cáo tổng hợp",
      "Hỗ trợ triển khai 1-1",
    ],
    highlight: false,
    cta: "Liên hệ tư vấn",
  },
];

const faqs = [
  {
    q: "Có bắt buộc phải quản lý gọng theo mã chuẩn không?",
    a: "Không. Hệ thống hỗ trợ cả mã chuẩn, mã nội bộ và nhóm giá. Phù hợp cửa hàng chỉ nhập vài chiếc lẫn chuỗi nhập hàng trăm mẫu.",
  },
  {
    q: "Dùng thử miễn phí có giới hạn tính năng không?",
    a: "Không. Bạn được dùng đầy đủ tính năng Pro trong 3 tháng hoặc 1.000 đơn. Sau đó chọn gói phù hợp để tiếp tục.",
  },
  {
    q: "Nhân viên có nhìn được giá nhập và lợi nhuận không?",
    a: "Tùy bạn. Gói Enterprise cho phép ẩn giá nhập, nguồn nhập và lợi nhuận với nhân viên không có quyền. Báo cáo lãi cũng có thể bảo vệ bằng mật khẩu.",
  },
  {
    q: "Có quản lý được tồn tròng theo từng thông số SPH, CYL không?",
    a: "Có. Tồn tròng được quản lý theo từng tổ hợp SPH × CYL × ADD × mắt. Hệ thống tự trừ khi xuất đơn và cảnh báo khi sắp hết.",
  },
  {
    q: "Có phù hợp cho chuỗi nhiều cửa hàng không?",
    a: "Có. Mỗi chi nhánh là một tenant riêng biệt với dữ liệu tách biệt, phân quyền theo vai trò và báo cáo tổng hợp toàn hệ thống.",
  },
  {
    q: "Dữ liệu có an toàn không?",
    a: "Dữ liệu được lưu trên hạ tầng Supabase với mã hóa và Row-Level Security. Mỗi phòng khám chỉ truy cập được dữ liệu của mình.",
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
              Dùng thử miễn phí 3 tháng — không cần thẻ
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-[3.5rem] md:leading-[1.15]">
                Khám mắt, bán kính, quản tồn kho và biết lãi thật — trên một hệ thống
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                OptiGo được xây riêng cho phòng khám mắt và cửa hàng kính. Từ đo khám, kê đơn, chọn tròng/gọng,
                trừ tồn kho, đến theo dõi công nợ và báo cáo lãi gộp — tất cả trong cùng một luồng.
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
                  <p className="mt-1 text-2xl font-semibold text-slate-950">1,247</p>
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
                  <p className="mt-1 text-2xl font-semibold text-emerald-700">12.8tr</p>
                  <p className="text-xs text-emerald-500">Kính: 8.2tr · Thuốc: 4.6tr</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-3">
                  <p className="text-xs text-sky-600">Lãi gộp tháng</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-700">84.5tr</p>
                  <p className="text-xs text-sky-500">Đã trừ giá vốn nhập hàng</p>
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
            <p className="text-sm font-medium text-slate-500">Được thiết kế riêng cho ngành kính mắt Việt Nam — từ cửa hàng 1 người đến chuỗi nhiều chi nhánh</p>
            <div className="flex items-center gap-5 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Bảo mật dữ liệu</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Hỗ trợ tiếng Việt</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Dùng trên mọi thiết bị</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section id="pain" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Vấn đề thực tế</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            4 vấn đề khiến cửa hàng kính mất tiền mỗi ngày — và cách OptiGo giải quyết
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Luồng làm việc thực tế</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Từ lúc khách bước vào đến lúc nhìn được lãi — chỉ 5 bước
            </h2>
            <p className="mt-4 text-slate-300 leading-8">
              OptiGo bám theo cách phòng khám và cửa hàng kính thật sự làm việc, không ép bạn học quy trình mới.
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Tính năng chuyên sâu</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Mỗi tính năng giải quyết một vấn đề thật của cửa hàng kính
          </h2>
          <p className="mt-4 text-slate-600 leading-8">
            Không phải phần mềm POS bán lẻ chung chung. OptiGo hiểu sự khác biệt giữa SPH và CYL, giữa tròng đơn tròng và đa tròng, giữa gọng nhóm giá và gọng theo mẫu.
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
          <h3 className="text-center text-lg font-semibold text-slate-950">Và nhiều tính năng khác</h3>
          <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Phòng chờ real-time, nhận diện khách cũ",
              "Đơn thuốc mẫu theo chuyên khoa",
              "In đơn kính + đơn thuốc tùy chỉnh",
              "Theo dõi diễn tiến bệnh nhân",
              "Tin nhắn nội bộ giữa nhân viên",
              "Nhắc việc hôm nay cho từng người",
              "CRM: gắn cờ khách lâu không quay lại",
              "Quản lý thuốc: lô, hạn dùng, hư hao",
              "Thanh toán một phần, ghi nợ, theo dõi nợ",
              "Phát hiện và gộp bệnh nhân trùng",
              "Hướng dẫn sử dụng tùy chỉnh cho nhân viên",
              "Hỗ trợ trực tiếp qua tin nhắn trong app",
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">So sánh thực tế</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Excel, phần mềm POS thông thường hay OptiGo?
            </h2>
            <p className="mt-4 text-slate-300 leading-8">
              Phần mềm POS bán lẻ không hiểu đơn kính, không quản lý tồn tròng theo SPH/CYL, không nhắc tái khám.
              OptiGo được xây riêng cho ngành kính mắt.
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Khách hàng nói gì</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Từ cửa hàng 1 người đến chuỗi 3 chi nhánh đều dùng được
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
            <p className="text-3xl font-semibold text-slate-950">-68%</p>
            <p className="mt-1 text-sm text-slate-500">sai sót đơn kính</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">&lt; 3s</p>
            <p className="mt-1 text-sm text-slate-500">tra hồ sơ khách cũ</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">Real-time</p>
            <p className="mt-1 text-sm text-slate-500">báo cáo lãi gộp</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center">
            <p className="text-3xl font-semibold text-slate-950">1 buổi</p>
            <p className="mt-1 text-sm text-slate-500">nhân viên mới dùng được</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Bảng giá đơn giản</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Dùng thử miễn phí 3 tháng, sau đó chọn gói phù hợp</h2>
            <p className="mt-4 text-slate-600">
              Không cần thẻ tín dụng. Không giới hạn tính năng khi dùng thử. Chuyển sang gói trả phí khi bạn sẵn sàng.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Những điều chủ shop thường hỏi trước khi dùng</h2>
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
            Bắt đầu miễn phí trong 5 phút
          </h2>
          <p className="mt-4 text-lg text-slate-300 leading-8">
            Đăng ký → nhập thông tin phòng khám → bắt đầu kê đơn ngay. Không cần cài đặt, không cần đào tạo phức tạp, không cần thẻ tín dụng.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://app.optigo.vn/register" className="rounded-full bg-white px-8 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Dùng thử miễn phí 3 tháng
            </a>
            <Link href="https://app.optigo.vn" className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Đăng nhập
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">Không cần thẻ tín dụng · Hỗ trợ tiếng Việt · Dữ liệu bảo mật</p>
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
