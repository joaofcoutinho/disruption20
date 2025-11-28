import HeroSection from "@/hero-section"
import LeadersSection from "@/leaders-section"
import EnvironmentSection from "@/environment-section"
import CommunitySection from "@/community-section"
import FinalCtaSection from "@/pricing-section"

export default function Home() {
  return (
    <main className="bg-dark">
      <HeroSection />
      <LeadersSection />
      <EnvironmentSection />
      <CommunitySection />
      <FinalCtaSection />
    </main>
  )
}
