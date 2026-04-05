import { caseStudies } from "@/constants/content";
import CaseStudyCard from "./CaseStudyCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CaseStudies = () => {
  const ref = useScrollReveal();

  return (
    <section id="work" className="py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Selected Work</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Engineering-focused case studies from internal tools, automation workflows, and system integrations.
        </p>
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
