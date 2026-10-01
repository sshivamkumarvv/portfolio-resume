# Shivam Kumar – Full Stack Developer Portfolio & Resume Website

A modern, high-performance portfolio and ATS-friendly resume website built with the latest **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and **Tailwind CSS**, configured for seamless deployment on **GitHub Pages**.

---

## 🌟 Key Highlights & Features

- **Dual-Mode Experience**:
  - **Modern Interactive Portfolio**: Rich glassmorphism design, glowing gradients, animated stats, interactive skill explorer with live search filter, expandable career timeline, featured project showcases, and instant contact tools.
  - **Clean ATS Resume View**: Paper-accurate ATS-friendly resume layout with direct **Print / Save as PDF** support (`@media print` stylesheet optimized for 1-click clean export without web buttons or headers).
- **Improved Technical Skills**:
  - **Frontend**: React.js, Next.js, TypeScript, JavaScript (ES6+), React Native, Redux Toolkit, Zustand, React Query, HTML5, CSS3, Tailwind CSS, Material UI, Shadcn/UI
  - **Backend**: Node.js, NestJS, Python, FastAPI, REST APIs, TypeORM, JWT Authentication, RBAC
  - **Database**: PostgreSQL, MySQL, MongoDB
  - **AI & LLM**: LLM API Integration, Generative AI, Prompt Engineering, AI Application Development, OpenAI, Google Gemini, Claude, AI-assisted Development
  - **AI / Dev Tools**: OpenAI Codex, Cursor AI, ChatGPT, Claude, GitHub Copilot
  - **DevOps & Tools**: Git, GitHub, GitHub Actions, Docker, Postman, Swagger, Firebase, Figma, CI/CD
- **GitHub Pages Ready**:
  - Pre-configured `output: 'export'` with `trailingSlash: true` and unoptimized images.
  - Generates a static HTML/CSS/JS export in `./out`.
  - Includes `.github/workflows/deploy.yml` for automated GitHub Actions zero-config deployment.
- **Direct Link Support**:
  - Root: `/` (Default to Interactive Portfolio with view switch)
  - Dedicated ATS Resume URL: `/resume` or `/?view=resume` or `/#resume`

---

## 🚀 Getting Started

### 1. Run Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 2. Build for GitHub Pages

```bash
npm run build
```

This compiles the static export into the `out/` directory.

---

### 3. Deploying to GitHub Pages

#### Option A: Automated GitHub Actions (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: portfolio & resume website with updated technical skills"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` will automatically build and deploy your site on every push!

#### Option B: Deploy `out/` directly via gh-pages
```bash
npx gh-pages -d out -t true
```

---

## 📁 Project Structure

```
├── .github/workflows/deploy.yml # GitHub Actions deployment pipeline
├── src/
│   ├── app/
│   │   ├── globals.css          # Design system, glassmorphism, @media print rules
│   │   ├── layout.tsx           # SEO metadata, OpenGraph, viewport, typography
│   │   ├── page.tsx             # Main view orchestrator (Portfolio vs Resume)
│   │   └── resume/page.tsx      # Direct ATS Resume page route
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation, view switcher, theme toggle, print button
│   │   ├── HeroSection.tsx      # Headline, interactive contact pills, stat counters
│   │   ├── SkillsSection.tsx    # Categorized skill badges with live search
│   │   ├── ExperienceSection.tsx# Interactive timeline with achievements & tech tags
│   │   ├── ProjectsSection.tsx  # Featured projects (Shipez, Signfeed, Haldiram)
│   │   ├── EducationSection.tsx # B.E. in Computer Science
│   │   ├── ContactSection.tsx   # Quick copy tools & email launcher
│   │   ├── SimpleResumeView.tsx # Paper-accurate ATS resume layout
│   │   ├── SocialIcons.tsx      # SVG brand icons (LinkedIn, GitHub)
│   │   └── Footer.tsx           # Footer with quick links & back-to-top
│   └── data/
│       └── resume-data.ts       # Central source of truth for all resume & portfolio content
└── next.config.ts               # Static export configuration for GitHub Pages
```

---

## ✏️ Updating Your Information

All content is centralized in [src/data/resume-data.ts](file:///Users/shivamkumar/Desktop/resume/src/data/resume-data.ts). You can easily update your phone number, email, skills, projects, or work experiences in one place, and both the Portfolio and ATS Resume will update automatically!
