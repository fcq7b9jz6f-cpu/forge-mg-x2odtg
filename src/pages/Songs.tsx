import { Helmet } from "react-helmet-async";
import SongsHeroSection from "@/components/sections/SongsHeroSection";
import SongsListSection from "@/components/sections/SongsListSection";

export default function Songs() {
  return (
    <>
      <Helmet>
        <title>أشهر أغاني أم كلثوم | كوكب الشرق</title>
        <meta name="description" content="أشهر أغاني كوكب الشرق — الأطلال، أنت عمري، فات الميعاد وغيرها من الروائع الخالدة" />
        <link rel="canonical" href="/songs" />
      </Helmet>
      <main className="min-h-screen">
      <SongsHeroSection />
      <SongsListSection />
      </main>
    </>
  );
}
