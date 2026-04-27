export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2"><div className="text-lg font-semibold text-foreground">أم كلثوم</div><p className="mt-2 text-sm text-muted-foreground max-w-xs">كوكب الشرق — صوت يتجاوز الزمن</p></div>
        <div><h4 className="text-sm font-semibold text-foreground mb-3">الصفحات</h4><ul className="space-y-2"><li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">الرئيسية</a></li><li><a href="/biography" className="text-sm text-muted-foreground hover:text-foreground">سيرتها</a></li><li><a href="/songs" className="text-sm text-muted-foreground hover:text-foreground">أشهر أغانيها</a></li><li><a href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">معرض الصور</a></li></ul></div><div><h4 className="text-sm font-semibold text-foreground mb-3">المزيد</h4><ul className="space-y-2"><li><a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">تواصل معنا</a></li></ul></div>
      </div>
      <div className="container mx-auto px-4 py-6 border-t border-border text-xs text-muted-foreground flex justify-between"><span>© 2026 أم كلثوم</span><span>Built with Megsy AI</span></div>
    </footer>
  );
}
