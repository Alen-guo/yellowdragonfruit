import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yellow Dragon Fruit | Health Benefits, Planting, Recipes & Buy Guide",
  description: "Discover everything about yellow dragon fruit: health benefits, planting tips, delicious recipes, and where to buy. Your ultimate guide to this rare and nutritious fruit!",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Yellow Dragon Fruit | Health Benefits, Planting, Recipes & Buy Guide",
    description: "Discover everything about yellow dragon fruit: health benefits, planting tips, delicious recipes, and where to buy. Your ultimate guide to this rare and nutritious fruit!",
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 全站顶部导航栏 */}
        <nav className="bg-yellow-400 shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 text-yellow-900 font-bold text-xl hover:text-yellow-700 transition">
                <Image src="/images/logo.png" alt="Yellow Dragon Fruit Logo" width={40} height={40} className="rounded-full shadow-md" />
                <span>Yellow Dragon Fruit</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-yellow-900 hover:text-yellow-700 font-medium transition">Home</Link>
                <Link href="/benefits" className="text-yellow-900 hover:text-yellow-700 font-medium transition">Benefits</Link>
                <Link href="/plant" className="text-yellow-900 hover:text-yellow-700 font-medium transition">Plant</Link>
                <Link href="/how-to-eat" className="text-yellow-900 hover:text-yellow-700 font-medium transition">How to Eat</Link>
                <Link href="/recipes" className="text-yellow-900 hover:text-yellow-700 font-medium transition">Recipes</Link>
                <Link href="/nutrition" className="text-yellow-900 hover:text-yellow-700 font-medium transition">Nutrition</Link>
                
                <a href="https://www.walmart.com/search?q=yellow+dragon+fruit" target="_blank" rel="noopener noreferrer" className="text-yellow-900 hover:text-yellow-700 font-medium transition bg-yellow-300 px-3 py-1 rounded-md">🛒 Buy Online</a>
                
                <Link href="/faq" className="text-yellow-900 hover:text-yellow-700 font-medium transition">FAQ</Link>
              </div>
              {/* 移动端菜单按钮（简化版） */}
              <div className="md:hidden">
                <button className="text-yellow-900 text-xl">☰</button>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
