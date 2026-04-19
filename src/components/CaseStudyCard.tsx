import type { CaseStudyMeta } from "@/constants/content";
import type { CaseStudyText } from "@/i18n/translations";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/i18n/I18nProvider";
import { ExternalLink, Github, Play } from "lucide-react";
import { useState } from "react";

interface Props {
  meta: CaseStudyMeta;
  text: CaseStudyText;
}

const CaseStudyCard = ({ meta, text }: Props) => {
  const [showVideo, setShowVideo] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{text.title}</h3>
        <Badge variant="outline" className="text-primary border-primary/30 text-xs">
          {text.type}
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm mb-5 italic">{text.context}</p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
            {t("caseStudies.labels.problem")}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{text.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
            {t("caseStudies.labels.solution")}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{text.solution}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
            {t("caseStudies.labels.role")}
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">{text.role}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            {t("caseStudies.labels.outcome")}
          </h4>
          <p className="text-foreground text-sm leading-relaxed font-medium">{text.outcome}</p>
        </div>
      </div>

      {meta.video && (
        <div className="mb-6">
          {showVideo ? (
            <div className="aspect-video rounded-md overflow-hidden border border-border">
              <iframe
                src={meta.video}
                title={`${text.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ) : (
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Play size={16} />
              {t("caseStudies.labels.watchDemo")}
            </button>
          )}
          {showVideo && meta.videoExternalUrl && (
            <a
              href={meta.videoExternalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              <ExternalLink size={12} />
              {t("caseStudies.labels.openYoutube")}
            </a>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {meta.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>

      {(meta.github || meta.demo) && (
        <div className="flex gap-4">
          {meta.github && (
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
          )}
          {meta.demo && (
            <a href={meta.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudyCard;
