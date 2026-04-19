import { skillGroupsMeta } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import type { SkillGroupText } from "@/i18n/translations";

const Skills = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const groups = t<SkillGroupText[]>("skills.groups");

  return (
    <section id="skills" className="py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {t("skills.heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroupsMeta.map((meta) => {
            const label = groups.find((g) => g.id === meta.id)?.label ?? meta.id;
            return (
              <div key={meta.id} className="rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-semibold text-foreground mb-3">{label}</h3>
                <div className="flex flex-wrap gap-2">
                  {meta.skills.map((skill) => (
                    <span key={skill} className="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
