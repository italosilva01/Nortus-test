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

## 🔐 Variáveis de ambiente

O projeto usa arquivos `.env` **por aplicação** (frontend e backend). Nunca commite arquivos `.env` com valores reais — use apenas os `.env.example` como modelo e mantenha `.env` no `.gitignore`.

### Configuração inicial

Copie os exemplos para criar seus arquivos locais:

```bash
cp apps/frontend/.env.example apps/frontend/.env
cp apps/backend/.env.example apps/backend/.env
```

Depois edite cada `.env` e preencha os valores (em especial as secrets). Na raiz do projeto existe um [.env.example](.env.example) com a referência consolidada de todas as variáveis.

### Frontend (`apps/frontend/.env`)

| Variável              | Obrigatório | Descrição                                                                      |
| --------------------- | ----------- | ------------------------------------------------------------------------------ |
| `NEXTAUTH_SECRET`     | Sim         | Secret para NextAuth (mín. 32 caracteres). Gerar com `openssl rand -base64 32` |
| `NEXTAUTH_URL`        | Sim         | URL do frontend (ex.: `http://localhost:3000`)                                 |
| `NEXT_PUBLIC_API_URL` | Sim         | URL base da API do backend (ex.: `http://localhost:3001/api`)                  |

Opcionais (no `.env.example` do frontend): `DATABASE_URL`, variáveis JWT (referência).

### Backend (`apps/backend/.env`)

| Variável     | Obrigatório        | Descrição                                                |
| ------------ | ------------------ | -------------------------------------------------------- |
| `PORT`       | Não (default 3001) | Porta do servidor                                        |
| `JWT_SECRET` | Sim                | Chave para assinatura de tokens JWT (mín. 32 caracteres) |

Opcionais: `JWT_EXPIRES_IN`, `JWT_REFRESH_EXPIRES_IN` (padrões no código: 15m e 7d).

### Segurança

- Não coloque valores reais de secrets no README nem em commits.
- Confirme que `apps/frontend/.env` e `apps/backend/.env` estão listados no `.gitignore`.

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
