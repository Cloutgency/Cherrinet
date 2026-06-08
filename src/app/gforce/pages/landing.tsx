import { useState } from "react";
import { Link } from "react-router";
import {
  Zap,
  Shield,
  Building2,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Headphones,
  Server,
} from "lucide-react";

const faqs = [
  {
    q: "What is G-Force?",
    a: "G-Force is the dedicated business arm of Cherrinet, built for enterprises, SMBs, co-working spaces, and IT parks across Tamil Nadu. It delivers symmetric fiber bandwidth, SLA-backed uptime, static IPs, and managed networking.",
  },
  {
    q: "How is G-Force different from Cherrinet's home plans?",
    a: "G-Force comes with guaranteed SLAs, 24/7 enterprise support, dedicated bandwidth (no contention), redundant routing, and managed services like firewalls and VPNs — none of which are available on consumer plans.",
  },
  {
    q: "What kind of businesses do you serve?",
    a: "From 5-person startups to 1,000-seat offices: tech companies, BPOs, hospitals, hotels, retail chains, manufacturing plants, and educational institutions.",
  },
  {
    q: "Do you offer custom bandwidth plans?",
    a: "Yes. Beyond our standard tiers, we tailor solutions for high-bandwidth or multi-location deployments. Reach out via the Subscribe page for a custom quote.",
  },
  {
    q: "What is the typical installation time?",
    a: "For serviced areas, installations are typically completed within 3–5 business days from contract signing. New routes may take 7–14 business days.",
  },
];

const plans = [
  {
    name: "G-FORCE 2",
    speed: "1",
    tagline: "For small teams up to 15 seats",
    //benefits: ["Symmetric speeds", "1 static IP", "8x5 priority support", "Basic SLA"],
    benefits: ["FUP 4TB", "Post FUP 10 Mbps"],
  },
  {
    name: "G-FORCE 6",
    speed: "1",
    tagline: "For growing offices up to 50 seats",
    //benefits: ["Dedicated bandwidth","5 static IPs","24/7 priority support","99.9% SLA","Managed router",],
    benefits: ["FUP 12TB", "Post FUP 50 Mbps"],
    popular: true,
  },
  {
    name: "G-FORCE 10",
    speed: "1 Gbps",
    tagline: "For large offices & multi-site",
    //benefits: ["Redundant uplinks","Static IP block","Dedicated account manager","99.99% SLA","Managed firewall + VPN",],
    benefits: ["FUP 20TB", "Post FUP 200 Mbps"],
  },
];

export function GForceLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#3A0A0E]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.4),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit">
              <Zap className="w-4 h-4 text-[#D1444C] fill-[#D1444C]" />
              <span className="text-sm text-[#FBEEEF] uppercase tracking-wider">
                G-Force · Cherrinet for Business
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Enterprise-Grade Fiber for
              <br />
              <span className="text-[#D1444C]">Tamil Nadu's Businesses</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Dedicated bandwidth, SLA-backed uptime, and managed networking — engineered
              for offices, factories, and campuses that can't afford to slow down.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link
                to="/g-force/subscribe"
                className="flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/g-force/plans"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                View Plans →
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10 max-w-lg">
              <div className="flex flex-col gap-1">
                <span className="text-2xl text-white">99.99%</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">SLA Uptime</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl text-white">24/7</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">NOC Support</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl text-white">2,000+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why G-Force */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Why G-Force</span>
            <h2 className="text-3xl lg:text-4xl text-foreground">Built for Mission-Critical Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Server,
                title: "Dedicated Bandwidth",
                desc: "No contention ratios. The speeds you pay for are the speeds you get — always.",
              },
              {
                icon: Shield,
                title: "SLA-Backed Uptime",
                desc: "99.9% to 99.99% guaranteed uptime with credits for any breach.",
              },
              {
                icon: Headphones,
                title: "Enterprise Support",
                desc: "24/7 NOC, dedicated account managers, and on-site engineers.",
              },
              {
                icon: Building2,
                title: "Multi-site Networking",
                desc: "Site-to-site VPN, MPLS, and managed firewalls across all your locations.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-4 p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all"
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

      {/* Plans (price hidden) */}
      <section className="bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Plans</span>
            <h2 className="text-3xl lg:text-4xl text-foreground">Tailored to Your Business</h2>
            <p className="text-muted-foreground max-w-md">
              Pricing is customized per location and bandwidth needs. Reach out for a tailored quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-5 p-7 rounded-2xl border-2 bg-white transition-all hover:shadow-lg ${
                  plan.popular ? "border-primary shadow-md" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-primary uppercase tracking-wider">{plan.name}</span>
                  <p className="text-sm text-muted-foreground">{plan.tagline}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl text-foreground">{plan.speed}</span>
                  {plan.speed !== "1 Gbps" && (
                    <span className="text-sm text-muted-foreground">Gbps</span>
                  )}
                </div>
                <div className="pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground">Custom pricing on request</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/g-force/subscribe"
                  className={`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-[#8E1B22]"
                      : "bg-foreground text-white hover:bg-gray-800"
                  }`}
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/g-force/plans"
              className="inline-flex items-center gap-2 text-primary hover:text-[#8E1B22] transition-colors text-sm"
            >
              See full plan list
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-12">
            <span className="text-sm text-primary uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl lg:text-4xl text-foreground">Common Questions</h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="border border-border rounded-2xl overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/40 transition-colors cursor-pointer"
                >
                  <span className="text-sm text-foreground">{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
