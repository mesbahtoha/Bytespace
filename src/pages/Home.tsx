import { useMemo, useState } from 'react';
import Hero from '../components/Hero';
import LogoStrip from '../components/LogoStrip';
import Categories from '../components/Categories';
import CourseGrid from '../components/CourseGrid';
import LearningPaths from '../components/LearningPaths';
import Growth from '../components/Growth';
import Manage from '../components/Manage';
import CreatorCTA from '../components/CreatorCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { courses, filterByCategory } from '../data';

export default function Home() {
  const [active, setActive] = useState('Featured');
  const filtered = useMemo(() => {
    const list = filterByCategory(active);
    return list.length ? list : courses.slice(0, 6);
  }, [active]);

  return (
    <div className="min-h-screen bg-white page-enter">
      <Hero />
      <LogoStrip />
      <Categories active={active} onChange={setActive} />
      <CourseGrid courses={filtered} active={active} />
      <LearningPaths />
      <Growth />
      <Manage />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}
