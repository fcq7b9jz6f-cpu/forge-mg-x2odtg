import { motion } from "framer-motion";


export default function SongsListSection() {
  const songs = [
    {
      title: "الأطلال",
      composer: "رياض السنباطي",
      poet: "إبراهيم ناجي",
      year: "١٩٦٦",
      description: "من أعظم أغانيها على الإطلاق، تتحدث عن الفراق والحنين إلى الماضي. تعتبر من أطول الأغاني العربية حيث تتجاوز مدتها الساعة.",
    },
    {
      title: "أنت عمري",
      composer: "محمد عبد الوهاب",
      poet: "أحمد شفيق كامل",
      year: "١٩٦٤",
      description: "تعاون فني استثنائي بين كوكب الشرق والملحن العبقري محمد عبد الوهاب. أغنية حب خالدة تجمع بين العمق العاطفي واللحن الرائع.",
    },
    {
      title: "فات الميعاد",
      composer: "محمد عبد الوهاب",
      poet: "مأمون الشناوي",
      year: "١٩٦٧",
      description: "أغنية حزينة عن فوات الأوان والندم. يُعتبر لحنها من أجمل ما ألّف عبد الوهاب، وأداء أم كلثوم فيها يُدرّس في معاهد الموسيقى.",
    },
    {
      title: "الأمل",
      composer: "رياض السنباطي",
      poet: "أحمد رامي",
      year: "١٩٦٢",
      description: "أغنية تبعث الأمل والتفاؤل في النفوس. كانت من أكثر الأغاني التي عبّرت عن طموحات الشعب المصري في فترة الستينيات.",
    },
    {
      title: "أمل حياتي",
      composer: "رياض السنباطي",
      poet: "أحمد رامي",
      year: "١٩٦٥",
      description: "قصيدة غنائية رائعة تجمع بين الحب الإنساني والحب الوطني. يُعتبر أداء أم كلثوم فيها من أبرز إبداعاتها الصوتية.",
    },
    {
      title: "هو صحيح الهوى غلاب",
      composer: "رياض السنباطي",
      poet: "بيرم التونسي",
      year: "١٩٦٠",
      description: "من الأغاني الكلاسيكية التي أبدعت فيها أم كلثوم. تجمع بين اللهجة المصرية العامية واللحن الكلاسيكي بأسلوب فريد.",
    },
    {
      title: "سيرة الحب",
      composer: "رياض السنباطي",
      poet: "أحمد رامي",
      year: "١٩٦٤",
      description: "تسرد الأغنية قصة حب من البداية إلى النهاية، مع تنوع موسيقي يعكس مراحل العلاقة المختلفة.",
    },
    {
      title: "الحب كله",
      composer: "محمد عبد الوهاب",
      poet: "أحمد شفيق كامل",
      year: "١٩٧١",
      description: "من آخر أعمالها مع عبد الوهاب، أغنية تجمع بين العمق العاطفي والتطور الموسيقي الحديث.",
    },
  ]


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
    )

}
