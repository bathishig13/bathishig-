import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { WorksSection } from './components/WorksSection';
import { FavoritesSection } from './components/FavoritesSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white/20 selection:text-white">
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
        <Navbar onNavigate={handleNavigate} />
      </header>

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero with Vanilla JS video crossfade */}
        <HeroSection onExploreWorks={handleScrollToWorks} />

        {/* Section 2: About Section with framer-motion */}
        <AboutSection />

        {/* Section 3: Featured Video Section */}
        <FeaturedVideoSection onExploreWorks={handleScrollToWorks} />

        {/* Section 4: Philosophy / Hobbies & Interests Section */}
        <PhilosophySection />

        {/* Section 5: Works / My Creations Section */}
        <WorksSection />

        {/* Section 6: Favorites Section */}
        <FavoritesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
