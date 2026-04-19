import { useState, useEffect, useCallback } from "react";
import { caseStudiesMeta } from "@/constants/content";
import CaseStudyCard from "./CaseStudyCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import type { CaseStudyText } from "@/i18n/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const CaseStudies = () => {
  const ref = useScrollReveal();
  const { t } = useTranslation();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const list = t<CaseStudyText[]>("caseStudies.list");

  return (
    <section id="work" className="py-20 md:py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          {t("caseStudies.heading")}
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          {t("caseStudies.subtitle")}
        </p>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {caseStudiesMeta.map((meta) => {
              const text = list.find((s) => s.id === meta.id);
              if (!text) return null;
              return (
                <CarouselItem
                  key={meta.id}
                  className="pl-4 basis-full md:basis-[85%] lg:basis-[48%]"
                >
                  <CaseStudyCard meta={meta} text={text} />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious className="hidden md:inline-flex -left-5 bg-card border-border text-foreground hover:bg-muted" />
          <CarouselNext className="hidden md:inline-flex -right-5 bg-card border-border text-foreground hover:bg-muted" />
        </Carousel>

        {count > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === i
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
