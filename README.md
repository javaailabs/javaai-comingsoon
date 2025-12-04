JavaAI Labs – Coming Soon Page

A modern, animated, production-grade Next.js (App Router) landing page for JavaAI Labs, deployed on Vercel and served at https://javaailabs.com
.

This lightweight site is designed as a polished pre-launch presence while the full platform is being developed.
It includes motion animations, a mail-to contact button, favicon set, SEO metadata, and is fully mobile-optimized.

🚀 Tech Stack

Next.js 14 (App Router)

React 18

Framer Motion v11 (smooth fade-up animations)

TailwindCSS

Vercel (hosting + DNS)

Cloudflare (domain & email routing)

🧭 Features
🎨 Modern UI

Gradient background

Animated logo section

Smooth fade-up transitions

Responsive layout

📬 Direct Founder Contact

Visitors can email the founders directly:

mailto:hello@javaailabs.com


No forms. No bots. 100% direct.

🔐 Production-ready Setup

SEO title + meta description

Full favicon pack (PNG, ICO, SVG, manifest, browserconfig)

Clean project structure

Zero server components → fully static

🗂️ Project Structure
javaai-comingsoon/
│
├── app/
│   ├── layout.tsx       # Root layout, metadata, favicon links
│   └── page.tsx         # Main Coming Soon page with animations
│
├── public/
│   ├── logo.png         # Main logo
│   └── favicons/        # All favicon assets
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md

⚡ Local Development

Install dependencies:

npm install


Run locally:

npm run dev


The site will be available at:

http://localhost:3000

🚢 Deployment

This repo is connected to Vercel.
Each push to main automatically triggers a production deployment at:

➡️ https://javaailabs.com

➡️ Backup preview domain: https://javaai-comingsoon.vercel.app

No additional steps needed.

🌐 DNS & Domain Setup

Handled via Cloudflare:

javaailabs.com → Vercel A records

www.javaailabs.com → CNAME to cname.vercel-dns.com

Email routing → javaailabs@gmail.com

Replies send from → hello@javaailabs.com

👤 Author

JavaAI Labs
AI for Enterprise Java & Spring Boot Systems
https://javaailabs.com

📄 License

This codebase is proprietary and owned by JavaAI Labs.
Not open-source. Do not reuse without permission.
