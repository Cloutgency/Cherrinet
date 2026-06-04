import { Link } from "react-router";
import { CheckCircle2, ArrowRight, Sparkles, Plus } from "lucide-react";

const plans = [
  {
    name: "G-FORCE 2",
    speed: "1 Gbps",
    tagline: "For small teams up to 15 seats",
    //benefits: ["Symmetric speeds", "1 static IP", "8x5 priority support", "Basic SLA"],
    benefits: ["FUP 4TB", "Post FUP 10 Mbps"],
  },
  {
    name: "G-FORCE 6",
    speed: "1 Gbps",
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
  {
    name: "SME SILVER",
    speed: "250 Mbps",
    //tagline: "For small teams up to 15 seats",
    //benefits: ["Symmetric speeds", "1 static IP", "8x5 priority support", "Basic SLA"],
    benefits: ["FUP 2250 GB", "Post FUP 2 Mbps"],
  },
  {
    name: "SME GOLD",
    speed: "250 Mbps",
    //tagline: "For growing offices up to 50 seats",
    //benefits: ["Dedicated bandwidth","5 static IPs","24/7 priority support","99.9% SLA","Managed router",],
    benefits: ["FUP 3250 GB", "Post FUP 2 Mbps"],
    popular: true,
  },
  {
    name: "SME DIAMOND",
    speed: "250 Mbps",
    //tagline: "For large offices & multi-site",
    //benefits: ["Redundant uplinks","Static IP block","Dedicated account manager","99.99% SLA","Managed firewall + VPN",],
    benefits: ["FUP 4250 GB", "Post FUP 2 Mbps"],
  },
  {
    name: "SME PLATINUM",
    speed: "250 Mbps",
    //tagline: "For large offices & multi-site",
    //benefits: ["Redundant uplinks","Static IP block","Dedicated account manager","99.99% SLA","Managed firewall + VPN",],
    benefits: ["FUP 5250 GB", "Post FUP 2 Mbps"],
  },
  {
    name: "Custom",
    speed: "10 Gbps+",
    tagline: "Campuses, data centers, ISPs",
    benefits: [
      "Custom routing & peering",
      "Dedicated dark fiber options",
      "Engineering-led onboarding",
      "Custom SLA",
      "Multi-site MPLS",
    ],
  },
];

export function GForcePlans() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Business Plans</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">Plans Built for Business</h1>
            <p className="text-muted-foreground max-w-lg">
              Symmetric speeds, dedicated bandwidth, and SLA-backed reliability. Pricing is
              tailored to your location and requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col gap-5 p-7 rounded-2xl border-2 transition-all hover:shadow-lg ${
                  plan.popular ? "border-primary bg-secondary/30 shadow-md" : "border-border"
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
                <div className="flex items-baseline gap-1 pb-4 border-b border-border">
                  <span className="text-3xl text-foreground">{plan.speed}</span>
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
                  to="/gforce/subscribe"
                  className={`mt-auto w-full py-2.5 rounded-xl text-sm text-center transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-[#8E1B22]"
                      : "bg-foreground text-white hover:bg-gray-800"
                  }`}
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}

            {/* Custom Plan card */}
            <div className="relative flex flex-col gap-5 p-7 rounded-2xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-white hover:shadow-lg hover:border-primary transition-all">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                  Tailor-made
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-sm text-primary uppercase tracking-wider">Custom Plan</span>
                <p className="text-sm text-muted-foreground">
                  Have unique requirements? We'll engineer a plan and a network around your business.
                </p>
              </div>

              <div className="flex items-baseline gap-1 pb-4 border-b border-border">
                <span className="text-3xl text-foreground">Let's Talk</span>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Bandwidth & connectivity
                </span>
                <ul className="flex flex-col gap-2">
                  {[
                    "Custom symmetric speeds (1 Gbps – 10 Gbps+)",
                    "Dedicated dark fiber & peering",
                    "Multi-site MPLS / SD-WAN",
                    "Static IP blocks /28 or /29",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Add-on equipment
                </span>
                <ul className="flex flex-col gap-2">
                  {[
                    "Wi-Fi 6E mesh systems & extenders",
                    "Managed firewalls & VPN gateways",
                    "PoE switches & access points",
                    "On-site engineering & installation",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/gforce/subscribe"
                className="mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
