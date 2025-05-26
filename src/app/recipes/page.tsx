import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Yellow Dragon Fruit Recipes | Smoothies, Salads & More",
  description: "Delicious yellow dragon fruit recipes including smoothies, fruit salads, and healthy breakfast bowls. Easy-to-follow instructions with photos.",
};

export default function RecipesPage() {
  const smoothieRecipeData = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Yellow Dragon Fruit Smoothie",
    "description": "A refreshing and nutritious smoothie featuring yellow dragon fruit, banana, and orange juice. Perfect for breakfast or post-workout recovery.",
    "image": [
      "https://yellowdragonfruit.com/images/Yellow dragon fruit smoothie.png"
    ],
    "author": {
      "@type": "Organization",
      "name": "Yellow Dragon Fruit Guide"
    },
    "datePublished": "2024-12-19",
    "prepTime": "PT10M",
    "cookTime": "PT0M",
    "totalTime": "PT10M",
    "recipeCategory": "Beverage",
    "recipeCuisine": "International",
    "recipeYield": "2 servings",
    "keywords": "dragon fruit smoothie, yellow dragon fruit, healthy smoothie, tropical smoothie",
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "180",
      "fatContent": "1g",
      "carbohydrateContent": "42g",
      "fiberContent": "6g",
      "proteinContent": "3g",
      "sugarContent": "28g",
      "servingSize": "1 smoothie"
    },
    "recipeIngredient": [
      "1 large yellow dragon fruit (200g)",
      "1 ripe banana",
      "1/2 cup fresh orange juice",
      "1 cup ice cubes",
      "1 tbsp honey (optional)",
      "1/4 cup coconut milk"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Cut dragon fruit in half, scoop out flesh"
      },
      {
        "@type": "HowToStep",
        "text": "Peel and slice banana"
      },
      {
        "@type": "HowToStep",
        "text": "Add all ingredients to blender"
      },
      {
        "@type": "HowToStep",
        "text": "Blend for 60-90 seconds until smooth"
      },
      {
        "@type": "HowToStep",
        "text": "Taste and adjust sweetness"
      },
      {
        "@type": "HowToStep",
        "text": "Serve immediately over ice"
      }
    ]
  };

  const fruitSaladRecipeData = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Tropical Dragon Fruit Salad",
    "description": "A colorful and refreshing tropical fruit salad featuring yellow dragon fruit, mango, kiwi, and pineapple with a honey-lime dressing.",
    "image": [
      "https://yellowdragonfruit.com/images/Yellow Dragon Fruit Salad2.png"
    ],
    "author": {
      "@type": "Organization",
      "name": "Yellow Dragon Fruit Guide"
    },
    "datePublished": "2024-12-19",
    "prepTime": "PT15M",
    "cookTime": "PT0M",
    "totalTime": "PT15M",
    "recipeCategory": "Salad",
    "recipeCuisine": "Tropical",
    "recipeYield": "4 servings",
    "keywords": "fruit salad, tropical fruit, dragon fruit salad, healthy dessert",
    "recipeIngredient": [
      "2 yellow dragon fruits, cubed",
      "1 cup pineapple chunks",
      "2 kiwis, sliced",
      "1 mango, diced",
      "1/4 cup fresh mint leaves",
      "2 tbsp lime juice",
      "1 tbsp honey"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Prepare all fruits, cut into bite-size pieces"
      },
      {
        "@type": "HowToStep",
        "text": "Mix lime juice and honey in large bowl"
      },
      {
        "@type": "HowToStep",
        "text": "Add all fruits and gently toss"
      },
      {
        "@type": "HowToStep",
        "text": "Garnish with fresh mint"
      },
      {
        "@type": "HowToStep",
        "text": "Chill for 30 minutes before serving"
      },
      {
        "@type": "HowToStep",
        "text": "Serve in chilled bowls"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I substitute yellow dragon fruit with red dragon fruit in recipes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Yellow dragon fruit is sweeter, so you may need to adjust sweeteners when using red dragon fruit. The texture and nutritional benefits are similar."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my dragon fruit smoothie is the right consistency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A perfect smoothie should coat the back of a spoon but still pour easily. Add more liquid if too thick, or more frozen fruit if too thin."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make dragon fruit recipes ahead of time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smoothies are best fresh but can be stored in the fridge for up to 24 hours. Fruit salads can be made 2-3 hours ahead. Breakfast bowls should be assembled just before serving."
        }
      },
      {
        "@type": "Question",
        "name": "Are dragon fruit recipes suitable for kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Dragon fruit has a mild, sweet flavor that kids love. Start with smoothies and fruit salads, which are naturally appealing to children."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smoothieRecipeData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fruitSaladRecipeData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="w-full flex justify-center mb-8">
          <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
        </div>
        {/* 面包屑导航 */}
        <nav className="mb-4 text-sm text-yellow-700">
          <a href="/" className="hover:text-yellow-600">Home</a> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Recipes</span>
        </nav>
        <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">Yellow Dragon Fruit Recipes</h1>
        
        {/* YouTube视频嵌入 */}
        <div className="mb-12 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Watch: How to Make Yellow Dragon Fruit Smoothie</h2>
          <div className="relative w-full max-w-2xl mx-auto" style={{paddingBottom: '56.25%', height: 0}}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              // src="https://www.youtube.com/embed/vI4jmHLQ2a8" 
              src="https://www.youtube.com/embed/4IJ3S-dAjUE" 
              title="Yellow Dragon Fruit Smoothie Recipe"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🥤</span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Dragon Fruit Smoothie</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/Yellow dragon fruit smoothie.png" alt="Yellow dragon fruit smoothie recipe" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Yellow dragon fruit drink1.png" alt="Dragon fruit smoothie ingredients" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🥤 Perfect Dragon Fruit Smoothie Recipe</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Ingredients:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• 1 large yellow dragon fruit (200g)</li>
                    <li>• 1 ripe banana</li>
                    <li>• 1/2 cup fresh orange juice</li>
                    <li>• 1 cup ice cubes</li>
                    <li>• 1 tbsp honey (optional)</li>
                    <li>• 1/4 cup coconut milk</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Instructions:</h4>
                  <ol className="text-yellow-900 text-sm space-y-1">
                    <li>1. Cut dragon fruit in half, scoop out flesh</li>
                    <li>2. Peel and slice banana</li>
                    <li>3. Add all ingredients to blender</li>
                    <li>4. Blend for 60-90 seconds until smooth</li>
                    <li>5. Taste and adjust sweetness</li>
                    <li>6. Serve immediately over ice</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded">
                <h4 className="font-semibold text-yellow-800 mb-1">Nutritional Info (per serving):</h4>
                <p className="text-yellow-900 text-sm">Calories: 180 | Vitamin C: 45mg | Fiber: 6g | Natural sugars: 28g</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">💡 Pro Tips:</h4>
              <ul className="text-blue-900 text-sm space-y-1">
                <li>• Freeze dragon fruit chunks for a thicker texture</li>
                <li>• Add mint leaves for extra freshness</li>
                <li>• Use coconut water instead of juice for lower calories</li>
                <li>• Blend in protein powder for post-workout nutrition</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🥗</span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Tropical Dragon Fruit Salad</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/Yellow Dragon Fruit Salad2.png" alt="Tropical fruit salad with yellow dragon fruit" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Yellow Dragon Fruit Salad3.png" alt="Fresh fruit salad ingredients" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🥗 Refreshing Tropical Salad</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Ingredients:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• 2 yellow dragon fruits, cubed</li>
                    <li>• 1 cup pineapple chunks</li>
                    <li>• 2 kiwis, sliced</li>
                    <li>• 1 mango, diced</li>
                    <li>• 1/4 cup fresh mint leaves</li>
                    <li>• 2 tbsp lime juice</li>
                    <li>• 1 tbsp honey</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Preparation:</h4>
                  <ol className="text-yellow-900 text-sm space-y-1">
                    <li>1. Prepare all fruits, cut into bite-size pieces</li>
                    <li>2. Mix lime juice and honey in large bowl</li>
                    <li>3. Add all fruits and gently toss</li>
                    <li>4. Garnish with fresh mint</li>
                    <li>5. Chill for 30 minutes before serving</li>
                    <li>6. Serve in chilled bowls</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded">
                <h4 className="font-semibold text-yellow-800 mb-1">Health Benefits:</h4>
                <p className="text-yellow-900 text-sm">Rich in vitamin C, antioxidants, and digestive enzymes. Perfect for weight management and immune support.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🍯</span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Dragon Fruit Breakfast Bowl</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/Yellow dragon fruit drink5.png" alt="Yellow dragon fruit yogurt dessert bowl" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Yellow dragon fruit drink8.png" alt="Healthy breakfast bowl with dragon fruit" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🍯 Nutritious Breakfast Bowl</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Base Ingredients:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• 1 cup Greek yogurt (plain)</li>
                    <li>• 1 yellow dragon fruit, cubed</li>
                    <li>• 2 tbsp granola</li>
                    <li>• 1 tbsp chia seeds</li>
                    <li>• 1 tbsp honey or maple syrup</li>
                    <li>• Fresh berries (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Assembly:</h4>
                  <ol className="text-yellow-900 text-sm space-y-1">
                    <li>1. Layer Greek yogurt in bowl</li>
                    <li>2. Arrange dragon fruit cubes on top</li>
                    <li>3. Sprinkle granola and chia seeds</li>
                    <li>4. Drizzle with honey</li>
                    <li>5. Add berries for extra color</li>
                    <li>6. Serve immediately</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white rounded">
                <h4 className="font-semibold text-yellow-800 mb-1">Perfect for:</h4>
                <p className="text-yellow-900 text-sm">Post-workout recovery, weight loss goals, or a healthy start to your day. High in protein and probiotics.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 新增：更多食谱创意 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">More Dragon Fruit Recipe Ideas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🧊 Dragon Fruit Popsicles</h3>
              <p className="text-yellow-900 text-sm mb-3">Blend dragon fruit with coconut milk and a touch of honey. Freeze in popsicle molds for 4-6 hours.</p>
              <div className="text-xs text-yellow-700">
                <strong>Prep time:</strong> 10 min | <strong>Freeze time:</strong> 4-6 hours
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🥤 Dragon Fruit Agua Fresca</h3>
              <p className="text-yellow-900 text-sm mb-3">Traditional Mexican drink: blend dragon fruit with water, lime juice, and sugar. Strain and serve over ice.</p>
              <div className="text-xs text-yellow-700">
                <strong>Prep time:</strong> 15 min | <strong>Serves:</strong> 4-6 people
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🍰 Dragon Fruit Cheesecake</h3>
              <p className="text-yellow-900 text-sm mb-3">No-bake cheesecake with dragon fruit puree swirled into cream cheese filling. Refrigerate overnight.</p>
              <div className="text-xs text-yellow-700">
                <strong>Prep time:</strong> 30 min | <strong>Chill time:</strong> 8 hours
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">🍹 Dragon Fruit Cocktail</h3>
              <p className="text-yellow-900 text-sm mb-3">Mix dragon fruit puree with sparkling water, lime juice, and mint for a refreshing mocktail.</p>
              <div className="text-xs text-yellow-700">
                <strong>Prep time:</strong> 5 min | <strong>Perfect for:</strong> Summer parties
              </div>
            </div>
          </div>
        </section>
        
        {/* 烹饪技巧和储存 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Cooking Tips & Storage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🔪 Preparation Tips</h3>
              <ul className="text-blue-900 text-sm space-y-2">
                <li>• <strong>Choosing ripe fruit:</strong> Look for bright yellow skin that gives slightly to pressure</li>
                <li>• <strong>Cutting technique:</strong> Use a sharp knife to cut lengthwise, then scoop with a spoon</li>
                <li>• <strong>Removing seeds:</strong> Seeds are edible and nutritious - no need to remove</li>
                <li>• <strong>Preventing browning:</strong> Add lemon juice to cut fruit to maintain color</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">📦 Storage Guidelines</h3>
              <ul className="text-green-900 text-sm space-y-2">
                <li>• <strong>Whole fruit:</strong> Store at room temperature until ripe (2-3 days)</li>
                <li>• <strong>Ripe fruit:</strong> Refrigerate for up to 5 days in plastic bag</li>
                <li>• <strong>Cut fruit:</strong> Store in airtight container, use within 2 days</li>
                <li>• <strong>Freezing:</strong> Cut into chunks, freeze up to 6 months for smoothies</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* FAQ部分 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Recipe FAQs</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Can I substitute yellow dragon fruit with red dragon fruit in recipes?</h3>
              <p className="text-yellow-900 text-sm">A: Yes! Yellow dragon fruit is sweeter, so you may need to adjust sweeteners when using red dragon fruit. The texture and nutritional benefits are similar.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: How do I know if my dragon fruit smoothie is the right consistency?</h3>
              <p className="text-yellow-900 text-sm">A: A perfect smoothie should coat the back of a spoon but still pour easily. Add more liquid if too thick, or more frozen fruit if too thin.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Can I make dragon fruit recipes ahead of time?</h3>
              <p className="text-yellow-900 text-sm">A: Smoothies are best fresh but can be stored in the fridge for up to 24 hours. Fruit salads can be made 2-3 hours ahead. Breakfast bowls should be assembled just before serving.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Are dragon fruit recipes suitable for kids?</h3>
              <p className="text-yellow-900 text-sm">A: Absolutely! Dragon fruit has a mild, sweet flavor that kids love. Start with smoothies and fruit salads, which are naturally appealing to children.</p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-yellow-200" />
        <section>
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li><a href="/nutrition" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Nutrition Facts</a></li>
            <li><a href="/how-to-eat" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">How to Eat</a></li>
            <li><a href="/buy-online" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Buy Online</a></li>
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