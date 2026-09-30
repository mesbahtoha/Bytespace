import { Link } from 'react-router-dom';
import type { Course } from '../data';
import CourseCard from './CourseCard';
import { Reveal } from './ui';

export default function CourseGrid({ courses, active }: { courses: Course[]; active: string }) {
  const visible = courses.slice(0, 6);
  return (
    <section id="courses" className="bg-white pb-14 md:pb-16">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {visible.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 90}>
            <CourseCard course={c} />
          </Reveal>
        ))}
      </div>
      {courses.length === 0 && (
        <p className="text-center text-zinc-500 mt-6">No courses found in “{active}” yet — try another category.</p>
      )}
      <div className="text-center mt-8">
        <Link
          to={`/courses?cat=${encodeURIComponent(active)}`}
          className="inline-block px-8 py-3 rounded-full border border-black/15 font-semibold text-[15px] hover:bg-black hover:text-white hover:border-black transition-all"
        >
          View all {active} courses
        </Link>
      </div>
    </section>
  );
}
