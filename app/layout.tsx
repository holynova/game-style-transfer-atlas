import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Game Style Transfer Atlas',
  description: '用同一张城市照片，比较 15 款世界热门游戏的实机风格转绘与提示词。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="e01c9f78-4607-4e60-b01c-77c8190b12b4"
          data-domains="holynova.github.io"
          data-exclude-search="true"
          data-exclude-hash="true"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
