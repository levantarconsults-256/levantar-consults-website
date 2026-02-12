import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const partners = [
  {
    name: 'Josephine Nafuna',
    role: 'Corporate & Real Estate',
    image: '/partner_josephine.jpg',
    description: 'Corporate and commercial lawyer specializing in infrastructure, land conveyancing, M&A, and governance.',
  },
  {
    name: 'Barlow Hosea Mutaka',
    role: 'Energy & Finance',
    image: '/partner_hosea.jpg',
    description: 'Advocate of the High Court of Uganda, specializing in energy law, corporate finance, and land transactions.',
  },
  {
    name: 'Nkoyoyo Nasser',
    role: 'Compliance Leadership',
    image: '/partner_nasser.jpg',
    description: 'Lawyer and compliance professional experienced in designing control systems that prevent legal breaches.',
  },
];

export default function Partners() {
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll(
      '.scroll-animate, .gold-rule, .partner-card-wrapper'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/partners_team.jpg"
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0F17]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 sm:px-10 lg:px-[6vw] py-20">
        {/* Headline */}
        <h2 className="font-heading font-bold uppercase text-section text-white mb-4 scroll-animate opacity-0">
          PARTNERS
        </h2>

        {/* Gold Rule */}
        <div className="w-24 h-0.5 bg-gold mb-12 gold-rule" />

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="partner-card-wrapper scroll-animate opacity-0"
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className="partner-card group">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
                <div className="partner-card-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-mono text-gold text-xs tracking-wider mb-2">
                    {partner.role}
                  </p>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-[#A9B3C2] line-clamp-3">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="scroll-animate opacity-0" style={{ transitionDelay: '700ms' }}>
          <a
            href="mailto:levantarconsults@gmail.com?subject=Team Inquiry"
            className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all group"
          >
            View full team
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
