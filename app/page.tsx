import Hero from "./components/Hero";
import { ImpactStats } from "./components/impact-stats";
import { Programs } from "./components/programs";
import { DonateCTA } from "./components/Donate-CTA";
import { CommunitySection } from "./components/Community-Section";

export default function HomePage() {
  const programs = [
    { title: "Soccer Camp", img: "/Photos/ProkebsCamp-5.jpg" },
    { title: "Youth Running Club", img: "/Photos/ProkebsCamp-6.jpg" },
    { title: "Basketball Clinic", img: "/Photos/ProkebsCamp-3.jpg" },
    { title: "Community Tournament", img: "/Photos/ProkebsCamp-20.jpg" },
  ];

  return (
    <>
      <Hero />
      <ImpactStats />
      <Programs cards={programs} />
      <CommunitySection/>
      <DonateCTA />
    </>
  );
}
