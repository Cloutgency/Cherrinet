import { Link } from "react-router";
import { Wifi, Shield, Clock, Headphones, Zap, ArrowRight, Play, Users, Award, Globe, Check, Tv } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CoverageChecker } from "../components/coverage-checker";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Speeds up to 1 Gbps, with uploads as fast as your downloads. Built for streaming, gaming, and everything in between." },
  { icon: Shield, title: "99.9% Uptime", desc: "Always on, always reliable. Backed by redundant fiber infrastructure you can count on, every hour of the day." },
  { icon: Clock, title: "24/7 Support", desc: "Real humans, ready to help. Whenever you need us, day or night." },
  { icon: Headphones, title: "Free Installation", desc: "We set it all up at no cost. No hidden charges, no fine print, no surprises." },
];

const stats = [
  { value: "10+ Years", label: "Powering Homes" },
  { value: "99.9%", label: "Network Uptime" },
  { value: "200K+", label: "Active Subscribers" },
  { value: "4.8/5", label: "Customer Rating" },
];

const plans = [
  {
    name: "Budget Plan",
    tagline: "50 Mbps for light browsing",
    speed: "50",
    price: "479",
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Ideal for browsing and social media",
      "Unlimited data",
      "Free router included",
    ],
  },
  {
    name: "Family Plan",
    tagline: "100 Mbps for family streaming",
    speed: "100",
    price: "679",
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Perfect for multiple users",
      "Unlimited data",
      "Free dual-band router",
    ],
  },
  {
    name: "Premium Plan",
    tagline: "150 Mbps for heavy streaming",
    speed: "150",
    price: "799",
    popular: true,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Great for 4K streaming",
      "Unlimited data",
      "High-performance router included",
    ],
  },
  {
    name: "Premium Plan",
    tagline: "200 Mbps for gaming and work",
    speed: "200",
    price: "999",
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Optimized for gaming and remote work",
      "Unlimited data",
      "Free Wi-Fi 6 router",
    ],
  },
  {
    name: "Premium Plan",
    tagline: "500 Mbps for large homes",
    speed: "500",
    price: "1199",
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Two routers included",
      "Unlimited data",
      "Best for multiple streaming devices",
    ],
  },
  {
    name: "Power Plan",
    tagline: "1000 Mbps for premium users",
    speed: "1000",
    price: "1999",
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Ultimate speed for big homes and offices",
      "Unlimited data",
      "Two high-speed routers included",
    ],
  },
];

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="hero-section relative overflow-hidden bg-[#1a2f58] md:bg-gradient-to-br md:from-gray-900 md:via-gray-900 md:to-[#3A0A0E]">
        {/* Gradient overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:py-28 lg:py-36">
          <div className="max-w-2xl flex flex-col gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full w-fit">
              <Wifi className="w-4 h-4 text-[#D1444C]" />
              <span className="text-sm text-[#F5D7D9]">India's Most Trusted Fibernet Provider</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              <span className="text-[#D1444C]">Blazing Fast Fibre</span>
              <br />
              Made for the Way You Live Online.
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Stream. Game. Work from home. Cherrinet's pure fiber-optic broadband keeps it all running smooth.
            </p>

            {/* PIN Code Checker */}
            <div className="mt-2 flex flex-col gap-3">
              <p className="text-sm text-gray-400">Check if we're available in your area:</p>
              <CoverageChecker compact />
            </div>

            <div className="flex items-center gap-6 mt-4">
              <Link
                to="/plans"
                className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors"
              >
                View Plans
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#features"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Demo
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="block md:hidden w-full relative -mt-1">
          {/* Gradient fade to blend the seam smoothly */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a2f58] to-transparent pointer-events-none" />
          <ImageWithFallback
            src="/images/Mob Hero cherrinet.png"
            alt="Cherrinet Banner"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl lg:text-4xl text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Why Cherrinet</span>
            <h2 className="text-3xl lg:text-4xl text-foreground">Built for the Way You Live Online</h2>
            <p className="text-muted-foreground max-w-md">
              Streaming, gaming, working, learning.<br />
              Cherrinet delivers pure fiber-optic internet you can rely on, every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-6 bg-white rounded-2xl border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Plans */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Plans</span>
            <h2 className="text-3xl lg:text-4xl text-foreground">A Plan for Every Home</h2>
            <p className="text-muted-foreground max-w-md">
              From casual browsing to heavy gaming, solo work-from-home to full-house streaming, there's a Cherrinet plan that fits the way you live.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {plans.slice(0, 3).map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${plan.popular
                  ? "border-primary bg-secondary/30 shadow-md"
                  : "border-border hover:border-primary/30"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                {/* Header */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-primary uppercase tracking-wider">{plan.name}</span>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>

                {/* Speed */}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl text-foreground">{plan.speed}</span>
                  <span className="text-sm text-muted-foreground">Mbps</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-0.5 pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">&#8377;</span>
                  <span className="text-3xl text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>

                {/* Data */}
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{plan.data} Data</span>
                </div>

                {/* Benefits */}
                <ul className="flex flex-col gap-2.5">
                  {plan.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* OTT */}
                {plan.ott?.length > 0 && (
                  <div className="flex flex-col gap-2 pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        OTT Included
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {plan.ott.map((o, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 rounded-xl border border-border bg-white px-2 py-2"
                        >
                          <img
                            src={`/OTT/${encodeURIComponent(o)}.svg`}
                            alt={o}
                            className="h-6 w-auto object-contain"
                          />
                          <span className="text-xs text-muted-foreground">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  to="/plans"
                  className={`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${plan.popular
                    ? "bg-primary text-white hover:bg-[#8E1B22]"
                    : "bg-foreground text-white hover:bg-gray-800"
                    }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm"
            >
              View all plans and compare
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-sm text-[#D1444C] uppercase tracking-wider">TRUSTED FROM DAY ONE</span>
              <h2 className="text-3xl lg:text-4xl text-white">Connecting Homes & Businesses Since 2015</h2>
              <p className="text-gray-400 leading-relaxed">
                For nearly a decade, Cherrinet has been delivering reliable fiber internet to over 150,000 homes and businesses. We're not just an ISP. We're the internet partner you can count on.
              </p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#D1444C]" />
                  <span className="text-sm text-gray-300">200K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#D1444C]" />
                  <span className="text-sm text-gray-300">TRAI Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#D1444C]" />
                  <span className="text-sm text-gray-300">100+ Areas</span>
                </div>
              </div>
              <Link
                to="/about-us"
                className="mt-2 inline-flex items-center gap-2 text-[#D1444C] hover:text-[#E47A82] transition-colors text-sm w-fit"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="/images/chennai.jpg.jpeg"
                alt="Chennai skyline"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#B2222B] to-[#8E1B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <h2 className="text-3xl text-white">Ready to switch to Cherrinet?</h2>
              <p className="text-[#FBEEEF]">
                Get started in minutes. Free installation and no lock-in contracts.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/plans"
                className="bg-white text-primary px-7 py-3.5 rounded-xl text-sm hover:bg-gray-100 transition-colors"
              >
                Browse Plans
              </Link>
              <Link
                to="/cherrinet-coverage"
                className="border border-white/40 text-white px-7 py-3.5 rounded-xl text-sm hover:bg-white/10 transition-colors"
              >
                Check Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
