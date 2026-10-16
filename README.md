# Himanshu Singh — Full Stack Developer Portfolio

A production-ready personal developer portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. Designed specifically with recruiters and engineering leaders in mind — showcasing real-world experience, architectural depth, and thoughtful UI/UX.

---

## 🚀 Live Demo & Deployment

This project is optimized for zero-config one-click deployment on **Vercel** or **Netlify**.

- **Vercel Configuration**: `vercel.json` included with SPA client-side routing rewrites.
- **Netlify Configuration**: `public/_redirects` included for single-page routing support.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS v4 + Custom Modern Dark Design System
- **Routing**: React Router v7 (Data Router / Hashless SPA Navigation)
- **Animations**: Framer Motion (restrained, accessible micro-interactions)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Forms**: React Hook Form + Zod schema validation
- **Utilities**: clsx + tailwind-merge

---

## ✨ Key Features

- **Recruiter-Focused Overview**: Clean value proposition, top technologies, and quick contact details right above the fold.
- **Projects Showcase**: Deep dives into real-world production applications (including dental SaaS platform, appointment management, and developer tools) with technical architecture details and achievements.
- **Skills Taxonomy**: Categorized expertise across Frontend, Backend, Databases, Tools, and Architectural practices.
- **Work History Timeline**: Career milestones detailing responsibilities and tech stack per engagement.
- **One-Click Resume Access**: Integrated resume download & viewer connected directly to `/profile/Himanshu-Singh-Resume.pdf`.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and desktop screens with dark aesthetic, semantic HTML5, and ARIA labels.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── profile/
│   │   ├── Himanshu-Singh-Resume.pdf   # Resume PDF file
│   │   └── photo.jpg                   # Profile headshot
│   ├── favicon.svg
│   ├── robots.txt
│   └── _redirects                      # Netlify SPA routing
├── src/
│   ├── components/                     # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProfileAvatar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ResumeDownloadButton.tsx
│   │   └── ...
│   ├── data/
│   │   └── portfolio.ts                # Centralized typed portfolio data
│   ├── pages/                          # Route pages (Home, About, Projects, Skills, Contact)
│   ├── types/                          # TypeScript definitions
│   ├── index.css                       # Tailwind v4 theme & global design tokens
│   └── App.tsx                         # App router configuration
├── vercel.json                         # Vercel SPA routing
└── vite.config.ts
```

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/himanshusingh9554/self-portfolio.git
   cd self-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Name**: Himanshu Singh
- **Role**: Full Stack Developer (NestJS, Next.js, React, Node.js, TypeScript)
- **Location**: Ayodhya, Uttar Pradesh, India
- **Email**: himanshusingh829936@gmail.com
- **Phone**: +91 9554241582
- **GitHub**: [himanshusingh9554](https://github.com/himanshusingh9554)
