import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡尾巴宠物洗护店",
  description:
    "泡泡尾巴宠物洗护店，提供犬猫洗护、美容修剪、皮毛护理、寄养前清洁和幼宠适应服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
