import { useEffect, useRef, useState } from "react";
import { caseStudiesMeta } from "@/constants/content";
import CaseStudyNode from "./CaseStudyNode";
import CaseStudyConnector from "./CaseStudyConnector";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import type { CaseStudyText } from "@/i18n/translations";

const CaseStudies = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const list = t<CaseStudyText[]>("caseStudies.list");

  useEffect(() => {
    if (!expandedId) return;
    const el = nodeRefs.current[expandedId];
    if (el) {
      // Wait for expansion transition to start before scrolling
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      });
    }
  }, [expandedId]);

  const items = caseStudiesMeta
    .map((meta) => {
      const text = list.find((s) => s.id === meta.id);
      return text ? { meta, text } : null;
    })
    .filter((x): x is { meta: typeof caseStudiesMeta[number]; text: CaseStudyText } => x !== null);

  return (
    <section id="work" className="relative py-20 md:py-28 overflow-hidden">
      {/* Dot-grid canvas background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)] pointer-events-none"
      />

      <div ref={ref} className="relative">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("caseStudies.heading")}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            {t("caseStudies.subtitle")}
          </p>
        </div>

        <div className="flex flex-row items-center justify-start md:justify-center overflow-x-auto py-12 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {items.map(({ meta, text }, i) => (
            <div key={meta.id} className="flex items-center shrink-0">
              <CaseStudyNode
                ref={(el) => {
                  nodeRefs.current[meta.id] = el;
                }}
                meta={meta}
                text={text}
                isExpanded={expandedId === meta.id}
                onToggle={() =>
                  setExpandedId((prev) => (prev === meta.id ? null : meta.id))
                }
              />
              {i < items.length - 1 && <CaseStudyConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
