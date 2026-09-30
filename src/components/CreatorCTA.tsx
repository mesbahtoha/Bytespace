import { Link } from 'react-router-dom';
import { Shape, Donut } from './Decor';
import { Reveal, Float } from './ui';

export default function CreatorCTA() {
  return (
    <section className="blue-grid-dense relative overflow-hidden text-center text-white">
      <Float className="absolute left-[-25px] top-[-30px] w-[115px] md:w-[135px] z-10" speed="8s">
        <Shape n={7} className="w-full" />
      </Float>
      <Float className="absolute left-[115px] md:left-[120px] top-[32px] w-[95px] md:w-[105px] z-10" speed="6s">
        <Shape n={8} className="w-full" />
      </Float>
      <div className="absolute left-[-15px] bottom-[80px] md:bottom-[88px] w-[105px] md:w-[115px] z-10 animate-twist">
        <Shape n={9} className="w-full" />
      </div>
      <Donut className="absolute left-[15px] bottom-[-135px] w-[250px] h-[250px] md:w-[280px] md:h-[280px] z-10 animate-spin-slow" color="#CDFF00" border={58} />

      <Float className="absolute right-[220px] md:right-[230px] top-[18px] w-[115px] md:w-[130px] z-10" speed="7s">
        <Shape n={10} className="w-full" />
      </Float>
      <Float className="absolute right-[-30px] top-[35px] w-[150px] md:w-[160px] z-10" speed="6.5s">
        <Shape n={12} className="w-full" />
      </Float>
      <div className="absolute right-[70px] md:right-[80px] bottom-[-25px] w-[165px] md:w-[185px] z-10 animate-twist">
        <Shape n={11} className="w-full" />
      </div>

      <div className="relative z-20 max-w-[1000px] mx-auto px-5 sm:px-6 py-14 sm:py-16 md:py-20">
        <Reveal>
          <h2 className="text-[26px] sm:text-[34px] md:text-[46px] font-bold leading-[1.12] text-balance">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 sm:mt-6 text-white/80 text-[14px] md:text-[16px] leading-[1.6]">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now
            and become a part of a community comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course
            Library.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <Link
            to="/signup"
            className="mt-7 sm:mt-8 inline-block h-[48px] leading-[48px] px-8 rounded-full bg-brand-lime text-black font-semibold hover:bg-white hover:scale-105 active:scale-95 transition-all"
          >
            Join as Creator
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
