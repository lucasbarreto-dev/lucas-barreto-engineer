import { siteConfig } from "@/constants/content";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/lucas-hero-bg.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay: opaque left → transparent right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.40) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-8 md:px-16 py-32">
        <p className="text-sm md:text-xs font-medium tracking-[0.2em] uppercase text-white/70 mb-4">
          {siteConfig.title}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-6">
          {siteConfig.name}
        </h1>

        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
          Building scalable web applications, internal tools, and automation
          workflows for product-driven teams.
        </p>

        <Button
          asChild
          className="rounded-sm bg-white text-black hover:bg-white/90 font-medium px-8 h-11 shadow-none"
        >
          <a href="#contact">Get in Touch</a>
        </Button>

        <p className="mt-6 text-xs text-white/40 tracking-wide">
          Open to Remote • Based in Brazil • English Proficient
        </p>
      </div>
    </section>
  );
};

export default Hero;
