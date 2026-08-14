import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "腾翼搏时 SpeedGL｜全球高时效物流",
  description: "为生命科学、半导体与高价值货物提供全球紧急物流、冷链运输与 OBC 专差服务。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
