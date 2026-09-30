import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import type { Course } from '../data';
import { avatars } from '../data';
import { useShop } from '../store/shop';

export default function CourseCard({ course }: { course: Course }) {
  const { addToCart } = useShop();
  return (
    <article className="group border border-black/10 rounded-[22px] p-2.5 sm:p-3 bg-white hover:shadow-card hover:-translate-y-1.5 hover:border-brand-lime/70 transition-all duration-300 flex flex-col">
      <Link to={`/course/${course.id}`} className="relative rounded-[15px] overflow-hidden h-[190px] sm:h-[210px] block">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-medium">
          <span className="bg-white/85 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{course.lessons} Lessons</span>
          <span className="bg-white/85 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{course.duration}</span>
          <span className="bg-white/85 backdrop-blur px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
            {course.comments} Comments
          </span>
        </div>
      </Link>
      <div className="px-1.5 sm:px-2 pt-3 sm:pt-4 pb-1.5 sm:pb-2 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <Link to={`/course/${course.id}`} className="hover:text-brand-blue transition">
            <h3 className="font-bold text-[16px] sm:text-[18px] leading-[1.25] tracking-tight line-clamp-1">{course.title}</h3>
          </Link>
          <span className="flex items-center gap-1 text-zinc-600 font-medium text-[15px] sm:text-[16px] shrink-0">
            {course.rating.toFixed(1)}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="#d4d4d8">
              <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
            </svg>
          </span>
        </div>
        <p className="text-[12px] sm:text-[13px] text-zinc-500 mt-0.5">
          by <span className="text-brand-blue font-medium">{course.creator}</span>
        </p>
        <div className="mt-2.5 sm:mt-3 flex items-center gap-2.5 sm:gap-3">
          <span className="flex items-center gap-1.5 bg-[#F4F5F6] rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium">
            <BarChart3 size={15} /> {course.level}
          </span>
          <div className="flex items-center">
            {avatars.map((a, i) => (
              <img
                key={i}
                src={a}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover -ml-2 first:ml-0"
                alt=""
                loading="lazy"
              />
            ))}
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-lime text-[10px] sm:text-[11px] font-bold flex items-center justify-center -ml-2 border-2 border-white">
              26+
            </span>
          </div>
        </div>
        <div className="mt-2.5 sm:mt-3 flex items-center justify-between">
          <p className="text-brand-blue font-extrabold text-[18px] sm:text-[19px]">
            ${course.price}
            <span className="text-zinc-500 font-normal text-[12px] sm:text-[13px]">/lifetime</span>
          </p>
          <button
            onClick={() => addToCart(course)}
            className="text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-4 py-2 rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition hover:bg-brand-blue"
          >
            + Enroll
          </button>
        </div>
      </div>
    </article>
  );
}
