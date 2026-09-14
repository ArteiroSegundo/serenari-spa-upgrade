import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Experience from "@/components/home/Experience";
import FeaturedTherapies from "@/components/home/FeaturedTherapies";
import FindYourTherapy from "@/components/home/FindYourTherapy";
import SocialProof from "@/components/home/SocialProof";
import Space from "@/components/home/Space";
import Philosophy from "@/components/home/Philosophy";
import Location from "@/components/home/Location";
import Faq from "@/components/home/Faq";
import Finale from "@/components/home/Finale";
import { faqSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Experience />
      <FeaturedTherapies />
      <FindYourTherapy />
      <SocialProof />
      <Space />
      <Philosophy />
      <Location />
      <Faq />
      <Finale />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
    </>
  );
}
