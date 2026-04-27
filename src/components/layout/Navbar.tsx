import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [{ label: "الرئيسية", href: "/" }, { label: "سيرتها", href: "/biography" }, { label: "أشهر أغانيها", href: "/songs" }, { label: "معرض الصور", href: "/gallery" }, { label: "تواصل معنا", href: "/contact" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">أم كلثوم</Link>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (<Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</Link>))}
          <Button asChild size="sm"><Link to="/contact">أرسل رسالة</Link></Button>
        </div>
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            {LINKS.map(l => (<Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-base text-foreground">{l.label}</Link>))}
          </div>
        </div>
      )}
    </header>
  );
}
