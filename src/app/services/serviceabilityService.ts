/**
 * Serviceability Service
 * Advanced service layer for managing service area checks and queries
 * Extensible for future features like radius checks, real-time availability, etc.
 */

import { isServiceableArea, validatePincode, getPincodeStats } from "../data/pincodes";

export interface ServiceabilityCheckResult {
  pincode: string;
  isServiceable: boolean;
  timestamp: Date;
  message: string;
}

export interface CoverageInfo {
  totalPincodes: number;
  coverage: string;
  lastUpdated?: Date;
}

class ServiceabilityService {
  private cache = new Map<string, ServiceabilityCheckResult>();
  private cacheExpiry = 1000 * 60 * 60; // 1 hour

  /**
   * Check serviceability with caching
   */
  async checkServiceability(pincode: string): Promise<ServiceabilityCheckResult> {
    const cacheKey = pincode.toLowerCase();

    // Check cache
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp.getTime() < this.cacheExpiry) {
      return cached;
    }

    // Validate pincode format and serviceability
    const validation = validatePincode(pincode);

    const result: ServiceabilityCheckResult = {
      pincode,
      isServiceable: validation.isServiceable,
      timestamp: new Date(),
      message: validation.isServiceable
        ? `✓ Cherrinet services are available at pincode ${pincode}`
        : validation.error || `Service not yet available at pincode ${pincode}`,
    };

    // Cache the result
    this.cache.set(cacheKey, result);

    return result;
  }

  /**
   * Batch check multiple pincodes
   */
  async batchCheck(pincodes: string[]): Promise<ServiceabilityCheckResult[]> {
    return Promise.all(pincodes.map((pin) => this.checkServiceability(pin)));
  }

  /**
   * Get coverage information
   */
  getCoverageInfo(): CoverageInfo {
    const stats = getPincodeStats();
    return {
      totalPincodes: stats.totalServiceablePincodes,
      coverage: stats.coverage,
      lastUpdated: new Date(),
    };
  }

  /**
   * Clear cache (useful for testing or manual refresh)
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Quick synchronous check (no caching)
   */
  isQuickServiceable(pincode: string): boolean {
    return isServiceableArea(pincode);
  }

  /**
   * Get formatted message for UI display
   */
  getStatusMessage(pincode: string, isServiceable: boolean): string {
    if (isServiceable) {
      return `Great news! Cherrinet is available in your area (${pincode}).`;
    }
    return `We're not in your area yet (${pincode}), but we're expanding fast!`;
  }
}

// Singleton instance
export const serviceabilityService = new ServiceabilityService();

// Export convenience functions
export const checkServiceability = (pincode: string) =>
  serviceabilityService.checkServiceability(pincode);

export const batchCheckServiceability = (pincodes: string[]) =>
  serviceabilityService.batchCheck(pincodes);

export const getCoverageInfo = () => serviceabilityService.getCoverageInfo();
