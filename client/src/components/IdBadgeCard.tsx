import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion, animate } from 'motion/react';

interface IdBadgeCardProps {
  imageSrc?: string;
  imageAlt?: string;
  name?: string;
  role?: string;
  accent?: string;
  onDragStateChange?: (isDragging: boolean) => void;
}

export const IdBadgeCard: React.FC<IdBadgeCardProps> = ({
  imageSrc = "/anhcv.jpg",
  imageAlt = "Portrait of Đào Đức Trung",
  name = "Đào Đức Trung",
  role = "Fullstack & Backend Engineer",
  accent = "#00df8f",
  onDragStateChange
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDraggingLocal, setIsDraggingLocal] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const isActive = isHovered || isPressed || isDraggingLocal;
  const wasActiveRef = useRef(false);

  useEffect(() => {
    if (isActive !== wasActiveRef.current) {
      if (onDragStateChange) onDragStateChange(isActive);
      wasActiveRef.current = isActive;
    }
  }, [isActive, onDragStateChange]);
  
  const handleDragStart = useCallback(() => {
    setIsDraggingLocal(true);
  }, []);

  const handleDragEnd = useCallback(() => {
    setIsDraggingLocal(false);
  }, []);
  
  const x = useMotionValue(0);
  const dragY = useMotionValue(0);
  const rotateZ = useTransform(x, [-140, 140], [-8, 8]);

  const handlePan = useCallback((event: any, info: any) => {
    // Elastic vertical pull (30% resistance)
    dragY.set(info.offset.y * 0.3);
  }, [dragY]);

  const handlePanEnd = useCallback(() => {
    animate(dragY, 0, { type: "spring", stiffness: 400, damping: 25 });
  }, [dragY]);

  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);
  const handlePointerDown = useCallback(() => setIsPressed(true), []);
  const handlePointerUp = useCallback(() => setIsPressed(false), []);

  const floatAnimation = useMemo(() => shouldReduceMotion || isActive
    ? { y: 0, rotateZ: 0 } 
    : { y: [0, -15, 0], rotateZ: [-1, 1, -1] }, [shouldReduceMotion, isActive]);

  const floatTransition = useMemo(() => shouldReduceMotion || isActive
    ? { duration: 0.3 }
    : { duration: 6, repeat: Infinity, ease: "easeInOut" }, [shouldReduceMotion, isActive]);

  const dragTransitionConfig = useMemo(() => shouldReduceMotion
    ? { bounceStiffness: 600, bounceDamping: 60 } // Higher damping = less bounce
    : { bounceStiffness: 600, bounceDamping: 20 }, [shouldReduceMotion]);
    
  const dragConstraints = useMemo(() => ({ left: -140, right: 140 }), []);
  const whileDragConfig = useMemo(() => ({ scale: 1.03, cursor: "grabbing" }), []);
  const whileHoverConfig = useMemo(() => ({ scale: 1.02 }), []);
  const whileTapConfig = useMemo(() => ({ scale: 1.03 }), []);

  return (
    <div className="flex items-center justify-center min-h-[520px] w-full relative">
      <motion.div
        animate={floatAnimation}
        transition={floatTransition}
        className="relative"
      >
        <motion.div
          drag="x"
          dragElastic={0.2}
          dragDirectionLock={true}
          dragConstraints={dragConstraints}
          dragTransition={dragTransitionConfig}
          dragSnapToOrigin
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
          whileDrag={whileDragConfig}
          whileHover={whileHoverConfig}
          whileTap={whileTapConfig}
          style={{ x, rotateZ, translateY: dragY, userSelect: "none", WebkitTouchCallout: "none", WebkitUserSelect: "none" }}
          className="relative cursor-grab z-10"
          aria-hidden="false"
          aria-label={`Draggable ID badge of ${name}`}
        >
          {/* Lanyard Strap */}
          <div 
            className="absolute z-[999] left-1/2 -translate-x-1/2 bottom-[calc(100%-12px)] hidden sm:flex flex-col items-center pointer-events-none"
            style={{ transform: "translateZ(100px)" }}
          >
            {/* The main strap extending up */}
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
            {/* Clasp */}
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
                <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover pointer-events-none select-none" draggable={false} />
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
        </motion.div>
      </motion.div>
    </div>
  );
};
