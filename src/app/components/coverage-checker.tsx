import { useState, useEffect } from "react";
import { MapPin, CheckCircle, XCircle, Loader2, Bell } from "lucide-react";
import { useServiceableArea } from "../hooks/useServiceableArea";
import { sendMail } from "../lib/email";

interface CoverageCheckerProps {
  onCovered?: (pincode: string) => void;
  compact?: boolean;
}

export function CoverageChecker({ onCovered, compact = false }: CoverageCheckerProps) {
  const { pincode, setPincode, isServiceable, isChecking, error, checkServiceability, validationResult } =
    useServiceableArea();
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [notifyError, setNotifyError] = useState<string | null>(null);
  const [notifying, setNotifying] = useState(false);
  const [status, setStatus] = useState<"idle" | "checking" | "covered" | "not-covered">("idle");

  // Watch validationResult changes and update status accordingly
  useEffect(() => {
    if (validationResult && !isChecking) {
      if (validationResult.isServiceable) {
        setStatus("covered");
        onCovered?.(pincode);
      } else {
        setStatus("not-covered");
      }
    }
  }, [validationResult, isChecking, pincode, onCovered]);

  const handleCheck = async () => {
    if (pincode.length !== 6) return;
    setStatus("checking");
    await checkServiceability();
  };

  const handleNotify = async () => {
    if (!notifyEmail) return;
    setNotifyError(null);
    setNotifying(true);

    try {
      await sendMail({
        subject: `Coverage notify request for ${pincode || "unknown PIN"}`,
        body: [
          `PIN code: ${pincode || "N/A"}`,
          `Notify email: ${notifyEmail}`,
          "",
          "A user requested coverage notification when this area becomes serviceable.",
        ].join("\n"),
      });
      setNotifySubmitted(true);
    } catch (error) {
      console.error(error);
      setNotifyError("Unable to send notification request. Please try again later.");
    } finally {
      setNotifying(false);
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${compact ? "" : "max-w-lg"}`}>
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
              if (status !== "idle" && status !== "checking") setStatus("idle");
              setNotifySubmitted(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleCheck()}
            placeholder="Enter your PIN code"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
        <button
          onClick={handleCheck}
          disabled={pincode.length !== 6 || status === "checking"}
          className={`px-6 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            pincode.length === 6 && status !== "checking"
              ? "bg-primary text-white hover:bg-[#8E1B22]"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {status === "checking" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Check"
          )}
        </button>
      </div>

      {/* Covered */}
      {status === "covered" && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-green-800">
              Great news! Cherrinet is available in your area ({pincode}).
            </p>
            <p className="text-xs text-green-600 mt-1">
              High-speed fiber broadband can be installed at your location.
            </p>
          </div>
        </div>
      )}

      {/* Not Covered */}
      {status === "not-covered" && (
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl animate-in fade-in">
            <XCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800">
                We're not in your area yet ({pincode}), but we're expanding fast!
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Sign up below and we'll notify you when we arrive.
              </p>
            </div>
          </div>

          {!notifySubmitted ? (
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-3 rounded-xl bg-input-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
                <button
                  onClick={handleNotify}
                  disabled={!notifyEmail || notifying}
                  className={`px-5 py-3 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                    notifyEmail && !notifying
                      ? "bg-foreground text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {notifying ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      Notify Me
                    </>
                  )}
                </button>
              </div>
              {notifyError && (
                <p className="text-sm text-destructive">{notifyError}</p>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-xl text-sm text-green-700">
              <CheckCircle className="w-4 h-4" />
              We'll notify you at {notifyEmail} when coverage is available!
            </div>
          )}
        </div>
      )}
    </div>
  );
}
