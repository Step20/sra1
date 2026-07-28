import PageWrapper from '../components/PageWrapper'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import CurriculumSection from '../sections/CurriculumSection'
import NextGenSection from '../sections/NextGenSection'
import FeaturesSection from '../sections/FeaturesSection'
import SupportSection from '../sections/SupportSection'

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <NextGenSection />
      <FeaturesSection />
      <SupportSection />
    </PageWrapper>
  )
}
