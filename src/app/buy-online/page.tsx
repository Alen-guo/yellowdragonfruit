import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Yellow Dragon Fruit Online | Best Stores & Tips",
  description: "Find the best online stores to buy yellow dragon fruit. Tips for choosing quality fruit, shipping, and safe online shopping.",
};

export default function BuyOnlinePage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center mb-8">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      <nav className="mb-4 text-sm text-yellow-700">
        <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Buy Online</span>
      </nav>
      <h1 className="text-3xl font-bold text-yellow-900 mb-6">Buy Yellow Dragon Fruit Online</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Recommended Online Stores</h2>
        <ul className="list-disc list-inside text-yellow-900">
          <li>Amazon Fresh</li>
          <li>Exotic Fruits USA</li>
          <li>Melissa's Produce</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Tips for Online Shopping</h2>
        <p className="text-yellow-900">Check reviews, choose reputable sellers, and ensure proper packaging for fresh delivery.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Shipping & Storage</h2>
        <p className="text-yellow-900">Opt for express shipping and store fruit in a cool, dry place upon arrival.</p>
      </section>
      <hr className="my-8 border-yellow-200" />
      <section>
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
        <ul className="list-disc list-inside text-yellow-900 space-y-2">
          <li><a href="/buy" className="underline hover:text-yellow-600">Where to Buy Yellow Dragon Fruit</a></li>
          <li><a href="/nutrition" className="underline hover:text-yellow-600">Yellow Dragon Fruit Nutrition Facts</a></li>
          <li><a href="/faq" className="underline hover:text-yellow-600">Yellow Dragon Fruit FAQ</a></li>
        </ul>
      </section>
    </main>
  );
} 