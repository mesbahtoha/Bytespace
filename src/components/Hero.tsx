import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from './Navbar';
import { Shape } from './Decor';
import { happyAvatars } from '../data';
import { Float } from './ui';

export default function Hero() {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const go = () => navigate(q.trim() ? `/courses?q=${encodeURIComponent(q.trim())}` : '/courses');

  return (
    <header className="blue-grid relative overflow-hidden text-white">
      <Navbar />

      <div className="relative z-20 max-w-[1120px] mx-auto text-center px-5 sm:px-6 pt-12 md:pt-16">
        <h1 className="animate-hero-in font-bold leading-[1.05] tracking-[-0.04em] text-balance text-[36px] sm:text-[48px] md:text-[64px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p
          className="animate-hero-in mt-5 sm:mt-6 text-white/80 text-[14px] md:text-[16px] leading-[1.6] max-w-[720px] mx-auto"
          style={{ animationDelay: '120ms' }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="animate-hero-in mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: '220ms' }}>
          <div className="flex items-center bg-white rounded-full h-[54px] w-full sm:w-[520px] px-5 gap-3 shadow-float focus-within:ring-4 focus-within:ring-brand-lime/60 transition">
            <Search size={20} className="text-gray-500 shrink-0" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && go()}
              placeholder="Course, topic, creator"
              className="w-full outline-none text-gray-700 placeholder-gray-400 text-[15px] bg-transparent"
            />
          </div>
          <button
            onClick={go}
            className="h-[48px] w-full sm:w-auto px-8 rounded-full bg-brand-lime text-black font-semibold text-[16px] hover:bg-white hover:scale-[1.03] active:scale-95 transition-all"
          >
            Search
          </button>
        </div>
      </div>

      <Float className="absolute left-[-30px] top-[27%] w-[165px] md:w-[205px] z-10" speed="8s">
        <Shape n={1} className="w-full" />
      </Float>
      <Float className="absolute left-[150px] md:left-[190px] top-[55%] w-[88px] md:w-[100px] z-10" speed="6s">
        <Shape n={2} className="w-full" />
      </Float>
      <div className="absolute left-[-55px] bottom-[-45px] w-[290px] md:w-[320px] z-10 animate-twist">
        <Shape n={3} className="w-full" />
      </div>
      <Float className="absolute right-[-45px] top-[27%] w-[170px] md:w-[175px] z-10" speed="7.5s">
        <Shape n={4} className="w-full" />
      </Float>
      <Float className="absolute right-[190px] md:right-[195px] top-[38%] md:top-[415px] w-[115px] md:w-[140px] z-10" speed="6.5s">
        <Shape n={5} className="w-full" />
      </Float>
      <div className="absolute right-[15px] md:right-[70px] bottom-[-25px] w-[190px] md:w-[210px] z-10 animate-twist">
        <Shape n={6} className="w-full" />
      </div>

      <div className="relative z-20 max-w-[1240px] mx-auto px-5 sm:px-6 mt-10 md:mt-6">
        <div className="relative flex justify-center items-end">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[94%] md:w-[1080px] h-[250px] sm:h-[280px] md:h-[330px] bg-brand-lime"
            style={{ borderRadius: '999px 999px 0 0' }}
          />

          <div className="hidden md:block absolute left-[calc(50%-380px)] top-[70px] bg-white text-black rounded-2xl px-5 py-4 shadow-float w-[230px] text-left z-30 animate-floaty hover:scale-105 transition-transform">
            <p className="font-semibold text-[15px]">UI/UX Design</p>
            <p className="text-[12px] text-gray-500 mt-1">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          <div className="hidden md:block absolute right-[calc(50%-400px)] top-[70px] bg-white text-black rounded-2xl px-5 py-4 shadow-float w-[230px] text-left z-30 animate-floaty hover:scale-105 transition-transform" style={{ animationDelay: '1s' } as React.CSSProperties}>
            <p className="text-[13px] font-medium">Learning Progress</p>
            <p className="text-[42px] font-bold leading-none mt-2">55%</p>
            <div className="mt-3 h-[8px] bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-brand-lime rounded-full animate-bar" />
            </div>
          </div>

          <div className="hidden md:block absolute left-[calc(50%-420px)] bottom-[20px] bg-white text-black rounded-2xl px-5 py-4 shadow-float w-[270px] text-left z-30 animate-floaty hover:scale-105 transition-transform" style={{ animationDelay: '2s' } as React.CSSProperties}>
            <p className="font-semibold text-[15px]">Happy Students</p>
            <p className="text-[13px] text-gray-500">
              4.5 <span className="text-gray-400">(240)</span> <span className="text-lime-500">★</span>
            </p>
            <div className="flex items-center mt-2">
              {happyAvatars.slice(0, 6).map((a, i) => (
                <img key={i} src={a} className="w-9 h-9 rounded-full border-2 border-white object-cover -ml-2 first:ml-0" alt="" loading="lazy" />
              ))}
              <span className="w-9 h-9 rounded-full bg-brand-lime text-black text-[11px] font-bold flex items-center justify-center -ml-2 border-2 border-white">
                2K+
              </span>
            </div>
          </div>

          <img
            src="/assets/hero-man.png"
            alt="student"
            className="relative z-20 w-[300px] sm:w-[360px] md:w-[460px] object-contain -mb-1"
          />
        </div>

        <div className="md:hidden relative z-30 -mt-4 pb-8 flex flex-col gap-3">
          <div className="bg-white text-black rounded-2xl p-4 flex justify-between items-center shadow-float">
            <div>
              <p className="font-semibold text-sm">UI/UX Design</p>
              <p className="text-xs text-gray-500">200 Courses • 1000+ Students</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium">Learning Progress</p>
              <p className="text-2xl font-bold">55%</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
