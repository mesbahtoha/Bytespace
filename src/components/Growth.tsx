import { BarChart3 } from 'lucide-react';
import { Shape } from './Decor';
import { courseImages } from '../data';
import { Reveal, Counter, Float } from './ui';

export default function Growth() {
  return (
    <section className="lime-glow overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold leading-[1.12] text-balance">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-5 sm:mt-6 text-[#555] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6] max-w-[480px]">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
            career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
            on a new career path entirely, we have the resources you need.
          </p>
          <div className="mt-7 sm:mt-8 flex gap-8 sm:gap-10">
            <div>
              <p className="text-brand-blue font-bold text-[28px] sm:text-[32px]">
                <Counter to={12} suffix="K" />
              </p>
              <p className="text-[#666] font-medium">Students</p>
            </div>
            <div>
              <p className="text-brand-blue font-bold text-[28px] sm:text-[32px]">
                <Counter to={70} suffix="+" />
              </p>
              <p className="text-[#666] font-medium">Courses</p>
            </div>
            <div>
              <p className="text-brand-blue font-bold text-[28px] sm:text-[32px]">
                <Counter to={16} />
              </p>
              <p className="text-[#666] font-medium">Creators</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="relative w-full max-w-[320px] md:w-[380px]">
              <div className="border border-black/10 rounded-[20px] p-3 bg-white shadow-card hover:shadow-float hover:-translate-y-1 transition-all duration-300">
                <div className="relative rounded-[14px] overflow-hidden h-[190px]">
                  <img src={courseImages.figma} className="w-full h-full object-cover" alt="" loading="lazy" />
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2 text-[12px] font-medium">
                    <span className="bg-white/85 px-3 py-1.5 rounded-full">17 Lessons</span>
                    <span className="bg-white/85 px-3 py-1.5 rounded-full">2 hours 16 mins</span>
                  </div>
                </div>
                <div className="px-2 pt-3 pb-2">
                  <h3 className="font-semibold text-[19px] leading-[1.25]">Learn Figma from Basic</h3>
                  <p className="text-[13px] text-gray-500">
                    by <span className="text-brand-blue font-medium">purepearl studio</span>
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex items-center gap-1 bg-[#F4F5F6] rounded-full px-3 py-1.5 text-[13px] font-medium">
                      <BarChart3 size={15} /> Beginner
                    </span>
                  </div>
                  <p className="mt-2 text-brand-blue font-bold text-[18px]">
                    $25<span className="text-gray-500 font-normal text-[12px]">/lifetime</span>
                  </p>
                </div>
              </div>

              <Float speed="6s" className="absolute -right-8 sm:-right-14 -top-2 w-[100px] sm:w-[110px]">
                <Shape n={7} className="w-full rotate-[20deg]" />
              </Float>

              <div className="absolute -right-3 sm:-right-6 md:-right-16 top-[46%] bg-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-float w-[170px] sm:w-[190px] animate-floaty">
                <p className="text-[12px] sm:text-[13px] font-medium">Learning Progress</p>
                <p className="text-[32px] sm:text-[38px] font-bold leading-none mt-1">55%</p>
                <div className="mt-2 h-[8px] bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[55%] bg-brand-lime rounded-full animate-bar" />
                </div>
              </div>
            </div>

            <img
              src="/assets/hero-man.png"
              alt=""
              className="hidden sm:block absolute -bottom-10 -right-2 md:right-0 w-[260px] md:w-[360px] object-contain drop-shadow-2xl pointer-events-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
