import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/magambaecotourism", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/magambaecotourism", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/magambaecotourism", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/magambaecotourism", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/manus-storage/markup_4408_e690a0b2.png"
              alt="Magamba Eco-cultural Tourism"
              className="h-16 w-auto"
            />
            <p className="text-sm text-background/80">
              Eco-cultural tourism connecting locals with international and national tourists.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-background/80 hover:text-background transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/tours">
                  <a className="text-background/80 hover:text-background transition-colors">
                    Tours
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/accommodations">
                  <a className="text-background/80 hover:text-background transition-colors">
                    Accommodations
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/book-tour">
                  <a className="text-background/80 hover:text-background transition-colors">
                    Book Now
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:magambaculturaltourism@gmail.com"
                  className="text-background/80 hover:text-background transition-colors break-all"
                >
                  magambaculturaltourism@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+255783688844"
                    className="text-background/80 hover:text-background transition-colors block"
                  >
                    +255 783 688 844
                  </a>
                  <a
                    href="tel:+255621019025"
                    className="text-background/80 hover:text-background transition-colors block"
                  >
                    +255 621 019 025
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Magamba Village, Lushoto, Tanga, Tanzania
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors hover:scale-110 duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/80">
            © {currentYear} Magamba Eco-cultural Tourism. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
