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
    name: "Liliane Silva",
    role: "Especialista de Processos e Operações | Trabalhou com Lucas na Strides",
    text: "Lucas é um desenvolvedor tecnicamente sólido, com forte capacidade de transformar necessidades em soluções eficientes. Cria soluções bem estruturadas, confiáveis e com foco em impacto real no negócio. Além disso, se destaca por sua colaboração e por compartilhar conhecimento com o time, elevando o nível técnico das pessoas ao redor.",
  },
  {
    name: "Pedro Caldas",
    role: "Machine Learning | GenAI | AI Engineer @ Santander | Estudou com Lucas na Trybe",
    text: "Lucas is an extremely hardworking person who cares a lot about being organized to achieve his goals. I studied with him during our programming course and that was undoubtedly his trait that caught my attention the most. Anyone lucky enough to work with Lucas can be sure to have someone very competent at their side.",
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
