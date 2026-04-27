import { motion } from "framer-motion";


export default function SongsHeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            أشهر أغانيها
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-display">
            ثلاثمائة أغنية خلّدت اسمها في سجلات الفن العربي
          </p>
        </motion.div>
      </div>
    </section>
  );
}
