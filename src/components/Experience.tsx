import { useState, useEffect, useCallback } from "react";
import { experienceMeta } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTranslation } from "@/i18n/I18nProvider";
import type { ExperienceText } from "@/i18n/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const Experience = () => {
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

  const list = t<ExperienceText[]>("experience.list");

  return (
    <section id="experience" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          {t("experience.heading")}
        </h2>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: false }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {experienceMeta.map((meta) => {
              const entry = list.find((e) => e.id === meta.id);
              if (!entry) return null;
              return (
                <CarouselItem
                  key={meta.id}
                  className="pl-4 basis-full md:basis-[85%] lg:basis-[48%]"
                >
                  <div className="rounded-lg border border-border bg-card p-6 md:p-8 h-full transition-transform hover:scale-[1.02] hover:shadow-lg">
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
                      {meta.stack.map((tech) => (
                        <span key={tech} className="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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

export default Experience;
