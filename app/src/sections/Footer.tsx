import { Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0F17] border-t border-white/5">
      <div className="px-6 sm:px-10 lg:px-[6vw] py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-heading font-bold text-white tracking-wider">
              LEVANTAR
            </span>
            <span className="text-sm text-[#A9B3C2]">
              © {currentYear} Levantar Consults. All rights reserved.
            </span>
          </div>

          {/* Links & Social */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#A9B3C2] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="#"
                className="p-2 text-[#A9B3C2] hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-[#A9B3C2] hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
