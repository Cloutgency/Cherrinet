import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import cherrinetLogo from "../../imports/image-1.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center" aria-label="Cherrinet — home">
              <div className="bg-white rounded-lg p-2 inline-flex">
                <img src={cherrinetLogo} alt="Cherrinet" className="h-8 w-auto" />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Chennai's fastest growing Fibernet provider. Delivering blazing-fast internet to homes and businesses across the city.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white mb-1">Quick Links</h4>
            {[
              { label: "Home", path: "/" },
              { label: "Plans & Pricing", path: "/plans" },
              { label: "Products & Hardware", path: "/products" },
              { label: "Check Coverage", path: "/coverage" },
              { label: "About Us", path: "/about" },
              { label: "Support", path: "/support" },
              { label: "G-Force (Business)", path: "/gforce" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white mb-1">Support</h4>
            {["FAQs", "Installation Guide", "Speed Test", "Report an Issue", "Terms & Conditions", "Privacy Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white mb-1">Contact Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
              <p className="text-sm text-gray-400">
                No. 42, Anna Salai, Teynampet, Chennai - 600018
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="tel:+914412345678" className="text-sm text-gray-400 hover:text-white transition-colors">
                044-1234-5678
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0 text-primary" />
              <a href="mailto:support@cherrinet.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                support@cherrinet.in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2026 Cherrinet Fibernet Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with care in Chennai, India
          </p>
        </div>
      </div>
    </footer>
  );
}