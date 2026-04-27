import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import TimelineSection from "@/components/sections/TimelineSection";
import LifeStorySection from "@/components/sections/LifeStorySection";

export default function Biography() {
  return (
    <>
      <Helmet>
        <title>سيرة أم كلثوم | كوكب الشرق</title>
        <meta name="description" content="قصة حياة كوكب الشرق من الطفولة إلى العالمية — سيرة ذاتية كاملة" />
        <link rel="canonical" href="/biography" />
      </Helmet>
      <main className="min-h-screen">
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
                سيرتها الذاتية
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-display">
                من قرية طماي الزهايرة إلى قمة الفن العربي
              </p>
            </motion.div>
          </div>
        </section>
        <TimelineSection />
        <LifeStorySection />
      </main>
    </>
  );
}
