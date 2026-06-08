import { useState } from "react";
import { SlidersHorizontal, X, Sparkles, Plus, ArrowRight } from "lucide-react";
import { PlanCard, type Plan } from "../components/plan-card";
import { LeadCaptureForm } from "../components/lead-capture-form";

const allPlans: Plan[] = [
  {
    id: "budget",
    name: "Budget Plan",
    speed: "50",
    price: 479,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Ideal for light browsing and social media",
      "Unlimited data",
      "Free router included",
      "No installation charges",
    ],
  },
  {
    id: "family",
    name: "Family Plan",
    speed: "100",
    price: 679,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Perfect for family streaming",
      "Unlimited data",
      "Free dual-band router",
      "No installation charges",
    ],
  },
  {
    id: "premium-150",
    name: "Premium Plan",
    speed: "150",
    price: 799,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Great for heavy streaming",
      "Unlimited data",
      "High-performance router included",
    ],
    popular: true,
  },
  {
    id: "premium-200",
    name: "Premium Plan",
    speed: "200",
    price: 999,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Optimized for gaming and WFH",
      "Unlimited data",
      "Free Wi-Fi 6 router",
    ],
  },
  {
    id: "premium-500",
    name: "Premium Plan",
    speed: "500",
    price: 1199,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Two routers included",
      "Unlimited data",
      "Best for multiple streaming devices",
    ],
  },
  {
    id: "power",
    name: "Power Plan",
    speed: "1000",
    price: 1999,
    data: "Unlimited",
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    benefits: [
      "Ultimate speed for large homes and offices",
      "Unlimited data",
      "Two high-speed routers included",
    ],
  },
];

const speedFilters = ["All", "Up to 100 Mbps", "100-300 Mbps", "300+ Mbps"];
const budgetFilters = ["All", "Under ₹600", "₹600-₹900", "₹900+"];

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [speedFilter, setSpeedFilter] = useState("All");
  const [budgetFilter, setBudgetFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const filteredPlans = allPlans.filter((plan) => {
    const speed = parseInt(plan.speed);
    const price = plan.price;

    let speedMatch = true;
    if (speedFilter === "Up to 100 Mbps") speedMatch = speed <= 100;
    else if (speedFilter === "100-300 Mbps") speedMatch = speed >= 100 && speed <= 300;
    else if (speedFilter === "300+ Mbps") speedMatch = speed > 300;

    let budgetMatch = true;
    if (budgetFilter === "Under ₹600") budgetMatch = price < 600;
    else if (budgetFilter === "₹600-₹900") budgetMatch = price >= 600 && price <= 900;
    else if (budgetFilter === "₹900+") budgetMatch = price > 900;

    return speedMatch && budgetMatch;
  });

  const handleSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Plans & Pricing</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Choose Your Perfect Plan
            </h1>
            <p className="text-muted-foreground max-w-lg">
              All plans include unlimited data, free installation, and free Wi-Fi router. No hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="w-4 h-4" />
              Filter:
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-muted-foreground">Speed:</span>
                <div className="flex gap-1">
                  {speedFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSpeedFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        speedFilter === f
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground hover:bg-gray-200"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-muted-foreground">Budget:</span>
                <div className="flex gap-1">
                  {budgetFilters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setBudgetFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                        budgetFilter === f
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground hover:bg-gray-200"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {filteredPlans.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} onSelect={handleSelect} />
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
                    Need something different? Build a plan around your needs.
                  </p>
                </div>

                <div className="flex items-baseline gap-1 pb-4 border-b border-border">
                  <span className="text-3xl text-foreground">Let's Talk</span>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {[
                    "Custom speeds beyond 1 Gbps",
                    "Add-on mesh extenders & switches",
                    "Static IPs & dedicated bandwidth",
                    "Multi-location bundling",
                    "Pricing tailored to your usage",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Plus className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan(null);
                    setShowForm(true);
                  }}
                  className="mt-auto w-full py-2.5 rounded-xl text-sm text-center bg-primary text-white hover:bg-[#8E1B22] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <p className="text-muted-foreground">No plans match your filters.</p>
              <button
                onClick={() => {
                  setSpeedFilter("All");
                  setBudgetFilter("All");
                }}
                className="text-sm text-primary hover:text-[#8E1B22] cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lead Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            <h2 className="text-foreground mb-1">Get Started</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and we'll set up your connection.
            </p>
            <LeadCaptureForm
              selectedPlan={selectedPlan}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      {/* FAQ Snippet */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-foreground mb-2">Have Questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            All plans include unlimited data, free installation, and a free Wi-Fi router. 
            Taxes extra as applicable. Plans are subject to coverage availability.
          </p>
          <a
            href="/support"
            className="text-sm text-primary hover:text-[#8E1B22] transition-colors"
          >
            Visit our FAQ page for more details →
          </a>
        </div>
      </section>
    </div>
  );
}
