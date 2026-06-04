# Serviceability Check System - Architecture Documentation

## Overview

This is an advanced, production-ready pincode serviceability checking system that replaces the hardcoded pincode array with a comprehensive, scalable solution.

## Architecture Layers

### 1. **Data Layer** (`src/app/data/pincodes.ts`)
- **Purpose**: Single source of truth for all serviceable pincodes
- **Features**:
  - Imports all 500+ pincodes from Pincodes.txt
  - Lazy-initialized `Set` for O(1) lookup performance
  - Exported utility functions for validation and checking
  - Statistics and coverage info

**Key Functions**:
- `isServiceableArea(pincode)` - Quick synchronous check
- `validatePincode(pincode)` - Returns validation object with error messages
- `getPincodeStats()` - Returns coverage information

### 2. **Service Layer** (`src/app/services/serviceabilityService.ts`)
- **Purpose**: Business logic and caching for serviceability checks
- **Features**:
  - Singleton service instance with caching
  - Async/await compatible
  - Batch checking for multiple pincodes
  - Formatted UI messages
  - Extensible for future features

**Key Methods**:
- `checkServiceability(pincode)` - Async check with caching
- `batchCheck(pincodes)` - Check multiple pincodes at once
- `getCoverageInfo()` - Get coverage statistics
- `getStatusMessage(pincode, isServiceable)` - UI-ready messages

### 3. **Hook Layer** (`src/app/hooks/useServiceableArea.ts`)
- **Purpose**: React integration for pincode validation
- **Features**:
  - `useServiceableArea()` - Full validation hook with state management
  - `useQuickPincodeCheck()` - Lightweight synchronous hook
  - Memoized computations for performance
  - Built-in error handling

**Hook Returns**:
```typescript
{
  pincode: string;
  isServiceable: boolean;
  isChecking: boolean;
  error: string | null;
  setPincode: (value: string) => void;
  checkServiceability: () => Promise<void>;
  reset: () => void;
  validationResult: { isValid, isServiceable, error? } | null;
}
```

### 4. **Component Layer** (Updated Components)

#### `src/app/components/coverage-checker.tsx`
- Uses the `useServiceableArea()` hook
- Automatic validation and status management
- Real-time pincode checking
- User-friendly error messages

#### `src/app/components/lead-capture-form.tsx`
- Enhanced validation using `validatePincode()`
- Prevents submission for non-serviceable areas
- Helpful error messages guiding users to Coverage page
- Type-safe form handling

## Performance Optimizations

### 1. **O(1) Lookup**
- Pincodes stored in a `Set` instead of array
- `.includes()` on array: O(n) → Set.has(): O(1)
- Lazy initialization only when needed

### 2. **Memoization**
- Hook results memoized to prevent unnecessary recalculations
- Used in form validation and quick checks

### 3. **Caching**
- Service layer caches results for 1 hour
- Reduces redundant validations

### 4. **Async Simulation**
- 800ms network delay for UX consistency
- Can be replaced with actual API calls

## Usage Examples

### In Components (React)
```typescript
import { useServiceableArea } from "../hooks/useServiceableArea";

function MyComponent() {
  const { pincode, setPincode, isServiceable, checkServiceability } = 
    useServiceableArea();
  
  return (
    <>
      <input value={pincode} onChange={(e) => setPincode(e.target.value)} />
      <button onClick={checkServiceability}>Check</button>
      {isServiceable && <p>Service available!</p>}
    </>
  );
}
```

### Direct Service Usage
```typescript
import { checkServiceability, getCoverageInfo } from "../services/serviceabilityService";

// Check single pincode
const result = await checkServiceability("600001");

// Batch check
const results = await checkServiceability(["600001", "600002", "600003"]);

// Get coverage stats
const info = getCoverageInfo();
```

### Quick Synchronous Check
```typescript
import { isServiceableArea } from "../data/pincodes";

if (isServiceableArea("600001")) {
  // Enable service
}
```

## Data Structure

### Pincodes.ts Contains:
- **SERVICEABLE_PINCODES**: Array of 500+ numeric pincodes
- **getServiceablePincodeSet()**: Lazy-initialized Set for efficient lookups
- **Validation functions**: Format and serviceability validation

### Example Validation Result:
```typescript
{
  isValid: true,
  isServiceable: true,
  error: undefined
}

// Or for non-serviceable:
{
  isValid: true,
  isServiceable: false,
  error: "Service not available in area 600999 yet"
}
```

## Extensibility

The architecture supports future enhancements:

### 1. **Real-time API Integration**
Replace async simulation in `checkServiceability()` with actual API calls:
```typescript
async checkServiceability(pincode: string) {
  const response = await fetch(`/api/serviceability/${pincode}`);
  return response.json();
}
```

### 2. **Advanced Features**
- Geo-radius checking
- Real-time availability updates
- Service tier information
- Installation scheduling
- Multiple service types

### 3. **Database Integration**
- Replace static `SERVICEABLE_PINCODES` with database queries
- Dynamic coverage updates without code changes
- Location-based services

### 4. **Analytics**
- Track check frequency by pincode
- Identify coverage demand areas
- Usage statistics

## Testing

### Unit Tests for Data Layer:
```typescript
import { isServiceableArea, validatePincode } from "../data/pincodes";

test("should recognize serviceable pincodes", () => {
  expect(isServiceableArea("600001")).toBe(true);
});

test("should reject non-serviceable pincodes", () => {
  expect(isServiceableArea("999999")).toBe(false);
});
```

### Integration Tests for Service:
```typescript
import { checkServiceability } from "../services/serviceabilityService";

test("should return cached results", async () => {
  const result1 = await checkServiceability("600001");
  const result2 = await checkServiceability("600001");
  expect(result1).toBe(result2); // Same reference due to caching
});
```

## Files Created/Modified

### New Files:
- `src/app/data/pincodes.ts` - Data layer with 500+ pincodes
- `src/app/hooks/useServiceableArea.ts` - React hooks
- `src/app/services/serviceabilityService.ts` - Business logic layer

### Modified Files:
- `src/app/components/coverage-checker.tsx` - Updated to use new hook
- `src/app/components/lead-capture-form.tsx` - Enhanced validation

## Summary

This advanced architecture provides:
- ✅ **Scalability**: Handles 500+ pincodes efficiently
- ✅ **Performance**: O(1) lookup with caching
- ✅ **Type Safety**: Full TypeScript support
- ✅ **Maintainability**: Clear separation of concerns
- ✅ **Reusability**: Services and hooks usable throughout app
- ✅ **Extensibility**: Built for future feature additions
- ✅ **User Experience**: Meaningful error messages and validation
