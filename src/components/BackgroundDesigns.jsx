/**
 * BackgroundDesigns — Bold, visible background design components.
 * Each design is unique and clearly visible.
 */

/**
 * DESIGN 1: Layered Diamond Folds
 * Overlapping rotated rectangles creating paper-fold depth.
 */
export function DiamondFolds({ baseColor = '#E2E6EC', accent = '#D4DAE3' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large background diamond */}
      <div className="absolute top-[-20%] right-[-25%] w-[75vw] h-[75vw]"
        style={{ background: `linear-gradient(135deg, ${baseColor}, ${accent})`, transform: 'rotate(45deg)', opacity: 0.9 }} />
      {/* Overlapping medium diamond */}
      <div className="absolute top-[0%] right-[-12%] w-[55vw] h-[55vw]"
        style={{ background: accent, transform: 'rotate(45deg)', opacity: 0.7, boxShadow: '-4px 4px 20px rgba(0,0,0,0.06)' }} />
      {/* Small front diamond */}
      <div className="absolute top-[15%] right-[3%] w-[38vw] h-[38vw]"
        style={{ background: baseColor, transform: 'rotate(45deg)', opacity: 0.5, boxShadow: '-2px 2px 15px rgba(0,0,0,0.04)' }} />
      {/* Edge highlight lines */}
      <div className="absolute top-[8%] right-[-8%] w-[50vw] h-[50vw] border-2 border-slate-300/40"
        style={{ transform: 'rotate(45deg)' }} />
      <div className="absolute top-[22%] right-[5%] w-[32vw] h-[32vw] border border-slate-300/25"
        style={{ transform: 'rotate(45deg)' }} />
      {/* Dot texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
    </div>
  );
}

/**
 * DESIGN 2: Flowing Wave Bands
 * Multiple organic SVG wave curves stacked with visible fills.
 */
export function FlowingWaves({ colors = ['#1E2D4A', '#1A2640', '#162038'] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Wave 1 — top, largest */}
      <svg className="absolute top-[5%] left-0 w-[130%] h-[50%] -ml-[15%]" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,160 C320,280 640,40 960,200 C1280,340 1440,120 1440,180 L1440,320 L0,320 Z" fill={colors[0]} opacity="0.8" />
      </svg>
      {/* Wave 2 — middle */}
      <svg className="absolute top-[25%] left-0 w-[140%] h-[55%] -ml-[20%]" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,220 C240,80 480,300 720,160 C960,20 1200,260 1440,140 L1440,320 L0,320 Z" fill={colors[1]} opacity="0.7" />
      </svg>
      {/* Wave 3 — bottom */}
      <svg className="absolute top-[50%] left-0 w-[120%] h-[55%] -ml-[10%]" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,100 C360,280 720,40 1080,220 C1260,300 1380,160 1440,200 L1440,320 L0,320 Z" fill={colors[2]} opacity="0.6" />
      </svg>
      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
    </div>
  );
}

/**
 * DESIGN 3: Concentric Arcs
 * Large bold concentric circles from corners.
 */
export function ConcentricArcs({ color = '#94A3B8' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Bottom-left cluster */}
      {[650, 520, 390, 260].map((size, i) => (
        <div key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`, height: `${size}px`,
            bottom: `-${size * 0.3}px`, left: `-${size * 0.3}px`,
            border: `${3 - i * 0.5}px solid ${color}`,
            opacity: 0.15 + i * 0.05,
          }}
        />
      ))}
      {/* Top-right cluster */}
      {[450, 330, 210].map((size, i) => (
        <div key={`tr-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${size}px`, height: `${size}px`,
            top: `-${size * 0.35}px`, right: `-${size * 0.35}px`,
            border: `${2}px solid ${color}`,
            opacity: 0.1 + i * 0.04,
          }}
        />
      ))}
      {/* Floating accent dot */}
      <div className="absolute top-[30%] right-[20%] w-4 h-4 rounded-full opacity-20" style={{ background: color }} />
      <div className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full opacity-15" style={{ background: color }} />
      {/* Watermark */}
      <div className="absolute bottom-[10%] right-[3%] pointer-events-none select-none opacity-[0.04]">
        <span className="text-[20vw] font-black text-slate-900 leading-none block" style={{ fontFamily: "'Outfit', sans-serif" }}>?</span>
      </div>
    </div>
  );
}

/**
 * DESIGN 4: Geometric Tessellation
 * Bold skewed shapes and triangle outlines on dark backgrounds.
 */
export function GeoTessellation({ baseColor = '#3A3790', accentColor = '#4B48A0' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large skewed rectangle — back */}
      <div className="absolute top-[-25%] left-[5%] w-[75vw] h-[55vw]"
        style={{ background: baseColor, transform: 'rotate(-25deg) skewY(10deg)', opacity: 0.45 }} />
      {/* Medium trapezoid — front */}
      <div className="absolute bottom-[-15%] right-[0%] w-[55vw] h-[45vw]"
        style={{ background: accentColor, transform: 'rotate(15deg) skewX(-8deg)', opacity: 0.35 }} />
      {/* Triangle outlines */}
      <svg className="absolute top-[15%] right-[12%] w-56 h-56 opacity-[0.15]" viewBox="0 0 100 100">
        <polygon points="50,5 95,95 5,95" fill="none" stroke="white" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-[20%] left-[8%] w-40 h-40 opacity-[0.12]" viewBox="0 0 100 100">
        <polygon points="50,5 95,95 5,95" fill="none" stroke="white" strokeWidth="2" />
      </svg>
      <svg className="absolute top-[50%] right-[35%] w-24 h-24 opacity-[0.08]" viewBox="0 0 100 100">
        <polygon points="50,5 95,95 5,95" fill="none" stroke="white" strokeWidth="2.5" />
      </svg>
      {/* Checker pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

/**
 * DESIGN 5: Topographic Contours
 * Layered elliptical contour lines.
 */
export function TopoContours({ color = '#ffffff' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <ellipse key={i}
            cx={380 + i * 25} cy={200 + i * 12}
            rx={380 - i * 55} ry={190 - i * 28}
            fill="none" stroke={color}
            strokeWidth={1.2 - i * 0.1}
            opacity={0.12 + i * 0.03}
            transform={`rotate(${-6 + i * 2.5} 400 200)`}
          />
        ))}
      </svg>
      {/* Cross-hatch lines */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.15) 12px, rgba(255,255,255,0.15) 13px)' }} />
      {/* Reverse cross-hatch */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.1) 18px, rgba(255,255,255,0.1) 19px)' }} />
    </div>
  );
}

/**
 * DESIGN 6: Stacked Chevrons
 * Bold V-shapes cascading across the section.
 */
export function StackedChevrons({ color = '#94A3B8' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} className="absolute left-0 w-full" style={{ top: `${8 + i * 17}%`, height: '22%' }}
          viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d={`M0,200 L720,${40 + i * 20} L1440,200`}
            fill="none" stroke={color} strokeWidth={3 - i * 0.4}
            opacity={0.2 - i * 0.025} />
        </svg>
      ))}
      {/* Giant step number watermark */}
      <div className="absolute top-[2%] right-[2%] pointer-events-none select-none opacity-[0.06]">
        <span className="text-[45vw] font-black text-slate-900 leading-none block" style={{ fontFamily: "'Outfit', sans-serif" }}>5</span>
      </div>
    </div>
  );
}

/**
 * DESIGN 7: Split Diagonal Blocks
 * Bold diagonal color blocks.
 */
export function SplitDiagonals({ leftColor = '#EEF0F4', rightColor = '#E6E9EF' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Large diagonal split */}
      <div className="absolute top-0 left-0 w-full h-full"
        style={{ background: leftColor, clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)', opacity: 0.8 }} />
      {/* Second angled block */}
      <div className="absolute top-0 left-0 w-full h-full"
        style={{ background: rightColor, clipPath: 'polygon(50% 0, 65% 0, 45% 100%, 30% 100%)', opacity: 0.5 }} />
      {/* Cross grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cline x1='10' y1='4' x2='10' y2='16' stroke='%23334155' stroke-width='0.5'/%3E%3Cline x1='4' y1='10' x2='16' y2='10' stroke='%23334155' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '36px 36px',
        }} />
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
        <span className="text-[28vw] font-black text-slate-900 leading-none block whitespace-nowrap" style={{ fontFamily: "'Outfit', sans-serif" }}>JEE</span>
      </div>
    </div>
  );
}

/**
 * DESIGN 8: Subtle angled bands for data table areas.
 */
export function SubtleBands({ colors = ['#EEF0F4', '#E8EBF0'] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-8%] right-[-10%] w-[120%] h-[90px] rotate-[12deg]" style={{ background: colors[0], opacity: 0.9 }} />
      <div className="absolute bottom-[8%] left-[-10%] w-[130%] h-[70px] rotate-[-16deg]" style={{ background: colors[1], opacity: 0.8 }} />
      <div className="absolute top-[45%] right-[-5%] w-[100%] h-[50px] rotate-[6deg]" style={{ background: colors[0], opacity: 0.5 }} />
    </div>
  );
}
