import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/I18nProvider";
import heroBg from "@/assets/lucas-hero-bg.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] md:object-center z-0 pointer-events-none select-none will-change-transform transform-gpu scale-[1.01]"
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.40) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto w-full px-8 md:px-16 py-32">
        <p className="text-sm md:text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-4">
          {t("hero.title")}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
          {t("hero.name")}
        </h1>

        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
          {t("hero.tagline")}
        </p>

        <Button
          asChild
          className="rounded-sm bg-white text-black hover:bg-white/90 font-medium px-8 h-11 shadow-none"
        >
          <a href="#contact">{t("hero.cta")}</a>
        </Button>

        <p className="mt-6 text-xs text-white/40 tracking-wide">
          {t("hero.microcopy")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
