import { siteConfig, trustSignals } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <p className="text-primary text-sm font-medium tracking-wide mb-4">
          {siteConfig.title}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button asChild>
            <a href={siteConfig.resumeUrl}>
              View Resume <ArrowRight className="ml-1" size={16} />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">
              <Mail className="mr-1" size={16} /> Get in Touch
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-3">
          {trustSignals.map((signal) => (
            <span
              key={signal}
              className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
