import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-lg"
      >
        <div className="font-display text-8xl md:text-9xl font-bold text-primary/30 mb-4">٤٠٤</div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          الصفحة التي تبحث عنها غير موجودة. ربما أخطأت في كتابة العنوان أو تم نقل الصفحة.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300"
        >
          العودة إلى الرئيسية
        </Link>
      </motion.div>
    </main>
  );
}