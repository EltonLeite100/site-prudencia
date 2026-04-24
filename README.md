# github_repo_copy

Esta pasta e uma copia dos arquivos essenciais para o Claude Design trabalhar com contexto real do site Prudencia sem descaracterizar o visual.

## Conteudo principal
- `DESIGN.md`: regras de identidade visual e guia de geracao de imagens.
- `tokens-reference.css`: mapa de tokens de cor/estilo.
- `src/`: implementacao principal da interface (`NewApp.jsx`, `index.css`, `main.jsx`, traducoes).
- `public/`: imagens e assets usados pelo site (logo, heros, fotos de contexto, assets gerados).
- `package.json`, `vite.config.js`, `index.html`: contexto de build e estrutura.

## Como usar no GitHub + Claude Design
1. Suba esta pasta para o repositorio (ou mantenha os mesmos arquivos no repo principal).
2. No Claude Design, adicione `DESIGN.md` em **Add assets**.
3. Conecte o repositorio e inclua `src/` + `public/` + `DESIGN.md` no contexto.
4. Para imagens novas, siga a secao de guia visual no `DESIGN.md`.

## Observacao
- O objetivo e preservar estilo: dark industrial + acento ambar + navy da marca + fotografia operacional real.
