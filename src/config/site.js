// Ideal Asphalt - Site Configuration
export const siteConfig = {
  // Business Details
  businessName: "Ideal Asphalt",
  phone: "+91-9822002357",
  phoneWhatsApp: "919822002357", // For wa.me links
  email: "info@idealasphalt.in",
  address: "254, Hira Manik Bunglow, Ruikar Colony, Kolhapur - 416005, Maharashtra, India",
  shortDescription: "Ideal Asphalt - premium bitumen and petroleum solutions. Serving road construction and infrastructure projects for 30+ years.",
  siteUrl: "https://idealasphalt.in",
  openingHours: "Mon-Sat: 10:00-19:00",
  copyrightYear: "2025",
  
  // WhatsApp Message Templates (URL-encoded)
  whatsappMessages: {
    default: "Hello%20Ideal%20Asphalt%2C%20I%20would%20like%20to%20inquire%20about%20your%20bitumen%20and%20petroleum%20solutions.",
    quote: "Hello%20Ideal%20Asphalt%2C%20I%27d%20like%20to%20request%20a%20quote%20for%20a%20road%20construction%20project.",
    product: (productName) => `Hello%20Ideal%20Asphalt%2C%20I%27m%20interested%20in%20${encodeURIComponent(productName)}%20bitumen.%20Please%20share%20details%20and%20pricing.`,
    contact: (name, phone, message) => `Hello%20Ideal%20Asphalt%2C%20I%20want%20to%20discuss%20a%20project.%20My%20name%3A%20${encodeURIComponent(name)}%2C%20Phone%3A%20${encodeURIComponent(phone)}%2C%20Message%3A%20${encodeURIComponent(message)}`
  },
  
  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  
  // Products
  products: [
    {
      id: "vg-10",
      name: "VG-10 Bitumen",
      slug: "vg-10",
      description: "Premium grade bitumen for high-temperature applications",
      features: ["High viscosity", "Excellent durability", "Weather resistant"],
      image: "/vg10.png",
      imageAlt: "VG-10 bitumen product sample"
    },
    {
      id: "vg-20",
      name: "VG-20 Bitumen",
      slug: "vg-20",
      description: "Standard grade bitumen for moderate temperature regions",
      features: ["Balanced viscosity", "Cost effective", "Versatile applications"],
      image: "/vg20.png",
      imageAlt: "VG-20 bitumen product sample"
    },
    {
      id: "vg-30",
      name: "VG-30 Bitumen",
      slug: "vg-30",
      description: "Heavy duty bitumen for demanding road construction",
      features: ["High penetration", "Superior binding", "Long lasting"],
      image: "/vg30.png",
      imageAlt: "VG-30 bitumen product sample"
    },
    {
      id: "vg-40",
      name: "VG-40 Bitumen",
      slug: "vg-40",
      description: "Heavy grade bitumen for extreme conditions",
      features: ["Maximum viscosity", "Extreme weather resistance", "Heavy traffic suitable"],
      image: "/vg40.png",
      imageAlt: "VG-40 bitumen product sample"
    }
  ],
  // Services
  services: [
    {
      name: "Bitumen Supply",
      description: "Certified viscosity grades with QA documentation and tracking",
      icon: "fuel"
    },
    {
      name: "Petroleum Solutions",
      description: "Industrial fuels and specialty petroleum backed by compliance paperwork",
      icon: "factory"
    },
    {
      name: "Road Construction",
      description: "Technical advisory covering mix design, modifiers, and on-site coordination",
      icon: "hard-hat"
    }
  ],
  
  // Stats
  stats: [
    { label: "30+ Years", value: "Experience" },
    { label: "150+ Loyal Clients", value: "Satisfied Customers" },
    { label: "Lakhs MMT Supplied", value: "Products Delivered" }
  ]
};

// Helper function to generate WhatsApp URL
export const getWhatsAppUrl = (message) => {
  return `https://wa.me/${siteConfig.phoneWhatsApp}?text=${message}`;
};

// Helper function to open WhatsApp
export const openWhatsApp = (message) => {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
};
