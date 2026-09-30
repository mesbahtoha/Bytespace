# 🚀 ByteSpace - Online Course Marketplace

**ByteSpace** is a modern, responsive, and animated online learning marketplace designed to connect **students with high-quality courses and creators with an audience**.

Students can discover courses across multiple categories, search and filter learning content, explore course details and creators, manage a shopping cart, and complete a streamlined checkout flow. Creators can showcase their expertise through dedicated profiles and monetize their educational content.

Built with **React, TypeScript, Vite, Tailwind CSS, and React Router**, ByteSpace focuses on a polished user experience, responsive design, smooth animations, and scalable frontend architecture.

### 🌐 Live Demo

**[Visit ByteSpace →](https://bytespace-eta-seven.vercel.app/)**

---

## ✨ Highlights

- 🎓 Modern online course marketplace experience
- 🔎 Real-time course search and discovery
- 🗂️ 18 course categories
- 🎯 Category, level, and sorting filters
- 📄 Paginated course catalog
- 🔗 Deep-linkable search and category URLs
- 🎥 Interactive course detail pages
- 👨‍🏫 Creator profiles with follow/unfollow
- 🛒 Global shopping cart with slide-in drawer
- 💳 Checkout flow
- 🔐 Sign in and sign up authentication UI
- ⭐ Course ratings and review filtering
- 📱 Fully responsive across mobile, tablet, and desktop
- ✨ Scroll-based reveal animations
- 🎨 Floating 3D visual elements and micro-interactions
- 🔔 Toast notifications
- 💾 Persistent client-side session and cart state
- ⚡ Fast Vite-powered development and production builds
- 🚀 Vercel-ready deployment

---

## 🎯 Core Features

### 🏠 Home

The landing page provides an engaging introduction to the ByteSpace learning ecosystem.

- Animated hero section
- Live course search
- Popular category discovery
- Logo/brand marquee
- Featured course grid
- Learning paths
- Animated statistics and counters
- Creator showcase
- Student testimonials
- Scroll reveal animations
- Responsive layouts

---

### 📚 Course Catalog

The `/courses` page provides a complete course discovery experience.

**Features include:**

- Full-text course search
- Category filtering
- Difficulty/level filtering
- Sorting
- Pagination
- Course cards
- Search query persistence
- Deep-linkable filters

Examples:

```text
/courses?q=javascript
/courses?cat=web-development
```

This allows users to share or bookmark specific catalog searches.

---

### 🎓 Course Details

Each course has a dedicated page:

```text
/course/:id
```

Course pages include:

- Course thumbnail and information
- Video preview
- Course pricing
- Instructor information
- Curriculum
- Lessons
- Course description
- Student reviews
- Rating breakdown
- Star-based review filtering
- Add-to-cart functionality

---

### 👨‍🏫 Creator Profiles

Creators have dedicated profile pages:

```text
/creator/:id
```

Each profile can include:

- Creator biography
- Profile information
- Published courses
- Course statistics
- Follow/unfollow interaction
- Creator-focused course discovery

---

### 🔐 Authentication

ByteSpace includes a polished authentication experience.

#### Sign In

```text
/signin
```

#### Sign Up

```text
/signup
```

Authentication UI includes:

- Form validation
- Inline validation errors
- Loading states
- Password visibility toggle
- Error shake animation
- Social authentication buttons
- Persistent session state

---

### 🛒 Shopping Cart & Checkout

ByteSpace includes a global commerce experience.

Users can:

- Add courses to their cart
- Remove courses
- View cart totals
- Open the slide-in cart drawer
- Receive toast notifications
- Continue to checkout

The cart state is available throughout the application through React Context.

---

### ⭐ Reviews & Ratings

Course detail pages provide an interactive review experience.

Users can explore:

- Overall course rating
- Rating distribution
- Individual reviews
- Star-based filtering

This makes it easier for students to evaluate course quality before purchasing.

---

### 📱 Responsive Design

ByteSpace is designed mobile-first and adapts across:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop
- 🖥️ Large screens

Navigation, course grids, filters, cart interactions, typography, spacing, and content layouts are optimized for different screen sizes.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 |
| Language | TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router 7 |
| Icons | Lucide React |
| State Management | React Context |
| Animations | CSS Keyframes + Intersection Observer |
| Deployment | Vercel |

---

## 🏗️ Project Architecture

```text
bytespace/
│
├── public/
│   └── assets/
│       ├── hero portraits
│       └── 3D shape renders
│           ├── logo1
│           ├── logo2
│           ├── ...
│           └── logo14
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── CourseCard
│   │   └── reusable UI components
│   │
│   ├── pages/
│   │   ├── Home
│   │   ├── Courses
│   │   ├── CourseDetail
│   │   ├── Creator
│   │   ├── SignIn
│   │   ├── SignUp
│   │   └── NotFound
│   │
│   ├── store/
│   │   └── shop.tsx
│   │       ├── Cart Context
│   │       ├── Toast Context
│   │       └── Session Context
│   │
│   ├── data.ts
│   │   ├── courses
│   │   ├── categories
│   │   ├── creators
│   │   └── reviews
│   │
│   ├── hooks.ts
│   │   ├── useInView
│   │   ├── useCounter
│   │   └── useLocalStorage
│   │
│   ├── utils.ts
│   │   └── cn()
│   │
│   ├── index.css
│   │   ├── typography
│   │   └── animation keyframes
│   │
│   ├── App.tsx
│   │   └── Router + Providers
│   │
│   └── main.tsx
│       └── Application entry point
│
├── index.html
├── tailwind.config.js
├── vercel.json
├── package.json
└── README.md
```

---

## 🗺️ Application Routes

| Route | Description |
|---|---|
| `/` | Home / Landing Page |
| `/courses` | Course Catalog |
| `/course/:id` | Course Details |
| `/creator/:id` | Creator Profile |
| `/signin` | Sign In |
| `/signup` | Sign Up |
| `*` | 404 Not Found |

---

## 🔍 Course Discovery

ByteSpace supports multiple ways to discover learning content.

### Search

```text
/courses?q=react
```

### Category

```text
/courses?cat=web-development
```

### Combined Discovery

Search and filtering parameters can be used together to create shareable course discovery URLs.

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js 18+**
- **npm**

You can verify your installation:

```bash
node --version
npm --version
```

---

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd bytespace
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

### 4. Create Production Build

```bash
npm run build
```

The optimized production files will be generated inside:

```text
dist/
```

---

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks and creates a production build |
| `npm run preview` | Previews the production build locally |

---

## 🎨 Design & UX

ByteSpace was designed around a modern learning-platform aesthetic with an emphasis on clarity, interaction, and visual hierarchy.

### Design principles

- Clean and minimal interface
- Strong typography hierarchy
- Responsive course grids
- Consistent spacing system
- Accessible interactive elements
- Smooth transitions
- Micro-interactions
- Animated counters
- Scroll-triggered reveals
- Floating visual elements
- Interactive hover states
- Mobile-friendly navigation

---

## 🧩 State Management

ByteSpace uses **React Context** for lightweight global state management.

### Cart State

Responsible for:

- Adding courses
- Removing courses
- Cart item management
- Cart totals
- Cart drawer state

### Session State

Responsible for:

- Authentication state
- Persistent session
- User information

### Toast State

Responsible for:

- Success messages
- Error notifications
- Cart feedback
- User interaction feedback

---

## 🎞️ Animation System

The application uses a combination of:

- CSS keyframes
- Tailwind utilities
- Intersection Observer
- Custom React hooks
- Hover transitions
- Transform animations

Reusable hooks include:

```text
useInView()
useCounter()
useLocalStorage()
```

These help keep animation and persistence behavior reusable across the application.

---

## 🚀 Deployment

ByteSpace is configured for deployment on **Vercel**.

### Deploy Using Vercel Dashboard

1. Push the project to GitHub.
2. Open Vercel.
3. Import the repository.
4. Select the **Vite** framework preset.
5. Deploy.

Vercel automatically detects the Vite configuration and uses the production output from:

```text
dist/
```

---

### Deploy Using Vercel CLI

Install Vercel CLI:

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

## 🔄 SPA Routing

Because ByteSpace is a single-page application, `vercel.json` provides SPA fallback behavior so routes such as:

```text
/courses
/course/123
/creator/456
```

continue to work correctly when accessed directly.

---

## 🌿 Git Workflow

The project follows a feature-branch workflow.

### Main Branch

```text
main
```

The `main` branch contains releasable code.

### Feature Branches

```text
feature/course-filter
feature/auth-ui
feature/checkout
feature/creator-profile
```

### Workflow

```text
Feature Branch
      ↓
Development
      ↓
Testing
      ↓
Pull Request
      ↓
Code Review
      ↓
main
```

---

## 📝 Commit Convention

ByteSpace follows **Conventional Commits**.

Examples:

```text
feat: add course filtering
feat: implement creator profile
fix: resolve mobile navigation issue
fix: correct cart total calculation
refactor: improve course card component
style: improve course catalog spacing
chore: update dependencies
docs: improve README
```

---

## 📈 Future Roadmap

Potential future improvements include:

- [ ] Backend API integration
- [ ] Real database persistence
- [ ] Real user authentication
- [ ] Creator course management dashboard
- [ ] Course creation and publishing
- [ ] Real payment integration
- [ ] Student learning dashboard
- [ ] Course progress tracking
- [ ] Video lesson streaming
- [ ] Certificates
- [ ] Wishlist
- [ ] Advanced recommendation system
- [ ] Creator analytics
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Reviews backed by a database

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

### Contribution Process

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Test the application.
5. Commit using Conventional Commits.

```bash
git commit -m "feat: add your feature"
```

6. Push the branch.

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

---

## 📄 License

This project is intended for educational, portfolio, and demonstration purposes.

---

## 👨‍💻 Developer

**Mesbah Toha**

Full Stack MERN Developer

Building modern, scalable, and user-focused web applications with:

```text
React • Next.js • TypeScript • Node.js • Express • MongoDB
```
