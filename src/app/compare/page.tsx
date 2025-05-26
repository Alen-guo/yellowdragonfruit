import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yellow vs Red Dragon Fruit | FAQ & Comparison",
  description: "Compare yellow and red dragon fruit. Learn the differences in taste, nutrition, appearance, and get answers to common questions.",
};

export default function ComparePage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center mb-8">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      <nav className="mb-4 text-sm text-yellow-700">
        <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Compare & FAQ</span>
      </nav>
      <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">Yellow vs Red Dragon Fruit & FAQ</h1>
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">🎨</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Yellow vs Red: What's the Difference?</h2>
          <ul className="list-disc list-inside text-yellow-900">
            <li><b>Color:</b> Yellow skin vs red/pink skin</li>
            <li><b>Flesh:</b> Yellow has white flesh with black seeds; red can have white or red flesh</li>
            <li><b>Taste:</b> Yellow is sweeter and more aromatic</li>
            <li><b>Nutrition:</b> Both are rich in vitamins, fiber, and antioxidants</li>
          </ul>
        </div>
      </section>
      <section className="flex items-start gap-3">
        <span className="text-2xl">❓</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-yellow-900">
            <li><b>Is yellow dragon fruit rare?</b> Yes, it's less common than red varieties.</li>
            <li><b>Can I grow it at home?</b> Absolutely! See our planting guide.</li>
            <li><b>Is it good for weight loss?</b> Yes, it's low in calories and high in fiber.</li>
            <li><b>How do I know if it's ripe?</b> The skin turns bright yellow and the fruit is slightly soft.</li>
          </ul>
        </div>
      </section>
      <hr className="my-8 border-yellow-200" />
      <section>
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
        <ul className="grid sm:grid-cols-3 gap-4">
          <li><a href="/benefits" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Health Benefits</a></li>
          <li><a href="/nutrition" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Nutrition Facts</a></li>
          <li><a href="/buy" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Where to Buy</a></li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Leave a Comment or Ask a Question</h2>
        <form className="flex flex-col gap-4 max-w-xl">
          <input type="text" placeholder="Your Name (required)" required className="border border-yellow-300 rounded px-3 py-2" />
          <textarea placeholder="Your Comment or Question (required)" required className="border border-yellow-300 rounded px-3 py-2 min-h-[80px]" />
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded px-4 py-2 w-fit self-end">Submit</button>
        </form>
      </section>
    </main>
  );
} 