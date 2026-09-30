import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Course } from '../data';

type Toast = { id: number; message: string };
type ShopState = {
  cart: Course[];
  cartOpen: boolean;
  toasts: Toast[];
  user: { name: string; email: string } | null;
  addToCart: (c: Course) => void;
  removeFromCart: (id: string) => void;
  setCartOpen: (v: boolean) => void;
  pushToast: (message: string) => void;
  signIn: (name: string, email: string) => void;
  signOut: () => void;
};

const ShopContext = createContext<ShopState | null>(null);
let toastId = 0;

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Course[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [user, setUser] = useState<{ name: string; email: string } | null>(() => {
    try {
      const raw = localStorage.getItem('bytespace-user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const pushToast = useCallback((message: string) => {
    const id = ++toastId;
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  const addToCart = useCallback(
    (c: Course) => {
      setCart((prev) => {
        if (prev.some((x) => x.id === c.id)) return prev;
        return [...prev, c];
      });
      pushToast(`Added “${c.title}” to bag`);
    },
    [pushToast],
  );

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const signIn = useCallback(
    (name: string, email: string) => {
      const u = { name, email };
      setUser(u);
      try {
        localStorage.setItem('bytespace-user', JSON.stringify(u));
      } catch {
        /* noop */
      }
      pushToast(`Welcome${name ? `, ${name}` : ''}!`);
    },
    [pushToast],
  );

  const signOut = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem('bytespace-user');
    } catch {
      /* noop */
    }
  }, []);

  const value = useMemo(
    () => ({ cart, cartOpen, toasts, user, addToCart, removeFromCart, setCartOpen, pushToast, signIn, signOut }),
    [cart, cartOpen, toasts, user, addToCart, removeFromCart, pushToast, signIn, signOut],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}
