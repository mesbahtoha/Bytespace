````md
# ByteSpace — Online Course Marketplace

ByteSpace is a modern, responsive online learning marketplace where students can discover courses across 18 categories and creators can showcase and monetize their expertise.

The project focuses on a polished learning experience with course discovery, filtering, creator profiles, authentication, shopping cart interactions, checkout flow, animated sections, infinite marquees, floating 3D elements, and responsive layouts across devices.

## 🌐 Live Demo

**[Visit ByteSpace →](https://bytespace-eta-seven.vercel.app/)**

---

## ✨ Features

### 🏠 Home

- Animated hero section
- Live course search
- Infinite logo marquee
- Course category filtering
- Featured course grid
- Learning paths
- Animated counters
- Creator showcase
- Testimonials
- Learning progress UI
- Floating 3D decorative elements
- Scroll reveal animations
- Micro-interactions

### 📚 Course Catalog

Available at `/courses`.

- Full-text course search
- Category filtering
- Course level filtering
- Sorting
- Pagination
- URL-based search and category state
- Deep-linkable course discovery

Examples:

```text
/courses?cat=design
/courses?q=react
````

### 🎥 Course Details

Available at:

```text
/course/:id
```

Includes:

* Course video preview
* Course overview
* Curriculum sidebar
* About tab
* Lessons tab
* Reviews tab
* Rating breakdown
* Star-based review filtering

### 👨‍🏫 Creator Profiles

Available at:

```text
/creator/:id
```

Creator pages include:

* Creator biography
* Follow / unfollow interaction
* Creator course list
* Creator-focused course discovery

### 🔐 Authentication

Available routes:

```text
/signin
/signup
```

Authentication UI includes:

* Form validation
* Validation error states
* Error shake animation
* Password visibility toggle
* Loading states
* Social login buttons
* Persistent session state

### 🛒 Commerce

ByteSpace includes a complete shopping experience with:

* Global cart state
* Shopping bag
* Slide-in cart drawer
* Add/remove course interactions
* Toast notifications
* Checkout flow

### 🎨 Animations & Interactions

The interface includes:

* Infinite horizontal marquees
* Scroll reveal animations
* Animated counters
* Floating 3D shapes
* Hover interactions
* Smooth transitions
* Loading states
* Error animations
* Toast feedback
* Micro-interactions throughout the UI

### 📱 Responsive Design

ByteSpace is designed to work across:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop screens

### 🚫 Custom 404

A branded custom 404 page is included for invalid routes.

---

## 🛠️ Tech Stack

| Layer            | Technology                                   |
| ---------------- | -------------------------------------------- |
| UI               | React 18 + TypeScript                        |
| Build Tool       | Vite 5                                       |
| Styling          | Tailwind CSS 3                               |
| Animations       | Custom CSS Keyframes + Intersection Observer |
| Routing          | React Router 7                               |
| Icons            | Lucide React                                 |
| State Management | React Context API                            |
| Deployment       | Vercel                                       |

---

## 📂 Project Structure

```text
bytespace/
├── public/
│   └── assets/
│       └── # Hero portraits and 3D shape assets
│
├── src/
│   ├── pages/
│   │   └── # Route screens
│   │
│   ├── components/
│   │   └── # Reusable UI components
│   │
│   ├── store/
│   │   └── shop.tsx
│   │       # Cart, toast and session context
│   │
│   ├── data.ts
│   │   # Courses, categories, creators and reviews
│   │
│   ├── hooks.ts
│   │   # useInView, useCounter, useLocalStorage
│   │
│   ├── utils.ts
│   │   # Shared utility helpers
│   │
│   ├── index.css
│   │   # Global typography and animation keyframes
│   │
│   ├── App.tsx
│   │   # Router and application providers
│   │
│   └── main.tsx
│       # Application entry point
│
├── index.html
├── tailwind.config.js
├── vercel.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Before running the project locally, make sure you have:

* Node.js 18 or later
* npm

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd bytespace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The development server will start at:

```text
http://localhost:5173
```

---

## 📜 Available Scripts

| Command           | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Start the Vite development server                     |
| `npm run build`   | Run TypeScript checks and create the production build |
| `npm run preview` | Preview the production build locally                  |

---

## 🧭 Application Routes

| Route          | Screen          |
| -------------- | --------------- |
| `/`            | Home            |
| `/courses`     | Course catalog  |
| `/course/:id`  | Course details  |
| `/creator/:id` | Creator profile |
| `/signin`      | Sign in         |
| `/signup`      | Sign up         |
| `*`            | Custom 404      |

---

## 🔎 Course Discovery

The course catalog supports both search and category-based discovery.

### Search by keyword

```text
/courses?q=react
```

### Filter by category

```text
/courses?cat=design
```

Using URL parameters allows course discovery states to be shared and revisited through direct links.

---

## 🎯 UI & Design

ByteSpace is designed around a modern EdTech/SaaS visual language.

The interface combines:

* Bold typography
* High-contrast visual sections
* Responsive layouts
* Course-focused content hierarchy
* Floating abstract 3D elements
* Infinite marquee animations
* Smooth reveal effects
* Interactive cards
* Responsive navigation
* Clear search and filtering controls
* Consistent spacing and component styling

The goal is to create an engaging interface while keeping course discovery simple and intuitive.

---

## 📈 Project Architecture

The project uses a component-based React architecture with reusable UI elements and centralized client-side state.

### Components

Reusable components are organized under:

```text
src/components/
```

These components handle common interface elements such as:

* Navigation
* Footer
* Course cards
* Filters
* Search
* Cart
* Toast notifications
* Creator sections
* Shared UI elements

### Pages

Application-level screens are organized under:

```text
src/pages/
```

Each page represents a major application route.

### State Management

Global client-side state is handled through React Context.

The shared store manages:

* Cart state
* Toast notifications
* Session state

Main store:

```text
src/store/shop.tsx
```

### Custom Hooks

Reusable application logic is kept in:

```text
src/hooks.ts
```

Current utilities include:

* `useInView`
* `useCounter`
* `useLocalStorage`

---

## ⚡ Performance & UX

The application uses lightweight client-side techniques to provide smooth interactions without adding unnecessary dependencies.

The project includes:

* Component reuse
* CSS-based animations
* Intersection Observer for reveal effects
* Client-side filtering
* Responsive rendering
* Lazy-style interaction patterns
* URL-driven catalog state

---

## 🚀 Deployment

ByteSpace is configured for deployment on **Vercel**.

The production build is generated into:

```text
dist/
```

### Deploy through Vercel Dashboard

1. Import the GitHub repository into Vercel.
2. Vercel should automatically detect Vite.
3. Confirm the project settings.
4. Deploy.

The project includes:

```text
vercel.json
```

for SPA rewrite configuration, allowing client-side routes such as:

```text
/courses
/course/:id
/creator/:id
```

to work correctly after deployment.

### Deploy using Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Deploy a preview:

```bash
vercel
```

Deploy to production:

```bash
vercel --prod
```

---

## 🌐 Live Project

**ByteSpace — Online Course Marketplace**

🔗 [https://bytespace-eta-seven.vercel.app/](https://bytespace-eta-seven.vercel.app/)

---

## 🔀 Git Workflow

The project follows a feature-branch workflow.

### Main Branch

```text
main
```

The `main` branch contains releasable code.

### Feature Branches

Development work is organized through feature branches such as:

```text
feature/<topic>
```

Examples:

```text
feature/course-filter
feature/cart-drawer
feature/creator-profile
feature/auth-validation
```

Changes are merged into `main` through Pull Requests.

---

## 📝 Commit Convention

Commit messages follow the Conventional Commits style.

Examples:

```text
feat: add course filtering
fix: resolve cart drawer issue
chore: update dependencies
refactor: improve course card
style: update hero typography
```

Common prefixes:

| Prefix      | Purpose                |
| ----------- | ---------------------- |
| `feat:`     | Add a new feature      |
| `fix:`      | Fix a bug              |
| `refactor:` | Refactor existing code |
| `style:`    | UI or styling changes  |
| `chore:`    | Maintenance tasks      |
| `docs:`     | Documentation changes  |

---

## 🔮 Future Improvements

Potential future enhancements include:

* Real backend integration
* Persistent database storage
* Real payment gateway integration
* Creator dashboard
* Course publishing system
* Student learning dashboard
* Course progress tracking
* Backend authentication
* Role-based authorization
* Real-time notifications
* Admin dashboard
* Creator analytics
* Course enrollment management

---

## 📌 Project Status

ByteSpace is currently deployed and available as a responsive online course marketplace frontend.

The current implementation includes course discovery, filtering, authentication UI, creator profiles, shopping cart interactions, checkout flow, responsive layouts, animations, and Vercel deployment.

---

## 📄 License

This project was created for learning, development, and portfolio purposes.

---

## 👨‍💻 Author

**Md. Mesbahul Alam**

Built with React, TypeScript, Tailwind CSS and a focus on creating a polished, responsive and interactive learning experience.

### Live Demo

🔗 [https://bytespace-eta-seven.vercel.app/](https://bytespace-eta-seven.vercel.app/)

```
```
