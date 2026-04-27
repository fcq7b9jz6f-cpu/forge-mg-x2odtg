import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import OverviewSection from "@/components/sections/OverviewSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>أم كلثوم | كوكب الشرق</title>
        <meta name="description" content="موقع تذكاري يحكي قصة حياة كوكب الشرق أم كلثوم، أعظم مطربة في تاريخ الموسيقى العربية" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="min-h-screen">
      <HeroSection />
      <QuoteSection />
      <OverviewSection />
      </main>
    </>
  );
}
