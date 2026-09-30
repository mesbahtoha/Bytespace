import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronDown, ChevronLeft, ChevronRight, SlidersHorizontal, BarChart3, Shapes } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { ALL_CATEGORIES, courses } from '../data';
import { Reveal } from '../components/ui';
import { cn } from '../utils';

const QUICK_TABS = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Cooking'];
const PAGE_SIZE = 6;

export default function CoursesPage() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get('cat') ?? 'Featured';
  const initialQ = params.get('q') ?? '';

  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState(initialQ);
  const [level, setLevel] = useState<string>('All');
  const [sort, setSort] = useState('Most relevant');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCat(params.get('cat') ?? 'Featured');
    setQ(params.get('q') ?? '');
    setPage(1);
  }, [params]);

  const pickCat = (c: string) => {
    setCat(c);
    setPage(1);
    setParams((p) => {
      const n = new URLSearchParams(p);
      n.set('cat', c);
      if (q) n.set('q', q);
      return n;
    });
  };

  const filtered = useMemo(() => {
    let list = [...courses];
    if (cat && cat !== 'Featured') list = list.filter((x) => x.category === cat);
    else if (cat === 'Featured') {
      // Featured surfaces featured courses first, then the rest.
      list = [...list].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
    }
    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter(
        (x) => x.title.toLowerCase().includes(needle) || x.category.toLowerCase().includes(needle) || x.creator.toLowerCase().includes(needle),
      );
    }
    if (level !== 'All') list = list.filter((x) => x.level === level);
    if (sort === 'Highest rated') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'Most students') list = [...list].sort((a, b) => b.students - a.students);
    if (sort === 'Price low-high') list = [...list].sort((a, b) => a.price - b.price);
    return list;
  }, [cat, q, level, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-white page-enter">
      <div className="blue-grid text-white">
        <Navbar />
        <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 text-center">
          <h1 className="animate-hero-in text-[28px] sm:text-[36px] md:text-[44px] font-bold tracking-tight">Find Your Next Course</h1>
          <div className="animate-hero-in mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3" style={{ animationDelay: '120ms' }}>
            <div className="flex items-center bg-white rounded-full h-[52px] sm:h-[56px] w-full sm:w-[520px] px-5 gap-3 shadow-float focus-within:ring-4 focus-within:ring-brand-lime/60 transition">
              <Search size={20} className="text-zinc-500 shrink-0" />
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search"
                className="w-full outline-none text-zinc-700 placeholder-zinc-500 text-[15px] bg-transparent"
              />
            </div>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none h-[48px] sm:h-[56px] pl-6 pr-12 rounded-full bg-brand-lime text-black font-semibold text-[15px] outline-none cursor-pointer hover:brightness-95 transition"
              >
                <option>Courses</option>
                <option>Most relevant</option>
                <option>Highest rated</option>
                <option>Most students</option>
                <option>Price low-high</option>
              </select>
              <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-black pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium hover:border-black transition">
            <SlidersHorizontal size={15} /> Filter
          </button>
          <div className="relative">
            <select
              value={level}
              onChange={(e) => {
                setLevel(e.target.value);
                setPage(1);
              }}
              className="appearance-none pl-9 pr-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium outline-none cursor-pointer hover:border-black transition bg-white"
            >
              <option value="All">Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <BarChart3 size={15} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={cat}
              onChange={(e) => pickCat(e.target.value)}
              className="appearance-none pl-9 pr-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium outline-none cursor-pointer hover:border-black transition bg-white max-w-[200px]"
            >
              {ALL_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <Shapes size={15} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="ml-auto">
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none pl-9 pr-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium outline-none cursor-pointer hover:border-black transition bg-white"
              >
                <option>Most relevant</option>
                <option>Highest rated</option>
                <option>Most students</option>
                <option>Price low-high</option>
              </select>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[14px]">☰</span>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 flex gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar pb-1 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
          {QUICK_TABS.map((c) => (
            <button
              key={c}
              onClick={() => pickCat(c)}
              className={cn(
                'shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all hover:-translate-y-0.5',
                cat === c ? 'bg-brand-lime text-black font-semibold' : 'bg-[#F4F4F5] text-[#444] hover:bg-black hover:text-white',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 sm:pt-10 pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {visible.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80}>
            <CourseCard course={c} />
          </Reveal>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="text-center py-16">
          <p className="text-4xl">🔍</p>
          <p className="mt-4 font-bold text-[18px]">No courses found</p>
          <p className="text-zinc-500 text-[14px] mt-1">Try a different search or category.</p>
          <button onClick={() => { setQ(''); setLevel('All'); pickCat('Featured'); }} className="mt-5 px-6 py-2.5 rounded-full bg-brand-lime font-semibold text-[14px]">
            Reset filters
          </button>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 sm:gap-4 py-10 sm:py-14">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={safePage === 1}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
        {Array.from({ length: Math.min(5, pages) }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={cn('text-[16px] sm:text-[19px] font-bold w-8 transition', n === safePage ? 'text-black/20' : 'text-black hover:text-brand-blue')}
          >
            {n}
          </button>
        ))}
        <button
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
          disabled={safePage === pages}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition disabled:opacity-30"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="border-t border-black/10">
        <Footer />
      </div>
    </div>
  );
}
