import React, { useState, useEffect, useRef } from 'react';

interface IdBadgeCardFallbackProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  role?: string;
  accent?: string;
}

export const IdBadgeCardFallback: React.FC<IdBadgeCardFallbackProps> = ({
  imageSrc = "/anhcv.jpg",
  imageAlt = "Portrait of Đào Đức Trung",
  name = "Đào Đức Trung",
  role = "Fullstack & Backend Engineer",
  accent = "#00df8f"
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const cardStartPos = useRef({ x: 0, y: 0 });

  const constraints = { top: -110, bottom: 160, left: -140, right: 140 };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      
      let newX = cardStartPos.current.x + (e.clientX - dragStartPos.current.x);
      let newY = cardStartPos.current.y + (e.clientY - dragStartPos.current.y);
      
      // Elastic clamping approximation
      if (newX < constraints.left) newX = constraints.left - Math.sqrt(constraints.left - newX) * 2;
      if (newX > constraints.right) newX = constraints.right + Math.sqrt(newX - constraints.right) * 2;
      if (newY < constraints.top) newY = constraints.top - Math.sqrt(constraints.top - newY) * 2;
      if (newY > constraints.bottom) newY = constraints.bottom + Math.sqrt(newY - constraints.bottom) * 2;

      setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, constraints]);

  const handlePointerDown = (e: React.PointerEvent) => {
    // Only left click or touch
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    cardStartPos.current = { ...position };
  };

  // Rotation derived from drag offset (x * 0.05deg)
  const rotateZ = position.x * 0.05;
  const scale = isDragging ? 1.03 : 1;
  const transform = `translate3d(${position.x}px, ${position.y}px, 0) rotateZ(${rotateZ}deg) scale(${scale})`;

  return (
    <div className="flex items-center justify-center min-h-[520px] w-full relative">
      <style>
        {`
          @media (prefers-reduced-motion: no-preference) {
            .idle-float {
              animation: idleFloat 6s ease-in-out infinite;
            }
            @keyframes idleFloat {
              0%, 100% { transform: translateY(0) rotateZ(-1deg); }
              50% { transform: translateY(-15px) rotateZ(1deg); }
            }
          }
        `}
      </style>
      <div className={!isDragging ? 'idle-float relative' : 'relative'}>
        <div
          onPointerDown={handlePointerDown}
          className="relative z-10"
          style={{
            transform,
            transition: isDragging ? 'none' : 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
            cursor: isDragging ? 'grabbing' : 'grab',
            touchAction: 'none',
            userSelect: 'none'
          }}
          aria-hidden="false"
          aria-label={`Draggable ID badge of ${name}`}
        >
          {/* Lanyard Strap */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-12px)] hidden sm:flex flex-col items-center pointer-events-none">
            <div 
              style={{
                width: 54,
                height: '60vh',
                background: 'linear-gradient(to bottom, #171c24, #10141b)',
                borderLeft: '1px solid rgba(255,255,255,0.08)',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 25px, ${accent}59 25px, ${accent}59 26px)`
              }}
            />
            <div className="w-[26px] h-[34px] rounded-[6px] bg-[#232a35] border border-white/15 -mt-2 z-10 shadow-lg" />
          </div>

          {/* Card Body */}
          <div className="w-[300px] h-[430px] sm:w-[330px] sm:h-[460px] bg-[#14181f] rounded-[24px] relative overflow-hidden flex flex-col"
               style={{ 
                 border: `2px solid ${accent}80`,
                 boxShadow: `0 30px 80px rgba(0,0,0,0.55), 0 0 40px ${accent}2e` 
               }}>
            
            {/* BACKGROUND IMAGE - Inset to reveal dark card background as an inner border */}
            <div className="absolute inset-[10px] rounded-[14px] overflow-hidden z-0">
              {imageSrc ? (
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-6xl font-bold text-white/20">
                  {name.charAt(0)}
                </div>
              )}
              {/* Gradient overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>

            {/* Inner Frame */}
            <div className="absolute inset-[10px] rounded-[14px] border border-white/10 pointer-events-none z-20" />
            
            {/* Punch Slot */}
            <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[64px] h-[9px] rounded-full bg-[#0b0e13] border border-white/20 z-20" />

            {/* Top Labels */}
            <div className="flex justify-between items-center px-6 pt-10 pb-2 relative z-10">
              <span className="text-[9px] font-bold text-white/80 tracking-[0.22em] uppercase drop-shadow-md">SOFTWARE ENGINEER</span>
              <span className="text-[9px] font-bold tracking-[0.22em] uppercase drop-shadow-md" style={{ color: accent }}>ID · SE-2026</span>
            </div>

            <div className="flex-1" />

            {/* Bottom Info Block */}
            <div className="relative z-10 flex flex-col justify-end px-6 pb-8">
              <h2 className="text-[25px] font-bold tracking-tight text-white mb-1 drop-shadow-lg">
                {name}<span style={{ color: accent }}>.</span>
              </h2>
              <p className="text-[11px] uppercase text-zinc-300 tracking-wider mb-5 drop-shadow-md font-medium">
                {role}
              </p>
              
              {/* Barcode Strip */}
              <div 
                className="w-full h-[28px] opacity-60 rounded-sm mix-blend-screen"
                style={{
                  background: `repeating-linear-gradient(
                    to right,
                    #fff 0,
                    #fff 2px,
                    transparent 2px,
                    transparent 4px,
                    #fff 4px,
                    #fff 5px,
                    transparent 5px,
                    transparent 8px
                  )`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
