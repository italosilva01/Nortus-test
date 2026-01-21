# 🚀 Nortus Data Warehouse - Monorepo

Monorepo contendo a aplicação Nortus com Frontend (Next.js) e Backend (Node.js/Express).

## 📁 Estrutura do Projeto

```
nortus-dw/
├── apps/
│   ├── frontend/          # Aplicação Next.js (Dashboard, Tickets, etc)
│   └── backend/           # API Node.js/Express
├── pnpm-workspace.yaml    # Configuração do monorepo
└── package.json           # Scripts do monorepo
```

## 🛠️ Tecnologias

### Frontend
- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização
- **Shadcn/ui** - Componentes
- **NextAuth** - Autenticação
- **Zustand** - Gerenciamento de estado
- **Next-intl** - Internacionalização

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 20.0.0
- pnpm >= 9.0.0

### Instalação

```bash
# Instalar todas as dependências do monorepo
pnpm install
```

### Desenvolvimento

```bash
# Rodar frontend e backend simultaneamente
pnpm dev

# Rodar apenas o frontend
pnpm dev:frontend

# Rodar apenas o backend
pnpm dev:backend
```

### Build

```bash
# Build de tudo
pnpm build

# Build apenas do frontend
pnpm build:frontend

# Build apenas do backend
pnpm build:backend
```

### Produção

```bash
pnpm start
```

## 📦 Workspaces

O projeto usa **pnpm workspaces** para gerenciar o monorepo:

- `@nortus/frontend` - Aplicação Next.js
- `@nortus/backend` - API Node.js

## 🧪 Testes

```bash
# Rodar testes do frontend
pnpm test
```

## 📝 Convenção de Commits

Seguimos a convenção **Conventional Commits**:

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
perf: performance
test: testes
build: build/dependências
ci: CI/CD
chore: manutenção
```

Exemplos:
```bash
git commit -m "feat(backend): adiciona endpoint de tickets"
git commit -m "fix(frontend): corrige cálculo de variação"
git commit -m "docs: atualiza README com instruções"
```

## 📚 Documentação

- [Frontend README](./apps/frontend/README.md)
- [Backend README](./apps/backend/README.md)

## 🔗 URLs Locais

- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Backend Health: http://localhost:3001/api/health

## 👥 Contribuindo

1. Crie uma branch: `git checkout -b feature/nova-feature`
2. Commit suas mudanças: `git commit -m "feat: adiciona nova feature"`
3. Push para a branch: `git push origin feature/nova-feature`
4. Abra um Pull Request

## 📄 Licença

Este projeto é privado.
