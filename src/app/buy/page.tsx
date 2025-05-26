import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Buy Yellow Dragon Fruit | Find Near Me & Online",
  description: "Discover where to buy yellow dragon fruit locally and online. Tips for choosing ripe fruit, best stores, and seasonal availability.",
};

export default function BuyPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center mb-8">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      <nav className="mb-4 text-sm text-yellow-700">
        <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Where to Buy</span>
      </nav>
      <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">Where to Buy Yellow Dragon Fruit</h1>
      
      {/* 主要购买选项 */}
      <section className="mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
            🛒 <span className="ml-2">Buy Fresh Yellow Dragon Fruit Online</span>
          </h2>
          <p className="text-blue-900 mb-4">Get fresh, high-quality yellow dragon fruit delivered directly to your door. Walmart offers reliable shipping and quality guarantee.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a 
              href="https://www.walmart.com/search?q=yellow+dragon+fruit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center text-center"
            >
              🛍️ Shop at Walmart →
            </a>
            <div className="text-sm text-blue-700">
              <span className="font-semibold">Price Range:</span> $3-8 per fruit<br/>
              <span className="font-semibold">Shipping:</span> 2-3 days
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">🛒</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Find Yellow Dragon Fruit Near You</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-yellow-800 mb-3">🏪 Best Places to Look:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Grocery Stores:</h4>
                <ul className="text-yellow-900 text-sm space-y-1">
                  <li>• <strong>Whole Foods Market</strong> - Organic section</li>
                  <li>• <strong>Trader Joe's</strong> - Seasonal availability</li>
                  <li>• <strong>Walmart</strong> - Produce section</li>
                  <li>• <strong>Kroger</strong> - Specialty produce</li>
                  <li>• <strong>Safeway</strong> - International foods aisle</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Specialty Stores:</h4>
                <ul className="text-yellow-900 text-sm space-y-1">
                  <li>• <strong>Asian grocery stores</strong> - Most reliable source</li>
                  <li>• <strong>International markets</strong> - Year-round availability</li>
                  <li>• <strong>Farmers' markets</strong> - Seasonal, freshest quality</li>
                  <li>• <strong>Health food stores</strong> - Organic options</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">💡 Shopping Tips:</h4>
            <ul className="text-green-900 text-sm space-y-1">
              <li>• Call ahead to check availability</li>
              <li>• Ask produce managers about special orders</li>
              <li>• Check multiple stores in your area</li>
              <li>• Visit during peak season (May-October)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">🌐</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Online Shopping Guide</h2>
          <div className="bg-purple-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-purple-800 mb-3">🎯 What to Look For:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Quality Indicators:</h4>
                <ul className="text-purple-900 text-sm space-y-2">
                  <li>• <strong>Bright yellow skin</strong> with minimal brown spots</li>
                  <li>• <strong>Firm but yielding</strong> to gentle pressure</li>
                  <li>• <strong>No soft spots</strong> or dark areas</li>
                  <li>• <strong>Fresh appearance</strong> with vibrant color</li>
                  <li>• <strong>Proper packaging</strong> for shipping protection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Shipping Considerations:</h4>
                <ul className="text-purple-900 text-sm space-y-2">
                  <li>• <strong>Express shipping</strong> preferred for freshness</li>
                  <li>• <strong>Temperature control</strong> during transport</li>
                  <li>• <strong>Arrival timing</strong> - avoid weekends</li>
                  <li>• <strong>Return policy</strong> for damaged fruit</li>
                  <li>• <strong>Customer reviews</strong> on fruit quality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">📅</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Seasonal Availability & Pricing</h2>
          <div className="bg-orange-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-orange-800 mb-3">📊 Year-Round Guide:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-orange-900 border border-orange-200 rounded-lg">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="text-left p-3 font-semibold">Season</th>
                    <th className="text-left p-3 font-semibold">Availability</th>
                    <th className="text-left p-3 font-semibold">Price Range</th>
                    <th className="text-left p-3 font-semibold">Quality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Spring (Mar-May)</td>
                    <td className="p-3">Good</td>
                    <td className="p-3">$4-7 per fruit</td>
                    <td className="p-3">Fresh imports</td>
                  </tr>
                  <tr className="border-t bg-orange-50">
                    <td className="p-3 font-semibold">Summer (Jun-Aug)</td>
                    <td className="p-3">Excellent</td>
                    <td className="p-3">$3-5 per fruit</td>
                    <td className="p-3">Peak season, best quality</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-semibold">Fall (Sep-Nov)</td>
                    <td className="p-3">Good</td>
                    <td className="p-3">$4-6 per fruit</td>
                    <td className="p-3">Still fresh, good variety</td>
                  </tr>
                  <tr className="border-t bg-orange-50">
                    <td className="p-3 font-semibold">Winter (Dec-Feb)</td>
                    <td className="p-3">Limited</td>
                    <td className="p-3">$6-10 per fruit</td>
                    <td className="p-3">Imported, higher prices</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-red-50 p-3 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">⚠️ What to Avoid:</h4>
            <ul className="text-red-900 text-sm space-y-1">
              <li>• Fruits with large brown or black spots</li>
              <li>• Overly soft or mushy texture</li>
              <li>• Strong fermented smell</li>
              <li>• Wrinkled or dried-out skin</li>
              <li>• Extremely hard, unripe fruit</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* 价格比较和节省技巧 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">💰 Price Comparison & Money-Saving Tips</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-3">💡 Save Money Tips:</h3>
            <ul className="text-green-900 text-sm space-y-2">
              <li>• <strong>Buy in season:</strong> Summer prices are 40-50% lower</li>
              <li>• <strong>Buy in bulk:</strong> Many stores offer discounts for 5+ fruits</li>
              <li>• <strong>Check sales:</strong> Weekly grocery store promotions</li>
              <li>• <strong>Compare prices:</strong> Asian markets often have better deals</li>
              <li>• <strong>Join store memberships:</strong> Costco, Sam's Club bulk options</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-3">📊 Average Pricing:</h3>
            <ul className="text-yellow-900 text-sm space-y-2">
              <li>• <strong>Grocery stores:</strong> $4-8 per fruit</li>
              <li>• <strong>Asian markets:</strong> $3-6 per fruit</li>
              <li>• <strong>Online delivery:</strong> $5-10 per fruit (incl. shipping)</li>
              <li>• <strong>Farmers markets:</strong> $3-7 per fruit</li>
              <li>• <strong>Organic options:</strong> +$1-3 premium</li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-8 border-yellow-200" />
      <section>
        <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
        <ul className="grid sm:grid-cols-3 gap-4">
          <li><a href="/buy-online" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Buy Online</a></li>
          <li><a href="/compare" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Yellow vs Red</a></li>
          <li><a href="/faq" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">FAQ</a></li>
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