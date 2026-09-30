import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BarChart3,
  Star,
  Users,
  Share2,
  Play,
  Check,
  Video,
  BadgeCheck,
  MonitorPlay,
  MessagesSquare,
  ChevronRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCourse, courseModules, keyPoints, courseImages } from '../data';
import { Reveal, Stars } from '../components/ui';
import { useShop } from '../store/shop';
import { cn } from '../utils';

type Tab = 'About' | 'Lesson' | 'Reviews';

const sneak = [courseImages.figma, courseImages.icons, courseImages.uiux, courseImages.mobile];

export default function CourseDetail() {
  const { id } = useParams();
  const course = getCourse(id ?? 'build-digital-asset');
  const [tab, setTab] = useState<Tab>('About');
  const [playing, setPlaying] = useState(false);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const { addToCart, pushToast } = useShop();

  const reviews = useMemo(
    () => [
      { name: 'PurePearl Studio', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/men/32.jpg', stars: 5, time: 'a year ago', text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"' },
      { name: 'Albert Flores', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/men/45.jpg', stars: 4, time: 'a year ago', text: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"' },
      { name: 'Cody Fisher', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/men/22.jpg', stars: 4, time: 'a year ago', text: '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."' },
      { name: 'Brooklyn Simmons', role: 'UI/UX Designer', img: 'https://randomuser.me/api/portraits/women/44.jpg', stars: 5, time: 'a year ago', text: '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."' },
    ],
    [],
  );
  const shownReviews = ratingFilter ? reviews.filter((r) => r.stars === ratingFilter) : reviews;

  const share = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      pushToast('Course link copied to clipboard');
    } catch {
      pushToast('Share: ' + url);
    }
  };

  return (
    <div className="min-h-screen bg-white page-enter">
      <div className="blue-grid text-white pb-8 sm:pb-10">
        <Navbar />
        <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-8 sm:pt-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
            <div className="max-w-[760px]">
              <h1 className="animate-hero-in text-[24px] sm:text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-tight">
                {course.id === 'build-digital-asset' ? 'Build Digital Asset: A Comprehensive Guide' : course.title}
              </h1>
              <p className="animate-hero-in mt-2 sm:mt-3 font-bold text-[14px] sm:text-[17px] md:text-[19px]" style={{ animationDelay: '100ms' }}>
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-2 sm:mt-3 text-[13px] sm:text-[15px] text-white/85">
                by <span className="text-brand-lime font-medium">{course.creator}</span>
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2.5 sm:gap-3">
                <span className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-medium">
                  <BarChart3 size={17} className="text-brand-blue" /> {course.level}
                </span>
                <span className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-medium">
                  <Star size={16} className="fill-brand-blue text-brand-blue" /> 4.8 (172 reviews)
                </span>
                <span className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-medium">
                  <Users size={17} className="text-brand-blue" /> 199 Students
                </span>
              </div>
            </div>
            <button
              onClick={share}
              className="shrink-0 self-start inline-flex items-center gap-2 bg-brand-lime text-black rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[14px] sm:text-[15px] font-semibold hover:bg-white hover:scale-105 active:scale-95 transition-all"
            >
              <Share2 size={17} /> Share
            </button>
          </div>

          {/* Cards overlap the section boundary; the grid ignores pointer events so the
              tabs underneath stay clickable, while each card re-enables them. */}
          <div className="pointer-events-none relative z-20 mt-7 sm:mt-10 grid lg:grid-cols-[1.5fr_1fr] gap-5 sm:gap-6 items-start">
            <div className="pointer-events-auto relative rounded-[20px] sm:rounded-[28px] overflow-hidden bg-zinc-200 aspect-[4/3] sm:aspect-[16/10] group">
              {!playing ? (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
                    alt="course preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 m-auto w-[76px] h-[76px] sm:w-[104px] sm:h-[104px] rounded-[20px] sm:rounded-[26px] bg-[#8a7a72]/90 backdrop-blur flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                    aria-label="Play preview"
                  >
                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 flex items-center justify-center">
                      <Play size={26} className="fill-[#8a7a72] text-[#8a7a72] ml-1" />
                    </span>
                  </button>
                </>
              ) : (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center text-white p-8 text-center">
                  <MonitorPlay size={44} className="text-brand-lime" />
                  <p className="mt-4 font-bold text-[18px]">Preview playing (demo)</p>
                  <p className="text-white/70 text-[14px] mt-1">In production this embeds the lesson video player.</p>
                  <button onClick={() => setPlaying(false)} className="mt-5 px-6 py-2.5 rounded-full bg-brand-lime text-black text-[14px] font-semibold">
                    Pause preview
                  </button>
                </div>
              )}
            </div>

            <aside className="pointer-events-auto bg-white text-black rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 shadow-float animate-pop-in">
              <p className="font-bold text-[17px] sm:text-[19px]">112 Lessons (24 hours)</p>
              <div className="mt-4 space-y-3 text-[13px] sm:text-[14px]">
                {[
                  ['01', 'Introduction to Digital Assets', '12 mins'],
                  ['02', 'Design Principles for Impacts', '21 mins'],
                  ['03', 'Advanced Techniques in Digital Creation', '16 mins'],
                ].map(([n, t, d]) => (
                  <div key={n} className="flex items-start justify-between gap-3">
                    <div className="flex gap-2.5">
                      <span className="font-medium shrink-0">{n}</span>
                      <span className="font-medium leading-snug">{t}</span>
                    </div>
                    <span className="text-brand-blue whitespace-nowrap">{d}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[13px] sm:text-[14px] text-zinc-500">99 more videos</p>
              <p className="mt-5 text-[13px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>
              <p className="mt-3 text-brand-blue font-extrabold text-[30px] sm:text-[34px]">
                ${course.price}
                <span className="text-zinc-500 font-normal text-[13px] sm:text-[14px]">/lifetime</span>
              </p>
              <button
                onClick={() => addToCart(course)}
                className="mt-3 w-full py-3 sm:py-3.5 rounded-full bg-brand-lime font-bold text-[15px] sm:text-[16px] hover:bg-black hover:text-white transition"
              >
                Enroll Now
              </button>
              <p className="mt-6 font-bold text-[16px] sm:text-[18px]">This course include</p>
              <ul className="mt-3 space-y-2.5 text-[13px] sm:text-[14px] text-zinc-600">
                {[
                  [MonitorPlay, 'Learning Resources'],
                  [Video, 'Quality Lesson Videos'],
                  [BadgeCheck, 'Certificate of Completion'],
                  [MessagesSquare, 'Private Consultation'],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Video;
                  return (
                    <li key={label as string} className="flex items-center gap-2.5">
                      <I size={19} className="text-brand-blue shrink-0" /> {label as string}
                    </li>
                  );
                })}
              </ul>
              <div className="my-5 h-px bg-black/10" />
              <div className="flex items-center gap-3">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-[15px] sm:text-[16px]">PurePearl Studio</p>
                  <p className="text-[12px] sm:text-[13px] text-zinc-500">Professional Creator</p>
                </div>
              </div>
              <p className="mt-4 text-[13px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>
              <Link
                to="/creator/purepearl-studio"
                className="mt-4 inline-block px-5 py-2 rounded-full border border-black/15 text-[13px] sm:text-[14px] font-medium hover:bg-black hover:text-white transition"
              >
                See Full Profile
              </Link>
            </aside>
          </div>
        </div>
      </div>

      {/* White body overlaps the hero so the cards straddle the boundary. */}
      <div className="relative z-10 bg-white -mt-24 sm:-mt-28 lg:-mt-[420px] pt-8 sm:pt-10 lg:pt-8 pb-8 sm:pb-12">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 grid lg:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10">
        <div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {(['About', 'Lesson', 'Reviews'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  'px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-medium transition-all',
                  tab === t ? 'bg-brand-lime text-black font-semibold' : 'bg-[#F4F4F5] text-[#444] hover:bg-black hover:text-white',
                )}
              >
                {t === 'Lesson' ? 'Lesson' : t}
              </button>
            ))}
          </div>

          {tab === 'About' && (
            <div className="animate-pop-in">
              <h2 className="mt-7 sm:mt-8 font-bold text-[19px] sm:text-[21px]">Description</h2>
              <div className="mt-3 sm:mt-4 space-y-4 sm:space-y-5 text-[13.5px] sm:text-[15px] text-zinc-600 leading-[1.75]">
                <p>
                  Embark on an enlightening exploration into the world of digital creation with our comprehensive
                  course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience
                  invites you to delve deep into the intricacies of crafting impactful digital content. From laying
                  the groundwork with foundational concepts to mastering advanced techniques, this guide is
                  meticulously curated to empower you with the skills essential for navigating the dynamic landscape
                  of digital asset creation.
                </p>
                <p>
                  In the initial modules, you'll establish a solid foundation by immersing yourself in the
                  foundational concepts that form the backbone of digital asset creation. Understand the fundamental
                  elements that constitute compelling digital content and gain proficiency in leveraging these
                  elements to communicate effectively in the digital realm.
                </p>
                <p>
                  As you progress through the course, you'll ascend to higher levels of expertise, delving into the
                  nuances of design principles that drive impactful creations. Uncover the secrets behind effective
                  visual communication, exploring color theory, typography, and layout strategies that elevate your
                  digital assets to new heights. Engage in hands-on exercises that reinforce your understanding,
                  allowing you to apply these principles in practical scenarios.
                </p>
              </div>

              <h3 className="mt-7 sm:mt-8 font-bold text-[18px] sm:text-[20px]">Sneak Peak</h3>
              <div className="mt-3 sm:mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {sneak.map((s, i) => (
                  <Reveal key={i} delay={i * 70}>
                    <img src={s} alt="" loading="lazy" className="rounded-2xl h-28 sm:h-32 w-full object-cover hover:scale-[1.04] hover:-rotate-1 transition-transform duration-300" />
                  </Reveal>
                ))}
              </div>

              <h3 className="mt-7 sm:mt-8 font-bold text-[18px] sm:text-[20px]">Key Points</h3>
              <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-[13.5px] sm:text-[15px] text-zinc-600">
                {keyPoints.map((k) => (
                  <li key={k} className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {tab === 'Lesson' && (
            <div className="animate-pop-in">
              <h2 className="mt-7 sm:mt-8 font-bold text-[19px] sm:text-[21px]">Explore the Modules</h2>
              <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Immerse yourself in the course content as we break down each module into comprehensive lessons,
                providing practical insights and hands-on experiences.
              </p>
              <h3 className="mt-5 sm:mt-6 font-bold text-[18px] sm:text-[20px]">Lesson List</h3>
              <div className="mt-4 space-y-5 sm:space-y-6">
                {courseModules.map((m) => (
                  <div key={m.n} className="flex gap-3 sm:gap-4 group">
                    <span className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-2xl sm:rounded-[22px] bg-brand-lime flex items-center justify-center shrink-0 group-hover:rotate-6 group-hover:scale-105 transition-transform">
                      <Video size={26} className="text-black" />
                    </span>
                    <div>
                      <p className="font-semibold text-[14px] sm:text-[15px]">{m.n}</p>
                      <p className="mt-1 text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed">{m.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="mt-7 sm:mt-8 font-bold text-[18px] sm:text-[20px]">Lesson Content</h3>
              <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Engage with each lesson through captivating video content, detailed textual explanations, and
                interactive elements. Download resources, complete assignments, and test your understanding with
                quizzes designed to reinforce every concept.
              </p>

              <h3 className="mt-7 sm:mt-8 font-bold text-[18px] sm:text-[20px]">Lesson Progress Tracking</h3>
              <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Monitor your growth as you complete lessons, with an intuitive progress tracking feature guiding
                you through your learning journey.
              </p>
              <Reveal delay={100}>
                <div className="mt-4 sm:mt-5 max-w-[320px] bg-white border border-black/10 rounded-2xl px-5 py-4 shadow-card hover:shadow-float hover:-translate-y-1 transition-all duration-300">
                  <p className="text-[13px] font-medium text-zinc-700">Learning Progress</p>
                  <p className="text-[30px] sm:text-[34px] font-extrabold leading-none mt-1">55%</p>
                  <div className="mt-3 h-[8px] bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full w-[55%] bg-brand-lime rounded-full animate-bar" />
                  </div>
                </div>
              </Reveal>
            </div>
          )}

          {tab === 'Reviews' && (
            <div className="animate-pop-in">
              <h2 className="mt-7 sm:mt-8 font-bold text-[19px] sm:text-[21px]">What Learners Are Saying</h2>
              <p className="mt-2 sm:mt-3 text-[13.5px] sm:text-[15px] text-zinc-600 leading-relaxed">
                Discover what our learners have to say about their experience with 'Build Digital Assets: A
                Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the
                transformative journey of mastering digital asset creation.
              </p>

              <div className="mt-5 sm:mt-6 border border-black/10 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-stretch">
                <div className="bg-brand-lime rounded-xl w-full sm:w-[130px] shrink-0 flex flex-col items-center justify-center py-6">
                  <p className="text-[13px] font-medium">Ratings</p>
                  <p className="text-[34px] sm:text-[38px] font-extrabold leading-none">4.7</p>
                </div>
                <div className="flex-1 space-y-2.5">
                  {[
                    [78, 720],
                    [34, 120],
                    [10, 21],
                    [6, 12],
                    [6, 16],
                  ].map(([w, n], i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-1 h-2 rounded-full bg-black/10 overflow-hidden">
                        <div className="h-full bg-brand-lime rounded-full animate-bar" style={{ width: `${w}%` }} />
                      </div>
                      <Stars value={5} size={13} />
                      <span className="text-[13px] text-zinc-600 w-8 text-right">{n}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-6 sm:mt-7 font-bold text-[17px] sm:text-[19px]">Individual Reviews:</h3>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                {[{ l: 'All rating', v: null }, { l: '5', v: 5 }, { l: '4', v: 4 }, { l: '3', v: 3 }, { l: '2', v: 2 }, { l: '1', v: 1 }].map(
                  (f) => (
                    <button
                      key={f.l}
                      onClick={() => setRatingFilter(f.v)}
                      className={cn(
                        'inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] sm:text-[14px] transition',
                        ratingFilter === f.v ? 'bg-brand-lime font-semibold' : 'bg-[#F4F4F5] hover:bg-black hover:text-white',
                      )}
                    >
                      {f.v ? <>★ {f.v}</> : f.l}
                    </button>
                  ),
                )}
              </div>

              <div className="mt-4 sm:mt-5 space-y-4">
                {shownReviews.map((r, i) => (
                  <Reveal key={r.name} delay={Math.min(i, 3) * 80}>
                  <div className="border border-black/10 rounded-2xl p-5 sm:p-7 hover:shadow-card hover:-translate-y-1 transition-all duration-300 bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <img src={r.img} alt="" loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                        <div>
                          <p className="font-semibold text-[14px] sm:text-[15px]">{r.name}</p>
                          <p className="text-[12px] sm:text-[13px] text-zinc-500">{r.role}</p>
                        </div>
                      </div>
                      <span className="text-[12px] sm:text-[13px] text-zinc-500 shrink-0">{r.time}</span>
                    </div>
                    <div className="mt-3"><Stars value={r.stars} size={17} /></div>
                    <p className="mt-3 text-[13.5px] sm:text-[15px] text-zinc-600 leading-relaxed">{r.text}</p>
                  </div>
                  </Reveal>
                ))}
                {shownReviews.length === 0 && <p className="text-zinc-500 text-[14px]">No reviews with {ratingFilter} stars yet.</p>}
              </div>
            </div>
          )}

          <Link to="/courses" className="mt-8 inline-flex items-center gap-1 text-brand-blue font-semibold text-[14px] hover:gap-2 transition-all">
            Back to all courses <ChevronRight size={16} />
          </Link>
        </div>

        {/* Sticky rail; offset clears the overlapping hero card on desktop. */}
        <aside className="hidden lg:block lg:mt-[380px]">
          <div className="sticky top-6 border border-black/10 rounded-[24px] p-7">
            <p className="font-bold text-[17px]">This course include</p>
            <ul className="mt-3 space-y-2.5 text-[14px] text-zinc-600">
              <li className="flex items-center gap-2.5"><MonitorPlay size={18} className="text-brand-blue" /> Learning Resources</li>
              <li className="flex items-center gap-2.5"><Video size={18} className="text-brand-blue" /> Quality Lesson Videos</li>
              <li className="flex items-center gap-2.5"><BadgeCheck size={18} className="text-brand-blue" /> Certificate of Completion</li>
              <li className="flex items-center gap-2.5"><MessagesSquare size={18} className="text-brand-blue" /> Private Consultation</li>
            </ul>
            <div className="my-5 h-px bg-black/10" />
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold">PurePearl Studio</p>
                <p className="text-[13px] text-zinc-500">Professional Creator</p>
              </div>
            </div>
            <p className="mt-4 text-[14px] text-zinc-600">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
            <Link to="/creator/purepearl-studio" className="mt-4 inline-block px-5 py-2 rounded-full border border-black/15 text-[14px] hover:bg-black hover:text-white transition">
              See Full Profile
            </Link>
          </div>
        </aside>
      </div>
      </div>

      <Footer />
    </div>
  );
}
