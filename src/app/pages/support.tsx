import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Search, Phone, Mail, MessageCircle, MapPin, Clock, ArrowRight, FileText } from "lucide-react";

const faqCategories = [
  {
    category: "Getting Started",
    faqs: [
      {
        q: "How do I check if Cherrinet is available in my area?",
        a: "Visit our Coverage page and enter your 6-digit PIN code. You'll instantly see if our fiber network covers your locality. If we're not there yet, you can sign up for notifications.",
      },
      {
        q: "What is the installation process?",
        a: "Once you sign up, our team will schedule an installation within 24-48 hours. A technician will visit your home, install the fiber cable, set up the ONT device and Wi-Fi router. The entire process takes about 1-2 hours.",
      },
      {
        q: "Is there an installation fee?",
        a: "No! Installation is completely free for all plans. We also provide a free Wi-Fi router with every connection.",
      },
    ],
  },
  {
    category: "Plans & Billing",
    faqs: [
      {
        q: "Are there any hidden charges?",
        a: "Absolutely not. The price you see is what you pay (plus applicable GST at 18%). No hidden fees, no surprise charges.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes, you can change your plan at any time through our app or by contacting support. Changes take effect from your next billing cycle.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, debit/credit cards, net banking, auto-debit (NACH), and even cash payments at our service centers.",
      },
      {
        q: "Is there a lock-in period?",
        a: "No lock-in contracts! You're free to cancel anytime. We believe in earning your loyalty through great service, not contracts.",
      },
    ],
  },
  {
    category: "Technical Support",
    faqs: [
      {
        q: "My internet is slow. What should I do?",
        a: "First, try restarting your router. If the issue persists, run a speed test at speedtest.net connected via ethernet cable. If speeds are below your plan, contact our support — we'll diagnose and fix it remotely or send a technician.",
      },
      {
        q: "Why does my Wi-Fi signal drop in some rooms?",
        a: "This is usually due to distance from the router or interference. We recommend placing the router centrally. For larger homes, consider upgrading to our mesh Wi-Fi plans for whole-home coverage.",
      },
      {
        q: "Do you provide a static IP address?",
        a: "Yes! Static IP is included free with Pro plans and above. For Starter and Essential plans, it's available as an add-on for ₹100/month.",
      },
    ],
  },
  {
    category: "OTT & Add-ons",
    faqs: [
      {
        q: "How do I access bundled OTT subscriptions?",
        a: "After activation, you'll receive login credentials for your bundled OTT services via SMS and email. You can use them on any device — phone, tablet, smart TV, or laptop.",
      },
      {
        q: "Can I add more OTT subscriptions to my plan?",
        a: "Yes! Additional OTT services can be added to any plan at discounted rates through our app or by contacting support.",
      },
    ],
  },
];

export function Support() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  useEffect(() => {
    if (location.hash === "#faq") {
      const target = document.getElementById("faq");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.hash]);

  const filteredCategories = faqCategories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter(
      (faq) =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.faqs.length > 0);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-sm text-primary uppercase tracking-wider">Support</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
              How Can We Help?
            </h1>
            <p className="text-muted-foreground max-w-lg">
              Find answers to common questions or reach out to our team directly.
            </p>

            {/* Search */}
            <div className="mt-6 w-full max-w-lg relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="tel:+914449303030"
              aria-label="Call Cherrinet support at +91 44 4930 3030"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">+91 44 4930 3030</p>
              </div>
            </a>
            <a
              href="mailto:support@cherrinet.in"
              aria-label="Email Cherrinet support"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-foreground">Email Us</p>
                <p className="text-sm text-muted-foreground">support@cherrinet.in</p>
              </div>
            </a>
            <a
              href="https://partner.knet.co.in/subscriber_login"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-foreground">Quick Pay</p>
                <p className="text-sm text-muted-foreground">Pay your bill instantly</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-foreground">Live Chat</p>
                <p className="text-sm text-muted-foreground">Chat with Cherry Bot</p>
              </div>
            </div>
          </div>

          {/* Contact form CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/60 to-white border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <h3 className="text-foreground">Couldn't find what you're looking for?</h3>
              <p className="text-sm text-muted-foreground">
                Drop us a message with your details and our team will get back within 24 hours.
              </p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm hover:bg-[#8E1B22] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors w-full sm:w-auto justify-center"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl text-foreground text-center mb-10">Frequently Asked Questions</h2>

          {filteredCategories.length > 0 ? (
            <div className="flex flex-col gap-8">
              {filteredCategories.map((cat) => (
                <div key={cat.category} className="flex flex-col gap-3">
                  <h3 className="text-primary text-sm uppercase tracking-wider">{cat.category}</h3>
                  <div className="flex flex-col gap-2">
                    {cat.faqs.map((faq, i) => {
                      const id = `${cat.category}-${i}`;
                      const isOpen = openFaq === id;
                      return (
                        <div
                          key={id}
                          className="bg-white rounded-xl border border-border overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(id)}
                            className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer hover:bg-muted/30 transition-colors"
                          >
                            <span className="text-sm text-foreground">{faq.q}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5">
                              <div className="pt-3 border-t border-border">
                                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No FAQs match your search.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-sm text-primary hover:text-[#8E1B22] mt-2 cursor-pointer"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Support Info */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-foreground">Support Hours</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>Phone Support: 24/7</p>
                <p>Email Support: Mon-Sat, 9 AM - 9 PM</p>
                <p>Live Chat: 24/7</p>
                <p>Walk-in Center: Mon-Sat, 10 AM - 7 PM</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 rounded-2xl border border-border">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-foreground">Service Center</h3>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p>Cherrinet Experience Center</p>
                <p>NO.1, Mura Towers,</p>
                <p>Dr Thirumoorthy Nagar Main Road,</p>
                <p>Nungambakkam. Chennai - 600034</p>
                <p>Near US Consulate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
