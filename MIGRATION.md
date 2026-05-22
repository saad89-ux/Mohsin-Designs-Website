# Migration Guide: Single-Page to Multi-Page Application

## What Changed

Your application has been transformed from a single-page TanStack Router application to a modern Next.js multi-page application.

### Before (TanStack Start)
- Single page with route fragments (#services, #process, etc.)
- TanStack Router for client-side routing
- Vite as build tool
- Limited SEO capabilities

### After (Next.js App Router)
- True multi-page application
- Next.js App Router for server-side routing
- Next.js as build tool and framework
- Enhanced SEO with metadata optimization
- Better performance with server-side rendering
- API routes for backend functionality

## Key Differences

| Feature | Before | After |
|---------|--------|-------|
| Build Tool | Vite | Next.js |
| Routing | Client-side (TanStack Router) | Server-side (Next.js App Router) |
| Pages | Single page with fragments | Multiple pages |
| SEO | Limited | Full support |
| API Routes | External backend needed | Built-in `/api` routes |
| Server Components | Not supported | Default |
| Static Generation | Limited | Full support (ISR) |
| Image Optimization | Manual | Automatic with next/image |

## File Structure Changes

### Old Structure (Vite/TanStack)
```
src/
  router.tsx
  routeTree.gen.ts
  components/
    sections/
  hooks/
```

### New Structure (Next.js)
```
app/                    # All pages go here
  layout.tsx           # Root layout
  page.tsx             # Home page
  about/
  services/
  blogs/
  ...

src/
  components/          # Reusable components
  styles/
  lib/
```

## Configuration Files

### New Files Added
- `next.config.js` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration for Next.js
- `tsconfig.json` - Updated for Next.js

### Old Files (Can be removed)
- `vite.config.ts`
- `bunfig.toml`
- `wrangler.jsonc` (if not using Cloudflare Workers)
- `eslint.config.js`

## Scripts Changes

### Old Scripts (npm run dev)
```json
"dev": "vite dev"
"build": "vite build"
"preview": "vite preview"
```

### New Scripts
```json
"dev": "next dev"
"build": "next build"
"start": "next start"
"lint": "eslint . --fix"
```

## Component Migration

### Router Links

**Before:**
```tsx
<Link to="/services">Services</Link>
```

**After:**
```tsx
import Link from 'next/link';

<Link href="/services">Services</Link>
```

### Navigation

**Before:**
```tsx
const navigate = useRouter();
navigate({ to: '/about' });
```

**After:**
```tsx
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/about');
```

### Data Fetching

**Before:**
```tsx
const { data } = useQuery({ /* ... */ });
```

**After (Server Components):**
```tsx
async function Page() {
  const data = await fetch('...');
  return <div>{/* data */}</div>;
}
```

**After (Client Components):**
```tsx
'use client';
import { useEffect, useState } from 'react';

export function Component() {
  const [data, setData] = useState(null);
  useEffect(() => { /* fetch */ }, []);
}
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm start
```

## Breaking Changes

### URL Structure
- Fragment routes (#services) → Full pages (/services)
- Navigation must use `next/link` or `next/navigation`
- Dynamic routes use [bracket] notation

### API Routes
- Now use Next.js API Routes (`/api/contact`)
- Request/Response handling via Next.js handlers

### Environment Variables
- Must be prefixed with `NEXT_PUBLIC_` to be accessible in browser
- Update `.env.local` instead of `.env`

## Existing Components

### Reusable Components (Kept)
- `@/components/motion/*` - Animation components
- `@/components/three/*` - 3D components
- `@/components/ui/*` - UI components (Radix UI)

### New Components (Created)
- Navigation and Footer components
- Page section components
- Layout components

## Performance Improvements

1. **Automatic Code Splitting** - Each page loads only necessary code
2. **Image Optimization** - Use `next/image` for automatic optimization
3. **Font Optimization** - Built-in font optimization
4. **CSS Optimization** - Tailwind CSS purging
5. **Caching** - ISR and revalidation strategies

## SEO Improvements

1. **Metadata API** - Type-safe metadata definition
2. **Dynamic Meta Tags** - Per-page configuration
3. **Structured Data** - Ready for schema markup
4. **XML Sitemaps** - Can be auto-generated
5. **Robot.txt** - Configurable

## Database Integration (If Needed)

For future database integration:

```tsx
// Server Component
async function Component() {
  const data = await db.query('...');
  return <div>{/* render data */}</div>;
}
```

## Authentication (If Needed)

Consider using:
- NextAuth.js
- Supabase
- Firebase
- Clerk

## Troubleshooting

### Common Issues

1. **"Cannot use client hook in server component"**
   - Add `'use client'` at top of component

2. **"Image must be wrapped in next/image"**
   - Use `import Image from 'next/image'`

3. **Navigation not working**
   - Use `next/link` for client-side navigation
   - Use `next/navigation` for imperative navigation

4. **Styles not loading**
   - Ensure Tailwind CSS is properly configured
   - Check `globals.css` import in layout

## Next Steps

1. ✅ Complete migration
2. ⏳ Test all pages and links
3. ⏳ Update API endpoints
4. ⏳ Add email service for contact forms
5. ⏳ Deploy to production
6. ⏳ Set up analytics and monitoring

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)

---

Your application is now ready for multi-page routing! 🚀
