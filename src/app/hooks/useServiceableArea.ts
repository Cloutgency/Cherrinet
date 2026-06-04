import { useState, useCallback, useMemo } from "react";
import { isServiceableArea, validatePincode } from "../data/pincodes";

interface UsePincodeCheckResult {
  pincode: string;
  isServiceable: boolean;
  isChecking: boolean;
  error: string | null;
  setPincode: (value: string) => void;
  checkServiceability: () => Promise<void>;
  reset: () => void;
  validationResult: {
    isValid: boolean;
    isServiceable: boolean;
    error?: string;
  } | null;
}

/**
 * Custom hook for pincode serviceability checking
 * Provides efficient validation and checking logic
 */
export function useServiceableArea(): UsePincodeCheckResult {
  const [pincode, setPincode] = useState("");
  const [isServiceable, setIsServiceable] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    isServiceable: boolean;
    error?: string;
  } | null>(null);

  // Memoized validation for quick checks
  const memoizedValidation = useMemo(() => {
    if (!pincode) return null;
    return validatePincode(pincode);
  }, [pincode]);

  const checkServiceability = useCallback(async () => {
    if (pincode.length !== 6) {
      setError("PIN code must be 6 digits");
      return;
    }

    setIsChecking(true);
    setError(null);

    try {
      // Simulate network delay for UX consistency
      await new Promise((resolve) => setTimeout(resolve, 800));

      const validation = validatePincode(pincode);
      setValidationResult(validation);

      if (validation.isValid) {
        setIsServiceable(validation.isServiceable);
        if (!validation.isServiceable) {
          setError(validation.error || "Service not available in your area yet");
        }
      } else {
        setError(validation.error || "Invalid PIN code");
        setIsServiceable(false);
      }
    } catch (err) {
      setError("Failed to check serviceability. Please try again.");
      setIsServiceable(false);
    } finally {
      setIsChecking(false);
    }
  }, [pincode]);

  const reset = useCallback(() => {
    setPincode("");
    setIsServiceable(false);
    setError(null);
    setValidationResult(null);
  }, []);

  return {
    pincode,
    isServiceable,
    isChecking,
    error,
    setPincode,
    checkServiceability,
    reset,
    validationResult: validationResult,
  };
}

/**
 * Simpler hook for just checking if a pincode is serviceable
 * (synchronous, no network simulation)
 */
export function useQuickPincodeCheck(pincode: string) {
  return useMemo(() => {
    if (!pincode || pincode.length !== 6) return null;
    return isServiceableArea(pincode);
  }, [pincode]);
}
