# GourmetOn — Landing Page

Landing page do app de delivery **GourmetOn**, desenvolvida para o Check-Point 05
da disciplina Web Development with JS.

## Objetivo

Página de apresentação para um app de delivery de comida, consumindo uma API externa
via `fetch` e trabalhando com JSON, componentização React e estilização com Tailwind.

## Tecnologias utilizadas

- **React 18** (Vite) — componentização, hooks (`useState`, `useEffect`)
- **Tailwind CSS** — estilização utilitária e responsividade
- **Fetch API** — requisições assíncronas
- **[TheMealDB](https://www.themealdb.com/api.php)** — API pública e gratuita, sem
  necessidade de chave de API, usada para popular o "Cardápio em destaque" com pratos
  reais filtrados por categoria (Massas, Frango, Sobremesas, Vegetariano)
- **lucide-react** — ícones

> A Spoonacular também foi avaliada, mas exige cadastro e chave de API (`YOUR_API_KEY`).
> Optamos pela TheMealDB para que o projeto funcione imediatamente após o deploy, sem
> configuração extra. Trocar de API é simples: basta ajustar a URL de fetch em
> `src/components/MenuPreview.jsx`.

## Estrutura do projeto

```
src/
  components/
    Navbar.jsx        # menu fixo, com efeito de opacidade ao rolar
    Hero.jsx           # seção principal (hero)
    About.jsx           # benefícios: entrega, variedade, pagamento
    MenuPreview.jsx      # cardápio com fetch + filtros por categoria
    Testimonials.jsx      # depoimentos de clientes
    ContactForm.jsx        # formulário de captura de e-mail
    Footer.jsx               # rodapé com contato e redes sociais
  App.jsx
  main.jsx
  index.css
```

## Como instalar e rodar localmente

```bash
npm install
npm run dev
```

O projeto sobe em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview
```

## Deploy

1. Suba o projeto em um repositório Git (GitHub).
2. Importe o repositório na [Vercel](https://vercel.com/new).
3. Framework preset: **Vite** (detectado automaticamente). Build command: `npm run build`,
   output directory: `dist`.
4. Não é necessário configurar variáveis de ambiente — a API usada não exige chave.

## Uso de IA no projeto

Estrutura do projeto, componentes React, integração com a API e estilização com
Tailwind foram desenvolvidos com apoio do Claude.

## Responsividade

Layout testado para desktop, tablet e mobile (menu com hambúrguer abaixo de `md`).
