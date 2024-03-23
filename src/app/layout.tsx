// layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portofolio Hafidh',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
// Import and use the useClient hook

  return (
    <>
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}

//
