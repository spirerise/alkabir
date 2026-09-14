// Service data types
export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServicePricing {
  period: string;
  price: string;
  note: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  benefits: ServiceBenefit[];
  pricing: ServicePricing[];
  popular: boolean;
}

// Mock services data
export const allServices: Service[] = [
  {
    id: "equipment-rental",
    name: "Generator & Equipment Rental",
    shortDescription: "Premium generators and construction equipment for rent",
    description: "Access our extensive fleet of generators (500 KVA - 1000 KVA), compactors, air compressors, and construction equipment for any project duration. From daily rentals to long-term leases, we offer flexible terms that suit your project timeline and budget. Our well-maintained generators and equipment ensure reliability and performance when you need it most.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
    features: [
      "Flexible rental periods from daily to yearly",
      "Well-maintained and regularly serviced equipment",
      "Competitive pricing with volume discounts",
      "Quick availability and fast delivery",
      "Comprehensive insurance options",
      "24/7 breakdown support",
    ],
    benefits: [
      { title: "Cost Effective", description: "No capital investment required, pay only for what you use" },
      { title: "Always Updated", description: "Access to latest machinery without ownership burdens" },
      { title: "Flexible Terms", description: "Scale up or down based on project requirements" },
      { title: "Expert Support", description: "Technical assistance included with every rental" },
    ],
    pricing: [
      { period: "Daily", price: "From $150", note: "Minimum 1 day" },
      { period: "Weekly", price: "From $900", note: "7 days rental" },
      { period: "Monthly", price: "From $3,000", note: "30 days rental" },
    ],
    popular: true,
  },
  {
    id: "operator-services",
    name: "Certified Operators",
    shortDescription: "Skilled operators for your equipment needs",
    description: "Our team of certified and experienced operators ensures your machinery is handled with expertise. All operators are trained on safety protocols and equipment-specific operations, providing you with reliable manpower for any project size.",
    icon: "👷",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
    features: [
      "Certified and licensed operators",
      "Extensive equipment experience",
      "Safety protocol trained",
      "Available for short and long-term assignments",
      "Multilingual operators available",
      "Background verified personnel",
    ],
    benefits: [
      { title: "Qualified Staff", description: "All operators hold valid certifications" },
      { title: "Reduced Risk", description: "Lower accident rates with trained professionals" },
      { title: "Flexibility", description: "Hire for days, weeks, or entire project duration" },
      { title: "Reliability", description: "Backup operators available for continuity" },
    ],
    pricing: [
      { period: "Daily", price: "From $200", note: "8-hour shift" },
      { period: "Weekly", price: "From $1,100", note: "5 working days" },
      { period: "Monthly", price: "From $4,000", note: "Full month" },
    ],
    popular: true,
  },
  {
    id: "maintenance-repair",
    name: "Maintenance & Repair",
    shortDescription: "Keep your machinery in peak condition",
    description: "Preventive maintenance and repair services to minimize downtime. Our technicians are factory-trained and use genuine parts to ensure optimal equipment performance. We offer both on-site and workshop services to suit your needs.",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070",
    features: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "Genuine OEM spare parts",
      "On-site and workshop repairs",
      "Equipment inspection services",
      "Maintenance scheduling system",
    ],
    benefits: [
      { title: "Minimize Downtime", description: "Quick response reduces project delays" },
      { title: "Extend Life", description: "Regular maintenance prolongs equipment life" },
      { title: "Cost Savings", description: "Preventive care reduces major repairs" },
      { title: "Expert Service", description: "Factory-trained technicians" },
    ],
    pricing: [
      { period: "Inspection", price: "From $150", note: "Per machine" },
      { period: "Service Call", price: "From $250", note: "Plus parts" },
      { period: "Maintenance Plan", price: "Custom", note: "Based on fleet" },
    ],
    popular: false,
  },
  {
    id: "transportation",
    name: "Equipment Transportation",
    shortDescription: "Safe and timely delivery to your site",
    description: "Reliable transportation services for all types of construction equipment. We ensure your equipment arrives safely and on time, anywhere in the UAE. Our fleet includes low-bed trailers, flatbeds, and specialized transport vehicles.",
    icon: "🚛",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
    features: [
      "GPS tracked deliveries",
      "Licensed and insured transport",
      "Specialized heavy-haul trailers",
      "Same-day delivery available",
      "All Emirates coverage",
      "Secure loading and unloading",
    ],
    benefits: [
      { title: "Tracked Delivery", description: "Real-time GPS tracking for peace of mind" },
      { title: "Safe Transport", description: "Specialized equipment for secure handling" },
      { title: "Wide Coverage", description: "Delivery across all UAE Emirates" },
      { title: "On-Time", description: "Reliable scheduling you can count on" },
    ],
    pricing: [
      { period: "Local", price: "From $300", note: "Within city" },
      { period: "Regional", price: "From $800", note: "Inter-emirate" },
      { period: "Remote Areas", price: "Custom", note: "Quote on request" },
    ],
    popular: false,
  },
  {
    id: "consulting",
    name: "Project Consulting",
    shortDescription: "Expert advice for your construction projects",
    description: "Our experienced consultants help you select the right equipment for your specific project needs, optimizing costs and improving efficiency. From project planning to equipment selection, we provide expert guidance at every step.",
    icon: "📋",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    features: [
      "Equipment selection guidance",
      "Project cost optimization",
      "Fleet planning services",
      "Technical specifications review",
      "Vendor evaluation support",
      "ROI analysis",
    ],
    benefits: [
      { title: "Expert Guidance", description: "Decades of industry experience" },
      { title: "Cost Optimization", description: "Right-size your equipment needs" },
      { title: "Risk Reduction", description: "Avoid costly equipment mistakes" },
      { title: "Time Savings", description: "Faster decision-making with expert input" },
    ],
    pricing: [
      { period: "Consultation", price: "Free", note: "Initial meeting" },
      { period: "Project Review", price: "From $500", note: "Detailed analysis" },
      { period: "Ongoing Support", price: "Custom", note: "Retainer basis" },
    ],
    popular: false,
  },
  {
    id: "training",
    name: "Operator Training",
    shortDescription: "Comprehensive equipment operation training",
    description: "Professional training programs for equipment operators. Our courses cover safety procedures, operational best practices, and certification preparation. Training is available at our facilities or on your project site.",
    icon: "🎓",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
    features: [
      "Certified training programs",
      "Hands-on practical sessions",
      "Safety certification included",
      "Flexible scheduling options",
      "On-site training available",
      "Multiple equipment types",
    ],
    benefits: [
      { title: "Certification", description: "Recognized industry certifications" },
      { title: "Safety Focus", description: "Comprehensive safety training" },
      { title: "Practical Skills", description: "Real equipment training" },
      { title: "Compliance", description: "Meet regulatory requirements" },
    ],
    pricing: [
      { period: "Basic Course", price: "From $800", note: "2 days" },
      { period: "Advanced", price: "From $1,500", note: "5 days" },
      { period: "Group Training", price: "Custom", note: "10+ trainees" },
    ],
    popular: false,
  },
  {
    id: "fleet-management",
    name: "Fleet Management",
    shortDescription: "Complete fleet management solutions",
    description: "Comprehensive fleet management services including tracking, maintenance scheduling, and utilization optimization for construction companies with their own equipment. Our digital platform provides real-time insights into your fleet performance.",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070",
    features: [
      "Real-time GPS tracking",
      "Automated maintenance alerts",
      "Utilization analytics",
      "Cost tracking and reporting",
      "Driver behavior monitoring",
      "Mobile app access",
    ],
    benefits: [
      { title: "Visibility", description: "Track all assets in real-time" },
      { title: "Efficiency", description: "Optimize equipment utilization" },
      { title: "Cost Control", description: "Reduce operational costs" },
      { title: "Insights", description: "Data-driven decisions" },
    ],
    pricing: [
      { period: "Per Machine", price: "From $50/mo", note: "Basic tracking" },
      { period: "Fleet Plan", price: "From $500/mo", note: "Up to 20 units" },
      { period: "Enterprise", price: "Custom", note: "Unlimited units" },
    ],
    popular: false,
  },
  {
    id: "spare-parts",
    name: "Spare Parts Supply",
    shortDescription: "Genuine parts for all major brands",
    description: "Wide inventory of genuine spare parts for all major construction equipment brands. Fast delivery and competitive pricing ensure minimal downtime. We stock parts for Caterpillar, Komatsu, Volvo, Hitachi, and many more.",
    icon: "⚙️",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032",
    features: [
      "Genuine OEM parts",
      "Fast delivery service",
      "Competitive pricing",
      "Wide brand coverage",
      "Technical support included",
      "Warranty on all parts",
    ],
    benefits: [
      { title: "Genuine Quality", description: "Only authentic OEM parts" },
      { title: "Fast Delivery", description: "Express shipping available" },
      { title: "Wide Selection", description: "Parts for all major brands" },
      { title: "Technical Help", description: "Part identification support" },
    ],
    pricing: [
      { period: "Standard", price: "Varies", note: "By part number" },
      { period: "Express", price: "+15%", note: "Same-day delivery" },
      { period: "Bulk Order", price: "-10%", note: "Volume discount" },
    ],
    popular: false,
  },
];

// Stats for the services page
export const serviceStats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Machines Serviced" },
  { value: "10K+", label: "Projects Completed" },
  { value: "98%", label: "Customer Satisfaction" },
];

// Helper functions
export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(s => s.id === id);
};

export const getRelatedServices = (currentId: string, limit = 3): Service[] => {
  return allServices
    .filter(s => s.id !== currentId)
    .slice(0, limit);
};

export const getPopularServices = (limit = 3): Service[] => {
  return allServices
    .filter(s => s.popular)
    .slice(0, limit);
};

export const getFeaturedServices = (limit = 6): Service[] => {
  // Prioritize popular services, then add others
  const popular = allServices.filter(s => s.popular);
  const others = allServices.filter(s => !s.popular);
  return [...popular, ...others].slice(0, limit);
};

// Service quick links for navigation
export const serviceQuickLinks = allServices.map(s => ({
  id: s.id,
  name: s.name,
  icon: s.icon,
}));
