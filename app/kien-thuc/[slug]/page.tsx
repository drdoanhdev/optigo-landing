import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, categories } from "../data";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const categoryLabel = categories.find((c) => c.value === post.category)?.label;

  // Related posts: same category, excluding current, max 3
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // If not enough related, fill with other posts
  const suggestions =
    related.length >= 2
      ? related
      : [
          ...related,
          ...posts
            .filter((p) => p.slug !== post.slug && !related.includes(p))
            .slice(0, 3 - related.length),
        ];

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

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-slate-700">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              href="/kien-thuc"
              className="transition hover:text-slate-700"
            >
              Kiến thức
            </Link>
            <span>/</span>
            <span className="truncate text-slate-600">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            {categoryLabel}
          </span>
          <span className="text-sm text-slate-400">
            {post.date} · {post.readTime} đọc
          </span>
          <span className="text-sm text-slate-400">— {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl md:leading-[1.2]">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-slate-200" />

        {/* Content */}
        <div
          className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-p:leading-8 prose-li:leading-7 prose-blockquote:border-sky-300 prose-blockquote:bg-sky-50/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-xl prose-blockquote:not-italic prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Divider */}
        <hr className="my-10 border-slate-200" />

        {/* Author + CTA */}
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-sky-50/50 to-white p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-sky-600">
                Muốn áp dụng ngay?
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-950">
                OptiGo giúp bạn số hóa toàn bộ quy trình quản lý cửa hàng kính
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Dùng thử miễn phí 3 tháng — không cần thẻ tín dụng, không giới
                hạn tính năng.
              </p>
            </div>
            <Link
              href="https://app.optigo.vn/register"
              className="flex-shrink-0 rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white transition hover:bg-slate-800"
            >
              Dùng thử miễn phí
            </Link>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {suggestions.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Bài viết liên quan
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestions.map((p) => (
                <Link
                  key={p.slug}
                  href={`/kien-thuc/${p.slug}`}
                  className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                      {categories.find((c) => c.value === p.category)?.label}
                    </span>
                    <span className="text-xs text-slate-400">
                      {p.readTime} đọc
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-950 group-hover:text-sky-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-slate-500">
                    {p.excerpt}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-sky-600 group-hover:text-sky-700">
                    Đọc tiếp →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
