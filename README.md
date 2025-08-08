# IELTS Fluent AI

Practice IELTS Speaking with an AI coach and clean, modern UI.

## 🚀 Live Project
- Lovable Project: https://lovable.dev/projects/4c74bb56-c579-4c69-8f89-c402f92a6e22

## ✨ Features
- Realistic AI examiner avatars (male and female) for speaking practice
- Guided practice flow with start/stop and “Hear Question” behavior
- Clean, responsive UI built with Tailwind + shadcn components
- Supabase-ready foundation for auth, profiles, and future data storage
- SEO-friendly pages with structured sections and accessible components

## 📂 Project Structure (high level)
- src/pages
  - Index.tsx: Landing page
  - Practice.tsx: Speaking practice with AI avatars
  - Demo.tsx: Product demo page
  - Auth.tsx: Sign in / get started flow (ready for Supabase auth)
- src/components
  - Header.tsx, Footer.tsx, Hero.tsx, Features.tsx
  - AvatarSelector.tsx, AvatarDisplay.tsx
  - ui/*: shadcn components (buttons, dialogs, inputs, etc.)
- src/assets: Images (hero, avatars)

## 🛠️ Tech Stack
- React + Vite + TypeScript
- Tailwind CSS + shadcn-ui
- React Router v6
- React Query
- Supabase JS SDK (ready for auth and database when you enable it)

## 🧑‍💻 Getting Started
1) Install dependencies
   - npm i
2) Run the dev server
   - npm run dev
3) Open http://localhost:8080

## 🔌 Supabase (optional now, ready for later)
- The project is pre-wired for Supabase (supabase/config.toml, src/integrations/supabase/client.ts)
- When you’re ready to use auth or database:
  - Create tables and enable RLS via Lovable’s Supabase integration
  - Use the provided client to query data securely from the frontend

## 🧭 Available Pages
- “Get Started” and “Sign In” → /auth
- “Start Practice Session” → /practice (choose male/female avatar)
- “Watch Demo” → /demo

## 🧩 Development Scripts
- npm run dev: Start local dev server
- npm run build: Build for production
- npm run preview: Preview the production build locally

## 📝 Notes
- Design system first: Tokens in index.css and tailwind.config.ts ensure consistent theming
- Images include descriptive alt text for accessibility and SEO
- Keep components small and focused; prefer composition over large files

## 🤝 Contributing
Open to ideas and improvements—feel free to open issues or PRs once connected on GitHub.

---
Made with Lovable and shadcn-ui.