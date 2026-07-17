import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const tours = [
    { label: "Irente Viewpoint & Kisasa", href: "/tours#irente-kisasa" },
    { label: "Magamba Forest & Culture", href: "/tours#magamba-forest" },
    { label: "Skyline & Jiwe la Mungu", href: "/tours#skyline-jiwe" },
    { label: "Mtae Sungwi Waterfalls", href: "/tours#mtae-sungwi" },
    { label: "Mkuzi Waterfall", href: "/tours#mkuzi" },
    { label: "Ndelemai Rainforest", href: "/tours#ndelemai" },
    { label: "Mtae Viewpoint", href: "/tours#mtae-viewpoint" },
    { label: "Bangala River Walk", href: "/tours#bangala" },
    { label: "Mkomazi National Park", href: "/tours#mkomazi" },
  ];

  const activities = [
    { label: "Traditional Dances", href: "/local-activities#dances" },
    { label: "Cooking Classes", href: "/local-activities#cooking" },
    { label: "Storytelling Sessions", href: "/local-activities#storytelling" },
    { label: "Village Experience", href: "/local-activities#village" },
  ];

  const accommodations = [
    { label: "Homestays", href: "/accommodations#homestays" },
    { label: "Campsite", href: "/accommodations#campsite" },
    { label: "Forest Lodges", href: "/accommodations#lodges" },
  ];

  const projects = [
    { label: "Environmental Conservation", href: "/projects#conservation" },
    { label: "Supporting Artists", href: "/projects#artists" },
    { label: "Youth Employment", href: "/projects#youth" },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Tours", href: "/tours", submenu: tours },
    { label: "Local Activities", href: "/local-activities", submenu: activities },
    { label: "Safaris", href: "/safaris" },
    { label: "Accommodations", href: "/accommodations", submenu: accommodations },
    { label: "Projects", href: "/projects", submenu: projects },
    { label: "Gallery", href: "/gallery" },
    { label: "Book / Plan Your Trip", href: "/book-tour" },
  ];

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img
                src="/manus-storage/markup_4408_e690a0b2.png"
                alt="Magamba Eco-cultural Tourism"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link href={item.href}>
                  <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all duration-200 flex items-center gap-1">
                    {item.label}
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    )}
                  </a>
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <a className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200">
                          {subitem.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent/10 rounded-md transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link href={item.href}>
                    <a
                      onClick={() => {
                        if (!item.submenu) setIsOpen(false);
                      }}
                      className="block flex-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => handleDropdownClick(item.label)}
                      className="px-2 py-2 hover:bg-accent/10 rounded-md transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.submenu && openDropdown === item.label && (
                  <div className="pl-4 space-y-1 animate-fade-in-up">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.href} href={subitem.href}>
                        <a
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/10 rounded-md transition-all duration-200"
                        >
                          {subitem.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
