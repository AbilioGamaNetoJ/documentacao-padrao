# Documentação Padrão

> Kit de templates para padronizar a estrutura de documentação e configuração de agentes de IA em projetos de software.

Este repositório é um ponto de partida reutilizável que acelera a criação de novos projetos, fornecendo uma estrutura pronta de agentes de IA, skills, workflows e templates de documentação. Basta copiar as pastas para o seu projeto, preencher os templates e começar a usar.

O projeto é organizado em duas pastas principais:

---

## `DOCUMENTAÇÃO-PADRÃO/`

Contém o **kit completo de documentação e agentes de IA** para ser copiado para a raiz de qualquer projeto. Inclui tudo que um time precisa para documentar e guiar o desenvolvimento com auxilio de IA.

### O que tem dentro:

| Diretrio/Arquivo | Conteudo |
|---|---|
| `.agent/` | 15 agentes especialistas (frontend, backend, banco, devops, seguranca, etc.), 30 skills modulares (Next.js, Tailwind, APIs, testes, etc.) e 12 workflows (comandos como `/create`, `/debug`, `/deploy`) |
| `.specs/` | Templates de documentacao do projeto: visao, roadmap, stack, arquitetura, convencoes, features e tarefas rapidas |
| `.agent/scripts/` | Scripts Python para validacao e auditoria do projeto |
| `AGENTS.md` | Mapa de todos os agentes, skills e workflows disponiveis (ponto de entrada para IAs) |
| `GEMINI.md` | Regras globais de comportamento para ferramentas de IA |
| `CLAUDE.md` | Instrucoes especificas para o Claude Code |
| `IMPLEMENTATION_GUIDE.md` | Guia do fluxo padrao de trabalho com IA |
| `CHANGELOG.md` | Historico de versoes e mudancas do kit |
| `README.md` | Template de README para o projeto (com badges, indice, secoes prontas) |
| `.env.example` | Exemplo de variaveis de ambiente |

---

## `CONFIGURACOES PADROES/`

Contém as **configuracoes especificas para IDEs e ferramentas** que utilizam agentes de IA. Enquanto a `DOCUMENTACAO-PADRAO` e agnostica, esta pasta adapta o kit para ferramentas especificas.

### O que tem dentro:

| Diretorio/Arquivo | Conteudo |
|---|---|
| `.trae/skills/` | Os mesmos 30 skills e 15 agentes, mas no formato esperado pela IDE Trae |
| `.opencode/tools/` | Configuracao da ferramenta MCP PageSpeed para o OpenCode |
| `.mcp.json` | Configuracao de ferramentas MCP compartilhadas |

---

## Como Usar

1. Copie o conteudo de `DOCUMENTACAO-PADRAO/` para a raiz do seu projeto
2. Copie a ferramenta de IA desejada de `CONFIGURACOES PADROES/` (ex: `.trae/` para Trae, `.opencode/` para OpenCode)
3. Preencha os templates em `.specs/` com os dados do seu projeto
4. Personalize os agentes e skills em `AGENTS.md` conforme seu tech stack
5. Comece a usar comandos como `/create`, `/plan` e `/debug`
