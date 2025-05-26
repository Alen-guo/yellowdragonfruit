import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yellow Dragon Fruit Benefits | Health & Nutrition",
  description: "Explore the top health benefits of yellow dragon fruit, including nutrition facts, antioxidants, and how it supports your well-being.",
};

export default function BenefitsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Yellow Dragon Fruit Health Benefits",
    "description": "Comprehensive guide to the health benefits of yellow dragon fruit, including nutrition facts, antioxidants, and wellness support.",
    "image": [
      "https://yellowdragonfruit.com/images/Yellow dragon fruit benefits.png",
      "https://yellowdragonfruit.com/images/yellowDragonFruit.jpg"
    ],
    "author": {
      "@type": "Organization",
      "name": "Yellow Dragon Fruit Guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Yellow Dragon Fruit Guide",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yellowdragonfruit.com/images/logo.png"
      }
    },
    "datePublished": "2024-12-19",
    "dateModified": "2024-12-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://yellowdragonfruit.com/benefits"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much yellow dragon fruit should I eat daily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One medium fruit (about 200g) provides excellent nutritional benefits. You can safely eat 1-2 fruits per day as part of a balanced diet."
        }
      },
      {
        "@type": "Question",
        "name": "Is yellow dragon fruit safe during pregnancy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Dragon fruit is rich in folate and iron, making it beneficial for pregnant women. However, always consult your doctor about dietary changes during pregnancy."
        }
      },
      {
        "@type": "Question",
        "name": "Can diabetics eat yellow dragon fruit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yellow dragon fruit has a low glycemic index and high fiber content, making it suitable for diabetics in moderation. The fiber helps slow sugar absorption."
        }
      },
      {
        "@type": "Question",
        "name": "When is the best time to eat dragon fruit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dragon fruit can be enjoyed any time! Many people prefer it as a morning snack for energy or post-workout for hydration and nutrients."
        }
      }
    ]
  };

  const nutritionStructuredData = {
    "@context": "https://schema.org",
    "@type": "NutritionInformation",
    "calories": "50 calories per 100g",
    "fatContent": "0.1g",
    "carbohydrateContent": "13g",
    "fiberContent": "2.9g",
    "proteinContent": "1.1g",
    "sugarContent": "7.65g",
    "servingSize": "100g"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nutritionStructuredData) }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="w-full flex justify-center mb-8">
          <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
        </div>
        <nav className="mb-4 text-sm text-yellow-700">
          <a href="/" className="hover:text-yellow-600">Home</a> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Health Benefits</span>
        </nav>
        <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">Yellow Dragon Fruit Health Benefits</h1>
        
        {/* 主要图片展示区块 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image src="/images/Yellow dragon fruit benefits.png" alt="Yellow dragon fruit nutritional benefits and vitamins" width={400} height={300} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <p className="text-sm text-yellow-700 mt-2 text-center">Rich in vitamins and antioxidants</p>
          </div>
          <div>
            <Image src="/images/yellowDragonFruit.jpg" alt="Healthy lifestyle with yellow dragon fruit" width={400} height={300} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            <p className="text-sm text-yellow-700 mt-2 text-center">Perfect for a healthy diet</p>
          </div>
        </div>

        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🍊</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Nutritional Powerhouse</h2>
            <p className="text-yellow-900 mb-4">Yellow dragon fruit is rich in vitamin C, fiber, magnesium, and antioxidants. It helps boost immunity, aids digestion, and supports skin health.</p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Key Nutrients per 100g:</h3>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• <strong>Vitamin C:</strong> 20.5mg (34% DV) - More than oranges!</li>
                <li>• <strong>Fiber:</strong> 2.9g - Supports digestive health</li>
                <li>• <strong>Magnesium:</strong> 39mg - Essential for bone health</li>
                <li>• <strong>Iron:</strong> 1.9mg - Prevents anemia</li>
                <li>• <strong>Calcium:</strong> 8.5mg - Strengthens bones and teeth</li>
              </ul>
            </div>
            <p className="text-yellow-900">Studies show that regular consumption of dragon fruit can significantly boost your daily vitamin intake, especially vitamin C which is crucial for immune system function.</p>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🦠</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Supports Digestion</h2>
            <p className="text-yellow-900 mb-4">The high fiber content promotes healthy digestion and regular bowel movements, making it a great choice for gut health.</p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Digestive Benefits:</h3>
              <ul className="text-yellow-900 text-sm space-y-2">
                <li>• <strong>Prebiotic fiber</strong> feeds beneficial gut bacteria</li>
                <li>• <strong>Natural enzymes</strong> aid protein digestion</li>
                <li>• <strong>High water content</strong> (90%) prevents constipation</li>
                <li>• <strong>Gentle on stomach</strong> - suitable for sensitive digestion</li>
              </ul>
            </div>
            <p className="text-yellow-900">Research indicates that the oligosaccharides in dragon fruit act as prebiotics, promoting the growth of beneficial Lactobacillus and Bifidobacterium in your gut microbiome.</p>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🛡️</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Antioxidant Rich</h2>
            <p className="text-yellow-900 mb-4">Loaded with antioxidants, yellow dragon fruit helps fight free radicals, reducing inflammation and supporting overall wellness.</p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Antioxidant Profile:</h3>
              <ul className="text-yellow-900 text-sm space-y-2">
                <li>• <strong>Betalains</strong> - Natural anti-inflammatory compounds</li>
                <li>• <strong>Phenolic acids</strong> - Protect against cell damage</li>
                <li>• <strong>Flavonoids</strong> - Support heart health</li>
                <li>• <strong>Vitamin E</strong> - Protects skin from aging</li>
              </ul>
            </div>
            <p className="text-yellow-900">Clinical studies suggest that the antioxidant activity of yellow dragon fruit is comparable to blueberries, making it an excellent addition to an anti-aging diet.</p>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🥗</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Weight Management & Low Calories</h2>
            <p className="text-yellow-900 mb-4">Enjoy a sweet treat without the guilt! Yellow dragon fruit is low in calories and fat, making it perfect for a healthy diet.</p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Weight Loss Benefits:</h3>
              <ul className="text-yellow-900 text-sm space-y-2">
                <li>• <strong>Only 50 calories</strong> per 100g serving</li>
                <li>• <strong>High fiber</strong> keeps you feeling full longer</li>
                <li>• <strong>Natural sugars</strong> satisfy sweet cravings healthily</li>
                <li>• <strong>Fat-free</strong> and cholesterol-free</li>
                <li>• <strong>High water content</strong> aids hydration</li>
              </ul>
            </div>
            <p className="text-yellow-900">Nutritionists recommend dragon fruit as a perfect snack for weight watchers - it provides natural sweetness and essential nutrients without excess calories.</p>
          </div>
        </section>
        
        {/* 新增更多健康益处部分 */}
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">❤️</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Heart Health Support</h2>
            <p className="text-yellow-900 mb-4">Yellow dragon fruit contains compounds that support cardiovascular health and may help reduce the risk of heart disease.</p>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">Cardiovascular Benefits:</h3>
              <ul className="text-yellow-900 text-sm space-y-2">
                <li>• <strong>Potassium</strong> helps regulate blood pressure</li>
                <li>• <strong>Magnesium</strong> supports healthy heart rhythm</li>
                <li>• <strong>Fiber</strong> may help lower cholesterol levels</li>
                <li>• <strong>Antioxidants</strong> protect against arterial damage</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🧠</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Brain Health & Cognitive Function</h2>
            <p className="text-yellow-900 mb-4">The antioxidants and minerals in yellow dragon fruit may support brain health and cognitive function.</p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Cognitive Benefits:</h3>
              <ul className="text-yellow-900 text-sm space-y-2">
                <li>• <strong>Antioxidants</strong> protect brain cells from oxidative stress</li>
                <li>• <strong>Iron</strong> improves oxygen delivery to the brain</li>
                <li>• <strong>Natural sugars</strong> provide steady brain energy</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQ部分 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: How much yellow dragon fruit should I eat daily?</h3>
              <p className="text-yellow-900">A: One medium fruit (about 200g) provides excellent nutritional benefits. You can safely eat 1-2 fruits per day as part of a balanced diet.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Is yellow dragon fruit safe during pregnancy?</h3>
              <p className="text-yellow-900">A: Yes! Dragon fruit is rich in folate and iron, making it beneficial for pregnant women. However, always consult your doctor about dietary changes during pregnancy.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Can diabetics eat yellow dragon fruit?</h3>
              <p className="text-yellow-900">A: Yellow dragon fruit has a low glycemic index and high fiber content, making it suitable for diabetics in moderation. The fiber helps slow sugar absorption.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: When is the best time to eat dragon fruit?</h3>
              <p className="text-yellow-900">A: Dragon fruit can be enjoyed any time! Many people prefer it as a morning snack for energy or post-workout for hydration and nutrients.</p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-yellow-200" />
        <section>
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li><a href="/nutrition" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Nutrition Facts</a></li>
            <li><a href="/plant" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">How to Grow</a></li>
            <li><a href="/recipes" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Recipes</a></li>
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
    </>
  );
} 