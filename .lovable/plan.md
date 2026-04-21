
# Fix: Case study "class-automator" não aparece

## Causa raiz

`src/components/CaseStudies.tsx` itera sobre `caseStudiesMeta` (em `src/constants/content.ts`) e busca o texto correspondente nas traduções por `id`. O novo case `class-automator` foi adicionado apenas em `src/i18n/translations.ts` (EN e PT-BR), mas **não** em `caseStudiesMeta` — por isso o loop nunca chega a ele e o card não é renderizado.

Esse padrão é proposital: metadados (stack, links, vídeo) ficam em `content.ts` e textos traduzíveis em `translations.ts`, unidos pelo `id`.

## Mudança

**Arquivo: `src/constants/content.ts`**

Adicionar ao array `caseStudiesMeta` uma nova entrada:

```ts
{
  id: "class-automator",
  stack: [
    "Google Apps Script",
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Google Sheets",
  ],
}
```

Sem `github`, `demo` ou `video` (a menos que você queira fornecer URLs — me avise e adiciono).

## Resultado

O card "Strides Class Automator" passa a renderizar no carousel da seção Works, em ambas as línguas, com a stack exibida nos badges e sem botões de link externo (já que não há URLs).

## Observações

- Se quiser links (GitHub/demo/vídeo) no card, basta informar as URLs e eu incluo nos campos opcionais (`github`, `demo`, `video`, `videoExternalUrl`).
- A stack atual é uma sugestão baseada no texto do case (GAS + interface React). Posso ajustar se preferir outra lista.
