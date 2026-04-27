import { motion } from "framer-motion";


export default function TimelineSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">خط زمني لحياتها</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">من قاع قرية نائية إلى قمة الفن العربي</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute right-6 md:right-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className="hidden md:block md:flex-1" />
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-display text-lg">
                {m.year}
              </div>
              <div className="flex-1">
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
