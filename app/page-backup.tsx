import Link from "next/link";

const customerLogos = ["Mắt Sáng", "Optical Care", "Vision Lab", "Kính An Tâm", "EyePlus", "Lens House"];

const metrics = [
  { value: "1 hệ thống", label: "quản lý khám, bán hàng, tồn kho và lợi nhuận" },
  { value: "2 chế độ", label: "quản lý gọng theo mẫu hoặc theo nhóm giá" },
  { value: "3 vai trò", label: "chủ shop, quản lý, nhân viên với dữ liệu khác nhau" },
  { value: "24/7", label: "nhắc lịch hẹn, nhắc việc và chăm sóc khách" },
];

const painPoints = [
  {
    title: "Sai đơn, sai thông số",
    description:
      "Ghi tay nhiều bước khiến SPH, CYL, PD, tròng, gọng hoặc trạng thái thanh toán dễ bị nhầm.",
  },
  {
    title: "Dữ liệu rời rạc",
    description:
      "Bệnh nhân, lịch hẹn, kho hàng và báo cáo ở nhiều nơi nên khó theo dõi toàn bộ hành trình khách hàng.",
  },
  {
    title: "Khó biết lãi thật",
    description:
      "Chỉ nhìn doanh thu là chưa đủ. Cần biết tồn gọng, tồn tròng, giá vốn, công nợ và lãi gộp thực tế.",
  },
];

const roadmap = {
  basic: [
    "Hồ sơ bệnh nhân và lịch sử khám",
    "Đơn kính, in đơn kính và in đơn thuốc",
    "Lịch hẹn cơ bản và nhắc tái khám",
    "Xuất nhập tồn tròng kính, gọng kính, vật tư",
    "Báo cáo cơ bản về doanh thu và tồn kho",
  ],
  pro: [
    "Tất cả tính năng Basic",
    "Tin nhắn nội bộ giữa các thành viên",
    "Nhắc việc hôm nay cho nhân viên",
    "Gửi tin nhắn nhanh đặt tròng kính / chăm sóc khách",
    "Báo cáo nâng cao: lãi gộp, tồn tiền, hiệu quả bán hàng",
    "Giới hạn theo gói: số bệnh nhân, số đơn, số truy vấn báo cáo",
    "Cảnh báo khi vượt mức và đề xuất nâng cấp",
  ],
  enterprise: [
    "Tất cả tính năng Pro",
    "Nhiều tài khoản và phân quyền chi tiết theo vai trò",
    "Ẩn giá nhập, nguồn nhập và lợi nhuận với nhân viên không có quyền",
    "Audit log: ghi lịch sử chỉnh sửa theo người sửa và thời điểm sửa",
    "Lịch sử thay đổi cho lịch hẹn, đơn kính, giá và báo cáo quan trọng",
    "Tích hợp Zalo để gửi nhắc hẹn, nhắc lấy kính và chăm sóc tự động",
    "Triển khai nhiều chi nhánh và báo cáo tổng hợp toàn hệ thống",
  ],
};

const featureBlocks = [
  {
    title: "Quản lý bệnh nhân và hồ sơ khám",
    items: [
      "Lưu thông tin liên hệ, lịch sử khám, diễn tiến và ghi chú riêng cho từng bệnh nhân.",
      "Tra cứu nhanh khi khách quay lại, hạn chế hỏi lại thông tin cũ nhiều lần.",
    ],
  },
  {
    title: "Đơn kính chính xác theo quy trình thực tế",
    items: [
      "Theo dõi thị lực, số kính cũ/mới, tròng, gọng, PD và ghi chú lâm sàng.",
      "Giảm nhầm lẫn khi tư vấn, đo khám và bàn giao đơn cho khách.",
    ],
  },
  {
    title: "Lịch hẹn, nhắc việc và chăm sóc khách",
    items: [
      "Đặt lịch tái khám, theo dõi trạng thái chờ / đã hẹn / đã khám.",
      "Nhắc nhân viên ai cần gọi hôm nay, ai cần gửi tin nhắn, ai cần theo dõi lại.",
    ],
  },
  {
    title: "Quản lý gọng, tròng và hàng tồn thực tế",
    items: [
      "Hỗ trợ cửa hàng quản lý theo mã mẫu, theo nhóm giá hoặc theo lô nhập.",
      "Xem tồn số lượng, tồn tiền và giá vốn để biết hàng nào đang chiếm vốn.",
    ],
  },
  {
    title: "Báo cáo bán hàng và lợi nhuận",
    items: [
      "Xem doanh thu, chiết khấu, công nợ, lãi gộp và giá trị tồn kho theo thời gian.",
      "Biết rõ hàng nào bán chạy, hàng nào chậm luân chuyển, hàng nào cần nhập thêm.",
    ],
  },
  {
    title: "Phù hợp nhiều mô hình phòng khám / cửa hàng kính",
    items: [
      "Từ một cửa hàng nhỏ đến chuỗi chi nhánh đều có thể dùng chung quy trình.",
      "Có thể mở rộng dần mà không phải thay toàn bộ hệ thống.",
    ],
  },
];

const comparison = [
  ["Ghi tay / Excel", "Dễ bắt đầu nhưng khó kiểm soát sai sót, tồn kho, công nợ và lịch hẹn khi tăng đơn."],
  ["Phần mềm chỉ có hóa đơn", "Có bán hàng nhưng thiếu chiều sâu về khám, tái khám, nhắc việc và tồn gọng / tròng."],
  ["OptiGo", "Gom toàn bộ quy trình: khám - bán - tồn - lãi - nhắc hẹn - chăm sóc khách trên một luồng."],
];

const testimonials = [
  {
    quote:
      "Trước đây nhân viên ghi đơn rời rạc, giờ tra hồ sơ và xuất hàng nhanh hơn hẳn. Chủ shop nhìn được tồn và lãi theo ngày.",
    name: "Chị Hương",
    role: "Chủ cửa hàng kính độc lập",
  },
  {
    quote:
      "Điểm mình thích nhất là phần gọng kính: không cần ép quản lý theo mã quá chi tiết mà vẫn theo dõi được số lượng và giá vốn.",
    name: "Anh Minh",
    role: "Quản lý chuỗi 3 chi nhánh",
  },
  {
    quote:
      "Luồng khám và tái khám rõ ràng hơn nhiều. Khách quay lại là có lịch sử ngay, giảm nhầm lẫn và tăng tỷ lệ chốt đơn.",
    name: "Bác sĩ Lan",
    role: "Phòng khám mắt",
  },
];

const pricing = [
  {
    name: "Basic",
    price: "299k",
    description: "Phù hợp cửa hàng nhỏ muốn số hóa quy trình cơ bản và quản lý hàng hóa cốt lõi.",
    items: [
      "Hồ sơ bệnh nhân",
      "Đơn kính, in đơn kính và in đơn thuốc",
      "Lịch hẹn cơ bản",
      "Xuất nhập tồn tròng kính, gọng kính, vật tư",
      "Báo cáo cơ bản",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "499k",
    description: "Dành cho cửa hàng muốn vận hành trơn tru hơn, nhắc việc tốt hơn và bán hàng thông minh hơn.",
    items: [
      "Tất cả Basic",
      "Tin nhắn nội bộ giữa nhân viên",
      "Nhắc việc hôm nay và chăm sóc khách",
      "Tin nhắn nhanh đặt tròng kính",
      "Báo cáo nâng cao: lãi gộp, tồn tiền, hiệu suất",
      "Giới hạn theo gói và cảnh báo vượt mức",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    description: "Dành cho chuỗi cửa hàng và phòng khám cần phân quyền sâu, ẩn dữ liệu và audit log đầy đủ.",
    items: [
      "Tất cả Pro",
      "Nhiều tài khoản và phân quyền chi tiết",
      "Ẩn giá nhập, nguồn nhập và lợi nhuận",
      "Audit log cho lịch hẹn, đơn kính, báo cáo",
      "Tích hợp Zalo và nhắc hẹn tự động",
      "Nhiều chi nhánh và báo cáo tổng hợp",
    ],
    highlight: false,
  },
];

const workflow = [
  "Tiếp nhận bệnh nhân và lưu hồ sơ",
  "Khám mắt, tạo đơn kính và tư vấn gọng / tròng",
  "Ghi nhận nhập hàng, trừ tồn và tính giá vốn",
  "Bán hàng, thu tiền, theo dõi công nợ",
  "Đặt lịch tái khám và chăm sóc sau bán",
];

export default function Home() {
  return (
    <main className="text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">O</div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">OptiGo</p>
              <p className="text-sm font-medium text-slate-600">Phần mềm quản lý phòng khám mắt và cửa hàng kính</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#roadmap" className="hover:text-slate-950">Roadmap</a>
            <a href="#features" className="hover:text-slate-950">Tính năng</a>
            <a href="#comparison" className="hover:text-slate-950">So sánh</a>
            <a href="#proof" className="hover:text-slate-950">Khách hàng</a>
            <a href="#pricing" className="hover:text-slate-950">Bảng giá</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="https://app.optigo.vn" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white">
              Đăng nhập
            </Link>
            <a href="#pricing" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Dùng thử miễn phí
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_36%),radial-gradient(circle_at_left,rgba(15,23,42,0.08),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Tối ưu cho phòng khám mắt, nhà thuốc kính và chuỗi cửa hàng kính
            </div>
            <div className="space-y-5">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Quản lý bệnh nhân, đơn kính, tồn kho và lợi nhuận trên một hệ thống duy nhất
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                OptiGo giúp bạn vận hành bán hàng khoa học hơn: giảm sai đơn, quản lý gọng và tròng đúng thực tế,
                đồng thời kiểm soát lịch hẹn, nhắc việc, tin nhắn khách hàng và báo cáo lãi rõ ràng.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#pricing" className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800">
                Bắt đầu dùng thử
              </a>
              <Link href="https://app.optigo.vn" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Xem đăng nhập
              </Link>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200/70 bg-white/85 p-4 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-sky-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Bảng điều khiển</p>
                  <p className="text-lg font-semibold text-slate-900">Demo giao diện quản lý</p>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">Hoạt động</div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Đơn kính hôm nay</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">28</p>
                  <p className="mt-2 text-sm text-emerald-600">+12% so với hôm qua</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Lãi gộp tháng này</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">84.5tr</p>
                  <p className="mt-2 text-sm text-sky-600">Đã trừ giá vốn nhập hàng</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Gọng sắp hết</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">16</p>
                  <p className="mt-2 text-sm text-amber-600">Cần nhập thêm nhóm bán chạy</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Lịch hẹn chờ xử lý</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">9</p>
                  <p className="mt-2 text-sm text-slate-600">Tự động nhắc quay lại</p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">Dòng bán hàng mẫu</p>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between"><span>Khám mắt + đơn kính</span><span>320,000đ</span></div>
                  <div className="flex justify-between"><span>Gọng nhóm A</span><span>450,000đ</span></div>
                  <div className="flex justify-between"><span>Tròng đổi chiết suất</span><span>780,000đ</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Khách hàng tin dùng</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">Từ cửa hàng độc lập đến mô hình nhiều chi nhánh</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {customerLogos.map((logo) => (
                <div key={logo} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Roadmap theo gói</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Chia sản phẩm thành 3 gói để bán hợp lý, dễ nâng cấp và đúng nhu cầu thực tế
          </h2>
          <p className="mt-4 text-slate-600 leading-8">
            Basic lo phần vận hành cốt lõi. Pro mở rộng cho giao tiếp nội bộ, nhắc việc và báo cáo nâng cao. Enterprise dành cho chuỗi, phân quyền sâu và bảo mật dữ liệu.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-950">Basic</h3>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Nền tảng</span>
            </div>
            <p className="mt-3 text-slate-600 leading-7">
              Dành cho cửa hàng nhỏ cần vận hành gọn: ghi nhận bệnh nhân, đơn kính, lịch hẹn và tồn kho cơ bản.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {roadmap.basic.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-sky-500 bg-sky-50 p-6 shadow-[0_20px_50px_rgba(14,165,233,0.08)]">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-950">Pro</h3>
              <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">Phổ biến</span>
            </div>
            <p className="mt-3 text-slate-700 leading-7">
              Dành cho cửa hàng muốn bán tốt hơn, chăm khách tốt hơn và quản lý nhóm làm việc tốt hơn.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              {roadmap.pro.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-slate-200 bg-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-950">Enterprise</h3>
              <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">Chuỗi</span>
            </div>
            <p className="mt-3 text-slate-600 leading-7">
              Dành cho chuỗi cửa hàng và phòng khám cần kiểm soát chặt quyền truy cập, audit log và chia sẻ dữ liệu có giới hạn.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {roadmap.enterprise.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-slate-950" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-18">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Khi vận hành rời rạc, bạn mất doanh thu ở cả khâu khám lẫn khâu bán hàng
            </h2>
            <p className="mt-4 text-slate-600">
              OptiGo được xây dựng để giải quyết đúng những điểm đau thường gặp của cửa hàng kính và phòng khám mắt.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Luồng nghiệp vụ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Thiết kế theo cách phòng khám và cửa hàng kính thật sự đang làm việc
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                Thay vì bắt người dùng học phần mềm, OptiGo bám theo thói quen vận hành thực tế để giảm thời gian nhập liệu.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {workflow.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold text-sky-300">Bước {index + 1}</div>
                  <p className="mt-3 leading-7 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Tính năng nổi bật</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Đủ sâu cho vận hành thật, đủ rõ cho bán hàng theo gói
            </h2>
            <p className="mt-4 text-slate-600 leading-8">
              Nội dung được tách thành từng lớp đúng theo roadmap. Basic bán được ngay, Pro tăng hiệu quả vận hành, Enterprise đáp ứng chuỗi và kiểm soát nội bộ.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white">
            <p className="text-sm font-medium text-sky-300">Điểm nhấn</p>
            <p className="mt-3 text-xl font-semibold">Gọng kính linh hoạt theo thực tế cửa hàng</p>
            <p className="mt-3 leading-7 text-slate-300">
              Hỗ trợ mã chuẩn, mã nội bộ, nhóm giá và tồn theo lô để cửa hàng lớn lẫn cửa hàng nhỏ đều dùng được.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featureBlocks.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                {item.items.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">So sánh với cách quản lý cũ</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Vì sao OptiGo bán hàng và quản trị tốt hơn Excel hoặc phần mềm chỉ có hóa đơn
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                Nhiều shop tăng trưởng chậm vì phải dùng quá nhiều file rời, sổ tay và phần mềm chỉ xử lý thanh toán.
                OptiGo nối liền toàn bộ luồng từ khám đến báo cáo.
              </p>
            </div>

            <div className="grid gap-4">
              {comparison.map(([name, desc]) => (
                <div key={name} className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="text-lg font-semibold text-white">{name}</div>
                  <div className="text-slate-300 leading-7">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Số liệu tin cậy</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Những chỉ số chủ shop cần thấy ngay để ra quyết định
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Tỷ lệ sai sót đơn</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">-68%</p>
                <p className="mt-2 text-sm text-slate-600">khi lưu đơn tập trung và có mẫu chuẩn</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Tốc độ tra cứu hồ sơ</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">3 giây</p>
                <p className="mt-2 text-sm text-slate-600">để mở lại lịch sử khám và đơn cũ</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Hàng sắp hết</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">Cảnh báo</p>
                <p className="mt-2 text-sm text-slate-600">gọng và tròng bán chạy cần nhập thêm</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">Báo cáo lãi</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950">Theo ngày</p>
                <p className="mt-2 text-sm text-slate-600">để biết dòng tiền và hiệu quả thực tế</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-6">
                <blockquote className="text-slate-700 leading-8">“{item.quote}”</blockquote>
                <figcaption className="mt-4">
                  <div className="font-semibold text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Phần quan trọng cho bán hàng</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Quản lý gọng kính theo cách phù hợp thực tế từng cửa hàng
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 leading-8">
              Nhiều cửa hàng không quản lý gọng theo mã nhà cung cấp thật, mà chỉ cần một mã tượng trưng hoặc một nhóm giá để biết còn bao nhiêu chiếc, giá vốn bao nhiêu và lãi thế nào.
              Vì vậy OptiGo hỗ trợ cả quản lý theo mẫu mã lẫn theo nhóm giá nhập, tránh ép quy trình quá cứng.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-950">Tồn số lượng</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Xem còn bao nhiêu gọng theo nhóm, theo mẫu hoặc theo kho chi nhánh.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-950">Tồn tiền</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Tính giá trị hàng còn lại theo giá vốn thực tế để biết vốn đang nằm ở đâu.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-950">Báo cáo lãi</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Doanh thu trừ giá vốn và chi phí phát sinh, hỗ trợ quyết định nhập thêm hay xả hàng.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
                <p className="font-semibold text-slate-950">Dễ triển khai</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">Có thể bắt đầu từ một cửa hàng nhỏ rồi mở rộng dần sang chuỗi chi nhánh.</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white">
            <h3 className="text-xl font-semibold">Màn hình chủ shop cần nhìn thấy ngay</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Doanh thu hôm nay</p>
                <p className="mt-1 text-2xl font-semibold text-white">12.8tr</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Giá trị tồn gọng</p>
                <p className="mt-1 text-2xl font-semibold text-white">56.2tr</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">Lợi nhuận tạm tính</p>
                <p className="mt-1 text-2xl font-semibold text-white">3.4tr</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="pricing" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Bảng giá</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Chọn gói phù hợp với quy mô cửa hàng của bạn</h2>
            <p className="mt-4 text-slate-600">
              Mỗi gói được thiết kế để phù hợp đúng nhu cầu thật. Basic cho vận hành cốt lõi, Pro cho tăng trưởng, Enterprise cho chuỗi và kiểm soát nội bộ.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-6 ${plan.highlight ? "border-sky-500 bg-sky-50" : "border-slate-200 bg-white"}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
                  {plan.highlight ? (
                    <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white">Phổ biến</span>
                  ) : null}
                </div>
                <p className="mt-3 text-4xl font-semibold text-slate-950">{plan.price}</p>
                <p className="mt-3 text-slate-600 leading-7">{plan.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {plan.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-6 block rounded-full px-4 py-3 text-center font-semibold transition ${
                    plan.highlight ? "bg-slate-950 text-white hover:bg-slate-800" : "border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  Chọn gói này
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Câu hỏi thường gặp</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Những điều chủ shop thường hỏi trước khi dùng</h2>
        </div>

        <div className="mt-10 grid gap-4">
          <details className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-950">Có bắt buộc phải quản lý gọng theo mã chuẩn không?</summary>
            <p className="mt-3 leading-7 text-slate-600">
              Không. Hệ thống hỗ trợ cả mã chuẩn, mã nội bộ và nhóm giá để phù hợp với cửa hàng chỉ nhập từng chiếc hoặc không theo mã nhà cung cấp.
            </p>
          </details>
          <details className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-950">Có xem được tồn tiền và lãi không?</summary>
            <p className="mt-3 leading-7 text-slate-600">
              Có. Khi nhập kho và xuất bán được ghi nhận đúng, hệ thống có thể tính tồn số lượng, tồn tiền và lãi gộp theo thời gian.
            </p>
          </details>
          <details className="rounded-[1.75rem] border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-semibold text-slate-950">Có phù hợp cho chuỗi nhiều cửa hàng không?</summary>
            <p className="mt-3 leading-7 text-slate-600">
              Có. Có thể triển khai theo từng chi nhánh, phân quyền theo vai trò và xem báo cáo tổng hợp toàn hệ thống.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Sẵn sàng biến quy trình quản lý cửa hàng kính thành một hệ thống rõ ràng hơn?
          </h2>
          <p className="mt-4 text-slate-300 leading-8">
            Dùng thử OptiGo để xem cách phần mềm giúp bạn quản lý bệnh nhân, đơn kính, tồn kho, tin nhắn, lịch hẹn và lợi nhuận trong cùng một nơi.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100">
              Dùng thử miễn phí
            </a>
            <Link href="https://app.optigo.vn" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Vào hệ thống
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
