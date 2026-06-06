import { useState } from "react";
import { Send, X, User, MessageCircle } from "lucide-react";

interface ChatMessage {
  from: "user" | "bot";
  text: string;
}

export function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { from: "bot", text: "Hi! I'm Cherry, Cherrinet's virtual assistant. How can I help you today?" },
  ]);
  const [chatInput, setChatInput] = useState("");

  const getBotResponse = (message: string) => {
    const lower = message.toLowerCase();
    if (/(hi|hello|hey|good morning|good afternoon|good evening)/.test(lower)) {
      return "Hello! I'm Cherry, Cherrinet's virtual assistant. I can help with plans, installation, coverage, billing, G-Force business plans, and OTT add-ons. Ask me anything about the site or our services.";
    }
    if (/(gforce|g-force|business fiber|business plan|enterprise|sme|gforce plan)/.test(lower)) {
      return "G-Force is Cherrinet's business-grade service for offices and enterprises. We offer plans like G-FORCE 2, G-FORCE 6, G-FORCE 10, plus SME Silver, Gold, Diamond, and Platinum. Visit /gforce for business broadband details and pricing.";
    }
    if (/(refer|reference|page link|link me|direct me|which page|which section|where can i find|where is)/.test(lower)) {
      if (/(home|main|landing)/.test(lower)) {
        return "Home page: / — includes the hero, quick plans, coverage checker, and CTA sections.";
      }
      if (/(plans|pricing)/.test(lower)) {
        return "Plans page: /plans — compare broadband plans, speeds, and pricing.";
      }
      if (/(coverage|area|availability|pin|pincode|zipcode)/.test(lower)) {
        return "Coverage page: /coverage — check who we serve by entering your 6-digit PIN code.";
      }
      if (/(support|help|faq|chat|customer support)/.test(lower)) {
        return "Support page: /support — FAQs, contact options, and the Cherry Bot chat are available here.";
      }
      if (/(enquire|contact|quote|request)/.test(lower)) {
        return "Enquire page: /enquire — submit your details and our team will get back to you with a quote.";
      }
      if (/(about|company|who are you)/.test(lower)) {
        return "About page: /about — learn more about Cherrinet and our services.";
      }
      if (/(gforce|business)/.test(lower)) {
        return "G-Force page: /gforce — business plans, pricing, and enquiry options for enterprise customers.";
      }
      return "Here are the main pages: Home /, Plans /plans, Coverage /coverage, Support /support, Enquire /enquire, G-Force /gforce.";
    }
    if (/(website|site|pages|navigation|about the site|overall|what pages|what does the site)/.test(lower)) {
      return "This site includes Home, Plans, Coverage, Support, Enquire, and G-Force pages. Use Plans for pricing, Coverage for availability, Support for help, and G-Force for business services.";
    }
    if (/(plan|price|cost|₹|subscription)/.test(lower)) {
      return "Our plans start from ₹479/month for 50 Mbps and go up to ₹1,999/month for 1 Gbps. Visit /plans for the full comparison and current offers.";
    }
    if (/(install|installation|setup)/.test(lower)) {
      return "Installation is free and typically completed within 24-48 hours. Our technician will set up the fiber cable, ONT device, and Wi-Fi router in about 1-2 hours.";
    }
    if (/(slow|speed|issue|disconnect|downtime|buffer)/.test(lower)) {
      return "Sorry to hear about the issue. Please restart your router first. If the problem persists, our technical team can diagnose it remotely or send a technician. Call +91 44 4930 3030 for urgent support.";
    }
    if (/(coverage|area|available|pin|pincode|zipcode|location)/.test(lower)) {
      return "You can check coverage on our Coverage page by entering your 6-digit PIN code. We serve 100+ localities across Chennai and are expanding fast.";
    }
    if (/(bill|billing|payment|refund|charge|due)/.test(lower)) {
      return "For billing and payment help, you can use UPI, cards, net banking, or auto-debit. If you need billing support, please call +91 44 4930 3030 or email support@cherrinet.in.";
    }
    if (/(ott|add-on|addon|subscription|hotstar|zee5|sonyliv)/.test(lower)) {
      return "After activation, you'll receive OTT login details by SMS and email. You can also add more OTT services to your plan through our app or support team.";
    }
    if (/(cancel|upgrade|downgrade|change plan|switch plan)/.test(lower)) {
      return "Yes, you can upgrade or downgrade anytime. Plan changes usually take effect from the next billing cycle. Contact support to get this done quickly.";
    }
    return "I'm sorry, I don't have that exact answer right now. For immediate help, call +91 44 4930 3030 or email support@cherrinet.in. You can also ask me about plans, installation, coverage, speeds, billing, G-Force business service, or OTT add-ons.";
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setChatInput("");

    setTimeout(() => {
      const response = getBotResponse(userMsg);
      setChatMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-primary text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-bold text-white">C</span>
              </div>
              <div>
                <p className="text-sm">Cherry Bot</p>
                <p className="text-xs text-[#FBEEEF]">Online</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 flex flex-col gap-3 max-h-80 overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                    msg.from === "bot" ? "bg-secondary" : "bg-primary"
                  }`}
                >
                  {msg.from === "bot" ? (
                    <span className="text-xs font-bold text-white">C</span>
                  ) : (
                    <User className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-sm max-w-[75%] ${
                    msg.from === "bot"
                      ? "bg-muted text-foreground rounded-tl-md"
                      : "bg-primary text-white rounded-tr-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                onClick={handleChatSend}
                disabled={!chatInput.trim()}
                className={`p-2.5 rounded-xl transition-colors cursor-pointer ${
                  chatInput.trim()
                    ? "bg-primary text-white hover:bg-[#8E1B22]"
                    : "bg-muted text-muted-foreground"
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat FAB (when chat is closed) */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8E1B22] transition-colors cursor-pointer hover:scale-105"
          aria-label="Open Cherrinet chat support"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
