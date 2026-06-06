import { useState } from "react";
import { Search, SlidersHorizontal, X, Phone, Mail, CheckCircle } from "lucide-react";
import { ProductCard, type Product } from "../components/product-card";
import { sendMail } from "../lib/email";

const categories = [
  "All Products",
  "Routers",
  "Modems",
  "Mesh Systems",
  "Extenders",
  "WLAN Hubs",
  "Switches",
  "Cables & Accessories",
  "Special",
];

const allProducts: Product[] = [
  // Routers
  {
    id: "rt-wifi6",
    name: "Cherrinet Wi-Fi 6 Dual-Band Router",
    category: "Routers",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1663789049961-6440cfa441a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWZpJTIwcm91dGVyJTIwbW9kZXJuJTIwd2hpdGV8ZW58MXx8fHwxNzcyNTI0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 234,
    badge: "Best Seller",
    inStock: true,
    description: "High-performance dual-band Wi-Fi 6 router with MU-MIMO technology, ideal for streaming and gaming.",
    specs: [
      "Wi-Fi 6 (802.11ax) standard",
      "Dual-band: 2.4 GHz + 5 GHz",
      "Up to 1800 Mbps combined speed",
      "4x Gigabit LAN ports",
      "MU-MIMO & OFDMA support",
      "Parental controls & QoS",
    ],
  },
  {
    id: "rt-wifi6e",
    name: "Cherrinet Wi-Fi 6E Tri-Band Router",
    category: "Routers",
    price: 4999,
    originalPrice: 6499,
    image: "https://images.unsplash.com/photo-1645725677294-ed0843b97d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWZpJTIwcmFuZ2UlMjBleHRlbmRlciUyMGRldmljZXxlbnwxfHx8fDE3NzI1MjQ5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 142,
    badge: "Premium",
    inStock: true,
    description: "Future-proof tri-band router with 6 GHz band support for ultra-low latency and blazing speeds.",
    specs: [
      "Wi-Fi 6E (802.11axe) standard",
      "Tri-band: 2.4 GHz + 5 GHz + 6 GHz",
      "Up to 5400 Mbps combined speed",
      "2.5 Gbps WAN port",
      "8 simultaneous streams",
      "WPA3 security encryption",
    ],
  },
  {
    id: "rt-gaming",
    name: "Cherrinet Gaming Router Pro",
    category: "Routers",
    price: 5999,
    image: "https://images.unsplash.com/photo-1670341447004-606a07fcfaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG92ZXIlMjBldGhlcm5ldCUyMFBPRSUyMGluamVjdG9yfGVufDF8fHx8MTc3MjUyNDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 89,
    badge: "New",
    inStock: true,
    description: "Optimized for gaming with ultra-low ping, game traffic prioritization, and dedicated gaming ports.",
    specs: [
      "Game-optimized QoS engine",
      "Dedicated 2.5 Gbps gaming port",
      "Sub-5ms latency optimization",
      "Built-in VPN client",
      "RGB LED indicators",
      "Compatible with all Cherrinet plans",
    ],
  },

  // Modems
  {
    id: "md-gpon",
    name: "GPON Fiber Modem (ONT)",
    category: "Modems",
    price: 1999,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwbW9kZW0lMjBkZXZpY2V8ZW58MXx8fHwxNzcyNTI0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 312,
    inStock: true,
    description: "GPON Optical Network Terminal for converting fiber signal to Ethernet. Essential for fiber connections.",
    specs: [
      "GPON technology compliant",
      "1x Gigabit Ethernet output",
      "SC/APC fiber connector",
      "Compact wall-mountable design",
      "LED status indicators",
      "Auto-provisioning support",
    ],
  },
  {
    id: "md-xgspon",
    name: "XGS-PON 10G Fiber Modem",
    category: "Modems",
    price: 3999,
    image: "https://images.unsplash.com/photo-1733913106110-3f9832a788a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGUlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzI1MjQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 56,
    badge: "Premium",
    inStock: true,
    description: "Next-gen 10 Gbps capable fiber modem for power users and businesses requiring maximum throughput.",
    specs: [
      "XGS-PON 10 Gbps standard",
      "2x 10G SFP+ ports",
      "1x 2.5 Gbps Ethernet",
      "Enterprise-grade reliability",
      "Remote management capable",
      "TR-069 management protocol",
    ],
  },

  // Mesh Systems
  {
    id: "mesh-3pack",
    name: "Cherrinet Mesh Wi-Fi System (3-Pack)",
    category: "Mesh Systems",
    price: 6999,
    originalPrice: 8999,
    image: "https://images.unsplash.com/photo-1558651535-4bf0dc9adc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNoJTIwd2lmaSUyMHN5c3RlbSUyMGhvbWV8ZW58MXx8fHwxNzcyNTI0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 187,
    badge: "Popular",
    inStock: true,
    description: "Whole-home mesh Wi-Fi system covering up to 5,000 sq ft with seamless roaming between nodes.",
    specs: [
      "Covers up to 5,000 sq ft",
      "Seamless roaming (802.11k/v/r)",
      "Wi-Fi 6 on all nodes",
      "Up to 150 connected devices",
      "Easy app-based setup",
      "Automatic firmware updates",
    ],
  },
  {
    id: "mesh-2pack",
    name: "Cherrinet Mesh Wi-Fi System (2-Pack)",
    category: "Mesh Systems",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1752262167753-37a0ec83f614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBodWIlMjBkZXZpY2V8ZW58MXx8fHwxNzcyNDI4NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 220,
    inStock: true,
    description: "Perfect for medium-sized homes. Two-node mesh system covering up to 3,500 sq ft.",
    specs: [
      "Covers up to 3,500 sq ft",
      "Wi-Fi 6 dual-band",
      "Up to 100 devices",
      "Parental controls built-in",
      "Guest network support",
      "Ethernet backhaul option",
    ],
  },

  // Extenders
  {
    id: "ext-wifi6",
    name: "Wi-Fi 6 Range Extender",
    category: "Extenders",
    price: 1499,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1767884161477-54d347387f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwd2lmaSUyMGFudGVubmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcyNTI0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.3,
    reviews: 158,
    inStock: true,
    description: "Plug-and-play Wi-Fi 6 range extender to eliminate dead zones in your home or office.",
    specs: [
      "Wi-Fi 6 compatible",
      "Dual-band coverage boost",
      "Up to 1500 sq ft extension",
      "One-button WPS setup",
      "Gigabit Ethernet port",
      "Signal strength LED indicator",
    ],
  },
  {
    id: "ext-outdoor",
    name: "Outdoor Wi-Fi Extender (Weatherproof)",
    category: "Extenders",
    price: 2999,
    image: "https://images.unsplash.com/photo-1605192020788-24d8eae86e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMGNhYmxlJTIwQ0FUNiUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcyNTI0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 73,
    badge: "New",
    inStock: true,
    description: "IP65-rated outdoor Wi-Fi extender for gardens, terraces, and parking areas.",
    specs: [
      "IP65 weatherproof rating",
      "Wi-Fi 5 dual-band",
      "Up to 300m outdoor range",
      "PoE powered (adapter included)",
      "Wall/pole mount kit included",
      "Lightning surge protection",
    ],
  },

  // WLAN Hub
  {
    id: "wlan-hub",
    name: "Cherrinet WLAN Hub Controller",
    category: "WLAN Hubs",
    price: 7999,
    originalPrice: 9999,
    image: "https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMG5ldHdvcmslMjBzd2l0Y2h8ZW58MXx8fHwxNzcyNTI0OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 44,
    badge: "Enterprise",
    inStock: true,
    description: "Centralized WLAN controller for managing multiple access points. Ideal for offices and large homes.",
    specs: [
      "Manages up to 50 access points",
      "Centralized dashboard management",
      "VLAN & bandwidth allocation",
      "Captive portal support",
      "Seamless AP handoff",
      "Cloud or local management",
    ],
  },
  {
    id: "ap-ceiling",
    name: "Ceiling-Mount Access Point (Wi-Fi 6)",
    category: "WLAN Hubs",
    price: 3499,
    image: "https://images.unsplash.com/photo-1663789049961-6440cfa441a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWZpJTIwcm91dGVyJTIwbW9kZXJuJTIwd2hpdGV8ZW58MXx8fHwxNzcyNTI0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 91,
    inStock: true,
    description: "Professional-grade ceiling-mount access point for commercial spaces and large residences.",
    specs: [
      "Wi-Fi 6 (802.11ax)",
      "PoE powered (802.3at)",
      "Up to 1,500 sq ft coverage",
      "Supports 100+ clients",
      "Discreet ceiling design",
      "WLAN hub compatible",
    ],
  },

  // Switches
  {
    id: "sw-8port",
    name: "8-Port Gigabit Ethernet Switch",
    category: "Switches",
    price: 1299,
    image: "https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMG5ldHdvcmslMjBzd2l0Y2h8ZW58MXx8fHwxNzcyNTI0OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 205,
    inStock: true,
    description: "Unmanaged 8-port Gigabit switch for expanding wired connections to PCs, consoles, and smart TVs.",
    specs: [
      "8x Gigabit Ethernet ports",
      "Plug and play (unmanaged)",
      "Fanless silent operation",
      "Metal housing for durability",
      "Energy-efficient IEEE 802.3az",
      "Desktop or wall-mount",
    ],
  },
  {
    id: "sw-poe",
    name: "8-Port PoE+ Managed Switch",
    category: "Switches",
    price: 4499,
    image: "https://images.unsplash.com/photo-1670341447004-606a07fcfaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG92ZXIlMjBldGhlcm5ldCUyMFBPRSUyMGluamVjdG9yfGVufDF8fHx8MTc3MjUyNDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 63,
    badge: "Enterprise",
    inStock: true,
    description: "Managed PoE+ switch for powering access points, IP cameras, and VoIP phones over Ethernet.",
    specs: [
      "8x Gigabit PoE+ ports (120W total)",
      "Layer 2 managed switch",
      "VLAN & QoS support",
      "Web-based management UI",
      "SFP uplink port",
      "Rack-mountable design",
    ],
  },

  // Cables & Accessories
  {
    id: "cable-cat6",
    name: "CAT6 Ethernet Cable (10m)",
    category: "Cables & Accessories",
    price: 349,
    image: "https://images.unsplash.com/photo-1605192020788-24d8eae86e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMGNhYmxlJTIwQ0FUNiUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzcyNTI0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 430,
    inStock: true,
    description: "High-quality shielded CAT6 Ethernet cable for reliable gigabit wired connections.",
    specs: [
      "CAT6 specification",
      "10 meters length",
      "Shielded (STP) construction",
      "Gold-plated RJ45 connectors",
      "Supports up to 10 Gbps (short runs)",
      "Available in 1m, 3m, 5m, 10m, 20m",
    ],
  },
  {
    id: "cable-fiber",
    name: "Fiber Patch Cable SC/APC (5m)",
    category: "Cables & Accessories",
    price: 299,
    image: "https://images.unsplash.com/photo-1733913106110-3f9832a788a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwY2FibGUlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzI1MjQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 178,
    inStock: true,
    description: "Single-mode fiber patch cable with SC/APC connectors for extending your ONT placement.",
    specs: [
      "Single-mode 9/125",
      "SC/APC to SC/APC",
      "5 meters length",
      "Low insertion loss",
      "Bend-insensitive fiber",
      "Available in 2m, 5m, 10m, 15m",
    ],
  },
  {
    id: "splitter",
    name: "RJ45 Network Splitter Adapter",
    category: "Cables & Accessories",
    price: 199,
    image: "https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMG5ldHdvcmslMjBzd2l0Y2h8ZW58MXx8fHwxNzcyNTI0OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.1,
    reviews: 95,
    inStock: true,
    description: "Compact RJ45 splitter for sharing a single Ethernet port between two devices.",
    specs: [
      "1-to-2 RJ45 splitter",
      "Supports 100 Mbps per port",
      "No power required",
      "Compact inline design",
      "Gold-plated connectors",
    ],
  },

  // Special
  {
    id: "bundle-home",
    name: "Cherrinet Home Starter Bundle",
    category: "Special",
    price: 3999,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1558651535-4bf0dc9adc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXNoJTIwd2lmaSUyMHN5c3RlbSUyMGhvbWV8ZW58MXx8fHwxNzcyNTI0OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 312,
    badge: "Bundle Deal",
    inStock: true,
    description: "Everything you need: Wi-Fi 6 router + GPON ONT + 10m CAT6 cable + surge protector. Save ₹1,500!",
    specs: [
      "Wi-Fi 6 Dual-Band Router included",
      "GPON Fiber Modem (ONT) included",
      "10m CAT6 cable included",
      "Surge protector included",
      "Free installation support",
      "1-year extended warranty",
    ],
  },
  {
    id: "bundle-gaming",
    name: "Cherrinet Gaming Bundle",
    category: "Special",
    price: 7999,
    originalPrice: 10499,
    image: "https://images.unsplash.com/photo-1670341447004-606a07fcfaa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMG92ZXIlMjBldGhlcm5ldCUyMFBPRSUyMGluamVjdG9yfGVufDF8fHx8MTc3MjUyNDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 67,
    badge: "Best Value",
    inStock: true,
    description: "Gaming Router Pro + XGS-PON Modem + 20m CAT6 cable. Built for competitive gamers.",
    specs: [
      "Gaming Router Pro included",
      "XGS-PON 10G Modem included",
      "20m CAT6 cable included",
      "Gaming-optimized configuration",
      "Priority support for 1 year",
      "2-year extended warranty",
    ],
  },
  {
    id: "bundle-office",
    name: "Cherrinet Smart Office Kit",
    category: "Special",
    price: 14999,
    originalPrice: 19999,
    image: "https://images.unsplash.com/photo-1752262167753-37a0ec83f614?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBodWIlMjBkZXZpY2V8ZW58MXx8fHwxNzcyNDI4NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 28,
    badge: "Enterprise",
    inStock: true,
    description: "Complete office networking: WLAN Hub + 2 Ceiling APs + 8-Port PoE Switch + Cabling. Up to 50 users.",
    specs: [
      "WLAN Hub Controller included",
      "2x Ceiling-mount APs included",
      "8-Port PoE+ Switch included",
      "Professional installation included",
      "VLAN pre-configuration",
      "3-year enterprise warranty",
    ],
  },
];

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹2,000", min: 0, max: 1999 },
  { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "₹10,000+", min: 10000, max: Infinity },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activePriceRange, setActivePriceRange] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch = activeCategory === "All Products" || p.category === activeCategory;
    const priceRange = priceRanges.find((r) => r.label === activePriceRange);
    const priceMatch = priceRange ? p.price >= priceRange.min && p.price <= priceRange.max : true;
    const searchMatch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && priceMatch && searchMatch;
  });

  const handleEnquire = (product: Product) => {
    setEnquiryProduct(product);
    setShowEnquiry(true);
    setSubmitted(false);
    setFormData({ name: "", phone: "", email: "" });
    setFormErrors({});
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) errors.phone = "Enter valid 10-digit mobile number";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = "Enter a valid email";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const subject = `Cherrinet Product Enquiry - ${enquiryProduct?.name || "Product"}`;
    const body = [
      `Product: ${enquiryProduct?.name || "N/A"}`,
      `Name: ${formData.name}`,
      `Phone: +91 ${formData.phone}`,
      `Email: ${formData.email}`,
      "",
      "Please contact this customer regarding the product enquiry.",
      "",
      "Source: Cherrinet product enquiry form",
    ].join("\n");

    setSubmitting(true);
    setSubmitError(null);

    try {
      await sendMail({
        subject,
        body,
        replyTo: formData.email.trim(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Unable to send your enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && /^[6-9]\d{9}$/.test(formData.phone.trim()) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());

  const categoryCount = (cat: string) =>
    cat === "All Products" ? allProducts.length : allProducts.filter((p) => p.category === cat).length;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Products & Accessories</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Networking Hardware & Gear
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Routers, modems, mesh systems, extenders, and everything you need for a flawless internet experience.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-white border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl bg-input-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
                Category:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeCategory === cat
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground hover:bg-gray-200"
                    }`}
                  >
                    {cat} ({categoryCount(cat)})
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="flex items-start gap-4 flex-col sm:flex-row">
              <span className="text-sm text-muted-foreground shrink-0 pl-6">Price:</span>
              <div className="flex flex-wrap gap-1.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range.label)}
                    className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activePriceRange === range.label
                        ? "bg-primary text-white"
                        : "bg-muted text-muted-foreground hover:bg-gray-200"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-foreground">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""}
              {activeCategory !== "All Products" && (
                <> in <span className="text-foreground">{activeCategory}</span></>
              )}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onEnquire={handleEnquire} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <p className="text-muted-foreground">No products match your filters.</p>
              <button
                onClick={() => {
                  setActiveCategory("All Products");
                  setActivePriceRange("All");
                  setSearchQuery("");
                }}
                className="text-sm text-primary hover:text-[#8E1B22] cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center mb-10">
            <span className="text-sm text-primary uppercase tracking-wider">Why Cherrinet Products</span>
            <h2 className="text-2xl sm:text-3xl text-foreground">Built for Cherrinet, Built for You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Certified Compatible", desc: "Every product is tested and certified to work seamlessly with Cherrinet's fiber network." },
              { title: "1-Year Warranty", desc: "All hardware comes with a minimum 1-year warranty with doorstep replacement." },
              { title: "Expert Installation", desc: "Optional professional installation by our trained technicians at no extra cost." },
              { title: "Easy Returns", desc: "7-day no-questions-asked return policy on all unopened products." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 bg-muted/40 rounded-2xl text-center">
                <h4 className="text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h3 className="text-white">Not sure which product is right for you?</h3>
              <p className="text-sm text-gray-400">Our experts can help you choose the perfect setup for your home or office.</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="tel:+914449303030"
                className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm hover:bg-[#8E1B22] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="mailto:support@cherrinet.in"
                className="flex items-center gap-2 border border-gray-600 text-gray-300 px-5 py-2.5 rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {showEnquiry && enquiryProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-foreground">Enquiry Submitted!</h2>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Thanks for your interest in <span className="text-foreground">{enquiryProduct.name}</span>. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setShowEnquiry(false)}
                  className="mt-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-foreground mb-1">Enquire About</h2>
                <p className="text-sm text-primary mb-4">{enquiryProduct.name}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in your details and our team will reach out with pricing, availability, and installation options.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-name" className="text-sm text-foreground">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="enq-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className={`px-4 py-2.5 border rounded-xl bg-input-background text-sm focus:outline-none focus:ring-2 transition-colors ${
                        formErrors.name ? "border-[#D1444C] focus:ring-[#F5D7D9]" : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                    />
                    {formErrors.name && <span className="text-xs text-[#B2222B]">{formErrors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-phone" className="text-sm text-foreground">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`px-4 py-2.5 border rounded-xl bg-input-background text-sm focus:outline-none focus:ring-2 transition-colors ${
                        formErrors.phone ? "border-[#D1444C] focus:ring-[#F5D7D9]" : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                    />
                    {formErrors.phone && <span className="text-xs text-[#B2222B]">{formErrors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-email" className="text-sm text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={`px-4 py-2.5 border rounded-xl bg-input-background text-sm focus:outline-none focus:ring-2 transition-colors ${
                        formErrors.email ? "border-[#D1444C] focus:ring-[#F5D7D9]" : "border-border focus:ring-primary/20 focus:border-primary"
                      }`}
                    />
                    {formErrors.email && <span className="text-xs text-[#B2222B]">{formErrors.email}</span>}
                  </div>

                  {submitError && (
                    <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={!isFormValid || submitting}
                    className={`mt-2 py-3 rounded-xl text-sm transition-colors cursor-pointer ${
                      isFormValid && !submitting
                        ? "bg-primary text-white hover:bg-[#8E1B22]"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "Sending…" : "Submit Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
