export interface Spice {
  name: string;
  profile: string;
  processing: string[];
  healthBenefit: string;
  culinaryRole?: string;
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
    id: 10,
    name: "Adulis Cookies",
    category: "Snacks",
    badge: "Artisan",
    subtitle: "Baked with Ethiopian Heritage",
    tagline: "Where tradition meets the biscuit tin.",
    oneLiner: "Buttery, golden, and spiced with authentic Ethiopian flavours. Baked fresh, packed with care — no shortcuts, no artificial anything.",
    description: "Buttery, golden, and spiced with authentic Ethiopian flavours. Baked fresh, packed with care — no shortcuts, no artificial anything.",
    imageUrl: "/cookies-box-clean.jpg",
    detailImages: [
      "/cookies-box-lifestyle.jpg",
    ],
    sourcingStory: "Each batch is made with quality wheat flour, real butter, and spices sourced directly from our own Ethiopian Spices line. What goes in matters — so we use the same ingredients we'd serve at our own table.",
    howItsMade: [
      "Premium Ingredients Selected: Quality wheat flour, real butter, and our own house spices — no substitutes.",
      "Dough Mixed by Hand: Blended to the right texture — soft enough to shape, firm enough to hold.",
      "Shaped & Portioned: Each cookie is carefully formed for even baking.",
      "Oven-Baked: Golden on the outside, tender within. Timed by eye, not just by clock.",
      "Cooled & Packed: Sealed fresh in our branded boxes — no preservatives added.",
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
    id: 5,
    name: "Ethiopian Spices",
    category: "Spices",
    badge: "Single-Origin",
    subtitle: "Single-Origin. Whole-Ground. Genuine.",
    tagline: "Grown here. Ground here. Genuine here.",
    oneLiner: "Endemic Ethiopian species, sourced from family farms. No fillers, no imports. Unforgettable aroma from seed to jar.",
    description: "Endemic Ethiopian species, sourced from family farms. No fillers, no imports. Unforgettable aroma from seed to jar.",
    imageUrl: "/spices.webp",
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
        name: "Mitmita",
        profile: "Fierce, citrusy heat that arrives quickly and fades cleanly",
        processing: [
          "Chilies are sun-dried until they rattle.",
          "Coarsely crushed — never powdered to dust.",
          "Different spices are added whole to the blend.",
          "The entire blend is gently warmed to bloom the oils.",
        ],
        healthBenefit: "High capsaicin content; traditionally applied as a stimulant and to improve circulation. Vitamin C from fresh peppers is partially retained through careful low-heat drying.",
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
          "Endemic Ethiopian wild thyme hand-harvested from the Bale and Arsi highlands.",
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
    id: 6,
    name: "Teff",
    category: "Grains",
    badge: "Ancient Grain",
    subtitle: "The Ancient Grain",
    tagline: "Gluten-free before gluten-free was a label.",
    oneLiner: "3,000 years of nourishment. Highest iron and calcium of any grain. Unforgettable heritage in every spoonful.",
    description: "3,000 years of nourishment. Highest iron and calcium of any grain. Unforgettable heritage in every spoonful.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Teff-300x300.png",
    sourcingStory: "Teff has sustained Ethiopian civilisations for over 3,000 years. Our teff is gently harvested and multi-stage cleaned before stone-milling at low temperature to preserve the bran and germ intact.",
    howItsMade: [
      "Gently Harvested: Careful collection to preserve the tiny grain's integrity.",
      "Multi-Stage Cleaned: Chaff, stones, and foreign seeds are removed through careful cleaning.",
      "Stone-Milled: Low-temperature milling preserves the bran and germ. Whole-grain only — we don't sift out the nutritious parts.",
      "Packed to preserve freshness — no preservatives.",
    ],
    benefits: [
      "Naturally Gluten-Free – Safe for celiac and gluten-sensitive individuals. Entirely different protein profile than wheat.",
      "Exceptional Iron – Significantly higher than wheat, rice, or corn. Particularly important for women of reproductive age.",
      "Calcium-Rich – Among the highest calcium levels of any cereal grain.",
      "Low Glycemic Index – Complex starch releases glucose slowly. Sustained energy.",
      "Complete Amino Acids – Contains all eight essential amino acids.",
    ],
  },
  {
    id: 7,
    name: "Beso",
    category: "Flours",
    badge: "Baltena",
    subtitle: "Roasted Barley Flour",
    tagline: "Instant energy. Ancient recipe.",
    oneLiner: "Pre-digested starch for easy fuel. Mix with water or milk — no cooking. Unforgettable comfort, ready in seconds.",
    description: "Pre-digested starch for easy fuel. Mix with water or milk — no cooking. Unforgettable comfort, ready in seconds.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Beso-300x300.png",
    sourcingStory: "The same highland barley as our Kolo — cleaned, roasted, and milled into fine, fragrant flour. Ethiopia's original fast food. Unchanged for centuries.",
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
  },
  {
    id: 8,
    name: "Bula",
    category: "Flours",
    badge: "Baltena",
    subtitle: "Ensete Starch",
    tagline: "The food of recovery.",
    oneLiner: "Reserved for elders, mothers, and the healing. The most easily digestible food in Ethiopian tradition. Unforgettable gentleness.",
    description: "Reserved for elders, mothers, and the healing. The most easily digestible food in Ethiopian tradition. Unforgettable gentleness.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Bula-300x300.png",
    sourcingStory: "Harvested from enset plants in southern Ethiopia, processed by the same traditional fermentation and squeezing methods used for centuries. This is not a commodity. It is a cultural trust.",
    howItsMade: [
      "Decorticated: The pseudo stems are carefully stripped.",
      "Fermented & Pressed: Repeated extraction separates the pure starch.",
      "Sun-Dried: Spread in thin layers until the granules turn pure white.",
      "Milled to Powder: Fine, silky, ready to prepare.",
    ],
    benefits: [
      "Exceptionally Digestible – Gentle even for distressed stomachs.",
      "Neutral Flavour – Accepts sweet or savory additions. Adaptable.",
      "Traditional Prescription – Used postpartum, for elders, and recovery from illness.",
      "Naturally Gluten-Free – Not modified. Not processed. Just pure starch.",
      "FODMAP Friendly – Low in fermentable carbohydrates.",
    ],
  },
  {
    id: 9,
    name: "Shiro",
    category: "Flours",
    badge: "Baltena",
    subtitle: "Roasted Legume Flour with Berbere and Spices",
    tagline: "The 15-minute wot.",
    oneLiner: "Protein-packed, vegan, deeply spiced. No preservatives — just roasted chickpeas, our house berbere, herbs and spices. Unforgettable shortcut to authentic flavours.",
    description: "Protein-packed, vegan, deeply spiced. No preservatives — just roasted chickpeas, our house berbere, herbs and spices. Unforgettable shortcut to authentic flavours.",
    imageUrl: "https://superboostup.com/AdulisFarm/wp-content/uploads/2026/02/Shiro-300x300.png",
    sourcingStory: "Chickpeas, fava beans, or broad beans from the Ethiopian highlands, blended with our house berbere — itself a blend of 14+ spices, sun-dried and ground in small batches. No shortcuts. No fillers.",
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
  },
  {
    id: 100,
    name: "Ethiopian Baltna",
    category: "Spice Blends",
    subtitle: "Authentic. Ancestral. Absolute.",
    tagline: "Authentic. Ancestral. Absolute.",
    oneLiner: "Crafted here. Perfected here. Pure here.",
    description: "Hand-selected ingredients, processed with traditional techniques. No additives, no shortcuts. The true taste of an Ethiopian kitchen in every spoonful.",
    imageUrl: "/baltna-spices.webp",
    howItsMade: [],
    benefits: [],
  },
];
