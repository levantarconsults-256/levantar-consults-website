import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Globe, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity-first counsel',
    description: 'Honest, transparent advice you can trust',
  },
  {
    icon: Globe,
    title: 'Cross-border execution',
    description: 'Seamless legal support across jurisdictions',
  },
  {
    icon: TrendingUp,
    title: 'Outcome-based pricing',
    description: 'Aligned with your business success',
  },
];

export default function WhoWeAre() {
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
      '.scroll-animate-left, .scroll-animate, .gold-rule'
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
      id="who-we-are"
      className="relative w-full min-h-screen bg-[#0B0F17] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image */}
        <div className="lg:w-[44vw] h-[40vh] lg:h-screen relative scroll-animate-left opacity-0">
          <img
            src="/who_we_are_office.jpg"
            alt="Modern law office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0F17]/50 lg:block hidden" />
        </div>

        {/* Right Content */}
        <div className="lg:w-[56vw] flex flex-col justify-center px-6 sm:px-10 lg:px-[6vw] py-16 lg:py-0">
          {/* Section Number */}
          <span className="section-number mb-4 scroll-animate opacity-0">01</span>

          {/* Headline */}
          <h2 className="font-heading font-bold uppercase text-section text-white mb-6 scroll-animate opacity-0 delay-100">
            WHO WE ARE
          </h2>

          {/* Gold Rule */}
          <div className="w-24 h-0.5 bg-gold mb-8 gold-rule" />

          {/* Body */}
          <p className="text-lg text-[#A9B3C2] max-w-xl mb-12 scroll-animate opacity-0 delay-200">
            A modern legal practice built for operators, founders, and boards. We combine 
            deep sector knowledge with commercial judgment—so advice is always actionable.
          </p>

          {/* Values */}
          <div className="space-y-6 mb-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`flex items-start gap-4 scroll-animate opacity-0 delay-${(index + 3) * 100}`}
              >
                <div className="p-3 bg-gold/10 rounded-lg">
                  <value.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">{value.title}</h3>
                  <p className="text-sm text-[#A9B3C2]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="scroll-animate opacity-0 delay-600">
            <button
              onClick={() => scrollToSection('partners')}
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
            >
              Meet the team
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
