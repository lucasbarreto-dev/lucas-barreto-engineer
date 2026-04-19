import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";

const About = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const paragraphs = t<string[]>("about.paragraphs");

  return (
    <section id="about" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {t("about.heading")}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
