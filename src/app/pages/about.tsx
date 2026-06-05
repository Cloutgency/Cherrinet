import { Users, Target, Heart, Lightbulb, Star, Quote, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VideoTestimonials } from "../components/video-testimonials";

const values = [
  { icon: Target, title: "Customer First", desc: "Every decision starts with our customers." },
  { icon: Heart, title: "Community Focused", desc: "Connecting people, homes and businesses." },
  { icon: Lightbulb, title: "Always Innovating", desc: "Continuously improving our network and services." },
  { icon: Users, title: "Built For Everyone", desc: " Reliable internet designed for modern life." },
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
  { year: "2015", event: <><span className="font-semibold text-primary/40">The Beginning</span><br />Started our journey with a vision to make reliable fiber connectivity more accessible.</> },
  { year: "2017", event: <><span className="font-semibold text-primary/40">10,000 Connections Strong</span><br />Reached our first major subscriber milestone.</> },
  { year: "2019", event: <><span className="font-semibold text-primary/40">Expanding Our Reach</span><br />Serving more homes across more communities than ever before.</> },
  { year: "2021", event: <><span className="font-semibold text-primary/40">Stepping Into Gigabit Speeds</span><br />Launched high-speed plans designed for modern digital lifestyles.</> },
  { year: "2023", event: <><span className="font-semibold text-primary/40">Trusted By Thousands</span><br />Crossed 100,000 subscribers and received industry recognition.</> },
  { year: "2025", event: <><span className="font-semibold text-primary/40">Looking Ahead</span><br />Continuing to grow our network and deliver better connectivity experiences.</> },
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
                Connecting Homes.
                <br />
                <span className="text-primary">Powering Possibilities.</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                At Cherrinet, we believe a great internet should simply work. That's why we've spent years building a fiber network that delivers dependable speeds, seamless streaming and reliable connectivity for homes and businesses alike.
              </p>
              <div className="flex gap-8 mt-4">
                <div>
                  <p className="text-3xl text-primary">150K+</p>
                  <p className="text-sm text-muted-foreground">Connected Homes <br />& Businesses</p>
                </div>
                <div>
                  <p className="text-3xl text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Areas Covered</p>
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
            <span className="text-sm text-primary uppercase tracking-wider">WHAT DRIVES US</span>
            <h2 className="text-3xl text-foreground max-w-2xl">
              Making reliable fiber connectivity accessible to everyone.
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
            <span className="text-sm text-primary uppercase tracking-wider">Milestones That Matter</span>
            <h2 className="text-3xl text-foreground">From our first connection to thousands, every milestone means better connectivity.</h2>
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
            <span className="text-sm text-primary uppercase tracking-wider">CUSTOMER STORIES</span>
            <h2 className="text-3xl text-foreground">Trusted By Thousands. Recommended By Many.</h2>
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
                Seamless connectivity,
                <span className="text-[#D1444C]"> every day.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
