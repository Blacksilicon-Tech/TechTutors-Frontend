// components/Header.tsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // On mount, measure header height and set it as CSS variable
  useEffect(() => {
    if (headerRef.current) {
      const updateHeight = () => {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current?.offsetHeight}px`
        );
      };
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Who Should Enroll", href: "#who" },
    { name: "Career Outcomes", href: "#outcomes" },
    { name: "Partners", href: "#partners" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="fixed w-full top-0 left-0 z-50 bg-white shadow"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/growtechafrica.png"
            alt="GrowTechAfrica"
            className="h-14 w-auto"
          />
          <span className="font-bold text-xl">GrowTechAfrica</span>
        </Link>

        {/* Desktop Nav (only on xl+) */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-black font-medium transition-colors duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Link
            to="/form"
            className="bg-gradient-to-r from-green-500 to-green-600 text-black font-bold px-5 py-2 rounded-full shadow hover:scale-105 transition"
          >
            Enroll
          </Link>
        </nav>

        {/* Mobile / Tablet Menu Button (sm + md + lg only) */}
        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile / Tablet Nav */}
      {isOpen && (
        <div className="xl:hidden bg-[#0f172a] border-t border-white/10">
          <nav className="flex flex-col items-center py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-white font-medium text-lg transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link
              to="/form"
              className="bg-gradient-to-r from-green-500 to-green-600 text-black font-bold px-6 py-2 rounded-full shadow hover:scale-105 transition"
              onClick={() => setIsOpen(false)}
            >
              Enroll
            </Link>
            
          </nav>
        </div>
      )}
    </header>
  );
}
