import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yellow Dragon Fruit Nutrition Facts | Vitamins & Minerals",
  description: "Detailed nutrition facts of yellow dragon fruit. Learn about calories, vitamins, minerals, and health benefits compared to other fruits.",
};

export default function NutritionPage() {
  const nutritionData = {
    "@context": "https://schema.org",
    "@type": "NutritionInformation",
    "servingSize": "100g",
    "calories": "50",
    "fatContent": "0.1g",
    "saturatedFatContent": "0.02g",
    "carbohydrateContent": "13g",
    "fiberContent": "2.9g",
    "sugarContent": "7.65g",
    "proteinContent": "1.1g",
    "sodiumContent": "39mg",
    "cholesterolContent": "0mg"
  };

  const foodData = {
    "@context": "https://schema.org",
    "@type": "Food",
    "name": "Yellow Dragon Fruit",
    "description": "Yellow dragon fruit (Hylocereus megalanthus) is a nutritional powerhouse that provides essential vitamins, minerals, and antioxidants while remaining low in calories.",
    "image": "https://yellowdragonfruit.com/images/yellowDragonFruit.jpg",
    "nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "100g",
      "calories": "50",
      "fatContent": "0.1g",
      "carbohydrateContent": "13g",
      "fiberContent": "2.9g",
      "proteinContent": "1.1g"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Vitamin C",
        "value": "20.5mg per 100g"
      },
      {
        "@type": "PropertyValue",
        "name": "Iron",
        "value": "1.9mg per 100g"
      },
      {
        "@type": "PropertyValue",
        "name": "Magnesium",
        "value": "39mg per 100g"
      },
      {
        "@type": "PropertyValue",
        "name": "Potassium",
        "value": "272mg per 100g"
      }
    ]
  };

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Yellow Dragon Fruit Nutrition Facts",
    "description": "Comprehensive nutritional analysis of yellow dragon fruit including vitamins, minerals, and health benefits compared to other fruits.",
    "image": [
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
      "@id": "https://yellowdragonfruit.com/nutrition"
    }
  };

  const vitaminData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Yellow Dragon Fruit Vitamin and Mineral Content",
    "description": "Detailed breakdown of vitamins and minerals found in yellow dragon fruit per 100g serving",
    "creator": {
      "@type": "Organization",
      "name": "Yellow Dragon Fruit Guide"
    },
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": "https://yellowdragonfruit.com/api/nutrition-data"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nutritionData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foodData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vitaminData) }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="w-full flex justify-center mb-8">
          <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
        </div>
        {/* 面包屑导航 */}
        <nav className="mb-4 text-sm text-yellow-700">
          <Link href="/" className="hover:text-yellow-600">Home</Link> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Nutrition Facts</span>
        </nav>
        <h1 className="text-3xl font-bold text-yellow-900 mb-6">Yellow Dragon Fruit Nutrition Facts</h1>
        
        {/* 营养概述 */}
        <section className="mb-8">
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Nutritional Overview</h2>
            <p className="text-yellow-900 mb-4">Yellow dragon fruit (Hylocereus megalanthus) is a nutritional powerhouse that provides essential vitamins, minerals, and antioxidants while remaining low in calories. This exotic superfruit offers a unique combination of health benefits that make it an excellent addition to any balanced diet.</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50</div>
                <div className="text-sm text-yellow-900">Calories per 100g</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-yellow-900">Water content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">2.9g</div>
                <div className="text-sm text-yellow-900">Dietary fiber</div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Nutritional Value</h2>
          <div className="bg-yellow-50 p-6 rounded-lg mb-6">
            <p className="text-yellow-900 mb-4">Yellow dragon fruit is a powerhouse of essential nutrients. It is rich in magnesium (supports nerve function), phosphorus (tissue repair), potassium (fluid balance), calcium (bone and teeth health), and vitamin C (immune support). The fruit also provides iron, vitamin A, B vitamins, and niacin. The edible seeds are a good source of dietary fiber and omega-3 fatty acids, which help regulate digestion and reduce inflammation. With nearly 80% water content, yellow dragon fruit is an excellent natural hydrator. Each 100g serving contains about 50 calories, making it ideal for healthy diets and weight management.</p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Detailed Nutritional Table (per 100g)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-yellow-900 border border-yellow-200 rounded-lg mb-4">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Nutrient</th>
                  <th className="text-left p-3 font-semibold">Amount</th>
                  <th className="text-left p-3 font-semibold">% Daily Value</th>
                  <th className="text-left p-3 font-semibold">Health Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Calories</td>
                  <td className="p-3">50 kcal</td>
                  <td className="p-3">2.5%</td>
                  <td className="p-3">Low-calorie energy source</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-semibold">Carbohydrates</td>
                  <td className="p-3">13g</td>
                  <td className="p-3">4%</td>
                  <td className="p-3">Natural energy, brain fuel</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Dietary Fiber</td>
                  <td className="p-3">2.9g</td>
                  <td className="p-3">12%</td>
                  <td className="p-3">Digestive health, cholesterol management</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-semibold">Protein</td>
                  <td className="p-3">1.1g</td>
                  <td className="p-3">2%</td>
                  <td className="p-3">Muscle maintenance</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Fat</td>
                  <td className="p-3">0.1g</td>
                  <td className="p-3">0%</td>
                  <td className="p-3">Virtually fat-free</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-semibold">Vitamin C</td>
                  <td className="p-3">20.5mg</td>
                  <td className="p-3">34%</td>
                  <td className="p-3">Immune support, collagen synthesis</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Iron</td>
                  <td className="p-3">1.9mg</td>
                  <td className="p-3">11%</td>
                  <td className="p-3">Oxygen transport, energy production</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-semibold">Magnesium</td>
                  <td className="p-3">39mg</td>
                  <td className="p-3">10%</td>
                  <td className="p-3">Bone health, muscle function</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-semibold">Calcium</td>
                  <td className="p-3">8.5mg</td>
                  <td className="p-3">1%</td>
                  <td className="p-3">Bone and teeth health</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3 font-semibold">Potassium</td>
                  <td className="p-3">272mg</td>
                  <td className="p-3">8%</td>
                  <td className="p-3">Heart health, blood pressure regulation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-yellow-900">Yellow dragon fruit is exceptionally low in calories while providing significant amounts of essential nutrients, making it an ideal choice for health-conscious individuals.</p>
        </section>
        
        {/* 维生素和矿物质详解 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Key Vitamins & Minerals Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🍊 Vitamin C Powerhouse</h3>
              <p className="text-yellow-900 text-sm mb-2">With 20.5mg per 100g, yellow dragon fruit provides more vitamin C than many citrus fruits.</p>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• Boosts immune system function</li>
                <li>• Supports collagen production for healthy skin</li>
                <li>• Acts as a powerful antioxidant</li>
                <li>• Enhances iron absorption</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">⚡ Iron for Energy</h3>
              <p className="text-yellow-900 text-sm mb-2">Provides 11% of daily iron needs, crucial for preventing anemia.</p>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• Essential for oxygen transport</li>
                <li>• Prevents fatigue and weakness</li>
                <li>• Supports cognitive function</li>
                <li>• Important for pregnant women</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🦴 Magnesium Benefits</h3>
              <p className="text-yellow-900 text-sm mb-2">39mg of magnesium supports over 300 enzymatic reactions in the body.</p>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• Maintains healthy bones and teeth</li>
                <li>• Supports muscle and nerve function</li>
                <li>• Regulates blood sugar levels</li>
                <li>• Promotes better sleep quality</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">❤️ Potassium for Heart Health</h3>
              <p className="text-yellow-900 text-sm mb-2">272mg of potassium helps maintain cardiovascular health.</p>
              <ul className="text-yellow-900 text-sm space-y-1">
                <li>• Regulates blood pressure</li>
                <li>• Supports proper heart rhythm</li>
                <li>• Aids muscle contractions</li>
                <li>• Balances fluid levels</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Nutritional Comparison with Other Fruits</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-yellow-900 border border-yellow-200 rounded-lg">
              <thead className="bg-yellow-100">
                <tr>
                  <th className="text-left p-3 font-semibold">Fruit (per 100g)</th>
                  <th className="text-left p-3 font-semibold">Calories</th>
                  <th className="text-left p-3 font-semibold">Vitamin C</th>
                  <th className="text-left p-3 font-semibold">Fiber</th>
                  <th className="text-left p-3 font-semibold">Iron</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t bg-yellow-200">
                  <td className="p-3 font-semibold">Yellow Dragon Fruit</td>
                  <td className="p-3">50</td>
                  <td className="p-3">20.5mg</td>
                  <td className="p-3">2.9g</td>
                  <td className="p-3">1.9mg</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Red Dragon Fruit</td>
                  <td className="p-3">60</td>
                  <td className="p-3">9mg</td>
                  <td className="p-3">1.8g</td>
                  <td className="p-3">0.3mg</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3">Orange</td>
                  <td className="p-3">47</td>
                  <td className="p-3">53mg</td>
                  <td className="p-3">2.4g</td>
                  <td className="p-3">0.1mg</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Kiwi</td>
                  <td className="p-3">61</td>
                  <td className="p-3">93mg</td>
                  <td className="p-3">3g</td>
                  <td className="p-3">0.3mg</td>
                </tr>
                <tr className="border-t bg-yellow-50">
                  <td className="p-3">Apple</td>
                  <td className="p-3">52</td>
                  <td className="p-3">5mg</td>
                  <td className="p-3">2.4g</td>
                  <td className="p-3">0.1mg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-yellow-900 mt-4">Yellow dragon fruit stands out for its exceptional iron content and balanced nutritional profile, offering unique benefits compared to other tropical and common fruits.</p>
        </section>
        
        {/* 营养建议 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Nutritional Recommendations</h2>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-3">Daily Serving Suggestions:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">For General Health:</h4>
                <ul className="text-yellow-900 text-sm space-y-1">
                  <li>• 1 medium fruit (200g) daily</li>
                  <li>• Best consumed fresh in the morning</li>
                  <li>• Can be eaten 2-3 times per week</li>
                  <li>• Combine with other fruits for variety</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">For Specific Goals:</h4>
                <ul className="text-yellow-900 text-sm space-y-1">
                  <li>• <strong>Weight Loss:</strong> 1/2 fruit as a snack</li>
                  <li>• <strong>Immunity:</strong> 1 fruit during cold season</li>
                  <li>• <strong>Digestion:</strong> After heavy meals</li>
                  <li>• <strong>Energy:</strong> Pre-workout snack</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
          <ul className="list-disc list-inside text-yellow-900 space-y-2">
            <li><a href="/benefits" className="underline hover:text-yellow-600">Yellow Dragon Fruit Benefits</a></li>
            <li><a href="/recipes" className="underline hover:text-yellow-600">Yellow Dragon Fruit Recipes</a></li>
            <li><a href="/compare" className="underline hover:text-yellow-600">Yellow vs Red Dragon Fruit</a></li>
          </ul>
        </section>
      </main>
    </>
  );
} 