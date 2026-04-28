import { motion } from "framer-motion";


export default function LifeStorySection() {
  return (
      <section className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">حكاية صوت</h2>
            <p className="text-muted-foreground text-lg">من قرية طماي الزهايرة إلى عرش الغناء العربي</p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-4">طفولة في الريف المصري</h3>
              <p className="text-muted-foreground leading-loose text-lg mb-4">
                ولدت فاطمة إبراهيم السيد البلتاجي — التي عُرفت لاحقاً بأم كلثوم — في قرية طماي الزهايرة بمحافظة الدقهلية في ٤ مايو ١٩٠٤. نشأت في أسرة فقيرة، كان والدها الشيخ إبراهيم السيد البلتاجي يعمل خطيباً في المسجد ويغني في المناسبات الدينية.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                منذ طفولتها، أظهرت فاطمة موهبة استثنائية في الغناء. كانت تتعلم القرآن والأناشيد الدينية من والدها، وسرعان ما لفتت انتباه الجميع بصوتها القوي والمميز. في سن الثانية عشرة، بدأت الغناء في حفلات الزفاف والمناسبات الدينية في قريتها والقرى المجاورة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-4">الانتقال إلى القاهرة</h3>
              <p className="text-muted-foreground leading-loose text-lg mb-4">
                في عام ١٩٢٣، انتقلت أم كلثوم مع أسرتها إلى القاهرة بحثاً عن فرص أفضل. كان هذا القرار نقطة تحول حاسمة في حياتها. في القاهرة، التقت بكبار الملحنين والشعراء الذين ساعدوها في صقل موهبتها وتطوير أدائها.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                عملت مع الملحنين زكريا أحمد ومحمد القصبجي ورياض السنباطي، الذين ألفوا لها بعضاً من أعظم أغانيها. كما تعاونت مع كبار الشعراء مثل أحمد شوقي وحافظ إبراهيم وأحمد رامي، الذين كتبوا كلمات أغانيها الخالدة.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-4">عصر الذهب</h3>
              <p className="text-muted-foreground leading-loose text-lg mb-4">
                من منتصف الثلاثينيات وحتى السبعينيات، سيطرت أم كلثوم على عالم الموسيقى العربية. كانت حفلاتها الخميسية من أهم الأحداث الثقافية في الوطن العربي، حيث يتجمع الملايين حول أجهزة الراديو للاستماع إليها.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                تنوعت أغانيها بين الكلاسيكية والحديثة، بين الحب الوطني والحب الإنساني. قدمت أعمالاً خالدة مثل "الأطلال" و"أنت عمري" و"فات الميعاد" و"الأمل"، التي لا تزال تُسمع وتُحب حتى يومنا هذا.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-4">الرحيل والإرث الخالد</h3>
              <p className="text-muted-foreground leading-loose text-lg mb-4">
                في ٣ فبراير ١٩٧٥، رحلت أم كلثوم عن عالمنا بعد صراع مع المرض. كانت جنازتها واحدة من أكبر الجنازات في تاريخ مصر، حيث شارك فيها ملايون المصريين من كل طبقات المجتمع.
              </p>
              <p className="text-muted-foreground leading-loose text-lg">
                رغم مرور عقود على رحيلها، لا تزال أم كلثوم الأكثر استماعاً في العالم العربي. صوتها لا يزال يملأ المقاهي والبيوت والسيارات، وتُحفظ أغانيها في ذاكرة كل عربي. إرثها الفني يتجاوز الموسيقى إلى كونه جزءاً من الهوية العربية الجمعية.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    )

}
