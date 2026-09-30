import { PenTool, CodeXml, Laptop, Building2, RadioTower, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from './ui';

const items = [
  { icon: PenTool, label: 'Design', cat: 'Graphic Design' },
  { icon: CodeXml, label: 'Development', cat: 'Web Development' },
  { icon: Laptop, label: 'IT & Software', cat: 'Data Science' },
  { icon: Building2, label: 'Business', cat: 'Freelance & Entrepreneurship' },
  { icon: RadioTower, label: 'Marketing', cat: 'Marketing' },
  { icon: Contact, label: 'Photography', cat: 'Photography' },
];

export default function LearningPaths() {
  return (
    <section className="bg-white pb-16 md:pb-20 pt-2 md:pt-4">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 text-center">
        <Reveal>
          <h2 className="text-[26px] sm:text-[30px] md:text-[38px] font-bold leading-[1.12] text-balance">
            Explore Diverse Learning Paths at Bytespace
          </h2>
        </Reveal>
        <Reveal delay={110}>
          <p className="mt-4 text-[#8A8A93] max-w-[900px] mx-auto text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6]">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses
            spans various fields, ensuring there's something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </p>
        </Reveal>
        <div className="mt-8 md:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 70}>
              <Link
                to={`/courses?cat=${encodeURIComponent(it.cat)}`}
                className="group border border-black/15 rounded-[20px] py-6 sm:py-8 px-3 flex flex-col items-center gap-3 sm:gap-4 hover:shadow-card hover:border-brand-lime hover:-translate-y-1.5 hover:rotate-[-1deg] transition-all duration-300 bg-white"
              >
                <span className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-full bg-brand-lime flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  <it.icon size={24} strokeWidth={2.2} className="text-black" />
                </span>
                <span className="font-semibold text-[14px] sm:text-[16px]">{it.label}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
