# Lumina Motion Labs - Multi-Page Web Application

A modern, enterprise-level Next.js web application built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Features

- **Multi-Page Architecture**: Structured Next.js App Router with 15+ pages
- **Enterprise Design**: Professional UI with modern animations and gradients
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Dynamic Content**: Blog with dynamic routes, portfolio, service pages
- **Contact Forms**: Working contact and lead capture forms with API routes
- **SEO Optimized**: Metadata configuration for all pages
- **TypeScript**: Full TypeScript support for type safety
- **Tailwind CSS**: Utility-first CSS framework with custom theme
- **Radix UI**: Accessible component library (pre-installed)

## 📁 Project Structure

```
app/                          # Next.js App Router
├── layout.tsx               # Root layout
├── page.tsx                 # Home page
├── about/                   # About page
├── services/                # Services pages
│   ├── page.tsx            # Services overview
│   ├── logo-design/
│   ├── technical-seo/
│   ├── google-ads/
│   ├── brand-identity/
│   ├── logo-animation/
│   └── website-development/
├── blogs/                   # Blog section
│   ├── page.tsx            # Blog listing
│   └── [slug]/page.tsx      # Dynamic blog post
├── portfolio/              # Portfolio pages
├── contact/                # Contact page
├── privacy/                # Privacy policy
├── terms/                  # Terms & conditions
├── cookie/                 # Cookie policy
└── api/                    # API routes
    ├── contact/            # Contact form API
    └── lead/               # Lead capture API

src/
├── components/
│   ├── navbar.tsx          # Navigation bar
│   ├── footer.tsx          # Footer
│   └── sections/           # Page sections
│       ├── hero-section.tsx
│       ├── services-overview-section.tsx
│       ├── testimonials-section.tsx
│       ├── blog-list-section.tsx
│       ├── portfolio-grid-section.tsx
│       ├── contact-form-section.tsx
│       └── ... (18+ more sections)
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4+
- **UI Components**: Radix UI
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Animation**: Framer Motion (pre-installed)
- **3D Graphics**: Three.js + React Three Fiber (pre-installed)

## 📦 Installation

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Set up Environment Variables

```bash
cp .env.example .env.local
```

## 🚀 Getting Started

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting and Formatting

```bash
npm run lint
npm run format
```

## 📄 Pages Available

### Public Pages

- **Home** (`/`) - Main landing page with all sections
- **About** (`/about`) - Company story and team
- **Services** (`/services`) - Services overview and individual service pages
  - Logo Design (`/services/logo-design`)
  - Technical SEO (`/services/technical-seo`)
  - Google Ads (`/services/google-ads`)
  - Brand Identity (`/services/brand-identity`)
  - Logo Animation (`/services/logo-animation`)
  - Website Development (`/services/website-development`)
- **Blog** (`/blogs`) - Blog listing
- **Blog Post** (`/blogs/[slug]`) - Individual blog posts
- **Portfolio** (`/portfolio`) - Portfolio showcase
- **Contact** (`/contact`) - Contact form
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms & Conditions
- **Cookie** (`/cookie`) - Cookie policy

### API Routes

- `POST /api/contact` - Contact form submission
- `POST /api/lead` - Lead capture form

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/globals.css`:

```css
:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  --electric: 210 100% 50%;
  /* ... more colors */
}
```

### Fonts

Update `tailwind.config.ts` with your preferred fonts.

### Components

All components are located in `src/components/` and can be easily customized.

## 📝 Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function PageName() {
  return (
    <section>
      {/* Your content */}
    </section>
  );
}
```

## 🔗 Adding New Blog Posts

Edit `app/blogs/[slug]/page.tsx` and add your post to the `blogPosts` object:

```tsx
const blogPosts: Record<string, any> = {
  'your-slug': {
    title: 'Your Post Title',
    date: 'Mar 20, 2024',
    author: 'Author Name',
    category: 'Category',
    content: 'Your markdown content...',
    image: 'https://...',
  },
};
```

## 📧 Form Integration

### Contact Form

Update the API endpoint in `src/components/sections/contact-form-section.tsx` to integrate with your email service.

### Lead Capture

Update the API endpoint in `src/components/sections/contact-form-section.tsx` for lead capture.

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

The app is compatible with any Node.js hosting platform (AWS, Heroku, etc.).

## 📦 Build Output

```bash
npm run build
```

Creates `.next` folder with optimized production build.

## 🔒 Environment Variables

Create `.env.local` with necessary variables (see `.env.example`).

## 📱 SEO & Meta Tags

All pages include:
- Meta descriptions
- Open Graph tags
- Twitter cards
- Structured data (ready to implement)

## 🎯 Best Practices

1. **Use Server Components** by default
2. **Lazy load images** with Next.js Image component
3. **Implement caching** strategies
4. **Use dynamic imports** for large components
5. **Monitor Core Web Vitals**

## 📄 License

This project is proprietary.

## 🤝 Support

For support, contact: hello@luminamotionlabs.com

---

**Built with ❤️ using Next.js**
