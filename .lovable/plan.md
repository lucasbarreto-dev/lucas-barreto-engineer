## Diagnóstico

Confirmei que `package-lock.json` está fora de sincronia com `package.json`. Rodando `npm ci --dry-run` localmente, o npm reporta 84 pacotes a adicionar, 21 a remover e 30 a mudar — exatamente o tipo de divergência que faz `npm ci` abortar dentro do Docker (Node 20 alpine usa npm estrito). O `Dockerfile` atual usa `npm ci --no-audit --no-fund` na stage `deps`, então corrigir o lockfile resolve a falha sem tocar no Dockerfile.

## Plano

1. Regenerar `package-lock.json` na raiz com `npm install` (resolve todas as dependências atuais de `package.json` e reescreve o lockfile de forma consistente).
2. Validar rodando `npm ci --dry-run` — deve terminar sem `add/remove/change` pendentes.
3. Manter `Dockerfile` e `docker-compose.yml` inalterados; `npm ci` continua sendo o comando correto para builds reproduzíveis.
4. Atualizar nada no README (instruções continuam válidas).
5. Após aprovar, o lockfile atualizado precisa ser commitado no GitHub (sync do Lovable) para que o build Docker no seu ambiente pegue a versão nova.

## Detalhes técnicos

- Não vou tocar em versões de dependências (`^` ranges em `package.json` permanecem iguais); só o lockfile é reescrito.
- Não vou trocar para `bun` no Docker mesmo existindo `bun.lockb` — manter `npm ci` mantém consistência com Node 20 alpine já usado.
- Se o `npm install` local puxar patches menores dentro dos ranges, isso é esperado e desejável para destravar o `npm ci`.
