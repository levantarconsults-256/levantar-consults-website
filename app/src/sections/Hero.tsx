import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = contentRef.current?.querySelectorAll('.scroll-animate, .gold-rule');
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
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero_city_aerial.jpg"
          alt="City skyline"
          className="w-full h-full object-cover scale-105 animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/95 via-[#0B0F17]/70 to-[#0B0F17]/40" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-10 lg:px-[6vw] py-20"
      >
        {/* Micro Label */}
        <p className="font-mono text-gold text-xs tracking-[0.2em] mb-6 scroll-animate opacity-0">
          GLOBAL LEGAL COUNSEL
        </p>

        {/* Headline */}
        <h1 className="font-heading font-bold uppercase text-hero text-white max-w-4xl mb-8">
          <span className="block scroll-animate opacity-0 delay-100">
            STRATEGIC ADVISORY
          </span>
          <span className="block scroll-animate opacity-0 delay-200">
            FOR COMPLEX MARKETS
          </span>
        </h1>

        {/* Gold Rule */}
        <div className="w-32 sm:w-48 h-0.5 bg-gold mb-10 gold-rule" />

        {/* Body */}
        <p className="text-lg sm:text-xl text-[#A9B3C2] max-w-xl mb-12 scroll-animate opacity-0 delay-300">
          We help leaders navigate regulation, transactions, and risk—across industries and borders.
        </p>

        {/* CTA */}
        <div className="scroll-animate opacity-0 delay-400">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary inline-flex items-center gap-3 group"
          >
            Book a consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 right-6 sm:right-10 lg:right-[5vw]">
          <span className="font-mono text-xs text-[#A9B3C2]/60 tracking-wider">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
