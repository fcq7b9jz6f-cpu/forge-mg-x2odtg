import { Helmet } from "react-helmet-async";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>تواصل معنا | أم كلثوم</title>
        <meta name="description" content="شاركنا ذكرياتك ورسالتك لكوكب الشرق أم كلثوم — تواصل معنا" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main className="min-h-screen">
      <ContactHeroSection />
      <ContactFormSection />
      </main>
    </>
  );
}
