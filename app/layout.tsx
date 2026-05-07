import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MCD123 - 登录系统',
  description: 'Next.js Auth 示例',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}