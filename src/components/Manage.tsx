import { Check } from 'lucide-react';
import { Shape } from './Decor';
import { happyAvatars } from '../data';
import { Reveal } from './ui';

const mask = {
  maskImage: 'radial-gradient(ellipse at center, black 62%, transparent 78%)',
  WebkitMaskImage: 'radial-gradient(ellipse at center, black 62%, transparent 78%)',
} as const;

function TotalRevenueCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-brand-blue text-white rounded-2xl px-5 py-4 shadow-float ${className}`}>
      <p className="text-[14px] font-medium">Total Revenue</p>
      <p className="text-[11px] opacity-70">July 1-28</p>
      <p className="text-[22px] font-bold mt-1">$120.29</p>
      <div className="mt-2 h-[8px] bg-white/30 rounded-full overflow-hidden">
        <div className="h-full w-[65%] bg-brand-lime rounded-full animate-bar" />
      </div>
    </div>
  );
}

function YearToDateCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-brand-blue text-white rounded-2xl px-5 py-4 shadow-float ${className}`}>
      <p className="text-[14px] font-medium">Year to Date</p>
      <p className="text-[11px] opacity-70">2023</p>
      <p className="text-[20px] font-bold mt-1">$1,200.38</p>
      <span className="inline-block mt-2 text-[11px] bg-brand-lime text-black font-semibold px-2.5 py-1 rounded-full">
        +12$
      </span>
    </div>
  );
}

function HappyStudentsCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl px-5 py-4 shadow-float ${className}`}>
      <p className="font-medium text-[15px] text-black">Happy Students</p>
      <p className="text-[12px] text-gray-500">
        4.5 (240) <span className="text-brand-lime font-bold">★</span>
      </p>
      <div className="flex items-center mt-2">
        {happyAvatars.slice(0, 6).map((a, i) => (
          <img
            key={i}
            src={a}
            className="w-7 h-7 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
            alt=""
            loading="lazy"
          />
        ))}
        <span className="w-7 h-7 rounded-full bg-brand-lime text-black text-[10px] font-bold flex items-center justify-center -ml-2 border-2 border-white">
          2K+
        </span>
      </div>
    </div>
  );
}

export default function Manage() {
  return (
    <section id="creators" className="bg-white overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <Reveal className="relative flex justify-center order-2 md:order-1">
          <div className="relative w-full max-w-[520px]">
            <div
              className="absolute left-0 bottom-0 w-[120px] h-[160px] bg-brand-lime/60 rounded-full"
              style={{ filter: 'blur(40px)' }}
            />

            {/* Static stacking below lg; layered overlap on lg+. */}
            <div className="lg:hidden relative z-10">
              <img
                src="/assets/creator-woman.png"
                alt="creator"
                className="w-[220px] sm:w-[260px] mx-auto object-contain drop-shadow-xl"
                style={mask}
                loading="lazy"
              />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <TotalRevenueCard className="hover:-translate-y-1 transition-transform" />
                <YearToDateCard className="hover:-translate-y-1 transition-transform" />
              </div>
              <HappyStudentsCard className="mt-3 hover:-translate-y-1 transition-transform" />
            </div>

            <div className="hidden lg:block relative h-[400px] xl:h-[440px]">
              <TotalRevenueCard className="absolute z-10 top-[30px] xl:top-[40px] left-[48px] xl:left-[36px] w-[170px] xl:w-[190px] animate-floaty" />
              <YearToDateCard className="absolute z-10 top-[190px] xl:top-[210px] left-[56px] xl:left-[48px] w-[150px] xl:w-[160px] animate-floaty" />
              <Shape
                n={7}
                className="absolute z-10 top-[90px] xl:top-[100px] right-[100px] xl:right-[100px] w-[90px] xl:w-[110px] rotate-[15deg] animate-twist"
              />
              <img
                src="/assets/creator-woman.png"
                alt="creator"
                className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 w-[280px] xl:w-[300px] object-contain drop-shadow-2xl"
                style={mask}
                loading="lazy"
              />
              <HappyStudentsCard className="absolute z-10 bottom-[16px] right-[-20px] xl:right-[-10px] w-[190px] xl:w-[200px] animate-floaty" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="order-1 md:order-2 lg:pl-8">
          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold leading-[1.12] text-balance">
            Create & Manage<br />Courses Easily.
          </h2>
          <p className="mt-5 sm:mt-6 text-[#666] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6]">
            <span className="font-semibold text-black">ByteSpace</span> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-6 sm:mt-7 space-y-3.5 sm:space-y-4 text-[15px] sm:text-[16px] md:text-[17px] font-medium">
            {['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'].map(
              (t) => (
                <li key={t} className="flex items-center gap-3 group">
                  <span className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center group-hover:bg-brand-lime group-hover:text-black group-hover:scale-110 group-hover:rotate-12 transition-all shrink-0">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{t}</span>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
