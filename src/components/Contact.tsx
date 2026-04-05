import { siteConfig } from "@/constants/content";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="bg-section-alt py-20 md:py-28">
      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Interested in working together or discussing an opportunity? Feel free to reach out.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
