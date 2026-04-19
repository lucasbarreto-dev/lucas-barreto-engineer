import { siteConfig } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  const subject = encodeURIComponent(t("contact.emailSubject"));
  const body = encodeURIComponent(t("contact.emailBody"));
  const mailtoLink = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

  return (
    <section id="contact" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {t("contact.heading")}
        </h2>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {t("contact.subtext")}
        </p>

        <a
          href={mailtoLink}
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-medium hover:opacity-90 transition mb-3"
        >
          <Mail size={18} />
          {t("contact.cta")}
        </a>

        <p className="text-xs text-muted-foreground mb-8">
          {t("contact.replyNote")}
        </p>

        <div className="flex justify-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={mailtoLink}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
