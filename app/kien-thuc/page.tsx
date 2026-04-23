import Link from "next/link";
import { posts, categories } from "./data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiến thức ngành kính mắt",
  description:
    "Chia sẻ kinh nghiệm thực tế về quản lý cửa hàng kính, phòng khám mắt: đơn kính, tồn kho, báo cáo lãi, CRM và hơn thế.",
};

export default function KienThucPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://optigo.vn/logo.png"
              alt="OptiGo Logo"
              className="h-11 w-auto"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">
                OptiGo
              </p>
              <p className="hidden text-sm font-medium text-slate-600 sm:block">
                Kiến thức ngành kính mắt
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <Link href="/" className="transition hover:text-slate-950">
              Trang chủ
            </Link>
            <Link
              href="/kien-thuc"
              className="font-semibold text-slate-950"
            >
              Kiến thức
            </Link>
            <Link href="/#features" className="transition hover:text-slate-950">
              Tính năng
            </Link>
            <Link href="/#pricing" className="transition hover:text-slate-950">
              Bảng giá
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://app.optigo.vn"
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white sm:inline-flex"
            >
              Đăng nhập
            </Link>
            <Link
              href="/#pricing"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Blog & kiến thức
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Kiến thức thực tế cho phòng khám mắt & cửa hàng kính
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Chia sẻ kinh nghiệm quản lý, mẹo nghề, và cách vận hành hiệu quả —
            từ đo khám, tồn kho, đến tăng trưởng doanh thu.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`flex-shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition ${
                  cat.value === "all"
                    ? "bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href={`/kien-thuc/${featured.slug}`}
          className="group grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:grid-cols-2 md:p-8"
        >
          <div className="flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-slate-100">
            <div className="text-center">
              <div className="text-6xl">
                {featured.category === "do-kham"
                  ? "👁️"
                  : featured.category === "ton-kho"
                    ? "📦"
                    : featured.category === "kinh-doanh"
                      ? "💰"
                      : featured.category === "quan-ly"
                        ? "🏪"
                        : "💡"}
              </div>
              <p className="mt-2 text-sm text-slate-400">Bài nổi bật</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                {categories.find((c) => c.value === featured.category)?.label}
              </span>
              <span className="text-sm text-slate-400">
                {featured.date} · {featured.readTime} đọc
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 group-hover:text-sky-700 md:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {featured.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm font-semibold text-sky-600 group-hover:text-sky-700">
              Đọc bài viết →
            </p>
          </div>
        </Link>
      </section>

      {/* All posts grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-xl font-semibold text-slate-950">
          Tất cả bài viết
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/kien-thuc/${post.slug}`}
              className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                  {categories.find((c) => c.value === post.category)?.label}
                </span>
                <span className="text-xs text-slate-400">
                  {post.readTime} đọc
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-950 group-hover:text-sky-700">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs text-slate-400">{post.date}</span>
                <span className="text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                  Đọc tiếp →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Muốn áp dụng ngay những kiến thức này?
          </h2>
          <p className="mt-4 text-slate-300 leading-8">
            OptiGo giúp bạn số hóa toàn bộ quy trình từ đo khám, kê đơn, quản
            lý tồn kho đến chăm sóc khách hàng. Dùng thử miễn phí 3 tháng.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="https://app.optigo.vn/register"
              className="rounded-full bg-white px-8 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Dùng thử miễn phí
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Xem tính năng
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="https://optigo.vn/logo.png"
              alt="OptiGo Logo"
              className="h-8 w-auto"
            />
            <span className="text-sm font-medium text-slate-600">
              OptiGo — Phần mềm quản lý phòng khám mắt & cửa hàng kính
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a
              href="mailto:support@optigo.vn"
              className="transition hover:text-slate-900"
            >
              support@optigo.vn
            </a>
            <Link
              href="https://app.optigo.vn"
              className="transition hover:text-slate-900"
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
