import { Link } from "react-router";
import { Instagram, MapPin, Phone, Mail, Twitter, Youtube, Facebook } from "lucide-react";
import cherrinetLogo from "../../imports/image-1.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M380.9 97.1C339 55.2 285.6 32 229.3 32 103 32 0 135 0 261.3c0 46.3 12.1 91.5 35.1 130.9L0 480l92.2-30.4c37.5 20.5 80 31.2 123.7 31.2h.1c126.3 0 229.3-103 229.3-229.3 0-56.3-23.1-109.7-65.3-151.4zm-151.6 320.5c-36.9 0-73.1-10-104.9-28.9l-7.5-4.4-54.5 18 18.3-53.4-4.9-8c-21.4-34.9-32.6-75.5-32.6-117.8 0-115 93.8-208.8 209-208.8 55.9 0 108.4 21.8 147.7 61.4 39.3 39.5 61.1 92.8 61.1 149.4 0 115.2-93.8 209-209 209zm113.2-149.4c-6.3-3.1-37.1-18.3-42.8-20.3-5.7-2-9.8-3.1-13.9 3.1-4.1 6.3-15.9 20.3-19.5 24.4-3.6 4.1-7.2 4.6-13.5 1.5-36.5-18.3-60.4-32.7-84.5-74.6-6.8-11.8 6.8-11 19.6-36.4 2.2-4.1 1.1-7.6-.5-10.7-1.5-3-14-33.5-19.2-45.9-5.1-12.4-10.3-10.7-13.9-10.9-3.6-.2-7.8-.2-12-0.2-4.1 0-10.7 1.5-16.3 7.6-5.7 6.1-21.9 21.4-21.9 52.4 0 31.1 22.5 61.3 25.6 65.6 3.1 4.1 44.2 67.5 107.1 94.8 59.4 25.8 59.4 17.2 70.2 16 10.7-1.2 34.8-14.2 39.7-28 4.9-13.8 4.9-25.6 3.5-28.1-1.4-2.5-5.6-3.9-11.8-6.9z" />
    </svg>
  );
}

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
              <a
                href="https://www.instagram.com/cherrinetsocial?igsh=MW1oenhjMTFxc2pkag=="
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Cherrinet Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917358228999"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Cherrinet WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/cherrinetSocial/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Cherrinet Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/CherrinetSocial"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Cherrinet YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/CherrinetSocial/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Cherrinet Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white mb-1">Quick Links</h4>
            {[
              { label: "Home", path: "/" },
              { label: "Plans & Pricing", path: "/plans" },
              { label: "Check Coverage", path: "/cherrinet-coverage" },
              { label: "About Us", path: "/about-us" },
              { label: "Support", path: "/support" },
              { label: "G-Force (Business)", path: "/g-force" },
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
            <Link
              to="/support#faq"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <a
              href="https://www.cherrinet.in/appellate"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Appellate
            </a>
            <a
              href="/Docs/Consumer Charter.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Consumer Charter
            </a>
            <a
              href="/Docs/Parental_Control_Filters.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Parental Control Filters
            </a>
            <a
              href="https://www.cherrinet.in/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/Docs/Device Policy.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Device Policy
            </a>
            <a
              href="/Docs/Wear And Tear Policy.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Wear And Tear
            </a>
            <a
              href="https://www.cherrinet.in/quality-of-service"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Quality of Service
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white mb-1">Contact Us</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
               <p className="text-sm text-gray-400">
                NO.1, Mura Towers, Dr Thirumoorthy Nagar Main Road, Nungambakkam. Chennai - 600034
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href="tel:+914449303030" className="text-sm text-gray-400 hover:text-white transition-colors">
                +91 44 4930 3030
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