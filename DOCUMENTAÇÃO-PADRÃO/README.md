# {NOME_DO_PROJETO}

<!-- CUSTOMIZE: Substitua {NOME_DO_PROJETO} pelo nome do seu projeto -->
<!-- CUSTOMIZE: Substitua a descrição abaixo pela descrição do seu projeto -->
> **{DESCRIÇÃO_CURTA}** — Breve descrição do que o projeto faz.

<!-- CUSTOMIZE: Atualize os badges com as versões das suas tecnologias -->
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/Licença-Privado-red)
<!-- CUSTOMIZE: Substitua pelo badge real de CI quando houver pipeline -->
![CI](https://img.shields.io/badge/CI-pendente-lightgrey)

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [📸 Demonstração](#-demonstração)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚡ Pré-requisitos](#-pré-requisitos)
- [🚀 Como Rodar](#-como-rodar)
- [🔑 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [🗄️ Banco de Dados](#️-banco-de-dados)
- [📡 API Routes](#-api-routes)
- [🧩 Principais Componentes](#-principais-componentes)
- [🧪 Testes](#-testes)
- [🤖 Sistema de IA](#-sistema-de-ia)
- [🌐 Deploy](#-deploy)
- [🐛 Troubleshooting](#-troubleshooting)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contribuição](#-contribuição)
- [📄 Licença](#-licença)
- [📚 Referências](#-referências)

---

## 🎯 Sobre o Projeto

<!-- CUSTOMIZE: Descreva o seu projeto aqui -->

O **{NOME_DO_PROJETO}** é um {TIPO_DE_PROJETO} para {PÚBLICO_ALVO}, construído com **{FRAMEWORK}** e **{LINGUAGEM}**. O projeto possui as seguintes áreas:

<!-- CUSTOMIZE: Liste as áreas do seu projeto -->
1. **{ÁREA_1}** — Descrição da área 1
2. **{ÁREA_2}** — Descrição da área 2

### 💡 Diferenciais

<!-- CUSTOMIZE: Liste os diferenciais do seu projeto -->
- Diferencial 1
- Diferencial 2
- Diferencial 3

---

## 📸 Demonstração

<!-- CUSTOMIZE: Adicione screenshots, GIF ou link para o ambiente de demonstração -->

| | |
|---|---|
| 🔗 **Demo ao vivo** | <!-- https://exemplo.com --> |
| 🎥 **Vídeo / GIF** | <!-- link ou ![demo](./docs/demo.gif) --> |

> _Substitua por capturas de tela reais do projeto (`./docs/screenshot-*.png`)._

---

## ✨ Funcionalidades

<!-- CUSTOMIZE: Organize as funcionalidades por área do projeto -->

### {ÁREA_1}

| Funcionalidade | Descrição |
|---|---|
| Funcionalidade 1 | Descrição |
| Funcionalidade 2 | Descrição |

### {ÁREA_2}

| Funcionalidade | Descrição |
|---|---|
| Funcionalidade 1 | Descrição |
| Funcionalidade 2 | Descrição |

---

## 🛠️ Tech Stack

<!-- CUSTOMIZE: Preencha com as tecnologias do seu projeto -->

### 🏗️ Core

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | <!-- versão --> | <!-- uso --> |
| [React](https://react.dev/) | <!-- versão --> | <!-- uso --> |
| [TypeScript](https://typescriptlang.org/) | <!-- versão --> | <!-- uso --> |
| [Tailwind CSS](https://tailwindcss.com/) | <!-- versão --> | <!-- uso --> |

### 🗄️ Dados & Backend

| Tecnologia | Uso |
|---|---|
| <!-- ORM --> | <!-- uso --> |
| <!-- Database --> | <!-- uso --> |
| <!-- State Management --> | <!-- uso --> |
| <!-- Validation --> | <!-- uso --> |

### 🔐 Autenticação & Serviços

| Tecnologia | Uso |
|---|---|
| <!-- Auth Provider --> | <!-- uso --> |
| <!-- Payment Gateway --> | <!-- uso --> |
| <!-- Maps / Geolocation --> | <!-- uso --> |
| <!-- File Upload --> | <!-- uso --> |

### 🧰 UI & Ferramentas

| Tecnologia | Uso |
|---|---|
| <!-- Component Library --> | <!-- uso --> |
| <!-- Icons --> | <!-- uso --> |
| <!-- Forms --> | <!-- uso --> |
| <!-- Notifications --> | <!-- uso --> |

---

## 📁 Estrutura do Projeto

<!-- CUSTOMIZE: Adapte a estrutura de pastas ao seu projeto -->

```
{nome-do-projeto}/
├── 📂 src/
│   ├── 📂 app/                       # App Router (Next.js)
│   │   ├── 📂 (public)/             # Rotas públicas
│   │   ├── 📂 (dashboard)/          # Rotas do painel admin
│   │   ├── 📂 api/                  # API Routes
│   │   ├── globals.css               # Estilos globais
│   │   └── layout.tsx                # Layout raiz
│   ├── 📂 components/                # Componentes reutilizáveis
│   │   ├── 📂 ui/                   # Componentes de UI
│   │   └── 📂 shared/              # Componentes compartilhados
│   ├── 📂 db/                        # Camada de dados
│   │   ├── schema.ts                 # Schema do banco
│   │   ├── index.ts                  # Conexão
│   │   └── seed.ts                   # Dados iniciais
│   ├── 📂 lib/                       # Utilitários e integrações
│   ├── 📂 stores/                    # State Management
│   └── 📂 types/                     # Tipos TypeScript
├── 📂 public/                        # Arquivos estáticos
├── .env.example                      # Template de variáveis
├── .mcp.json                         # Configuração MCP para IAs
├── AGENTS.md                         # Sistema de agentes IA
├── CLAUDE.md                         # Instruções para Claude Code
├── GEMINI.md                         # Regras para Gemini/Antigravity
├── IMPLEMENTATION_GUIDE.md           # Guia de implementação padrão
└── package.json                      # Dependências
```

---

## ⚡ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

| Ferramenta | Versão mínima | Como verificar |
|---|---|---|
| 🟢 [Node.js](https://nodejs.org/) | 18.x ou superior | `node --version` |
| 📦 [npm](https://www.npmjs.com/) | 9.x ou superior | `npm --version` |
| 🐙 [Git](https://git-scm.com/) | qualquer | `git --version` |

<!-- CUSTOMIZE: Liste as contas/serviços necessários -->
Você também precisará de contas nos seguintes serviços:

- 🔐 [Auth Provider] — Autenticação
- 🗄️ [Database Provider] — Banco de dados
- 💳 [Payment Provider] — Pagamentos (se aplicável)
- 📤 [Upload Provider] — Upload de arquivos (se aplicável)

---

## 🚀 Como Rodar

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/{seu-usuario}/{nome-do-repo}.git
cd {nome-do-repo}
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

```bash
cp .env.example .env
# Preencha os valores no arquivo .env
```

### 4️⃣ Sincronize o banco de dados

```bash
# Empurra o schema para o banco (desenvolvimento)
npx drizzle-kit push

# OU aplique migrações (produção)
npx drizzle-kit migrate
```

### 5️⃣ (Opcional) Popule com dados iniciais

```bash
npx tsx src/db/seed.ts
```

### 6️⃣ Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 7️⃣ Acesse no navegador

<!-- CUSTOMIZE: Liste as URLs do projeto -->

| Área | URL |
|---|---|
| Página Principal | [http://localhost:3000](http://localhost:3000) |
| Dashboard | [http://localhost:3000/dashboard](http://localhost:3000/dashboard) |

---

## 🔑 Variáveis de Ambiente

Veja o arquivo [.env.example](./.env.example) para a lista completa de variáveis necessárias.

```bash
cp .env.example .env
```

> ⚠️ **Importante:** Nunca commite o arquivo `.env` no Git. Ele já está no `.gitignore`.

---

## 🗄️ Banco de Dados

<!-- CUSTOMIZE: Descreva o banco de dados e o ORM do seu projeto -->

O projeto usa **{ORM}** com **{DATABASE}**. O schema está definido em `src/db/schema.ts`.

### 📊 Modelo de Dados

<!-- CUSTOMIZE: Desenhe o modelo de dados do seu projeto -->

```
┌──────────────┐     ┌──────────────┐
│   table_1    │────<│   table_2    │
│              │     │              │
│ id           │     │ id           │
│ name         │     │ table_1_id   │
│ created_at   │     │ created_at   │
└──────────────┘     └──────────────┘
```

### 🔧 Comandos do ORM

<!-- CUSTOMIZE: Liste os comandos do seu ORM -->

```bash
# Visualizar o schema
npx drizzle-kit studio

# Push do schema para o banco
npx drizzle-kit push

# Gerar migrações
npx drizzle-kit generate

# Aplicar migrações
npx drizzle-kit migrate
```

---

## 📡 API Routes

<!-- CUSTOMIZE: Liste todas as rotas da sua API -->

Todas as rotas da API estão em `src/app/api/`:

| Método | Rota | Descrição |
|---|---|---|
| `GET/POST` | `/api/resource` | Listar / Criar |
| `PATCH/DELETE` | `/api/resource/[id]` | Atualizar / Deletar |

---

## 🧩 Principais Componentes

<!-- CUSTOMIZE: Liste os componentes principais do projeto -->

| Componente | Local | Descrição |
|---|---|---|
| Componente 1 | `src/components/...` | Descrição |
| Componente 2 | `src/components/...` | Descrição |

---

## 🧪 Testes

<!-- CUSTOMIZE: Descreva a estratégia de testes e os comandos do seu runner -->

| Tipo | Ferramenta | Comando |
|---|---|---|
| Unitário | <!-- e.g. Vitest / Jest --> | `npm test` |
| Integração | <!-- e.g. Vitest --> | `npm run test:integration` |
| E2E | <!-- e.g. Playwright --> | `npm run test:e2e` |

```bash
# Rodar todos os testes
npm test

# Modo watch durante o desenvolvimento
npm test -- --watch

# Cobertura
npm test -- --coverage
```

---

## 🤖 Sistema de IA

Este projeto utiliza um **kit de agentes IA** na pasta `.agent/` para auxiliar no desenvolvimento. Os seguintes arquivos configuram o comportamento das IAs:

| Arquivo | Propósito |
|---|---|
| [AGENTS.md](./AGENTS.md) | Inventário de agentes, skills e workflows |
| [CLAUDE.md](./CLAUDE.md) | Instruções para o Claude Code |
| [GEMINI.md](./GEMINI.md) | Regras para Gemini CLI / Antigravity |
| [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) | Workflow padrão de implementação |
| [.mcp.json](./.mcp.json) | Configuração dos MCP servers |
| [.env.example](./.env.example) | Template de variáveis de ambiente |

### Recursos Disponíveis

- **15 Agentes Especialistas** — Frontend, Backend, Database, DevOps, Security, etc.
- **30 Skills Modulares** — React/Next.js, Tailwind, API patterns, Clean Code, etc.
- **12 Workflows** — `/create`, `/debug`, `/deploy`, `/plan`, `/test`, etc.
- **MCP Tools** — Chrome DevTools, PageSpeed, Context7, Tavily

> Para mais detalhes, consulte o [AGENTS.md](./AGENTS.md).

---

## 🌐 Deploy

<!-- CUSTOMIZE: Descreva o processo de deploy do seu projeto -->

<!-- CUSTOMIZE: Vercel é só um exemplo. Documente a plataforma realmente usada -->
<!-- (Docker, VPS, Cloudflare Pages, Railway, AWS, etc.). -->

### Vercel (Exemplo)

1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente no painel
3. Deploy automático a cada push na `main`

```bash
# Build de produção local (para testar)
npm run build
npm run start
```

### ⚙️ Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | 🔄 Inicia o servidor de desenvolvimento |
| `npm run build` | 📦 Gera o build de produção |
| `npm run start` | 🚀 Inicia o servidor de produção |
| `npm run lint` | 🔍 Executa o ESLint |

---

## 🐛 Troubleshooting

<!-- CUSTOMIZE: Liste os erros mais comuns de setup e como resolvê-los -->

<details>
<summary><strong>Erro ao conectar no banco de dados</strong></summary>

Verifique se a `DATABASE_URL` no `.env` está correta e se o banco está acessível.
</details>

<details>
<summary><strong>Variáveis de ambiente não carregam</strong></summary>

Confirme que o arquivo é `.env` (e não `.env.example`) e reinicie o servidor de desenvolvimento.
</details>

<details>
<summary><strong>Erro de build / TypeScript</strong></summary>

Rode `npm run lint` e `npm run build` localmente para ver os erros detalhados.
</details>

---

## 🗺️ Roadmap

<!-- CUSTOMIZE: Liste o que está planejado. Use [x] para itens concluídos -->

- [ ] Funcionalidade planejada 1
- [ ] Funcionalidade planejada 2
- [ ] Melhoria futura

---

## 🤝 Contribuição

<!-- CUSTOMIZE: Ajuste ao fluxo do time (mesmo que interno) -->

1. Crie uma branch a partir da `main`: `git checkout -b feat/minha-feature`
2. Siga os padrões de código definidos em [CLAUDE.md](./CLAUDE.md) e [GEMINI.md](./GEMINI.md)
3. Use commits semânticos (`feat:`, `fix:`, `docs:`, `refactor:`...)
4. Garanta que `npm run lint`, `npm run build` e `npm test` passam
5. Abra um Pull Request descrevendo a mudança

---

## 📄 Licença

<!-- CUSTOMIZE: Defina a licença real do projeto -->

Projeto **privado e proprietário**. Todos os direitos reservados. Uso, cópia ou distribuição não autorizados são proibidos.

---

## 📚 Referências

<!-- CUSTOMIZE: Atualize com as referências do seu projeto -->

- 📖 [Documentação Next.js](https://nextjs.org/docs)
- 📖 [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- 📖 [Documentação TypeScript](https://typescriptlang.org/docs)

---

<div align="center">

Desenvolvido com precisão para **{NOME_DO_PROJETO}**

</div>
