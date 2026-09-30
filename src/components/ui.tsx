import type { CSSProperties, ReactNode } from 'react';
import { useInView, useCounter } from '../hooks';
import { cn } from '../utils';

/* Scroll-reveal wrapper: fade + rise once visible */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
    opacity: inView ? 1 : 0,
  };
  return (
    <div
      ref={ref}
      style={style}
      className={cn('transition-all duration-700 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  );
}

/* Animated number: 0 -> target when in view */
export function Counter({
  to,
  suffix = '',
  className,
  duration,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const v = useCounter(to, inView, duration);
  return (
    <span ref={ref} className={className}>
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}

/* Twisted float wrapper for decorative 3D shapes */
export function Float({
  children,
  className,
  speed = '7s',
  tilt = 0,
}: {
  children: ReactNode;
  className?: string;
  speed?: string;
  tilt?: number;
}) {
  return (
    <div
      className={cn('animate-floaty', className)}
      style={{ animationDuration: speed, ['--twist' as string]: `${tilt}deg` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function Stars({ value = 4.5, size = 16 }: { value?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= Math.round(value) ? '#3f3f46' : '#d4d4d8'}>
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export function LimeStar({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#CDFF00" stroke="#9ab800" strokeWidth="1">
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  );
}
