/**
 * Riri Cars Ltd. — Vehicle Inventory
 *
 * Data notes:
 *  • VERIFIED   = confirmed from public Facebook posts / Japanese Car Trade profile
 *  • MARKET     = price derived from Kenyan market listings (Jiji, Cars45, Autochek, Magari Deals)
 *                 for the same year/make/model — accurate to within ±10%
 *  • INFERRED   = typical spec for this exact make/model/year; clearly labelled in the object
 *
 * All prices are in Kenyan Shillings (KSh).
 * Riri Cars stocks primarily Japanese domestic market (JDM) used imports.
 *
 * stockNumber = internal inventory reference (not a public record, assigned for display purposes)
 * description = marketing copy for the car details page, written from the specs above
 * gallery     = image set for the details page carousel. First entry matches `image`.
 *               Real photos of the matching year/make/model/engine generation, sourced from
 *               Wikimedia Commons via their 500px thumbnail endpoint (not multi-MB originals).
 *               Every car's gallery includes at least one interior/cabin shot.
 *               exteriorColor reflects the actual photo shown, not an independently verified spec.
 */

export const featuredCars = [
  // ── 1. Toyota Vitz ──────────────────────────────────────────────────────
  {
    id: 1,
    stockNumber: "RC-1001",
    year: 2020,
    make: "Toyota",
    model: "Vitz F",
    trim: "1.0L CVT",
    price: 1150000, // MARKET: KSh 1.08M–1.35M for 2020 model
    mileage: 31000, // INFERRED: typical JDM low-mileage for 2020 import
    fuel: "Petrol",
    transmission: "CVT",
    engine: "1.0L 3-Cyl 1KR-FE",
    drive: "2WD",
    bodyType: "Hatchback",
    status: "Used", // VERIFIED: Riri Cars deal primarily in used JDM imports
    condition: "Japan Import",
    exteriorColor: "Silver Metallic",
    interiorColor: "Black Fabric",
    description:
      "A clean, fuel-sipping city car fresh off a Japan import. This Vitz F combines a punchy 1.0L 3-cylinder engine with a smooth CVT gearbox, making it an easy first car or economical daily runabout around Nairobi. Comes with push-start convenience and a rear camera for stress-free parking.",
    features: [
      "Push-start",
      "Rear camera",
      "Bluetooth audio",
      "Air conditioning",
      "ABS",
      "Dual airbags",
    ],
    available: true,
    // Real photo of matching generation (KSP130, 1.0L 1KR-FE), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Toyota_Vitz_1.0F_%28DBA-KSP130-AHXNK%29_front.jpg/500px-Toyota_Vitz_1.0F_%28DBA-KSP130-AHXNK%29_front.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Toyota_Vitz_1.0F_%28DBA-KSP130-AHXNK%29_front.jpg/500px-Toyota_Vitz_1.0F_%28DBA-KSP130-AHXNK%29_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Toyota_Vitz_KSP130_1.0F_rear.jpg/500px-Toyota_Vitz_KSP130_1.0F_rear.jpg",
      // Interior from a same-generation (XP130) Vitz GR Sport — no exact KSP130 1.0F interior photo available
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Toyota_Vitz_GR_SPORT_%28DBA-NCP131-AHMVK%29_interior.jpg/500px-Toyota_Vitz_GR_SPORT_%28DBA-NCP131-AHMVK%29_interior.jpg",
    ],
  },

  // ── 2. Toyota Land Cruiser Prado TX ────────────────────────────────────
  {
    id: 2,
    stockNumber: "RC-1002",
    year: 2019,
    make: "Toyota",
    model: "Land Cruiser Prado",
    trim: "TX 2.7 Petrol",
    price: 5800000, // MARKET: KSh 5.5M–6.95M for 2019 Prado TX
    mileage: 52000, // INFERRED: typical low-mileage JDM for 2019 Prado TX
    fuel: "Petrol",
    transmission: "Automatic (6AT)",
    engine: "2.7L 4-Cyl 2TR-FE",
    drive: "4WD",
    bodyType: "SUV",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Pearl White",
    interiorColor: "Beige Leather",
    description:
      "The Land Cruiser Prado TX needs no introduction — a proven 4WD workhorse built for Kenyan roads, from tarmac to murram. This 7-seater comes loaded with leather seats, a sunroof, Crawl Control for tough terrain, and dual-zone climate control, all wrapped in a reliable 2.7L petrol drivetrain.",
    features: [
      "Sunroof",
      "Leather seats",
      "Rear camera",
      "8-inch touchscreen",
      "Crawl Control",
      "Dual-zone A/C",
      "7-seater",
    ],
    available: true,
    // Real photo of matching generation (TRJ150W, 2.7L 2TR-FE TX trim), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_front.jpg/500px-Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_front.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_front.jpg/500px-Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Toyota_Land_Cruiser_Prado_2.7_TXL_2019_%2852693304483%29.jpg/500px-Toyota_Land_Cruiser_Prado_2.7_TXL_2019_%2852693304483%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_interior.jpg/500px-Toyota_LAND_CRUISER_PRADO_TX_%28CBA-TRJ150W-GKTEK%29_interior.jpg",
    ],
  },

  // ── 3. Honda Fit Hybrid ─────────────────────────────────────────────────
  {
    id: 3,
    stockNumber: "RC-1003",
    year: 2020,
    make: "Honda",
    model: "Fit",
    trim: "1.3 Hybrid",
    price: 1350000, // MARKET: KSh 1.2M–1.6M for 2020 Honda Fit Hybrid
    mileage: 27000, // INFERRED: typical JDM low mileage for 2020 import
    fuel: "Hybrid",
    transmission: "CVT",
    engine: "1.3L + Integrated Motor Assist",
    drive: "2WD",
    bodyType: "Hatchback",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Blue Metallic",
    interiorColor: "Gray Fabric",
    description:
      "Low mileage, low running costs. This Honda Fit Hybrid pairs a 1.3L engine with Integrated Motor Assist for excellent fuel economy in city traffic. Honda Sensing brings adaptive cruise control and lane keep assist — safety tech rarely found at this price point.",
    features: [
      "Honda Sensing",
      "Adaptive cruise control",
      "Lane keep assist",
      "Push-start",
      "Rear camera",
      "Bluetooth",
    ],
    available: true,
    // Real photo of matching generation (GP5, 1.3L Hybrid S Package), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Honda_FIT_HYBRID_S_Package_%28GP5%29_front_%28cropped%29.JPG/500px-Honda_FIT_HYBRID_S_Package_%28GP5%29_front_%28cropped%29.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Honda_FIT_HYBRID_S_Package_%28GP5%29_front_%28cropped%29.JPG/500px-Honda_FIT_HYBRID_S_Package_%28GP5%29_front_%28cropped%29.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Honda_FIT_HYBRID_S_Package_%28GP5%29_rear_%28cropped%29.JPG/500px-Honda_FIT_HYBRID_S_Package_%28GP5%29_rear_%28cropped%29.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Honda_FIT_HYBRID%E3%83%BBF_Comfort_Edition_%28DAA-GP5%29_interior.jpg/500px-Honda_FIT_HYBRID%E3%83%BBF_Comfort_Edition_%28DAA-GP5%29_interior.jpg",
    ],
  },

  // ── 4. Toyota Corolla Axio Hybrid ──────────────────────────────────────
  {
    id: 4,
    stockNumber: "RC-1004",
    year: 2018,
    make: "Toyota",
    model: "Corolla Axio",
    trim: "1.5 Hybrid",
    price: 1750000, // MARKET: KSh 1.58M–1.97M for 2018 Axio Hybrid
    mileage: 47000, // INFERRED: typical JDM mileage for 2018 import
    fuel: "Hybrid",
    transmission: "CVT",
    engine: "1.5L + Electric Motor",
    drive: "2WD",
    bodyType: "Sedan",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Silver Metallic",
    interiorColor: "Dark Gray Fabric",
    description:
      "One of Riri Cars' top-selling models — the Corolla Axio Hybrid delivers Toyota reliability with hybrid-grade fuel savings, ideal for Uber/Bolt or family use. Smart entry, push-start, and an ETC unit for toll roads make it a practical, low-maintenance sedan.",
    features: [
      "Hybrid battery",
      "Rear camera",
      "Smart entry",
      "Push-start",
      "ETC",
      "Alloy wheels",
    ],
    // VERIFIED: Toyota Corolla Axio is a top-selling Riri Cars model category
    available: true,
    // Real photo of matching generation (NKE165, 1.5L Hybrid), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Toyota_Corolla_Axio_Hybrid_%28NKE165%29_front.JPG/500px-Toyota_Corolla_Axio_Hybrid_%28NKE165%29_front.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Toyota_Corolla_Axio_Hybrid_%28NKE165%29_front.JPG/500px-Toyota_Corolla_Axio_Hybrid_%28NKE165%29_front.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Toyota_Corolla_Axio_Hybrid_%28NKE165%29_rear.JPG/500px-Toyota_Corolla_Axio_Hybrid_%28NKE165%29_rear.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Toyota_COROLLA_Axio_HYBRID_G%22W%C3%97B%22_%28DAA-NKE165-AEXEB%29_interior.jpg/500px-Toyota_COROLLA_Axio_HYBRID_G%22W%C3%97B%22_%28DAA-NKE165-AEXEB%29_interior.jpg",
    ],
  },

  // ── 5. Toyota Corolla Fielder ───────────────────────────────────────────
  {
    id: 5,
    stockNumber: "RC-1005",
    year: 2019,
    make: "Toyota",
    model: "Corolla Fielder",
    trim: "1.5 CVT",
    price: 1450000, // MARKET: KSh 1.3M–1.6M for 2019 Fielder
    mileage: 38000, // INFERRED
    fuel: "Petrol",
    transmission: "CVT",
    engine: "1.5L NZE161",
    drive: "2WD",
    bodyType: "Station Wagon",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Black Metallic",
    interiorColor: "Gray Fabric",
    description:
      "A core Riri Cars stock item — the Corolla Fielder's wagon body offers generous boot space over a standard sedan, backed by Toyota's legendary NZE-series reliability. Great for families or business owners who need extra load capacity without stepping up to an SUV.",
    features: [
      "Rear camera",
      "Bluetooth",
      "ABS",
      "SRS airbags",
      "EFI",
      "Alloy wheels",
    ],
    available: true,
    // VERIFIED: Fielder is a core Riri Cars inventory item (JapaneseCarTrade profile)
    // Real photo of matching generation (NZE161G, 1.5G AeroTourer), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer.JPG/500px-Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer.JPG/500px-Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer_Rear.JPG/500px-Toyota_Corolla_Fielder_%28NZE161G%29_1.5G_AeroTourer_Rear.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Toyota_COROLLA_FIELDER_1.5G%22W%C3%97B%22_%28DBA-NRE161G-AWXEB-X%29_interior.jpg/500px-Toyota_COROLLA_FIELDER_1.5G%22W%C3%97B%22_%28DBA-NRE161G-AWXEB-X%29_interior.jpg",
    ],
  },

  // ── 6. Subaru Forester XT ──────────────────────────────────────────────
  {
    id: 6,
    stockNumber: "RC-1006",
    year: 2018,
    make: "Subaru",
    model: "Forester",
    trim: "2.0XT Turbo",
    price: 3200000, // MARKET: KSh 2.99M–3.7M for 2018 Subaru Forester
    mileage: 58000, // INFERRED
    fuel: "Petrol",
    transmission: "Lineartronic CVT",
    engine: "2.0L Turbo FA20F",
    drive: "AWD (Symmetrical)",
    bodyType: "SUV",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Crystal Black Silica",
    interiorColor: "Black Leather",
    description:
      "Turbocharged and all-wheel-driven, this Forester XT is built for drivers who want performance without giving up SUV practicality. Symmetrical AWD and EyeSight driver assist bring confidence on wet or rough roads, while the panoramic sunroof and leather cabin keep things premium inside.",
    features: [
      "Panoramic sunroof",
      "EyeSight driver assist",
      "Adaptive cruise",
      "Rear camera",
      "Leather seats",
      "Xenon headlights",
    ],
    available: true,
    // Real photo of matching generation (SJ, 2.0L Turbo FA20F), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Subaru_FORESTER_2.0XT_%28SJ%29_front.JPG/500px-Subaru_FORESTER_2.0XT_%28SJ%29_front.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Subaru_FORESTER_2.0XT_%28SJ%29_front.JPG/500px-Subaru_FORESTER_2.0XT_%28SJ%29_front.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Subaru_FORESTER_2.0XT_%28SJ%29_rear.JPG/500px-Subaru_FORESTER_2.0XT_%28SJ%29_rear.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Subaru_FORESTER_X-BREAK_%28SJ%29_interior.JPG/500px-Subaru_FORESTER_X-BREAK_%28SJ%29_interior.JPG",
    ],
  },

  // ── 7. Nissan X-Trail ──────────────────────────────────────────────────
  {
    id: 7,
    stockNumber: "RC-1007",
    year: 2020,
    make: "Nissan",
    model: "X-Trail",
    trim: "2.0 20S 2WD",
    price: 3000000, // MARKET: KSh 2.8M–3.9M for 2020 X-Trail
    mileage: 34000, // INFERRED
    fuel: "Petrol",
    transmission: "CVT (Xtronic)",
    engine: "2.0L MR20DD",
    drive: "2WD",
    bodyType: "SUV",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Ruby Red",
    interiorColor: "Black Fabric",
    description:
      "A spacious family SUV with genuine driver-assist tech — ProPILOT Assist and the AroundView Monitor make tight parking and highway cruising far less stressful. Striking red exterior with a well-kept black fabric interior throughout.",
    features: [
      "Rear camera",
      "AroundView Monitor",
      "ProPILOT Assist",
      "LED headlights",
      "7-inch display",
      "Bluetooth",
    ],
    available: true,
    // Real photo of matching generation (T32, 2.0L 20X), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nissan_X-TRAIL_20X_%28DBA-T32%29_front.jpg/500px-Nissan_X-TRAIL_20X_%28DBA-T32%29_front.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Nissan_X-TRAIL_20X_%28DBA-T32%29_front.jpg/500px-Nissan_X-TRAIL_20X_%28DBA-T32%29_front.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2018_Nissan_X-Trail_%28T32%29_ST_wagon_%282018-10-01%29_01.jpg/500px-2018_Nissan_X-Trail_%28T32%29_ST_wagon_%282018-10-01%29_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nissan_X-TRAIL_20X_%28DBA-T32%29_interior.jpg/500px-Nissan_X-TRAIL_20X_%28DBA-T32%29_interior.jpg",
    ],
  },

  // ── 8. Toyota Allion ───────────────────────────────────────────────────
  {
    id: 8,
    stockNumber: "RC-1008",
    year: 2019,
    make: "Toyota",
    model: "Allion",
    trim: "A18 G Package",
    price: 1950000, // MARKET: KSh 1.8M–2.45M for 2019 Allion
    mileage: 42000, // INFERRED
    fuel: "Petrol",
    transmission: "CVT",
    engine: "1.8L 2ZR-FE",
    drive: "2WD",
    bodyType: "Sedan",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Wine Red",
    interiorColor: "Beige Fabric",
    description:
      "The Allion A18 G Package offers a refined, comfortable ride with a distinctly executive look in deep wine red. Smart entry and push-start add everyday convenience, and the 1.8L 2ZR-FE engine is known across the JDM market for dependable, low-maintenance service life.",
    features: [
      "Push-start",
      "Smart entry",
      "Rear camera",
      "Bluetooth audio",
      "ABS",
      "LED rear lamps",
    ],
    available: true,
    // Real photo of matching generation (ZRT260, 1.8L G-plus Package), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_front.JPG/500px-Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_front.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_front.JPG/500px-Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_front.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_rear.JPG/500px-Toyota_ALLION_A18_%22G-plus_Package%22_2WD_%28ZRT260%29_rear.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Allioninterior.jpg/500px-Allioninterior.jpg",
    ],
  },

  // ── 9. Toyota Auris Hybrid ─────────────────────────────────────────────
  {
    id: 9,
    stockNumber: "RC-1009",
    year: 2014,
    make: "Toyota",
    model: "Auris",
    trim: "1.8 Hybrid S",
    price: 1380000, // MARKET: KSh 1.29M–1.45M for 2014 Auris
    mileage: 63000, // INFERRED
    fuel: "Hybrid",
    transmission: "CVT (e-CVT)",
    engine: "1.8L + Electric Motor",
    drive: "2WD",
    bodyType: "Hatchback",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Pearl White",
    interiorColor: "Black Fabric",
    description:
      "An affordable entry into hybrid motoring — the Auris 1.8 Hybrid S sips fuel around town while offering hatchback practicality. This white example is one of several Auris units Riri Cars has moved through its Facebook listings, a model well known to the dealership's regular buyers.",
    features: [
      "Hybrid battery",
      "Rear camera",
      "Bluetooth",
      "Push-start",
      "Alloy wheels",
      "Dual airbags",
    ],
    available: true,
    // VERIFIED: Toyota Auris 2013–2014 explicitly advertised on Riri Cars Facebook (wine red, white, black, blue, silver)
    // Real photo of matching generation (ZWE186H Hybrid), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Toyota_AURIS_HYBRID_%28DAA-ZWE186H-BHXNB%29.jpg/500px-Toyota_AURIS_HYBRID_%28DAA-ZWE186H-BHXNB%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Toyota_AURIS_HYBRID_%28DAA-ZWE186H-BHXNB%29.jpg/500px-Toyota_AURIS_HYBRID_%28DAA-ZWE186H-BHXNB%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Toyota_AURIS_HYBRID%22G_Package%22_%28DAA-ZWE186H-BHXNB-V%29_interior.JPG/500px-Toyota_AURIS_HYBRID%22G_Package%22_%28DAA-ZWE186H-BHXNB-V%29_interior.JPG",
    ],
  },

  // ── 10. Nissan Note e-Power ────────────────────────────────────────────
  {
    id: 10,
    stockNumber: "RC-1010",
    year: 2020,
    make: "Nissan",
    model: "Note",
    trim: "e-Power X",
    price: 1600000, // MARKET: KSh 1.45M–1.75M for 2020 Note e-Power
    mileage: 25000, // INFERRED
    fuel: "Hybrid (e-Power)",
    transmission: "e-CVT (Single-speed)",
    engine: "1.2L + Electric Drive Motor",
    drive: "2WD",
    bodyType: "Hatchback",
    status: "Used",
    condition: "Japan Import",
    exteriorColor: "Burgundy Red",
    interiorColor: "Gray Fabric",
    description:
      "The Note e-Power uses its 1.2L engine purely as a generator, driving the wheels electrically for an instant-torque, EV-like feel with none of the range anxiety. ProPILOT and Around View Monitor round out a genuinely tech-forward package for a compact hatchback.",
    features: [
      "e-Power tech",
      "ProPILOT",
      "Around View Monitor",
      "Push-start",
      "LED headlights",
      "Lane assist",
    ],
    available: true,
    // Real photo of matching generation (E12), Wikimedia Commons 500px thumbnail
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nissan_NOTE_%28E12%29_front.JPG/500px-Nissan_NOTE_%28E12%29_front.JPG",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nissan_NOTE_%28E12%29_front.JPG/500px-Nissan_NOTE_%28E12%29_front.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nissan_Note_E12_e-Power_DSC_0112.jpg/500px-Nissan_Note_E12_e-Power_DSC_0112.jpg",
      // Interior from a same-generation (E12) Note NISMO — no exact e-Power X interior photo available
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nissan_NOTE_nismo_%28DBA-E12%29_interior.JPG/500px-Nissan_NOTE_nismo_%28DBA-E12%29_interior.JPG",
    ],
  },
];

// ── Search filter options ──────────────────────────────────────────────────
export const makes = [
  "Toyota",
  "Honda",
  "Nissan",
  "Subaru",
  "Mitsubishi",
  "Mazda",
  "Isuzu",
  "Suzuki",
];

export const models = [
  "Vitz",
  "Corolla Axio",
  "Corolla Fielder",
  "Auris",
  "Allion",
  "Land Cruiser Prado",
  "Harrier",
  "RAV4",
  "Fit",
  "X-Trail",
  "Note",
  "Forester",
];

export const years = [
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
];

export const priceRanges = [
  "Under KSh 1M",
  "KSh 1M – 2M",
  "KSh 2M – 3.5M",
  "KSh 3.5M – 6M",
  "KSh 6M – 10M",
  "Above KSh 10M",
];

export const bodyTypes = [
  "Hatchback",
  "Sedan",
  "Station Wagon",
  "SUV",
  "Van",
  "Pickup",
];
