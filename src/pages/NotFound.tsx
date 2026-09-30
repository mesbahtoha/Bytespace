import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen blue-grid text-white flex flex-col page-enter overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-6 py-10">
        <p
          className="animate-hero-in font-extrabold leading-none tracking-tight text-[120px] sm:text-[220px] md:text-[340px] select-none"
          style={{
            background: 'linear-gradient(180deg, #CDFF00 30%, #9ab800 75%, rgba(205,255,0,0.1) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          404
        </p>
        <h1 className="animate-hero-in -mt-6 sm:-mt-14 md:-mt-20 text-[30px] sm:text-[48px] md:text-[64px] font-bold leading-[1.1] max-w-[900px]" style={{ animationDelay: '120ms' }}>
          The page you are looking for doesn't exist
        </h1>
        <p className="animate-hero-in mt-4 sm:mt-6 text-white/70 text-[13px] sm:text-[16px]" style={{ animationDelay: '220ms' }}>
          Try to use a correct url or go back to homepage to start again
        </p>
        <Link
          to="/"
          className="animate-hero-in mt-6 sm:mt-8 px-7 sm:px-8 py-3 rounded-full bg-brand-lime text-black font-semibold text-[14px] sm:text-[15px] hover:bg-white hover:scale-105 active:scale-95 transition-all"
          style={{ animationDelay: '300ms' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
