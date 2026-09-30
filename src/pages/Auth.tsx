import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { ByteLogo, Shape } from '../components/Decor';
import { Float } from '../components/ui';
import { useShop } from '../store/shop';
import { courseImages, happyAvatars } from '../data';

function LeftPanel({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="relative hidden lg:flex flex-col text-white px-12 xl:px-20 pt-10 pb-8 overflow-hidden">
      <Link to="/" className="animate-hero-in relative z-10 w-fit hover:scale-105 transition-transform">
        <ByteLogo />
      </Link>
      <h2 className="animate-hero-in relative z-10 mt-14 text-[22px] font-bold" style={{ animationDelay: '100ms' }}>
        {title}
      </h2>
      <p
        className="animate-hero-in relative z-10 mt-3 text-white/80 text-[15px] leading-[1.7] max-w-[380px]"
        style={{ animationDelay: '200ms' }}
      >
        {sub}
      </p>

      <div className="animate-hero-in relative z-10 flex-1 mt-6 min-h-[500px]" style={{ animationDelay: '300ms' }}>
        {/* soft lime glow behind cards */}
        <div
          className="absolute left-[-40px] bottom-[40px] w-[280px] h-[280px] rounded-full bg-brand-lime/25 animate-pulse"
          style={{ filter: 'blur(70px)', animationDuration: '4s' }}
        />

        <Float className="absolute left-0 top-[70px] w-[300px]" speed="8s">
          <div className="bg-white text-black rounded-[22px] p-3 shadow-2xl rotate-[-2deg] hover:rotate-0 hover:-translate-y-2 hover:shadow-float transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden h-[190px] bg-zinc-200">
              <img src={courseImages.icons} alt="" className="w-full h-full object-cover" loading="lazy" />
              <span className="absolute bottom-2.5 left-2.5 bg-white/85 px-2.5 py-1 rounded-full text-[11px] font-medium">
                17 Lessons
              </span>
            </div>
            <p className="mt-3 font-bold text-[17px] px-1 truncate">Build Digit...</p>
            <p className="text-[12px] text-zinc-500 px-1">
              by <span className="text-brand-blue">purepearl studio</span>
            </p>
            <div className="mt-2 flex items-center gap-2 px-1">
              <span className="text-[12px] bg-black/5 rounded-full px-3 py-1.5">Beginner</span>
              <span className="flex -space-x-2">
                {happyAvatars.slice(0, 3).map((a, i) => (
                  <img key={i} src={a} className="w-6 h-6 rounded-full border-2 border-white object-cover" alt="" loading="lazy" />
                ))}
                <span className="w-6 h-6 rounded-full bg-black text-white text-[9px] flex items-center justify-center border-2 border-white">
                  26+
                </span>
              </span>
            </div>
            <p className="mt-1.5 px-1 text-brand-blue font-bold">
              $25<span className="text-zinc-400 font-normal text-[12px]">/lifetime</span>
            </p>
          </div>
        </Float>

        <Float className="absolute left-[70px] top-[10px] w-[330px]" speed="6.5s">
          <div className="bg-white text-black rounded-[22px] p-3 shadow-2xl rotate-[1deg] hover:rotate-0 hover:-translate-y-2 hover:shadow-float transition-all duration-300">
            <div className="relative rounded-2xl overflow-hidden h-[190px]">
              <img src={courseImages.bigdata} alt="" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex gap-1.5 text-[11px] font-medium">
                <span className="bg-white/85 px-2.5 py-1 rounded-full">17 Lessons</span>
                <span className="bg-white/85 px-2.5 py-1 rounded-full">2 hours 16 mins</span>
                <span className="bg-white/85 px-2.5 py-1 rounded-full">59 Comments</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-1 mt-3">
              <p className="font-bold text-[17px]">the Power of Big Data</p>
              <p className="text-[15px] text-zinc-600 shrink-0">
                4.5 <span className="text-brand-lime font-bold">★</span>
              </p>
            </div>
            <p className="text-[12px] text-zinc-500 px-1">
              by <span className="text-brand-blue">purepearl studio</span>
            </p>
            <div className="mt-2 flex items-center gap-2 px-1">
              <span className="text-[12px] bg-black/5 rounded-full px-3 py-1.5">Beginner</span>
              <span className="flex -space-x-2">
                {happyAvatars.slice(0, 4).map((a, i) => (
                  <img key={i} src={a} className="w-7 h-7 rounded-full border-2 border-white object-cover" alt="" loading="lazy" />
                ))}
                <span className="w-7 h-7 rounded-full bg-black text-white text-[10px] flex items-center justify-center border-2 border-white">
                  26+
                </span>
              </span>
            </div>
            <p className="mt-1.5 px-1 text-brand-blue font-bold">
              $25<span className="text-zinc-400 font-normal text-[12px]">/lifetime</span>
            </p>
          </div>
        </Float>

        <Float className="absolute left-[28px] top-[-12px] w-[110px] z-20" speed="7s">
          <Shape n={13} className="w-full drop-shadow-xl hover:scale-110 transition-transform duration-300" />
        </Float>

        <div className="absolute left-[-10px] bottom-[30px] w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[120px] border-b-brand-lime rotate-[-12deg] animate-twist drop-shadow-xl" />

        <Float className="absolute left-[160px] bottom-[0px] z-20" speed="7.5s">
          <div className="bg-brand-lime text-black rounded-2xl px-5 py-4 w-[250px] shadow-2xl hover:-translate-y-2 hover:shadow-float transition-all duration-300">
            <p className="font-semibold text-[14px]">Happy Students</p>
            <p className="text-[12px]">
              4.5 <span className="text-zinc-600">(240)</span> <span className="text-brand-blue font-bold">★</span>
            </p>
            <div className="flex items-center mt-2">
              {happyAvatars.slice(0, 6).map((a, i) => (
                <img key={i} src={a} className="w-8 h-8 rounded-full border-2 border-brand-lime object-cover -ml-2 first:ml-0" alt="" loading="lazy" />
              ))}
              <span className="w-8 h-8 rounded-full bg-black text-white text-[10px] flex items-center justify-center -ml-2 border-2 border-brand-lime">
                2K+
              </span>
            </div>
          </div>
        </Float>

        {/* Pinned above Happy Students; later DOM order keeps it on top. */}
        <Float className="absolute left-[340px] xl:left-[350px] top-[410px] w-[70px] xl:w-[85px] z-30" speed="6s">
          <Shape n={14} className="w-full drop-shadow-xl hover:scale-110 transition-transform duration-300" />
        </Float>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="text-[14px] font-medium text-zinc-800">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="animate-pop-in mt-1.5 block text-[13px] text-red-500 font-medium">{error}</span>}
    </label>
  );
}

const inputCls = (invalid: boolean) =>
  `w-full h-[54px] rounded-[14px] border px-5 outline-none text-[15px] placeholder:text-zinc-400 bg-white transition-all duration-200 hover:border-black/30 ${
    invalid
      ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
      : 'border-black/10 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15'
  }`;

function Stagger({ delay, children }: { delay: string; children: React.ReactNode }) {
  return (
    <div className="animate-hero-in" style={{ animationDelay: delay }}>
      {children}
    </div>
  );
}

function SubmitButton({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="px-8 py-3 rounded-full bg-brand-lime font-semibold text-[15px] transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-brand-lime disabled:hover:text-black inline-flex items-center gap-2"
    >
      {loading && <Loader2 size={17} className="animate-spin" />}
      {loading ? 'Please wait...' : label}
    </button>
  );
}

function PasswordInput({
  value,
  onChange,
  invalid,
}: {
  value: string;
  onChange: (v: string) => void;
  invalid: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={show ? 'text' : 'password'}
        placeholder="********"
        className={`${inputCls(invalid)} pr-12`}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        aria-label={show ? 'Hide password' : 'Show password'}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black hover:scale-110 active:scale-95 transition-all"
      >
        {show ? <EyeOff size={19} /> : <Eye size={19} />}
      </button>
    </div>
  );
}

export function SignUp() {
  const [name, setName] = useState('Jamie Davis');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [shakeKey, setShakeKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const { signIn } = useShop();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const er: Record<string, string> = {};
    if (name.trim().length < 2) er.name = 'Please enter your full name.';
    if (!email) er.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) er.email = 'Enter a valid email.';
    if (pw.length < 6) er.pw = 'Password must be at least 6 characters.';
    setErrs(er);
    if (Object.keys(er).length) {
      setShakeKey((k) => k + 1);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      signIn(name.trim(), email.trim());
      navigate('/courses');
    }, 900);
  };

  return (
    <div className="min-h-screen blue-grid blue-grid-live grid lg:grid-cols-2 page-enter">
      <LeftPanel
        title="Sign up and come in"
        sub="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      />
      <div className="relative flex items-center justify-center p-4 sm:p-8 lg:pr-12 overflow-hidden">
        <div className="lg:hidden absolute top-16 right-4 w-[70px] opacity-90 animate-floaty pointer-events-none">
          <Shape n={13} className="w-full" />
        </div>
        <div className="lg:hidden absolute top-5 left-5 animate-hero-in">
          <Link to="/" className="hover:scale-105 transition-transform inline-block">
            <ByteLogo />
          </Link>
        </div>
        <div
          key={shakeKey}
          className={`w-full max-w-[560px] bg-white rounded-[24px] sm:rounded-[32px] px-6 sm:px-12 py-10 sm:py-14 shadow-2xl mt-14 lg:mt-0 ${
            shakeKey === 0 ? 'animate-pop-in' : 'animate-shake'
          }`}
        >
          <Stagger delay="0ms">
            <p className="text-brand-blue text-[14px] sm:text-[15px] font-medium">Create an Account</p>
          </Stagger>
          <Stagger delay="80ms">
            <h1 className="mt-1 text-[34px] sm:text-[48px] font-extrabold leading-[1.05] tracking-tight">
              Welcome to<br />ByteSpace
            </h1>
          </Stagger>
          <form onSubmit={submit} className="mt-7 sm:mt-9 space-y-5" noValidate>
            <Stagger delay="160ms">
              <Field label="Full Name" error={errs.name}>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errs.name) setErrs((p) => ({ ...p, name: '' }));
                  }}
                  placeholder="Jamie Davis"
                  className={inputCls(!!errs.name)}
                />
              </Field>
            </Stagger>
            <Stagger delay="240ms">
              <Field label="Email" error={errs.email}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errs.email) setErrs((p) => ({ ...p, email: '' }));
                  }}
                  placeholder="designer@example.com"
                  className={inputCls(!!errs.email)}
                />
              </Field>
            </Stagger>
            <Stagger delay="320ms">
              <Field label="Password" error={errs.pw}>
                <PasswordInput
                  value={pw}
                  invalid={!!errs.pw}
                  onChange={(v) => {
                    setPw(v);
                    if (errs.pw) setErrs((p) => ({ ...p, pw: '' }));
                  }}
                />
              </Field>
            </Stagger>
            <Stagger delay="400ms">
              <div className="flex justify-end pt-1">
                <SubmitButton loading={loading} label="Continue" />
              </div>
            </Stagger>
          </form>
          <Stagger delay="480ms">
            <p className="mt-14 sm:mt-20 text-center text-[13px] sm:text-[14px] text-zinc-500">
              Already have an account?{' '}
              <Link to="/signin" className="text-brand-blue font-medium hover:underline underline-offset-4">
                Login
              </Link>
            </p>
          </Stagger>
        </div>
      </div>
    </div>
  );
}

export function SignIn() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [shakeKey, setShakeKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const { signIn, pushToast } = useShop();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    const er: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) er.email = 'Enter a valid email.';
    if (pw.length < 6) er.pw = 'Password must be at least 6 characters.';
    setErrs(er);
    if (Object.keys(er).length) {
      setShakeKey((k) => k + 1);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      signIn(email.split('@')[0], email);
      navigate('/courses');
    }, 900);
  };

  const social = (p: string) => pushToast(`${p} sign-in is demo-only — use email to continue`);

  return (
    <div className="min-h-screen blue-grid blue-grid-live grid lg:grid-cols-2 page-enter">
      <LeftPanel
        title="Sign in with ease"
        sub="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      />
      <div className="relative flex items-center justify-center p-4 sm:p-8 lg:pr-12 overflow-hidden">
        <div className="lg:hidden absolute top-16 right-4 w-[70px] opacity-90 animate-floaty pointer-events-none">
          <Shape n={13} className="w-full" />
        </div>
        <div className="lg:hidden absolute top-5 left-5 animate-hero-in">
          <Link to="/" className="hover:scale-105 transition-transform inline-block">
            <ByteLogo />
          </Link>
        </div>
        <div
          key={shakeKey}
          className={`w-full max-w-[560px] bg-white rounded-[24px] sm:rounded-[32px] px-6 sm:px-12 py-10 sm:py-12 shadow-2xl mt-14 lg:mt-0 ${
            shakeKey === 0 ? 'animate-pop-in' : 'animate-shake'
          }`}
        >
          <Stagger delay="0ms">
            <p className="text-brand-blue text-[14px] sm:text-[15px] font-medium">Sign In</p>
          </Stagger>
          <Stagger delay="80ms">
            <h1 className="mt-1 text-[34px] sm:text-[48px] font-extrabold tracking-tight">Welcome Back</h1>
          </Stagger>
          <form onSubmit={submit} className="mt-7 sm:mt-8 space-y-5" noValidate>
            <Stagger delay="160ms">
              <Field label="Email" error={errs.email}>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errs.email) setErrs((p) => ({ ...p, email: '' }));
                  }}
                  placeholder="designer@example.com"
                  className={inputCls(!!errs.email)}
                />
              </Field>
            </Stagger>
            <Stagger delay="240ms">
              <Field label="Password" error={errs.pw}>
                <PasswordInput
                  value={pw}
                  invalid={!!errs.pw}
                  onChange={(v) => {
                    setPw(v);
                    if (errs.pw) setErrs((p) => ({ ...p, pw: '' }));
                  }}
                />
              </Field>
            </Stagger>
            <Stagger delay="320ms">
              <div className="flex justify-end">
                <SubmitButton loading={loading} label="Sign In" />
              </div>
            </Stagger>
          </form>

          <Stagger delay="400ms">
            <div className="mt-8 sm:mt-10 flex items-center gap-4 text-zinc-400 text-[14px]">
              <span className="flex-1 h-px bg-black/10" /> or <span className="flex-1 h-px bg-black/10" />
            </div>
          </Stagger>
          <Stagger delay="460ms">
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => social('Facebook')}
                aria-label="Facebook"
                className="w-[72px] h-[64px] rounded-2xl border border-black/10 flex items-center justify-center transition-all duration-200 hover:border-black hover:-translate-y-1 hover:shadow-card active:scale-95"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="black">
                  <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 1-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => social('Google')}
                aria-label="Google"
                className="w-[72px] h-[64px] rounded-2xl border border-black/10 flex items-center justify-center transition-all duration-200 hover:border-black hover:-translate-y-1 hover:shadow-card active:scale-95"
              >
                <svg width="30" height="30" viewBox="0 0 24 24">
                  <path
                    fill="black"
                    d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.4z"
                  />
                  <path
                    fill="black"
                    d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z"
                  />
                  <path
                    fill="black"
                    d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2L6.4 14z"
                  />
                  <path
                    fill="black"
                    d="M12 5.9c1.5 0 2.8.5 3.8 1.5L18.7 4A10 10 0 0 0 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z"
                  />
                </svg>
              </button>
            </div>
          </Stagger>

          <Stagger delay="520ms">
            <p className="mt-8 sm:mt-10 text-center text-[13px] sm:text-[14px] text-zinc-500">
              New user?{' '}
              <Link to="/signup" className="text-brand-blue font-medium hover:underline underline-offset-4">
                Create an account
              </Link>
            </p>
          </Stagger>
        </div>
      </div>
    </div>
  );
}
