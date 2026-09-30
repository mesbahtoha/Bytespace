# ByteSpace — Online Course Marketplace

ByteSpace is a responsive, animated online learning marketplace where students
discover courses across 18 categories and creators publish and monetize their
expertise. Built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Features

- **Home** — animated hero with live search, logo marquee, category filtering,
  course grid, learning paths, animated counters, creator section, testimonials
- **Course catalog** (`/courses`) — full-text search, category pills, level
  filter, sorting, pagination, deep-linkable via `?cat=` / `?q=`
- **Course detail** (`/course/:id`) — video preview, curriculum sidebar, About /
  Lessons / Reviews tabs, rating breakdown with star filtering
- **Creator profile** (`/creator/:id`) — bio, follow/unfollow, course list
- **Auth** (`/signin`, `/signup`) — validated forms with error shake, password
  visibility toggle, loading states, social buttons, persistent session
- **Commerce** — global cart bag with slide-in drawer, toasts, checkout flow
- **404** — branded not-found page
- Fully responsive (mobile / tablet / desktop) with scroll reveals, floating
  3D shapes, marquees, counters and micro-interactions throughout

## Tech Stack

| Layer   | Choice                                   |
| ------- | ---------------------------------------- |
| UI      | React 18 + TypeScript                    |
| Build   | Vite 5                                   |
| Styling | Tailwind CSS 3 + custom keyframe library |
| Routing | React Router 7 (BrowserRouter)           |
| Icons   | lucide-react                             |
| State   | React Context (cart, toasts, session)    |

## Project Structure

```
bytespace/
├── public/assets/        # hero portraits + 3D shape renders (logo1–logo14)
├── src/
│   ├── pages/            # route screens (Home, Courses, CourseDetail, …)
│   ├── components/       # reusable UI (Navbar, Footer, CourseCard, …)
│   ├── store/shop.tsx    # cart / toast / session context
│   ├── data.ts           # course catalog, categories, creators, reviews
│   ├── hooks.ts          # useInView, useCounter, useLocalStorage
│   ├── utils.ts          # cn() class helper
│   ├── index.css         # typography system + animation keyframes
│   ├── App.tsx           # router + providers
│   └── main.tsx          # entry point
├── index.html
├── tailwind.config.js
├── vercel.json           # SPA fallback rewrites for deployment
└── package.json
```

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
# install
npm install

# develop (http://localhost:5173)
npm run dev

# type-check + production build (outputs dist/)
npm run build

# preview the production build
npm run preview
```

## Scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the Vite dev server            |
| `npm run build` | Type-check (`tsc`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |

## Routes

| Path                    | Screen          |
| ----------------------- | --------------- |
| `/`                     | Home            |
| `/courses`              | Course catalog  |
| `/course/:id`           | Course detail   |
| `/creator/:id`          | Creator profile |
| `/signin`, `/signup`    | Auth            |
| `*`                     | 404             |

## Deployment (Vercel)

The project is Vercel-ready: standard Vite output (`dist/`) plus `vercel.json`
SPA rewrites so deep links work.

**Via dashboard:** import the GitHub repo → framework preset “Vite” is
auto-detected → deploy (no extra settings needed).

**Via CLI:**

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Git Workflow

- `main` holds releasable code; all work happens on feature branches
  (e.g. `feature/<topic>`) and merges via Pull Request.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:` …).
