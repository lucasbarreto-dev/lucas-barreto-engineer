import { forwardRef } from "react";
import { GitBranch, ChevronUp } from "lucide-react";
import type { CaseStudyMeta } from "@/constants/content";
import type { CaseStudyText } from "@/i18n/translations";
import CaseStudyCard from "./CaseStudyCard";
import { cn } from "@/lib/utils";

interface Props {
  meta: CaseStudyMeta;
  text: CaseStudyText;
  isExpanded: boolean;
  onToggle: () => void;
}

const Port = ({ position }: { position: "start" | "end" }) => (
  <span
    aria-hidden
    className={cn(
      "absolute h-2.5 w-2.5 rounded-full border border-border bg-background z-10",
      position === "start"
        ? // Mobile: top-center. Desktop: left-center.
          "-top-1.5 left-1/2 -translate-x-1/2 md:top-1/2 md:left-0 md:-translate-x-1/2 md:-translate-y-1/2"
        : // Mobile: bottom-center. Desktop: right-center.
          "-bottom-1.5 left-1/2 -translate-x-1/2 md:top-1/2 md:bottom-auto md:left-auto md:right-0 md:translate-x-1/2 md:-translate-y-1/2"
    )}
  />
);

const CaseStudyNode = forwardRef<HTMLDivElement, Props>(
  ({ meta, text, isExpanded, onToggle }, ref) => {
    const status = meta.status ?? "COMPLETED";
    const statusColor =
      status === "ACTIVE"
        ? "bg-sky-500/10 text-sky-400 border-sky-500/20"
        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";

    const panelId = `case-study-panel-${meta.id}`;

    return (
      <div
        ref={ref}
        className={cn(
          "relative shrink-0 transition-[width,max-width] duration-300 ease-in-out",
          isExpanded
            ? "w-full max-w-2xl md:w-[90vw] md:max-w-2xl"
            : "w-full max-w-xl h-12 md:w-72 md:h-32 md:max-w-none"
        )}
      >
        <Port position="start" />

        {isExpanded ? (
          <div id={panelId} className="relative animate-fade-in">
            <CaseStudyCard meta={meta} text={text} />
            <button
              type="button"
              onClick={onToggle}
              aria-label="Collapse case study"
              className="absolute top-3 right-3 h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isExpanded}
            aria-controls={panelId}
            className="w-full h-full px-4 md:p-4 rounded-lg border border-border bg-card flex flex-row items-center justify-between md:flex-col md:justify-between md:items-stretch cursor-pointer transition-colors duration-300 hover:border-primary/40 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-left"
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <GitBranch size={16} className="text-muted-foreground shrink-0" />
              <span className="text-sm font-medium text-foreground truncate">
                {text.title}
              </span>
            </span>
            <span
              className={cn(
                "shrink-0 md:self-start text-[10px] font-medium tracking-wider border rounded-full px-2 py-0.5",
                statusColor
              )}
            >
              {status}
            </span>
          </button>
        )}

        <Port position="end" />
      </div>
    );
  }
);

CaseStudyNode.displayName = "CaseStudyNode";

export default CaseStudyNode;
