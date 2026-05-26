/**
 * SectionDivider — Organic SVG transitions between sections.
 * Copied from triddent 4 design system.
 */
export default function SectionDivider({ 
  type = 'wave', 
  topColor = 'transparent', 
  bottomColor = '#ffffff', 
  flip = false, 
  height = 80,
  leftTopColor = null,
  leftBottomColor = null,
  splitPercent = 0,
  accentColor = null,
  accentHeight = 0,
}) {
  const H = 120;

  const paths = {
    wave: `M0,0 C360,${H * 1.2} 1080,${H * -0.3} 1440,${H * 0.7} L1440,${H} L0,${H} Z`,
    diagonal: flip
      ? `M0,${H} L1440,0 L1440,${H} Z`
      : `M0,0 L1440,${H} L0,${H} Z`,
    curve: `M0,${H * 0.15} Q720,${H * 1.8} 1440,${H * 0.15} L1440,${H} L0,${H} Z`,
    tilt: `M0,${H * 0.6} L1440,0 L1440,${H} L0,${H} Z`,
  };

  if (type === 'gradient') {
    const bandH = accentHeight || 60;
    return (
      <div className="relative w-full overflow-hidden" aria-hidden="true" style={{ lineHeight: 0, marginTop: '-1px', marginBottom: '-1px' }}>
        <div style={{ background: topColor, lineHeight: 0 }}>
          <svg viewBox={`0 0 1440 ${H}`} preserveAspectRatio="none" className="block w-full" style={{ height: `${height * 0.6}px` }}>
            <path d={`M0,0 C480,${H * 1.4} 960,${H * -0.2} 1440,${H * 0.5} L1440,${H} L0,${H} Z`} fill={accentColor || bottomColor} />
          </svg>
        </div>
        <div style={{ background: accentColor || '#E8BD63', height: `${bandH}px`, position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(90deg, ${accentColor || '#E8BD63'}00 0%, ${accentColor || '#E8BD63'}30 20%, ${accentColor || '#E8BD63'}30 80%, ${accentColor || '#E8BD63'}00 100%)`,
          }} />
        </div>
        <div style={{ background: accentColor || '#E8BD63', lineHeight: 0 }}>
          <svg viewBox={`0 0 1440 ${H}`} preserveAspectRatio="none" className="block w-full" style={{ height: `${height * 0.6}px` }}>
            <path d={`M0,${H * 0.3} Q720,${H * -0.6} 1440,${H * 0.3} L1440,${H} L0,${H} Z`} fill={bottomColor} />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-hidden="true"
      style={{ background: topColor, marginTop: '-1px', marginBottom: '-1px', lineHeight: 0 }}
    >
      {leftTopColor && splitPercent > 0 && (
        <div
          className="absolute inset-y-0 left-0 hidden lg:block"
          style={{
            width: `${splitPercent}%`,
            background: `linear-gradient(to bottom, ${leftTopColor} 50%, ${topColor} 100%)`,
            zIndex: 0
          }}
        />
      )}
      <svg
        viewBox={`0 0 1440 ${H}`}
        preserveAspectRatio="none"
        className="block w-full relative z-10"
        style={{ height: `${height}px` }}
      >
        {leftBottomColor && splitPercent > 0 ? (
          <>
            <defs>
              <linearGradient id={`splitGrad-${splitPercent}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset={`${splitPercent}%`} stopColor={leftBottomColor} />
                <stop offset={`${splitPercent}%`} stopColor={bottomColor} />
              </linearGradient>
            </defs>
            <path d={paths[type] || paths.wave} fill={`url(#splitGrad-${splitPercent})`} />
          </>
        ) : (
          <path d={paths[type] || paths.wave} fill={bottomColor} />
        )}
      </svg>
    </div>
  );
}

/**
 * SkewedMarquee — Premium single-row ticker band.
 */
export function SkewedMarquee({ items = [], bgColor = '#111827', speed = 30 }) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden select-none" style={{ zIndex: 10 }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .ticker-track {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }
        .ticker-band:hover .ticker-track {
          animation-play-state: paused;
        }
      `}} />

      <div
        className="ticker-band relative py-8 md:py-10"
        style={{ background: bgColor }}
      >
        <div
          className="ticker-track flex items-center whitespace-nowrap w-max"
          style={{ animation: `ticker-scroll ${speed}s linear infinite` }}
        >
          {repeated.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-serif text-lg md:text-xl lg:text-2xl italic font-medium text-[#E8BD63] tracking-wide px-8 md:px-10 lg:px-12 cursor-default hover:text-[#F5D78E] transition-colors duration-300">
                {item}
              </span>
              <span className="w-[1px] h-5 bg-[#E8BD63]/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
