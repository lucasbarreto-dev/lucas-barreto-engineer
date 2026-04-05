import { about } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">About</h2>
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
