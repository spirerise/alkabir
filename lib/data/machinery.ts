// Machinery data types

export interface MachinerySpecifications {
  [key: string]: string;
}

export interface Machinery {
  id: number;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  priceUnit: string;
  image: string;
  gallery: string[];
  specs: string[];
  available: boolean;
  rating: number;
  reviews: number;
  capacity: string;
  year: number;
  location: string;
  description: string;
  features: string[];
  specifications: MachinerySpecifications;
  weeklyPrice: number;
  monthlyPrice: number;
}

// Mock machinery data
export const allMachinery: Machinery[] = [
  {
    id: 1,
    slug: "perkins-500kva-diesel-generator",
    name: "Perkins 500 KVA Diesel Generator",
    brand: "Perkins",
    category: "Generators",
    price: 850,
    priceUnit: "day",
    image: "https://static.wixstatic.com/media/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg/v1/fill/w_480,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_875a033c0e6d4a14bd0c37103dbb3dff~mv2.jpg",
    gallery: [
      "https://www.gfepowerproducts.com/cdn/shop/products/GFE-Perkins-Diesel-Generator-550-kVA-_3.png?v=1623232496&width=2048",
      "https://5.imimg.com/data5/KU/ZO/PB/SELLER-7654175/500-kva-perkins-diesel-generator.jpg"
    ],
    specs: ["500 KVA", "Diesel Engine", "Silent Canopy"],
    available: true,
    rating: 4.9,
    reviews: 45,
    capacity: "500 KVA",
    year: 2023,
    location: "Dubai",
    description: "High-capacity Perkins diesel generator providing reliable 500 KVA power for large construction sites and industrial facilities. Features a sound-attenuated enclosure for silent operation.",
    features: [
      "Heavy-duty Perkins engine",
      "Weatherproof silent canopy",
      "Digital control panel",
      "Large fuel tank for extended run time",
      "Automatic voltage regulator"
    ],
    specifications: {
      powerOutput: "500 KVA / 400 kW",
      fuelType: "Diesel",
      engineModel: "Perkins 2506C-E15TAG1",
      phase: "3 Phase",
      frequency: "50 Hz",
      coolingSystem: "Water Cooled"
    },
    weeklyPrice: 5200,
    monthlyPrice: 18000
  },
  {
    id: 2,
    slug: "cummins-100kva-silent-generator",
    name: "Cummins 100 KVA Silent Generator",
    brand: "Cummins",
    category: "Generators",
    price: 350,
    priceUnit: "day",
    image: "https://static.wixstatic.com/media/37072f_27c93f4ac26f449fbaebcba6d03cbc93~mv2.png/v1/fill/w_480,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/37072f_27c93f4ac26f449fbaebcba6d03cbc93~mv2.png",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2022/6/BO/WS/TB/7431648/100-kva-cummins-silent-diesel-generator-500x500.jpg"
    ],
    specs: ["100 KVA", "Silent Type", "Fuel Efficient"],
    available: true,
    rating: 4.7,
    reviews: 32,
    capacity: "100 KVA",
    year: 2022,
    location: "Dubai",
    description: "Reliable Cummins 100 KVA generator, ideal for medium-sized projects and events. Known for its durability and low fuel consumption.",
    features: [
      "Cummins industrial engine",
      "Low noise emission",
      "Easy-to-use interface",
      "Compact design",
      "Safety shutdown features"
    ],
    specifications: {
      powerOutput: "100 KVA",
      fuelType: "Diesel",
      engineModel: "Cummins 6BTA5.9-G2",
      phase: "3 Phase",
      noiseLevel: "75 dB at 7m"
    },
    weeklyPrice: 2100,
    monthlyPrice: 7500
  },
  {
    id: 3,
    slug: "honda-20kva-portable-generator",
    name: "Honda 20 KVA Portable Generator",
    brand: "Honda",
    category: "Generators",
    price: 150,
    priceUnit: "day",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/1/483574414/VE/PB/MS/4202814/honda-petrol-generator-500x500.jpg",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZWXSM3sZFvjoyiwFmXeeaKsPgkyeeGxs9A&s"
    ],
    specs: ["20 KVA", "Portable", "Petrol Engine"],
    available: true,
    rating: 4.8,
    reviews: 18,
    capacity: "20 KVA",
    year: 2023,
    location: "Dubai",
    description: "Compact and powerful Honda generator, perfect for small tools and temporary power needs on-site.",
    features: [
      "Honda GX series engine",
      "Easy recoil start",
      "Circuit breaker protection",
      "Sturdy frame for protection",
      "Low oil alert"
    ],
    specifications: {
      powerOutput: "20 KVA",
      fuelType: "Petrol",
      startingSystem: "Electric/Recoil",
      weight: "150 kg"
    },
    weeklyPrice: 900,
    monthlyPrice: 3200
  },
  {
    id: 4,
    slug: "cat-10-ton-roller-compactor",
    name: "CAT 10 Ton Roller Compactor",
    brand: "Caterpillar",
    category: "Compactors",
    price: 600,
    priceUnit: "day",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20181005-28697-10109",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtDn4620kpx169mUuDcM1iC8vnjifnBIYkw&s"
    ],
    specs: ["10 Ton", "Vibratory Roller", "Smooth Drum"],
    available: true,
    rating: 4.9,
    reviews: 25,
    capacity: "10 Ton",
    year: 2021,
    location: "Dubai",
    description: "Heavy-duty 10-ton vibratory roller for soil and asphalt compaction. Delivers high compaction force for road construction.",
    features: [
      "High vibration frequency",
      "Comfortable operator station",
      "Excellent visibility",
      "Dual drum drive",
      "Easy maintenance access"
    ],
    specifications: {
      operatingWeight: "10,000 kg",
      drumWidth: "2134 mm",
      vibrationFrequency: "30-33 Hz",
      enginePower: "97 kW"
    },
    weeklyPrice: 3600,
    monthlyPrice: 12000
  },
  {
    id: 5,
    slug: "jcb-180kg-plate-compactor",
    name: "JCB 180 KG Plate Compactor",
    brand: "JCB",
    category: "Compactors",
    price: 120,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBq0NDFxgL6k_Vr0l8eMJN4jJrVo-ieG7Vkw&s",
    gallery: [
      "https://s.alicdn.com/@sc04/kf/A0d89dbad32624b49bee553388e6e0b125/Used-Hydraulic-VM-132-Vibrating-Plate-Compactor-100-HP-Single-Drum-Vibratory-Roller-Jcb-116-Soil-Compactor-for-Compaction-1135.jpg"
    ],
    specs: ["180 KG", "Forward/Reverse", "Petrol"],
    available: true,
    rating: 4.6,
    reviews: 14,
    capacity: "180 KG",
    year: 2022,
    location: "Dubai",
    description: "Versatile plate compactor for confined areas, trenches, and landscaping projects.",
    features: [
      "Reversible operation",
      "Vibration-damped handle",
      "Heavy-duty base plate",
      "Easy transport wheels",
      "Reliable JCB engine"
    ],
    specifications: {
      weight: "180 kg",
      plateSize: "700 x 500 mm",
      centrifugalForce: "30 kN",
      travelSpeed: "25 m/min"
    },
    weeklyPrice: 700,
    monthlyPrice: 2500
  },
  {
    id: 6,
    slug: "hilti-te-3000-jack-hammer",
    name: "Hilti TE 3000 Jack Hammer (20KG)",
    brand: "Hilti",
    category: "Air Compressors",
    price: 180,
    priceUnit: "day",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L146103_cropped.jpg",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm7W7TukrbrGkxAQM16ljgidk09F3ZwlO9A&s"],
    specs: ["20 KG", "Electric", "High Impact"],
    available: true,
    rating: 4.9,
    reviews: 56,
    capacity: "20 KG",
    year: 2023,
    location: "Dubai",
    description: "The ultimate electric jack hammer for heavy-duty floor demolition. Matches the performance of pneumatic tools.",
    features: [
      "Active Vibration Reduction (AVR)",
      "Brushless motor",
      "Detachable power cord",
      "Maintenance-free operation",
      "High demolition performance"
    ],
    specifications: {
      weight: "29.9 kg",
      singleImpactEnergy: "68 J",
      fullHammeringFrequency: "860 impacts/minute",
      triaxialVibration: "7 m/s"
    },
    weeklyPrice: 1000,
    monthlyPrice: 3500
  },
  {
    id: 7,
    slug: "diesel-concrete-mixture-500l",
    name: "Diesel Concrete Mixture 500L",
    brand: "Al-Kabir",
    category: "Concrete Equipment",
    price: 250,
    priceUnit: "day",
    image: "https://image.made-in-china.com/202f0j00ibrzpIutVoql/Diesel-Engine-500L-Portable-Cement-Mixer-Concrete-Mixing-Machine.jpg",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDgKnShsRLDZEcGUOkWvWuSwx2MKX1kXOcg&s"],
    specs: ["500 Liters", "Diesel Engine", "Heavy Duty"],
    available: true,
    rating: 4.5,
    reviews: 21,
    capacity: "500 Liters",
    year: 2022,
    location: "Dubai",
    description: "Large capacity concrete mixer with a robust diesel engine, suitable for remote sites without electricity.",
    features: [
      "Hydraulic tipping mechanism",
      "Heavy-duty mixing drum",
      "Towable chassis",
      "Easy-to-clean design",
      "Reliable diesel power"
    ],
    specifications: {
      drumCapacity: "500 Liters",
      mixedBatchOutput: "350 Liters",
      engineType: "Single Cylinder Diesel",
      weight: "850 kg"
    },
    weeklyPrice: 1500,
    monthlyPrice: 5000
  },
  {
    id: 8,
    slug: "generac-v20-tower-light",
    name: "Generac V20 Tower Light",
    brand: "Generac",
    category: "Lighting",
    price: 200,
    priceUnit: "day",
    image: "https://www.generators-direct.co.uk/wp-content/uploads/2021/12/Generac-v20k2-1.jpg",
    gallery: ["https://www.towerlight.com/wp-content/uploads/2021/06/V20-PRO-2021-4x240W-LED-lowered-495x550-1.png"],
    specs: ["4x320W LED", "8.5m Mast", "Diesel"],
    available: true,
    rating: 4.8,
    reviews: 15,
    capacity: "4 Lights",
    year: 2023,
    location: "Dubai",
    description: "Mobile lighting tower with high-efficiency LED lamps and a vertical mast for maximum site coverage.",
    features: [
      "Fuel-efficient diesel engine",
      "Vertical telescopic mast",
      "360-degree mast rotation",
      "Automatic start/stop timer",
      "Compact and easy to transport"
    ],
    specifications: {
      lampType: "LED",
      mastHeight: "8.5 m",
      fuelTankCapacity: "120 L",
      runtime: "160 hours"
    },
    weeklyPrice: 1200,
    monthlyPrice: 4000
  },
  {
    id: 9,
    slug: "aluminum-scaffolding-2m-set",
    name: "Aluminum Scaffolding 2m Set",
    brand: "Zamil",
    category: "Scaffolding",
    price: 80,
    priceUnit: "day",
    image: "https://ik.imagekit.io/mjs/images/thumbs/0006608_heavy-duty-2mm-aluminum-alloy-portable-scaffolding-working-mobile-tower-ladder_625.jpeg",
    gallery: ["https://buildingeasy.co.nz/10770-large_default/aluminum-scaffolding-2m-isa201.jpg"],
    specs: ["2m Length", "140cm Width", "Mobile"],
    available: true,
    rating: 4.7,
    reviews: 29,
    capacity: "250 kg",
    year: 2023,
    location: "Dubai",
    description: "Lightweight and easy-to-assemble aluminum scaffolding tower for indoor and outdoor maintenance work.",
    features: [
      "High-grade aluminum construction",
      "Lockable caster wheels",
      "Non-slip platforms",
      "Tool-free assembly",
      "Safety guardrails included"
    ],
    specifications: {
      platformHeight: "2.0 m",
      workingHeight: "4.0 m",
      material: "Aluminum Alloy",
      loadRating: "Class 3"
    },
    weeklyPrice: 450,
    monthlyPrice: 1500
  },
  {
    id: 10,
    slug: "hilti-dd-150-core-cutting-machine",
    name: "Hilti DD 150 Core Cutting Machine",
    brand: "Hilti",
    category: "Cutting Machines",
    price: 220,
    priceUnit: "day",
    image: "https://productdata.hilti.com/APQ_HC_f1200/L118373.jpg",
    gallery: ["https://productdata.hilti.com/APQ_HC_f1200/L118384.jpg",
      "https://productdata.hilti.com/APQ_HC_f1200/L118384_v1.jpg",
      "https://productdata.hilti.com/APQ_HC_f1200/L120021_cropped.jpg"
    ],
    specs: ["1 to 6 inch Bit", "Wet/Dry", "Electric"],
    available: true,
    rating: 4.9,
    reviews: 42,
    capacity: "150 mm",
    year: 2023,
    location: "Dubai",
    description: "Professional diamond core drilling system for heavy-duty coring in concrete and masonry.",
    features: [
      "High motor performance",
      "Easy to use with hand-held or rig-based",
      "Quick-release chuck",
      "Real-time performance display",
      "Dust and water management"
    ],
    specifications: {
      drillingRange: "12 - 162 mm",
      nominalInputPower: "2200 W",
      noLoadSpeed: "1st gear: 780 rpm",
      weight: "8.2 kg"
    },
    weeklyPrice: 1300,
    monthlyPrice: 4500
  },
  {
    id: 11,
    slug: "makita-steel-bending-machine",
    name: "Makita Steel Bending Machine",
    brand: "Makita",
    category: "Cutting Machines",
    price: 150,
    priceUnit: "day",
    image: "https://media.diy.com/is/image/KingfisherDigital/makita-dtr180zk-14v-18v-lxt-lithium-cordless-brushless-rebar-tying-tool-case~0088381859431_01c_MP?$MOB_PREV$&$width=600&$height=600",
    gallery: ["https://media.diy.com/is/image/KingfisherDigital/makita-dtr180zk-14v-18v-lxt-lithium-cordless-brushless-rebar-tying-tool-case~0088381859431_02c_MP?$MOB_PREV$&$width=600&$height=600"],
    specs: ["Up to 25mm", "Electric", "Portable"],
    available: true,
    rating: 4.6,
    reviews: 12,
    capacity: "25 mm",
    year: 2022,
    location: "Dubai",
    description: "Portable electric rebar bender for on-site steel reinforcement work. Fast and accurate bending.",
    features: [
      "Adjustable bending angle",
      "Foot pedal control",
      "Compact and portable",
      "High-torque motor",
      "Safety guard"
    ],
    specifications: {
      maxBendingDiameter: "25 mm",
      bendingAngle: "0 - 180 degrees",
      voltage: "220V",
      weight: "90 kg"
    },
    weeklyPrice: 900,
    monthlyPrice: 3000
  },
  {
    id: 12,
    slug: "husqvarna-floor-grinding-machine",
    name: "Husqvarna Floor Grinding Machine",
    brand: "Husqvarna",
    category: "Cleaning Equipment",
    price: 300,
    priceUnit: "day",
    image: "https://www.smartflooruk.com/wp-content/uploads/2024/10/Concrete-Grinder-Polisher-600x600.png",
    gallery: [],
    specs: ["Single Phase", "Diamond Grinding", "Dust Port"],
    available: true,
    rating: 4.8,
    reviews: 19,
    capacity: "280 mm",
    year: 2023,
    location: "Dubai",
    description: "Professional floor grinder for surface preparation, concrete grinding, and polishing.",
    features: [
      "Easy to use and transport",
      "Efficient dust collection",
      "Versatile grinding discs",
      "Adjustable handle",
      "Robust construction"
    ],
    specifications: {
      grindingWidth: "280 mm",
      ratedInputPower: "2.2 kW",
      grindingPressure: "35 kg",
      weight: "70 kg"
    },
    weeklyPrice: 1800,
    monthlyPrice: 6000
  },
  {
    id: 13,
    slug: "honda-petrol-concrete-vibrator",
    name: "Honda Petrol Concrete Vibrator",
    brand: "Honda",
    category: "Concrete Equipment",
    price: 90,
    priceUnit: "day",
    image: "https://toolz4industry.com/wp-content/uploads/2023/02/honda-concrete-vibrator-66-500x500.png",
    gallery: ["https://toolz4industry.com/wp-content/uploads/2023/02/honda-concrete-vibrator-68-500x500.png"],
    specs: ["6m Needle", "Petrol Engine", "High Frequency"],
    available: true,
    rating: 4.7,
    reviews: 31,
    capacity: "6 Meter",
    year: 2023,
    location: "Dubai",
    description: "Reliable petrol-powered concrete vibrator for removing air bubbles from freshly poured concrete.",
    features: [
      "Honda GX160 engine",
      "Quick-connect coupling",
      "Durable flexible shaft",
      "Protective frame",
      "High vibration output"
    ],
    specifications: {
      enginePower: "5.5 HP",
      shaftLength: "6 m",
      needleDiameter: "45 mm",
      vibrationFrequency: "12,000 vpm"
    },
    weeklyPrice: 550,
    monthlyPrice: 1800
  },
  {
    id: 14,
    slug: "wacker-neuson-power-trowel",
    name: "Wacker Neuson Power Trowel (Helicopter)",
    brand: "Wacker Neuson",
    category: "Concrete Equipment",
    price: 280,
    priceUnit: "day",
    image: "https://images.powerpac.co.nz/wp-content/uploads/2024/09/15182209/5000620040.jpg",
    gallery: ["https://www.redi2hire.com.au/wp-content/uploads/2020/07/csm_WN_MCT36_Combo01_700x466_a6d1308200.png" , "https://www.khengsun.com/wp-content/uploads/2016/12/4.-Wacker-Neuson-Gasoline-Walk-Behind-Trowel-CT36.png"],
    specs: ["36 inch", "Petrol", "Finishing Tool"],
    available: true,
    rating: 4.9,
    reviews: 22,
    capacity: "36 Inch",
    year: 2022,
    location: "Dubai",
    description: "High-performance power trowel for achieving a smooth, professional finish on concrete floors.",
    features: [
      "Adjustable blade pitch",
      "Centrifugal safety switch",
      "Balanced design for easy control",
      "Heavy-duty gearbox",
      "Foldable handle for transport"
    ],
    specifications: {
      trowelDiameter: "915 mm (36 in)",
      engine: "Honda GX200",
      speedRange: "60 - 125 rpm",
      weight: "83 kg"
    },
    weeklyPrice: 1600,
    monthlyPrice: 5500
  },
  {
    id: 15,
    slug: "miller-bobcat-250-welding-machine",
    name: "Miller Bobcat 250 Welding Machine",
    brand: "Miller",
    category: "Power Tools",
    price: 250,
    priceUnit: "day",
    image: "https://p.turbosquid.com/ts-thumb/n2/sB2UdS/Ogbsi0Ct/miller_1/jpg/1463176381/1920x1080/fit_q87/697681de5196a7e6a71bbcfa01cc3378dc996a57/miller_1.jpg",
    gallery: ["https://cdn11.bigcommerce.com/s-x3ki4mm/products/813/images/1111/Miller_welding_machine_bobcat250__21347.1465842103.380.500.png?c=2"],
    specs: ["250A", "Engine Driven", "Multi-Process"],
    available: true,
    rating: 4.8,
    reviews: 17,
    capacity: "250 Amps",
    year: 2023,
    location: "Dubai",
    description: "Engine-driven welder and generator, perfect for maintenance, repair, and construction work in the field.",
    features: [
      "Stick and TIG welding",
      "11,000 watts peak power",
      "Quiet operation",
      "Rugged enclosure",
      "Fuel gauge and hour meter"
    ],
    specifications: {
      weldingCurrent: "40 - 250 A",
      generatorPower: "11 kW",
      engine: "Kohler 23.5 HP",
      fuelType: "Petrol"
    },
    weeklyPrice: 1500,
    monthlyPrice: 5000
  },
  {
    id: 16,
    slug: "bosch-gws-22-steel-cutter",
    name: "Bosch GWS 22 Steel Cutter",
    brand: "Bosch",
    category: "Cutting Machines",
    price: 60,
    priceUnit: "day",
    image: "https://www.bosch-professional.com/pk/en/ocsmedia/50100-54/application-image/1434x828/angle-grinder-gws-22-230-h-0601882103.png",
    gallery: ["https://m.media-amazon.com/images/I/41NW7NUiKtL._AC_UF1000,1000_QL80_.jpg"],
    specs: ["9 inch", "2200W", "Electric"],
    available: true,
    rating: 4.7,
    reviews: 38,
    capacity: "230 mm",
    year: 2023,
    location: "Dubai",
    description: "Powerful large angle grinder for cutting and grinding steel, concrete, and stone.",
    features: [
      "High-performance motor",
      "Restart protection",
      "Vibration control handle",
      "Burst-proof guard",
      "Long service life"
    ],
    specifications: {
      ratedInputPower: "2200 W",
      discDiameter: "230 mm",
      noLoadSpeed: "6500 rpm",
      weight: "5.4 kg"
    },
    weeklyPrice: 350,
    monthlyPrice: 1200
  },
  {
    id: 17,
    slug: "makita-ga9020-big-grinder",
    name: "Makita GA9020 Big Grinder",
    brand: "Makita",
    category: "Power Tools",
    price: 55,
    priceUnit: "day",
    image: "https://toolsgard.pk/cdn/shop/files/51XvGYdyLZL._AC_SL1080.webp?v=1756296144",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTvmtyVWtNhcDweCovSrGqJ2_iCLB1INFIw&s" ,"https://cdn11.bigcommerce.com/s-elqhw6n0fn/images/stencil/1280x1280/products/2753/4998/GA9020__29202.1525608666.png?c=2"],
    specs: ["9 inch", "Heavy Duty", "Electric"],
    available: true,
    rating: 4.6,
    reviews: 24,
    capacity: "230 mm",
    year: 2022,
    location: "Dubai",
    description: "Industrial-grade angle grinder with outstanding durability and heat resistance.",
    features: [
      "Labyrinth construction seals motor",
      "Large trigger switch",
      "Rotatable gear housing",
      "Side handle for control",
      "Double insulation"
    ],
    specifications: {
      powerInput: "2200 W",
      wheelSize: "230 mm",
      speed: "6600 rpm",
      weight: "5.8 kg"
    },
    weeklyPrice: 320,
    monthlyPrice: 1100
  },
  {
    id: 18,
    slug: "altrad-interlock-cutter",
    name: "Altrad Interlock Cutter",
    brand: "Altrad",
    category: "Cutting Machines",
    price: 70,
    priceUnit: "day",
    image: "https://dccf75d8gej24.cloudfront.net/images/products/05/051719000/FE6355F0-698D-46DD-B09B-604909451165-large.jpg",
    gallery: ["https://dtwtools.co.uk/app/uploads/2017/03/6423_800_800.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIilL8y5F2Cl9cH0Hb87_mC60I5EB0qtmTQ&s"],
    specs: ["Manual", "Heavy Duty", "Block Splitter"],
    available: true,
    rating: 4.5,
    reviews: 11,
    capacity: "330 mm",
    year: 2022,
    location: "Dubai",
    description: "Manual block splitter for precise cutting of interlock tiles and paving stones.",
    features: [
      "Hardened steel blades",
      "Easy height adjustment",
      "Spring-loaded tables",
      "Wheels for mobility",
      "Long lever for easy cutting"
    ],
    specifications: {
      maxCuttingLength: "330 mm",
      maxCuttingHeight: "120 mm",
      weight: "45 kg",
      operation: "Manual"
    },
    weeklyPrice: 400,
    monthlyPrice: 1400
  },
  {
    id: 19,
    slug: "dewalt-dwe7492-wood-cutter",
    name: "DeWalt DWE7492 Wood Cutter",
    brand: "DeWalt",
    category: "Cutting Machines",
    price: 130,
    priceUnit: "day",
    image: "https://m.media-amazon.com/images/I/61L4cczznyL._AC_UF350,350_QL80_.jpg",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiAQ3t09qF_KnOQ7xaDUxWwBDOEgZgUlx5Q&s" ,"https://i.ytimg.com/vi/Ge0RFiNWlO0/maxresdefault.jpg" ],
    specs: ["10 inch", "Table Saw", "Portable"],
    available: true,
    rating: 4.8,
    reviews: 27,
    capacity: "250 mm",
    year: 2023,
    location: "Dubai",
    description: "High-precision table saw for wood cutting, featuring a large rip capacity and portable design.",
    features: [
      "Rack and pinion fence system",
      "Powerful 2000W motor",
      "Cast table top design",
      "Overload protection",
      "Quick bevel lock"
    ],
    specifications: {
      bladeDiameter: "250 mm",
      maxRipCapacity: "825 mm",
      noLoadSpeed: "4800 rpm",
      weight: "26.5 kg"
    },
    weeklyPrice: 750,
    monthlyPrice: 2600
  },
  {
    id: 20,
    slug: "hilti-te-70-combihammer-drill",
    name: "Hilti TE 70 Combihammer Drill",
    brand: "Hilti",
    category: "Drills",
    price: 110,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZAujB1cdD-AZqKhzbM5OGx36bOE8fePKuw&s",
    gallery: ["https://cdn.prod.website-files.com/66aa90f94c61322977609d49/66aa90f94c6132297760a254_TE70-AVR-Application2.jpg"],
    specs: ["SDS Max", "Hammer/Drill", "Electric"],
    available: true,
    rating: 4.9,
    reviews: 49,
    capacity: "45 mm",
    year: 2023,
    location: "Dubai",
    description: "Powerful SDS Max combihammer for heavy-duty drilling and chiseling in concrete.",
    features: [
      "High speed for maximum productivity",
      "Active Vibration Reduction (AVR)",
      "Ruggedly built for long life",
      "Safety clutch",
      "Dust removal system compatible"
    ],
    specifications: {
      impactEnergy: "11.5 J",
      hammerDrillingRange: "12 - 45 mm",
      rotationSpeed: "360 rpm",
      weight: "8.3 kg"
    },
    weeklyPrice: 650,
    monthlyPrice: 2200
  },
  {
    id: 21,
    slug: "bosch-gsr-18v-battery-drill",
    name: "Bosch GSR 18V Battery Drill",
    brand: "Bosch",
    category: "Drills",
    price: 45,
    priceUnit: "day",
    image: "https://www.toolsmart.pk/cdn/shop/products/gsr18vec.jpg?v=1606581534",
    gallery: ["https://www.bosch-pt.com.sg/sg/en/ocsmedia/316073-54/scope-of-supply-image/1434x828/cordless-drill-driver-gsr-18v-50-06019h5082.png"],
    specs: ["18V", "Cordless", "Brushless"],
    available: true,
    rating: 4.7,
    reviews: 62,
    capacity: "13 mm",
    year: 2023,
    location: "Dubai",
    description: "Compact and powerful cordless drill/driver for versatile applications on-site.",
    features: [
      "Brushless motor technology",
      "Kickback control",
      "Ergonomic design",
      "LED work light",
      "Fast charging batteries"
    ],
    specifications: {
      voltage: "18 V",
      maxTorque: "63 Nm",
      chuckCapacity: "13 mm",
      weight: "1.5 kg"
    },
    weeklyPrice: 250,
    monthlyPrice: 850
  },
  {
    id: 22,
    slug: "milwaukee-m18-fuel-impact-wrench",
    name: "Milwaukee M18 FUEL Impact Wrench",
    brand: "Milwaukee",
    category: "Power Tools",
    price: 75,
    priceUnit: "day",
    image: "https://djd1xqjx2kdnv.cloudfront.net/photos/33/85/460058_21522_XL.jpg",
    gallery: ["https://www.milwaukeetool.co.nz/dw/image/v2/BCSS_PRD/on/demandware.static/-/Sites-mwt-master-catalog/default/dw33f262e0/Powertools/Impacts-Fastening/M18FIW2F12-0/M18FIW2F12-0_APP_13.png?sw=593&sh=593" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiz6TcyNXWQf85R_Xi29bbyhgxTFlPpNseg&s"],
    specs: ["1/2 inch", "High Torque", "Cordless"],
    available: true,
    rating: 4.9,
    reviews: 34,
    capacity: "1898 Nm",
    year: 2023,
    location: "Dubai",
    description: "Industry-leading high torque impact wrench for heavy-duty fastening and removal.",
    features: [
      "POWERSTATE brushless motor",
      "REDLINK PLUS intelligence",
      "4-mode drive control",
      "LED light",
      "Friction ring design"
    ],
    specifications: {
      maxTorque: "1898 Nm",
      nutBustingTorque: "2033 Nm",
      voltage: "18 V",
      weight: "3.3 kg"
    },
    weeklyPrice: 450,
    monthlyPrice: 1500
  },
  {
    id: 23,
    slug: "makita-ub1103-air-blower",
    name: "Makita UB1103 Air Blower",
    brand: "Makita",
    category: "Power Tools",
    price: 35,
    priceUnit: "day",
    image: "https://m.media-amazon.com/images/I/71ZgvUoPKJL._AC_SL1500_.jpg",
    gallery: ["https://m.media-amazon.com/images/I/71zVlXCCKqL._AC_SL1500_.jpg" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud0SqMEy7nSIjul8t0uObJq7soqKihlkcfQ&s"],
    specs: ["Electric", "Variable Speed", "Dust Bag"],
    available: true,
    rating: 4.5,
    reviews: 28,
    capacity: "4.1 m/min",
    year: 2023,
    location: "Dubai",
    description: "Handheld electric blower for cleaning dust and debris from work areas and machinery.",
    features: [
      "Variable speed control",
      "Ergonomic handle",
      "Vacuum function",
      "Large trigger switch",
      "Self-standing design"
    ],
    specifications: {
      powerInput: "600 W",
      airVolume: "4.1 m/min",
      airPressure: "5.7 kPa",
      weight: "2.0 kg"
    },
    weeklyPrice: 200,
    monthlyPrice: 650
  },
  {
    id: 24,
    slug: "karcher-nt-70-2-vacuum-cleaner",
    name: "Karcher NT 70/2 Industrial Vacuum",
    brand: "Karcher",
    category: "Cleaning Equipment",
    price: 120,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEEyolRmue_f1ylgvzzZz694mspDKhTtkUQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-x9mwelCMKvLmzAcFvzyKBRJUFt9AjFBNBg&s"],
    specs: ["70 Liters", "Wet/Dry", "Dual Motor"],
    available: true,
    rating: 4.8,
    reviews: 23,
    capacity: "70 Liters",
    year: 2022,
    location: "Dubai",
    description: "Large capacity wet and dry industrial vacuum cleaner with two powerful motors for heavy-duty cleaning.",
    features: [
      "Integrated drain hose",
      "Robust bumper",
      "Large wheels for mobility",
      "High suction power",
      "Easy filter access"
    ],
    specifications: {
      containerCapacity: "70 Liters",
      airFlowRate: "2 x 74 l/s",
      vacuum: "254 mbar",
      ratedInputPower: "2400 W"
    },
    weeklyPrice: 700,
    monthlyPrice: 2400
  },
  {
    id: 25,
    slug: "honda-wb30xh-water-pump",
    name: "Honda WB30XH Water Pump",
    brand: "Honda",
    category: "Pumps",
    price: 100,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTE16Bm1hc6LASDoFg3wWpwcmvYPwxxAenzQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEKXzLPtzsDJvvuNeOTpldyTetFwmWQNCyA&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnQTq-s5AKzluSHQePe1KWCGz-plAnNcYNg&s"],
    specs: ["3 inch", "Petrol", "High Flow"],
    available: true,
    rating: 4.7,
    reviews: 35,
    capacity: "1100 L/min",
    year: 2023,
    location: "Dubai",
    description: "High-volume 3-inch water pump powered by a reliable Honda engine, ideal for dewatering and irrigation.",
    features: [
      "Honda GX160 engine",
      "Cast iron volute and impeller",
      "Full frame protection",
      "Easy start",
      "High discharge capacity"
    ],
    specifications: {
      inletOutletDiameter: "80 mm (3 in)",
      maxDischarge: "1100 L/min",
      maxHead: "23 m",
      fuelTankCapacity: "3.1 L"
    },
    weeklyPrice: 600,
    monthlyPrice: 2000
  },
  {
    id: 26,
    slug: "ridgid-1450-pressure-testing-pump",
    name: "Ridgid 1450 Pressure Testing Pump",
    brand: "Ridgid",
    category: "Pumps",
    price: 85,
    priceUnit: "day",
    image: "https://m.media-amazon.com/images/I/61QCXrdzGdL._AC_UF894,1000_QL80_.jpg",
    gallery: ["https://images.squarespace-cdn.com/content/v1/5420759de4b000f168035331/1412102848815-C4A3Z9WEJWRQNIZTQDYR/1450+Left_72dpi.jpg" , "https://tiendahenca.com/cdn/shop/files/bomba-para-pruebas-de-presion-1450-ridgid-178994_1024x1024.jpg?v=1722964737"],
    specs: ["Manual", "725 PSI", "Plumbing Tool"],
    available: true,
    rating: 4.6,
    reviews: 12,
    capacity: "50 Bar",
    year: 2022,
    location: "Dubai",
    description: "Manual hydraulic pressure testing pump for testing leaks in heating and oil systems, and small bore pipelines.",
    features: [
      "Dual valve system",
      "Stainless steel piston",
      "Large capacity tank",
      "Easy to read gauge",
      "Lightweight design"
    ],
    specifications: {
      maxPressure: "50 bar (725 psi)",
      tankCapacity: "13.5 Liters",
      connection: "1/2 inch BSPP",
      weight: "6.4 kg"
    },
    weeklyPrice: 500,
    monthlyPrice: 1600
  },
  {
    id: 27,
    slug: "zamil-12m-aluminum-ladder",
    name: "Zamil 12 Meter Aluminum Ladder",
    brand: "Zamil",
    category: "Ladders",
    price: 50,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwuDyO69i0SAZSBdQE42_4Q_4kEWoOELmXg&s",
    gallery: ["https://25south.co.za/cdn/shop/files/61wIKxj19oL._SL1500_700x700.jpg?v=1687796763" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSme5g6ZVELlhoRcYVnRATSJt0CPj30BuB6mQ&s"],
    specs: ["12 Meter", "Extension", "Aluminum"],
    available: true,
    rating: 4.5,
    reviews: 41,
    capacity: "150 kg",
    year: 2023,
    location: "Dubai",
    description: "Heavy-duty aluminum extension ladder for high-reach maintenance and construction tasks.",
    features: [
      "Slip-resistant rungs",
      "Heavy-duty pulley and rope",
      "Non-marring end caps",
      "Secure locking mechanism",
      "Lightweight yet strong"
    ],
    specifications: {
      maxExtendedLength: "12 m",
      closedLength: "6.5 m",
      material: "Aluminum",
      loadCapacity: "150 kg"
    },
    weeklyPrice: 300,
    monthlyPrice: 1000
  },
  {
    id: 28,
    slug: "stihl-ms-250-chain-saw",
    name: "Stihl MS 250 Chain Saw",
    brand: "Stihl",
    category: "Landscaping",
    price: 95,
    priceUnit: "day",
    image: "https://russopower.com/cdn/shop/files/MS250_act_1007_r1_1024x683.jpg?v=1764534123",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ClIKtVwd76vwWXyTDimjtPCeR54zD5HGjA&s" ,"https://i.ytimg.com/vi/iJIb1FJrmUA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDx28vultAPk1P60VBWUJi5zEVx4Q" ],
    specs: ["18 inch Bar", "Petrol", "High Power"],
    available: true,
    rating: 4.8,
    reviews: 19,
    capacity: "45.4 cc",
    year: 2023,
    location: "Dubai",
    description: "Powerful and lightweight chainsaw for tree felling, firewood cutting, and landscaping.",
    features: [
      "Easy2Start system",
      "Anti-vibration system",
      "Tool-less fuel caps",
      "Side-access chain tensioner",
      "High power-to-weight ratio"
    ],
    specifications: {
      displacement: "45.4 cc",
      enginePower: "2.3 kW",
      guideBarLength: "45 cm (18 in)",
      weight: "4.6 kg"
    },
    weeklyPrice: 550,
    monthlyPrice: 1800
  },
  {
    id: 29,
    slug: "husqvarna-525lk-trimming-machine",
    name: "Husqvarna 525LK Trimming Machine",
    brand: "Husqvarna",
    category: "Landscaping",
    price: 65,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCCRzNGwyqJah_5BdAIZZJ-tptb-WyExRLA&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Jph6yjn8PDjPpjdsMsDlP0S8Gq-G3xEGlQ&s" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FfTahXrx2hQnRWYdLMfdrnXSnzm2fvPipg&s"],
    specs: ["Petrol", "Multi-Tool", "Professional"],
    available: true,
    rating: 4.7,
    reviews: 14,
    capacity: "25.4 cc",
    year: 2023,
    location: "Dubai",
    description: "Professional-grade grass trimmer with a detachable shaft for various landscaping attachments.",
    features: [
      "X-Torq engine",
      "Intuitive controls",
      "Auto return stop switch",
      "Comfortable harness",
      "Easy attachment swap"
    ],
    specifications: {
      displacement: "25.4 cc",
      powerOutput: "1.0 kW",
      weight: "4.5 kg",
      fuelTankCapacity: "0.51 L"
    },
    weeklyPrice: 400,
    monthlyPrice: 1300
  },
  {
    id: 30,
    slug: "makita-ddg460-earth-auger",
    name: "Makita DDG460 Earth Auger",
    brand: "Makita",
    category: "Landscaping",
    price: 140,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0Q-Pq0RRLyKejDyIL_6bRLG9KzJQbKk1Tg&s",
    gallery: ["https://i.ytimg.com/vi/bXLwgcbUTOw/maxresdefault.jpg" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyab_DtXB1aC2zzn2w5z8lPOt8EtivBBewg&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkw-GArHSLVFINTufMQzhPnz5B-loJ9aoXWg&s" ],
    specs: ["36V (18V x 2)", "Cordless", "High Torque"],
    available: true,
    rating: 4.8,
    reviews: 11,
    capacity: "200 mm Bit",
    year: 2023,
    location: "Dubai",
    description: "Cordless earth auger for drilling holes in sand and soil for fencing and planting.",
    features: [
      "Brushless motor",
      "Automatic Torque Drive Technology",
      "Reverse switch",
      "Dual LED lights",
      "Variable speed trigger"
    ],
    specifications: {
      voltage: "36 V",
      maxDrillingCapacity: "200 mm",
      noLoadSpeed: "0 - 1400 rpm",
      weight: "7.3 kg"
    },
    weeklyPrice: 850,
    monthlyPrice: 2800
  },
  {
    id: 31,
    slug: "panasonic-industrial-exhaust-fan",
    name: "Panasonic Industrial Exhaust Fan",
    brand: "Panasonic",
    category: "Construction Site",
    price: 40,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs751W1SYv9fYm8zuS24I2ED3AA8fS_yIg8g&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW-NtkXyVZ-dK2yKnAwzqLp6b84Bduza7Dg&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8U5vCOJL8b3SB9hcQLj5vN55A2HIn0NA9g&s"],
    specs: ["24 inch", "High Volume", "Electric"],
    available: true,
    rating: 4.6,
    reviews: 16,
    capacity: "5000 CFM",
    year: 2022,
    location: "Dubai",
    description: "Heavy-duty industrial exhaust fan for ventilation and air circulation on construction sites.",
    features: [
      "High-efficiency motor",
      "Durable steel blades",
      "Safety grill",
      "Easy mounting",
      "Low noise operation"
    ],
    specifications: {
      fanDiameter: "600 mm (24 in)",
      airVolume: "8500 m/h",
      powerInput: "250 W",
      voltage: "220V"
    },
    weeklyPrice: 240,
    monthlyPrice: 800
  },
  {
    id: 32,
    slug: "bosch-gst-150-jigsaw-machine",
    name: "Bosch GST 150 Jigsaw Machine",
    brand: "Bosch",
    category: "Power Tools",
    price: 40,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQEn9O1bzzyOFqaVJSgDbEUgVDPXkp27scg&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdJNpkuK4HmsHVQiONUdv0iGtT6Raw-wzdw&s" , "https://powerhouseexpress.com.pk/cdn/shop/files/bosch-gst700-jigsaw.webp?v=1746035112" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-5cUpkSERUU7fTUyMtDAPrS3cgnzWFvqww&ss"],
    specs: ["780W", "Orbital Action", "Electric"],
    available: true,
    rating: 4.7,
    reviews: 33,
    capacity: "150 mm Wood",
    year: 2023,
    location: "Dubai",
    description: "The most powerful jigsaw in its price class, ideal for curved and straight cuts in various materials.",
    features: [
      "High power reserves",
      "Tool-free blade change system",
      "Ergonomic grip",
      "4-stage orbital action",
      "Dust blower function"
    ],
    specifications: {
      ratedInputPower: "780 W",
      strokeRate: "500 - 3100 spm",
      cuttingDepthWood: "150 mm",
      weight: "2.6 kg"
    },
    weeklyPrice: 240,
    monthlyPrice: 800
  },
  {
    id: 33,
    slug: "rubi-tz-1300-tile-cutter",
    name: "Rubi TZ-1300 Tile Cutter",
    brand: "Rubi",
    category: "Cutting Machines",
    price: 90,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q1qEeen3mdaWjkMChrY6g0qZ9pINjzMdTg&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BiN0jGqbQG0AwmJircLl1IFx-Vwhaxo1XQ&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Xu6Fi8TFcNeEb3boUTwQxRj_1EX0mUR1fA&s" , "https://cdn11.bigcommerce.com/s-jgbxwr3554/images/stencil/original/products/184329/390151/RUB17953_2__03525.1709310175.jpg?c=1"],
    specs: ["1300 mm", "Manual", "Professional"],
    available: true,
    rating: 4.9,
    reviews: 15,
    capacity: "1300 mm",
    year: 2023,
    location: "Dubai",
    description: "Advanced manual tile cutter for large format tiles, featuring a powerful breaking system.",
    features: [
      "1500 kg breaking power",
      "One-hand operation",
      "Swivel square for angle cuts",
      "Lateral stop for repetitive cuts",
      "Transport wheels"
    ],
    specifications: {
      maxCuttingLength: "1300 mm",
      maxTileThickness: "21 mm",
      breakingPower: "1500 kg",
      weight: "27 kg"
    },
    weeklyPrice: 550,
    monthlyPrice: 1800
  },
  {
    id: 34,
    slug: "makita-bo5041-sanding-machine",
    name: "Makita BO5041 Sanding Machine",
    brand: "Makita",
    category: "Power Tools",
    price: 35,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1z_2MXk1_Ligi44ojWVlr1u58St4pPODEw&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg19HVtfuvPk3Sl-f9yDkNC6uO_mbN5NxNsg&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwKy9EQEgJSDgdT_XLzD_xpKeaE7keHq04Q&s"],
    specs: ["5 inch", "Random Orbit", "Electric"],
    available: true,
    rating: 4.6,
    reviews: 21,
    capacity: "125 mm",
    year: 2023,
    location: "Dubai",
    description: "Random orbit sander with variable speed control for smooth and fast sanding.",
    features: [
      "Variable speed dial",
      "Ergonomic front handle",
      "Large trigger switch",
      "Efficient dust collection",
      "Pad brake for safety"
    ],
    specifications: {
      powerInput: "300 W",
      padDiameter: "125 mm",
      orbitsPerMinute: "4000 - 12000 opm",
      weight: "1.4 kg"
    },
    weeklyPrice: 200,
    monthlyPrice: 650
  },
  {
    id: 35,
    slug: "perkins-350kva-diesel-generator",
    name: "Perkins 350 KVA Diesel Generator",
    brand: "Perkins",
    category: "Generators",
    price: 650,
    priceUnit: "day",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/C10574195?$cc-g$&fmt=pjpeg",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqLDIFroYSwq30sMMdCYPA4jIbNVn7ts9zFg&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv28GRMQzYJEOUWUxSfmpfGSXfPUPRqhlVsQ&s"],
    specs: ["350 KVA", "Diesel", "Silent"],
    available: true,
    rating: 4.8,
    reviews: 29,
    capacity: "350 KVA",
    year: 2022,
    location: "Dubai",
    description: "Reliable 350 KVA Perkins generator for medium to large industrial power requirements.",
    features: [
      "Perkins 2206C engine",
      "Soundproof enclosure",
      "Deep Sea control panel",
      "Internal fuel tank",
      "Battery charger included"
    ],
    specifications: {
      powerOutput: "350 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 4000,
    monthlyPrice: 14000
  },
  {
    id: 36,
    slug: "cummins-60kva-silent-generator",
    name: "Cummins 60 KVA Silent Generator",
    brand: "Cummins",
    category: "Generators",
    price: 280,
    priceUnit: "day",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/2/JJ/KI/VV/123798854/cummins-silent-diesel-generator.jpg",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqpklb3O6a2CVA9cllGr4XwWJ2RLneCxr0g&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCi299fdNgGtvbV4ZxHa8y4yvymaJsTjvxg&s"],
    specs: ["60 KVA", "Silent", "Diesel"],
    available: true,
    rating: 4.7,
    reviews: 18,
    capacity: "60 KVA",
    year: 2023,
    location: "Dubai",
    description: "Compact 60 KVA Cummins generator, ideal for small sites and backup power.",
    features: [
      "Cummins 4BTA engine",
      "Low noise canopy",
      "Digital controller",
      "Easy maintenance",
      "Fuel efficient"
    ],
    specifications: {
      powerOutput: "60 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      noiseLevel: "72 dB at 7m"
    },
    weeklyPrice: 1700,
    monthlyPrice: 6000
  },
  {
    id: 37,
    slug: "jcb-5-ton-roller-compactor",
    name: "JCB 5 Ton Roller Compactor",
    brand: "JCB",
    category: "Compactors",
    price: 450,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_0M0s2fhe9BbvR5c5UF8HbnKXxKjrixlgg&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBVwpa2UKB_dEuRg3NWhgx4PPgWTzrmAAjQ&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfPZP8inLROUgDHWfEq7fkfw2ziAOuRSr5g&s"],
    specs: ["5 Ton", "Vibratory", "Smooth Drum"],
    available: true,
    rating: 4.8,
    reviews: 13,
    capacity: "5 Ton",
    year: 2022,
    location: "Dubai",
    description: "Medium-sized vibratory roller for soil compaction in residential and commercial projects.",
    features: [
      "High compaction performance",
      "Excellent maneuverability",
      "Comfortable operator seat",
      "Simple controls",
      "Robust JCB engine"
    ],
    specifications: {
      operatingWeight: "5,000 kg",
      drumWidth: "1500 mm",
      vibrationFrequency: "35 Hz",
      enginePower: "55 kW"
    },
    weeklyPrice: 2800,
    monthlyPrice: 9500
  },
  {
    id: 38,
    slug: "honda-30kg-plate-compactor",
    name: "Honda 30 KG Plate Compactor",
    brand: "Honda",
    category: "Compactors",
    price: 80,
    priceUnit: "day",
    image: "https://image.made-in-china.com/202f0j00HuLGKprWqYkc/C90-Heavy-Duty-Plate-Compactor-with-Honda-Robin-Engine.webp",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKQLyFi3mLTBAq4GIZimbWgp19KbXqLeD5g&s" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8FHRT2xZiZd1_HOO2A6SwncnKmtMj3FIng&s"
    ],
    specs: ["30 KG", "Petrol", "Lightweight"],
    available: true,
    rating: 4.5,
    reviews: 9,
    capacity: "30 KG",
    year: 2023,
    location: "Dubai",
    description: "Ultra-lightweight plate compactor for small repairs and tight spaces.",
    features: [
      "Honda GX100 engine",
      "Foldable handle",
      "Easy to lift",
      "Durable base plate",
      "Low vibration to operator"
    ],
    specifications: {
      weight: "30 kg",
      plateSize: "430 x 300 mm",
      centrifugalForce: "8 kN",
      fuelType: "Petrol"
    },
    weeklyPrice: 480,
    monthlyPrice: 1600
  },
  {
    id: 39,
    slug: "bosch-gsh-11-vc-jack-hammer",
    name: "Bosch GSH 11 VC Jack Hammer (13KG)",
    brand: "Bosch",
    category: "Air Compressors",
    price: 130,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbO9FT-dIEkgRTZVBC7e0eoKyzN4_w5YUKHg&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbTZxPTGo_Og8huGJb6rW-fDMhVB2MkgpLg&s" , "https://5.imimg.com/data5/BL/JT/OT/GLADMIN-3061/bosch-gsh-11-vc-demolition-hammer-11-4-kg-1700-w.jpg"],
    specs: ["13 KG", "SDS Max", "Vibration Control"],
    available: true,
    rating: 4.8,
    reviews: 26,
    capacity: "13 KG",
    year: 2023,
    location: "Dubai",
    description: "Powerful 13kg demolition hammer with vibration control for comfortable long-term use.",
    features: [
      "Best power-to-weight ratio",
      "Vibration Control",
      "Long service life",
      "Adjustable impact force",
      "Service display"
    ],
    specifications: {
      impactEnergy: "23 J",
      impactRate: "900 - 1700 bpm",
      ratedInputPower: "1700 W",
      weight: "11.4 kg"
    },
    weeklyPrice: 750,
    monthlyPrice: 2600
  },
  {
    id: 40,
    slug: "makita-hm0870c-jack-hammer",
    name: "Makita HM0870C Jack Hammer (7KG)",
    brand: "Makita",
    category: "Air Compressors",
    price: 90,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_ipz3P8zjj77R1ESmrsSxyF5Q9gV2SQGPw&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLlL1o7jwHjb5m2-wNTladFUmHOaYlXRShw&s" , "https://images.offerup.com/YiEgxZa71vyZveVjtgf1x94-vz8=/750x1000/7ea1/7ea1f6d3e43344ffb13fd6413dfdf7e0.jpg" , "https://www.powertoolsdirect.com/media/catalog/product/m/a/makita-hm0870c-sds-max-demolition-hammer-240v-0088381605311_1.jpg?width=670&height=670&store=storeview_ptd&image-type=image"],
    specs: ["7 KG", "SDS Max", "Compact"],
    available: true,
    rating: 4.7,
    reviews: 19,
    capacity: "7 KG",
    year: 2023,
    location: "Dubai",
    description: "Compact and lightweight demolition hammer for wall chasing and light demolition work.",
    features: [
      "Variable speed control",
      "Soft start",
      "Constant speed control",
      "Easy-to-operate slide switch",
      "12 bit angle settings"
    ],
    specifications: {
      impactEnergy: "7.6 J",
      impactRate: "1100 - 2650 bpm",
      ratedInputPower: "1100 W",
      weight: "5.1 kg"
    },
    weeklyPrice: 550,
    monthlyPrice: 1800
  },
  {
    id: 41,
    slug: "perkins-350kva-diesel-generator",
    name: "Perkins 350 KVA Diesel Generator",
    brand: "Perkins",
    category: "Diesel Generators",
    price: 650,
    priceUnit: "day",
    image: "https://waylittetechnologies.com/wp-content/uploads/2019/01/NEW_300kVA-Diesel-Generator-Perkins.jpg",
    gallery: ["https://s7d2.scene7.com/is/image/Caterpillar/C10574195?$cc-g$&fmt=pjpeg"],
    specs: ["350 KVA", "Diesel Engine", "Heavy Duty"],
    available: true,
    rating: 4.8,
    reviews: 24,
    capacity: "350 KVA",
    year: 2023,
    location: "Dubai",
    description: "High-performance Perkins diesel generator suitable for industrial and commercial backup power.",
    features: ["Fuel efficient", "Digital controller", "Weatherproof enclosure"],
    specifications: {
      powerOutput: "350 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 4000,
    monthlyPrice: 14000
  },
  {
    id: 42,
    slug: "cummins-250kva-diesel-generator",
    name: "Cummins 250 KVA Diesel Generator",
    brand: "Cummins",
    category: "Diesel Generators",
    price: 500,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSyI5d_stJMG9cakVFW8htjmTxuq13CGuuw&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZevhN2VK5FQ7O1PgoPScAHmB8aq9u56V6aw&s"],
    specs: ["250 KVA", "Diesel Engine", "Reliable"],
    available: true,
    rating: 4.7,
    reviews: 18,
    capacity: "250 KVA",
    year: 2022,
    location: "Dubai",
    description: "Reliable Cummins diesel generator providing steady power for medium to large scale operations.",
    features: ["Low maintenance", "Robust design", "Easy operation"],
    specifications: {
      powerOutput: "250 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 3200,
    monthlyPrice: 11000
  },
  {
    id: 43,
    slug: "honda-5kva-petrol-generator",
    name: "Honda 5 KVA Petrol Generator",
    brand: "Honda",
    category: "Petrol Generators",
    price: 120,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jmdylVxOYyoXI1-VpOvkVkuDRq4kZFQ1-A&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfuRCBOIKYp9AkHDX4q2CMsJCKq2bIH60kzg&s"],
    specs: ["5 KVA", "Petrol Engine", "Portable"],
    available: true,
    rating: 4.9,
    reviews: 56,
    capacity: "5 KVA",
    year: 2023,
    location: "Dubai",
    description: "Compact and powerful Honda petrol generator, perfect for small tools and emergency home backup.",
    features: ["Easy start", "Quiet operation", "Fuel efficient"],
    specifications: {
      powerOutput: "5 KVA",
      fuelType: "Petrol",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 750,
    monthlyPrice: 2500
  },
  {
    id: 44,
    slug: "yamaha-10kva-petrol-generator",
    name: "Yamaha 10 KVA Petrol Generator",
    brand: "Yamaha",
    category: "Petrol Generators",
    price: 180,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJakc98S1E9P_RxEok4cYS1N2kNbZrOcTxQ&s",
    gallery: ["https://acimotors-bd.com/assets/images/product/others/yamaha-ef14000e-10kva-conventional.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVY_xWTn327IcojcWxBH6LVAihsio533u-Mg&s"],
    specs: ["10 KVA", "Petrol Engine", "High Performance"],
    available: true,
    rating: 4.8,
    reviews: 31,
    capacity: "10 KVA",
    year: 2023,
    location: "Dubai",
    description: "Yamaha 10 KVA petrol generator offering reliable power for workshops and outdoor events.",
    features: ["Durable engine", "Large fuel tank", "Circuit breaker protection"],
    specifications: {
      powerOutput: "10 KVA",
      fuelType: "Petrol",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1100,
    monthlyPrice: 3800
  },
  {
    id: 45,
    slug: "denyo-15kva-portable-generator",
    name: "Denyo 15 KVA Portable Generator",
    brand: "Denyo",
    category: "Portable Generators",
    price: 220,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtA_wP87tJRTMG6EhTLEoBaDnib5N38SEIA&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoHHz4uctx2-x9YvMKai7Bf7_FMTmTAEKdA&s"],
    specs: ["15 KVA", "Diesel", "Portable"],
    available: true,
    rating: 4.7,
    reviews: 22,
    capacity: "15 KVA",
    year: 2022,
    location: "Dubai",
    description: "Denyo portable generator, highly mobile and reliable for on-site power needs.",
    features: ["Compact size", "Low noise", "Easy transport"],
    specifications: {
      powerOutput: "15 KVA",
      fuelType: "Diesel",
      phase: "Single/3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1400,
    monthlyPrice: 4800
  },
  {
    id: 46,
    slug: "honda-3kva-portable-generator",
    name: "Honda 3 KVA Portable Generator",
    brand: "Honda",
    category: "Portable Generators",
    price: 80,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghHga4ijDAETnvqBPPnXcCagCqWbnVEflBg&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRZ5F5y87GhcP5lARU5gjtB1hjafHO9SW6g&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAvRWNCv6IbJob3sDo2mLMzK8QWnoa4KdPg&s"],
    specs: ["3 KVA", "Petrol", "Ultra-Portable"],
    available: true,
    rating: 4.9,
    reviews: 64,
    capacity: "3 KVA",
    year: 2023,
    location: "Dubai",
    description: "Ultra-portable Honda generator, ideal for camping, small events, and light power tools.",
    features: ["Lightweight", "Inverter technology", "Super quiet"],
    specifications: {
      powerOutput: "3 KVA",
      fuelType: "Petrol",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 500,
    monthlyPrice: 1600
  },
  {
    id: 47,
    slug: "caterpillar-500kva-construction-generator",
    name: "Caterpillar 500 KVA Construction Site Generator",
    brand: "Caterpillar",
    category: "Construction Site Generators",
    price: 900,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrM3oFtbLEzLFWbHV7jGKr9Ema65mf2H_CA&s",
    gallery: ["https://target-generators.com/wp-content/uploads/2024/11/CA-450kVA-Diesel-Generator-DE450GC.jpg"],
    specs: ["500 KVA", "Diesel", "Site Ready"],
    available: true,
    rating: 4.9,
    reviews: 15,
    capacity: "500 KVA",
    year: 2023,
    location: "Dubai",
    description: "Heavy-duty Caterpillar generator designed for the most demanding construction site environments.",
    features: ["Rugged construction", "High capacity", "Advanced monitoring"],
    specifications: {
      powerOutput: "500 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 5500,
    monthlyPrice: 19000
  },
  {
    id: 48,
    slug: "perkins-150kva-construction-generator",
    name: "Perkins 150 KVA Construction Site Generator",
    brand: "Perkins",
    category: "Construction Site Generators",
    price: 400,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpephB4RQnQWAxiz5uVh28YQdeCc7FdZDROQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3mignXmPjHt6jD40xNTJjF9ZeZYnJsiMTQ&s"],
    specs: ["150 KVA", "Diesel", "Durable"],
    available: true,
    rating: 4.6,
    reviews: 27,
    capacity: "150 KVA",
    year: 2022,
    location: "Dubai",
    description: "Reliable Perkins generator for construction sites, providing consistent power for tools and machinery.",
    features: ["Easy maintenance", "Weatherproof", "Large fuel tank"],
    specifications: {
      powerOutput: "150 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 2600,
    monthlyPrice: 9000
  },
  {
    id: 49,
    slug: "cummins-120kva-3phase-generator",
    name: "Cummins 120 KVA 3 Phase Generator",
    brand: "Cummins",
    category: "3 Phase Generators",
    price: 380,
    priceUnit: "day",
    image: "https://generatorcummins.com/wp-content/uploads/2021/04/6B5.9-G_silent.jpg",
    gallery: ["https://fdkenergy.com/wp-content/uploads/2015/07/100kw-generator-cummins-engine.jpg" , "https://generatorcummins.com/wp-content/uploads/2021/04/6B5.9-G_silent.jpg"],
    specs: ["120 KVA", "3 Phase", "Industrial"],
    available: true,
    rating: 4.7,
    reviews: 19,
    capacity: "120 KVA",
    year: 2023,
    location: "Dubai",
    description: "Cummins 3-phase generator designed for industrial applications requiring stable 3-phase power.",
    features: ["Stable voltage", "Industrial grade", "Digital control"],
    specifications: {
      powerOutput: "120 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 2400,
    monthlyPrice: 8500
  },
  {
    id: 50,
    slug: "denyo-80kva-3phase-generator",
    name: "Denyo 80 KVA 3 Phase Generator",
    brand: "Denyo",
    category: "3 Phase Generators",
    price: 300,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxM-6xgx23sZ28y0SIAEPgzBFXOZDkqManMQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMcU6oHhtPJK4WgiA6xDXGmyEGJ_NCbpfKQ&s"],
    specs: ["80 KVA", "3 Phase", "Silent"],
    available: true,
    rating: 4.8,
    reviews: 14,
    capacity: "80 KVA",
    year: 2022,
    location: "Dubai",
    description: "Denyo 80 KVA generator providing quiet and efficient 3-phase power for various needs.",
    features: ["Ultra silent", "Fuel efficient", "Compact design"],
    specifications: {
      powerOutput: "80 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1900,
    monthlyPrice: 6800
  },
  {
    id: 51,
    slug: "kohler-60kva-silent-generator",
    name: "Kohler 60 KVA Silent Generator",
    brand: "Kohler",
    category: "Silent Generators",
    price: 250,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD8bv3e-qIJDoqH2WNMUBA7It3LgPIXAzNkQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB-ziVUaFauKbO9IhTNEcxclv77ixXGoDtQ&s"],
    specs: ["60 KVA", "Silent", "Premium"],
    available: true,
    rating: 4.9,
    reviews: 12,
    capacity: "60 KVA",
    year: 2023,
    location: "Dubai",
    description: "Premium Kohler silent generator, ideal for residential areas and noise-sensitive environments.",
    features: ["Advanced soundproofing", "High reliability", "Clean power"],
    specifications: {
      powerOutput: "60 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1600,
    monthlyPrice: 5800
  },
  {
    id: 52,
    slug: "cummins-40kva-silent-generator",
    name: "Cummins 40 KVA Silent Generator",
    brand: "Cummins",
    category: "Silent Generators",
    price: 200,
    priceUnit: "day",
    image: "https://www.gfepowerproducts.com/cdn/shop/products/Cummins-Diesel-Generator-Canopy-30-110_13.png?v=1654684966&width=2048",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay5DYE3EvOzXIngBUpPO-QR--gbk71HImDg&s"],
    specs: ["40 KVA", "Silent", "Compact"],
    available: true,
    rating: 4.7,
    reviews: 21,
    capacity: "40 KVA",
    year: 2022,
    location: "Dubai",
    description: "Compact Cummins silent generator, perfect for small businesses and private events.",
    features: ["Low noise level", "Easy to operate", "Reliable engine"],
    specifications: {
      powerOutput: "40 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1300,
    monthlyPrice: 4500
  },
  {
    id: 53,
    slug: "perkins-30kva-event-generator",
    name: "Perkins 30 KVA Generator for Event",
    brand: "Perkins",
    category: "Generators for Event",
    price: 180,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLvr6OAZ0h4iKKj6vawt_6Tcwk6DAK6TOdw&s",
    gallery: ["https://target-generators.com/wp-content/uploads/2023/09/Perkins-30KVA-Generator-Ferbo-Italy-FE33-P1-S-1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbivR9PEev5zrGC1x97i_7z-5V1wx9INkFIw&s"],
    specs: ["30 KVA", "Event Ready", "Silent"],
    available: true,
    rating: 4.8,
    reviews: 35,
    capacity: "30 KVA",
    year: 2023,
    location: "Dubai",
    description: "Perkins generator specifically configured for events, ensuring silent and reliable power.",
    features: ["Event-grade silencing", "Stable output", "Easy setup"],
    specifications: {
      powerOutput: "30 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1100,
    monthlyPrice: 4000
  },
  {
    id: 54,
    slug: "denyo-20kva-event-generator",
    name: "Denyo 20 KVA Generator for Event",
    brand: "Denyo",
    category: "Generators for Event",
    price: 150,
    priceUnit: "day",
    image: "https://sc04.alicdn.com/kf/He2b1c63d57394d5695dbc0aa11564979K.jpg",
    gallery: ["data:image/jpeg;base64,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" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQcACz9kdUT6UaXqAqK5lW5mfTsnuiuZ9Yg&s"],
    specs: ["20 KVA", "Compact", "Silent"],
    available: true,
    rating: 4.7,
    reviews: 28,
    capacity: "20 KVA",
    year: 2022,
    location: "Dubai",
    description: "Compact Denyo generator for smaller events, providing quiet and dependable power.",
    features: ["Very quiet", "Portable", "Reliable"],
    specifications: {
      powerOutput: "20 KVA",
      fuelType: "Diesel",
      phase: "Single/3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 950,
    monthlyPrice: 3400
  },
  {
    id: 55,
    slug: "miller-10kva-welding-generator",
    name: "Miller 10 KVA Welding Generator",
    brand: "Miller",
    category: "Welding Generators",
    price: 200,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbTtI2FlTzBsLtt2u9u35400i2RECmG_ukOw&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8i0HcJ_8fRZpKC9SUqqUPgdkBkU4q-mDsw&s" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUNtrNWziTx-a_wNIScWQg--gJ-8-WPTFrw&s"],
    specs: ["10 KVA", "Welder/Gen", "Professional"],
    available: true,
    rating: 4.9,
    reviews: 17,
    capacity: "10 KVA",
    year: 2023,
    location: "Dubai",
    description: "Professional Miller welding generator, providing both welding capability and auxiliary power.",
    features: ["Dual purpose", "High welding performance", "Rugged"],
    specifications: {
      powerOutput: "10 KVA",
      fuelType: "Diesel",
      weldingCurrent: "300A",
      frequency: "50 Hz"
    },
    weeklyPrice: 1300,
    monthlyPrice: 4500
  },
  {
    id: 56,
    slug: "lincoln-5kva-welding-generator",
    name: "Lincoln Electric 5 KVA Welding Generator",
    brand: "Lincoln Electric",
    category: "Welding Generators",
    price: 150,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMngT1TbTDq9ZPhx5NVqGLe2w5Etgt1BZzdQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnkVZHVaqDTZ78KRpJWYrj2uyk7wRdqXi9Q&s" , "https://www.weldingsuppliesdirect.co.uk/media/catalog/product/cache/60d0f53b8cb29c28289fd1618ba0d055/v/a/vantage_410.jpg"],
    specs: ["5 KVA", "Welder/Gen", "Portable"],
    available: true,
    rating: 4.8,
    reviews: 13,
    capacity: "5 KVA",
    year: 2022,
    location: "Dubai",
    description: "Portable Lincoln Electric welding generator, ideal for field repairs and light construction.",
    features: ["Highly portable", "Reliable welding", "Easy to use"],
    specifications: {
      powerOutput: "5 KVA",
      fuelType: "Petrol",
      weldingCurrent: "200A",
      frequency: "50 Hz"
    },
    weeklyPrice: 950,
    monthlyPrice: 3200
  },
  {
    id: 57,
    slug: "john-deere-15kva-farming-generator",
    name: "John Deere 15 KVA Generator for Farming",
    brand: "John Deere",
    category: "Generators for Farming and Agriculture",
    price: 160,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjiuzzac4WsGTW4sVwDH8tvGCUo2gXAsz2Q&s",
    gallery: ["https://img.linemedia.com/img/s/industrial-equipment-diesel-generator-John-Deere-4045-TFU-70-Stamford-65-kVA-generatorset---1765934510904126111_common--25121703214994428500.jpg" , "https://img.linemedia.com/img/s/industrial-equipment-diesel-generator-John-Deere-4039-DF-008-Stamford-42-5-kVA-generatorset---1759316089824998064_common--25100113543917494600.jpg"],
    specs: ["15 KVA", "Farming", "Durable"],
    available: true,
    rating: 4.7,
    reviews: 11,
    capacity: "15 KVA",
    year: 2023,
    location: "Dubai",
    description: "Durable John Deere generator designed for agricultural use, providing reliable power for farms.",
    features: ["Tough design", "Reliable engine", "Easy maintenance"],
    specifications: {
      powerOutput: "15 KVA",
      fuelType: "Diesel",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 1000,
    monthlyPrice: 3500
  },
  {
    id: 58,
    slug: "kubota-10kva-agriculture-generator",
    name: "Kubota 10 KVA Generator for Agriculture",
    brand: "Kubota",
    category: "Generators for Farming and Agriculture",
    price: 130,
    priceUnit: "day",
    image: "https://file2.okorder.com/attach/2015/01/29/1244465f3a65122b880e1e39038a8b8d.jpg",
    gallery: [],
    specs: ["10 KVA", "Agriculture", "Compact"],
    available: true,
    rating: 4.8,
    reviews: 16,
    capacity: "10 KVA",
    year: 2022,
    location: "Dubai",
    description: "Compact Kubota generator, perfect for agricultural applications and small farm equipment.",
    features: ["Fuel efficient", "Compact", "Long life"],
    specifications: {
      powerOutput: "10 KVA",
      fuelType: "Diesel",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 850,
    monthlyPrice: 2900
  },
  {
    id: 59,
    slug: "perkins-100kva-diesel-generator-v2",
    name: "Perkins 100 KVA Diesel Generator",
    brand: "Perkins",
    category: "Diesel Generators",
    price: 320,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStU-dI7sbDgLbQIa24ZsA1u65HQdY-QD0ErQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzn1dV1dJLZjxAP9N8gka1wPu04j85MvWMQ&s"],
    specs: ["100 KVA", "Diesel", "Standard"],
    available: true,
    rating: 4.6,
    reviews: 23,
    capacity: "100 KVA",
    year: 2023,
    location: "Dubai",
    description: "Standard Perkins 100 KVA diesel generator, a versatile choice for many power requirements.",
    features: ["Reliable performance", "Digital control", "Silent canopy"],
    specifications: {
      powerOutput: "100 KVA",
      fuelType: "Diesel",
      phase: "3 Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 2000,
    monthlyPrice: 7000
  },
  {
    id: 60,
    slug: "cummins-15kva-silent-generator-v2",
    name: "Cummins 15 KVA Silent Generator",
    brand: "Cummins",
    category: "Silent Generators",
    price: 140,
    priceUnit: "day",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuByYeCTFr8GNvfV4-76PziU32Clje-PUhQ&s",
    gallery: ["https://ezmakaan.com/wp-content/uploads/2019/10/cummins-15kva.jpg"],
    specs: ["15 KVA", "Silent", "Small"],
    available: true,
    rating: 4.8,
    reviews: 19,
    capacity: "15 KVA",
    year: 2023,
    location: "Dubai",
    description: "Small Cummins silent generator, ideal for backup power for small offices or homes.",
    features: ["Very quiet", "Compact", "Reliable"],
    specifications: {
      powerOutput: "15 KVA",
      fuelType: "Diesel",
      phase: "Single Phase",
      frequency: "50 Hz"
    },
    weeklyPrice: 900,
    monthlyPrice: 3100
    },
    {
      id: 61,
      slug: "construction-machinery-rebar-cutting",
      name: "Construction Machinery Rebar Cutting",
      brand: "Hilti",
      category: "Cutting Machines",
      price: 180,
      priceUnit: "day",
      image: "https://image.made-in-china.com/203f0j00IUicuOAFlNpV/Construction-Machinery-Rebar-Cutting-Used-60mm-Big-Diameter-Steel-Bar-Cutter-Machine.webp",
      gallery: [
        "https://ghmmachinery.com/wp-content/uploads/2024/01/rebar-cutting-machine-cutting-steel-bar-1000%E2%9C%96600.jpg",
        "https://www.itcitaliantopclass.com/wp-content/uploads/2018/09/cesoie-da-cantiere-elettriche.jpg"
      ],
      specs: ["DCH 300-X", "Electric", "Depth 120mm"],
      available: true,
      rating: 4.8,
      reviews: 24,
      capacity: "120mm Depth",
      year: 2024,
      location: "Dubai",
      description: "Professional construction machinery for rebar cutting. This heavy-duty electric cutter is designed for precision and safety when working with reinforced concrete and metal bars.",
      features: [
        "High performance brushless motor",
        "Ergonomic design for reduced fatigue",
        "Advanced dust extraction system",
        "Electronic brake for safety",
        "Durable diamond blade included"
      ],
      specifications: {
        powerSource: "Electric",
        voltage: "220V",
        cuttingDepth: "120mm",
        weight: "9.5kg"
      },
      weeklyPrice: 1000,
      monthlyPrice: 3500
    }
  ];

// Categories for filtering
export const categories = [
  "Generators",
  "Diesel Generators",
  "Petrol Generators",
  "Portable Generators",
  "Construction Site Generators",
  "3 Phase Generators",
  "Silent Generators",
  "Generators for Event",
  "Welding Generators",
  "Generators for Farming and Agriculture",
  "Compactors",
  "Air Compressors",
  "Concrete Equipment",
  "Construction Site",
  "Scaffolding",
  "Cutting Machines",
  "Cleaning Equipment",
  "Power Tools",
  "Drills",
  "Pumps",
  "Ladders",
  "Landscaping",
  "Lighting",
];

// Brands for filtering
export const brands = [
  "Perkins",
  "Cummins",
  "Honda",
  "Yamaha",
  "Denyo",
  "Caterpillar",
  "Kohler",
  "Miller",
  "Lincoln Electric",
  "John Deere",
  "Kubota",
  "JCB",
  "Hilti",
  "Al-Kabir",
  "Generac",
  "Zamil",
  "Makita",
  "Husqvarna",
  "Wacker Neuson",
  "Altrad",
  "DeWalt",
  "Milwaukee",
  "Karcher",
  "Ridgid",
  "Stihl",
  "Panasonic",
  "Rubi",
  "Bosch",
];

// Locations for filtering
export const locations = ["Dubai"];

// Helper function to generate slug from name
export const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Helper functions
export const getMachineryBySlug = (slug: string): Machinery | undefined => {
  return allMachinery.find(m => m.slug === slug);
};

export const getMachineryById = (id: number): Machinery | undefined => {
  return allMachinery.find(m => m.id === id);
};

export const getRelatedMachinery = (currentId: number, category: string, limit = 3): Machinery[] => {
  // 1) Prefer same-category items
  const sameCategory = allMachinery.filter(m => m.id !== currentId && m.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  // 2) Fallback: top-rated items from any category to ensure every product gets cross-links
  //    (helps SEO internal-linking — Semrush flags pages with <2 incoming links).
  const topRated = allMachinery
    .filter(m => m.id !== currentId && m.category !== category)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, limit - sameCategory.length);

  return [...sameCategory, ...topRated];
};

export const getSameBrandMachinery = (currentId: number, brand: string, limit = 3): Machinery[] => {
  return allMachinery
    .filter(m => m.id !== currentId && m.brand === brand)
    .slice(0, limit);
};

export const getFeaturedMachinery = (limit = 6): Machinery[] => {
  return allMachinery
    .filter(m => m.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Get all machinery
export const getAllMachinery = (): Machinery[] => {
  return allMachinery;
};
