# Design system — Site Prudência Engenharia e Consultoria

Documento de referência para **Claude Design**, handoff e geração de novos ativos. **Não descaracterizar** a identidade: manter paleta, tom industrial B2B e o “look” fotográfico descrito abaixo. Novas imagens devem respeitar os **mesmos temas visuais** (setor, luz, realismo, ausência de estética “startup genérica”).

---

## 1. Tema visual e atmosfera

- **Setor:** engenharia, saúde e segurança do trabalho (SST), conformidade, treinamentos normativos, operações **offshore/marítimas**, **portuárias**, **industriais**, petróleo e gás, construção civil pesada, energia, logística, estaleiros, FPSO.
- **Tom:** profissional, sério, técnico, **confiável**; B2B industrial — não marketing “colorido de app consumer”.
- **Densidade:** interfaces com **áreas escuras** (fundo preto/slate), texto claro, acentos pontuais em **âmbar/dourado**; seções claras com cartões branco gelo e bordas suaves.
- **Evitar:** ilustrações cartoon, gradientes arco-íris, neomorfismo exagerado, memphis/startup playful, stock photos de escritório com “todos sorrindo”, ícones 3D genéricos fora do padrão Lucide.
- **Animar com moderação:** `fadeIn`, `pageEnter`, leves elevações em hover (`-translate-y-1`, `scale-105` em botões) — nada de bounce agressivo.

---

## 2. Paleta de cores (obrigatório manter a lógica)

| Papel | Valor / token no código | Uso |
|--------|-------------------------|-----|
| **Marca (azul navy)** | `#1e3163` + `blue-800` (Tailwind) em gradiente | Títulos em destaque no hero (texto com `bg-clip-text`), reforço de marca. |
| **Acento principal** | `amber-400`, `amber-500` (com hover `amber-400` / `amber-300`) | CTAs, itens de nave ativos, ícones chave, badges, sublinhados, números de estatística no bloco escuro. |
| **Fundo app** | `black`, `slate-950`, `slate-900` | Corpo geral, hero com overlay, áreas de atuação. |
| **Superfície escura** | `slate-800`, `slate-700`, `slate-900/80` + `backdrop-blur` | Cartões, painéis, bordas `border-slate-700` / `border-white/10`. |
| **Texto em fundo claro** | `slate-900`, `slate-800`, `slate-700` | Parágrafos, títulos em seções “paper”. |
| **Texto em fundo escuro** | `white`, `gray-200`, `gray-100`, `slate-300`, `slate-400` | Leitura sobre fotos/gradientes. |
| **Destaque em faixa (valores)** | `amber-500/90` sobre fundo escuro com texto `slate-900` | Bloco de valores / destaques em contraste. |
| **Glass / vidro** | `white/20`–`white/70`, `border-white/30`–`border-white/80`, `backdrop-blur-xl` | Card do hero, logo no nav, painéis. |
| **Placeholder de imagem** | `#0f172a` (equiv. slate-900) | Cor de fundo enquanto carrega `background-image`. |

**Regra:** o site **não** usa roxo/pink/verde neon como cor primária. O contraste quente vem do **âmbar**; o “peso” institucional vem do **azul navy** e do **slate/preto**.

---

## 3. Tipografia

- **Família:** stack sans do sistema via Tailwind `font-sans` (não há família custom carregada no `index.html` do projeto).
- **Hierarquia:** títulos `font-bold` / `font-semibold`; hero com `text-base`–`text-2xl` e `tracking-wide` onde aplicável; labels e tags com `uppercase`, `tracking-wider` / `tracking-widest`, tamanhos pequenos (`text-sm`, `text-xs`).
- **Corpo:** `leading-relaxed`; blocos “institucionais” com `text-justify` em alguns trechos.
- **Novas telas:** manter legibilidade sobre fotos (sombra no texto: `textShadow` escuro, ou overlay gradiente) — padrão já usado no código.

---

## 4. Componentes e padrões de UI

- **Navegação (fixa):** topo com `backdrop-blur`, `bg-slate-950/90` ou gradiente suave no hero home; link ativo: `text-amber-400` + borda inferior âmbar; demais: `text-gray-100` + hover âmbar.
- **Botão primário (contato / CTA):** `rounded-full`, `bg-amber-500` (ou `amber-500/90`), `text-slate-900`, `font-bold`, sombra `shadow-lg` / `shadow-2xl` com `shadow-amber-500/...` no hover.
- **Botão / cartão secundário:** bordas `border-white/10`–`border-white/40`, fundos semitransparentes.
- **Divisórias de seção:** barra curta `w-10`–`w-12` `h-1` `bg-amber-500` ou `bg-slate-300` conforme contexto.
- **Ícones:** biblioteca **Lucide** (stroke), tamanhos 6–8 no grid; cor `amber-500` em destaque sobre `slate-800` / `slate-900`.
- **Imagens de conteúdo:** `rounded-xl` ou `rounded-2xl`, `object-cover`, bordas discretas `border-white/10` onde aplicável.
- **Grid de cards:** `rounded-2xl` / `rounded-3xl`, `p-6`–`p-8`, sombras `shadow-xl` / `shadow-2xl`.

---

## 5. Princípios de layout

- **Largura máxima de conteúdo:** `max-w-7xl` centralizado com `px-4` / `sm:px-6` / `lg:px-8`.
- **Espaçamento:** seções generosas `py-20` / `min-h-screen` onde faz sentido; respiro entre blocos.
- **Hero em tela cheia / grande:** `min-h-screen` ou `55vh`–`65vh` com foto de fundo + gradiente `from-slate-900/20` → `to-slate-900` (ou análogo) para leitura.
- **Hierarquia clara:** título grande branco, subtítulo, depois conteúdo; listas com seta `→` e `text-slate-400` no marcador (padrão já usado em áreas de atuação).

---

## 6. Profundidade e elevação

- **Sombras:** `shadow-2xl`, `shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]` em painéis glass.
- **Glow sutil (stats / líder):** `bg-amber-500/5` blur ou `from-amber-500 to-amber-200` com blur baixo e opacidade baixa — não substituir por brilho colorido fora do âmbar.
- **Bordas:** preferir `border-white/10` a sombras coloridas fortes.

---

## 7. O que fazer e o que evitar

**Fazer**
- Manter **âmbar** para ação e hierarquia de leitura em UI escura.
- Manter **navy** nos títulos de gradiente do hero.
- Garantir **contraste** texto/fundo (WCAG na medida do possível).
- Alinhar linguagem visual à **fotografia real** de operação, campo, indústria, mar, plataformas, porto, EPI, equipamentos.
- Exportar/gerar artes em **WebP** quando forem peças para web (alinhado ao repositório).

**Evitar**
- Trocar a primária por verde, roxo ou vermelho de alerta “genérico” para o layout principal.
- Carregar fontes display exageradas ou múltiplas famílias que quebrem o ar técnico.
- Eliminar o **modo escuro** predominante (é parte da identidade do site).
- Ilustrações que pareçam “infantil” ou fintech desconexa do SST/offshore.

---

## 8. Comportamento responsivo

- Breakpoints alinhados ao **Tailwind** (sm, md, lg, xl).
- Nave colapsa em menu móvel; bandeiras de idioma e CTA acessíveis.
- Títulos escalonados (`text-4xl` → `md:text-6xl` etc.).
- Touch: áreas de toque confortáveis em botões arredondados (altura ~40–44px em ícones de idioma).

---

## 9. Guia de imagem e fotografia (geração de novas imagens / mockups)

**O site depende de fotos reais de contexto industrial/offshore — não mude o “género” visual.**

### Temas e assuntos (sempre alinhados a estes eixos)
- Operações em **plataformas, FPSO, navio**, convés, heliponto, equipes com **EPI** (capacete, macacão, colete onde aplicável).
- **Portos, guindastes, contêineres**, logística, armazéns, centros de distribuição.
- **Construção civil** de grande porte: canteiro, aço, concreto, gruas, contêineres-sala, oficina técnica, mobilização.
- **Indústria:** inspeção, processos, tubulação, painéis, segurança de processo.
- **Energia/infraestrutura** elétrica (subestações, redes, obras) — realismo operacional, não ícones genéricos de “raio” isolados.
- **Estaleiros, casco, estaleiro naval.**
- **Liderança / equipe:** posição profissional, luz natural ou ambiente de obra — evitar “book cover corporativa genérica” de banco.

### Tratamento visual das fotos
- **Cores da cena:** dominância de azul-cinza do céu/mar, aço, concreto, tons quentes do pôr do sol **opcionais** (compatíveis com o âmbar da UI) — evitar saturação estilo Instagram travel.
- **Luz:** natural ou industrial; sombras limpas; legível em overlay escuro.
- **Estilo:** documental / reportagem B2B; profundidade de campo OK; nada de HDR exagerado ou pele plastificada.
- **Formato:** paisagem para heros; recortes com área segura para texto (o site usa gradiente escuro — novas peças devem permitir overlay sem “matar” o assunto).
- **Formato de arquivo (web):** preferir **WebP**; manter `object-cover` e `background-size: cover` / `center`.

### Não fazer em novas imagens
- Stock “equipe apertando mãos” genérica, escritório vazio, ou mesas de reunião sem contexto de engenharia.
- Ilustrações no lugar de foto onde o restante do site usa fotografia.
- Estética de startup (gradiente multicolor plano) como substituto de imagem de fundo.

---

## 10. Arquivos de mídia existentes (referência de contexto)

Hero e seções usam nomes em `public/` (extensão lógica `.webp` com fallback), por exemplo:  
`home-offshore-hero`, `construcao-civil-hero`, `sobre-operacao-maritima`, `petroleo-gas-hero`, `offshore-maritimo-hero`, `portuario-hero`, `industrial-hero`, `energia-hero`, `logistica-hero`, `estaleiros-hero`, `fpso-plataformas-hero`, `infraestrutura-hero`, `atuacao-porto-industrial`, `servicos-industria-seguranca`, `experiencia-global-offshore`, `diferenciais-equipe-campo`, `contato-helideck-comunicacao`, além de detalhes como `equipamentos-oficina-tecnica`, `mobilizacao-canteiro`, `equipe-construcao-civil`, `logo-prudencia-sem-fundo`, `FOTO ELTON` (liderança).

**Logo:** não distorcer proporções; fundo geralmente transparente com container glass no header.

---

## 11. Prompts úteis para agentes (inglês — copiar se necessário)

- *"Maintain the existing B2B industrial look: dark slate/black backgrounds, amber accents (#f59e0b range), navy blue #1e3163 for brand headlines, glassmorphism cards, Lucide-style strokes, no playful illustration style."*
- *"For any new photo or hero: real offshore/industrial/port construction setting, documentary lighting, desaturated enough to work with a dark blue gradient overlay, match themes of the current Prudência site, not generic office stock."*

---

**Última verificação:** após qualquer geração, o resultado deve ser reconhecivelmente o **mesmo site** — alguém que já viu a home deve perceber a continuidade de cor, forma (cantos muito arredondados) e seriedade do tom visual.
