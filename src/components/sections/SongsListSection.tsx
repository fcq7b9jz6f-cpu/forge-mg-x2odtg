import { motion } from "framer-motion";


export default function SongsListSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 gap-6">
          {songs.map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold text-foreground">{song.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{song.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <span>الملحن: <span className="text-foreground">{song.composer}</span></span>
                    <span>الشاعر: <span className="text-foreground">{song.poet}</span></span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{song.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
