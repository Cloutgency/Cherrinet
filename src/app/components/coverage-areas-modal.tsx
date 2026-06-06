import { useMemo, useState } from "react";
import { Search } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  areas: string[];
}

export function CoverageAreasModal({ open, onClose, areas }: Props) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAreas = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return areas.filter((area) => {
      const normalized = area.toLowerCase();
      return !query || normalized.includes(query);
    });
  }, [areas, searchQuery]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/50 overflow-auto">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-auto p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">All Coverage Areas</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Search across serviceable areas.
            </p>
          </div>

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            Close
          </button>
        </div>

        <div className="mb-4">
          <label className="relative w-full block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search coverage areas"
              className="w-full rounded-2xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          {filteredAreas.length} area{filteredAreas.length === 1 ? "" : "s"} found
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {filteredAreas.map((area) => (
            <div
              key={area}
              className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
