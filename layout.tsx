import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JUBA Editor Pro',
  description: 'Pro browser-based IDE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
