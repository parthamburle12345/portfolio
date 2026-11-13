# Parth Amburle — Personal Portfolio

> **Aesthetic Gen-Z YCombinator-Inspired Developer Portfolio**  
> AI & Machine Learning Engineer | C-DAC Bangalore PG-DAI (AIR: 1365) | SIES GST AIML ('26)

---

## ⚡ Overview

Designed in high-contrast Silicon Valley founder aesthetic (Y Combinator Orange `#FF6600`, deep obsidian `#08090D`, crisp Geist/Inter typography, and cyber neon badges).

- **Live Preview URL**: Hostable on [Vercel](https://vercel.com) with zero config.
- **Interactive Terminal / CLI**: Built-in simulated hacker terminal (press `Cmd/Ctrl + K` or click `$ launch-cli`) supporting commands: `whoami`, `skills`, `projects`, `research`, `agentic`, `experience`, `ncc`, `contact`.
- **Project Deep-Dive Drawer**: Interactive architecture breakdown with mathematical foundations, pipeline steps, and benchmark comparisons.
- **Research Spotlight**: Features **SigLIP-LPFormer** beating state-of-the-art MambaHSI on Pavia University HSI under 30-shot sample constraints (311 engineered spectral channels).
- **Direct Connect**: One-click email copy with celebratory confetti, interactive contact form, and direct social links to GitHub and LinkedIn.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to directory
cd d:\Engineering\portfolio

# 2. Run local development server
npm run dev

# Server will launch at: http://localhost:5173
```

---

## ☁️ How to Deploy to Vercel (2 Ways)

### Option 1: Automatic 1-Click via GitHub (Recommended)
1. Create a new repository on your GitHub account (`https://github.com/parthamburle12345/portfolio`).
2. Push your code:
   ```bash
   git remote add origin https://github.com/parthamburle12345/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Open [vercel.com](https://vercel.com), sign in with GitHub, click **Add New... > Project**, and select `portfolio`.
4. Vercel automatically detects **Vite** preset (`npm run build` -> `dist`). Click **Deploy**!

### Option 2: Deploy directly via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── parth-photo.jpg            # Your profile photo (replace anytime)
│   ├── Parth_Amburle_Resume.pdf   # Direct resume download
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Glassmorphic header with live status
│   │   ├── Hero.tsx               # Bento hero, pitch & metrics strip
│   │   ├── Projects.tsx           # Bento project catalog with filters
│   │   ├── ProjectModal.tsx       # Technical architecture modal
│   │   ├── ResearchSpotlight.tsx  # SigLIP-LPFormer deep dive vs MambaHSI
│   │   ├── Skills.tsx             # Interactive 4-quadrant skill matrix
│   │   ├── Experience.tsx         # C-DAC, DARPin, SIES, NCC timeline
│   │   ├── Certifications.tsx     # Verified credentials (IIT Kanpur, IIT Roorkee, Udemy)
│   │   ├── Contact.tsx            # Direct email copy + contact dispatcher
│   │   ├── Terminal.tsx           # Gen-Z CLI modal (Cmd+K)
│   │   ├── Icons.tsx              # Pixel-perfect GitHub & LinkedIn SVGs
│   │   └── Toast.tsx              # Interactive toast notification
│   ├── data/
│   │   └── portfolioData.ts       # Typed database of all projects & credentials
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Tailwind v4 styles, custom glows & grid
│   └── main.tsx                   # Entry point
├── vercel.json                    # Vercel deployment configuration
├── vite.config.ts                 # Vite + React + Tailwind v4 config
└── package.json
```

---

## 🛠️ How to Update Projects & Hyperlinks Later

When you deploy your individual project repositories and live web apps:
1. Open `src/data/portfolioData.ts`.
2. Locate the project inside `PROJECTS`.
3. Add or update the `liveUrl` and `githubUrl` fields!
4. Replace `/public/parth-photo.jpg` whenever you take a new photo.

