# {NOME_DO_PROJETO} — Plano de Implementação

<!-- Este é um template. A IA deve preencher este documento com base nas decisões do projeto. -->

## Visão Geral

<!-- CUSTOMIZE: Descreva o projeto e seu contexto -->
{DESCRIÇÃO_DO_PROJETO}: aplicação {TIPO} para {PÚBLICO_ALVO}.

1. **{ÁREA_1}** — Descrição do que esta área faz
2. **{ÁREA_2}** — Descrição do que esta área faz

---

## Decisões Confirmadas

<!-- CUSTOMIZE: Preencha com as decisões técnicas do projeto -->

| Decisão | Resposta |
|---|---|
| **Framework** | <!-- e.g. Next.js 16 (App Router) --> |
| **Styling** | <!-- e.g. Tailwind CSS v4 + shadcn/ui --> |
| **Database** | <!-- e.g. Neon PostgreSQL + Drizzle ORM --> |
| **Auth** | <!-- e.g. Clerk (redirect + webhook sync) --> |
| **Pagamentos** | <!-- e.g. Asaas (redirect) / Stripe / N/A --> |
| **Upload** | <!-- e.g. UploadThing / Cloudinary / N/A --> |
| **Frete/Maps** | <!-- e.g. Google Routes API / N/A --> |
| **State** | <!-- e.g. Zustand + localStorage --> |
| **Deploy** | <!-- e.g. Vercel --> |

> [!IMPORTANT]
> **Chaves de API necessárias** (adicione no `.env`, veja `.env.example`):
> <!-- CUSTOMIZE: Liste todas as chaves de API necessárias -->
> - `DATABASE_URL` — Connection string do banco
> - `CLERK_SECRET_KEY` — Autenticação
> - ... (adicione conforme necessário)

---

## Categorias / Entidades Principais

<!-- CUSTOMIZE: Liste as entidades/categorias do domínio do projeto -->

| # | Nome | Tipo |
|---|---|---|
| 1 | <!-- entidade --> | <!-- tipo --> |
| 2 | <!-- entidade --> | <!-- tipo --> |

---

## Stack Técnica

<!-- CUSTOMIZE: Preencha com as tecnologias escolhidas -->

| Camada | Tecnologia |
|---|---|
| Framework | <!-- e.g. Next.js 16 (App Router + Turbopack) --> |
| Linguagem | <!-- e.g. TypeScript 5 --> |
| UI | <!-- e.g. shadcn/ui + Tailwind CSS v4 --> |
| Autenticação | <!-- e.g. Clerk --> |
| Banco de dados | <!-- e.g. Neon PostgreSQL --> |
| ORM | <!-- e.g. Drizzle ORM --> |
| Pagamentos | <!-- e.g. Asaas / Stripe --> |
| Upload | <!-- e.g. UploadThing --> |
| Estado local | <!-- e.g. Zustand --> |
| Deploy | <!-- e.g. Vercel --> |

---

## Proposed Changes

### Fase 1 — Inicialização do Projeto

#### [NEW] Projeto e dependências

```bash
# CUSTOMIZE: Adapte o comando de inicialização ao seu framework
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```

Dependências:
```bash
# CUSTOMIZE: Liste as dependências do seu projeto
npm install {dependências_do_projeto}
npm install -D {dependências_dev}
```

#### [NEW] Estrutura de diretórios

<!-- CUSTOMIZE: Defina a estrutura de pastas do projeto -->

```
src/
├── app/
│   ├── (public)/              # Rotas públicas
│   ├── (dashboard)/           # Rotas admin (auth required)
│   ├── api/                   # API Routes
│   │   ├── webhooks/          # Webhooks
│   │   └── ...                # Outros endpoints
│   ├── sign-in/               # Login
│   ├── sign-up/               # Cadastro
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                    # shadcn/ui
│   ├── {area1}/               # Componentes da área 1
│   └── shared/                # Componentes compartilhados
├── db/
│   ├── index.ts               # Conexão
│   ├── schema.ts              # Tabelas
│   └── seed.ts                # Seed
├── lib/                       # Utilitários e integrações
├── stores/                    # State management
└── types/                     # Tipos TypeScript
```

---

### Fase 2 — Schema do Banco de Dados

#### [NEW] `src/db/schema.ts`

<!-- CUSTOMIZE: Desenhe o modelo de dados do projeto -->

```
┌─────────────────┐     ┌──────────────────┐
│   table_1       │     │    table_2        │
├─────────────────┤     ├──────────────────┤
│ id (uuid PK)    │◄────│ table_1_id (FK)  │
│ name            │     │ id (uuid PK)     │
│ created_at      │     │ ...              │
│ updated_at      │     │ created_at       │
└─────────────────┘     └──────────────────┘
```

#### [NEW] `src/db/seed.ts`

Seed com:
<!-- CUSTOMIZE: Liste os dados iniciais -->
- Dados iniciais (categorias, configurações, etc.)

---

### Fase 3 — Autenticação e Autorização

#### [NEW] Middleware / Auth

<!-- CUSTOMIZE: Defina o sistema de autenticação e permissões -->

- Rotas protegidas: `/dashboard/*`
- Roles e permissões:

| Funcionalidade | Admin | User |
|---|:---:|:---:|
| Dashboard | ✅ | ❌ |
| Conteúdo | ✅ | ❌ |

---

### Fase 4 — Interface Pública

<!-- CUSTOMIZE: Descreva as páginas e componentes da interface pública -->

#### [NEW] Página principal
- Descrição do que a página faz

#### [NEW] Componentes
- Descrição dos componentes principais

---

### Fase 5 — Fluxo Principal (Checkout / Formulário / etc.)

<!-- CUSTOMIZE: Descreva o fluxo principal do projeto -->
<!-- Exemplos: checkout de e-commerce, formulário de contato, fluxo de onboarding -->

#### [NEW] Etapa 1
- Descrição

#### [NEW] Etapa 2
- Descrição

---

### Fase 6 — Dashboard Administrativo

<!-- CUSTOMIZE: Descreva as páginas do painel admin -->

#### [NEW] Páginas do Dashboard
- Descrição de cada página admin

---

### Fase 7 — API Routes

<!-- CUSTOMIZE: Liste os endpoints da API -->

| Endpoint | Métodos | Auth |
|---|---|---|
| `/api/resource` | GET, POST | Público / Auth |
| `/api/resource/[id]` | GET, PATCH, DELETE | Auth |
| `/api/webhooks/provider` | POST | Webhook secret |

---

### Fase 8 — Integrações Externas

<!-- CUSTOMIZE: Descreva as integrações com serviços externos -->

#### [NEW] `src/lib/{integration}.ts`
- Descrição da integração

---

## Verification Plan

### Automated

1. `npx drizzle-kit push` — schema válido
2. `npm run build` — TypeScript + Framework sem erros
3. `npm run lint` — Sem problemas de lint
4. `python .agent/scripts/checklist.py .` — Auditoria geral

### Manual

<!-- CUSTOMIZE: Liste os testes manuais necessários -->

1. **Fluxo principal**: Testar o fluxo completo do usuário
2. **Responsividade**: Mobile, tablet, desktop
3. **Autenticação**: Login com diferentes roles
4. **Integrações**: Testar webhooks e APIs externas
5. **Performance**: Lighthouse / PageSpeed audit
