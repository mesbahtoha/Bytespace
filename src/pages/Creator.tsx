import { useMemo, useState } from 'react';
import { SlidersHorizontal, BarChart3, Shapes } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { courses, creatorProfile } from '../data';
import { Reveal } from '../components/ui';
import { useShop } from '../store/shop';

export default function CreatorPage() {
  const [following, setFollowing] = useState(false);
  const [followers, setFollowers] = useState(creatorProfile.followers);
  const [sort, setSort] = useState('Most relevant');
  const { pushToast } = useShop();

  const list = useMemo(() => {
    const mine = courses.slice(0, 6);
    if (sort === 'Highest rated') return [...mine].sort((a, b) => b.rating - a.rating);
    return mine;
  }, [sort]);

  const toggle = () => {
    setFollowing((f) => {
      setFollowers((n) => (f ? n - 1 : n + 1));
      pushToast(f ? 'Unfollowed PurePearl Studio' : 'Following PurePearl Studio');
      return !f;
    });
  };

  return (
    <div className="min-h-screen bg-white page-enter">
      <div className="blue-grid text-white">
        <Navbar />
        <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 sm:pt-12 pb-10 sm:pb-14">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
              alt="creator"
              className="w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] rounded-[20px] sm:rounded-[26px] object-cover"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <h1 className="text-[24px] sm:text-[32px] md:text-[38px] font-bold tracking-tight">PurePearl Studio</h1>
                <span className="px-4 sm:px-5 py-1.5 rounded-full bg-brand-lime text-black text-[12px] sm:text-[14px] font-semibold">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-white/85 text-[13px] sm:text-[16px]">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <div className="mt-5 sm:mt-7 text-white/85 text-[13.5px] sm:text-[16px] leading-[1.7] max-w-[900px] space-y-1">
            <p>{creatorProfile.bio1}</p>
            <p>{creatorProfile.bio2}</p>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
            <span className="bg-white text-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[15px] font-medium">
              <span className="text-brand-blue font-bold mr-1.5">3</span> Products
            </span>
            <span className="bg-white text-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[15px] font-medium">
              <span className="text-brand-blue font-bold mr-1.5">{followers}</span> Followers
            </span>
            <button
              onClick={toggle}
              className={
                'ml-auto px-7 sm:px-9 py-2.5 sm:py-3 rounded-full text-[14px] sm:text-[15px] font-semibold transition-all hover:scale-105 active:scale-95 ' +
                (following ? 'bg-white text-black' : 'bg-brand-lime text-black hover:bg-white')
              }
            >
              {following ? 'Following ✓' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 sm:pt-10">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium">
            <SlidersHorizontal size={15} /> Filter
          </button>
          <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium">
            <BarChart3 size={15} /> Level
          </button>
          <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium">
            <Shapes size={15} /> Category
          </button>
          <div className="ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pl-5 pr-5 py-2.5 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium outline-none bg-white cursor-pointer"
            >
              <option>Most relevant</option>
              <option>Highest rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 pb-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {list.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80}>
            <CourseCard course={c} />
          </Reveal>
        ))}
      </div>

      <div className="border-t border-black/10">
        <Footer />
      </div>
    </div>
  );
}
