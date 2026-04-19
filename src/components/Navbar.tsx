import { useState, useEffect } from "react";
import { siteConfig, navItems } from "@/constants/content";
import { useTranslation } from "@/i18n/I18nProvider";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight">
          {siteConfig.name}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <LanguageSwitcher className="ml-2" />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 pt-2">
          <div className="flex justify-end py-2">
            <LanguageSwitcher />
          </div>
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
