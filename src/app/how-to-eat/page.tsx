import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Eat Yellow Dragon Fruit | Recipes & Tips",
  description: "Learn how to eat yellow dragon fruit, including preparation tips, serving ideas, and delicious recipes for smoothies, salads, and desserts.",
};

export default function HowToEatPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <div className="w-full flex justify-center mb-8">
        <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
      </div>
      {/* 面包屑导航 */}
      <nav className="mb-4 text-sm text-yellow-700">
        <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">How to Eat</span>
      </nav>
      <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">How to Eat Yellow Dragon Fruit</h1>
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">🔪</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">How to Cut & Prepare</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Image src="/images/yellowDragonFruit.jpg" alt="How to cut yellow dragon fruit into slices" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            <Image src="/images/Spoon scoop yellow dragon fruit.png" alt="Dragon fruit halves ready to eat with spoon" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-yellow-800 mb-3">🔪 Step-by-Step Cutting Guide</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Method 1: Half & Scoop</h4>
                <ol className="text-yellow-900 text-sm space-y-2">
                  <li><strong>1. Choose ripe fruit:</strong> Look for bright yellow skin that gives slightly when pressed</li>
                  <li><strong>2. Wash thoroughly:</strong> Rinse under cool water to remove any dirt</li>
                  <li><strong>3. Cut lengthwise:</strong> Use a sharp knife to cut the fruit in half</li>
                  <li><strong>4. Scoop out flesh:</strong> Use a large spoon to scoop out the white flesh</li>
                  <li><strong>5. Remove from skin:</strong> The flesh should come out easily in one piece</li>
                  <li><strong>6. Slice or cube:</strong> Cut into desired size pieces</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Method 2: Peel & Slice</h4>
                <ol className="text-yellow-900 text-sm space-y-2">
                  <li><strong>1. Start at one end:</strong> Make a shallow cut around the top</li>
                  <li><strong>2. Peel the skin:</strong> Remove skin in strips like a banana</li>
                  <li><strong>3. Work your way down:</strong> Continue peeling until all skin is removed</li>
                  <li><strong>4. Slice into rounds:</strong> Cut crosswise into circular slices</li>
                  <li><strong>5. Arrange on plate:</strong> Display attractively for serving</li>
                  <li><strong>6. Garnish if desired:</strong> Add mint or lime for extra flavor</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Cutting Tips:</h4>
              <ul className="text-blue-900 text-sm space-y-1">
                <li>• Use a sharp knife to avoid crushing the delicate flesh</li>
                <li>• Cut on a cutting board to protect your countertop</li>
                <li>• The seeds are edible and add a nice crunch - no need to remove them</li>
                <li>• Cut fruit keeps best when stored in the refrigerator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">🍽️</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Ways to Enjoy</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <Image src="/images/Spoon scoop yellow dragon fruit.png" alt="Eating dragon fruit with a spoon" width={200} height={150} className="rounded-lg shadow w-full h-32 object-cover" />
            <Image src="/images/Yellow dragon fruit drink6.png" alt="Dragon fruit juice and beverages" width={200} height={150} className="rounded-lg shadow w-full h-32 object-cover" />
            <Image src="/images/Yellow Dragon Fruit Salad.png" alt="Dragon fruit in mixed fruit salad" width={200} height={150} className="rounded-lg shadow w-full h-32 object-cover" />
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-green-800 mb-3">🍽️ Different Ways to Eat Dragon Fruit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🥄 Fresh & Simple</h4>
                <ul className="text-green-900 text-sm space-y-2">
                  <li>• <strong>Straight from the skin:</strong> Cut in half and eat with a spoon</li>
                  <li>• <strong>Chilled slices:</strong> Refrigerate for 30 minutes, then slice and eat</li>
                  <li>• <strong>With a squeeze of lime:</strong> Enhances the natural sweetness</li>
                  <li>• <strong>Sprinkled with salt:</strong> Traditional in some cultures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🥗 In Combinations</h4>
                <ul className="text-green-900 text-sm space-y-2">
                  <li>• <strong>Fruit salads:</strong> Mix with mango, kiwi, and pineapple</li>
                  <li>• <strong>Yogurt parfait:</strong> Layer with Greek yogurt and granola</li>
                  <li>• <strong>Smoothie bowls:</strong> Blend and top with your favorite toppings</li>
                  <li>• <strong>Green salads:</strong> Add cubes to spinach or arugula salads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🥤 Liquid Forms</h4>
                <ul className="text-green-900 text-sm space-y-2">
                  <li>• <strong>Fresh juice:</strong> Blend and strain for pure dragon fruit juice</li>
                  <li>• <strong>Smoothies:</strong> Combine with banana and coconut milk</li>
                  <li>• <strong>Agua fresca:</strong> Traditional Mexican refreshing drink</li>
                  <li>• <strong>Infused water:</strong> Add slices to water for subtle flavor</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">🍰 Creative Uses</h4>
                <ul className="text-green-900 text-sm space-y-2">
                  <li>• <strong>Dessert topping:</strong> On ice cream, cakes, or puddings</li>
                  <li>• <strong>Frozen treats:</strong> Freeze cubes for healthy popsicles</li>
                  <li>• <strong>Cocktail garnish:</strong> Beautiful addition to drinks</li>
                  <li>• <strong>Jam or preserves:</strong> Cook down with sugar for spreads</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-8 flex items-start gap-3">
        <span className="text-2xl">❄️</span>
        <div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Storage & Freshness</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-800 mb-3">❄️ Proper Storage Techniques</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">🍎 Whole Fruit Storage</h4>
                <ul className="text-blue-900 text-sm space-y-2">
                  <li>• <strong>Room temperature:</strong> 2-3 days if not fully ripe</li>
                  <li>• <strong>Refrigerator:</strong> Up to 1 week when ripe</li>
                  <li>• <strong>Plastic bag:</strong> Store in perforated bag to maintain humidity</li>
                  <li>• <strong>Avoid pressure:</strong> Don't stack heavy items on top</li>
                  <li>• <strong>Check regularly:</strong> Use ripe fruit first</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">✂️ Cut Fruit Storage</h4>
                <ul className="text-blue-900 text-sm space-y-2">
                  <li>• <strong>Airtight container:</strong> Use within 2-3 days</li>
                  <li>• <strong>Lemon juice:</strong> Sprinkle to prevent browning</li>
                  <li>• <strong>Separate containers:</strong> Don't mix with other fruits</li>
                  <li>• <strong>Paper towel:</strong> Place at bottom to absorb moisture</li>
                  <li>• <strong>Freezer option:</strong> Freeze cubes for up to 6 months</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white rounded">
              <h4 className="font-semibold text-blue-800 mb-2">🔍 Ripeness Indicators</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-green-700">Perfect for Eating:</strong>
                  <ul className="text-blue-900 mt-1 space-y-1">
                    <li>• Bright yellow skin</li>
                    <li>• Gives slightly to pressure</li>
                    <li>• Sweet fragrance</li>
                    <li>• Skin may have slight wrinkles</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-yellow-700">Still Ripening:</strong>
                  <ul className="text-blue-900 mt-1 space-y-1">
                    <li>• Pale yellow or greenish</li>
                    <li>• Firm to touch</li>
                    <li>• Little to no fragrance</li>
                    <li>• Smooth skin surface</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-red-700">Past Prime:</strong>
                  <ul className="text-blue-900 mt-1 space-y-1">
                    <li>• Dark spots or soft areas</li>
                    <li>• Very soft or mushy</li>
                    <li>• Fermented smell</li>
                    <li>• Skin begins to shrivel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 新增：食用安全和健康指南 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">Safety & Health Guidelines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-3">✅ Safe Eating Practices</h3>
            <ul className="text-green-900 text-sm space-y-2">
              <li>• <strong>Wash before eating:</strong> Always rinse the outside even if peeling</li>
              <li>• <strong>Clean cutting tools:</strong> Use clean knife and cutting board</li>
              <li>• <strong>Eat seeds:</strong> The small black seeds are completely safe and nutritious</li>
              <li>• <strong>Check for allergies:</strong> Start with small amounts if trying for first time</li>
              <li>• <strong>Pregnancy safe:</strong> Dragon fruit is safe and beneficial during pregnancy</li>
              <li>• <strong>Kid-friendly:</strong> Excellent first fruit for babies 6+ months</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-3">⚠️ Things to Watch For</h3>
            <ul className="text-orange-900 text-sm space-y-2">
              <li>• <strong>Rare allergies:</strong> Some people may be allergic to cactus fruits</li>
              <li>• <strong>Blood sugar:</strong> Diabetics should monitor portion sizes</li>
              <li>• <strong>Digestive sensitivity:</strong> Start with small amounts if you have a sensitive stomach</li>
              <li>• <strong>Natural laxative:</strong> High fiber content may cause loose stools in large quantities</li>
              <li>• <strong>Drug interactions:</strong> Consult doctor if on blood pressure medications</li>
              <li>• <strong>Overripe fruit:</strong> Don't eat if it smells fermented or looks moldy</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* 新增：营养最大化技巧 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">Maximizing Nutritional Benefits</h2>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-4">🌟 Get the Most from Your Dragon Fruit</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🕐 Best Times to Eat:</h4>
              <ul className="text-purple-900 text-sm space-y-2">
                <li>• <strong>Morning:</strong> Empty stomach enhances vitamin C absorption</li>
                <li>• <strong>Pre-workout:</strong> Natural sugars provide energy</li>
                <li>• <strong>Post-workout:</strong> Helps with hydration and recovery</li>
                <li>• <strong>Between meals:</strong> Healthy snack that won't spike blood sugar</li>
                <li>• <strong>With iron-rich foods:</strong> Vitamin C enhances iron absorption</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🤝 Perfect Pairings:</h4>
              <ul className="text-purple-900 text-sm space-y-2">
                <li>• <strong>With citrus:</strong> Doubles the vitamin C power</li>
                <li>• <strong>With yogurt:</strong> Probiotics + prebiotics = gut health</li>
                <li>• <strong>With nuts:</strong> Healthy fats help absorb fat-soluble vitamins</li>
                <li>• <strong>With spinach:</strong> Vitamin C helps absorb iron from greens</li>
                <li>• <strong>With avocado:</strong> Complementary nutrients for heart health</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded">
            <h4 className="font-semibold text-purple-800 mb-2">🔥 Preparation Tips for Maximum Nutrition:</h4>
            <ul className="text-purple-900 text-sm grid md:grid-cols-2 gap-2">
              <li>• Don't peel until ready to eat</li>
              <li>• Eat the seeds for extra fiber</li>
              <li>• Consume within 30 minutes of cutting</li>
              <li>• Choose slightly firm fruit over very soft</li>
              <li>• Avoid cooking - heat destroys vitamin C</li>
              <li>• Pair with healthy fats for absorption</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ部分 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6">Eating FAQs</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: Do I need to remove the seeds from dragon fruit?</h3>
            <p className="text-yellow-900 text-sm">A: No! The small black seeds are completely edible and provide extra fiber, healthy fats, and minerals. They add a nice crunchy texture similar to kiwi seeds.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: What does yellow dragon fruit taste like?</h3>
            <p className="text-yellow-900 text-sm">A: Yellow dragon fruit has a mild, sweet flavor that's often described as a cross between kiwi and pear, with subtle tropical notes. It's generally sweeter than red dragon fruit.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: How much dragon fruit should I eat in one serving?</h3>
            <p className="text-yellow-900 text-sm">A: A typical serving is one medium fruit (about 150-200g). This provides excellent nutrition without excess calories. You can safely eat 1-2 fruits per day.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: Can I eat dragon fruit skin?</h3>
            <p className="text-yellow-900 text-sm">A: The skin is technically edible but quite tough and not pleasant to eat. It's best to remove the skin and eat only the white flesh inside.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: Why does my urine turn pink after eating dragon fruit?</h3>
            <p className="text-yellow-900 text-sm">A: This is completely normal and harmless! Some people experience pink or red urine after eating dragon fruit due to natural pigments called betalains. It usually resolves within 12-24 hours.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-yellow-800 mb-2">Q: Is it better to eat dragon fruit cold or at room temperature?</h3>
            <p className="text-yellow-900 text-sm">A: Both are fine! Chilled dragon fruit is refreshing and popular, while room temperature fruit may have slightly more pronounced flavor. Try both to see your preference.</p>
          </div>
        </div>
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