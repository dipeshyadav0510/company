<div align="center">

# 🏢 Company Website

A modern, professional company website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success)

[Live Demo](https://maajalapa.vercel.app) · [Report Bug](https://github.com/dipeshyadav0510/company/issues) · [Request Feature](https://github.com/dipeshyadav0510/company/issues)

</div>

---

## ✨ Overview

This is a **modern company website** designed to showcase services, projects, and company information with a professional UI and responsive design across all devices. Built with TypeScript for type safety and better developer experience.

**Purpose:** This repository serves as a learning resource and template for building professional company websites.

---

## 🛠 Tech Stack

- **Framework:** ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
- **Language:** ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
- **Library:** ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
- **Styling:** ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
- **Tooling:** ![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white), ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
- **Deployment:** ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
- **Icons & Assets:** ![SVG](https://img.shields.io/badge/SVG_Graphics-FFB13B)

---

## 📂 Project Structure

```text
company/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── .vscode/                # VS Code workspace settings
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects page
│   │   ├── services/       # Services page
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── AnimatedBackground.tsx
│   │   ├── DynamicComponents.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Footer.tsx
│   │   ├── ImageLoader.tsx
│   │   ├── Navbar.tsx
│   │   ├── TypeWriter.tsx
│   │   └── WhatsAppButton.tsx
│   └── config/             # Configuration files
│       ├── metadata.ts     # SEO metadata
│       └── social-links.ts # Social media links
├── .gitignore
├── eslint.config.mjs       # ESLint configuration
├── LICENSE                 # MIT License
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── package-lock.json       # Dependency lock file
├── postcss.config.js       # PostCSS configuration
├── postcss.config.mjs      # PostCSS module configuration
├── README.md               # This file
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or later recommended)
- **npm** or **yarn**

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dipeshyadav0510/company.git
cd company
npm install
```

### ▶️ Run Locally

Start the development server:

```bash
npm run dev
```

Then open your browser and visit:

```
http://localhost:3000
```

### 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

### 🧪 Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🎨 Customization Guide

**⚠️ IMPORTANT:** You MUST replace all company-specific content before using this code.

### 1. **Update Company Information**
   - Edit `src/config/metadata.ts` for SEO and meta information
   - Edit `src/config/social-links.ts` for social media links
   - Update company name, description, and contact details throughout

### 2. **Replace All Content**
   - Rewrite all text in page components (`src/app/*/page.tsx`)
   - Replace service descriptions in the services page
   - Update project information in the projects page
   - Modify about section with your company's story

### 3. **Change Branding & Assets**
   - Replace all SVG files in `public/` with your own
   - Update favicon (`src/app/favicon.ico`)
   - Change color scheme in `tailwind.config.ts`
   - Modify logo and brand colors

### 4. **Update Components**
   - Customize navbar links in `src/components/Navbar.tsx`
   - Update footer content in `src/components/Footer.tsx`
   - Modify WhatsApp button number in `src/components/WhatsAppButton.tsx`

### 5. **Configure SEO**
   - Update all metadata in page files
   - Modify `robots.txt` and `sitemap.xml` (if present)
   - Change Open Graph images and descriptions

---

## 📜 License

### Source Code
The **source code** in this repository is licensed under the [MIT License](LICENSE).

### Content & Assets
- **Company branding, logos, trademarks**: © [2025] [Maa Jalapa Construction Supplier And Builders Pvt. Ltd.]. All rights reserved.
- **Written content, images, and media**: © [2025] [Maa Jalapa Construction Supplier And Builders Pvt. Ltd.]. All rights reserved.
- **Business information**: Proprietary and confidential.

**You MAY:** Use, modify, and distribute the code structure.

**You MAY NOT:** Use the company name, branding, content, or assets without explicit written permission.

See the [LICENSE](LICENSE) file for code license details.

---

## 🔐 Security & Privacy

- No API keys or sensitive credentials are committed to this repository
- All environment variables are handled via `.env.local` (not included)
- User data and business information are protected
- Follow security best practices when deploying

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
NEXT_PUBLIC_COMPANY_NAME=Your Company Name
NEXT_PUBLIC_CONTACT_EMAIL=contact@yourcompany.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

---

## 🤝 Contributing

Contributions to improve the code structure and functionality are welcome!

**However, please note:**
- Do NOT submit PRs with company-specific content or branding
- Focus on technical improvements, bug fixes, and features
- Ensure all content is generic and reusable

To contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Dipesh Yadav** (Repository Maintainer)

- GitHub: [@dipeshyadav0510](https://github.com/dipeshyadav0510)
- Email: dipeshyadav0510@gmail.com
- Instagram: [dipeshy923](https://instagram.com/dipeshy923)

**For business inquiries related to the original company, please visit their official website.**

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) - For deployment and hosting
- [React](https://react.dev/)
- Open source community for inspiration and resources

---

## ⚖️ Terms of Use

By using this code, you agree to:

1. Not use any company-specific branding, content, or intellectual property
2. Replace all proprietary content with your own original content
3. Not misrepresent your affiliation with the original company
4. Comply with all applicable laws and regulations
5. Assume all responsibility for your use of this code

**Violation of these terms may result in legal action.**

---

<div align="center">

**⚠️ This code is provided "as-is" without warranties. Use at your own risk.**

---

Made with 💼 by [Dipesh Yadav](https://github.com/dipeshyadav0510)

⭐ Star this repo if you found it helpful!

</div>
