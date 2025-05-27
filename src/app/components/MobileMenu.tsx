"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button className="text-yellow-900 text-2xl" onClick={() => setIsMenuOpen(true)}>☰</button>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex" onClick={() => setIsMenuOpen(false)}>
          <div
            className="ml-auto h-full w-72 max-w-full bg-gradient-to-br from-yellow-200 via-yellow-50 to-white shadow-2xl rounded-l-3xl p-6 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* 顶部Logo和关闭按钮 */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Image src="/images/logo.png" alt="Logo" width={36} height={36} className="rounded-full shadow" />
                <span className="font-bold text-yellow-900 text-lg">Yellow Dragon Fruit</span>
              </div>
              <button
                className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-100 hover:bg-yellow-300 text-2xl text-yellow-900 shadow"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >×</button>
            </div>
            {/* 菜单项 */}
            <nav className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-semibold text-base shadow transition">Home</Link>
              <Link href="/benefits" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Benefits</Link>
              <Link href="/plant" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Plant</Link>
              <Link href="/how-to-eat" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">How to Eat</Link>
              <Link href="/recipes" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Recipes</Link>
              <Link href="/nutrition" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Nutrition</Link>
              <Link href="/buy" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Buy</Link>
              <Link href="/compare" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">Compare</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="rounded-lg px-4 py-3 bg-yellow-100 hover:bg-yellow-200 text-yellow-900 font-semibold text-base shadow transition">FAQ</Link>
            </nav>
            <div className="flex-1" />
            {/* 底部品牌标识 */}
            <div className="text-xs text-yellow-700 text-center mt-8">© {new Date().getFullYear()} Yellow Dragon Fruit</div>
          </div>
        </div>
      )}
    </>
  );
} 