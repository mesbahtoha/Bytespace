import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ByteLogo } from './Decor';
import { useShop } from '../store/shop';

const cols: string[][] = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const { pushToast } = useShop();

  const subscribe = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg('Please enter a valid email address.');
      return;
    }
    setMsg('Thanks for subscribing! Check your inbox.');
    pushToast('Subscribed to ByteSpace newsletter');
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-12 md:pt-14 pb-6">
        <div className="grid md:grid-cols-[1.2fr_1.6fr] gap-10 md:gap-12">
          <div>
            <ByteLogo dark />
            <p className="mt-4 text-[14px] leading-relaxed text-[#333] max-w-[420px]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && subscribe()}
                placeholder="Enter your email"
                className="h-[52px] w-full sm:w-[320px] rounded-full border border-black/15 px-6 outline-none text-[15px] placeholder:text-zinc-500 focus:border-brand-blue transition"
              />
              <button
                onClick={subscribe}
                className="h-[48px] sm:h-[52px] px-8 rounded-full bg-brand-lime font-semibold text-[16px] hover:bg-black hover:text-white transition shrink-0"
              >
                Search
              </button>
            </div>
            {msg && <p className="mt-3 text-[13px] text-brand-blue font-medium">{msg}</p>}
            <p className="mt-4 text-[12px] leading-relaxed text-[#555] max-w-[440px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-[14px] font-medium">
            {cols.map((col, i) => (
              <div key={i} className="space-y-3.5">
                {col.map((l) => (
                  <Link
                    key={l}
                    to={l.includes('Creator') ? '/signup' : '/courses'}
                    className="block text-[#333] hover:text-brand-blue hover:translate-x-0.5 transition-all"
                  >
                    {l}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between gap-3 text-[12px] text-[#555]">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
