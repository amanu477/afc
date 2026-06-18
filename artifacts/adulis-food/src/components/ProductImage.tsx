import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
  wrapperClassName?: string;
}

export function ProductImage({ src, alt, name, className = "", wrapperClassName = "" }: ProductImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative flex items-center justify-center ${wrapperClassName}`}>
      {/* Branded packaging frame */}
      <div className="relative group">
        {/* Outer bag shape */}
        <div
          className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #3a1a08 0%, #5c2410 40%, #7a3015 70%, #3a1a08 100%)",
            padding: "0",
            width: "260px",
            height: "300px",
          }}
        >
          {/* Top seal strip */}
          <div
            className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center py-2"
            style={{ background: "linear-gradient(90deg, #8B1A1A 0%, #C22321 50%, #8B1A1A 100%)" }}
          >
            <span className="text-white text-[10px] font-bold tracking-[0.35em] uppercase opacity-90">
              Adulis Food Complex
            </span>
          </div>

          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 z-10 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
            }}
          />

          {/* Product image */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pt-8 pb-10">
            {!errored ? (
              <img
                src={src}
                alt={alt}
                onError={() => setErrored(true)}
                className={`object-contain drop-shadow-xl ${className}`}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              /* Fallback if image fails */
              <div className="flex flex-col items-center justify-center gap-2 opacity-70">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-3xl">🌾</span>
                </div>
                <span className="text-white/60 text-xs">{name}</span>
              </div>
            )}
          </div>

          {/* Gold accent line */}
          <div
            className="absolute left-4 right-4 z-20"
            style={{ top: "34px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
          />

          {/* Bottom label */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 py-2.5 px-3 text-center"
            style={{
              background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)",
            }}
          >
            <p className="text-white font-bold text-sm tracking-wide leading-tight">{name}</p>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
              <span className="text-[9px] text-amber-300/80 tracking-widest uppercase font-medium">Premium</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
            </div>
          </div>

          {/* Side seam lines for bag realism */}
          <div className="absolute top-0 bottom-0 left-3 w-px bg-white/5 z-10" />
          <div className="absolute top-0 bottom-0 right-3 w-px bg-white/5 z-10" />
        </div>

        {/* Bag shadow */}
        <div
          className="absolute -bottom-4 left-6 right-6 h-8 rounded-full blur-xl opacity-60 z-0"
          style={{ background: "radial-gradient(ellipse, rgba(90,30,10,0.8) 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}
