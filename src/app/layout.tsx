import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Chivo } from 'next/font/google'
import { Taviraj } from 'next/font/google'

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
})

// const taviraj = Taviraj({
//   subsets: ['latin'],
//   display: 'swap',
// })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artistic Gymnastics European Championships - Rimini 2024",
  description: "Get your certificate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
