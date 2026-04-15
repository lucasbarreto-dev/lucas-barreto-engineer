import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Linkedin } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Felipe Moura",
    role: "Tech Lead at DTWO TECNOLOGIA",
    text: "Lucas is one of those engineers who consistently delivers beyond expectations. He takes ownership of complex problems and builds solutions that are clean, scalable, and well-documented. A reliable teammate you can count on.",
  },
  {
    name: "Mariana Costa",
    role: "Product Manager at Strides",
    text: "Working with Lucas was a turning point for our operations. He automated workflows that used to take hours of manual work every week. His ability to connect technical solutions to real business impact is rare.",
  },
  {
    name: "Rafael Oliveira",
    role: "Software Engineer at Strides",
    text: "Lucas has a strong sense of architecture and always pushes for better code quality. He's the kind of developer who improves the entire team's output — through reviews, tooling, and mentorship.",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          What people say about my work
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Feedback from people I've worked with across different projects and teams.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-xl p-6 flex flex-col justify-between"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
