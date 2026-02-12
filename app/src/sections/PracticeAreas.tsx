import { useEffect, useRef } from 'react';
import { ArrowRight, Scale, FileText, ShieldCheck, Building2 } from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Legal Advisory & Strategy',
    description: 'Forward-looking advice on governance, compliance, and contracts',
  },
  {
    icon: FileText,
    title: 'Contract Management',
    description: 'Drafting, review, and negotiation to mitigate risks',
  },
  {
    icon: ShieldCheck,
    title: 'IP Protection & Dispute Resolution',
    description: 'Protecting innovations and resolving conflicts efficiently',
  },
  {
    icon: Building2,
    title: 'M&A and Real Estate',
    description: 'Advising on transactions and property-related legal matters',
  },
];

export default function PracticeAreas() {
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
      '.scroll-animate-left, .scroll-animate-right, .scroll-animate, .gold-rule'
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
      id="practice-areas"
      className="relative w-full min-h-screen bg-[#0B0F17] overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="lg:w-[50vw] flex flex-col justify-center px-6 sm:px-10 lg:px-[6vw] py-16 lg:py-0">
          {/* Section Number */}
          <span className="section-number mb-4 scroll-animate-left opacity-0">02</span>

          {/* Headline */}
          <h2 className="font-heading font-bold uppercase text-section text-white mb-6 scroll-animate-left opacity-0 delay-100">
            PRACTICE AREAS
          </h2>

          {/* Gold Rule */}
          <div className="w-24 h-0.5 bg-gold mb-10 gold-rule" />

          {/* Services List */}
          <div className="space-y-6 mb-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-start gap-4 scroll-animate-left opacity-0"
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="p-3 bg-white/5 rounded-lg">
                  <service.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">{service.title}</h3>
                  <p className="text-sm text-[#A9B3C2]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="scroll-animate-left opacity-0" style={{ transitionDelay: '600ms' }}>
            <button
              onClick={() => scrollToSection('contracts')}
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
            >
              Explore services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[50vw] h-[40vh] lg:h-screen relative scroll-animate-right opacity-0">
          <img
            src="/practice_areas_meeting.jpg"
            alt="Professional meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0F17]/30 lg:block hidden" />
        </div>
      </div>
    </section>
  );
}
