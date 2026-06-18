export interface Spice {
  name: string;
  profile: string;
  processing: string[];
  healthBenefit: string;
  culinaryRole?: string;
}

export interface BaltnaItem {
  name: string;
  subtitle?: string;
  tagline: string;
  oneLiner: string;
  howItsMade: string[];
  benefits: string[];
  traditionalUse?: string[];
  keyIngredients?: string[];
  culinaryUse?: string[];
  imageUrl?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  badge?: string;
  subtitle?: string;
  tagline: string;
  oneLiner: string;
  description: string;
  imageUrl: string;
  detailImages?: string[];
  sourcingStory?: string;
  howItsMade: string[];
  benefits: string[];
  spices?: Spice[];
  baltnaItems?: BaltnaItem[];
}

export const STATIC_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kolo",
    category: "Snacks",
    badge: "Best Seller",
    subtitle: "Ethiopia's Original Energy Snack",
    tagline: "The crunch that powered generations.",
    oneLiner: "Ancient grain, roasted to perfection. Unforgettable taste that fuels your day naturally.",
    description: "Ancient grain, roasted to perfection. Unforgettable taste that fuels your day naturally.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Kolo-300x300.png",
    detailImages: [
      "/kolo-bag.jpg",
      "/kolo-hands.jpg",
    ],
    sourcingStory: "Our barley comes from the Ethiopian highlands, where farmers have cultivated this grain for centuries — passing down knowledge of soil and season from parent to child. We partner directly with these farmers. No middlemen. Just farmers who know when the grain is ready.",
    howItsMade: [
      "Triple-Sifted: Only Grade A barley proceeds. Imperfect kernels are removed.",
      "Gently Dehulled: The indigestible husk is removed. The nutrient-rich bran stays.",
      "Small-Batch Roasted: Our master roasters listen for the grain to sing. That's how we know it's ready.",
      "Blended Warm: Roasted barley meets roasted peanut and safflower — each roasted separately, united at the perfect moment.",
      "Air-Cooled & Packed: Stainless steel tables. No preservatives. All freshness.",
    ],
    benefits: [
      "Sustained Energy – Complex carbs release slowly. No sugar crash.",
      "Better Absorption – Roasting reduces phytates, so your body absorbs more iron and zinc.",
      "Complete Protein – Barley + legumes = all essential amino acids.",
      "Mineral-Rich – Naturally contains magnesium, phosphorus, B-vitamins.",
      "Guilt-Free Crunch – Whole ingredients. Nothing artificial. Just satisfaction.",
    ],
  },
  {
    id: 2,
    name: "Dabo Kolo",
    category: "Snacks",
    badge: "Traditional",
    subtitle: "Ethiopia's Original Bite-Sized Snack",
    tagline: "Ethiopia's original bite-sized snack.",
    oneLiner: "Oven-baked wheat snacks seasoned with traditional Ethiopian spices. Perfectly crunchy and full of flavour.",
    description: "Oven-baked wheat snacks seasoned with traditional Ethiopian spices. Perfectly crunchy and full of flavour.",
    imageUrl: "/dabo-kolo-nobg.png",
    detailImages: [
      "/dabo-kolo-bowl.jpg",
      "/kolo-bags-group.jpg",
    ],
    sourcingStory: "Made from the finest Ethiopian wheat, Dabo Kolo has been a household staple for centuries — shared at gatherings and celebrations across the country.",
    howItsMade: [
      "Premium wheat flour is selected and sifted for consistency.",
      "Blended with traditional Ethiopian spices for authentic flavour.",
      "Shaped into bite-sized pieces by hand.",
      "Oven-baked until perfectly golden and crunchy.",
      "Cooled and packed fresh — no artificial preservatives.",
    ],
    benefits: [
      "Traditional Recipe – Authentic flavour handed down through generations.",
      "Oven-Baked – Not fried. Less oil, more crunch.",
      "Spice-Forward – Natural spices with no artificial flavouring.",
      "Shareable Snack – Perfect for gatherings and on-the-go.",
      "No Artificial Additives – Clean ingredients you can trust.",
    ],
  },
  {
    id: 100,
    name: "Ethiopian Baltna",
    category: "Spice Blends",
    subtitle: "Authentic. Ancestral. Absolute.",
    tagline: "Authentic. Ancestral. Absolute.",
    oneLiner: "Crafted here. Perfected here. Pure here.",
    description: "Hand-selected ingredients, processed with traditional techniques. No additives, no shortcuts. The true taste of an Ethiopian kitchen in every spoonful.",
    imageUrl: "/baltna-hero.jpg",
    howItsMade: [],
    benefits: [],
    baltnaItems: [
      {
        name: "Beso",
        subtitle: "Roasted Barley Flour",
        tagline: "Instant energy. Ancient recipe.",
        oneLiner: "Pre-digested starch for easy fuel. Mix with water or milk — no cooking. Unforgettable comfort, ready in seconds.",
        imageUrl: "/beso-flour.jpg",
        howItsMade: [
          "Cleaned & Sorted: Only the best barley proceeds.",
          "Slow Roasted: Deep golden-brown, fully dry, intensely aromatic.",
          "Cooled Completely: Prevents clumping during milling.",
          "Blended Lightly: Cinnamon, salt, and roasted peanut are added with a gentle hand.",
          "Stone-Ground: Fine, free-flowing flour that dissolves instantly.",
          "Sieved: Uniform particle size for consistent texture.",
        ],
        benefits: [
          "Pre-Digested Starch – Roasting breaks down complex chains. Easy energy, fast.",
          "Shelf Stable – Months without refrigeration. Ancient preservation.",
          "Fiber Rich – Slowly digestible, keeps you satisfied.",
          "Beta-Glucans – Naturally supports healthy cholesterol levels.",
          "No Cooking Required – Mix with water or milk. Ready in seconds.",
        ],
        traditionalUse: [
          "Mixed with water or milk for instant porridge — no cooking required.",
          "Rolled into balls with spiced butter. The traveller's companion with afternoon tea.",
        ],
      },
      {
        name: "Bula",
        subtitle: "Ensete Starch",
        tagline: "The food of recovery.",
        oneLiner: "Reserved for elders, mothers, and the healing. The most easily digestible food in Ethiopian tradition.",
        imageUrl: "/bula-starch.jpg",
        howItsMade: [
          "Decorticated: The pseudo stems are carefully stripped.",
          "Fermented & Pressed: Repeated extraction separates the pure starch.",
          "Sun-Dried: Spread in thin layers until the granules turn pure white.",
          "Milled to Powder: Fine, silky, ready to prepare.",
        ],
        benefits: [
          "Exceptionally Digestible – Gentle even for distressed stomachs.",
          "Neutral Flavour – Accepts sweet or savory additions. Adaptable.",
          "Traditional Prescription – Used for gastric distress and recovery from illness.",
          "Naturally Gluten-Free – Not modified. Not processed. Just pure starch.",
          "FODMAP Friendly – Low in fermentable carbohydrates.",
        ],
        traditionalUse: [
          "Reserved for those who need gentleness — postpartum mothers, elders, the recovering ill.",
          "Considered the most easily digestible food in Ethiopian tradition.",
        ],
      },
      {
        name: "Teff",
        subtitle: "The Ancient Grain",
        tagline: "Gluten-free before gluten-free was a label.",
        oneLiner: "3,000 years of nourishment. Highest iron and calcium of any grain. Unforgettable heritage in every spoonful.",
        howItsMade: [
          "Gently Harvested: Careful collection to preserve the tiny grain's integrity.",
          "Multi-Stage Cleaned: Chaff, stones, and foreign seeds are removed through careful cleaning.",
          "Stone-Milled: Low-temperature milling preserves the bran and germ. Whole-grain only — we don't sift out the nutritious parts.",
          "Packed to preserve freshness — no preservatives.",
        ],
        benefits: [
          "Naturally Gluten-Free – Safe for celiac and gluten-sensitive individuals.",
          "Exceptional Iron – Significantly higher than wheat, rice, or corn.",
          "Calcium-Rich – Among the highest calcium levels of any cereal grain.",
          "Low Glycemic Index – Complex starch releases glucose slowly. Sustained energy.",
          "Complete Amino Acids – Contains all eight essential amino acids.",
        ],
      },
      {
        name: "Shiro",
        subtitle: "Roasted Legume Flour with Berbere and Spices",
        tagline: "The 15-minute wot.",
        oneLiner: "Protein-packed, vegan, deeply spiced. No preservatives — just roasted chickpeas, our house berbere, herbs and spices.",
        howItsMade: [
          "Legumes Roasted: Until fully dry, deeply aromatic, and easy to grind.",
          "Herbs & Spices Added: Onion, garlic, ginger, and our signature berbere blend.",
          "Spices Dried: Each at its optimal temperature.",
          "Blended & Ground: Specific ratios for mild, spicy, and extra-fine textures.",
        ],
        benefits: [
          "High Plant Protein – 20–25% protein from roasted legumes.",
          "Fiber-Rich – Supports digestion and satiety.",
          "No Preservatives – Roasting is the preservation. Clean label, clean ingredients.",
          "Customizable Heat – Choose your spice level. You're in control.",
          "Encourages Home Cooking – Faster than takeout. More nourishing than processed convenience foods.",
        ],
        traditionalUse: [
          "The foundation of shiro wot, a daily staple in Ethiopian households.",
          "Quick cooking: simmer with water, oil, and onion. Ready in 15 minutes.",
          "Vegan, protein-forward, deeply satisfying.",
        ],
      },
      {
        name: "Berbere",
        subtitle: "Ethiopian Spice Blend",
        tagline: "The heartbeat of Ethiopian cuisine.",
        oneLiner: "An intricate blend of fiery chilies, sacred aromatics, and ancient sun-drying traditions. Intense complexity, ready to transform any dish.",
        howItsMade: [
          "Selected & De-seeded: Premium red chili peppers are harvested and washed thoroughly.",
          "Sun-Dried: Spread under the highland sun until completely crisp and vibrant red.",
          "Slow Toasted: Sacred spices — garlic, ginger, sacred basil (besobela), korarima, habesha onion, black cumin, white cumin — are gently toasted to unlock their essential oils.",
          "Blended with Precision: The sun-dried chilies and aromatic spices are combined in a time-tested ratio.",
          "Stone-Ground: Milled into a fine, uniform, free-flowing powder.",
          "Sieved & Cured: Sifted for perfect texture and allowed to mature slightly so the flavors fuse beautifully.",
        ],
        benefits: [
          "Metabolism Booster – Capsaicin from the red chilies naturally supports metabolic health.",
          "Packed with Antioxidants – A powerhouse of whole spices that combat oxidative stress.",
          "Digestive Support – Traditional spices like ginger, korarima, and fenugreek aid in smooth digestion.",
          "Vitamin Rich – High in Vitamins A and C from the sun-dried chili peppers.",
          "Anti-Inflammatory Properties – Garlic and sacred basil provide natural immune-supporting benefits.",
        ],
        traditionalUse: [
          "The essential foundation for Wot (Ethiopian stews) — creating the rich, complex base for doro wot, misir wot, and beef stews.",
          "Mixed with oil or spiced butter (niter kibbeh) to make awaze, a rich paste used as a dipping sauce or marinade.",
          "A versatile dry rub for meats, fish, or sprinkled over roasted vegetables for an authentic Ethiopian kick.",
        ],
      },
      {
        name: "Mitmita",
        subtitle: "Pure fire. Authentic flavor.",
        tagline: "Pure fire. Authentic flavor.",
        oneLiner: "A finely ground, bright orange-red blend that brings the true, searing heat of authentic Ethiopian culture straight to your kitchen.",
        howItsMade: [
          "Chilies are sun-dried until they rattle, then coarsely crushed — never powdered to dust.",
          "Different spices are added whole to the blend.",
          "The entire blend is gently warmed to bloom the oils.",
        ],
        keyIngredients: [
          "Bird's Eye Chili Peppers (Mitmita Chilis): Small, exceptionally hot chilis that give the blend its signature punch.",
          "Cardamom (Korerima): Ethiopian sacred cardamom provides a warm, resinous undertone.",
          "Cloves: Adds a sweet, pungent aroma that cuts through the heat.",
          "Salt: Balances the high heat and enhances the spices.",
        ],
        benefits: [
          "High Capsaicin Content – Traditionally applied as a stimulant and to improve circulation.",
          "Vitamin C Retained – Careful low-heat drying preserves vitamins from fresh peppers.",
          "Fierce, Clean Heat – Intense heat that arrives quickly and fades cleanly.",
        ],
        culinaryUse: [
          "Kitfo (ክትፎ): The absolute essential seasoning for Ethiopia's traditional minced raw beef dish.",
          "Dulet (ዱለት): Mixed into seasoned tripe and beef.",
          "As a Condiment: Served on the side for dipping raw beef (Tere Siga) or sprinkling over Firfir and Injera for an extra kick of heat.",
        ],
      },
      {
        name: "Telba (Flaxseed)",
        subtitle: "Flaxseed",
        tagline: "Ancient wellness in every seed.",
        oneLiner: "Cultivated high-quality, oil-rich seeds from the cool, high-altitude crop rotations of the Ethiopian highlands.",
        howItsMade: [
          "Sun-dried in the Ethiopian highlands until fully dry.",
          "Meticulously winnowed to remove chaff and impurities.",
          "Lightly toasted to develop a rich, nutty aroma.",
          "Milled to order — whole or ground.",
        ],
        benefits: [
          "Omega-3 Rich – Exceptionally high in alpha-linolenic acid (ALA), an essential fatty acid.",
          "Soluble Fiber – Supports smooth digestion and satiety.",
          "Anti-Inflammatory – Deeply rooted in traditional remedies to reduce inflammation and restore strength.",
          "Digestive Wellness – Traditionally used to soothe and heal the digestive system.",
        ],
      },
      {
        name: "Genfo",
        subtitle: "The Ultimate Porridge Blend",
        tagline: "The ultimate porridge blend.",
        oneLiner: "Premium, hearty grains sustainably harvested from the optimal highland growing regions of Ethiopia.",
        howItsMade: [
          "Select quality barley, broad bean and oats, thoroughly washed and sun-dried.",
          "Roasted until deeply golden and aromatic.",
          "Roasted peanut, clove and salt added before being finely milled.",
        ],
        benefits: [
          "Energy-Dense – Packed with complex carbohydrates and essential nutrients for sustained vitality.",
          "Recovery Food – Traditionally served to new mothers to accelerate recovery, rebuild strength, and boost vitality.",
          "Comforting & Nourishing – Toasted, robust, deeply comforting profile.",
        ],
      },
      {
        name: "Atmit",
        subtitle: "The Nourishing Comfort Gruel",
        tagline: "The nourishing comfort gruel.",
        oneLiner: "Specially selected, nutrient-rich ancient grains cultivated across the fertile highland fields.",
        howItsMade: [
          "A precise blend of roasted barley, teff, oats, corn, safflower seed, flaxseed, sesame seed and wheat.",
          "Finely ground into a smooth, silky flour designed for effortless digestion.",
        ],
        benefits: [
          "Rich in Soluble Fiber – Vitamins and minerals for complete nourishment.",
          "Gentle & Digestible – Highly regarded in traditional wellness as a soothing drink for mothers and infants.",
          "Strengthening – A highly digestible, strengthening nutritional lift for anyone in recovery.",
          "Creamy & Comforting – Mildly sweet, effortlessly smooth.",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Ethiopian Spices",
    category: "Spices",
    badge: "Single-Origin",
    subtitle: "Single-Origin. Whole-Ground. Genuine.",
    tagline: "Grown here. Ground here. Genuine here.",
    oneLiner: "Endemic Ethiopian species, sourced from family farms. No fillers, no imports. Unforgettable aroma from seed to jar.",
    description: "Endemic Ethiopian species, sourced from family farms. No fillers, no imports. Unforgettable aroma from seed to jar.",
    imageUrl: "/spices-hero.jpeg",
    sourcingStory: "Ethiopia is one of the world's most botanically diverse nations, with spice traditions predating the global spice trade. Our spices are grown in Ethiopia, ground in Ethiopia, packed in Ethiopia. No fillers. No imports.",
    howItsMade: [],
    benefits: [
      "No Fillers – Pure single-origin spices. No additives. No blends with imports.",
      "Small-Batch Ground – Freshness locked in at source.",
      "Ethically Sourced – Direct from family farms across Ethiopia's diverse growing regions.",
      "Authentic Flavour – The real thing, as used in Ethiopian homes for centuries.",
    ],
    spices: [
      {
        name: "Korarima (Ethiopian Cardamom)",
        profile: "Sweet, aromatic, spicy-savory",
        processing: [
          "Pods are hand-picked when fully ripe, then sun-dried.",
          "Mature pods are gently pressed until they burst apart.",
          "Seeds are allowed to dry for a few days until shiny black-brown.",
          "Only the dried seeds proceed to grinding.",
        ],
        healthBenefit: "Traditionally used as a digestive aid and carminative. Essential oils known for antimicrobial properties.",
      },
      {
        name: "Besobela (Ethiopian Basil / Sacred Basil)",
        profile: "Clove-like, peppery, slightly medicinal",
        processing: [
          "Whole plants are cut at the base, bundled, and hung in shaded, ventilated drying rooms.",
          "Once brittle, leaves are stripped from the stems.",
          "Leaves are gently milled to preserve aromatic oils.",
        ],
        healthBenefit: "Rich in eugenol and other phenolic compounds. Used in traditional medicine for respiratory and gastrointestinal complaints.",
        culinaryRole: "Essential in clarified butter (nit'r qibe), shiro, and alicha. Added at the last minute as a finishing herb.",
      },
      {
        name: "Tikur Azmud (Black Cumin)",
        profile: "Onion-like, peppery, slightly bitter",
        processing: [
          "Tiny black seeds are carefully cleaned.",
          "Sun-dried to reduce moisture.",
          "Lightly toasted to develop flavour.",
          "Available whole or fine-ground.",
        ],
        healthBenefit: "Extensively studied for antioxidant and anti-inflammatory properties. Traditional use includes respiratory support and digestive health.",
      },
      {
        name: "Dimbilal (Coriander)",
        profile: "Citrusy, floral, warm — softer than Indian coriander",
        processing: [
          "Harvested as a cool-season crop at peak ripeness.",
          "Sun-dried until seeds rattle.",
          "Cleaned to remove chaff and foreign matter.",
          "Milled to order — whole or ground.",
        ],
        healthBenefit: "Traditionally used for gastrointestinal complaints. Contains linalool and other beneficial terpenes.",
      },
      {
        name: "Tosign (Ethiopian Wild Thyme)",
        profile: "Camphoraceous, earthy, wild",
        processing: [
          "Harvested from wild highland plants at peak bloom.",
          "Sun-dried at low temperature to preserve aromatic compounds.",
          "Coarse-milled for intensely aromatic texture.",
        ],
        healthBenefit: "High in thymol and carvacrol — potent antimicrobial properties. Used in traditional medicine for cough and cold.",
      },
      {
        name: "Koseret (Lippia)",
        profile: "Oregano-like, with lemon and mint undertones — completely unique to Ethiopian cuisine",
        processing: [
          "Leaves harvested from wild shrubs in southwestern Ethiopia.",
          "Dried in thin layers to retain vibrant green colour.",
          "Gently milled to preserve essential oils.",
        ],
        healthBenefit: "Distinctively aromatic. Unique to Ethiopian cuisine — non-negotiable in authentic kitfo and clarified butter.",
        culinaryRole: "Essential in kitfo and proper clarified butter. Non-negotiable.",
      },
    ],
  },
  {
    id: 10,
    name: "Adulis Cookies",
    category: "Snacks",
    badge: "Artisan",
    subtitle: "Your Everyday Indulgence, Perfected",
    tagline: "The warmth you can taste.",
    oneLiner: "Simple ingredients, baked to golden perfection. A timeless treat made for every moment.",
    description: "Simple ingredients, baked to golden perfection. A timeless treat made for every moment.",
    imageUrl: "/cookies-box-clean.jpg",
    detailImages: [
      "/cookies-box-lifestyle.jpg",
    ],
    sourcingStory: "Each batch is made with quality wheat flour, real butter, and spices sourced directly from our own Ethiopian Spices line. What goes in matters — so we use the same ingredients we'd serve at our own table.",
    howItsMade: [
      "Carefully Selected Ingredients: Only the best makes it in. Fresh butter, premium flour, and rich add-ins. No compromises.",
      "Small-Batch Mixing: Each batch is mixed with precision. Texture matters. Balance matters. Every detail matters.",
      "Hand-Portioned Dough: Every cookie is shaped with care. Not rushed. Not automated. Just the right size, every time.",
      "Baked to Golden Perfection: We don't just bake — we watch, we smell, we know. The moment the edges turn golden, they're ready.",
      "Rested & Ready: Fresh from the oven, then cooled just enough to lock in that soft center and perfect bite.",
    ],
    benefits: [
      "Real Butter Baked – No margarine, no shortening substitutes.",
      "Authentic Spiced Flavour – Seasoned with Ethiopian spices from our own line.",
      "No Artificial Preservatives – Freshness comes from quality, not chemistry.",
      "Gift-Ready Packaging – Presented in Adulis branded boxes, perfect for sharing.",
      "Made in Ethiopia – Supporting local bakers and local ingredients.",
    ],
  },
  {
    id: 3,
    name: "Peanut Butter",
    category: "Spreads",
    badge: "Export Quality",
    subtitle: "Creamy. Pure. Aflatoxin-Safe.",
    tagline: "The cleanest peanut butter you'll ever trust.",
    oneLiner: "No palm oil. No preservative. No compromise. Just pure, roasted Ethiopian peanuts — tested for safety, crafted for flavour.",
    description: "No palm oil. No preservative. No compromise. Just pure, roasted Ethiopian peanuts — tested for safety, crafted for flavour.",
    imageUrl: "/peanut-butter-nobg.png",
    detailImages: [
      "/peanut-butter-jar.jpg",
      "/peanut-butter-table.jpg",
    ],
    sourcingStory: "Our peanuts come from regions known for nuts with high oil content and sweet, rounded flavour. Every single load is tested. If it does not meet our strict safety threshold, it is rejected. Full stop.",
    howItsMade: [
      "Tested First: Every batch aflatoxin-verified. No exceptions.",
      "Slow-Dry Roasted: Precise temperatures develop deep flavour and loosen the skins.",
      "Blanched & Winnowed: Skins are gently removed.",
      "Two-Stage Ground: Coarse, then fine, until natural oils release and the butter turns silky.",
      "Cooled & Tempered: Stirred slowly to prevent oil separation.",
      "Jarred Fresh: No hydrogenated oils. No sugar. No palm oil. Ever.",
    ],
    benefits: [
      "Aflatoxin-Safe – This is not marketing. It is a safety standard we enforce rigorously.",
      "Pure Plant Protein – 25g protein per 100g. Complete with fiber and healthy fats.",
      "Heart-Healthy Fats – Rich in monounsaturated and polyunsaturated fats. Zero trans fat.",
      "Vitamin E Source – Natural antioxidant for skin and immune health.",
      "No Preservatives, No Palm Oil – Just peanuts, roasted right, ground fresh.",
    ],
  },
  {
    id: 4,
    name: "Roasted Peanuts",
    category: "Nuts",
    badge: "Premium",
    subtitle: "Whole. Seasoned. Honest.",
    tagline: "The nut that needs nothing.",
    oneLiner: "Dry-roasted in their own skins. Lightly salted. Unforgettable crunch, zero artificial anything.",
    description: "Dry-roasted in their own skins. Lightly salted. Unforgettable crunch, zero artificial anything.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Roasted-Peanut-300x300.png",
    sourcingStory: "The same rigorous sourcing as our peanut butter — ensuring consistent size, colour, and moisture content. Every batch, every time.",
    howItsMade: [
      "Hand-Sorted: Every batch passes under trained eyes. Our sorters remove any discoloured or imperfect nut. It is slow. It is careful. It is how quality is earned.",
      "Graded by Size: Mechanical sifting ensures uniform kernels. Uneven size means uneven roasting.",
      "Dry-Roasted: No oil. The nuts roast in their own skins, locking in moisture and flavour.",
      "Lightly Seasoned (Optional): Sea salt or our mitmita blend dusted while warm. No oil spray needed — the heat adheres naturally.",
      "Double-Cooled: Rapid cool, then stabilization. No condensation inside the bag.",
    ],
    benefits: [
      "Nutrient-Dense – 30g provides 7g protein, 2g fiber, magnesium, and vitamin E.",
      "Satiety Support – Protein + fat + fiber = a handful that truly satisfies.",
      "Plain or Spiced – You choose. Both contain zero artificial preservatives.",
      "Dry-Roasted – No added oil. The nut's own oils do the work.",
      "Aflatoxin-Tested – Same rigorous safety standard as our peanut butter.",
    ],
  },
  {
    id: 11,
    name: "White Vinegar",
    category: "Condiments",
    badge: "Food Grade",
    subtitle: "Modern Purity. Clinical Precision.",
    tagline: "The standard of clarity.",
    oneLiner: "Food-grade precision for a crisp, consistent finish. No impurities, just performance.",
    description: "Food-grade precision for a crisp, consistent finish. No impurities, just performance.",
    imageUrl: "/white-vinegar.jpg",
    howItsMade: [
      "Precision Formulated: We use a modern automated process to blend high-grade acetic acid with purified water.",
      "Machine-Balanced: Continuous monitoring ensures a perfectly consistent acidity level in every bottle.",
    ],
    benefits: [
      "Consistent Results – Guaranteed acidity for perfect pickling.",
      "Zero Additives – No sugar, no coloring, and no artificial aromas.",
      "Multi-Purpose Power – A food-safe essential for culinary, preservation, and eco-friendly cleaning.",
    ],
  },
  {
    id: 12,
    name: "Table Salt",
    category: "Condiments",
    badge: "Refined",
    subtitle: "Pure. Fine. Essential.",
    tagline: "The foundation of every flavor.",
    oneLiner: "Refined to perfection for an even, quick-dissolving season.",
    description: "Refined to perfection for an even, quick-dissolving season.",
    imageUrl: "/table-salt.webp",
    howItsMade: [
      "Refined & Purified: Processed to remove harsh bitterness and impurities.",
      "Evenly Milled: Finely textured for consistent distribution across your dishes.",
      "Moisture-Protected: Sealed to stay free-flowing and clump-free.",
    ],
    benefits: [
      "Pure & Clean – No harsh bitterness or impurities.",
      "Even Distribution – Finely milled for consistent seasoning every time.",
      "Free-Flowing – Moisture-protected to prevent clumping.",
    ],
  },
];
