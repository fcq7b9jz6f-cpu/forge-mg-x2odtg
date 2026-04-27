import { motion } from "framer-motion";


export default function GalleryGridSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-display text-xl font-bold text-white">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            أهم المحطات في حياتها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">١٩٢٣ — بداية المشوار</h3>
              <p className="text-muted-foreground leading-relaxed">
                انتقلت مع أسرتها إلى القاهرة وبدأت الغناء في المقاهي والحفلات الصغيرة. كان صوتها القوي والمميز يلفت انتباه الجميع.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">١٩٣٤ — التسجيلات الأولى</h3>
              <p className="text-muted-foreground leading-relaxed">
                سجّلت أول أغانيها رسمياً مع شركة أوديون، وسرعان ما انتشر صيتها في مصر وخارجها.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">١٩٤٨ — الحفلات الخميسية</h3>
              <p className="text-muted-foreground leading-relaxed">
                أصبحت حفلاتها الخميسية تقليداً شهرياً يتوقف عنده العالم العربي بأكمله. كانت تُذاع عبر الإذاعة المصرية إلى ملايين المستمعين.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-xl font-bold text-primary mb-3">١٩٦٤ — ذروة المجد</h3>
              <p className="text-muted-foreground leading-relaxed">
                في هذا العام قدمت بعضاً من أعظم أغانيها، بما في ذلك "أنت عمري" التي تعتبر من أهم الأغاني في تاريخ الموسيقى العربية.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
