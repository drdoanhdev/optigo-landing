import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold">OptiGo</h1>
        <div className="flex gap-4">
          <Link href="#features">Tính năng</Link>
          <Link href="#pricing">Bảng giá</Link>
          <a href="https://app.optigo.vn" className="px-4 py-2 border rounded-xl">Đăng nhập</a>
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-xl">Dùng thử</a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Phần mềm quản lý phòng khám mắt toàn diện
        </h2>
        <p className="text-lg mb-8">
          Quản lý bệnh nhân, lịch hẹn, đơn kính dễ dàng – không cần cài đặt
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-xl">
            Dùng thử miễn phí
          </a>
          <a href="https://app.optigo.vn" className="px-6 py-3 border rounded-xl">
            Đăng nhập
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <h3 className="text-2xl font-bold text-center mb-12">Tính năng nổi bật</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Quản lý bệnh nhân</h4>
            <p>Lưu trữ hồ sơ khám mắt đầy đủ và chính xác</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Lịch hẹn thông minh</h4>
            <p>Nhắc lịch tự động, giảm bỏ sót khách</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold mb-2">Quản lý đơn kính</h4>
            <p>Hạn chế sai sót, tăng độ chính xác</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-12">Bảng giá</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-2xl">
            <h4 className="font-semibold mb-2">Basic</h4>
            <p className="text-2xl font-bold mb-4">299k/tháng</p>
            <p>Phù hợp phòng khám nhỏ</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h4 className="font-semibold mb-2">Pro</h4>
            <p className="text-2xl font-bold mb-4">499k/tháng</p>
            <p>Đầy đủ tính năng</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h4 className="font-semibold mb-2">Premium</h4>
            <p className="text-2xl font-bold mb-4">Liên hệ</p>
            <p>Dành cho chuỗi phòng khám</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Bắt đầu sử dụng OptiGo ngay hôm nay</h3>
        <a href="#" className="px-6 py-3 bg-white text-blue-600 rounded-xl">
          Dùng thử miễn phí
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2026 OptiGo. All rights reserved.
      </footer>
    </main>
  );
}
