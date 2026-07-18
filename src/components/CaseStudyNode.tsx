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

const Port = ({ position }: { position: "top" | "bottom" }) => (
  <span
    aria-hidden
    className={cn(
      "absolute left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full border border-border bg-background z-10",
      position === "top" ? "-top-1.5" : "-bottom-1.5"
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
          "relative w-full transition-all duration-300 ease-in-out",
          isExpanded ? "max-w-3xl" : "max-w-xl"
        )}
      >
        <Port position="top" />

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
            className="w-full h-12 px-4 rounded-lg border border-border bg-card flex items-center justify-between cursor-pointer transition-all duration-300 hover:border-primary/40 hover:bg-card/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <GitBranch size={16} className="text-muted-foreground shrink-0" />
              <span className="text-sm font-medium text-foreground truncate">
                {text.title}
              </span>
            </span>
            <span
              className={cn(
                "text-[10px] font-medium tracking-wider border rounded-full px-2 py-0.5 shrink-0",
                statusColor
              )}
            >
              {status}
            </span>
          </button>
        )}

        <Port position="bottom" />
      </div>
    );
  }
);

CaseStudyNode.displayName = "CaseStudyNode";

export default CaseStudyNode;
