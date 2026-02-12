import { useEffect, useRef } from 'react';
import { ArrowRight, Cpu, Heart, Landmark, Factory, Zap, Plane, Building, Film, Wheat } from 'lucide-react';

const industries = [
  { icon: Cpu, name: 'Technology' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Landmark, name: 'Financial Services' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Zap, name: 'Energy' },
  { icon: Plane, name: 'Tourism' },
  { icon: Building, name: 'Real Estate' },
  { icon: Film, name: 'Media' },
  { icon: Wheat, name: 'Agriculture' },
];

export default function IndustryFocus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.scroll-animate, .gold-rule'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="industry-focus"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/industry_coast.jpg"
          alt="Aerial coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0F17]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 lg:px-[6vw] py-20">
        {/* Headline */}
        <h2 className="font-heading font-bold uppercase text-section text-white text-center mb-4 scroll-animate opacity-0">
          INDUSTRY FOCUS
        </h2>

        {/* Gold Rule */}
        <div className="w-24 h-0.5 bg-gold mb-12 gold-rule" />

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full mb-12">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="industry-item scroll-animate opacity-0"
              style={{ transitionDelay: `${(index + 2) * 50}ms` }}
            >
              <industry.icon className="w-8 h-8 text-gold mb-2" />
              <span className="text-white text-sm font-medium text-center">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-animate opacity-0" style={{ transitionDelay: '700ms' }}>
          <button
            onClick={() => scrollToSection('tech-finance')}
            className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
          >
            View sector capabilities
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
