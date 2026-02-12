import { useEffect, useRef } from 'react';
import { ArrowRight, FileCheck, Lock, TrendingUp } from 'lucide-react';

const chips = [
  { icon: FileCheck, label: 'Licensing & compliance' },
  { icon: Lock, label: 'Data protection' },
  { icon: TrendingUp, label: 'Investment structuring' },
];

export default function TechFinance() {
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

  return (
    <section
      ref={sectionRef}
      id="tech-finance"
      className="relative w-full min-h-screen bg-[#0B0F17] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Image */}
        <div className="lg:w-[44vw] h-[40vh] lg:h-screen relative scroll-animate-left opacity-0">
          <img
            src="/tech_finance_data.jpg"
            alt="Fintech data analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0F17]/50 lg:block hidden" />
        </div>

        {/* Right Content */}
        <div className="lg:w-[56vw] flex flex-col justify-center px-6 sm:px-10 lg:px-[6vw] py-16 lg:py-0">
          {/* Headline */}
          <h2 className="font-heading font-bold uppercase text-section text-white mb-6 scroll-animate opacity-0 delay-100">
            TECHNOLOGY &<br />FINANCIAL SERVICES
          </h2>

          {/* Gold Rule */}
          <div className="w-24 h-0.5 bg-gold mb-8 gold-rule" />

          {/* Body */}
          <p className="text-lg text-[#A9B3C2] max-w-xl mb-10 scroll-animate opacity-0 delay-200">
            We support fintech, IT, and digital platforms on licensing, data protection, 
            and investment structures—enabling rapid innovation while meeting evolving 
            regulatory demands.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {chips.map((chip, index) => (
              <div
                key={chip.label}
                className="chip scroll-animate opacity-0"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <chip.icon className="w-4 h-4 text-gold" />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="scroll-animate opacity-0" style={{ transitionDelay: '600ms' }}>
            <a
              href="mailto:levantarconsults@gmail.com?subject=Fintech Advisory Request"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
            >
              Talk to a fintech advisor
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
