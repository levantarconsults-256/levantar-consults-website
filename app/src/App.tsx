import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import PracticeAreas from './sections/PracticeAreas';
import Contracts from './sections/Contracts';
import IPDispute from './sections/IPDispute';
import IndustryFocus from './sections/IndustryFocus';
import TechFinance from './sections/TechFinance';
import Healthcare from './sections/Healthcare';
import Partners from './sections/Partners';
import ClientSuccess from './sections/ClientSuccess';
import Collaborate from './sections/Collaborate';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17]">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <WhoWeAre />
        <PracticeAreas />
        <Contracts />
        <IPDispute />
        <IndustryFocus />
        <TechFinance />
        <Healthcare />
        <Partners />
        <ClientSuccess />
        <Collaborate />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
