## Objetivo
Transformar a seção `#work` de um fluxo vertical de nós em um **pipeline horizontal** (esquerda → direita), estilo VoltAgent / n8n, com scroll lateral, portas laterais e cabos horizontais entre os nós.

Escopo restrito a 3 arquivos (apresentação apenas):
- `src/components/CaseStudies.tsx`
- `src/components/CaseStudyNode.tsx`
- `src/components/CaseStudyConnector.tsx`

Sem mudanças em conteúdo, i18n, metadata ou lógica de negócio.

---

## 1. `CaseStudies.tsx` — container em pipeline horizontal

- Trocar o wrapper de `flex-col items-center gap-4` por um trilho horizontal:
  - `flex flex-row items-center justify-start md:justify-center`
  - `overflow-x-auto py-12 px-6`
  - Classe utilitária `scrollbar-none` (adicionar plugin não é necessário; usar `[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]` inline no Tailwind).
- Manter o `max-w-6xl` do bloco externo apenas para o heading/subtítulo; o trilho de nós fica em um wrapper próprio full-width dentro da seção para permitir overflow lateral sem cortar o dot-grid.
- Cada item vira `flex items-center shrink-0` intercalando `<CaseStudyNode />` e `<CaseStudyConnector />` (o connector some depois do último nó).
- Comportamento de scroll on expand:
  - Manter `nodeRefs` e `useEffect` no `expandedId`, mas trocar `block: "nearest"` por `inline: "center", block: "nearest"` para centralizar horizontalmente o nó recém-aberto.

---

## 2. `CaseStudyNode.tsx` — nó horizontal com portas laterais

### Portas
Reescrever o subcomponente `Port` para receber `position: "left" | "right"`:
- Left (input): `left-0 top-1/2 -translate-x-1/2 -translate-y-1/2`
- Right (output): `right-0 top-1/2 translate-x-1/2 -translate-y-1/2`
- Mesmo estilo visual (círculo 2.5, border, bg-background, z-10).

### Estado recolhido (card compacto tipo VoltAgent)
- Wrapper: `shrink-0 w-64 md:w-72 h-32` (largura fixa, altura fixa).
- Botão interno: `w-full h-full p-4 rounded-lg border border-border bg-card flex flex-col justify-between` (hover/focus states preservados).
- Topo: linha com `GitBranch` + título (`truncate`, `text-sm font-medium`).
- Base: badge de status (`COMPLETED` / `ACTIVE`) alinhada à esquerda com as mesmas cores atuais.

### Estado expandido
- Wrapper cresce com transição suave: `w-[90vw] max-w-2xl h-auto` (mantém `shrink-0` para não colapsar no flex row).
- Renderiza `CaseStudyCard` como hoje, com botão `ChevronUp` no canto superior direito (sem mudanças).
- Transição: `transition-[width,max-width] duration-300 ease-in-out` no wrapper.

### Portas visíveis em ambos os estados
Renderizar `<Port position="left" />` e `<Port position="right" />` sempre, para o cabo se alinhar visualmente à borda do nó.

---

## 3. `CaseStudyConnector.tsx` — cabo horizontal

Substituir a linha vertical atual por um cabo horizontal simples e responsivo:
- `shrink-0 self-center h-0.5 w-8 md:w-16 bg-border`
- Remover o `hidden md:block` — no pipeline horizontal o cabo faz sentido em todos os breakpoints (o scroll lateral cuida do mobile).
- `aria-hidden` mantido.

(Versão SVG Bézier fica como opção futura; a linha reta já entrega o visual VoltAgent/n8n de forma limpa e sem custo de manutenção.)

---

## 4. Responsividade

- Mobile (`<md`): trilho continua `overflow-x-auto`, com `justify-start` para começar alinhado à esquerda; scroll horizontal por toque; cabo em `w-8` reduz o "gap".
- Nó expandido em mobile: `w-[90vw]` garante que ocupe quase toda a largura visível, com `px-6` do trilho dando respiro.
- Dot-grid de fundo é mantido; como o overflow é só no trilho interno, o background da `<section>` permanece intacto.

---

## Detalhes técnicos

```text
<section #work>
  heading + subtítulo (max-w-6xl centralizado)
  <div class="flex flex-row items-center overflow-x-auto py-12 px-6 scrollbar-none">
    Node ── Connector ── Node ── Connector ── Node ── Connector ── Node
     │                                                                 │
   collapsed: 256–288px × 128px            expanded: até 672px (max-w-2xl)
```

- Sem novas dependências.
- Sem alteração em `content.ts`, `translations.ts`, `useScrollReveal`, ou qualquer outra seção.
- `scrollIntoView({ inline: "center" })` já é suportado nos navegadores alvo.

---

## Riscos / trade-offs

- Em desktop com poucos nós (4 atuais), `justify-center` mantém tudo centralizado; ao expandir um nó, a linha pode ultrapassar a viewport e ativar scroll — comportamento esperado e alinhado a n8n.
- Perda do efeito "coluna simétrica" atual — é o objetivo declarado.
- `scrollbar-none` via utilitários arbitrários evita adicionar `tailwind-scrollbar`; se preferir plugin, dá para trocar depois.

Aprovando, aplico as três edições em paralelo.