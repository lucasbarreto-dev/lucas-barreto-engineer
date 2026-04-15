import { siteConfig, trustSignals } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import profilePhoto from "@/assets/lucas-profile.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - TEXT */}
        <div className="order-2 md:order-1">
          <p className="text-primary text-sm font-medium tracking-wide mb-4">
            {siteConfig.title}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-tight mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            {siteConfig.tagline}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
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

        {/* RIGHT - PHOTO */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl" />
            <img
              src={profilePhoto}
              alt={`${siteConfig.name} — ${siteConfig.title}`}
              className="relative rounded-2xl shadow-xl w-72 md:w-80 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
