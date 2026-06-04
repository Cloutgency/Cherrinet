import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { validatePincode, isServiceableArea } from "../data/pincodes";
import type { Plan } from "./plan-card";

interface LeadCaptureFormProps {
  selectedPlan?: Plan | null;
  onClose?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  pincode: string;
  plan: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  pincode?: string;
}

export function LeadCaptureForm({ selectedPlan, onClose }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    pincode: "",
    plan: selectedPlan?.name || "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.name.trim()) errs.name = "Name is required";
    else if (data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!data.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(data.phone.trim())) errs.phone = "Enter a valid 10-digit Indian mobile number";

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email address";

    // Enhanced pincode validation using centralized service
    if (!data.pincode.trim()) {
      errs.pincode = "PIN code is required";
    } else {
      const validation = validatePincode(data.pincode.trim());
      if (!validation.isValid) {
        errs.pincode = validation.error || "Invalid PIN code";
      } else if (!validation.isServiceable) {
        errs.pincode = "Service not available in your area yet. You can sign up for notifications on the Coverage page.";
      }
    }

    return errs;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field as keyof FormErrors] }));
  };

  const isValid = () => {
    const errs = validate(formData);
    return Object.keys(errs).length === 0 && formData.name && formData.phone && formData.pincode;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, email: true, pincode: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-foreground">Thank You!</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          We've received your request. Our team will contact you within 24 hours to set up your connection.
        </p>
        {selectedPlan && (
          <div className="mt-2 px-4 py-2 bg-secondary rounded-lg text-sm text-secondary-foreground">
            Selected Plan: {selectedPlan.name} — {selectedPlan.speed} Mbps
          </div>
        )}
        {onClose && (
          <button
            onClick={onClose}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm hover:bg-[#8E1B22] transition-colors cursor-pointer"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {selectedPlan && (
        <div className="p-4 bg-secondary rounded-xl flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Selected Plan</p>
            <p className="text-foreground">{selectedPlan.name} — {selectedPlan.speed} Mbps</p>
          </div>
          <p className="text-foreground">&#8377;{selectedPlan.price}/mo</p>
        </div>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          onBlur={() => handleBlur("name")}
          placeholder="Enter your full name"
          className={`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${
            touched.name && errors.name
              ? "border-destructive focus:ring-destructive/20"
              : touched.name && !errors.name && formData.name
              ? "border-green-500 focus:ring-green-500/20"
              : "border-border focus:ring-primary/20"
          } focus:outline-none focus:ring-2`}
        />
        {touched.name && errors.name && (
          <div className="flex items-center gap-1.5 text-destructive">
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="text-xs">{errors.name}</span>
          </div>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground">
          Phone Number <span className="text-primary">*</span>
        </label>
        <div className="flex">
          <span className="px-3 py-3 bg-muted border border-r-0 border-border rounded-l-xl text-sm text-muted-foreground flex items-center">
            +91
          </span>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            onBlur={() => handleBlur("phone")}
            placeholder="98765 43210"
            className={`flex-1 px-4 py-3 rounded-r-xl bg-input-background border transition-colors text-sm ${
              touched.phone && errors.phone
                ? "border-destructive focus:ring-destructive/20"
                : touched.phone && !errors.phone && formData.phone
                ? "border-green-500 focus:ring-green-500/20"
                : "border-border focus:ring-primary/20"
            } focus:outline-none focus:ring-2`}
          />
        </div>
        {touched.phone && errors.phone && (
          <div className="flex items-center gap-1.5 text-destructive">
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="text-xs">{errors.phone}</span>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground">
          Email <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          onBlur={() => handleBlur("email")}
          placeholder="you@example.com"
          className={`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${
            touched.email && errors.email
              ? "border-destructive focus:ring-destructive/20"
              : touched.email && !errors.email && formData.email
              ? "border-green-500 focus:ring-green-500/20"
              : "border-border focus:ring-primary/20"
          } focus:outline-none focus:ring-2`}
        />
        {touched.email && errors.email && (
          <div className="flex items-center gap-1.5 text-destructive">
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="text-xs">{errors.email}</span>
          </div>
        )}
      </div>

      {/* Pincode */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground">
          PIN Code <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={formData.pincode}
          onChange={(e) => handleChange("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
          onBlur={() => handleBlur("pincode")}
          placeholder="600001"
          className={`px-4 py-3 rounded-xl bg-input-background border transition-colors text-sm ${
            touched.pincode && errors.pincode
              ? "border-destructive focus:ring-destructive/20"
              : touched.pincode && !errors.pincode && formData.pincode
              ? "border-green-500 focus:ring-green-500/20"
              : "border-border focus:ring-primary/20"
          } focus:outline-none focus:ring-2`}
        />
        {touched.pincode && errors.pincode && (
          <div className="flex items-center gap-1.5 text-destructive">
            <AlertCircle className="w-3.5 h-3.5" />
            <span className="text-xs">{errors.pincode}</span>
          </div>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={!isValid() || submitting}
        className={`w-full py-3.5 rounded-xl text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
          isValid() && !submitting
            ? "bg-primary text-white hover:bg-[#8E1B22]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </button>
    </form>
  );
}
