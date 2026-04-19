import { useTranslation } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const LanguageSwitcher = ({ className }: Props) => {
  const { lang, setLang } = useTranslation();

  const baseBtn = "text-xs font-medium tracking-wide transition-colors px-1.5";
  const active = "text-foreground";
  const inactive = "text-muted-foreground hover:text-foreground";

  return (
    <div className={cn("inline-flex items-center", className)}>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="Change language to English"
        aria-pressed={lang === "en"}
        className={cn(baseBtn, lang === "en" ? active : inactive)}
      >
        EN
      </button>
      <span className="text-muted-foreground/50 text-xs">|</span>
      <button
        type="button"
        onClick={() => setLang("pt-BR")}
        aria-label="Mudar idioma para Português"
        aria-pressed={lang === "pt-BR"}
        className={cn(baseBtn, lang === "pt-BR" ? active : inactive)}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
