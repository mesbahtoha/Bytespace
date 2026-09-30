import type { CSSProperties } from 'react';

export function ByteLogo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-9 h-9 rounded-[10px] bg-brand-lime flex items-center justify-center relative overflow-hidden">
        <span className="font-bold text-[26px] leading-none tracking-[-0.02em] text-white drop-shadow-sm" style={{ WebkitTextStroke: '1px #0F38FF' }}>
          b
        </span>
        <span className="absolute bottom-[7px] left-1/2 -translate-x-[2px] w-2 h-2 bg-white rounded-full border border-brand-blue" />
      </div>
      <span className={`font-bold text-[22px] tracking-[-0.02em] ${dark ? 'text-black' : 'text-white'}`}>
        ByteSpace
      </span>
    </div>
  );
}

/* Transparent 3D renders in /assets/shapes (logo1–logo14), placed per design reference. */
export function Shape({
  n,
  className = '',
  style,
}: {
  n: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={`/assets/shapes/logo${n}.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`select-none pointer-events-none ${className}`}
      style={style}
    />
  );
}

export function Donut({
  className = '',
  color = '#fff',
  border = 30,
  tilt = true,
}: {
  className?: string;
  color?: string;
  border?: number;
  tilt?: boolean;
}) {
  // Flat SVG ring fallback where no photo render exists.
  return (
    <div className={className}>
      <svg viewBox="0 0 260 260" className="w-full h-full overflow-visible">
        <g transform={tilt ? 'rotate(-18 130 130)' : undefined}>
          <ellipse
            cx="130"
            cy="130"
            rx="78"
            ry="88"
            fill="none"
            stroke={color}
            strokeWidth={border}
          />
        </g>
      </svg>
    </div>
  );
}
