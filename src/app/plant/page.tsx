import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How to Grow Yellow Dragon Fruit | Complete Plant Guide",
  description: "Learn how to grow yellow dragon fruit plants from cuttings or seeds. Complete guide with care instructions, troubleshooting, and harvesting tips.",
};

export default function PlantPage() {
  const howToGrowData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Grow Yellow Dragon Fruit Plant",
    "description": "Complete guide to growing yellow dragon fruit plants from cuttings or seeds, including care instructions and troubleshooting.",
    "image": [
      "https://yellowdragonfruit.com/images/Yellow dragon fruit plant flower3.png",
      "https://yellowdragonfruit.com/images/Yellow dragon fruit plant.png"
    ],
    "totalTime": "P3Y",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "25-50"
    },
    "supply": [
      "Dragon fruit cutting or seed",
      "Well-draining cactus soil mix",
      "Large pot (20+ gallons for mature plants)",
      "Strong trellis or support system",
      "Rooting hormone (for cuttings)"
    ],
    "tool": [
      "Sharp knife",
      "Gardening gloves",
      "Watering can or hose",
      "Pruning shears"
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Prepare the cutting",
        "text": "Get a 12-18 inch healthy cutting from mature plant and let cut end dry in shade for 3-7 days until callused."
      },
      {
        "@type": "HowToStep",
        "name": "Apply rooting hormone",
        "text": "Dip callused end in rooting hormone powder to encourage root development."
      },
      {
        "@type": "HowToStep",
        "name": "Plant in soil",
        "text": "Insert 2-3 inches deep in well-draining cactus mix in a large pot."
      },
      {
        "@type": "HowToStep",
        "name": "Initial watering",
        "text": "Lightly mist soil, avoid overwatering as this can cause rot."
      },
      {
        "@type": "HowToStep",
        "name": "Provide support",
        "text": "Install strong trellis or support system for the climbing plant."
      },
      {
        "@type": "HowToStep",
        "name": "Ongoing care",
        "text": "Water weekly during growing season, fertilize monthly, and prune as needed."
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take for a dragon fruit plant to produce fruit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dragon fruit plants typically start flowering and producing fruit 2-3 years after planting from cuttings, or 4-6 years when grown from seed. Mature plants can produce 20-30 fruits per season."
        }
      },
      {
        "@type": "Question",
        "name": "Can I grow dragon fruit indoors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Dragon fruit makes an excellent houseplant. Provide bright indirect light, a large pot, and strong support. Indoor plants may take longer to fruit but can be very rewarding."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best soil mix for dragon fruit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a well-draining cactus mix or create your own with 50% potting soil, 25% perlite, and 25% coarse sand. Good drainage is essential to prevent root rot."
        }
      },
      {
        "@type": "Question",
        "name": "Why isn't my dragon fruit plant flowering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common reasons include: plant too young (under 2 years), insufficient light, over-fertilizing with nitrogen, or lack of cool winter rest period. Ensure proper growing conditions and be patient."
        }
      },
      {
        "@type": "Question",
        "name": "How big do dragon fruit plants get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dragon fruit plants can grow 15-20 feet tall with proper support. In containers, they typically reach 6-10 feet. Regular pruning helps maintain manageable size while encouraging fruit production."
        }
      }
    ]
  };

  const plantData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Growing Yellow Dragon Fruit Plants",
    "description": "Learn everything about growing yellow dragon fruit plants, from planting to harvesting, with expert tips and troubleshooting advice.",
    "image": [
      "https://yellowdragonfruit.com/images/Yellow dragon fruit plant flower3.png"
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
      "@id": "https://yellowdragonfruit.com/plant"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToGrowData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plantData) }}
      />
      <main className="max-w-3xl mx-auto py-12 px-4">
        <div className="w-full flex justify-center mb-8">
          <Image src="/images/logo.png" alt="Yellow Dragon Fruit" width={120} height={120} className="rounded-full shadow-lg" />
        </div>
        {/* 面包屑导航 */}
        <nav className="mb-4 text-sm text-yellow-700">
          <a href="/" className="hover:text-yellow-600">Home</a> <span className="mx-2">{'>'}</span> <span className="text-yellow-900 font-medium">Planting Guide</span>
        </nav>
        <h1 className="text-3xl font-bold text-yellow-900 mb-6 text-center">How to Grow Yellow Dragon Fruit</h1>
        
        {/* YouTube种植教程视频 */}
        <div className="mb-12 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Watch: Complete Yellow Dragon Fruit Growing Guide</h2>
          <div className="relative w-full max-w-2xl mx-auto" style={{paddingBottom: '56.25%', height: 0}}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/pCF2duxDYjk" 
              title="How to Grow Yellow Dragon Fruit from Seed"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🌞</span>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Ideal Climate & Soil</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/yellowDragonFruit5.png" alt="Yellow dragon fruit growing in ideal climate conditions" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Yellow dragon fruit (7).png" alt="Well-draining soil for dragon fruit cultivation" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            <p className="text-yellow-900">Yellow dragon fruit thrives in warm, sunny climates with well-draining soil. Choose a spot with plenty of sunlight and avoid waterlogged areas.</p>
          </div>
        </section>
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🌱</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Getting Started</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/Yellow dragon fruit blossom.jpg" alt="Yellow dragon fruit plant flowering stage" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Yellow dragon fruit fertilization.png" alt="Dragon fruit plant care and growth" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-800 mb-2">🌱 Complete Growing Guide</h3>
              <p className="text-yellow-900 mb-3">Yellow dragon fruit (Hylocereus megalanthus) is a climbing cactus that can be successfully grown both indoors and outdoors. With proper care, your plant can produce fruit within 2-3 years.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Best Growing Conditions:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• <strong>Temperature:</strong> 65-85°F (18-29°C)</li>
                    <li>• <strong>Humidity:</strong> 50-70%</li>
                    <li>• <strong>Light:</strong> Bright, indirect sunlight</li>
                    <li>• <strong>Soil pH:</strong> 6.0-7.0 (slightly acidic to neutral)</li>
                    <li>• <strong>Hardiness zones:</strong> 9-11 (outdoor planting)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">What You'll Need:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• Dragon fruit cutting or seed</li>
                    <li>• Well-draining cactus soil mix</li>
                    <li>• Large pot (20+ gallons for mature plants)</li>
                    <li>• Strong trellis or support system</li>
                    <li>• Rooting hormone (for cuttings)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🌿</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Planting Step-by-Step</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Image src="/images/Dragon fruit growth process.jpg" alt="Dragon fruit cutting propagation process" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
              <Image src="/images/Dragonfruit seedlings4.jpg" alt="Young dragon fruit plant establishment" width={300} height={200} className="rounded-lg shadow w-full h-48 object-cover" />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-green-800 mb-3">🌿 Detailed Planting Instructions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Option 1: Growing from Cutting (Recommended)</h4>
                  <ol className="text-green-900 text-sm space-y-2">
                    <li><strong>1. Prepare the cutting:</strong> Get a 12-18 inch healthy cutting from mature plant</li>
                    <li><strong>2. Cure the cutting:</strong> Let cut end dry in shade for 3-7 days until callused</li>
                    <li><strong>3. Apply rooting hormone:</strong> Dip callused end in rooting hormone powder</li>
                    <li><strong>4. Plant in soil:</strong> Insert 2-3 inches deep in well-draining cactus mix</li>
                    <li><strong>5. Initial watering:</strong> Lightly mist soil, avoid overwatering</li>
                    <li><strong>6. Root development:</strong> Roots typically form within 2-4 weeks</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Option 2: Growing from Seed</h4>
                  <ol className="text-green-900 text-sm space-y-2">
                    <li><strong>1. Seed preparation:</strong> Extract seeds from ripe fruit, clean thoroughly</li>
                    <li><strong>2. Germination setup:</strong> Use seed starting mix in small pots</li>
                    <li><strong>3. Planting depth:</strong> Barely cover seeds with soil (1/8 inch deep)</li>
                    <li><strong>4. Moisture control:</strong> Keep soil consistently moist but not soggy</li>
                    <li><strong>5. Germination time:</strong> Seeds typically sprout in 15-30 days</li>
                    <li><strong>6. Transplanting:</strong> Move to larger pots when 4-6 inches tall</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">��</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Watering & Feeding</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-800 mb-3">💧 Watering Schedule & Fertilizing</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Watering Guidelines:</h4>
                  <ul className="text-blue-900 text-sm space-y-2">
                    <li>• <strong>Frequency:</strong> Water when top 2 inches of soil are dry</li>
                    <li>• <strong>Growing season:</strong> More frequent watering (weekly)</li>
                    <li>• <strong>Winter dormancy:</strong> Reduce watering to monthly</li>
                    <li>• <strong>Method:</strong> Deep, thorough watering until water drains</li>
                    <li>• <strong>Water quality:</strong> Use filtered or rainwater when possible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Fertilizer Program:</h4>
                  <ul className="text-blue-900 text-sm space-y-2">
                    <li>• <strong>Type:</strong> Balanced 10-10-10 fertilizer</li>
                    <li>• <strong>Frequency:</strong> Monthly during growing season</li>
                    <li>• <strong>Application:</strong> Dilute to half strength</li>
                    <li>• <strong>Organic options:</strong> Compost tea or fish emulsion</li>
                    <li>• <strong>Winter feeding:</strong> Stop fertilizing in dormant season</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8 flex items-start gap-3">
          <span className="text-2xl">🏗️</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Support & Training</h2>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-purple-800 mb-3">🏗️ Building Strong Support Systems</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Trellis Requirements:</h4>
                  <ul className="text-purple-900 text-sm space-y-2">
                    <li>• <strong>Height:</strong> Minimum 6 feet tall (8-10 feet ideal)</li>
                    <li>• <strong>Material:</strong> Strong wood, metal, or concrete posts</li>
                    <li>• <strong>Stability:</strong> Must support 20-50 pounds when mature</li>
                    <li>• <strong>Spacing:</strong> Allow 3-4 feet between multiple plants</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Training Techniques:</h4>
                  <ul className="text-purple-900 text-sm space-y-2">
                    <li>• <strong>Initial training:</strong> Tie main stem to support weekly</li>
                    <li>• <strong>Pruning:</strong> Remove weak or damaged branches</li>
                    <li>• <strong>Shape management:</strong> Encourage horizontal growth</li>
                    <li>• <strong>Tie materials:</strong> Use soft cloth or plant ties</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 新增：季节性护理 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Seasonal Care Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">🌸 Spring & Summer (Growing Season)</h3>
              <ul className="text-green-900 text-sm space-y-2">
                <li>• <strong>Active growth period:</strong> March through September</li>
                <li>• <strong>Increased watering:</strong> Weekly or when soil surface dries</li>
                <li>• <strong>Regular fertilizing:</strong> Monthly with balanced fertilizer</li>
                <li>• <strong>Pruning:</strong> Remove dead or weak growth</li>
                <li>• <strong>Pest monitoring:</strong> Watch for scale insects and mealybugs</li>
                <li>• <strong>Support maintenance:</strong> Adjust ties as plant grows</li>
              </ul>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">❄️ Fall & Winter (Dormant Season)</h3>
              <ul className="text-blue-900 text-sm space-y-2">
                <li>• <strong>Rest period:</strong> October through February</li>
                <li>• <strong>Reduced watering:</strong> Monthly or when soil is very dry</li>
                <li>• <strong>No fertilizing:</strong> Allow plant to rest naturally</li>
                <li>• <strong>Cold protection:</strong> Move indoors if below 50°F</li>
                <li>• <strong>Humidity control:</strong> Maintain 40-50% humidity indoors</li>
                <li>• <strong>Light management:</strong> Provide bright indirect light</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* 新增：问题诊断和解决 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Common Problems & Solutions</h2>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">🚨 Yellow/Dropping Leaves</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Possible Causes:</h4>
                  <ul className="text-red-900 text-sm space-y-1">
                    <li>• Overwatering (most common)</li>
                    <li>• Underwatering during growing season</li>
                    <li>• Poor drainage</li>
                    <li>• Natural winter dormancy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-1">Solutions:</h4>
                  <ul className="text-red-900 text-sm space-y-1">
                    <li>• Check soil moisture before watering</li>
                    <li>• Improve pot drainage</li>
                    <li>• Adjust watering frequency seasonally</li>
                    <li>• Remove affected stems to prevent rot</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">🐛 Pest Control</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-orange-800 mb-1">Common Pests:</h4>
                  <ul className="text-orange-900 text-sm space-y-1">
                    <li>• Scale insects (small brown bumps)</li>
                    <li>• Mealybugs (white cotton-like clusters)</li>
                    <li>• Spider mites (tiny webbing)</li>
                    <li>• Aphids (small green/black insects)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-800 mb-1">Treatment Options:</h4>
                  <ul className="text-orange-900 text-sm space-y-1">
                    <li>• Neem oil spray (organic option)</li>
                    <li>• Insecticidal soap solution</li>
                    <li>• Rubbing alcohol on cotton swab</li>
                    <li>• Increase air circulation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-800 mb-2">🌿 Slow or No Growth</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Possible Reasons:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• Insufficient light</li>
                    <li>• Poor soil nutrition</li>
                    <li>• Root bound condition</li>
                    <li>• Seasonal dormancy (normal)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Improvements:</h4>
                  <ul className="text-yellow-900 text-sm space-y-1">
                    <li>• Move to brighter location</li>
                    <li>• Start regular fertilizing program</li>
                    <li>• Repot into larger container</li>
                    <li>• Be patient during winter months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* 新增：结果期管理 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Flowering & Fruiting</h2>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 mb-4">🌸 From Flower to Fruit</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-pink-800 mb-2">Flowering Timeline:</h4>
                <ul className="text-pink-900 text-sm space-y-2">
                  <li>• <strong>First flowers:</strong> Usually after 2-3 years</li>
                  <li>• <strong>Blooming season:</strong> Late summer to early fall</li>
                  <li>• <strong>Flower characteristics:</strong> Large white blooms, open at night</li>
                  <li>• <strong>Pollination:</strong> Self-fertile, but hand pollination increases yield</li>
                  <li>• <strong>Fruit development:</strong> 30-50 days from flower to ripe fruit</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-800 mb-2">Maximizing Fruit Production:</h4>
                <ul className="text-pink-900 text-sm space-y-2">
                  <li>• <strong>Hand pollination:</strong> Transfer pollen with small brush</li>
                  <li>• <strong>Optimal nutrition:</strong> Increase phosphorus during flowering</li>
                  <li>• <strong>Consistent moisture:</strong> Avoid water stress during fruit development</li>
                  <li>• <strong>Support heavy fruits:</strong> Use nets or supports for large fruits</li>
                  <li>• <strong>Harvest timing:</strong> Pick when skin changes from green to yellow</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ部分 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-6">Growing FAQs</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: How long does it take for a dragon fruit plant to produce fruit?</h3>
              <p className="text-yellow-900 text-sm">A: Dragon fruit plants typically start flowering and producing fruit 2-3 years after planting from cuttings, or 4-6 years when grown from seed. Mature plants can produce 20-30 fruits per season.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Can I grow dragon fruit indoors?</h3>
              <p className="text-yellow-900 text-sm">A: Yes! Dragon fruit makes an excellent houseplant. Provide bright indirect light, a large pot, and strong support. Indoor plants may take longer to fruit but can be very rewarding.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: What's the best soil mix for dragon fruit?</h3>
              <p className="text-yellow-900 text-sm">A: Use a well-draining cactus mix or create your own with 50% potting soil, 25% perlite, and 25% coarse sand. Good drainage is essential to prevent root rot.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: Why isn't my dragon fruit plant flowering?</h3>
              <p className="text-yellow-900 text-sm">A: Common reasons include: plant too young (under 2 years), insufficient light, over-fertilizing with nitrogen, or lack of cool winter rest period. Ensure proper growing conditions and be patient.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-yellow-800 mb-2">Q: How big do dragon fruit plants get?</h3>
              <p className="text-yellow-900 text-sm">A: Dragon fruit plants can grow 15-20 feet tall with proper support. In containers, they typically reach 6-10 feet. Regular pruning helps maintain manageable size while encouraging fruit production.</p>
            </div>
          </div>
        </section>
        <hr className="my-8 border-yellow-200" />
        <section>
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Related Articles</h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            <li><a href="/benefits" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">Health Benefits</a></li>
            <li><a href="/how-to-eat" className="block bg-yellow-50 hover:bg-yellow-100 rounded-lg px-4 py-2 text-center shadow text-yellow-900 font-medium transition">How to Eat</a></li>
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
    </>
  );
} 