import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowLeft } from "lucide-react";
import cherrinetLogo from "../../imports/image-1.png";

const navLinks = [
  { label: "Plans", path: "/gforce/plans" },
  { label: "Coverage", path: "/gforce/coverage" },
  { label: "Subscribe", path: "/gforce/subscribe" },
  { label: "Support", path: "/gforce/support" },
];

export function GForceNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/gforce" className="flex items-center gap-3" aria-label="G-Force by Cherrinet — home">
            <div className="bg-white rounded-lg p-1.5 inline-flex">
              <img src={cherrinetLogo} alt="Cherrinet" className="h-7 w-auto" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg text-white tracking-tight">
                G-<span className="text-[#D1444C]">Force</span>
              </span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                by Cherrinet · Business
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Cherrinet
            </Link>
            <Link
              to="/gforce/subscribe"
              className="bg-primary text-white px-5 py-2 rounded-lg text-sm hover:bg-[#8E1B22] transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-gray-800">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-800 flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Cherrinet
              </Link>
              <Link
                to="/gforce/subscribe"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-white px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
