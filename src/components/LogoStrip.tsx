const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];

function Mark({ i }: { i: number }) {
  if (i % 5 === 0)
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="currentColor">
        <circle cx="17" cy="17" r="15" />
        <path d="M4 14c4-3 8 2 13-1s9 2 13-1" stroke="#F4F4F5" strokeWidth="2" fill="none" />
        <path d="M4 19c4-3 8 2 13-1s9 2 13-1" stroke="#F4F4F5" strokeWidth="2" fill="none" />
        <path d="M4 24c4-3 8 2 13-1s9 2 13-1" stroke="#F4F4F5" strokeWidth="2" fill="none" />
      </svg>
    );
  if (i % 5 === 1)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6">
        <circle cx="16" cy="16" r="5" fill="currentColor" stroke="none" />
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3" />
      </svg>
    );
  if (i % 5 === 2)
    return (
      <span className="w-8 h-8 rounded-full bg-[#7A7A7E] text-white flex items-center justify-center text-lg">⚡</span>
    );
  if (i % 5 === 3)
    return <span className="w-8 h-8 rounded-full bg-[#7A7A7E] text-white flex items-center justify-center">🍀</span>;
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor">
      <circle cx="16" cy="16" r="13" strokeWidth="2" />
      <circle cx="16" cy="16" r="9" strokeWidth="1.4" opacity=".7" />
      <circle cx="16" cy="16" r="5" strokeWidth="1" opacity=".5" />
      <circle cx="13" cy="13" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function LogoStrip() {
  const row = [...logos, ...logos, ...logos];
  return (
    <div className="bg-[#F4F4F5] border-b border-black/5 overflow-hidden">
      <div className="py-8 relative">
        <div className="flex w-max animate-marquee gap-14 pr-14 items-center opacity-70">
          {row.map((l, i) => (
            <div key={i} className="flex items-center gap-2 text-[#7A7A7E] font-bold text-[20px] whitespace-nowrap">
              <Mark i={i} />
              {l}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F4F4F5] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F4F4F5] to-transparent" />
      </div>
    </div>
  );
}
