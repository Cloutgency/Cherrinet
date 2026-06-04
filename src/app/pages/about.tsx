import { Users, Target, Heart, Lightbulb, Star, Quote, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VideoTestimonials } from "../components/video-testimonials";

const values = [
  { icon: Target, title: "Customer First", desc: "Every decision we make starts with our subscribers. Your satisfaction drives our innovation." },
  { icon: Heart, title: "Community Driven", desc: "We're a Chennai company, built by Chennaites for Chennaites. This city is our home." },
  { icon: Lightbulb, title: "Innovation", desc: "We invest in cutting-edge fiber infrastructure to deliver the fastest, most reliable internet." },
  { icon: Users, title: "Accessibility", desc: "Affordable, high-quality internet for every home and business — that's our promise." },
];

const testimonials = [
  {
    name: "Priya Ranganathan",
    location: "Anna Nagar",
    text: "Switched from my previous ISP to Cherrinet 6 months ago. The difference is night and day — consistent 100 Mbps speeds even during peak hours!",
    rating: 5,
  },
  {
    name: "Karthik Sundaram",
    location: "Velachery",
    text: "As a freelance developer, reliable internet is essential. Cherrinet has been rock-solid. Their support team resolved my one issue within an hour.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    location: "T. Nagar",
    text: "The bundled OTT plans are a game-changer. My family gets fast internet AND streaming services at an unbeatable price. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rajesh Balakrishnan",
    location: "Thiruvanmiyur",
    text: "I run a small business from home and Cherrinet's static IP and reliable connection have been critical. Their team even helped with router setup.",
    rating: 4,
  },
];

const milestones = [
  { year: "2015", event: "Founded in Chennai with a mission to deliver affordable fiber internet" },
  { year: "2017", event: "Reached 10,000 subscribers across 20 localities" },
  { year: "2019", event: "Expanded to 50+ areas with 50K subscribers" },
  { year: "2021", event: "Launched 1 Gbps plans and OTT bundling" },
  { year: "2023", event: "Crossed 100K subscribers; TRAI excellence award" },
  { year: "2025", event: "150K+ subscribers; expanding Wi-Fi 6E mesh services" },
];

export function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-secondary to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-sm text-primary uppercase tracking-wider">About Cherrinet</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
                Connecting Chennai,
                <br />
                <span className="text-primary">One Fiber at a Time</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Founded in 2015, Cherrinet started with a simple mission: bring world-class fiber internet to every home and business in Chennai. Today, we proudly serve over 150,000 subscribers across 100+ localities.
              </p>
              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-3xl text-primary">150K+</p>
                  <p className="text-sm text-muted-foreground">Subscribers</p>
                </div>
                <div>
                  <p className="text-3xl text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Areas</p>
                </div>
                <div>
                  <p className="text-3xl text-primary">300+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwd29ya2luZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyNTIyNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cherrinet team"
                className="w-full h-72 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Our Mission</span>
            <h2 className="text-3xl text-foreground max-w-2xl">
              To make high-speed fiber internet accessible, affordable, and reliable for every Chennaite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-muted/40 border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl text-foreground">Milestones</h2>
          </div>

          <div className="flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-12 bg-primary/20" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-primary">{m.year}</p>
                  <p className="text-foreground text-sm mt-1">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <span className="text-sm text-primary uppercase tracking-wider">Video Testimonials</span>
            <h2 className="text-3xl text-foreground">Hear It From Our Subscribers</h2>
            <p className="text-muted-foreground max-w-md">
              Real stories from real Chennai homes and businesses powered by Cherrinet.
            </p>
          </div>

          <VideoTestimonials />
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1751487531325-59d97f6874f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHdhdGNoaW5nJTIwdGVsZXZpc2lvbiUyMHN0cmVhbWluZ3xlbnwxfHx8fDE3NzI1MjI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Happy family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center py-20 sm:py-28">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl flex flex-col gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-fit">
                <Sparkles className="w-4 h-4 text-[#E47A82]" />
                <span className="text-sm text-[#FBEEEF] uppercase tracking-wider">Our Promise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Better digital life,
                <span className="text-[#D1444C]"> every day.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
