import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export type VideoTestimonial = {
  name: string;
  location: string;
  role: string;
  quote: string;
  thumbnail: string;
  duration: string;
};

const videos: VideoTestimonial[] = [
  {
    name: "Priya Ranganathan",
    location: "Anna Nagar",
    role: "Product Designer",
    quote:
      "Honestly, the best part is that I don't have to think about my internet anymore. It just works, whether I'm working, streaming or gaming.",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "1:24",
  },
  {
    name: "Karthik Sundaram",
    location: "Velachery",
    role: "Freelance Developer",
    quote:
      "We've got multiple phones, TVs and laptops connected all day, and somehow everything still runs smoothly. That's been a huge relief.",
    thumbnail:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "0:58",
  },
  {
    name: "Meera Krishnan",
    location: "T. Nagar",
    role: "Homemaker",
    quote:
      "My kids are watching YouTube, I'm on a work call, and someone's streaming a movie. Cherrinet handles all of it without slowing down.",
    thumbnail:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "1:42",
  },
  {
    name: "Rajesh Balakrishnan",
    location: "Thiruvanmiyur",
    role: "Small Business Owner",
    quote:
      "I work from home full-time, so a stable connection isn't a luxury for me. Cherrinet has been reliable when it matters most.",
    thumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    duration: "1:11",
  },
];

export function VideoTestimonials() {
  const [active, setActive] = useState(0);
  const current = videos[active];

  const next = () => setActive((i) => (i + 1) % videos.length);
  const prev = () => setActive((i) => (i - 1 + videos.length) % videos.length);

  return (
    <div className="flex flex-col gap-8">
      {/* Featured video */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3 relative group rounded-2xl overflow-hidden bg-black aspect-video">
          <ImageWithFallback
            src={current.thumbnail}
            alt={current.name}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            aria-label={`Play testimonial from ${current.name}`}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-primary fill-primary ml-1" />
            </div>
          </button>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-xs text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
              {current.duration}
            </span>
            <span className="text-xs text-white bg-primary/90 px-2 py-1 rounded">
              {active + 1} / {videos.length}
            </span>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-5">
          <Quote className="w-10 h-10 text-primary/20" />
          <p className="text-lg text-foreground leading-relaxed">"{current.quote}"</p>
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
              {current.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-foreground">{current.name}</span>
              <span className="text-xs text-muted-foreground">
                {current.role} · {current.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls + thumbnails */}
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {videos.map((v, i) => (
            <button
              key={v.name}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all ${i === active
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-60 hover:opacity-100"
                }`}
            >
              <ImageWithFallback
                src={v.thumbnail}
                alt={v.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors cursor-pointer shrink-0"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </div>
  );
}
