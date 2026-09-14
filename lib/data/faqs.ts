import type { FAQItem } from "@/lib/seo/schema";

/**
 * Centralized FAQ content for AEO (Answer Engine Optimization).
 * Answers are written in a direct, voice-search-friendly tone (avg 40-60 words).
 * Pull these into pages + render via <FaqSection> (which auto-injects FAQPage JSON-LD).
 */

export const generalFaqs: FAQItem[] = [
  {
    question: "What construction machinery does AL-KABIR rent in Dubai?",
    answer:
      "AL-KABIR rents diesel and silent generators (5 KVA to 1000 KVA), compactors, air compressors, concrete mixers and vibrators, scaffolding, ladders, power tools, welding machines, water pumps and lighting towers across Dubai, Abu Dhabi, Sharjah and all UAE.",
  },
  {
    question: "Do you deliver equipment to construction sites across the UAE?",
    answer:
      "Yes. We provide same-day delivery and pickup to construction sites, factories, events and residential projects across all seven emirates. Delivery is typically free within Dubai for daily, weekly and monthly rentals, with a small mobilisation fee for other emirates.",
  },
  {
    question: "How quickly can I get a generator or machine delivered?",
    answer:
      "For orders confirmed before 12:00 PM on a working day, we deliver the same day across Dubai. Other emirates receive next-day delivery. Emergency 24/7 generator rental is available — call +971 55 455 5786 anytime.",
  },
  {
    question: "Do you provide certified operators with rental equipment?",
    answer:
      "Yes. We supply trained, third-party-certified operators for generators, compactors, concrete equipment and welding machines. Operators are insured, PPE-equipped and approved for Dubai Municipality, ADNOC, Emaar, Aldar and DEWA-regulated sites.",
  },
  {
    question: "What are AL-KABIR's rental rates?",
    answer:
      "Rates depend on equipment type, capacity and rental duration. We offer competitive daily, weekly and monthly contracts with discounts for long-term hire. Get a free instant quote by calling +971 55 455 5786 or via our contact form.",
  },
  {
    question: "Do you offer fuel-included generator rentals?",
    answer:
      "Yes. We offer dry hire (you supply diesel) or wet hire (we supply diesel + delivery + scheduled refuelling). Wet-hire is popular for events, remote sites and continuous-run projects where downtime must be avoided.",
  },
  {
    question: "Are AL-KABIR generators DEWA / Dubai Municipality approved?",
    answer:
      "Yes. All our diesel and silent generators meet Dubai Municipality, DEWA and EHS noise and emission requirements (Stage IIIA / Tier 3 emissions, sub-75 dB silent canopies). PUC, insurance and operator certificates are provided on request.",
  },
  {
    question: "Can I rent equipment for a single day or only long-term?",
    answer:
      "Both. We offer flexible rental contracts from 1 day to 12 months. There is no minimum hire period for generators, power tools or compactors. Long-term hire (3+ months) attracts up to 30% discount.",
  },
];

export const generatorFaqs: FAQItem[] = [
  {
    question: "What size generator do I need for my project?",
    answer:
      "As a rule of thumb: small site office or villa needs 10–25 KVA, a medium construction site needs 60–125 KVA, large projects 250–500 KVA, and tower-block or industrial loads need 600–1000 KVA. Our team sizes the right unit free of charge — share your load list or contact us.",
  },
  {
    question: "What is the difference between diesel and silent generators?",
    answer:
      "A diesel generator (open-frame) is louder (~95 dB) and used on noise-tolerant construction sites. A silent generator has a sound-attenuated canopy (sub-75 dB at 7 m), making it ideal for events, hospitals, offices, residential areas and Dubai Municipality noise-restricted zones.",
  },
  {
    question: "Do you rent generators for events and weddings in Dubai?",
    answer:
      "Yes. We supply ultra-silent (60–70 dB) generators with synchronised AMF panels, distribution boards and step-down transformers for weddings, exhibitions, concerts, film shoots, expos and corporate events anywhere in the UAE.",
  },
  {
    question: "How long can a rental generator run continuously?",
    answer:
      "Our diesel generators can run 24/7 for the entire rental period. Built-in fuel tanks last 8–24 hours depending on load and capacity. We provide scheduled refuelling so the unit never stops — ideal for hospitals, data centres and continuous construction operations.",
  },
  {
    question: "What brands of generators do you have?",
    answer:
      "Our fleet includes Perkins, Cummins, Caterpillar, Volvo, Kohler, John Deere, Denyo, Honda, Yamaha and Generac generators. All units are serviced every 250 hours and load-tested before each delivery.",
  },
  {
    question: "Do you supply welding generators in the UAE?",
    answer:
      "Yes. We rent diesel-powered welding generators (200A–600A) suitable for stick, MIG and TIG welding on pipelines, structural steel and oil & gas projects. Brands include Miller, Lincoln Electric and Denyo.",
  },
];

export const compactorFaqs: FAQItem[] = [
  {
    question: "What types of compactors does AL-KABIR rent?",
    answer:
      "We rent plate compactors (60–200 kg) for sand and asphalt, vibratory rammers (jumping jacks) for trench compaction, and ride-on tandem rollers (1–14 ton) for road and large-area compaction. All are diesel or petrol powered with daily / weekly / monthly rates.",
  },
  {
    question: "What is the difference between a plate compactor and a rammer?",
    answer:
      "A plate compactor compacts wide flat surfaces (sand, gravel, asphalt) using vibration. A rammer (jumping jack) delivers high-impact force in a small footprint, ideal for trenches, around pipes, narrow areas and cohesive soils like clay.",
  },
];

export const airCompressorFaqs: FAQItem[] = [
  {
    question: "What size air compressor do I need for jackhammers in Dubai?",
    answer:
      "A single 25 kg jackhammer needs ~125 CFM. Two jackhammers running together need 185–260 CFM. Pipeline projects with sandblasting need 400+ CFM. We rent diesel screw compressors from 80 CFM to 1100 CFM with hoses, manifolds and breakers.",
  },
];

export const scaffoldingFaqs: FAQItem[] = [
  {
    question: "Do you supply scaffolding with erection and dismantling?",
    answer:
      "Yes. We supply Cup-Lock, Ringlock and frame scaffolding with TR-rated certified scaffolders, drawings, hand-over inspection and Dubai Municipality / RTA approval documents. Available for daily, weekly or monthly hire.",
  },
];

export const concreteFaqs: FAQItem[] = [
  {
    question: "What concrete equipment can I rent from AL-KABIR?",
    answer:
      "We rent concrete mixers (350–500 litre), needle vibrators, poker vibrators, power floats, screed boards, bar bending and bar cutting machines, and concrete breakers. All units come with PPE recommendations and free operator briefing.",
  },
];

export const powerToolFaqs: FAQItem[] = [
  {
    question: "Which power tool brands are available for rent?",
    answer:
      "We rent Hilti, Bosch, Makita, DeWalt, Husqvarna and Stihl power tools — including rotary hammers, demolition breakers, angle grinders, cut-off saws, core drills, magnetic drills and electric jackhammers. All tools are serviced and PAT-tested.",
  },
];

/**
 * Map machinery category → relevant FAQs (used on /machinery and category pages).
 */
export function getFaqsForCategory(category: string): FAQItem[] {
  const c = category.toLowerCase();
  if (c.includes("generator")) return [...generatorFaqs, ...generalFaqs.slice(0, 4)];
  if (c.includes("compactor") || c.includes("roller")) return [...compactorFaqs, ...generalFaqs.slice(0, 3)];
  if (c.includes("compressor")) return [...airCompressorFaqs, ...generalFaqs.slice(0, 3)];
  if (c.includes("scaffolding") || c.includes("ladder")) return [...scaffoldingFaqs, ...generalFaqs.slice(0, 3)];
  if (c.includes("concrete")) return [...concreteFaqs, ...generalFaqs.slice(0, 3)];
  if (c.includes("tool") || c.includes("drill") || c.includes("breaker") || c.includes("cut"))
    return [...powerToolFaqs, ...generalFaqs.slice(0, 3)];
  return generalFaqs.slice(0, 6);
}

/**
 * Build location-specific FAQs for /locations/[slug] pages.
 */
export function getFaqsForLocation(locationName: string): FAQItem[] {
  return [
    {
      question: `Do you deliver construction machinery to ${locationName}?`,
      answer: `Yes. AL-KABIR provides same-day delivery of generators, compactors, air compressors, scaffolding and power tools to ${locationName} and all surrounding areas. Order before 12:00 PM for same-day dispatch — call +971 55 455 5786.`,
    },
    {
      question: `What equipment can I rent in ${locationName}?`,
      answer: `Our full fleet is available in ${locationName}: silent and diesel generators (5–1000 KVA), compactors, vibratory rollers, air compressors, concrete mixers, scaffolding, power tools, welding machines, water pumps and lighting towers — daily, weekly and monthly hire.`,
    },
    {
      question: `Is there a minimum rental period for ${locationName}?`,
      answer: `No. Equipment in ${locationName} can be rented from a single day up to 12 months. For long-term projects (3+ months) we offer up to 30% discount and dedicated account management.`,
    },
    {
      question: `Are operators available with rentals in ${locationName}?`,
      answer: `Yes. We provide TR-certified, insured operators for generators, compactors and welding machines in ${locationName}, including Dubai Municipality / DEWA / EHS approved personnel for regulated construction sites.`,
    },
    ...generalFaqs.slice(4, 7),
  ];
}

/**
 * Build service-specific FAQs for /services/[slug] pages.
 */
export function getFaqsForService(serviceTitle: string): FAQItem[] {
  const t = serviceTitle.toLowerCase();
  if (t.includes("generator")) return generatorFaqs;
  if (t.includes("compactor") || t.includes("roller")) return [...compactorFaqs, ...generalFaqs.slice(0, 4)];
  if (t.includes("compressor")) return [...airCompressorFaqs, ...generalFaqs.slice(0, 4)];
  if (t.includes("scaffolding")) return [...scaffoldingFaqs, ...generalFaqs.slice(0, 4)];
  if (t.includes("concrete")) return [...concreteFaqs, ...generalFaqs.slice(0, 4)];
  if (t.includes("tool") || t.includes("power")) return [...powerToolFaqs, ...generalFaqs.slice(0, 4)];
  return generalFaqs;
}
