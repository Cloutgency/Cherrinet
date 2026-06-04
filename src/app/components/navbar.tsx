import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import cherrinetLogo from "../../imports/image-1.png";

const navLinks = [
  { label: "Plans", path: "/plans" },
  { label: "Products", path: "/products" },
  { label: "Coverage", path: "/coverage" },
  { label: "About Us", path: "/about" },
  { label: "Support", path: "/support" },
  { label: "G-Force", path: "/gforce", highlight: true },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Cherrinet — home">
            <img
              src={cherrinetLogo}
              alt="Cherrinet"
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : link.highlight
                    ? "text-primary border border-primary/30 hover:bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+914412345678"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              044-1234-5678
            </a>
            <Link
              to="/enquire"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm hover:bg-black hover:text-[#E47A82] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-3">
              <a
                href="tel:+914412345678"
                className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground"
              >
                <Phone className="w-4 h-4" />
                044-1234-5678
              </a>
              <Link
                to="/enquire"
                onClick={() => setMobileOpen(false)}
                className="bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm text-center hover:bg-[#8E1B22] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}