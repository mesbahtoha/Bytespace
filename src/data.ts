export const courseImages = {
  figma:
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
  icons:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  bigdata:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  domore:
    'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
  money:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  startup:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  music:
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80',
  drawing:
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
  marketing:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  animation:
    'https://images.unsplash.com/photo-1531525708298-46c23f63a417?auto=format&fit=crop&w=800&q=80',
  social:
    'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80',
  uiux:
    'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80',
  creativeMarketing:
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
  illustration:
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80',
  film:
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
  crafts:
    'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80',
  freelance:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  graphic:
    'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80',
  photo:
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
  webdev:
    'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  datasci:
    'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
  cooking:
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
  sketch:
    'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=800&q=80',
  mobile:
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
};

export const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
];

export const happyAvatars = [
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/25.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/52.jpg',
];

export const ALL_CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export type Course = {
  id: string;
  title: string;
  shortTitle: string;
  image: string;
  rating: number;
  reviews: number;
  lessons: number;
  duration: string;
  comments: number;
  level: Level;
  students: number;
  price: number;
  creator: string;
  category: string;
  featured?: boolean;
};

const c = (
  id: string,
  title: string,
  image: string,
  category: string,
  opts: Partial<Course> = {},
): Course => ({
  id,
  title,
  shortTitle: title.length > 26 ? title.slice(0, 26) + '...' : title,
  image,
  rating: 4.5,
  reviews: 172,
  lessons: 17,
  duration: '2 hours 16 mins',
  comments: 59,
  level: 'Beginner',
  students: 199,
  price: 25,
  creator: 'purepearl studio',
  category,
  featured: false,
  ...opts,
});

export const courses: Course[] = [
  c('learn-figma-basic', 'Learn Figma from Basic', courseImages.figma, 'UI/UX Design', {
    featured: true,
  }),
  c('build-digital-asset', 'Build Digital Asset', courseImages.icons, 'Graphic Design', {
    featured: true,
    lessons: 112,
    duration: '24 hours',
    rating: 4.8,
    level: 'Intermediate',
  }),
  c('power-big-data', 'the Power of Big Data', courseImages.bigdata, 'Data Science', {
    featured: true,
  }),
  c('balancing-productivity', 'Balancing Productivity and Wellness', courseImages.domore, 'Productivity'),
  c('mastering-money', 'Mastering Money Management', courseImages.money, 'Freelance & Entrepreneurship'),
  c('idea-startup', 'From Idea to Startup Success', courseImages.startup, 'Marketing'),
  c('music-theory', 'Music Theory Essentials', courseImages.music, 'Music'),
  c('drawing-painting', 'Drawing & Painting Masterclass', courseImages.drawing, 'Drawing & Painting'),
  c('marketing-growth', 'Growth Marketing Playbook', courseImages.marketing, 'Marketing'),
  c('animation-basics', '2D Animation from Scratch', courseImages.animation, 'Animation'),
  c('social-media', 'Social Media Content System', courseImages.social, 'Social Media'),
  c('uiux-advanced', 'Advanced UI/UX Design Systems', courseImages.uiux, 'UI/UX Design', {
    level: 'Advanced',
    rating: 4.8,
  }),
  c('creative-marketing', 'Creative Marketing Campaigns', courseImages.creativeMarketing, 'Creative Marketing', {
    level: 'Intermediate',
  }),
  c('digital-illustration', 'Digital Illustration Pro', courseImages.illustration, 'Digital Illustration', {
    featured: true,
  }),
  c('film-video', 'Film & Video Editing Bootcamp', courseImages.film, 'Film & Video', {
    level: 'Intermediate',
  }),
  c('crafts-handmade', 'Handmade Crafts Business', courseImages.crafts, 'Crafts'),
  c('freelance', 'Freelance & Entrepreneurship 101', courseImages.freelance, 'Freelance & Entrepreneurship', {
    featured: true,
  }),
  c('graphic-pro', 'Graphic Design Professional', courseImages.graphic, 'Graphic Design', {
    level: 'Intermediate',
  }),
  c('photography', 'Photography Fundamentals', courseImages.photo, 'Photography'),
  c('web-dev', 'Modern Web Development', courseImages.webdev, 'Web Development', {
    level: 'Intermediate',
    rating: 4.9,
  }),
  c('data-science', 'Data Science with Python', courseImages.datasci, 'Data Science', {
    level: 'Advanced',
    rating: 4.7,
  }),
  c('cooking', 'Home Cooking Masterclass', courseImages.cooking, 'Cooking'),
  c('ux-sketch', 'Sketching Interfaces Fast', courseImages.sketch, 'UI/UX Design'),
  c('mobile-ui', 'Mobile App UI Design', courseImages.mobile, 'UI/UX Design', {
    level: 'Intermediate',
  }),
];

export const getCourse = (idOrSlug: string) =>
  courses.find((x) => x.id === idOrSlug) ?? courses[1];

export const filterByCategory = (cat: string): Course[] => {
  if (cat === 'Featured') return courses.filter((x) => x.featured).concat(courses.slice(0, 6)).slice(0, 9);
  return courses.filter((x) => x.category === cat);
};

export const creatorProfile = {
  name: 'PurePearl Studio',
  handle: 'purepearl studio',
  role: 'Passionate UI/UX, Web designer',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  products: 3,
  followers: 12,
  bio1:
    "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
  bio2:
    'ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.',
};

export const courseModules = [
  {
    n: 'Module 1: Introduction to Digital Assets',
    d: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    n: 'Module 2: Design Principles for Impact',
    d: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    n: 'Module 4: User-Centric Design Strategies',
    d: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    n: 'Module 5: Interactive Media and Engagement',
    d: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    n: 'Module 6: Project Showcase and Critique',
    d: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    n: 'Module 7: Optimizing Digital Assets for Various Platforms',
    d: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const keyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];
