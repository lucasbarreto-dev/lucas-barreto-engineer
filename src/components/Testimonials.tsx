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
    text: "Trabalhar com o Lucas é contar com um desenvolvedor tecnicamente muito sólido, com grande capacidade de transformar necessidades reais em soluções eficientes. Ele domina bem o desenvolvimento e a automação de processos, sempre com foco em melhorar fluxos, reduzir retrabalho e otimizar o tempo das equipes. Lucas entrega soluções bem estruturadas, confiáveis e pensadas para o longo prazo. Mais do que executar demandas, ele analisa cenários, propõe melhorias e constrói automações que realmente impactam a operação e o negócio. Um diferencial marcante é a forma como compartilha conhecimento. Lucas é acessível, didático e sempre disposto a explicar, apoiar e orientar, contribuindo ativamente para a evolução técnica do time e para a adoção de boas práticas. É um profissional comprometido, responsável e colaborativo, que une profundidade técnica, visão prática e capacidade de execução. Recomendo fortemente o Lucas para times que buscam um desenvolvedor que gera impacto, melhora processos e eleva o nível de quem trabalha ao seu lado.",
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
