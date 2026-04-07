import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 border-b sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold">OptiGo</h1>
        <div className="flex gap-4 items-center">
          <a href="#features">Tính năng</a>
          <a href="#pricing">Bảng giá</a>
          <a href="https://app.optigo.vn" className="px-4 py-2 border rounded-xl">
            Đăng nhập
          </a>
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-xl">
            Dùng thử
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 px-6 py-20 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Quản lý phòng khám mắt dễ dàng hơn 10 lần
          </h2>
          <p className="mb-6 text-lg">
            Từ bệnh nhân → đơn kính → lịch hẹn, tất cả trong một hệ thống duy nhất
          </p>
          <div className="flex gap-4">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
              Dùng thử miễn phí
            </a>
            <a href="https://app.optigo.vn" className="px-6 py-3 border rounded-xl">
              Đăng nhập
            </a>
          </div>
        </div>

        {/* MOCKUP */}
        <div className="bg-gray-100 h-64 rounded-2xl flex items-center justify-center">
          <span>Demo giao diện phần mềm</span>
        </div>
      </section>

      {/* PAIN */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">
          Bạn đang gặp những vấn đề này?
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            Nhầm đơn kính, sai thông số
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            Quản lý bệnh nhân bằng sổ / Excel
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            Quên lịch hẹn, mất khách
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="features" className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-10">
          OptiGo giúp bạn giải quyết tất cả
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Quản lý bệnh nhân</h4>
            <p>Lưu trữ hồ sơ khám mắt đầy đủ</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Lịch hẹn tự động</h4>
            <p>Nhắc lịch giúp giảm bỏ sót</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4 className="font-semibold mb-2">Quản lý đơn kính</h4>
            <p>Chính xác, hạn chế sai sót</p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">
          Xem trước giao diện phần mềm
        </h3>
        <div className="h-72 bg-gray-200 rounded-2xl flex items-center justify-center">
          Screenshot / Video demo
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6">
        <h3 className="text-2xl font-bold text-center mb-12">
          Bảng giá chính
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h4>Basic</h4>
            <p className="text-2xl font-bold">299k</p>
          </div>

          <div className="p-6 border rounded-xl bg-blue-600 text-white">
            <h4>Pro</h4>
            <p className="text-2xl font-bold">499k</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h4>Premium</h4>
            <p>Liên hệ</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Bắt đầu sử dụng OptiGo ngay hôm nay
        </h3>
        <a href="#" className="px-6 py-3 bg-white text-blue-600 rounded-xl">
          Dùng thử miễn phí
        </a>
      </section>

    </main>
  );
}