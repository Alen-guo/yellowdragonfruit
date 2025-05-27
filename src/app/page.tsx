import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-50 to-white flex flex-col items-center font-sans">
      <header className="w-full py-8 flex flex-col items-center bg-gradient-to-r from-yellow-400 to-yellow-200 shadow-md">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={100} height={100} className="mb-4 rounded-full shadow-lg" />
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-900 mb-2">Yellow Dragon Fruit</h1>
        <p className="text-lg text-yellow-800 max-w-2xl text-center">Discover the health benefits, planting tips, delicious recipes, and where to buy the rare and nutritious yellow dragon fruit.</p>
      </header>
      <nav className="mt-10 flex flex-wrap gap-6 justify-center">
        <Link href="/benefits" className="px-6 py-3 bg-yellow-300 rounded-lg shadow hover:bg-yellow-400 text-yellow-900 font-semibold transition">Health Benefits</Link>
        <Link href="/plant" className="px-6 py-3 bg-yellow-200 rounded-lg shadow hover:bg-yellow-300 text-yellow-900 font-semibold transition">Planting Guide</Link>
        <Link href="/how-to-eat" className="px-6 py-3 bg-yellow-100 rounded-lg shadow hover:bg-yellow-200 text-yellow-900 font-semibold transition">How to Eat</Link>
        <Link href="/recipes" className="px-6 py-3 bg-yellow-50 rounded-lg shadow hover:bg-yellow-100 text-yellow-900 font-semibold transition">Recipes</Link>
        <a href="https://www.walmart.com/search?q=yellow+dragon+fruit" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-400 rounded-lg shadow hover:bg-green-500 text-white font-semibold transition">🛒 Buy Online</a>
        <Link href="/nutrition" className="px-6 py-3 bg-yellow-50 rounded-lg shadow hover:bg-yellow-100 text-yellow-900 font-semibold transition">Nutrition</Link>
        <Link href="/faq" className="px-6 py-3 bg-yellow-50 rounded-lg shadow hover:bg-yellow-100 text-yellow-900 font-semibold transition">FAQ</Link>
      </nav>
      <main className="flex-1 w-full max-w-4xl px-4 py-12">
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">What is Yellow Dragon Fruit?</h2>
          <p className="text-yellow-900 text-lg">Yellow dragon fruit (Hylocereus megalanthus) is a rare, sweet, and highly nutritious tropical fruit known for its vibrant yellow skin and white, seed-speckled flesh. It's prized for its unique flavor, health benefits, and exotic appearance.</p>
        </section>
        <section className="grid sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Rich in Nutrients</h3>
            <p className="text-yellow-900">Packed with vitamin C, fiber, antioxidants, and essential minerals, yellow dragon fruit supports immunity and digestion.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Easy to Grow</h3>
            <p className="text-yellow-900">With the right guidance, you can grow yellow dragon fruit at home, even in pots or small gardens.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Delicious & Versatile</h3>
            <p className="text-yellow-900">Enjoy it fresh, in smoothies, salads, desserts, or as a healthy snack for all ages.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Find & Buy</h3>
            <p className="text-yellow-900">Learn where to buy the best yellow dragon fruit locally or online, and how to pick the ripest ones.</p>
          </div>
        </section>
      </main>
      {/* 常见问题FAQ区块 */}
      <section className="w-full max-w-4xl px-4 py-12 bg-yellow-50">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">🤔 How do I eat yellow dragon fruit?</h3>
            <p className="text-yellow-900 text-sm">Yellow dragon fruit can be eaten fresh or used in <a href="/recipes" className="text-yellow-600 underline">delicious recipes</a>. Learn more <a href="/how-to-eat" className="text-yellow-600 underline">preparation methods</a>.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">🌱 Is yellow dragon fruit easy to grow?</h3>
            <p className="text-yellow-900 text-sm">Yellow dragon fruit is relatively easy to grow, requiring warm climate and well-draining soil. Check our detailed <a href="/plant" className="text-yellow-600 underline">planting guide</a>.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">💊 What are yellow dragon fruit health benefits?</h3>
            <p className="text-yellow-900 text-sm">Rich in vitamin C, fiber, and antioxidants, supporting digestion and immunity. Learn about complete <a href="/benefits" className="text-yellow-600 underline">health benefits</a>.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">🛒 Where can I buy yellow dragon fruit?</h3>
            <p className="text-yellow-900 text-sm">Available at supermarkets, Asian grocery stores, or online. Check our <a href="/buy" className="text-yellow-600 underline">buying guide</a> and <a href="https://www.walmart.com/search?q=yellow+dragon+fruit" target="_blank" rel="noopener noreferrer" className="text-green-600 underline font-semibold">buy online now</a>.</p>
          </div>
        </div>
      </section>
      {/* 热门文章推荐区块 */}
      <section className="w-full max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center">Popular Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/benefits" className="block bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl mb-3 block">🍊</span>
            <h3 className="font-semibold text-yellow-800 mb-2">Yellow Dragon Fruit Health Benefits</h3>
            <p className="text-yellow-900 text-sm">Explore the rich nutritional value and positive health impacts of yellow dragon fruit.</p>
          </a>
          <a href="/recipes" className="block bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl mb-3 block">🥤</span>
            <h3 className="font-semibold text-yellow-800 mb-2">Delicious Yellow Dragon Fruit Recipes</h3>
            <p className="text-yellow-900 text-sm">Learn simple ways to make yellow dragon fruit salads, juices, and desserts.</p>
          </a>
          <a href="/plant" className="block bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <span className="text-3xl mb-3 block">🌱</span>
            <h3 className="font-semibold text-yellow-800 mb-2">Yellow Dragon Fruit Growing Guide</h3>
            <p className="text-yellow-900 text-sm">Complete yellow dragon fruit growing steps and tips from seed to harvest.</p>
          </a>
        </div>
      </section>
      
      {/* 购买号召性按钮区块 */}
      <section className="w-full max-w-2xl px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Try Yellow Dragon Fruit?</h2>
          <p className="text-green-100 mb-6">Get fresh, high-quality yellow dragon fruit delivered to your door!</p>
          <div className="flex justify-center">
            <a href="https://www.walmart.com/search?q=yellow+dragon+fruit" target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              🛒 Shop on Walmart
            </a>
          </div>
          <p className="text-green-100 text-sm mt-4">Free shipping available • Fresh quality guaranteed</p>
        </div>
      </section>
      
      {/* Newsletter订阅部分 */}
      <section className="mb-12 bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg border border-yellow-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">🌟 Get Yellow Dragon Fruit Tips & Updates</h2>
          <p className="text-yellow-900 mb-6 max-w-2xl mx-auto">Join our community of fruit enthusiasts! Get weekly tips on growing, recipes, health benefits, and exclusive deals on yellow dragon fruit.</p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=alenguo7578@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition duration-300 shadow"
          >
            Contact Me via Gmail
          </a>
          <p className="text-xs text-yellow-700 mt-3">✅ Free forever • 📧 Weekly tips • 🔒 No spam, unsubscribe anytime</p>
          <p className="text-sm text-yellow-800 mt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=alenguo7578@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-yellow-900"
            >alenguo7578@gmail.com</a>
          </p>
        </div>
      </section>

      <hr className="my-8 border-yellow-200" />

      <footer className="w-full py-6 bg-yellow-200 text-center text-yellow-900 font-medium shadow-inner">
        &copy; {new Date().getFullYear()} Yellow Dragon Fruit. All rights reserved.
      </footer>
    </div>
  );
}
