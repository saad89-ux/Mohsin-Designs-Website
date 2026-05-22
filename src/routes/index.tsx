import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Agency — SEO, Brand & Web for category-defining teams" },
      { name: "description", content: "A senior digital studio engineering SEO, brand systems and high-performance websites for ambitious companies." },
      { property: "og:title", content: "Nova Agency — SEO, Brand & Web" },
      { property: "og:description", content: "Award-winning digital growth studio. SEO, brand, web and paid media engineered to compound." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
