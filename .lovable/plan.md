
# Análise: Dockerizar o Portfólio (revisado)

Boa observação — vou consolidar tudo em **um único `Dockerfile` multi-stage** com targets nomeados (`dev`, `builder`, `production`), e o `docker-compose.yml` escolhe o target. Zero duplicação.

## 1. Viabilidade

Sim, 100%. É uma SPA estática (React 18 + Vite 5 + TS + Tailwind), sem backend, sem DB, sem envs em runtime, sem storage no servidor. i18n e conteúdo vivem em arquivos TS; persistência de idioma é `localStorage` do browser.

## 2. Pontos de atenção (nenhum bloqueante)

- **Porta 8080** já fixada em `vite.config.ts` — ideal para container.
- **HMR em volume montado** (Mac/Windows) pode exigir `CHOKIDAR_USEPOLLING=true`.
- **Playwright** (devDep) — fica fora da imagem de produção via multi-stage; no stage `dev` só é instalado se você for rodar E2E no container (opcional).
- **React Router (SPA)** — Nginx precisa de fallback `try_files ... /index.html`.
- Sem secrets, sem API keys, sem serviço externo em runtime.

## 3. Benefícios × Trade-offs

**Benefícios:** ambiente reprodutível, imagem de produção enxuta (~40 MB Nginx+dist), deploy portátil (Fly.io/Railway/Cloud Run/VPS), onboarding em um comando.
**Trade-offs:** HMR um pouco mais lento em volumes cross-OS, uma camada de config extra para manter, hospedagem atual (Lovable) já resolve o serve — Docker é ganho maior se você quiser sair do Lovable ou padronizar dev.

## 4. Arquivos

**Criar**
- `Dockerfile` — único, três stages: `dev`, `builder`, `production`.
- `docker-compose.yml` — services que apontam para targets diferentes.
- `.dockerignore` — `node_modules`, `dist`, `.git`, `playwright-report`, `test-results`, `.env*`, `.lovable`, screenshots.
- `nginx.conf` — SPA fallback, gzip, cache por hash em `/assets/*`, `no-cache` no `index.html`.

**Modificar**
- `README.md` — seção "Running with Docker".
- `vite.config.ts` — *opcional*: `server.watch.usePolling` atrás de env var, só se for usar o stage `dev` em volume montado.

**Não precisa:** `.env`, mudanças em `package.json` (atalhos `docker:*` são opcionais).

## 5. Estrutura do Dockerfile único

```text
# Stage 1 — deps compartilhadas
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2 — dev (Vite dev server + HMR)
FROM node:20-alpine AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host"]

# Stage 3 — builder (gera /app/dist)
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4 — production (Nginx servindo dist)
FROM nginx:alpine AS production
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

O stage `deps` evita reinstalar `node_modules` em `dev` e `builder`. Fica DRY de verdade.

## 6. docker-compose.yml (esboço)

```text
services:
  app:
    build:
      context: .
      target: dev
    ports: ["8080:8080"]
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
    profiles: ["dev"]

  web:
    build:
      context: .
      target: production
    ports: ["8080:80"]
    profiles: ["prod"]
```

Uso:
```text
docker compose --profile dev up      # desenvolvimento com HMR
docker compose --profile prod up     # build + serve com Nginx
```

## 7. Passo a passo de implementação

1. **`.dockerignore`** — reduz build context e evita vazar artefatos locais.
2. **`nginx.conf`** — SPA fallback + gzip + cache policy.
3. **`Dockerfile`** único com os 4 stages (`deps`, `dev`, `builder`, `production`).
4. **`docker-compose.yml`** com profiles `dev` e `prod`.
5. **(Opcional)** ajuste em `vite.config.ts` para `usePolling` condicional.
6. **`README.md`** — instruções Docker.
7. **Verificação:**
   - `docker compose --profile prod up --build` sobe e serve `/` e `/#work`.
   - Rota inexistente cai no fallback (SPA, não 404 do Nginx).
   - `docker compose --profile dev up` sobe Vite; edição em `Hero.tsx` dispara HMR.
   - Imagem `production` < 60 MB.

## Perguntas antes de implementar

1. Quer os dois profiles (`dev` + `prod`) ou só `production` para deploy?
2. Algum host-alvo específico (Fly.io / Railway / Cloud Run / VPS)? Isso muda pequenos detalhes (ex.: escutar em `$PORT`).
3. Mantemos `npm ci` (há `package-lock.json`), correto?

Aguardo sua aprovação.
