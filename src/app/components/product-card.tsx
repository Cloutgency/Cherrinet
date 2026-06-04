import { useState } from "react";
import { ShoppingCart, Check, Star, Info } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  specs: string[];
  badge?: string;
  inStock: boolean;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onEnquire: (product: Product) => void;
}

export function ProductCard({ product, onEnquire }: ProductCardProps) {
  const [showSpecs, setShowSpecs] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 z-10 bg-primary text-white text-xs px-2.5 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] bg-muted/40 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-foreground text-xs px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category */}
        <span className="text-xs text-primary uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-foreground leading-snug">{product.name}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Specs toggle */}
        <button
          onClick={() => setShowSpecs(!showSpecs)}
          className="flex items-center gap-1.5 text-xs text-primary hover:text-[#8E1B22] transition-colors cursor-pointer w-fit"
        >
          <Info className="w-3.5 h-3.5" />
          {showSpecs ? "Hide specs" : "View specs"}
        </button>

        {showSpecs && (
          <ul className="flex flex-col gap-1.5">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                {spec}
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-2 pt-3 border-t border-border">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-xl text-foreground">&#8377;{product.price.toLocaleString("en-IN")}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  &#8377;{product.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {discount > 0 && (
              <span className="text-xs text-green-600">{discount}% off</span>
            )}
          </div>
          <button
            onClick={() => onEnquire(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
              product.inStock
                ? "bg-primary text-white hover:bg-[#8E1B22]"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
