import { experience } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Experience = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Experience</h2>
        <div className="grid gap-6">
          {experience.map((entry) => (
            <div key={entry.company} className="rounded-lg border border-border bg-card p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{entry.company}</h3>
                  <p className="text-sm text-primary">{entry.role}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1 sm:mt-0">{entry.period}</span>
              </div>
              <ul className="space-y-2 mb-5">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                    <span className="text-primary mt-1 shrink-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {entry.stack.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
