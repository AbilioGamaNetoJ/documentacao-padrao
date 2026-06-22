# {NOME_DO_PROJETO} — Plano de Implementação

| Campo | Valor |
|---|---|
| **Status** | 🟡 Planejamento |
| **Versão do plano** | v1 |
| **Última atualização** | {AAAA-MM-DD} |
| **Responsável** | {NOME_DO_RESPONSÁVEL} |

---

## 1. Objetivo do Projeto

Descrever, de forma objetiva, o que o projeto precisa entregar, para quem e qual problema resolve.

**Resumo executivo**
- Tipo de solução: {site institucional / catálogo / landing page / portal / dashboard / sistema interno / app web / outro}
- Público principal: {público-alvo}
- Objetivo principal: {objetivo de negócio}
- Resultado esperado: {o que precisa estar funcionando ao final}

---

## 2. Contexto e Restrições

Registrar os limites que orientam as decisões técnicas e evitam expansão indevida de escopo.

### Restrições de negócio
- Orçamento: {faixa ou limite}
- Prazo: {data ou janela}
- Equipe disponível: {papéis e capacidade}
- Prioridade principal: {velocidade / baixo custo / escalabilidade / design / operação simples / outro}

### Restrições técnicas
- Plataformas-alvo: {web / mobile web / desktop / interno}
- Dependências obrigatórias: {se houver}
- Dependências proibidas: {se houver}
- Integrações já aprovadas: {somente o que estiver confirmado}
- Integrações ainda não aprovadas: {deixar explícito}

### Restrições operacionais
- Quem atualizará conteúdo após entrega: {cliente / time interno / terceiro}
- Nível de autonomia esperado do cliente: {baixo / médio / alto}
- Necessidade de documentação: {sim / não}
- Necessidade de treinamento: {sim / não}

---

## 3. Escopo

### ✅ Dentro do escopo
- {item 1}
- {item 2}
- {item 3}

### 🚫 Fora do escopo
- {item fora do escopo 1}
- {item fora do escopo 2}
- {item fora do escopo 3}

> Regra: tudo que não estiver explicitamente listado como “dentro do escopo” deve ser tratado como fora do escopo até nova aprovação.

---

## 4. Requisitos Funcionais

Listar o que a solução deve fazer, sem assumir tecnologia.

| ID | Requisito | Prioridade |
|---|---|---|
| RF-01 | {descrição do comportamento esperado} | Alta |
| RF-02 | {descrição do comportamento esperado} | Alta |
| RF-03 | {descrição do comportamento esperado} | Média |

---

## 5. Requisitos Não Funcionais

Listar atributos de qualidade e restrições arquiteturais.

| ID | Requisito | Meta |
|---|---|---|
| RNF-01 | Performance | {meta} |
| RNF-02 | Responsividade | {meta} |
| RNF-03 | Acessibilidade | {meta} |
| RNF-04 | SEO | {meta, se aplicável} |
| RNF-05 | Segurança | {meta} |
| RNF-06 | Manutenibilidade | {meta} |

---

## 6. Entidades / Blocos de Conteúdo / Domínios

Descrever os principais elementos do projeto sem presumir banco de dados ou estrutura interna específica.

| # | Nome | Descrição | Obrigatório |
|---|---|---|---|
| 1 | {entidade ou bloco} | {o que representa} | Sim |
| 2 | {entidade ou bloco} | {o que representa} | Sim |
| 3 | {entidade ou bloco} | {o que representa} | Não |

---

## 7. Arquitetura Proposta

Descrever a arquitetura em nível lógico, não como lista automática de ferramentas.

### Tipo de arquitetura
{Ex.: site estático com conteúdo gerenciável / aplicação web com área pública e área restrita / portal com integrações externas / outro}

### Componentes principais
- Interface do usuário
- Camada de conteúdo ou dados
- Camada de integrações
- Camada de publicação/deploy
- Camada de observabilidade, se necessária

### Fluxo principal do usuário
1. {etapa 1}
2. {etapa 2}
3. {etapa 3}
4. {etapa 4}

### Observações arquiteturais
- Escolher tecnologias apenas quando houver justificativa funcional, operacional ou financeira.
- Não introduzir componentes que não estejam claramente relacionados aos requisitos.
- Evitar complexidade estrutural não compatível com o orçamento, prazo e maturidade operacional do projeto.

---

## 8. Decisões Confirmadas

Preencher apenas com decisões já tomadas. Se algo ainda não estiver decidido, marcar como `A definir`.

| Tema | Decisão |
|---|---|
| Framework / Base de desenvolvimento | {A definir ou tecnologia aprovada} |
| Linguagem | {A definir ou tecnologia aprovada} |
| Estilização / UI | {A definir ou tecnologia aprovada} |
| Gestão de conteúdo | {A definir ou tecnologia aprovada} |
| Persistência de dados | {A definir ou N/A} |
| Autenticação | {A definir ou N/A} |
| Pagamentos | {A definir ou N/A} |
| Upload de arquivos | {A definir ou N/A} |
| Integrações externas | {A definir ou listar somente as aprovadas} |
| Deploy / Hospedagem | {A definir ou tecnologia aprovada} |
| Analytics | {A definir ou N/A} |

> Importante: não escolher ORM, gateway de pagamento, banco, auth provider, fila, cache ou serviços externos sem requisito explícito e decisão registrada.

---

## 9. Variáveis e Configurações

Listar apenas configurações realmente necessárias ao projeto.

| Chave | Obrigatória | Descrição |
|---|---|---|
| `{CHAVE_1}` | Sim | {descrição} |
| `{CHAVE_2}` | Não | {descrição} |

> Não inventar variáveis para serviços ainda não aprovados.

---

## 10. Fases de Implementação

Organizar a execução por fases reutilizáveis em qualquer projeto.

| # | Fase | Objetivo | Dependências | Status |
|---|---|---|---|:---:|
| 1 | Descoberta e detalhamento | Consolidar requisitos, escopo e restrições | — | ⬜ |
| 2 | Arquitetura e modelagem | Estruturar a solução e os blocos principais | Fase 1 | ⬜ |
| 3 | Setup do projeto | Preparar base técnica e organização inicial | Fase 2 | ⬜ |
| 4 | Implementação da interface | Construir telas, páginas e componentes | Fase 3 | ⬜ |
| 5 | Implementação do fluxo principal | Construir a jornada central do usuário | Fase 4 | ⬜ |
| 6 | Conteúdo / dados iniciais | Preparar cadastros, textos e ativos iniciais | Fase 4 | ⬜ |
| 7 | Integrações aprovadas | Implementar apenas integrações confirmadas | Fase 5 | ⬜ |
| 8 | Qualidade e conformidade | Validar testes, SEO, acessibilidade, segurança | Fase 6, 7 | ⬜ |
| 9 | Deploy e publicação | Publicar e validar ambiente final | Fase 8 | ⬜ |

---

## 11. Entregáveis por Fase

### Fase 1 — Descoberta e detalhamento
- Escopo revisado
- Requisitos funcionais e não funcionais definidos
- Restrições documentadas

### Fase 2 — Arquitetura e modelagem
- Arquitetura lógica definida
- Entidades / blocos principais mapeados
- Decisões confirmadas registradas

### Fase 3 — Setup do projeto
- Repositório estruturado
- Convenções definidas
- Ambiente inicial preparado

### Fase 4 — Implementação da interface
- Páginas principais
- Componentes reutilizáveis
- Responsividade base

### Fase 5 — Fluxo principal
- Jornada principal funcionando
- Estados de erro e vazio tratados
- Instrumentação mínima, se aprovada

### Fase 6 — Conteúdo / dados iniciais
- Conteúdo inicial publicado
- Revisão visual e textual
- Ativos organizados

### Fase 7 — Integrações aprovadas
- Integrações implementadas
- Tratamento de falhas definido
- Configurações documentadas

### Fase 8 — Qualidade e conformidade
- Build estável
- Revisões de qualidade concluídas
- Checklist de conformidade executado

### Fase 9 — Deploy e publicação
- Ambiente final publicado
- Verificação pós-publicação concluída
- Handover realizado

---

## 12. Riscos e Mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|---|:---:|:---:|---|
| {risco 1} | Alto/Médio/Baixo | Alta/Média/Baixa | {mitigação} |
| {risco 2} | Alto/Médio/Baixo | Alta/Média/Baixa | {mitigação} |

---

## 13. Decisões Arquiteturais Relevantes

Registrar apenas decisões significativas, com contexto e consequência, em linha com a prática de ADR. [web:48][web:51][web:57][web:60]

### ADR-001 — {Título da decisão}
- **Status:** Proposta / Aprovada / Rejeitada / Substituída
- **Contexto:** {qual problema levou à decisão}
- **Alternativas consideradas:** {opções consideradas}
- **Decisão:** {o que foi decidido}
- **Consequências:** {impactos positivos, riscos residuais e trade-offs}

---

## 14. Critérios de Conclusão (Definition of Done)

- [ ] Escopo implementado conforme definição aprovada
- [ ] Itens fora de escopo não foram incluídos sem autorização
- [ ] Build e validações principais executadas sem erro
- [ ] Configurações documentadas
- [ ] Conteúdo inicial validado
- [ ] Responsividade revisada
- [ ] Critérios de qualidade atendidos
- [ ] Publicação concluída
- [ ] Documentação mínima entregue

---

## 15. Plano de Verificação

### Verificação automatizada
1. Build do projeto sem erros
2. Lint sem erros críticos
3. Type-check, se aplicável
4. Testes automatizados, se previstos no escopo
5. Verificações de qualidade configuradas para o projeto

### Verificação manual
1. Validar fluxo principal do usuário
2. Validar interface em mobile, tablet e desktop
3. Validar conteúdo, links e estados de erro
4. Validar integrações aprovadas
5. Validar requisitos não funcionais prioritários

### Qualidade e conformidade

| Área | Meta |
|---|---|
| Performance | {meta} |
| Acessibilidade | {meta} |
| SEO | {meta ou N/A} |
| Segurança | {meta} |
| Operação / manutenção | {meta} |

---

## 16. Instruções para a IA

- Não assumir tecnologias que não estejam explicitamente aprovadas.
- Não introduzir ORM, banco relacional, gateway de pagamento, autenticação, filas, cache, painel administrativo ou integrações externas sem requisito explícito.
- Quando uma decisão não estiver definida, marcar como `A definir` em vez de inventar.
- Priorizar soluções compatíveis com o orçamento, prazo, escopo e capacidade operacional do projeto.
- Preferir simplicidade arquitetural quando múltiplas opções atenderem ao mesmo requisito.
- Explicitar riscos, trade-offs e dependências antes de propor componentes adicionais.
