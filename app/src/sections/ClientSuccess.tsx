import { useEffect, useRef } from 'react';
import { Home, ShieldCheck, GitMerge } from 'lucide-react';

const clients = [
  'Clazomenae Eng.',
  'Pan Dental',
  'ARPE Ltd.',
  'Senok Uganda',
  'HMH Rainbow',
  'SafeBoda',
  'Fram Pharma',
  'Spectus Co.',
];

const values = [
  {
    icon: Home,
    title: 'Smooth Property Transfers',
    description: 'Ensuring seamless conveyancing and title security.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure IP Portfolios',
    description: 'Protecting innovations and brand assets comprehensively.',
  },
  {
    icon: GitMerge,
    title: 'Complex M&A Deals',
    description: 'Closing transactions with thorough due diligence and strategic structuring.',
  },
];

export default function ClientSuccess() {
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
      '.scroll-animate-left, .scroll-animate, .gold-rule, .value-card'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="client-success"
      className="relative w-full bg-[#0B0F17] py-20 lg:py-28"
    >
      <div className="px-6 sm:px-10 lg:px-[6vw]">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-heading font-bold uppercase text-section text-white mb-4 scroll-animate-left opacity-0">
            CLIENT SUCCESS
          </h2>
          <div className="w-24 h-0.5 bg-gold mb-6 gold-rule" />
          <p className="text-lg text-[#A9B3C2] scroll-animate-left opacity-0 delay-100">
            We translate legal insight into measurable business advantage and stakeholder confidence.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <p className="font-mono text-gold text-xs tracking-wider mb-6 scroll-animate opacity-0">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap gap-3">
            {clients.map((client, index) => (
              <div
                key={client}
                className="client-logo scroll-animate opacity-0"
                style={{ transitionDelay: `${(index + 2) * 50}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card scroll-animate opacity-0"
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="p-3 bg-gold/10 rounded-lg w-fit mb-4">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-[#A9B3C2]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
