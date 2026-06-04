import { MapPin } from "lucide-react";

export type TNPin = {
  name: string;
  x: number; // percent
  y: number; // percent
  align?: "left" | "right";
};

export const tamilNaduDistricts: TNPin[] = [
  { name: "Chennai", x: 86, y: 22, align: "right" },
  { name: "Tiruvallur", x: 78, y: 17, align: "left" },
  { name: "Kanchipuram", x: 80, y: 28, align: "right" },
  { name: "Vellore", x: 62, y: 18, align: "left" },
  { name: "Krishnagiri", x: 50, y: 12, align: "left" },
  { name: "Hosur", x: 44, y: 16, align: "left" },
  { name: "Tiruvannamalai", x: 65, y: 28, align: "right" },
  { name: "Villupuram", x: 74, y: 34, align: "right" },
  { name: "Cuddalore", x: 80, y: 40, align: "right" },
  { name: "Salem", x: 52, y: 30, align: "left" },
  { name: "Dharmapuri", x: 46, y: 22, align: "left" },
  { name: "Erode", x: 40, y: 38, align: "left" },
  { name: "Ooty", x: 22, y: 38, align: "left" },
  { name: "Coimbatore", x: 26, y: 46, align: "left" },
  { name: "Tiruppur", x: 34, y: 44, align: "left" },
  { name: "Karur", x: 44, y: 48, align: "left" },
  { name: "Trichy", x: 56, y: 52, align: "right" },
  { name: "Thanjavur", x: 70, y: 56, align: "right" },
  { name: "Pudukkottai", x: 62, y: 62, align: "right" },
  { name: "Dindigul", x: 42, y: 58, align: "left" },
  { name: "Theni", x: 32, y: 66, align: "left" },
  { name: "Madurai", x: 46, y: 66, align: "right" },
  { name: "Sivagangai", x: 58, y: 68, align: "right" },
  { name: "Karaikudi", x: 64, y: 66, align: "right" },
  { name: "Ramanathapuram", x: 68, y: 76, align: "right" },
  { name: "Tuticorin", x: 52, y: 82, align: "right" },
  { name: "Tirunelveli", x: 42, y: 84, align: "left" },
  { name: "Nagercoil", x: 36, y: 94, align: "left" },
  { name: "Kanyakumari", x: 42, y: 97, align: "right" },
];

export function TamilNaduMap({ pins }: { pins: TNPin[] }) {
  return (
    <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized Tamil Nadu outline */}
        <path
          d="M 305,40 L 340,55 L 350,90 L 358,130 L 350,160 L 360,200 L 345,235 L 320,250 L 305,275 L 315,310 L 295,340 L 270,370 L 245,395 L 220,420 L 200,450 L 175,478 L 158,492 L 150,470 L 135,445 L 145,420 L 130,390 L 110,360 L 95,325 L 85,290 L 95,255 L 80,220 L 75,185 L 95,160 L 130,140 L 160,115 L 180,85 L 215,70 L 250,55 L 280,42 Z"
          fill="#fef2f2"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Subtle inner shadow region */}
        <path
          d="M 305,40 L 340,55 L 350,90 L 358,130 L 350,160 L 360,200 L 345,235 L 320,250 L 305,275 L 315,310 L 295,340 L 270,370 L 245,395 L 220,420 L 200,450 L 175,478 L 158,492 L 150,470 L 135,445 L 145,420 L 130,390 L 110,360 L 95,325 L 85,290 L 95,255 L 80,220 L 75,185 L 95,160 L 130,140 L 160,115 L 180,85 L 215,70 L 250,55 L 280,42 Z"
          fill="url(#tnGradient)"
          opacity="0.5"
        />
        <defs>
          <radialGradient id="tnGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fecaca" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.15" />
          </radialGradient>
        </defs>
      </svg>

      {/* Pins */}
      {pins.map((pin) => (
        <div
          key={pin.name}
          className="absolute flex items-center gap-1 -translate-x-1/2 -translate-y-full"
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          <div
            className={`flex items-center gap-1 ${
              pin.align === "left" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <span className="text-[10px] sm:text-xs text-foreground bg-white/90 px-1.5 py-0.5 rounded whitespace-nowrap shadow-sm">
              {pin.name}
            </span>
            <MapPin className="w-3.5 h-3.5 text-primary fill-primary shrink-0" />
          </div>
        </div>
      ))}
    </div>
  );
}
