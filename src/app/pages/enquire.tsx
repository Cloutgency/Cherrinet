import { useState } from "react";
import { CheckCircle2, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

type EnquiryType = "new-connection" | "additional-services" | "general";

const planOptions = [
  { id: "", label: "Select a plan" },
  { id: "starter", label: "Starter — 40 Mbps · ₹499/mo" },
  { id: "essential", label: "Essential — 75 Mbps · ₹599/mo" },
  { id: "pro", label: "Pro — 100 Mbps · ₹699/mo" },
  { id: "turbo", label: "Turbo — 200 Mbps · ₹899/mo" },
  { id: "ultra", label: "Ultra — 300 Mbps · ₹999/mo" },
  { id: "gigabit", label: "Gigabit — 1 Gbps · ₹1499/mo" },
  { id: "custom", label: "Custom plan (talk to us)" },
];

const addOnServices = [
  "Wi-Fi 6 Router upgrade",
  "Mesh extender / system",
  "Static IP address",
  "OTT bundle (Hotstar / ZEE5 / SonyLIV)",
  "Landline / VoIP",
  "On-site installation support",
  "Business email & domain",
];

const connectionTypes = ["Home (Residential)", "Business / Office"];

export function Enquire() {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("new-connection");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    altMobile: "",
    email: "",
    pincode: "",
    address: "",
    locality: "",
    connectionType: connectionTypes[0],
    plan: "",
    services: [] as string[],
    upgradePlan: "",
    message: "",
    consent: false,
  });

  const errors = {
    name: form.name.length > 0 && form.name.trim().length < 2 ? "Enter your full name" : "",
    mobile:
      form.mobile.length > 0 && !/^[6-9]\d{9}$/.test(form.mobile)
        ? "Enter a valid 10-digit mobile starting with 6–9"
        : "",
    altMobile:
      form.altMobile.length > 0 && !/^[6-9]\d{9}$/.test(form.altMobile)
        ? "Enter a valid 10-digit number"
        : "",
    email:
      form.email.length > 0 && !/^\S+@\S+\.\S+$/.test(form.email) ? "Enter a valid email" : "",
    pincode:
      form.pincode.length > 0 && !/^\d{6}$/.test(form.pincode) ? "Must be 6 digits" : "",
  };

  const baseValid =
    form.name.trim().length >= 2 &&
    /^[6-9]\d{9}$/.test(form.mobile) &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    /^\d{6}$/.test(form.pincode) &&
    form.address.trim().length >= 5 &&
    form.locality.trim().length >= 2 &&
    form.consent;

  const planValid = enquiryType === "new-connection" ? form.plan.length > 0 : true;
  const messageValid =
    enquiryType === "general" ? form.message.trim().length >= 10 : true;
  const valid = baseValid && planValid && messageValid;

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valid) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-secondary to-white min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-border shadow-sm text-center flex flex-col items-center gap-4">
          <CheckCircle2 className="w-14 h-14 text-green-600" aria-hidden="true" />
          <h1 className="text-foreground">Thank you, {form.name.split(" ")[0]}!</h1>
          <p className="text-sm text-muted-foreground">
            Your enquiry has been received. A Cherrinet representative will reach you on{" "}
            <span className="text-foreground">+91 {form.mobile}</span> within 24 hours.
          </p>
          <p className="text-xs text-muted-foreground">
            Reference ID: CHN-{Math.floor(Math.random() * 900000 + 100000)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Get Started</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Tell us what you need
            </h1>
            <p className="text-muted-foreground max-w-lg">
              New connection, add-on services, or just have a question? Fill in the form
              and our team will get back within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enquiry type selector */}
          <fieldset className="mb-8">
            <legend className="text-sm text-foreground mb-3">I want to…</legend>
            <div
              role="radiogroup"
              aria-label="Enquiry type"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                {
                  id: "new-connection" as const,
                  label: "Get a new connection",
                  icon: ArrowRight,
                },
                {
                  id: "additional-services" as const,
                  label: "Add services",
                  icon: Sparkles,
                },
                {
                  id: "general" as const,
                  label: "Ask a question",
                  icon: MessageSquare,
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="radio"
                  aria-checked={enquiryType === opt.id}
                  onClick={() => setEnquiryType(opt.id)}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    enquiryType === opt.id
                      ? "border-primary bg-secondary/40"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <opt.icon
                    className={`w-5 h-5 shrink-0 ${
                      enquiryType === opt.id ? "text-primary" : "text-muted-foreground"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-foreground">{opt.label}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            {/* Personal */}
            <Section title="Your details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="name"
                  label="Full name"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="As per your ID"
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@example.com"
                  error={errors.email}
                  autoComplete="email"
                />
                <Field
                  id="mobile"
                  label="Mobile number"
                  required
                  value={form.mobile}
                  onChange={(v) => setForm({ ...form, mobile: v.replace(/\D/g, "").slice(0, 10) })}
                  placeholder="10-digit mobile"
                  error={errors.mobile}
                  autoComplete="tel"
                  prefix="+91"
                />
                <Field
                  id="altMobile"
                  label="Alternate number (optional)"
                  value={form.altMobile}
                  onChange={(v) =>
                    setForm({ ...form, altMobile: v.replace(/\D/g, "").slice(0, 10) })
                  }
                  placeholder="10-digit mobile"
                  error={errors.altMobile}
                  prefix="+91"
                />
              </div>
            </Section>

            {/* Address */}
            <Section title="Installation address">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  id="pincode"
                  label="PIN code"
                  required
                  value={form.pincode}
                  onChange={(v) => setForm({ ...form, pincode: v.replace(/\D/g, "").slice(0, 6) })}
                  placeholder="6-digit PIN"
                  error={errors.pincode}
                  autoComplete="postal-code"
                />
                <Field
                  id="locality"
                  label="Locality / Area"
                  required
                  value={form.locality}
                  onChange={(v) => setForm({ ...form, locality: v })}
                  placeholder="e.g. Anna Nagar"
                />
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label htmlFor="address" className="text-sm text-foreground">
                    Full address <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="address"
                    rows={3}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Door no, street, landmark"
                    autoComplete="street-address"
                    className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="connectionType" className="text-sm text-foreground">
                    Connection type
                  </label>
                  <select
                    id="connectionType"
                    value={form.connectionType}
                    onChange={(e) => setForm({ ...form, connectionType: e.target.value })}
                    className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {connectionTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </Section>

            {/* Plan selection */}
            {enquiryType === "new-connection" && (
              <Section title="Choose a plan">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="plan" className="text-sm text-foreground">
                    Preferred plan <span className="text-primary">*</span>
                  </label>
                  <select
                    id="plan"
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {planOptions.map((p) => (
                      <option key={p.id} value={p.id} disabled={p.id === ""}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">
                    Not sure? Pick the closest match — we'll help you finalise the right plan.
                  </p>
                </div>
              </Section>
            )}

            {/* Add-on services */}
            {(enquiryType === "new-connection" || enquiryType === "additional-services") && (
              <Section
                title={
                  enquiryType === "additional-services"
                    ? "Which services do you need?"
                    : "Add-on services (optional)"
                }
              >
                <fieldset>
                  <legend className="sr-only">Select add-on services</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {addOnServices.map((s) => {
                      const checked = form.services.includes(s);
                      return (
                        <label
                          key={s}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            checked
                              ? "border-primary bg-secondary/40"
                              : "border-border hover:bg-muted/40"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(s)}
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-sm text-foreground">{s}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Upgrade existing plan (optional) */}
                {(() => {
                  const upgradeChecked = form.services.includes("Upgrade existing plan");
                  return (
                    <div
                      className={`mt-3 rounded-xl border transition-colors ${
                        upgradeChecked ? "border-primary bg-secondary/30" : "border-border"
                      }`}
                    >
                      <label className="flex items-center gap-3 p-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={upgradeChecked}
                          onChange={() => {
                            toggleService("Upgrade existing plan");
                            if (upgradeChecked) setForm((f) => ({ ...f, upgradePlan: "" }));
                          }}
                          className="w-4 h-4 accent-primary"
                          aria-controls="upgradePlan"
                        />
                        <span className="text-sm text-foreground">Upgrade my existing plan</span>
                      </label>
                      {upgradeChecked && (
                        <div className="px-3 pb-3 flex flex-col gap-1.5">
                          <label htmlFor="upgradePlan" className="text-sm text-foreground">
                            Upgrade to
                          </label>
                          <select
                            id="upgradePlan"
                            value={form.upgradePlan}
                            onChange={(e) => setForm({ ...form, upgradePlan: e.target.value })}
                            className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                          >
                            {planOptions.map((p) => (
                              <option key={p.id} value={p.id} disabled={p.id === ""}>
                                {p.label}
                              </option>
                            ))}
                          </select>
                          <p className="text-xs text-muted-foreground">
                            Pick the plan you'd like to move to — our team will confirm proration & activation.
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </Section>
            )}

            {/* Message */}
            <Section
              title={enquiryType === "general" ? "Your question" : "Anything else? (optional)"}
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={
                    enquiryType === "general"
                      ? "Tell us how we can help..."
                      : "Special requirements, preferred time slot, etc."
                  }
                  className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                />
                {enquiryType === "general" && form.message.length > 0 && form.message.trim().length < 10 && (
                  <span className="text-xs text-[#B2222B]">
                    Please share at least 10 characters
                  </span>
                )}
              </div>
            </Section>

            {/* Consent */}
            <label className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="w-4 h-4 mt-0.5 accent-primary"
                required
              />
              <span className="text-sm text-muted-foreground">
                I consent to Cherrinet contacting me regarding this enquiry and authorise
                processing of my details per the{" "}
                <a href="#" className="text-primary underline">
                  Privacy Policy
                </a>
                . As per TRAI norms, you may receive service-related calls/SMS even if you
                are on DND.
              </span>
            </label>

            <button
              type="submit"
              disabled={!valid}
              className="w-full bg-primary text-white py-3.5 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
            >
              Submit Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted by Cherrinet. We typically respond
              within 24 hours.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-white">
      <h2 className="text-base text-foreground">{title}</h2>
      {children}
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  required,
  autoComplete,
  prefix,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  prefix?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div
        className={`flex items-center rounded-lg border bg-white focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${
          error ? "border-[#B2222B]" : "border-border"
        }`}
      >
        {prefix && (
          <span className="pl-3 text-sm text-muted-foreground select-none">{prefix}</span>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="flex-1 px-3 py-2.5 rounded-lg text-sm bg-transparent focus:outline-none"
        />
      </div>
      {error && (
        <span id={errorId} className="text-xs text-[#B2222B]">
          {error}
        </span>
      )}
    </div>
  );
}
