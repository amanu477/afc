import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "am" : "en");
  };

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <img
              src="https://superboostup.com/AdulisFarm/wp-content/uploads/2026/01/logo-removebg-preview.png"
              alt="Adulis Food Complex"
              className="h-16 w-auto"
            />
            <p className="text-background/70 max-w-sm leading-relaxed text-sm">
              {t("footer.tagline")}
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary hover:text-white text-background/60 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm font-medium text-background/50">
              <button
                onClick={toggleLanguage}
                className={`cursor-pointer hover:text-white transition-colors ${i18n.language === "en" ? "text-primary" : "text-background/50"}`}
              >
                English
              </button>
              <span>|</span>
              <button
                onClick={toggleLanguage}
                className={`cursor-pointer hover:text-white transition-colors ${i18n.language === "am" ? "text-primary" : "text-background/50"}`}
              >
                አማርኛ
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-white">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">{t("footer.links.home")}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">{t("footer.links.about")}</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">{t("footer.links.products")}</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">{t("footer.links.contact")}</Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">{t("footer.sitemap")}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-5 text-white">{t("footer.contact")}</h4>
            <ul className="space-y-4 text-background/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span style={{ whiteSpace: "pre-line" }}>{t("footer.location")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:adulis@adulisfoodcomplex.com" className="hover:text-primary transition-colors">
                  adulis@adulisfoodcomplex.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+251911401168 / +251911373333</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">{t("footer.copyright")}</p>
          <div className="flex gap-6 text-background/40 text-sm">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
