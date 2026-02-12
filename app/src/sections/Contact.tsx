import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      '.scroll-animate-left, .scroll-animate-right, .scroll-animate, .gold-rule'
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#111827] py-20 lg:py-28"
    >
      <div className="px-6 sm:px-10 lg:px-[6vw]">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-heading font-bold uppercase text-section text-white mb-4 scroll-animate opacity-0">
            CONTACT & CONNECT
          </h2>
          <div className="w-24 h-0.5 bg-gold mb-6 gold-rule" />
          <p className="text-lg text-[#A9B3C2] scroll-animate opacity-0 delay-100">
            Reach us to schedule a consultation. We invite networking, partnerships, 
            and discussions on how tailored legal solutions can power your next venture 
            across Africa and beyond.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="scroll-animate-left opacity-0 delay-200">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Address</h3>
                  <p className="text-[#A9B3C2]">
                    Kalungu Plaza, Level 2 Suite 4 & 5<br />
                    Kampala Road, Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Phone</h3>
                  <p className="text-[#A9B3C2]">
                    <a href="tel:+256778451336" className="hover:text-gold transition-colors">
                      +256 778 451 336
                    </a>
                    <br />
                    <a href="tel:+256788307800" className="hover:text-gold transition-colors">
                      +256 788 307 800
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <a
                    href="mailto:levantarconsults@gmail.com"
                    className="text-[#A9B3C2] hover:text-gold transition-colors"
                  >
                    levantarconsults@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate-right opacity-0 delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[#A9B3C2] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[#A9B3C2] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-[#A9B3C2] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#A9B3C2] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="btn-primary inline-flex items-center gap-3 w-full sm:w-auto justify-center disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>Message sent!</>
                ) : (
                  <>
                    Send message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
