# 🚀 Quick Start Guide

## 1️⃣ Installation (30 seconds)

```bash
cd c:\Users\Dell\Documents\Demo\lumina-motion-labs
npm install
```

## 2️⃣ Run Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

## 3️⃣ Explore Your Application

Your multi-page website is now live! Visit these pages:

- **Home** - http://localhost:3000
- **About** - http://localhost:3000/about
- **Services** - http://localhost:3000/services
- **Contact** - http://localhost:3000/contact
- **Blog** - http://localhost:3000/blogs
- **Portfolio** - http://localhost:3000/portfolio
- **Legal** - http://localhost:3000/privacy

## 📁 File Structure Overview

```
app/                 ← All pages go here
src/components/      ← All components
src/styles/          ← Global CSS
tailwind.config.ts   ← Color customization
```

## ✏️ Quick Customization

### Change Company Name

Edit `src/components/navbar.tsx`:
```tsx
<span className="hidden font-bold tracking-tight sm:inline">
  Your Company Name  // ← Change here
</span>
```

### Change Brand Colors

Edit `src/styles/globals.css`:
```css
:root {
  --electric: 210 100% 50%;  // ← Change this color
}
```

### Update Contact Info

Edit `src/components/footer.tsx`:
```tsx
<span className="text-muted-foreground">
  your-email@company.com  // ← Update
</span>
```

### Add New Page

1. Create folder: `app/your-page-name/`
2. Create file: `app/your-page-name/page.tsx`
3. Add content:

```tsx
export default function YourPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold">Your Page Title</h1>
      </div>
    </section>
  );
}
```

## 🎨 Tailwind CSS Classes Cheatsheet

```tsx
// Spacing
<div className="p-6">                    // Padding
<div className="m-4">                    // Margin
<div className="py-20">                  // Padding Y-axis

// Text
<h1 className="text-4xl font-bold">     // Large bold text
<p className="text-muted-foreground">   // Muted text

// Colors
<button className="bg-electric">        // Electric blue
<div className="text-foreground">       // Main text color

// Layout
<div className="grid grid-cols-3">      // 3-column grid
<div className="flex gap-4">            // Flexbox with gap

// Responsive
<div className="md:grid-cols-2">        // 2 cols on medium+ screens
<div className="lg:text-5xl">           // Larger text on large+ screens

// Hover effects
<button className="hover:bg-white/[0.05]">
```

## 🔑 Environment Setup

1. Copy `.env.example` to `.env.local`
2. Add your configuration variables

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📊 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
npm run format   # Format with Prettier
```

## 🆘 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use different port
```

### Issue: Styles not loading
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Issue: Import errors
```bash
# Check that paths are correct:
# @/components → src/components
# Files must exist
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/docs)

## 🎯 What You Have

✅ **15+ Pages** ready to customize  
✅ **Enterprise Design** with professional styling  
✅ **Contact Forms** with API endpoints  
✅ **Responsive Layout** for all devices  
✅ **SEO Optimized** for search engines  
✅ **Dummy Content** included  
✅ **Dark Theme** pre-configured  

## 🚀 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ⏭️ Customize company info
5. ⏭️ Add your content
6. ⏭️ Integrate email service
7. ⏭️ Deploy to production

---

**You're all set! Start building something amazing!** 🎉

For detailed guides, see:
- `README.md` - Full documentation
- `MIGRATION.md` - Migration details
- `DEPLOYMENT.md` - Deployment guide
