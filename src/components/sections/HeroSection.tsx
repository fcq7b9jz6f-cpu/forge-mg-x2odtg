import { motion } from "framer-motion";


export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  }


  return (
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
            <motion.p variants={item} className="text-primary font-display text-lg md:text-xl mb-4 tracking-wider">
              ٤ مايو ١٩٠٤ — ٣ فبراير ١٩٧٥
            </motion.p>
            <motion.h1 variants={item} className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] mb-6 text-foreground">
              أم كلثوم
            </motion.h1>
            <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground font-display mb-8 max-w-2xl mx-auto">
              كوكب الشرق — صوت يتجاوز الزمن، وروح تسكن قلوب الملايين
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/biography"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
              >
                اكتشف سيرتها
              </a>
              <a
                href="/songs"
                className="inline-flex items-center justify-center h-12 px-8 rounded-xl border border-border bg-transparent text-foreground font-medium hover:bg-secondary transition-all duration-300"
              >
                استمع لأغانيها
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-display">اكتشف المزيد</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>
    )

}
