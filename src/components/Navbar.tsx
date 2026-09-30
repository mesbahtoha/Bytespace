import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, LogOut } from 'lucide-react';
import { ByteLogo } from './Decor';
import { useShop } from '../store/shop';
import { cn } from '../utils';

export default function Navbar({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const { cart, setCartOpen, user, signOut } = useShop();
  const navigate = useNavigate();

  return (
    <nav className="relative z-40">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-5 sm:px-6 pt-6 md:pt-7">
        <Link to="/" aria-label="ByteSpace home">
          <ByteLogo dark={dark} />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[15px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(dark ? 'text-black' : 'text-white', !isActive && (dark ? 'text-black/60' : 'text-white/70'), 'hover:opacity-100')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              cn(
                'hover:opacity-100',
                isActive ? (dark ? 'text-black' : 'text-white') : dark ? 'text-black/60' : 'text-white/70',
              )
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/creator/purepearl-studio"
            className={({ isActive }) =>
              cn(
                'hover:opacity-100',
                isActive ? (dark ? 'text-black' : 'text-white') : dark ? 'text-black/60' : 'text-white/70',
              )
            }
          >
            Creators
          </NavLink>
        </div>

        <div className={cn('hidden md:flex items-center gap-5 text-[15px]', dark ? 'text-black/80' : 'text-white/80')}>
          {user ? (
            <span className="max-w-[160px] truncate text-sm opacity-80">Hi, {user.name || 'Creator'}</span>
          ) : (
            <button onClick={() => navigate('/signin')} className="hover:opacity-100">
              Sign In
            </button>
          )}
          {user ? (
            <button
              onClick={() => {
                signOut();
                navigate('/');
              }}
              className="inline-flex items-center gap-1.5 hover:opacity-100"
            >
              <LogOut size={16} /> Logout
            </button>
          ) : (
            <button onClick={() => navigate('/signup')} className="hover:opacity-100">
              Join Us
            </button>
          )}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-1.5 rounded-full hover:bg-white/10 transition"
            aria-label="Open bag"
          >
            <ShoppingBag size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-lime text-black text-[11px] font-bold flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setCartOpen(true)}
            className={cn('relative p-2 rounded-full', dark ? 'text-black' : 'text-white')}
            aria-label="Open bag"
          >
            <ShoppingBag size={20} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-brand-lime text-black text-[10px] font-bold flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={cn('p-2 rounded-lg', dark ? 'text-black' : 'text-white')}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={cn(
            'md:hidden mx-4 mt-3 rounded-2xl p-5 shadow-float border',
            dark ? 'bg-white border-black/10 text-black' : 'bg-white text-black border-white/20',
          )}
        >
          <div className="grid gap-1 text-[16px] font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-black/5">
              Home
            </Link>
            <Link to="/courses" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-black/5">
              Courses
            </Link>
            <Link to="/creator/purepearl-studio" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-black/5">
              Creators
            </Link>
            <div className="h-px bg-black/10 my-2" />
            {!user ? (
              <>
                <Link to="/signin" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-xl hover:bg-black/5">
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-1 text-center px-3 py-3 rounded-full bg-brand-lime font-semibold"
                >
                  Join Us
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  signOut();
                  setOpen(false);
                }}
                className="text-left px-3 py-2.5 rounded-xl hover:bg-black/5"
              >
                Logout ({user.email})
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
