import { Reveal } from './ui';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    img: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    img: 'https://randomuser.me/api/portraits/men/52.jpg',
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-bg">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 py-14 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <Reveal>
            <h2 className="text-[30px] sm:text-[36px] md:text-[46px] font-bold leading-[1.12] text-balance">
              Discover What Our<br />Community Is Saying
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[#666] text-[14px] sm:text-[15px] md:text-[17px] leading-[1.6]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear
              directly from those who have experienced the transformative journey of learning and creating on our
              platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and
              accomplished creators.
            </p>
          </Reveal>
        </div>
        <div className="mt-8 md:mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="bg-white rounded-[24px] p-6 sm:p-8 shadow-card hover:shadow-float hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all duration-300 h-full">
                <img src={t.img} alt={t.name} className="w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] rounded-full object-cover ring-4 ring-brand-lime/30" loading="lazy" />
                <p className="mt-4 sm:mt-5 font-semibold text-[17px] sm:text-[18px]">{t.name}</p>
                <p className="text-brand-blue font-medium text-[14px] sm:text-[15px]">{t.role}</p>
                <p className="mt-4 sm:mt-5 text-[#666] leading-[1.6] text-[14px] sm:text-[15px] md:text-[16px]">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
