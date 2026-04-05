import type { CaseStudy } from "@/constants/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  study: CaseStudy;
}

const CaseStudyCard = ({ study }: Props) => {
  return (
    <div className="rounded-lg border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
        <Badge variant="outline" className="text-primary border-primary/30 text-xs">
          {study.type}
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm mb-5 italic">{study.context}</p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Problem</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Solution</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Role & Contribution</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{study.role}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Outcome</h4>
          <p className="text-foreground text-sm leading-relaxed font-medium">{study.outcome}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {study.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>

      {(study.github || study.demo) && (
        <div className="flex gap-4">
          {study.github && (
            <a href={study.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
          )}
          {study.demo && (
            <a href={study.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudyCard;
