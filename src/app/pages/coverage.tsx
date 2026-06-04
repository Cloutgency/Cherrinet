import { useState } from "react";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { CoverageChecker } from "../components/coverage-checker";
import { LeadCaptureForm } from "../components/lead-capture-form";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TamilNaduMap, tamilNaduDistricts } from "../components/tamil-nadu-map";
import type { Plan } from "../components/plan-card";

const eligiblePlans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    speed: "75",
    price: 599,
    data: "Unlimited",
    benefits: ["HD streaming", "Free dual-band router"],
    ott: ["Hotstar"],
  },
  {
    id: "pro",
    name: "Pro",
    speed: "100",
    price: 699,
    data: "Unlimited",
    benefits: ["4K streaming", "Wi-Fi 6 router", "Priority support"],
    ott: ["Hotstar", "ZEE5"],
    popular: true,
  },
  {
    id: "ultra",
    name: "Ultra",
    speed: "300",
    price: 999,
    data: "Unlimited",
    benefits: ["8K ready", "Wi-Fi 6E mesh", "VIP support"],
    ott: ["Hotstar", "ZEE5", "SonyLIV", "Amazon Prime"],
  },
];

const coveredAreas = [
  "Adyar", "Anna Nagar", "Ashok Nagar", "Besant Nagar", "Chromepet",
  "Egmore", "Guindy", "K.K. Nagar", "Kodambakkam", "Mylapore",
  "Nungambakkam", "Porur", "T. Nagar", "Tambaram", "Teynampet",
  "Thiruvanmiyur", "Velachery", "Virugambakkam",
];

export function Coverage() {
  const [isCovered, setIsCovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleCovered = () => {
    setIsCovered(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero — Tamil Nadu Coverage Map */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FBEEEF] via-white to-secondary/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full w-fit">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary">Tamil Nadu Coverage</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                Stay Connected,
                <br />
                <span className="text-primary">We are Here</span>
              </h1>
              <p className="text-muted-foreground max-w-md">
                Cherrinet's fiber network spans across Tamil Nadu — bringing blazing fast,
                reliable internet to {tamilNaduDistricts.length}+ districts and growing every day.
              </p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex flex-col">
                  <span className="text-2xl text-primary">{tamilNaduDistricts.length}+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Districts</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="text-2xl text-primary">150K+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Subscribers</span>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex flex-col">
                  <span className="text-2xl text-primary">100+</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Cities</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <TamilNaduMap pins={tamilNaduDistricts} />
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Coverage</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Check Availability
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Enter your PIN code to check if Cherrinet fiber broadband is available in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Checker */}
      <section className="bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="p-8 bg-muted/40 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground">Service Availability Check</h3>
                <p className="text-sm text-muted-foreground">Enter your 6-digit Chennai PIN code</p>
              </div>
            </div>
            <CoverageChecker onCovered={handleCovered} />
          </div>
        </div>
      </section>

      {/* Eligible Plans (shown when covered) */}
      {isCovered && (
        <section className="bg-green-50/50 border-t border-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col items-center gap-2 text-center mb-8">
              <div className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">Available in your area</span>
              </div>
              <h2 className="text-2xl text-foreground">Eligible Plans</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {eligiblePlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex flex-col gap-4 p-6 bg-white rounded-2xl border-2 transition-all hover:shadow-lg ${
                    plan.popular ? "border-primary" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="text-xs text-primary bg-secondary px-2 py-1 rounded-md w-fit">
                      Recommended
                    </span>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">{plan.name}</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl text-foreground">{plan.speed}</span>
                      <span className="text-sm text-muted-foreground">Mbps</span>
                    </div>
                  </div>
                  <p className="text-2xl text-foreground">&#8377;{plan.price}<span className="text-sm text-muted-foreground">/mo</span></p>
                  <div className="flex flex-col gap-2">
                    {plan.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span className="text-sm text-muted-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                  {plan.ott && (
                    <div className="flex flex-wrap gap-1">
                      {plan.ott.map((app, i) => (
                        <span key={i} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  )}
                  <button
                    onClick={() => { setSelectedPlan(plan); setShowForm(true); }}
                    className={`w-full py-3 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-[#8E1B22]"
                        : "bg-foreground text-white hover:bg-gray-800"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coverage Areas */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm text-primary uppercase tracking-wider">Service Areas</span>
              <h2 className="text-2xl text-foreground mt-2 mb-4">Currently Serving</h2>
              <p className="text-sm text-muted-foreground mb-6">
                We're rapidly expanding across Chennai. Here are some of the areas we currently cover:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {coveredAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 px-3 py-2.5 bg-muted/50 rounded-lg"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                ...and 80+ more localities across Chennai
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1667753980494-633cd2687af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGVubmFpJTIwSW5kaWElMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzI1MjI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chennai"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-foreground mb-1">Get Connected</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details to get started with Cherrinet.
            </p>
            <LeadCaptureForm
              selectedPlan={selectedPlan}
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
