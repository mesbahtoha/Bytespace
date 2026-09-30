import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import { useShop } from '../store/shop';

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart } = useShop();
  const navigate = useNavigate();
  if (!cartOpen) return null;
  const total = cart.reduce((s, c) => s + c.price, 0);
  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <h3 className="font-bold text-[18px]">Your Bag ({cart.length})</h3>
          <button onClick={() => setCartOpen(false)} className="p-2 rounded-full hover:bg-black/5" aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 && (
            <div className="text-center pt-16">
              <p className="text-5xl">🛍️</p>
              <p className="mt-4 font-semibold">Your bag is empty</p>
              <p className="text-sm text-zinc-500 mt-1">Explore courses and start learning today.</p>
              <button
                onClick={() => {
                  setCartOpen(false);
                  navigate('/courses');
                }}
                className="mt-6 px-6 py-3 rounded-full bg-brand-lime font-semibold hover:bg-black hover:text-white transition"
              >
                Browse Courses
              </button>
            </div>
          )}
          {cart.map((c) => (
            <div key={c.id} className="flex gap-3 border border-black/10 rounded-2xl p-2.5">
              <img src={c.image} alt="" className="w-20 h-20 rounded-xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[14px] truncate">{c.title}</p>
                <p className="text-[12px] text-zinc-500">{c.creator}</p>
                <p className="text-brand-blue font-bold text-[15px] mt-1">${c.price}</p>
              </div>
              <button onClick={() => removeFromCart(c.id)} className="p-2 self-start text-zinc-400 hover:text-red-500" aria-label="Remove">
                <Trash2 size={17} />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-black/10">
            <div className="flex justify-between font-bold text-[17px]">
              <span>Total</span>
              <span className="text-brand-blue">${total}</span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                navigate('/signup');
              }}
              className="mt-4 w-full py-3.5 rounded-full bg-brand-lime font-bold hover:bg-black hover:text-white transition"
            >
              Checkout • Enroll Now
            </button>
            <Link to="/courses" onClick={() => setCartOpen(false)} className="block text-center mt-3 text-sm text-zinc-500 hover:text-black">
              Continue browsing
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}

export function Toasts() {
  const { toasts } = useShop();
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none px-4 w-full max-w-md">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto bg-black text-white text-[14px] font-medium px-5 py-3 rounded-full shadow-float animate-toast-in text-center"
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
