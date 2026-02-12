import { useEffect, useRef } from 'react';
import { ArrowRight, Copyright, Scale } from 'lucide-react';

const chips = [
  { icon: Copyright, label: 'Trademarks & patents' },
  { icon: Scale, label: 'Mediation & arbitration' },
];

export default function IPDispute() {
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

  return (
    <section
      ref={sectionRef}
      id="ip-dispute"
      className="relative w-full min-h-screen bg-[#0B0F17] overflow-hidden"
    >
      <div className="flex flex-col-reverse lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="lg:w-[50vw] flex flex-col justify-center px-6 sm:px-10 lg:px-[6vw] py-16 lg:py-0">
          {/* Headline */}
          <h2 className="font-heading font-bold uppercase text-section text-white mb-6 scroll-animate-left opacity-0 delay-100">
            IP PROTECTION &<br />DISPUTE RESOLUTION
          </h2>

          {/* Gold Rule */}
          <div className="w-24 h-0.5 bg-gold mb-8 gold-rule" />

          {/* Body */}
          <p className="text-lg text-[#A9B3C2] max-w-xl mb-10 scroll-animate-left opacity-0 delay-200">
            From registration to enforcement, we safeguard what makes your business 
            unique—then resolve conflicts with speed and discretion.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {chips.map((chip, index) => (
              <div
                key={chip.label}
                className="chip scroll-animate-left opacity-0"
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <chip.icon className="w-4 h-4 text-gold" />
                <span>{chip.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="scroll-animate-left opacity-0" style={{ transitionDelay: '500ms' }}>
            <a
              href="mailto:levantarconsults@gmail.com?subject=IP Protection Inquiry"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
            >
              Protect your IP
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-[50vw] h-[40vh] lg:h-screen relative scroll-animate-right opacity-0">
          <img
            src="/ip_courthouse.jpg"
            alt="Courthouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0F17]/30 lg:block hidden" />
        </div>
      </div>
    </section>
  );
}
