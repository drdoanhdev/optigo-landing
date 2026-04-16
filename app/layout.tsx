import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "vietnamese"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://optigo.vn"),
  title: {
    default: "OptiGo — Phần mềm quản lý phòng khám mắt và cửa hàng kính",
    template: "%s | OptiGo",
  },
  description:
    "OptiGo giúp phòng khám mắt và cửa hàng kính quản lý bệnh nhân, đơn kính, tồn kho gọng - tròng, công nợ và lợi nhuận trên một hệ thống duy nhất.",
  keywords: [
    "phần mềm quản lý cửa hàng kính",
    "quản lý phòng khám mắt",
    "quản lý đơn kính",
    "quản lý tồn kho gọng kính",
    "quản lý tròng kính",
    "phần mềm bán kính",
    "quản lý lợi nhuận cửa hàng kính",
  ],
  authors: [{ name: "OptiGo" }],
  creator: "OptiGo",
  publisher: "OptiGo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OptiGo — Phần mềm quản lý phòng khám mắt và cửa hàng kính",
    description:
      "Quản lý bệnh nhân, đơn kính, tồn kho gọng - tròng và lợi nhuận trên một hệ thống duy nhất.",
    url: "https://optigo.vn",
    siteName: "OptiGo",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiGo — Phần mềm quản lý phòng khám mắt và cửa hàng kính",
    description:
      "Quản lý bệnh nhân, đơn kính, tồn kho gọng - tròng và lợi nhuận trên một hệ thống duy nhất.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
