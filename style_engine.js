/* ============================================================
   STYLE ENGINE & GAMIFIED RECOMMENDATIONS
   Synthesized from:
   - Dataset 1: Makeup, Skin, Lip and Beauty Archetypes
   - Dataset 2: 1,000-User Anthropometric Torso, Sizing & Style Database
   ============================================================ */

// ---- 1. DATASET 1: MAKEUP & BEAUTY TRENDS ----
const BEAUTY_DATASET = [
  { no_makeup:'no_makeup/0.jpg', with_makeup:'with_makeup/0.jpg', part:'lips', gender:'FEMALE', age:33, country:'MD', accent:'Velvet Rose Berry Lip', skin:'Dewy Luminescence', tip:'Hydrating berry tint with soft blurred borders balances strong jawlines.' },
  { no_makeup:'no_makeup/1.jpg', with_makeup:'with_makeup/1.jpg', part:'lips', gender:'FEMALE', age:36, country:'BY', accent:'Coral Peach Glaze', skin:'Satin Porcelain Glow', tip:'Warm peachy coral contrasts cool eye hues and brightens natural undertones.' },
  { no_makeup:'no_makeup/2.jpg', with_makeup:'with_makeup/2.jpg', part:'lips', gender:'FEMALE', age:34, country:'RU', accent:'Deep Ruby Satin', skin:'Soft Velvet Matte', tip:'Classic rich ruby creates striking high-fashion contrast with dark irises.' },
  { no_makeup:'no_makeup/3.jpg', with_makeup:'with_makeup/3.jpg', part:'lips', gender:'FEMALE', age:47, country:'RU', accent:'Plum Wine Tint', skin:'Hydrated Radiant Base', tip:'Muted plum adds refined depth and complements structured formal styling.' },
  { no_makeup:'no_makeup/4.jpg', with_makeup:'with_makeup/4.jpg', part:'lips', gender:'FEMALE', age:34, country:'RU', accent:'Warm Terracotta Nude', skin:'Golden Sun-Kissed', tip:'Earthy terracotta harmonizes hazel and amber eyes with effortless warmth.' },
  { no_makeup:'no_makeup/12.jpg', with_makeup:'with_makeup/12.jpg', part:'skin', gender:'FEMALE', age:33, country:'RU', accent:'Glass Skin Complexion', skin:'Hydra-Glow Base', tip:'Minimal skin finish with glass sheen lets bold wardrobe silhouettes take center stage.' },
  { no_makeup:'no_makeup/16.jpg', with_makeup:'with_makeup/16.jpg', part:'lips', gender:'FEMALE', age:44, country:'UA', accent:'Soft Cranberry Frost', skin:'Opal Radiance', tip:'Cool cranberry echoes the crisp brilliance of gray and icy blue irises.' },
  { no_makeup:'no_makeup/21.jpg', with_makeup:'with_makeup/21.jpg', part:'lips', gender:'FEMALE', age:39, country:'UA', accent:'Caramel Spiced Nude', skin:'Silk Natural Sheen', tip:'Understated warm nude anchors dynamic, multi-tonal sportswear palettes.' },
  { no_makeup:'no_makeup/24.jpg', with_makeup:'with_makeup/24.jpg', part:'lips', gender:'FEMALE', age:62, country:'KZ', accent:'Gilded Bronze Lip', skin:'Warm Amber Contour', tip:'Regal bronze warmth creates harmonious luxury pairing for formal silk draping.' }
];

// ---- 2. DATASET 2: 1,000-USER ANTHROPOMETRIC CLUSTERS ----
const BODY_DATASET_CLUSTERS = {
  // --- WOMEN'S SPECTRUM ---
  'Hourglass': {
    name: 'Curvilinear Golden-Ratio Frame',
    datasetCount: 318,
    dominantStyles: ['Classic Elegance (34%)', 'Haute Formal (28%)', 'Modern Feminine (22%)', 'Casual Chic (16%)'],
    dominantColors: ['Navy Blue (28%)', 'Emerald (24%)', 'Burgundy (22%)', 'Ivory (14%)', 'Gold (12%)'],
    recommendedSizes: ['S', 'M', 'L'],
    avgMeasurements: { bust: 92.4, chest: 92.4, waist: 68.2, hip: 96.7, shoulder: 42.1 },
    avgSynergyScore: 97.8,
    tailoringPhilosophy: 'Celebrate balanced shoulder and hip planes by accentuating the natural 68.2cm waistline with tailored darts, wrap silhouettes, and structured belts.'
  },
  'Pear / Triangle': {
    name: 'Curvilinear A-Frame',
    datasetCount: 374,
    dominantStyles: ['Modern Feminine (28%)', 'Traditional (27%)', 'Formal (23%)', 'Sporty (22%)'],
    dominantColors: ['White (25%)', 'Red (22%)', 'Black (21%)', 'Green (17%)', 'Blue (15%)'],
    recommendedSizes: ['M', 'L', 'XL', 'XXL'],
    avgMeasurements: { bust: 98.1, chest: 92.0, waist: 72.6, hip: 102.3, shoulder: 44.9 },
    avgSynergyScore: 95.6,
    tailoringPhilosophy: 'Command visual focus upward using sculpted lapels, boat necks, and statement sleeves while draping clean, dark lines over hips.'
  },
  'Rectangle / Balanced': {
    name: 'Harmonic Meso Frame',
    datasetCount: 196,
    dominantStyles: ['Chic Minimalist (31%)', 'Casual (26%)', 'Traditional (22%)', 'Formal (21%)'],
    dominantColors: ['Green (22%)', 'Black (21%)', 'Red (21%)', 'Blue (18%)', 'White (18%)'],
    recommendedSizes: ['S', 'M', 'L', 'XXL'],
    avgMeasurements: { bust: 86.7, chest: 102.7, waist: 76.2, hip: 98.5, shoulder: 47.7 },
    avgSynergyScore: 94.2,
    tailoringPhilosophy: 'Introduce waist cinching, peplum darts, and structural layers to sculpt curvature into an inherently balanced canvas.'
  },
  'Inverted Triangle': {
    name: 'Athletic V-Taper Frame',
    datasetCount: 430,
    dominantStyles: ['Executive Minimalist (30%)', 'Casual (27%)', 'Sporty (24%)', 'Formal (19%)'],
    dominantColors: ['Blue (24%)', 'Black (22%)', 'Green (20%)', 'White (19%)', 'Red (15%)'],
    recommendedSizes: ['M', 'L', 'XL'],
    avgMeasurements: { bust: 105.7, chest: 105.7, waist: 82.3, hip: 96.1, shoulder: 49.3 },
    avgSynergyScore: 96.4,
    tailoringPhilosophy: 'De-emphasize shoulder bulk with soft plunging necklines; expand lower volume with flared palazzos and A-line cuts to establish golden ratio symmetry.'
  },
  'Apple / Round': {
    name: 'Empire Silhouette Frame',
    datasetCount: 224,
    dominantStyles: ['Fluid Elegance (32%)', 'Modern Minimalist (27%)', 'Formal Draping (23%)', 'Casual Comfort (18%)'],
    dominantColors: ['Emerald (26%)', 'Navy Blue (25%)', 'Onyx Black (23%)', 'Plum (15%)', 'Champagne (11%)'],
    recommendedSizes: ['L', 'XL', 'XXL'],
    avgMeasurements: { bust: 104.2, chest: 104.2, waist: 93.8, hip: 100.5, shoulder: 44.2 },
    avgSynergyScore: 95.8,
    tailoringPhilosophy: 'Draw the vertical eye line with unbroken monochrome palettes, empire waist seams, and fluid longline dusters that accentuate slender legs and arms.'
  },
  'Petite / Compact': {
    name: 'Delicate Proportional Frame',
    datasetCount: 185,
    dominantStyles: ['Haute Tailored (35%)', 'Chic Minimalist (29%)', 'Contemporary French (21%)', 'Casual (15%)'],
    dominantColors: ['Cream Ivory (28%)', 'Houndstooth / Charcoal (25%)', 'Navy (22%)', 'Forest Green (15%)', 'Camel (10%)'],
    recommendedSizes: ['XS', 'S', 'M'],
    avgMeasurements: { bust: 82.5, chest: 82.5, waist: 63.8, hip: 86.4, shoulder: 38.6 },
    avgSynergyScore: 96.9,
    tailoringPhilosophy: 'Elongate the vertical axis using cropped jackets that hit the high waist, unbroken high-rise tailored trousers, and monochromatic color blocking.'
  },

  // --- MEN'S BIOMETRIC ARCHETYPES ---
  'Mesomorph': {
    name: 'Athletic Muscular Frame',
    datasetCount: 395,
    dominantStyles: ['Modern Tailored (33%)', 'Sporty Classic (28%)', 'Smart Casual (22%)', 'Formal (17%)'],
    dominantColors: ['Navy (26%)', 'Black (24%)', 'Grey (20%)', 'Olive (16%)', 'White (14%)'],
    recommendedSizes: ['M', 'L', 'XL'],
    avgMeasurements: { chest: 108.5, waist: 82.0, hip: 98.2, shoulder: 51.2 },
    avgSynergyScore: 97.4,
    tailoringPhilosophy: 'Highlight natural athletic V-taper with fitted structured blazers, tapered flat-front trousers, and unencumbered polo collars.'
  },
  'Ectomorph': {
    name: 'Lean Linear Frame',
    datasetCount: 280,
    dominantStyles: ['Layered Tailoring (31%)', 'Modern Classic (27%)', 'Minimalist (24%)', 'Smart Casual (18%)'],
    dominantColors: ['Charcoal (25%)', 'Navy (24%)', 'Beige (20%)', 'Olive (17%)', 'Black (14%)'],
    recommendedSizes: ['S', 'M'],
    avgMeasurements: { chest: 94.2, waist: 74.5, hip: 91.0, shoulder: 44.8 },
    avgSynergyScore: 95.8,
    tailoringPhilosophy: 'Build presence and torso depth using double-breasted jackets, dimensional wool knits, horizontal textures, and structured shoulder pads.'
  },
  'Endomorph': {
    name: 'Substantial Broad Frame',
    datasetCount: 325,
    dominantStyles: ['Streamlined Formal (30%)', 'Classic Executive (28%)', 'Relaxed Tailoring (24%)', 'Casual (18%)'],
    dominantColors: ['Charcoal (27%)', 'Navy (25%)', 'Olive (18%)', 'Beige (16%)', 'Black (14%)'],
    recommendedSizes: ['L', 'XL', 'XXL'],
    avgMeasurements: { chest: 116.0, waist: 98.5, hip: 110.2, shoulder: 50.5 },
    avgSynergyScore: 94.9,
    tailoringPhilosophy: 'Streamline torso volume with single-breasted vertical lines, open V-neck collars, clean unpleated fronts, and monochromatic column tones.'
  }
};

// ---- 3. IRIS COLOR & PALETTE HARMONY (FUSED WITH DATASETS 1 & 2) ----
const EYE_STYLE_HARMONY = {
  'Brown': {
    accentColor: '#2b4c8c',
    paletteName: 'Royal Jewel & Ivory',
    swatches: [
      { name: 'Sapphire', hex: '#2b4c8c' },
      { name: 'Forest Emerald', hex: '#2f6b4f' },
      { name: 'Obsidian Noir', hex: '#111827' },
      { name: 'Warm Ivory', hex: '#f6ecd6' }
    ],
    beautyPairing: {
      lipAccent: 'Deep Ruby Satin / Brick Red',
      skinAccent: 'Warm Velvet Glow (Dataset 1: RU-34)',
      aesthetic: 'High-contrast regal polish with clean architectural lines.'
    }
  },
  'Dark Brown': {
    accentColor: '#28407a',
    paletteName: 'Imperial Velvet & Gold',
    swatches: [
      { name: 'Deep Sapphire', hex: '#28407a' },
      { name: 'Royal Emerald', hex: '#1b4d32' },
      { name: 'Midnight Purple', hex: '#3d2452' },
      { name: 'Gilded Cream', hex: '#f5e8cf' }
    ],
    beautyPairing: {
      lipAccent: 'Gilded Bronze Lip (Dataset 1: KZ-62)',
      skinAccent: 'Luminous Satin Porcelain (Dataset 1: BY-36)',
      aesthetic: 'Rich saturated luxury with sculpted shoulder definition.'
    }
  },
  'Blue': {
    accentColor: '#c05621',
    paletteName: 'Solar Copper & Cobalt',
    swatches: [
      { name: 'Burnt Copper', hex: '#c05621' },
      { name: 'Rich Terracotta', hex: '#9c4221' },
      { name: 'Deep Navy', hex: '#1e3a8a' },
      { name: 'Pure White', hex: '#ffffff' }
    ],
    beautyPairing: {
      lipAccent: 'Coral Peach Glaze (Dataset 1: BY-36)',
      skinAccent: 'Sun-Kissed Golden Base (Dataset 1: RU-34)',
      aesthetic: 'Complementary temperature clash that ignites vibrant blue eye luminescence.'
    }
  },
  'Green': {
    accentColor: '#702459',
    paletteName: 'Blackcurrant & Rose Gold',
    swatches: [
      { name: 'Velvet Plum', hex: '#702459' },
      { name: 'Burgundy Wine', hex: '#5b1b36' },
      { name: 'Rose Quartz', hex: '#d4a5b8' },
      { name: 'Moss Emerald', hex: '#2f6b4f' }
    ],
    beautyPairing: {
      lipAccent: 'Velvet Rose Berry (Dataset 1: MD-33)',
      skinAccent: 'Rose-Gold Dew (Dataset 1: RU-40)',
      aesthetic: 'Chromatic complementary harmony: berry/wine cuts illuminate green iris rings.'
    }
  },
  'Hazel': {
    accentColor: '#8a7233',
    paletteName: 'Spiced Honey & Forest Olive',
    swatches: [
      { name: 'Warm Amber', hex: '#d97706' },
      { name: 'Olive Drab', hex: '#4d5b28' },
      { name: 'Chocolate Bark', hex: '#452b1a' },
      { name: 'Warm Sand', hex: '#eed9c4' }
    ],
    beautyPairing: {
      lipAccent: 'Warm Terracotta Nude (Dataset 1: RU-34)',
      skinAccent: 'Golden Silk Radiance (Dataset 1: UA-39)',
      aesthetic: 'Multidimensional earth tones emphasizing both green and amber iris flecks.'
    }
  },
  'Amber': {
    accentColor: '#c98a2c',
    paletteName: 'Sunset Bronze & Rust',
    swatches: [
      { name: 'Cinnamon Rust', hex: '#a04e2c' },
      { name: 'Moss Green', hex: '#5f6b3a' },
      { name: 'Deep Espresso', hex: '#382214' },
      { name: 'Champagne Cream', hex: '#fbf0dc' }
    ],
    beautyPairing: {
      lipAccent: 'Caramel Spiced Nude (Dataset 1: UA-39)',
      skinAccent: 'Amber Velvet Contour (Dataset 1: KZ-62)',
      aesthetic: 'Warm analog hues creating an ultra-modern golden-hour radiance.'
    }
  },
  'Gray': {
    accentColor: '#4a6fa5',
    paletteName: 'Nordic Slate & Frost Rose',
    swatches: [
      { name: 'Slate Blue', hex: '#4a6fa5' },
      { name: 'Smoky Charcoal', hex: '#374151' },
      { name: 'Silver Mist', hex: '#9ca3af' },
      { name: 'Dusty Rose', hex: '#c08497' }
    ],
    beautyPairing: {
      lipAccent: 'Soft Cranberry Frost (Dataset 1: UA-44)',
      skinAccent: 'Glass Skin Complexion (Dataset 1: RU-33)',
      aesthetic: 'Monochromatic coolness radiating minimalist haute couture sophistication.'
    }
  }
};

// ---- 4. CAPSULE WARDROBE STATE ----
const gameState = {
  activeGender: 'women',
  activeOccasion: 'work'
};

// ---- 5. 24-LOOK COMPREHENSIVE OCCASION MATRIX (MEN & WOMEN) ----
const OCCASION_WARDROBE_MATRIX = {
  women: {
    'Hourglass': {
      work: {
        id: 'w_hg_work',
        title: 'Sculpted Waist Tuxedo Blazer & Wide-Leg Crepe Pants',
        archetype: 'Classic Elegance',
        badge: 'GOLDEN RATIO',
        icon: '💼',
        top: 'Surplice Drape Silk Blouse in Matte Navy with Deep V-Neck',
        bottom: 'High-Waist Fluid Pleated Trousers with Integrated Belt',
        outerwear: 'Sculpted Hourglass Tailored Blazer with Curved Peak Lapels',
        footwear: 'Pointed Slingback Pumps in Italian Nappa Leather',
        accessories: 'Architectural Gold Drop Earrings & Slim Leather Waist Belt',
        torsoLogic: 'Fitted tailoring emphasizes the naturally balanced shoulder-to-hip ratio while cinching the 68.2cm waist, creating classic high-fashion poise.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Deep Ruby Satin (RU-34) with Velvet Matte Glow',
        fitScore: 97.8,
        recommendedSize: 'S / M',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.45), rgba(17,24,39,0.75))'
      },
      function: {
        id: 'w_hg_function',
        title: 'Floor-Length Silk Jacquard Wrap Gown & Chiffon Capelet',
        archetype: 'Red Carpet Sovereign',
        badge: 'ROYAL DRAPE',
        icon: '🏛️',
        top: 'Cross-Front Sweetheart Bodice with Boned Waist Structure',
        bottom: 'Bias-Cut Liquid Silk Skirt with Cascading Side Ruffle',
        outerwear: 'Translucent Diaphanous Silk Organza Wrap Shawl',
        footwear: 'Crystal-Embellished Ankle-Strap Evening Sandals',
        accessories: 'Chandelier Emerald Earrings & Gilded Minaudière Clutch',
        torsoLogic: 'Cross-front bias cutting traces the natural curves of the bust and hips without clinging, establishing regal stateliness.',
        eyeHarmonies: ['#702459', '#1b4d32', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Velvet Rose Berry (MD-33) with Rose-Gold Radiance',
        fitScore: 99.4,
        recommendedSize: 'M',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.5), rgba(27,77,50,0.6))'
      },
      party: {
        id: 'w_hg_party',
        title: 'Metallic Draped Midi Dress with Lateral Ruched Bodice',
        archetype: 'Haute Glamour',
        badge: 'VIP EDIT',
        icon: '🪩',
        top: 'Asymmetric Cowl Neck Metallic Lurex Bodice',
        bottom: 'Fitted Ruched Midi Skirt with Tapered Asymmetrical Hem',
        outerwear: 'Cropped Structured Tuxedo Shrug with Satin Trim',
        footwear: 'Sculptural Lucite Stiletto Heels',
        accessories: 'Cascading Rhinestone Linear Choker & Micro Metallic Bag',
        torsoLogic: 'Ruched side contouring celebrates curvy symmetry while the cowl neck frames the collarbones with glittering drama.',
        eyeHarmonies: ['#ff2d78', '#374151', '#f5e8cf'],
        beautyAccent: 'Dataset 1: Gilded Bronze Lip (KZ-62) with Radiant Amber Sheen',
        fitScore: 98.2,
        recommendedSize: 'S',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(255,45,120,0.4), rgba(55,65,81,0.7))'
      },
      home: {
        id: 'w_hg_home',
        title: 'Cinched Modal Lounge Kimono & Tapered French Terry Pants',
        archetype: 'Serene Sanctuary',
        badge: 'CLOUD SILK',
        icon: '🛋️',
        top: 'Seamless Ribbed Micro-Modal Scoop Bodysuit',
        bottom: 'High-Rise Relaxed Taper Joggers with Cuffed Ankles',
        outerwear: 'Washed Mulberry Silk Kimono Robe with Wide Sash Tie',
        footwear: 'Plush Shearling Indoor Mules',
        accessories: 'Cashmere Sleep Eye Mask & Ceramic Herbal Tea Mug',
        torsoLogic: 'Tie-belt sash gently gathers the midriff during relaxation, maintaining balanced posture and total tactile comfort.',
        eyeHarmonies: ['#1f6f78', '#452b1a', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Glass Skin Glow (RU-33) Hydra-Base',
        fitScore: 96.8,
        recommendedSize: 'S / M',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(31,111,120,0.4), rgba(69,43,26,0.6))'
      }
    },
    'Inverted Triangle': {
      work: {
        id: 'w_it_work',
        title: 'Fluid Shawl Wrap Blazer & Pleated Palazzo',
        archetype: 'Executive Minimalist',
        badge: 'HAUTE EXECUTIVE',
        icon: '💼',
        top: 'Fluid Deep V-Neck Silk Blouse in Matte Navy',
        bottom: 'High-Waist Pleated Crepe Palazzo Pants in Soft Ivory',
        outerwear: 'Unstructured Longline Shawl Collar Blazer (Zero Shoulder Padding)',
        footwear: 'Pointed Leather Slingback Block Derbies',
        accessories: 'Architectural Gold Drop Earrings & Slim Minimalist Belt',
        torsoLogic: 'Plunging V-neck shawl neckline and unpadded shoulders visually slim the broad 105.7cm chest. Voluminous high-waisted palazzo trousers expand the lower hemline, creating perfect golden-ratio hourglass symmetry.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Deep Ruby Satin (RU-34) on Velvet Matte Skin',
        fitScore: 96.4,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.4), rgba(17,24,39,0.7))'
      },
      function: {
        id: 'w_it_function',
        title: 'Regal Cape Gown with A-Line Silk Jacquard Skirt',
        archetype: 'Ceremonial Majesty',
        badge: 'ROYAL HERITAGE',
        icon: '🏛️',
        top: 'Sweetheart Neckline Fitted Corset Bodice with Vertical Seams',
        bottom: 'Flared Floor-Length Silk Jacquard A-Line Skirt with Golden Zari Weave',
        outerwear: 'Flowing Sheer Organza Floor-Length Cape Draped from Center-Back',
        footwear: 'Metallic Block Heel D’Orsay Pumps',
        accessories: 'Filigree Kundan Choker & Gilded Minaudière Clutch',
        torsoLogic: 'Center-back cape drapery sweeps visual weight downwards. The dramatic volume of the flared A-line jacquard skirt balances broad shoulders with stately elegance.',
        eyeHarmonies: ['#702459', '#3d2452', '#f5e8cf'],
        beautyAccent: 'Dataset 1: Gilded Bronze Lip (KZ-62) with Amber Contour Glow',
        fitScore: 98.1,
        recommendedSize: 'L',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.45), rgba(61,36,82,0.75))'
      },
      party: {
        id: 'w_it_party',
        title: 'Asymmetrical Halter & Liquid Metallic Flared Trousers',
        archetype: 'Cyber Glamour',
        badge: 'RUNWAY NIGHT',
        icon: '🪩',
        top: 'Draped Asymmetrical Halter Top in Midnight Onyx Silk',
        bottom: 'High-Rise Liquid Satin Flared Trousers in Radiant Solar Copper',
        outerwear: 'Cropped Raw-Hem Tuxedo Shrug with Narrow Cut',
        footwear: 'Architectural Lucite Stiletto Heels with Ankle Wrap',
        accessories: 'Chunky Geometric Silver Cuff & Micro Metallic Bag',
        torsoLogic: 'Diagonal halter neckline breaks across the wide shoulder plane. High-rise flared trousers catch the light below, pulling focus downward to create long, lithe leg proportions.',
        eyeHarmonies: ['#c05621', '#ff2d78', '#111827'],
        beautyAccent: 'Dataset 1: Coral Peach Glaze (BY-36) with Porcelain Radiance',
        fitScore: 95.8,
        recommendedSize: 'M / L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(192,86,33,0.45), rgba(255,45,120,0.35))'
      },
      home: {
        id: 'w_it_home',
        title: 'Ribbed Cashmere Kimono Wrap & Wide Lounge Pants',
        archetype: 'Luxury Loungewear',
        badge: 'CLOUD LUXE',
        icon: '🛋️',
        top: 'Deep V-Neck Fine Gauge Cashmere Slouch Tee',
        bottom: 'Wide-Leg Drawstring Cashmere Knit Lounge Trousers',
        outerwear: 'Belted Cocoon Kimono Robe Cardigan in Sand Beige',
        footwear: 'Plush Shearling Suede Slide Mules',
        accessories: 'Pure Mulberry Silk Hair Wrap & Minimalist Gold Huggies',
        torsoLogic: 'Slouchy raglan and kimono sleeves eliminate shoulder seam tension. Fluid wide-leg pants provide unparalleled cozy freedom while maintaining tailored aesthetics.',
        eyeHarmonies: ['#d97706', '#eed9c4', '#452b1a'],
        beautyAccent: 'Dataset 1: Caramel Spiced Nude (UA-39) on Dewy Skin',
        fitScore: 97.2,
        recommendedSize: 'L',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(217,119,6,0.35), rgba(69,43,26,0.65))'
      }
    },
    'Rectangle / Balanced': {
      work: {
        id: 'w_rec_work',
        title: 'Belted Safari Trench & High-Rise Tailored Pants',
        archetype: 'Parisian Tailoring',
        badge: 'TIMELESS CHIC',
        icon: '💼',
        top: 'Structured Silk Poplin Shirt with Spread Collar',
        bottom: 'High-Rise Pressed-Crease Cigarette Pants in Forest Emerald',
        outerwear: 'Structured Belted Safari Trench Jacket with Tortoiseshell Buckle',
        footwear: 'Sculptural Leather Square-Toe Loafers with Gold Bit',
        accessories: 'Structured Top-Handle Leather Satchel & Chrono Watch',
        torsoLogic: 'Cinching the natural waist with an architectural belt sculpts crisp feminine curvature into an inherently proportional, balanced 89.1cm waist frame.',
        eyeHarmonies: ['#2f6b4f', '#111827', '#ffffff'],
        beautyAccent: 'Dataset 1: Velvet Rose Berry (MD-33) with Rose-Gold Dew',
        fitScore: 97.5,
        recommendedSize: 'M / S',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(47,107,79,0.45), rgba(17,24,39,0.7))'
      },
      function: {
        id: 'w_rec_function',
        title: 'Peplum Silk Corset & Slit Column Maxi Skirt',
        archetype: 'Haute Gala Couture',
        badge: 'RED CARPET',
        icon: '🏛️',
        top: 'Architectural Peplum Corset with Hand-Embroidered Boning',
        bottom: 'High-Waisted Silk Satin Column Maxi Skirt with Lateral Slit',
        outerwear: 'Matching Diaphanous Organza Dupatta Stole',
        footwear: 'Crystal-Embellished Ankle-Strap Evening Pumps',
        accessories: 'Chandelier Emerald Earrings & Velvet Minaudière',
        torsoLogic: 'The flared architectural peplum flares outward from the natural waist, establishing a captivating golden-ratio hourglass silhouette that flatters balanced body ratios.',
        eyeHarmonies: ['#702459', '#1b4d32', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Deep Ruby Satin (RU-34) on Luminous Base',
        fitScore: 98.6,
        recommendedSize: 'S / M',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.45), rgba(27,77,50,0.65))'
      },
      party: {
        id: 'w_rec_party',
        title: 'Cut-Out Blazer Dress with Chainlink Waist Cinch',
        archetype: 'Avant-Garde Siren',
        badge: 'VIP EDIT',
        icon: '🪩',
        top: 'Deep Peak-Lapel Tuxedo Bodice with Symmetrical Waist Cutouts',
        bottom: 'Integrated Tailored Wrap Mini Skirt with Slanted Hemline',
        outerwear: 'Padded Structured Shoulder Tuxedo Frame with Satin Lapels',
        footwear: 'Over-the-Knee Stretch Suede Boots with Stiletto Heel',
        accessories: 'Cascading Rhinestone Linear Earrings & Metallic Chain Belt',
        torsoLogic: 'Lateral geometric cutouts visually narrow the midsection, creating instant dramatic waist curve contrast on a balanced frame.',
        eyeHarmonies: ['#4a6fa5', '#374151', '#ff2d78'],
        beautyAccent: 'Dataset 1: Soft Cranberry Frost (UA-44) on Glass Skin',
        fitScore: 96.9,
        recommendedSize: 'XS / S',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(74,111,165,0.4), rgba(255,45,120,0.4))'
      },
      home: {
        id: 'w_rec_home',
        title: 'Cinched Silk Robe & Tapered French Terry Joggers',
        archetype: 'Modern Sanctuary',
        badge: 'SILK ELEVATION',
        icon: '🛋️',
        top: 'Scoop-Neck Seamless Micro-Modal Ribbed Bodysuit',
        bottom: 'Slim-Tapered French Terry Cotton Joggers with Ribbed Cuffs',
        outerwear: 'Washed Mulberry Silk Kimono Robe with Wide Waist Sash',
        footwear: 'Quilted Velvet Indoor Slide Slippers',
        accessories: 'Silk Sleep Mask & Aromatherapy Ceramic Mug',
        torsoLogic: 'Tie-belted robe cinches the natural waist effortlessly during home relaxation, while tapered joggers highlight proportional leg symmetry.',
        eyeHarmonies: ['#1f6f78', '#452b1a', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Glass Skin Glow (RU-33) Hydra-Base',
        fitScore: 95.7,
        recommendedSize: 'S',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(31,111,120,0.4), rgba(69,43,26,0.6))'
      }
    },
    'Pear / Triangle': {
      work: {
        id: 'w_pear_work',
        title: 'Strong-Shouldered Boatneck Blouse & Fluid Taper Pant',
        archetype: 'Executive Presence',
        badge: 'POWER PROPORTION',
        icon: '💼',
        top: 'Horizontal Bateau Boatneck Blouse in Terracotta Heavy Silk',
        bottom: 'Dark Obsidian High-Waisted Straight Crepe Trousers with Clean Front',
        outerwear: 'Tailored Sharp-Shoulder Blazer with Flared Peak Lapels',
        footwear: 'Pointed Toe Suede Block-Heel Pumps',
        accessories: 'Statement Torc Collar Necklace & Structured Leather Tote',
        torsoLogic: 'Horizontal boatneck and structured shoulder pads broaden upper clavicle lines, flawlessly counterbalancing 123.6cm hips with executive authority.',
        eyeHarmonies: ['#c05621', '#111827', '#ffffff'],
        beautyAccent: 'Dataset 1: Coral Peach Tint (BY-36) with Satin Glow',
        fitScore: 98.4,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(192,86,33,0.45), rgba(17,24,39,0.75))'
      },
      function: {
        id: 'w_pear_function',
        title: 'Embellished Shoulder Cape Gown & Flared Silk Skirt',
        archetype: 'Regal Aristocracy',
        badge: 'PALACE COUTURE',
        icon: '🏛️',
        top: 'Zari-Embroidered Padded Shoulder Bodice with Statement Epaulets',
        bottom: 'Bias-Cut Georgette Floor-Length Skirt in Royal Plum',
        outerwear: 'Integrated Featherlight Shoulder Capelet with Gilded Borders',
        footwear: 'Metallic Strappy Stiletto Sandals with Arch Support',
        accessories: 'Polki Diamond Chandelier Earrings & Velvet Potli Clutch',
        torsoLogic: 'Intricate shoulder epaulets and capelet detailing draw all visual focus directly to the eyes and collarbone, skimming fluidly over the lower body.',
        eyeHarmonies: ['#702459', '#d97706', '#f5e8cf'],
        beautyAccent: 'Dataset 1: Gilded Bronze Lip (KZ-62) with Amber Velvet Sheen',
        fitScore: 99.2,
        recommendedSize: 'XL',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.5), rgba(217,119,6,0.4))'
      },
      party: {
        id: 'w_pear_party',
        title: 'Dramatic Puff-Sleeve Velvet Top & Sleek Slim Pants',
        archetype: 'Nocturne Glamour',
        badge: 'STATEMENT NIGHT',
        icon: '🪩',
        top: 'Gathered Organza Puff-Sleeve Bodice in Crushed Velvet',
        bottom: 'Matte Stretch Leather Straight-Leg Pants in Deep Obsidian',
        outerwear: 'Cropped Structured Velvet Bolero Jacket',
        footwear: 'Pointed Toe Patent Leather Ankle Booties',
        accessories: 'Sculpted Silver Choker & Crystal Box Minaudière',
        torsoLogic: 'Sculptural puff sleeves build dramatic volume across the shoulder horizon, instantly creating a head-turning hourglass balance with the hips.',
        eyeHarmonies: ['#5b1b36', '#ff2d78', '#111827'],
        beautyAccent: 'Dataset 1: Velvet Rose Berry (MD-33) with Glowing Highlighting',
        fitScore: 97.8,
        recommendedSize: 'L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(91,27,54,0.5), rgba(255,45,120,0.35))'
      },
      home: {
        id: 'w_pear_home',
        title: 'Batwing Cocoon Sweater & Straight French Terry Pant',
        archetype: 'Serene Sanctuary',
        badge: 'COCOON COMFORT',
        icon: '🛋️',
        top: 'Oversized Batwing Fine-Knit Cotton Sweater with Wide Ribbed Neck',
        bottom: 'Charcoal High-Rise Straight-Leg Lounge Pants in French Terry',
        outerwear: 'Longline Waterfall Draped Cardigan with Front Pockets',
        footwear: 'Fleece-Lined Moccasin Slippers with Rubber Soles',
        accessories: 'Pure Cashmere Bed Socks & Knitted Silk Headband',
        torsoLogic: 'Batwing sleeves provide soft volume along the upper torso, while the dark straight-leg lounge bottoms create clean, elongating vertical lines.',
        eyeHarmonies: ['#4d5b28', '#eed9c4', '#452b1a'],
        beautyAccent: 'Dataset 1: Caramel Spiced Nude (UA-39) on Silk Sheen Base',
        fitScore: 96.5,
        recommendedSize: 'L',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(77,91,40,0.4), rgba(69,43,26,0.6))'
      }
    },
    'Apple / Round': {
      work: {
        id: 'w_ap_work',
        title: 'Architectural Longline Duster & Fluid Pleated Midi',
        archetype: 'Fluid Elegance',
        badge: 'EMPIRE PRESENCE',
        icon: '💼',
        top: 'Deep V-Neck Fluid Silk Wrap Tunic in Emerald Green',
        bottom: 'High-Waist Pleated Crepe A-Line Midi Skirt with Navy Contrast Paneling',
        outerwear: 'Unstructured Longline Tailored Duster Coat with Narrow Lapels',
        footwear: 'Pointed Leather Block-Heel Slingbacks',
        accessories: 'Long Pendant Gold Lariat Necklace & Structured Top-Handle Bag',
        torsoLogic: 'Deep V-neckline elongates the torso vertically while the unbroken lines of the longline duster skim past the midsection, showcasing slender calves and ankles.',
        eyeHarmonies: ['#2f6b4f', '#111827', '#f6ecd6'],
        beautyAccent: 'Dataset 1: Warm Terracotta Nude (RU-34) with Satin Glow',
        fitScore: 95.8,
        recommendedSize: 'L / XL',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(47,107,79,0.45), rgba(17,24,39,0.75))'
      },
      function: {
        id: 'w_ap_function',
        title: 'Empire Chiffon Pleated Gown & Organza Dupatta',
        archetype: 'Regal Majesty',
        badge: 'ROYAL EMPIRE',
        icon: '🏛️',
        top: 'Empire-Cut Plunging V-Neck Bodice with Intricate Zari Ribbing',
        bottom: 'Flowing Georgette Maxi Skirt with Flared Lower Flounce',
        outerwear: 'Lightweight Matching Embroidered Organza Stole',
        footwear: 'Comfort-Arch Metallic D’Orsay Pumps',
        accessories: 'Elongated Polki Diamond Chandelier Earrings & Velvet Minaudière',
        torsoLogic: 'High-waisted empire seam sits comfortably just under the bustline, allowing fluid fabric to drape gracefully over the midriff with timeless regal majesty.',
        eyeHarmonies: ['#702459', '#d97706', '#f5e8cf'],
        beautyAccent: 'Dataset 1: Gilded Bronze Lip (KZ-62) with Luminous Base',
        fitScore: 97.6,
        recommendedSize: 'XL',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.5), rgba(217,119,6,0.4))'
      },
      party: {
        id: 'w_ap_party',
        title: 'Asymmetric Draped Satin Tunic & Matte Slim Slacks',
        archetype: 'Nocturne Chic',
        badge: 'AFTER DARK',
        icon: '🪩',
        top: 'Fluid Asymmetric Slanted-Hem Satin Blouse in Deep Sapphire',
        bottom: 'Matte Obsidian Stretch Cigarette Trousers (Ankle Length)',
        outerwear: 'Minimalist Open-Front Satin-Faced Blazer Shrug',
        footwear: 'Pointed Toe Stiletto Pumps with Embellished Vamp',
        accessories: 'Bold Geometric Statement Cuff & Mirror Clutch',
        torsoLogic: 'Diagonal hemline breaks horizontal midsection lines, creating dynamic visual movement that highlights slender legs in streamlined dark trousers.',
        eyeHarmonies: ['#28407a', '#ff2d78', '#111827'],
        beautyAccent: 'Dataset 1: Soft Cranberry Frost (UA-44) on Glass Skin',
        fitScore: 96.2,
        recommendedSize: 'L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(40,64,122,0.45), rgba(255,45,120,0.35))'
      },
      home: {
        id: 'w_ap_home',
        title: 'Bamboo Slouch Tunic & Tapered French Terry Lounge Pant',
        archetype: 'Luxe Serenity',
        badge: 'FEATHERWEIGHT',
        icon: '🛋️',
        top: 'Eco-Bamboo Relaxed V-Neck Tunic with Side Slits',
        bottom: 'French Terry Slim-Straight Lounge Bottoms in Dark Heather',
        outerwear: 'Waterfall Front Fine-Gauge Modal Cardigan',
        footwear: 'Memory Foam Quilted House Slides',
        accessories: 'Silk Hair Scrunchie & Herbal Bath Salt Infuser',
        torsoLogic: 'Side slits and generous tunic cutting provide absolute ease across the waist and torso without feeling oversized or boxy.',
        eyeHarmonies: ['#4d5b28', '#eed9c4', '#452b1a'],
        beautyAccent: 'Dataset 1: Caramel Spiced Nude (UA-39) on Dewy Base',
        fitScore: 96.5,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(77,91,40,0.4), rgba(69,43,26,0.6))'
      }
    },
    'Petite / Compact': {
      work: {
        id: 'w_pet_work',
        title: 'Cropped Houndstooth Blazer & High-Waist Ivory Trousers',
        archetype: 'Contemporary Haute',
        badge: 'VERTICAL ARCHITECTURE',
        icon: '💼',
        top: 'Fitted Micro-Rib Silk Camisole in Deep Onyx',
        bottom: 'High-Rise Straight-Leg Pressed Trousers in Warm Ivory',
        outerwear: 'Cropped Structured Houndstooth Wool Blazer (Sharp Shoulders)',
        footwear: 'Pointed-Toe Silk Stiletto Pumps in Black',
        accessories: 'Structured Leather Micro-Kelly Handbag & Gold Huggie Earrings',
        torsoLogic: 'A cropped blazer hem terminating exactly at the natural high waist creates the optical illusion of dramatically longer legs, perfectly scaling proportions for a compact frame.',
        eyeHarmonies: ['#111827', '#f6ecd6', '#2f6b4f'],
        beautyAccent: 'Dataset 1: Coral Peach Glaze (BY-36) with Satin Glow',
        fitScore: 96.9,
        recommendedSize: 'XS / S',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(17,24,39,0.7), rgba(47,107,79,0.45))'
      },
      function: {
        id: 'w_pet_function',
        title: 'Column Silk Gown with High Side Slit & Vertical Seams',
        archetype: 'Sculptural Luminary',
        badge: 'COUTURE COLUMN',
        icon: '🏛️',
        top: 'Square-Neck Sleek Bodice with Micro-Boning Structure',
        bottom: 'Floor-Sweeping Silk Column Skirt with Thigh-High Walking Slit',
        outerwear: 'Narrow Floor-Length Chiffon Capelet Attached at Back Shoulders',
        footwear: 'Nude Barely-There Strappy Heeled Sandals',
        accessories: 'Linear Diamond Drop Earrings & Mini Satin Box Bag',
        torsoLogic: 'Continuous monochrome column line with minimal break creates a towering, uninterrupted vertical silhouette.',
        eyeHarmonies: ['#702459', '#3d2452', '#f5e8cf'],
        beautyAccent: 'Dataset 1: Deep Ruby Satin (RU-34) on Porcelain Skin',
        fitScore: 98.7,
        recommendedSize: 'XS',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.45), rgba(61,36,82,0.7))'
      },
      party: {
        id: 'w_pet_party',
        title: 'Tailored Tuxedo Romper with Metallic Waist Cinch',
        archetype: 'Modern Parisian',
        badge: 'PETITE SHARP',
        icon: '🪩',
        top: 'Sharp Peak-Lapel Sleeveless Tuxedo Bodice',
        bottom: 'Integrated Tailored Pleated Shorts with 3-Inch Inseam',
        outerwear: 'Fitted Velvet Tuxedo Shrug Jacket',
        footwear: 'Pointed Ankle-Strap Pumps with Arch Elongation',
        accessories: 'Gilded Chain Link Belt & Lucite Evening Box',
        torsoLogic: 'A tailored mini romper shows off the legs, while the sharp peak lapels draw gaze straight toward the face.',
        eyeHarmonies: ['#ff2d78', '#28407a', '#ffffff'],
        beautyAccent: 'Dataset 1: Soft Cranberry Frost (UA-44) on Glass Sheen',
        fitScore: 97.3,
        recommendedSize: 'XS',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(255,45,120,0.4), rgba(40,64,122,0.5))'
      },
      home: {
        id: 'w_pet_home',
        title: 'Cropped Cashmere Hoodie & High-Rise Knit Ribbed Pant',
        archetype: 'Petite Sanctuary',
        badge: 'COMPACT LUXE',
        icon: '🛋️',
        top: 'Cropped 2-Ply Mongolian Cashmere Drawstring Pullover',
        bottom: 'High-Waist Tapered Ribbed Cashmere Knit Lounge Trousers',
        outerwear: 'Short Ribbed Knit Cardigan with Horn Buttons',
        footwear: 'Suede Shearling Ankle Booties',
        accessories: 'Cashmere Knit Beanie & Double-Wall Ceramic Tumbler',
        torsoLogic: 'Proportionally scaled cropped knitwear prevents drowning in excess fabric while maintaining ultra-luxe warmth.',
        eyeHarmonies: ['#d97706', '#eed9c4', '#452b1a'],
        beautyAccent: 'Dataset 1: Caramel Spiced Nude (UA-39) on Natural Dew',
        fitScore: 96.0,
        recommendedSize: 'XS / S',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(217,119,6,0.35), rgba(69,43,26,0.65))'
      }
    }
  },
  men: {
    'Mesomorph': {
      work: {
        id: 'm_meso_work',
        title: 'Tailored Structured Navy Blazer & Slim Flat-Front Chinos',
        archetype: 'Athletic Professional',
        badge: 'POWER PROPORTIONS',
        icon: '💼',
        top: 'Tailored Polo Shirt with Structured Collar in Charcoal',
        bottom: 'Slim-Fit Flat Front Pressed Chinos in Sand Beige',
        outerwear: 'Single-Breasted Italian Wool Blazer (Zero Chest Bulk)',
        footwear: 'Pebble-Grain Leather Derbies & Sport Loafers',
        accessories: 'Minimalist Chronograph Watch & Italian Leather Belt',
        torsoLogic: 'Tapered tailoring conforms naturally to broad 51.2cm shoulders without pulling, emphasizing athletic symmetry down to the 82cm waist.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#d9cbb3'],
        beautyAccent: 'Grooming: Natural Cedarwood Beard Oil & Matte Skin Finish',
        fitScore: 97.4,
        recommendedSize: 'M / L',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.45), rgba(17,24,39,0.75))'
      },
      function: {
        id: 'm_meso_function',
        title: 'Royal Silk Bandhgala & Tailored Tapered Churidar',
        archetype: 'Sovereign Heritage',
        badge: 'REGAL ATHLETIC',
        icon: '🏛️',
        top: 'Tailored Raw Silk Bandhgala with Sculpted Chest Darts',
        bottom: 'Slim-Tapered Cotton-Silk Churidar in Cream Ivory',
        outerwear: 'Printed Silk Pocket Square with Gilded Cufflinks',
        footwear: 'Embroidered Velvet Mojaris with Cushioned Arch',
        accessories: 'Antique Brass & Pearl Brooch Lapel Pin',
        torsoLogic: 'Structured chest darts hug broad pecs while the stiffened mandarin collar accents sculpted neck and jawline definition.',
        eyeHarmonies: ['#1b4d32', '#d97706', '#f5e8cf'],
        beautyAccent: 'Grooming: Precision Beard Fade & Sandalwood Grooming Balm',
        fitScore: 98.9,
        recommendedSize: 'L',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(27,77,50,0.5), rgba(217,119,6,0.35))'
      },
      party: {
        id: 'm_meso_party',
        title: 'Sleek Fitted Camp Polo & Pleated Tapered Slacks',
        archetype: 'Modern Vanguard',
        badge: 'NIGHT REFINED',
        icon: '🪩',
        top: 'Form-Fitting Merino Wool Knit Polo in Midnight Black',
        bottom: 'Pleated High-Waisted Tapered Trousers in Olive Drab',
        outerwear: 'Suede Minimalist Bomber Jacket with Ribbed Trim',
        footwear: 'Clean White Leather Court Sneakers or Monkstraps',
        accessories: 'Brushed Titanium Watch & Onyx Signet Ring',
        torsoLogic: 'Form-skimming merino knit highlights natural athletic shoulder width and bicep definition without looking tight.',
        eyeHarmonies: ['#2f6b4f', '#111827', '#ffffff'],
        beautyAccent: 'Grooming: Textured Matte Styling Paste for Natural Hair Wave',
        fitScore: 96.8,
        recommendedSize: 'M / L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(47,107,79,0.45), rgba(17,24,39,0.8))'
      },
      home: {
        id: 'm_meso_home',
        title: 'Organic Pima Raglan Tee & Athletic Taper Joggers',
        archetype: 'Performance Haven',
        badge: 'ACTIVE COMFORT',
        icon: '🛋️',
        top: 'Heavyweight Pima Cotton Raglan Crew Tee',
        bottom: 'Tapered French Terry Cuffed Joggers with Zipper Pockets',
        outerwear: 'Double-Knit Zip Hoodie in Heather Charcoal',
        footwear: 'Ergonomic Suede Recovery Slide Clogs',
        accessories: 'Titanium Smart Fitness Ring & Thermal Water Bottle',
        torsoLogic: 'Raglan seams eliminate shoulder seam friction, adapting seamlessly to muscular shoulder movement during leisure.',
        eyeHarmonies: ['#4a6fa5', '#374151', '#9ca3af'],
        beautyAccent: 'Grooming: Energizing Hydra-Gel Facial Moisturizer',
        fitScore: 96.2,
        recommendedSize: 'L',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(74,111,165,0.4), rgba(55,65,81,0.65))'
      }
    },
    'Ectomorph': {
      work: {
        id: 'm_ecto_work',
        title: 'Double-Breasted Flannel Suit & Fine Cashmere Turtleneck',
        archetype: 'Intellectual Sartorialist',
        badge: 'DIMENSIONAL PRESENCE',
        icon: '💼',
        top: 'Fine-Gauge Merino Wool Turtleneck in Deep Navy',
        bottom: 'Straight-Leg Pleated Flannel Trousers in Charcoal Melange',
        outerwear: 'Double-Breasted Structured Wool Blazer with Padded Shoulders',
        footwear: 'Polished Black Leather Oxford Shoes with Toe Cap',
        accessories: 'Structured Leather Document Briefcase & Classic Dress Watch',
        torsoLogic: 'Double-breasted overlap and padded shoulder lines add horizontal substance and chest depth to a lean 94.2cm torso, creating imposing stature.',
        eyeHarmonies: ['#28407a', '#374151', '#f6ecd6'],
        beautyAccent: 'Grooming: Clean Parted Hair Profile with Light-Hold Wax',
        fitScore: 95.8,
        recommendedSize: 'S / M',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(40,64,122,0.45), rgba(55,65,81,0.7))'
      },
      function: {
        id: 'm_ecto_function',
        title: 'Layered Silk Achkan with Epaulets & Brocade Shawl',
        archetype: 'Gala Dynast',
        badge: 'HERITAGE STATURE',
        icon: '🏛️',
        top: 'High-Collar Raw Silk Achkan with Ornamental Shoulder Tabs',
        bottom: 'Tailored Straight Aligarhi Pajama in Off-White Silk',
        outerwear: 'Heavy Brocade Silk Shoulder Shawl Draped with Metal Pin',
        footwear: 'Embroidered Velvet Jodhpur Boots with Gold Buckle',
        accessories: 'Pearl Mala Necklace & Ruby Lapel Brooch',
        torsoLogic: 'Epaulet shoulder tabs and a draped brocade shawl build regal chest width and vertical authority on a lean frame.',
        eyeHarmonies: ['#702459', '#d97706', '#f5e8cf'],
        beautyAccent: 'Grooming: Sculpted Jawline Highlighting & Crisp Edges',
        fitScore: 97.9,
        recommendedSize: 'M',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(112,36,89,0.5), rgba(217,119,6,0.35))'
      },
      party: {
        id: 'm_ecto_party',
        title: 'Textured Knit Polo & Heavyweight Wool Straight Slacks',
        archetype: 'Continental Modern',
        badge: 'TEXTURED ELEVATION',
        icon: '🪩',
        top: 'Cable-Knit Textured Polo Sweater in Camel Caramel',
        bottom: 'Straight-Leg Heavy Wool Trousers with Turn-Up Cuffs',
        outerwear: 'Structured Suede Trucker Jacket with Sherpa Collar',
        footwear: 'Chunky Lug-Sole Leather Chelsea Boots in Dark Chocolate',
        accessories: 'Silver Box Chain Necklace & Leather Wrap Wristband',
        torsoLogic: 'Dimensional cable knits and chunkier lug-sole footwear visually anchor long, slender limbs with tactile weight.',
        eyeHarmonies: ['#c05621', '#111827', '#ffffff'],
        beautyAccent: 'Grooming: Matte Clay Volumizing Hair Finish',
        fitScore: 96.5,
        recommendedSize: 'M',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(192,86,33,0.45), rgba(17,24,39,0.8))'
      },
      home: {
        id: 'm_ecto_home',
        title: 'Shawl-Collar Cable Cardigan & Flannel Lounge Trousers',
        archetype: 'Oxford Lounge',
        badge: 'COCOON SUBSTANCE',
        icon: '🛋️',
        top: 'Heavyweight Cotton Waffle Long-Sleeve Henley',
        bottom: 'Straight-Cut Brushed Flannel Lounge Pants in Forest Plaid',
        outerwear: 'Chunky Shawl-Collar Wool-Cashmere Ribbed Cardigan',
        footwear: 'Shearling-Lined Suede Moccasin Slippers',
        accessories: 'Wool Ribbed Boot Socks & Leather Journal',
        torsoLogic: 'A thick shawl collar adds cozy volume around the neck and traps heat, ideal for longer, leaner anatomical frames.',
        eyeHarmonies: ['#2f6b4f', '#452b1a', '#f6ecd6'],
        beautyAccent: 'Grooming: Rich Botanical Hydrating Skin Salve',
        fitScore: 96.1,
        recommendedSize: 'M',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(47,107,79,0.4), rgba(69,43,26,0.6))'
      }
    },
    'Endomorph': {
      work: {
        id: 'm_endo_work',
        title: 'Single-Breasted Longline Overcoat & Crisp Tapered Slacks',
        archetype: 'Executive Authority',
        badge: 'STREAMLINED POWER',
        icon: '💼',
        top: 'Deep V-Neck Cashmere Fine Knit over Crisp Spread-Collar Shirt',
        bottom: 'Dark Charcoal Flat-Front Tailored Trousers with Vertical Crease',
        outerwear: 'Structured Single-Breasted Wool Overcoat (Narrow Notch Lapels)',
        footwear: 'Polished Black Calfskin Cap-Toe Oxford Shoes',
        accessories: 'Matte Leather Reversible Belt & Slim Chrono Watch',
        torsoLogic: 'Single-breasted front closures and unbroken vertical center creases create continuous length, de-emphasizing midriff volume and highlighting strong shoulders.',
        eyeHarmonies: ['#111827', '#374151', '#d9cbb3'],
        beautyAccent: 'Grooming: Clean Jawline Fade & Low-Shine Matte Pomade',
        fitScore: 94.9,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(17,24,39,0.8), rgba(55,65,81,0.65))'
      },
      function: {
        id: 'm_endo_function',
        title: 'Deep V-Neck Sherwani with Vertical Silk Zari Panel',
        archetype: 'Imperial Majesty',
        badge: 'ROYAL MONOLITH',
        icon: '🏛️',
        top: 'Silk Longline Sherwani with Vertical Center Zari Embroidery',
        bottom: 'Straight-Leg Raw Silk Trousers in Midnight Onyx',
        outerwear: 'Narrow Vertical Stole Draped over Left Shoulder',
        footwear: 'Black Velvet Slip-On Loafers with Grosgrain Trim',
        accessories: 'Emerald Lapel Brooch & Classic Silk Pocket Fold',
        torsoLogic: 'Central vertical embroidery panel draws the eye straight down the sternum, providing regal vertical presence.',
        eyeHarmonies: ['#1b4d32', '#3d2452', '#f5e8cf'],
        beautyAccent: 'Grooming: Precision Beard Grooming with Sandalwood Oil',
        fitScore: 97.5,
        recommendedSize: 'XL',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(27,77,50,0.5), rgba(61,36,82,0.7))'
      },
      party: {
        id: 'm_endo_party',
        title: 'Open Camp-Collar Dark Linen Shirt & Relaxed Slacks',
        archetype: 'Nocturne Sovereign',
        badge: 'MIDNIGHT RELAXED',
        icon: '🪩',
        top: 'Open Cuban Camp-Collar Heavy Silk Shirt in Ink Black',
        bottom: 'Dark Obsidian Flat-Front Relaxed Trousers with Clean Hem',
        outerwear: 'Lightweight Unlined Structured Cotton Twill Chore Jacket',
        footwear: 'Black Leather Minimalist Court Sneakers or Loafers',
        accessories: 'Subtle Sterling Silver Box Chain & Dark Matte Watch',
        torsoLogic: 'Monochrome dark tones and an unbuttoned camp collar open up the neck, producing a cool, elongating silhouette for evening outings.',
        eyeHarmonies: ['#111827', '#28407a', '#ffffff'],
        beautyAccent: 'Grooming: Clean Shave with Soothing Aftershave Balm',
        fitScore: 95.8,
        recommendedSize: 'L / XL',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(17,24,39,0.85), rgba(40,64,122,0.45))'
      },
      home: {
        id: 'm_endo_home',
        title: 'V-Neck Merino Pullover & Straight French Terry Lounge Pant',
        archetype: 'Refined Haven',
        badge: 'PURE SERENITY',
        icon: '🛋️',
        top: 'Breathable Fine-Gauge V-Neck Merino Cotton Pullover',
        bottom: 'Flat-Front Straight-Leg French Terry Lounge Trousers',
        outerwear: 'Shawl-Collar Micro-Waffle Bathrobe in Heather Navy',
        footwear: 'Memory Foam Indoor Loafer Slippers with Rubber Sole',
        accessories: 'Titanium Insulated Mug & Silk Sleep Mask',
        torsoLogic: 'Open V-neck avoids neck constriction, while dark straight-leg lounge trousers drape cleanly without clinging.',
        eyeHarmonies: ['#28407a', '#452b1a', '#eed9c4'],
        beautyAccent: 'Grooming: Hydrating Daily Facial Mist & Beard Balm',
        fitScore: 95.2,
        recommendedSize: 'XL',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(40,64,122,0.45), rgba(69,43,26,0.65))'
      }
    },
    'Inverted Triangle': {
      work: {
        id: 'm_it_work',
        title: 'Tailored Blazer & Flat Front Trousers',
        archetype: 'Refined Professional',
        badge: 'HAUTE EXECUTIVE',
        icon: '💼',
        top: 'Structured Shirt (Midnight Navy)',
        bottom: 'Flat Front Trousers (Navy)',
        outerwear: 'Single-Breasted Blazer (Navy)',
        footwear: 'Leather Oxford Shoes (Black)',
        accessories: 'Leather Belt | Classic Watch | Pocket Square',
        torsoLogic: 'Structured shoulders and a tailored fit create a stronger upper body line, while straight-leg trousers balance the frame, enhancing overall proportion and presence.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#d9cbb3'],
        beautyAccent: 'Grooming: Natural Rose (NR-12) on Matte Finish Skin',
        fitScore: 94.8,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.45), rgba(17,24,39,0.75))',
        image: 'look_men_haute_executive.png'
      },
      function: {
        id: 'm_it_function',
        title: 'Longline Royal Bandhgala & Tailored Churidar',
        archetype: 'Regal Heritage',
        badge: 'ROYAL ARCHIVE',
        icon: '🏛️',
        top: 'Hand-Woven Raw Silk Longline Bandhgala Coat with Antique Metal Buttons',
        bottom: 'Tapered Cotton-Silk Straight Churidar / Jodhpuri Pants in Cream',
        outerwear: 'Silk Pocket Square with Monogrammed Silver Cufflinks',
        footwear: 'Embroidered Leather Mojaris with Cushioned Insoles',
        accessories: 'Heritage Emerald & Pearl Lapel Pin',
        torsoLogic: 'Mandarin collar and vertical button placket draw an unbroken central vertical line that harmonizes with a broad, athletic chest frame.',
        eyeHarmonies: ['#1b4d32', '#d97706', '#f5e8cf'],
        beautyAccent: 'Grooming: Sculpted Jawline Contour & Polished Hair Profile',
        fitScore: 98.8,
        recommendedSize: 'XL',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(27,77,50,0.5), rgba(217,119,6,0.35))'
      },
      party: {
        id: 'm_it_party',
        title: 'Silk Cuban Collar Shirt & Relaxed High-Waist Trouser',
        archetype: 'Metropolitan Nightfall',
        badge: 'AFTER DARK',
        icon: '🪩',
        top: 'Printed Mulberry Silk Camp Collar Shirt with Fluid Drapery',
        bottom: 'Relaxed-Fit Pleated Linen-Cotton Trousers in Sand Stone',
        outerwear: 'Unpadded Soft Nappa Leather Minimalist Biker Jacket',
        footwear: 'Chunky Leather Derbies with Commando Lug Soles',
        accessories: 'Sterling Silver Box Chain Necklace & Onyx Signet Ring',
        torsoLogic: 'Open Cuban collar creates a relaxed, breathable clavicle line, while relaxed-cut high-waisted trousers match the athletic proportions of broad shoulders.',
        eyeHarmonies: ['#c05621', '#111827', '#ffffff'],
        beautyAccent: 'Grooming: Low-Shine Matte Pomade with Natural Wave Styling',
        fitScore: 96.3,
        recommendedSize: 'L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(192,86,33,0.45), rgba(17,24,39,0.8))'
      },
      home: {
        id: 'm_it_home',
        title: 'Raglan Waffle Crewneck & Utility Relaxed Lounge Pant',
        archetype: 'Elevated Haven',
        badge: 'PURE REST',
        icon: '🛋️',
        top: 'Heavyweight Organic Waffle-Knit Raglan Long-Sleeve Crewneck',
        bottom: 'Relaxed-Taper Utility Pocket French Terry Lounge Trousers',
        outerwear: 'Double-Knit Cashmere-Cotton Blend Full-Zip Hoodie',
        footwear: 'Ergonomic Suede Shearling-Lined Clogs',
        accessories: 'Brushed Titanium Minimalist Watch & Wool Ribbed Socks',
        torsoLogic: 'Raglan sleeve geometry angles diagonally into the neckline, eliminating horizontal shoulder seams and creating effortless comfort.',
        eyeHarmonies: ['#4a6fa5', '#374151', '#9ca3af'],
        beautyAccent: 'Grooming: Natural Cedarwood Beard Oil & Hydrating Facial Mist',
        fitScore: 96.9,
        recommendedSize: 'L',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(74,111,165,0.4), rgba(55,65,81,0.65))'
      }
    },
    'Rectangle / Balanced': {
      work: {
        id: 'm_rec_work',
        title: 'Tailored Blazer & Flat Front Trousers',
        archetype: 'Refined Professional',
        badge: 'HAUTE EXECUTIVE',
        icon: '💼',
        top: 'Structured Shirt (Midnight Navy)',
        bottom: 'Flat Front Trousers (Navy)',
        outerwear: 'Single-Breasted Blazer (Navy)',
        footwear: 'Leather Oxford Shoes (Black)',
        accessories: 'Leather Belt | Classic Watch | Pocket Square',
        torsoLogic: 'Structured shoulders and a tailored fit create a stronger upper body line, while straight-leg trousers balance the frame, enhancing overall proportion and presence.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#d9cbb3'],
        beautyAccent: 'Grooming: Natural Rose (NR-12) on Matte Finish Skin',
        fitScore: 94.8,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.45), rgba(17,24,39,0.75))',
        image: 'look_men_haute_executive.png'
      },
      function: {
        id: 'm_rec_function',
        title: 'Layered Silk Waistcoat & Tailored Kurta Set',
        archetype: 'Royal Sovereign',
        badge: 'CEREMONIAL ELITE',
        icon: '🏛️',
        top: 'Pure Chanderi Silk Kurta with Subtle Handcrafted Zari Placket',
        bottom: 'Straight-Cut Slim Pajama Trousers in Ivory Raw Silk',
        outerwear: 'Structured Brocade Silk Nehru Waistcoat with Stand Collar',
        footwear: 'Velvet Embroidered Slip-On Loafers with Grosgrain Trim',
        accessories: 'Heritage Pearl & Emerald Mala Necklace & Pocket Fold',
        torsoLogic: 'A structured waistcoat over a fluid kurta builds dimensional chest depth and clearly defines the waistline, optimizing balanced body proportions.',
        eyeHarmonies: ['#28407a', '#702459', '#f5e8cf'],
        beautyAccent: 'Grooming: Precision Beard Fade & Royal Sandalwood Finish',
        fitScore: 98.2,
        recommendedSize: 'M',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(40,64,122,0.45), rgba(112,36,89,0.45))'
      },
      party: {
        id: 'm_rec_party',
        title: 'Bespoke Velvet Peak-Lapel Dinner Jacket & Tux Trouser',
        archetype: 'Gala Black Tie',
        badge: 'MIDNIGHT OPULENCE',
        icon: '🪩',
        top: 'Pleated-Bib Wingtip Collar Tuxedo Shirt with Mother-of-Pearl Studs',
        bottom: 'Midnight Black Tailored Tuxedo Trousers with Satin Side Stripe',
        outerwear: 'Deep Burgundy Velvet Dinner Jacket with Wide Satin Peak Lapels',
        footwear: 'Patent Leather Venetian Opera Pumps with Grosgrain Bow',
        accessories: 'Hand-Tied Silk Satin Butterfly Bowtie & Gold Cufflinks',
        torsoLogic: 'Wide satin peak lapels flare outward from the waist to the shoulders, carving out an expansive chest profile and a sculpted midsection.',
        eyeHarmonies: ['#5b1b36', '#111827', '#f6ecd6'],
        beautyAccent: 'Grooming: Sleek Modern Pompadour with High-Definition Hold',
        fitScore: 98.9,
        recommendedSize: 'M / S',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(91,27,54,0.55), rgba(17,24,39,0.8))'
      },
      home: {
        id: 'm_rec_home',
        title: 'French Terry Track Set & Colorblock Athletic Jogger',
        archetype: 'Modern Luxe Sport',
        badge: 'ACTIVE CASUAL',
        icon: '🛋️',
        top: 'Pima Cotton Long-Sleeve Tee with Chest Contrast Stripe',
        bottom: 'Slim-Tapered Contrast-Stripe Track Joggers with Zip Pockets',
        outerwear: 'Full-Zip French Terry Track Jacket with Ribbed Stand Collar',
        footwear: 'Slip-On Memory Foam Luxury House Loafers',
        accessories: 'Titanium Smart Ring & Insulated Tumbler',
        torsoLogic: 'Horizontal chest striping and contrast vertical leg piping add sporty, athletic definition to relaxation clothing.',
        eyeHarmonies: ['#2f6b4f', '#1e3a8a', '#ffffff'],
        beautyAccent: 'Grooming: Clean Shave with Energizing Hydra-Gel Moisturizer',
        fitScore: 96.1,
        recommendedSize: 'M',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(47,107,79,0.4), rgba(30,58,138,0.5))'
      }
    },
    'Pear / Triangle': {
      work: {
        id: 'm_pear_work',
        title: 'Tailored Blazer & Flat Front Trousers',
        archetype: 'Refined Professional',
        badge: 'HAUTE EXECUTIVE',
        icon: '💼',
        top: 'Structured Shirt (Midnight Navy)',
        bottom: 'Flat Front Trousers (Navy)',
        outerwear: 'Single-Breasted Blazer (Navy)',
        footwear: 'Leather Oxford Shoes (Black)',
        accessories: 'Leather Belt | Classic Watch | Pocket Square',
        torsoLogic: 'Structured shoulders and a tailored fit create a stronger upper body line, while straight-leg trousers balance the frame, enhancing overall proportion and presence.',
        eyeHarmonies: ['#2b4c8c', '#111827', '#d9cbb3'],
        beautyAccent: 'Grooming: Natural Rose (NR-12) on Matte Finish Skin',
        fitScore: 94.8,
        recommendedSize: 'L / XL',
        accentHex: '#00d4ff',
        gradient: 'linear-gradient(135deg, rgba(43,76,140,0.45), rgba(17,24,39,0.75))',
        image: 'look_men_haute_executive.png'
      },
      function: {
        id: 'm_pear_function',
        title: 'Broad-Shouldered Achkan with Epaulet Detailing',
        archetype: 'Aristocratic Sovereign',
        badge: 'ROYAL DYNASTY',
        icon: '🏛️',
        top: 'Fitted Silk Kurta Under-Layer with Mandarin Collar',
        bottom: 'Classic Straight-Leg Pleated Aligarhi Pajamas in Deep Black',
        outerwear: 'Structured Heavy Silk Jacquard Achkan with Subtle Shoulder Tabs',
        footwear: 'Polished Calfskin Leather Jodhpur Boots with Buckle',
        accessories: 'Ruby & Pearl Lapel Brooch & Royal Silk Pocket Fold',
        torsoLogic: 'Military-inspired shoulder tabs and a high stiffened collar pull the visual focal point upward to the neck and chest, establishing regal presence.',
        eyeHarmonies: ['#a04e2c', '#d97706', '#fbf0dc'],
        beautyAccent: 'Grooming: Royal Moustache Styling Wax with Crisp Edges',
        fitScore: 99.1,
        recommendedSize: 'XL',
        accentHex: '#f59e0b',
        gradient: 'linear-gradient(135deg, rgba(160,78,44,0.5), rgba(217,119,6,0.35))'
      },
      party: {
        id: 'm_pear_party',
        title: 'Bold Shoulder-Stripe Bomber & Dark Matte Chinos',
        archetype: 'Urban Vanguard',
        badge: 'NIGHT REBEL',
        icon: '🪩',
        top: 'Crewneck Fine-Gauge Merino Wool Sweater in Light Heather Gray',
        bottom: 'Dark Matte Obsidian Slim-Straight Chinos (Streamlined Cut)',
        outerwear: 'Suede Bomber Jacket with Bold Contrast Shoulder & Chest Yoke',
        footwear: 'Clean Minimalist Leather Low-Top Court Sneakers',
        accessories: 'Matte Black Chronograph Watch & Braided Leather Wristband',
        torsoLogic: 'Horizontal upper-chest colorblocking and prominent bomber collar expand upper visual horizons while dark matte chinos minimize hip width.',
        eyeHarmonies: ['#374151', '#4a6fa5', '#ffffff'],
        beautyAccent: 'Grooming: Textured Matte Clay Hair Finish with High Definition',
        fitScore: 97.1,
        recommendedSize: 'L',
        accentHex: '#ff2d78',
        gradient: 'linear-gradient(135deg, rgba(55,65,81,0.55), rgba(74,111,165,0.4))'
      },
      home: {
        id: 'm_pear_home',
        title: 'Drop-Shoulder Fleece Sweatshirt & Straight Lounge Pant',
        archetype: 'Relaxed Atelier',
        badge: 'PRIME LEISURE',
        icon: '🛋️',
        top: 'Heavyweight 450GSM Loopback Cotton Drop-Shoulder Sweatshirt',
        bottom: 'Dark Charcoal Heather Straight-Leg Fleece Lounge Pants',
        outerwear: 'Sherpa-Lined Micro-Fleece Robe with Shawl Collar',
        footwear: 'Wool Felt Indoor Booties with Non-Slip Rubber Soles',
        accessories: 'Ribbed Knit Beanie & Double-Wall Coffee Tumbler',
        torsoLogic: 'Dropped shoulder seams and generous chest cutting build relaxed horizontal width across the upper frame, paired with slimming dark pants.',
        eyeHarmonies: ['#452b1a', '#4d5b28', '#eed9c4'],
        beautyAccent: 'Grooming: Overnight Hydra-Balm Face Treatment Base',
        fitScore: 96.0,
        recommendedSize: 'L',
        accentHex: '#10b981',
        gradient: 'linear-gradient(135deg, rgba(69,43,26,0.5), rgba(77,91,40,0.45))'
      }
    }
  }
};

// Helper to fetch outfits for any gender and occasion
function getOccasionOutfit(gender, torsoShape, occasion){
  const g = OCCASION_WARDROBE_MATRIX[gender] || OCCASION_WARDROBE_MATRIX.women;
  let shapeKey = torsoShape;
  if(!g[shapeKey]){
    if(gender === 'men'){
      if(shapeKey === 'Tall & Athletic') shapeKey = 'Mesomorph';
      else if(shapeKey === 'Slim / Lean') shapeKey = 'Ectomorph';
      else if(shapeKey === 'Stocky / Muscular') shapeKey = 'Endomorph';
      else if(shapeKey === 'Average Build') shapeKey = 'Rectangle / Balanced';
      else shapeKey = 'Mesomorph';
    } else {
      shapeKey = 'Hourglass';
    }
  }
  const t = g[shapeKey] || g['Rectangle / Balanced'] || Object.values(g)[0];
  return t[occasion] || t.work || Object.values(t)[0];
}

// Map curated high-resolution editorial photos from the dataset images
function getLookImage(lookId, gender, torsoShape, occasion){
  if(gender === 'men'){
    if(torsoShape === 'Mesomorph' || torsoShape === 'Tall & Athletic') return 'arch_m_mesomorph.png';
    if(torsoShape === 'Ectomorph' || torsoShape === 'Slim / Lean') return 'arch_m_ectomorph.png';
    if(torsoShape === 'Endomorph' || torsoShape === 'Stocky / Muscular') return 'arch_m_endomorph.png';
    if(torsoShape === 'Inverted Triangle') return (occasion === 'work' ? 'look_men_haute_executive.png' : 'arch_m_inverted.png');
    if(torsoShape === 'Pear / Triangle' || torsoShape === 'Triangle') return 'arch_m_triangle.png';
    if(torsoShape === 'Rectangle / Balanced' || torsoShape === 'Average Build') return 'arch_m_rectangle.png';
    return 'look_men_haute_executive.png';
  } else {
    if(torsoShape === 'Hourglass') return 'model_w_hourglass.png';
    if(torsoShape === 'Pear / Triangle') return 'model_w_pear.png';
    if(torsoShape === 'Rectangle / Balanced') return 'model_w_rectangle.png';
    if(torsoShape === 'Inverted Triangle') return 'look_women_it_work.png';
    if(torsoShape === 'Apple / Round') return 'model_w_apple.png';
    if(torsoShape === 'Petite / Compact') return 'model_w_petite.png';
    return 'model_w_hourglass.png';
  }
}

const LOOKBOOK_COLLECTIONS = {
  women: {
    title: "AI GENERATED CAPSULE WARDROBE — WOMEN'S EDIT",
    subtitle: "Complete 6-Silhouette Capsule: Hourglass · Pear · Rectangle · Inverted Triangle · Apple · Petite",
    image: "rec_women_capsules.png",
    alt: "Women's Capsule Wardrobe Master Sheet",
    badges: ["HOURGLASS (97.8% FIT)", "PEAR (95.6% FIT)", "RECTANGLE (94.2% FIT)", "INVERTED (96.4% FIT)", "APPLE (95.8% FIT)", "PETITE (96.9% FIT)"],
    masterSheet: "rec_women_hero.png"
  },
  men: {
    title: "AI GENERATED CAPSULE WARDROBE — MEN'S EDIT",
    subtitle: "Complete 6-Archetype Capsule: Mesomorph · Ectomorph · Endomorph · Inverted · Rectangle · Triangle",
    image: "rec_men_capsules.png",
    alt: "Men's Capsule Wardrobe Master Sheet",
    badges: ["MESOMORPH (97.4% FIT)", "ECTOMORPH (95.8% FIT)", "ENDOMORPH (94.9% FIT)", "INVERTED TRIANGLE (96.5% FIT)", "AVERAGE (95.6% FIT)", "STOCKY (94.9% FIT)"],
    masterSheet: "mainmen.png",
    archetypeImage: "rec_men_archetypes.png"
  }
};

/* ---- DEDICATED BODY TYPE INFOGRAPHIC DOSSIER MAP ---- */
const BODY_TYPE_DOSSIER_MAP = {
  women: {
    'Hourglass': {
      image: 'dossier_w_hourglass.png',
      modelImage: 'model_w_hourglass.png',
      title: 'Hourglass — Curvilinear Golden-Ratio Dossier',
      fitScore: 97.8,
      keyProportions: 'Bust: 92.4 cm · Waist: 68.2 cm · Hips: 96.7 cm (Balanced shoulders & hips, defined waist)',
      sizeRange: 'S / M',
      dominantStyle: 'Classic Elegance',
      styleFocus: [
        'Define the waist with tailored suppression and wrap cuts',
        'Highlight natural curves without adding boxy bulk',
        'V-neck, sweetheart & wrap necklines for upper harmony',
        'Structured blazers with peak lapels & clean shoulder lines',
        'Midi & maxi lengths that follow natural hip curve'
      ],
      tailoringDirectives: [
        'Accentuate the natural waistline with wrap dresses, belted blazers, and fitted princess seams',
        'V-necks, sweetheart, and scoop necklines flatter chest symmetry without widening shoulders',
        'High-rise bootcut and wide-leg trousers follow natural hip curves smoothly',
        'AVOID: Shapeless sack silhouettes and stiff un-tailored boxy jackets'
      ],
      palette: [
        { name: 'Navy Blue', hex: '#1c2e4a' },
        { name: 'Midnight Onyx', hex: '#181b22' },
        { name: 'Ivory Cream', hex: '#eee6d8' },
        { name: 'Warm Camel', hex: '#c59f73' },
        { name: 'Regal Gold', hex: '#b89047' }
      ]
    },
    'Pear / Triangle': {
      image: 'dossier_w_pear.png',
      modelImage: 'model_w_pear.png',
      title: 'Pear / Triangle — Curvilinear A-Frame Dossier',
      fitScore: 95.6,
      keyProportions: 'Bust: 98.1 cm · Waist: 72.6 cm · Hips: 102.3 cm (Narrower shoulders, wider hips & thighs)',
      sizeRange: 'M / L',
      dominantStyle: 'Modern Feminine',
      styleFocus: [
        'Add structure to upper body with sculpted shoulders & lapels',
        'Brighten the upper half with lighter tones & textures',
        'A-line & fluid wide-leg bottoms that drape cleanly',
        'Statement shoulders & puff sleeves to balance pelvic width',
        'Balance proportions: accentuate waist while skimming hips'
      ],
      tailoringDirectives: [
        'Draw focus upward with statement shoulders, boat necklines, and structured lapels',
        'A-line skirts and fluid palazzo trousers that skim over hips gracefully',
        'Darker, clean-tailored trousers paired with lighter or textured jackets',
        'AVOID: Low-rise skinny jeans, heavy hip pockets, and tight clingy skirts'
      ],
      palette: [
        { name: 'Deep Burgundy', hex: '#682136' },
        { name: 'Blush Mauve', hex: '#c49a94' },
        { name: 'Olive Green', hex: '#525b42' },
        { name: 'Soft Cream', hex: '#e5d3c0' },
        { name: 'Regal Gold', hex: '#b78f4b' }
      ]
    },
    'Rectangle / Balanced': {
      image: 'dossier_w_rectangle.png',
      modelImage: 'model_w_rectangle.png',
      title: 'Rectangle / Balanced — Harmonic Straight Canvas Dossier',
      fitScore: 94.2,
      keyProportions: 'Bust: 86.7 cm · Waist: 76.2 cm · Hips: 98.5 cm (Aligned shoulders, waist, and hips)',
      sizeRange: 'S / M / L',
      dominantStyle: 'Chic Minimalist',
      styleFocus: [
        'Create waist definition using belts, wrap ties, and peplum darts',
        'Add dimension with layered textures, cropped jackets & trenches',
        'Introduce curves with fit-and-flare dresses and pleated trousers',
        'Draw eye inward with diagonal draping and asymmetric lapels',
        'Color blocking to break vertical uniformity dynamically'
      ],
      tailoringDirectives: [
        'Sculpt curves with peplum cuts, waist belts, and structural draping',
        'Layering with open front jackets, cropped blazers, and belted trench coats',
        'Fit-and-flare dresses and pleated trousers that create feminine dimensional movement',
        'AVOID: Boxy shapeless shifts and completely straight column dresses without waist styling'
      ],
      palette: [
        { name: 'Emerald', hex: '#245c3f' },
        { name: 'Sapphire Blue', hex: '#28407a' },
        { name: 'Soft Terracotta', hex: '#c1673c' },
        { name: 'Ivory Cream', hex: '#f6ecd6' },
        { name: 'Warm Amber', hex: '#c59247' }
      ]
    },
    'Inverted Triangle': {
      image: 'dossier_w_inverted_triangle.png',
      modelImage: 'look_women_it_work.png',
      title: 'Inverted Triangle — Athletic V-Taper Dossier',
      fitScore: 96.4,
      keyProportions: 'Bust: 105.7 cm · Waist: 82.3 cm · Hips: 96.1 cm (Broad athletic shoulders, narrower hips)',
      sizeRange: 'M / L / XL',
      dominantStyle: 'Executive Minimalist',
      styleFocus: [
        'De-emphasize shoulder width with soft unpadded shoulders & raglan sleeves',
        'Expand lower volume with wide-leg palazzos and A-line cuts',
        'Draw focus downward with statement bottoms, belts and pleats',
        'Deep V-necks and scoop collars that elongate upper torso',
        'Establish golden-ratio balance between torso and legs'
      ],
      tailoringDirectives: [
        'De-emphasize shoulder bulk with unpadded soft shoulder lines, raglan sleeves, and deep V-necks',
        'Expand lower volume with wide-leg palazzos, A-line skirts, and cargo trousers',
        'Draw the eye downward with statement belts, pleated details, and printed bottoms',
        'AVOID: Padded power shoulders, boat necklines, and tapered skinny trousers'
      ],
      palette: [
        { name: 'Deep Teal', hex: '#1f5f5b' },
        { name: 'Onyx Black', hex: '#111827' },
        { name: 'Cobalt Blue', hex: '#2563eb' },
        { name: 'Champagne', hex: '#f6ecd6' },
        { name: 'Charcoal Slate', hex: '#374151' }
      ]
    },
    'Apple / Round': {
      image: 'dossier_w_apple.png',
      modelImage: 'model_w_apple.png',
      title: 'Apple / Round — Empire Silhouette Dossier',
      fitScore: 95.8,
      keyProportions: 'Bust: 104.2 cm · Waist: 93.8 cm · Hips: 100.5 cm (Fuller midsection, slender legs and arms)',
      sizeRange: 'L / XL / XXL',
      dominantStyle: 'Fluid Elegance',
      styleFocus: [
        'Empire waist seams that float smoothly under the bust',
        'Highlight slender arms and calves with 3/4 sleeves & midi hems',
        'Longline dusters and open jackets for strong vertical slimming panels',
        'Wrap & V-neck tops that direct attention upward to face',
        'Fluid, monochromatic column palettes that elongate stature'
      ],
      tailoringDirectives: [
        'Empire waist seams that float smoothly under the bust to elongate the torso',
        'Open front longline dusters and trench coats that create strong vertical slimming panels',
        'V-neck and wrap necklines that draw attention upward to the face and decolletage',
        'AVOID: Bulky double-breasted jackets, thick horizontal waist belts, and tight clingy fabrics'
      ],
      palette: [
        { name: 'Emerald Green', hex: '#2f6b4f' },
        { name: 'Deep Navy', hex: '#1c3252' },
        { name: 'Onyx Black', hex: '#111827' },
        { name: 'Plum Wine', hex: '#5b3a5e' },
        { name: 'Warm Gold', hex: '#c49a45' }
      ]
    },
    'Petite / Compact': {
      image: 'dossier_w_petite.png',
      modelImage: 'model_w_petite.png',
      title: 'Petite / Compact — Delicate Proportional Dossier',
      fitScore: 96.9,
      keyProportions: 'Bust: 82.5 cm · Waist: 63.8 cm · Hips: 86.4 cm (Scaled height under 162cm, delicate frame)',
      sizeRange: 'XS / S / Petite',
      dominantStyle: 'Haute Tailored',
      styleFocus: [
        'Maximize leg elongation with high-rise tailored waistlines',
        'Cropped jackets hitting precisely above the iliac crest',
        'Monochromatic column styling for continuous unbroken vertical eye-travel',
        'Pointed-toe shoes that visually extend leg line',
        'Proportionally scaled lapels, buttons, and micro-accessories'
      ],
      tailoringDirectives: [
        'High-rise tailored trousers hitting natural waist to maximize leg length',
        'Cropped structured blazers terminating precisely above the hip bone',
        'Monochromatic vertical column dressing to create continuous eye movement',
        'Pointed-toe footwear and high-cut vamps that extend the leg line',
        'AVOID: Oversized boxy streetwear, wide horizontal belts, and calf-length cuts'
      ],
      palette: [
        { name: 'Cream Ivory', hex: '#f5f0e1' },
        { name: 'Charcoal', hex: '#3a3f47' },
        { name: 'Warm Camel', hex: '#c29466' },
        { name: 'Midnight Navy', hex: '#2c3347' },
        { name: 'Rose Gold', hex: '#c98e72' }
      ]
    }
  },
  men: {
    'Mesomorph': {
      image: 'dossier_m_mesomorph.png',
      modelImage: 'arch_m_mesomorph.png',
      title: 'Mesomorph — Athletic Muscular Archetype Dossier',
      fitScore: 97.4,
      keyProportions: 'Chest: 108.5 cm · Waist: 82.0 cm · Hips: 98.2 cm (Natural athletic V-taper, defined shoulders)',
      sizeRange: 'M / L / XL',
      dominantStyle: 'Modern Tailored',
      styleFocus: [
        'Highlight natural shoulder-to-waist taper with moderate waist suppression',
        'Unpadded or soft natural shoulder construction',
        'Flat-front tapered trousers that follow athletic leg lines',
        'Fitted knit polos and open-collar shirting',
        'Clean, unencumbered outerwear lines'
      ],
      tailoringDirectives: [
        'Fitted tailored jackets with moderate waist suppression and unpadded natural shoulders',
        'Flat-front tapered trousers that complement athletic quadriceps without hugging',
        'Open collar shirts, fitted polos, and structured leather outerwear',
        'AVOID: Boxy oversized cuts that hide muscle definition or skin-tight stretch fabrics'
      ],
      palette: [
        { name: 'Navy Blue', hex: '#1c3252' },
        { name: 'Charcoal', hex: '#3a3f47' },
        { name: 'Onyx Black', hex: '#111827' },
        { name: 'Olive Green', hex: '#5f6b3a' },
        { name: 'Silver Slate', hex: '#94a3b8' }
      ]
    },
    'Ectomorph': {
      image: 'dossier_m_ectomorph.png',
      modelImage: 'arch_m_ectomorph.png',
      title: 'Ectomorph — Lean Linear Archetype Dossier',
      fitScore: 95.8,
      keyProportions: 'Chest: 94.2 cm · Waist: 74.5 cm · Hips: 91.0 cm (Lean linear frame, longer limbs)',
      sizeRange: 'S / M / L',
      dominantStyle: 'Layered Tailoring',
      styleFocus: [
        'Add upper-frame substance with chest canvassing & light shoulder padding',
        'Multi-garment layering with overshirts, gilets, and knitwear',
        'Subtle forward pleats on trousers to add horizontal proportion',
        'Textured weaves (tweed, corduroy, herringbone) for visual density',
        'Horizontal detailing across chest and shoulders'
      ],
      tailoringDirectives: [
        'Structured tailoring with light shoulder padding and chest canvassing to add frame substance',
        'Layering with heavy-gauge knits, gilets, overshirts, and textured wool coats',
        'Trousers with subtle pleats or straight cuts to add horizontal proportion to legs',
        'AVOID: Ultra-skinny jeans that exaggerate limb length and thin clingy monochrome tees'
      ],
      palette: [
        { name: 'Charcoal', hex: '#3a3f47' },
        { name: 'Camel Beige', hex: '#a9793f' },
        { name: 'Forest Green', hex: '#2f6b4f' },
        { name: 'Cream', hex: '#f6ecd6' },
        { name: 'Muted Bronze', hex: '#8c6b41' }
      ]
    },
    'Endomorph': {
      image: 'dossier_m_endomorph.png',
      modelImage: 'arch_m_endomorph.png',
      title: 'Endomorph — Substantial Broad Frame Dossier',
      fitScore: 94.9,
      keyProportions: 'Chest: 116.0 cm · Waist: 98.5 cm · Hips: 110.2 cm (Substantial broad frame, robust density)',
      sizeRange: 'L / XL / XXL',
      dominantStyle: 'Single-Breasted Classic',
      styleFocus: [
        'Single-breasted 2-button jackets with low button stance to lengthen torso',
        'Clean vertical lapel drape that creates slimming vertical axis',
        'Straight-leg trousers with uninterrupted drape to shoe top',
        'Monochromatic vertical palettes that eliminate horizontal breaks',
        'Medium-weight fabrics with structured drape'
      ],
      tailoringDirectives: [
        'Single-breasted 2-button jackets with clean vertical lapels to streamline the torso',
        'Straight-leg trousers with clean drape from hip to shoe to lengthen leg line',
        'Dark vertical monochrome palettes (Charcoal, Navy, Black) for a razor-sharp profile',
        'AVOID: Heavy horizontal stripes, puffy padded jackets, and tight tapered ankle cuffs'
      ],
      palette: [
        { name: 'Deep Navy', hex: '#1c3252' },
        { name: 'Onyx Black', hex: '#111827' },
        { name: 'Dark Slate', hex: '#2f3b36' },
        { name: 'Wine Burgundy', hex: '#7a2e2e' },
        { name: 'Gunmetal', hex: '#4b5563' }
      ]
    },
    'Inverted Triangle': {
      image: 'dossier_m_inverted.png',
      modelImage: 'arch_m_inverted.png',
      title: 'Inverted Triangle — Broad V-Taper Archetype Dossier',
      fitScore: 96.5,
      keyProportions: 'Chest: 112.0 cm · Waist: 80.2 cm · Hips: 96.1 cm (Broad muscular shoulders, distinct tapered waist)',
      sizeRange: 'L / XL',
      dominantStyle: 'Executive Athletic',
      styleFocus: [
        'Unstructured soft-shoulder blazers that let natural deltoids provide shape',
        'Straight or relaxed tapered trousers to balance upper torso mass',
        'V-neck sweaters and polo collars that draw focus inward rather than widening across',
        'Darker tops paired with neutral or lighter bottoms for proportion equilibrium',
        'Avoid excessive chest pocket bulk or shoulder epaulets'
      ],
      tailoringDirectives: [
        'Unstructured soft-shoulder blazers that let natural deltoids provide shape',
        'Straight or relaxed tapered trousers to balance upper torso mass',
        'V-neck sweaters and polo collars that draw focus inward rather than widening across',
        'AVOID: Padded shoulder suits, horizontal boat necklines, and tight skinny trousers'
      ],
      palette: [
        { name: 'Navy Blue', hex: '#2b4c8c' },
        { name: 'Stone Grey', hex: '#4a5568' },
        { name: 'Charcoal', hex: '#1f2937' },
        { name: 'Burgundy', hex: '#7a2e2e' },
        { name: 'Steel Blue', hex: '#3b82f6' }
      ]
    },
    'Rectangle / Balanced': {
      image: 'dossier_m_rectangle.png',
      modelImage: 'arch_m_rectangle.png',
      title: 'Rectangle / Balanced — Proportional Average Archetype Dossier',
      fitScore: 95.6,
      keyProportions: 'Chest: 102.4 cm · Waist: 78.6 cm · Hips: 98.0 cm (Balanced proportional build, uniform torso)',
      sizeRange: 'M / L',
      dominantStyle: 'Smart Casual Classic',
      styleFocus: [
        'Structured blazers with defined shoulders to create upper-body taper',
        'Contrasting top/bottom separates to segment the torso cleanly',
        'Belts and waist detailing to introduce focal interest',
        'Layered overshirts and textured fabrics (tweed, corduroy)',
        'Versatile wardrobe foundation with timeless tailored cuts'
      ],
      tailoringDirectives: [
        'Structured blazers with defined shoulders to create visual upper-body taper',
        'Belts and contrasting top/bottom combinations to break up the torso line',
        'Textured fabrics like tweed, corduroy, and herringbone to add depth',
        'AVOID: Completely uniform un-tailored shapeless tracksuits and oversized draping'
      ],
      palette: [
        { name: 'Midnight Navy', hex: '#1c3252' },
        { name: 'Stone Beige', hex: '#d9cbb3' },
        { name: 'Olive Green', hex: '#5f6b3a' },
        { name: 'Pure White', hex: '#ffffff' },
        { name: 'Warm Cognac', hex: '#9a6136' }
      ]
    },
    'Pear / Triangle': {
      image: 'dossier_m_triangle.png',
      modelImage: 'arch_m_triangle.png',
      title: 'Triangle / A-Frame — Archetype Dossier',
      fitScore: 95.2,
      keyProportions: 'Chest: 95.0 cm · Waist: 88.0 cm · Hips: 104.0 cm (Narrower shoulders, broader waist and hips)',
      sizeRange: 'M / L',
      dominantStyle: 'Structured Proportioning',
      styleFocus: [
        'Structured jackets with definite shoulder padding to widen upper horizontal line',
        'Straight-cut trousers in dark tones with no pleats to streamline lower proportions',
        'Horizontal accents and chest pockets on shirts and jackets to broaden chest width',
        'Draw focus to shoulders, necklines, and pocket squares',
        'Avoid tight tapered leg bottoms and bright trousers'
      ],
      tailoringDirectives: [
        'Structured jackets with definite shoulder padding to widen the upper body line',
        'Straight-cut trousers in dark tones with no pleats to streamline lower proportions',
        'Horizontal accents and chest pockets on shirts and jackets to broaden chest width',
        'AVOID: Fitted polo shirts, tapered skinny trousers, and bright colored pants'
      ],
      palette: [
        { name: 'Charcoal', hex: '#3a3f47' },
        { name: 'Navy', hex: '#1c3252' },
        { name: 'Dark Forest', hex: '#1f5f5b' },
        { name: 'Ivory Cream', hex: '#f6ecd6' },
        { name: 'Deep Bronze', hex: '#7c5a35' }
      ]
    }
  }
};

function getBodyTypeDossier(gender, torsoShape){
  const g = gender === 'men' ? 'men' : 'women';
  const gMap = BODY_TYPE_DOSSIER_MAP[g] || BODY_TYPE_DOSSIER_MAP.women;
  const defaultShape = g === 'men' ? 'Mesomorph' : 'Hourglass';
  return gMap[torsoShape] || gMap[defaultShape] || Object.values(gMap)[0];
}

if(typeof window !== 'undefined'){
  window.BODY_TYPE_DOSSIER_MAP = BODY_TYPE_DOSSIER_MAP;
  window.getBodyTypeDossier = getBodyTypeDossier;
}

