import { Check, Zap, Star } from "lucide-react";

export interface Plan {
  id: string;
  name: string;
  speed: string;
  price: number;
  data: string;
  benefits: string[];
  ott?: string[];
  popular?: boolean;
}

interface PlanCardProps {
  plan: Plan;
  onSelect: (plan: Plan) => void;
}

export function PlanCard({ plan, onSelect }: PlanCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 transition-all hover:shadow-lg ${
        plan.popular
          ? "border-primary shadow-md shadow-[#F5D7D9]"
          : "border-border hover:border-primary/30"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs flex items-center gap-1">
          <Star className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Zap className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">{plan.name}</span>
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-4xl text-foreground">{plan.speed}</span>
            <span className="text-muted-foreground text-sm">Mbps</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">&#8377;</span>
          <span className="text-3xl text-foreground">{plan.price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>

        {/* Data */}
        <div className="px-3 py-2 bg-muted rounded-lg text-sm text-center">
          {plan.data} Data
        </div>

        {/* Benefits */}
        <div className="flex flex-col gap-2.5 mt-2">
          {plan.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* OTT */}
        {plan.ott && plan.ott.length > 0 && (
          <div className="mt-2 p-3 bg-secondary rounded-lg">
            <p className="text-xs text-secondary-foreground mb-2">Bundled OTT</p>
            <div className="flex flex-wrap gap-2">
              {plan.ott.map((app, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2"
                >
                  <img
                    src={`/OTT/${encodeURIComponent(app)}.svg`}
                    alt={app}
                    className="h-6 w-auto object-contain"
                  />
                  <span className="text-xs text-muted-foreground">{app}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">All OTTs available from Rs.29/month</p>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onSelect(plan)}
          className={`w-full py-3 rounded-xl text-sm transition-colors cursor-pointer ${
            plan.popular
              ? "bg-primary text-white hover:bg-[#8E1B22]"
              : "bg-foreground text-white hover:bg-gray-800"
          }`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
}
