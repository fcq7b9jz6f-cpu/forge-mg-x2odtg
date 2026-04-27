import { Helmet } from "react-helmet-async";
import GalleryHeroSection from "@/components/sections/GalleryHeroSection";
import GalleryGridSection from "@/components/sections/GalleryGridSection";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>معرض الصور | أم كلثوم</title>
        <meta name="description" content="معرض صور تذكاري لحياة كوكب الشرق أم كلثوم — لحظات من تاريخ الفن العربي" />
        <link rel="canonical" href="/gallery" />
      </Helmet>
      <main className="min-h-screen">
      <GalleryHeroSection />
      <GalleryGridSection />
      </main>
    </>
  );
}
