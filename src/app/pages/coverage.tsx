import { useState } from "react";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { CoverageChecker } from "../components/coverage-checker";
import { LeadCaptureForm } from "../components/lead-capture-form";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CoverageAreasModal } from "../components/coverage-areas-modal";
import { COVERAGE_AREAS } from "../data/coverageAreas";
import { PlanCard, type Plan } from "../components/plan-card";

const eligiblePlans: Plan[] = [
  {
    id: "budget",
    name: "Budget Plan",
    speed: "50",
    price: 479,
    data: "Unlimited",
    benefits: [
      "Ideal for browsing and social media",
      "Unlimited data",
      "Free router included",
    ],
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
  },
  {
    id: "family",
    name: "Family Plan",
    speed: "100",
    price: 679,
    data: "Unlimited",
    benefits: [
      "Perfect for multiple users",
      "Unlimited data",
      "Free dual-band router",
    ],
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
    popular: true,
  },
  {
    id: "premium-150",
    name: "Premium Plan",
    speed: "150",
    price: 799,
    data: "Unlimited",
    benefits: [
      "Great for 4K streaming",
      "Unlimited data",
      "High-performance router included",
    ],
    ott: ["Jio", "Prime", "Sony liv", "Z5"],
  },
];

const coveredAreas = COVERAGE_AREAS.slice(0, 18);
const totalAreaCount = COVERAGE_AREAS.length;
const districtCount = 28;

export function Coverage() {
  const [isCovered, setIsCovered] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showAreasModal, setShowAreasModal] = useState(false);

  const handleCovered = () => {
    setIsCovered(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero — Tamil Nadu Coverage Map */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FBEEEF] via-white to-secondary/40 border-b border-border min-h-[60vh] lg:min-h-[72vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch h-full">
            <div className="flex flex-col gap-5 justify-center px-4 py-8 lg:py-12">
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
                reliable internet to {districtCount}+ districts and growing every day.
              </p>
              <div className="flex items-center gap-6 mt-2">
                <div className="flex flex-col">
                  <span className="text-2xl text-primary">{districtCount}+</span>
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
            <div className="flex justify-center items-center h-full overflow-hidden rounded-3xl shadow-xl border border-border bg-white min-h-0 mt-6 lg:mt-12">
              <img
                src="/images/map.png"
                alt="Tamil Nadu coverage map"
                className="h-full w-full object-cover"
              />
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
                <div key={plan.id} className="flex">
                  <PlanCard plan={plan} onSelect={(selectedPlan) => { setSelectedPlan(selectedPlan); setShowForm(true); }} />
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
                ...and {totalAreaCount - coveredAreas.length}+ more localities across Chennai
              </p>
              <div className="mt-4">
                <button
                  onClick={() => setShowAreasModal(true)}
                  className="text-sm px-3 py-2 bg-primary text-white rounded-lg"
                >
                  View all areas
                </button>
              </div>
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

      {showAreasModal && (
        <CoverageAreasModal
          open={showAreasModal}
          onClose={() => setShowAreasModal(false)}
          areas={COVERAGE_AREAS}
        />
      )}
    </div>
  );
}
