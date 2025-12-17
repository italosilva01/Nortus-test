# 🚀 Nortus Backend - Node.js API

Backend da aplicação Nortus desenvolvido com Node.js, Express e TypeScript.

## 📋 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Tipagem estática
- **Zod** - Validação de schemas
- **CORS** - Configuração de segurança

## 🛠️ Instalação

```bash
# Instalar dependências (na raiz do monorepo)
pnpm install

# Ou apenas para o backend
pnpm --filter @nortus/backend install
```

## 🚀 Executar

```bash
# Desenvolvimento
pnpm dev

# Build
pnpm build

# Produção
pnpm start
```

## 📁 Estrutura de Pastas

```
apps/backend/
├── src/
│   ├── controllers/    # Controladores (lógica de requisição/resposta)
│   ├── services/       # Lógica de negócio
│   ├── routes/         # Definição de rotas
│   ├── middlewares/    # Middlewares customizados
│   ├── config/         # Configurações
│   └── server.ts       # Arquivo principal
├── package.json
├── tsconfig.json
└── .env.example
```

## 📝 Próximos Passos

1. Criar `src/server.ts` - Servidor Express
2. Adicionar rotas em `src/routes/`
3. Criar controllers em `src/controllers/`
4. Implementar services em `src/services/`
5. Configurar banco de dados (Prisma/TypeORM)
6. Adicionar autenticação JWT
7. Implementar testes

## 🔗 Endpoints (a implementar)

```
GET    /api/health           - Health check
GET    /api/tickets          - Listar tickets
GET    /api/tickets/:id      - Buscar ticket por ID
POST   /api/tickets          - Criar ticket
PUT    /api/tickets/:id      - Atualizar ticket
DELETE /api/tickets/:id      - Deletar ticket
GET    /api/dashboard        - Dados do dashboard
```

## 🎓 Recursos para Estudo

- [Express.js Docs](https://expressjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [REST API Design](https://restfulapi.net/)



