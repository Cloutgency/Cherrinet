import { useState, FormEvent } from "react";
import { FileText, CreditCard, X, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { sendMail } from "../../lib/email";

type Modal = null | "enquire" | "quickpay";

export function GForceSubscribe() {
  const [modal, setModal] = useState<Modal>(null);

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Subscribe</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">Get Connected</h1>
            <p className="text-muted-foreground max-w-lg">
              New customer? Send an enquiry. Existing client? Make a quick payment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              type="button"
              onClick={() => setModal("enquire")}
              className="flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground">Enquire</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about your business and we'll prepare a tailored quote within 24 hours.
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary text-sm mt-auto">
                Open enquiry form
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <a
              href="https://partner.knet.co.in/subscriber_login"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-5 p-8 rounded-2xl border-2 border-border hover:border-primary hover:shadow-lg transition-all text-left cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground">Quick Pay</h3>
                <p className="text-sm text-muted-foreground">
                  Already a G-Force customer? Pay your invoice instantly with your account ID.
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary text-sm mt-auto">
                Open payment portal
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {modal === "enquire" && <EnquireModal onClose={() => setModal(null)} />}
      {modal === "quickpay" && <QuickPayModal onClose={() => setModal(null)} />}
    </div>
  );
}

function EnquireModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    company: "",
    industry: "",
    gstin: "",
    name: "",
    designation: "",
    email: "",
    phone: "",
    altPhone: "",
    city: "",
    address: "",
    seats: "",
    plan: "",
    bandwidth: "",
    timeline: "",
    contactTime: "",
    notes: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;

    setSubmitting(true);
    setSubmitError(null);

    const subject = `Cherrinet G-Force enquiry from ${form.name}`;
    const body = [
      `Company: ${form.company}`,
      `Industry: ${form.industry || "N/A"}`,
      `GSTIN: ${form.gstin || "N/A"}`,
      `Name: ${form.name}`,
      `Designation: ${form.designation}`,
      `Email: ${form.email}`,
      `Phone: +91 ${form.phone}`,
      `Alternate phone: ${form.altPhone || "N/A"}`,
      `City: ${form.city}`,
      `Office address: ${form.address || "N/A"}`,
      `Seats: ${form.seats}`,
      `Plan: ${form.plan}`,
      `Bandwidth: ${form.bandwidth || "N/A"}`,
      `Timeline: ${form.timeline}`,
      `Preferred contact time: ${form.contactTime}`,
      `Notes: ${form.notes || "None"}`,
      `Consent: ${form.consent ? "Yes" : "No"}`,
      "",
      "Please respond to this enquiry within 24 hours.",
      "Source: Cherrinet G-Force subscription page enquiry modal",
    ].join("\n");

    try {
      await sendMail({
        subject,
        body,
        replyTo: form.email.trim(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitError("Unable to send your enquiry. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const valid =
    form.company.length >= 2 &&
    form.industry.length > 0 &&
    form.name.length >= 2 &&
    form.designation.length >= 2 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    /^[6-9]\d{9}$/.test(form.phone) &&
    form.city.length > 0 &&
    form.seats.length > 0 &&
    form.plan.length > 0 &&
    form.timeline.length > 0 &&
    form.consent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" aria-hidden="true" />
            <h2 className="text-foreground">Enquiry received</h2>
            <p className="text-sm text-muted-foreground max-w-sm">
              Our G-Force team will reach out within one business day with a tailored quote.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-foreground mb-1">Business Enquiry</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Share a few details about your business — our G-Force team will craft a tailored quote within 24 hours.
            </p>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Company details */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Company details
                </legend>
                <Field
                  label="Company name"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                  placeholder="Acme Pvt. Ltd."
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="Industry"
                    value={form.industry}
                    onChange={(v) => setForm({ ...form, industry: v })}
                    required
                    options={[
                      "IT / Software",
                      "BFSI",
                      "Manufacturing",
                      "Retail / E-commerce",
                      "Hospitality",
                      "Healthcare",
                      "Education",
                      "Logistics",
                      "Media & Entertainment",
                      "Co-working / Real Estate",
                      "Other",
                    ]}
                  />
                  <Field
                    label="GSTIN (optional)"
                    value={form.gstin}
                    onChange={(v) => setForm({ ...form, gstin: v.toUpperCase().slice(0, 15) })}
                    placeholder="22AAAAA0000A1Z5"
                  />
                </div>
              </fieldset>

              {/* Point of contact */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Point of contact
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Full name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Your full name"
                    required
                  />
                  <Field
                    label="Designation"
                    value={form.designation}
                    onChange={(v) => setForm({ ...form, designation: v })}
                    placeholder="IT Manager"
                    required
                  />
                </div>
                <Field
                  label="Work email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@company.com"
                  required
                  error={form.email.length > 0 && !/^\S+@\S+\.\S+$/.test(form.email) ? "Enter a valid email" : ""}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Mobile"
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v.replace(/\D/g, "").slice(0, 10) })}
                    placeholder="10-digit mobile"
                    required
                    error={form.phone.length > 0 && !/^[6-9]\d{9}$/.test(form.phone) ? "Enter a valid 10-digit number" : ""}
                  />
                  <Field
                    label="Alternate phone (optional)"
                    value={form.altPhone}
                    onChange={(v) => setForm({ ...form, altPhone: v.replace(/\D/g, "").slice(0, 10) })}
                    placeholder="Landline or alternate"
                  />
                </div>
              </fieldset>

              {/* Office location */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Office location
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="City"
                    value={form.city}
                    onChange={(v) => setForm({ ...form, city: v })}
                    required
                    options={[
                      "Chennai",
                      "Coimbatore",
                      "Madurai",
                      "Tiruchirappalli",
                      "Salem",
                      "Tirunelveli",
                      "Erode",
                      "Vellore",
                      "Other",
                    ]}
                  />
                  <SelectField
                    label="Team size"
                    value={form.seats}
                    onChange={(v) => setForm({ ...form, seats: v })}
                    required
                    options={["1–15 seats", "16–50 seats", "51–150 seats", "151–500 seats", "500+ seats"]}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-foreground" htmlFor="gf-address">
                    Office address (optional)
                  </label>
                  <textarea
                    id="gf-address"
                    rows={2}
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none"
                    placeholder="Building, street, locality"
                  />
                </div>
              </fieldset>

              {/* Plan & requirements */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Plan & requirements
                </legend>
                <SelectField
                  label="Plan of interest"
                  value={form.plan}
                  onChange={(v) => setForm({ ...form, plan: v })}
                  required
                  options={[
                    "G-FORCE 2 — 1 Gbps (FUP 4TB)",
                    "G-FORCE 6 — 1 Gbps (FUP 12TB)",
                    "G-FORCE 10 — 1 Gbps (FUP 20TB)",
                    "SME SILVER — 250 Mbps (FUP 2250 GB)",
                    "SME GOLD — 250 Mbps (FUP 3250 GB)",
                    "SME DIAMOND — 250 Mbps (FUP 4250 GB)",
                    "SME PLATINUM — 250 Mbps (FUP 5250 GB)",
                    "Custom plan (tell us your requirement)",
                    "Not sure yet — recommend one",
                  ]}
                />
                {form.plan.startsWith("Custom") && (
                  <Field
                    label="Required bandwidth / use case"
                    value={form.bandwidth}
                    onChange={(v) => setForm({ ...form, bandwidth: v })}
                    placeholder="e.g. 10 Gbps dedicated, 200 concurrent users"
                  />
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    label="Timeline"
                    value={form.timeline}
                    onChange={(v) => setForm({ ...form, timeline: v })}
                    required
                    options={[
                      "Immediate (within 1 week)",
                      "1–2 weeks",
                      "1 month",
                      "1–3 months",
                      "Just exploring",
                    ]}
                  />
                  <SelectField
                    label="Preferred contact time"
                    value={form.contactTime}
                    onChange={(v) => setForm({ ...form, contactTime: v })}
                    options={["Anytime", "Morning (9–12)", "Afternoon (12–5)", "Evening (5–8)"]}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-foreground" htmlFor="gf-notes">
                    Additional notes (optional)
                  </label>
                  <textarea
                    id="gf-notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary resize-none"
                    placeholder="Existing connection, expected uptime SLA, hybrid cloud, special requirements…"
                  />
                </div>
              </fieldset>

              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 accent-primary"
                  required
                />
                <span>
                  I agree to be contacted by Cherrinet G-Force regarding this enquiry, in line with TRAI / DND norms.
                </span>
              </label>

              {submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={!valid || submitting}
                className="w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {submitting ? "Sending enquiry…" : "Submit enquiry"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function QuickPayModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ accountId: "", amount: "" });
  const [paid, setPaid] = useState(false);
  const paymentGatewayIntegrated = false;
  const valid = /^G-\d{6}$/.test(form.accountId) && Number(form.amount) > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        {paid ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
            <h2 className="text-foreground">Payment successful</h2>
            <p className="text-sm text-muted-foreground">
              Receipt sent to your registered email.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-primary text-white px-6 py-2.5 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Secure Payment
              </span>
            </div>
            <h2 className="text-foreground mb-1">Quick Pay</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Pay your G-Force invoice instantly.
            </p>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (valid && paymentGatewayIntegrated) setPaid(true);
              }}
            >
              <Field
                label="Account ID"
                value={form.accountId}
                onChange={(v) => setForm({ ...form, accountId: v.toUpperCase() })}
                placeholder="G-123456"
                error={
                  form.accountId.length > 0 && !/^G-\d{6}$/.test(form.accountId)
                    ? "Format: G-123456"
                    : ""
                }
              />
              <Field
                label="Amount (₹)"
                value={form.amount}
                onChange={(v) => setForm({ ...form, amount: v.replace(/\D/g, "") })}
                placeholder="Invoice amount"
              />
              <button
                type="submit"
                disabled={!valid || !paymentGatewayIntegrated}
                className="mt-2 w-full bg-primary text-white py-3 rounded-xl text-sm hover:bg-[#8E1B22] transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                {paymentGatewayIntegrated ? "Proceed to Pay" : "Payment gateway unavailable"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                {paymentGatewayIntegrated
                  ? "Demo portal · no real charge"
                  : "Payment gateway integration pending. Success result is disabled until integration is complete."}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`px-3 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-primary ${
          error ? "border-[#D1444C]" : "border-border"
        }`}
      />
      {error && <span className="text-xs text-[#B2222B]">{error}</span>}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2.5 rounded-lg border border-border text-sm bg-white focus:outline-none focus:border-primary"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
