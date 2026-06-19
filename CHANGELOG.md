# Changelog

All notable changes to this template kit will be documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versions follow [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`
— `MAJOR` breaking changes · `MINOR` new features · `PATCH` fixes.

---

## [Unreleased]

> Changes staged for the next release go here.

---

## [1.1.0] — 2026-06-19

### Added

- `IMPLEMENTATION_PLAN.md` (renamed from `implementation_plan.md`): metadata table (status, version, date, owner), scope section (in/out), phase roadmap table with effort and dependencies, risks and mitigations table, Definition of Done checklist, and a quality verification table (Performance, Accessibility, SEO, Security).
- `README.md`: sections for Demo, Tests, Troubleshooting (collapsible `<details>`), Roadmap, Contributing, and License. Added CI badge placeholder and cross-references to `.agent/rules/GEMINI.md`.
- `GEMINI.md` (root): canonical note marking it as single source of truth for global rules; cross-reference to `.agent/rules/GEMINI.md` added to References block.
- `.agent/rules/GEMINI.md`: cross-reference back to root `GEMINI.md` for Language and Clean Code rules.

### Changed

- `implementation_plan.md` renamed to `IMPLEMENTATION_PLAN.md` to match the uppercase convention of all root-level docs (`CLAUDE.md`, `GEMINI.md`, `AGENTS.md`, etc.).
- `IMPLEMENTATION_PLAN.md`: all remaining English headings translated to Portuguese (`Proposed Changes` → `Plano de Execução`, `Verification Plan` → `Plano de Verificação`, `[NEW]` → `[NOVO]`, `Definition of Done` → `Critérios de Conclusão`).
- `.agent/rules/GEMINI.md`: Language and Clean Code sections now defer to root `GEMINI.md` instead of duplicating the rules.

### Fixed

- `.agent/agents/backend-specialist.md`: removed non-existent skills `python-patterns`, `rust-pro`, `powershell-windows`.
- `.agent/agents/devops-engineer.md`: removed non-existent skills `server-management`, `powershell-windows`.
- `.agent/agents/orchestrator.md`: removed non-existent skill `powershell-windows`.
- `.agent/agents/security-auditor.md`: removed non-existent skill `red-team-tactics`.
- `.agent/agents/test-engineer.md`: removed non-existent skill `tdd-workflow`.
- `.agent/agents/debugger.md`: added missing `tools` and `model` fields (only agent without them).
- `.agent/agents/explorer-agent.md`: replaced non-existent Claude Code tools `ViewCodeItem` and `FindByName` with `Read, Grep, Glob, Bash`.
- `.agent/skills/nextjs-react-expert/SKILL.md`: corrected `name` field from `react-best-practices` to `nextjs-react-expert` to match directory name.
- `.agent/workflows/caveman.md`: merged duplicate YAML frontmatter blocks into one valid block.
- `.agent/rules/GEMINI.md`: removed `game-developer` from Quick Reference (agent does not exist in the kit); removed phantom scripts `dependency_analyzer.py` and `bundle_analyzer.py`; added 6 real scripts missing from the table (`api_validator.py`, `type_coverage.py`, `geo_checker.py`, `i18n_checker.py`, `react_performance_checker.py`, `convert_rules.py`); updated total count from 12 to 16.

---

## [1.0.0] — 2026-06-19

### Added

- Initial release of the AI documentation template kit.
- Root docs: `README.md`, `CLAUDE.md`, `GEMINI.md`, `AGENTS.md`, `IMPLEMENTATION_GUIDE.md`, `implementation_plan.md`, `.env.example`, `.mcp.json`.
- Agent kit in `.agent/`: 15 specialist agents, 30 modular skills, 12 workflows, shared MCP tools, validation scripts, and architecture documentation.

---

[Unreleased]: https://github.com/{seu-usuario}/{nome-do-repo}/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/{seu-usuario}/{nome-do-repo}/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/{seu-usuario}/{nome-do-repo}/releases/tag/v1.0.0
