import { ALL_CATEGORIES } from '../data';
import { Reveal } from './ui';
import { cn } from '../utils';

export default function Categories({
  active,
  onChange,
}: {
  active: string;
  onChange: (c: string) => void;
}) {
  const row1 = ALL_CATEGORIES.slice(0, 8);
  const row2 = ALL_CATEGORIES.slice(8, 14);
  const row3 = ALL_CATEGORIES.slice(14);

  const pill = (c: string) => (
    <button
      key={c}
      onClick={() => onChange(c)}
      className={cn(
        'px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5',
        c === active
          ? 'bg-brand-lime text-black shadow-[0_8px_24px_rgba(205,255,0,0.4)] scale-[1.03]'
          : 'bg-[#F4F5F6] text-[#333] hover:bg-black hover:text-white',
      )}
    >
      {c}
    </button>
  );

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-[30px] sm:text-[36px] md:text-[46px] font-bold leading-[1.12] text-balance">
            Discover Your Passion,<br />Build Your Skills
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 sm:mt-5 text-[#8A8A93] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[900px] mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses
            across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 sm:mt-9 flex flex-wrap justify-center gap-2 sm:gap-3">{row1.map(pill)}</div>
          <div className="mt-2 sm:mt-3 flex flex-wrap justify-center gap-2 sm:gap-3">{row2.map(pill)}</div>
          <div className="mt-2 sm:mt-3 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {row3.map(pill)}
            <span className="text-brand-blue font-medium text-[14px] sm:text-[15px] ml-1">+ More</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
