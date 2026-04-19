import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import { testimonialsMeta } from "@/constants/content";
import type { TestimonialText } from "@/i18n/translations";
import { Linkedin } from "lucide-react";

const Testimonials = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const list = t<TestimonialText[]>("testimonials.list");

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {t("testimonials.heading")}
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          {t("testimonials.subtitle")}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialsMeta.map((meta) => {
            const tItem = list.find((x) => x.id === meta.id);
            if (!tItem) return null;
            return (
              <div
                key={meta.id}
                className="border border-border rounded-xl p-6 flex flex-col justify-between"
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{tItem.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-foreground font-medium text-sm">{tItem.name}</p>
                    <p className="text-muted-foreground text-xs">{tItem.role}</p>
                  </div>
                  {meta.linkedinUrl && (
                    <a
                      href={meta.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
