import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CommentMailForm from "../components/CommentMailForm";

export const metadata: Metadata = {
  title: "Yellow Dragon Fruit FAQ | Questions & Answers",
  description: "Frequently asked questions about yellow dragon fruit. Learn about nutrition, taste, storage, and more. Submit your own questions!",
};

export default function FAQPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center mb-8">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      {/* 面包屑导航 */}
      <nav className="mb-4 text-sm text-yellow-700">
        <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">FAQ</span>
      </nav>
      <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">Yellow Dragon Fruit FAQ</h1>
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">❓</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Frequently Asked Questions</h2>
          <ul className="list-disc list-inside text-yellow-900">
            <li><b>How do I store yellow dragon fruit?</b> Store at room temperature until ripe, then refrigerate for up to 5 days.</li>
            <li><b>Is yellow dragon fruit good for diabetics?</b> Yes, it has a low glycemic index and is high in fiber.</li>
            <li><b>Can I eat the seeds?</b> Yes, the seeds are edible and nutritious.</li>
          </ul>
        </div>
      </section>
      <section className="flex items-start gap-3">
        <span className="text-2xl">💬</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Ask a Question</h2>
          <p className="text-yellow-900">Have more questions? <span className="font-semibold">Contact us</span> or leave a comment below!</p>
        </div>
      </section>
      <hr className="my-8 border-yellow-200" />
      <section>
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
        <ul className="grid sm:grid-cols-3 gap-4">
          <li><a href="/benefits" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Health Benefits</a></li>
          <li><a href="/plant" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">How to Grow</a></li>
          <li><a href="/compare" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Yellow vs Red</a></li>
        </ul>
      </section>
      {/* FAQ Schema.org 结构化数据 */}
      <script type="application/ld+json" suppressHydrationWarning>{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I store yellow dragon fruit?",
              "acceptedAnswer": {"@type": "Answer", "text": "Store at room temperature until ripe, then refrigerate for up to 5 days."}
            },
            {
              "@type": "Question",
              "name": "Is yellow dragon fruit good for diabetics?",
              "acceptedAnswer": {"@type": "Answer", "text": "Yes, it has a low glycemic index and is high in fiber."}
            },
            {
              "@type": "Question",
              "name": "Can I eat the seeds?",
              "acceptedAnswer": {"@type": "Answer", "text": "Yes, the seeds are edible and nutritious."}
            }
          ]
        }
      `}</script>
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">Leave a Comment or Ask a Question</h2>
        <CommentMailForm />
      </section>
    </main>
  );
} 