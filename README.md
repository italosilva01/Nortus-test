

# Nortus-dw

A Nortus-dw é uma solução fictícia de inteligência artificial para times de vendas e atendimentos que utiliza dados baseados em comportamentos e análise de perfil. O projeto foi desenvolvido como um teste para a loomi.

## 🛠️  Tecnologias

### Framework e linguagem
- **Next.js** (16.0.2) - Framework React para produção
- **React** (19.2.0) - Biblioteca JavaScript para construção de interfaces
- **TypeScript** (^5) - Superset do JavaScript com tipagem estática

### Estilização e UI
- **Tailwind CSS** (^4) - Framework CSS utility-first
- **Shadcn/ui** - Biblioteca de componentes baseada em Radix UI
- **Radix UI** - Componentes primitivos 
- **Framer Motion** (^12.23.24) - Biblioteca de animações
- **Lucide React** (^0.553.0) - Biblioteca de ícones
- **clsx** (^2.1.1) - Utilitário para construção de classes CSS

### Gerenciamento de Estado e Formulários
- **Zustand** (^5.0.8) - Biblioteca de gerenciamento de estado
- **React Hook Form** (^7.66.0) - Biblioteca para gerenciamento de formulários
- **Zod** (^4.1.12) - Biblioteca de validação de schemas TypeScript-first
- **@hookform/resolvers** (^5.2.2) - Resolvers para integração Zod + React Hook Form

### Autenticação e Internacionalização
- **NextAuth.js** (5.0.0-beta.30) - Autenticação completa para Next.js
- **next-intl** (^4.5.2) - Internacionalização (i18n) para Next.js

### Gráficos e Visualizações
- **ApexCharts** (^5.3.6) - Biblioteca de gráficos interativos
- **react-apexcharts** (^1.8.0) - Wrapper React para ApexCharts
- **OpenLayers (ol)** (^10.7.0) - Biblioteca de mapas interativos

### HTTP e Utilitários
- **Axios** (^1.13.2) - Cliente HTTP baseado em Promises
- **UUID** (^13.0.0) - Geração de identificadores únicos
- **country-flag-icons** (^1.5.21) - Ícones de bandeiras de países

### Notificações e UI Auxiliar
- **Sonner** (^2.0.7) - Biblioteca de toasts/notificações
- **cmdk** (^1.1.1) - Command menu component

### Ferramentas de Desenvolvimento
- **ESLint** (^9) - Linter para JavaScript/TypeScript
- **Jest** (^30.2.0) - Framework de testes
- **Testing Library** - Utilitários para testes:
  - `@testing-library/react` - Utilitários de teste para React
  - `@testing-library/jest-dom` - Matchers customizados para Jest
  - `@testing-library/dom` - Utilitários de teste para DOM
## 📋 Status do Projeto

### ✅ Features Implementadas

#### **Login**
- Inputs com validação  
- Exibição/ocultação de senha  
- Autenticação com regras de validação  
- Middleware para controle de acesso  

#### **Dashboard**
- Gráficos de ARPU, Retenção, Churn e Conversão  
- Mapa interativo de clientes  
- Mapa de impacto segmentado por tipo  

#### **Gestão de Tickets**
- Listagem clara com indicação de prioridade e status  
- Filtros por status, prioridade e responsável  
- Acesso rápido às ações: editar e visualizar detalhes  
- Adição de novos tickets à listagem  
- Validação completa de todos os campos do formulário de criação  

### 🚧 Em Desenvolvimento
- **Chat** — *0% concluído*

### Observações:
- Animações realizadas em alguns elementos
- Deploy na Vercel
- Salvando cookie com o JWT do client
- Salvando dados do usuário no localStorage
- Loading Skeletons e estados vazios em Dashboard e na tela de gerenciamento de tickets
- Internacionalização implementada
## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ 
- pnpm instalado

### Instalação
```
# Instalar dependências

pnpm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Edite o arquivo .env.local e configure as variáveis necessárias
# Para gerar um NEXTAUTH_SECRET seguro, execute:
# openssl rand -base64 32

# Executar em desenvolvimento
pnpm dev

A aplicação estará disponível em `http://localhost:3000`

### Outros comandos disponíveis

pnpm build    # Build para produção
pnpm start    # Executar build de produção
pnpm lint     # Executar linter
pnpm test     # Executar testes

```
## ⏰ Cronologia
- **Dia 1:** Setup + Login completo
- **Dia 2:** Dashboard [em andamento]
- **Dia 3:** Dashboard completo + Gerenciamento de ticket [em andamento]
- **Dia 4:** Gerenciamento de ticket completo + deploy + ajuste final ao README

## 🚀 Deploy

**URL:** https://nortus-test-francisco-italo.vercel.app/

⚠️ **Nota:**  
Os componentes estão sendo renderizados com dimensões ligeiramente diferentes em produção, aparentam maiores do que no ambiente de desenvolvimento.  
Atualmente estou investigando um possível problema relacionado ao build de CSS. Localmente, tudo funciona perfeitamente.

Para testar com a estilização 100% fiel, recomendo rodar o projeto localmente.



## 🎯 Decisões

### Github & Kanban
Usei o Kanban para gerenciar minhas tarefas diretamente no GitHub.

Por que essas decisões?
Escolhi o GitHub porque é onde o projeto e o repositório estão hospedados. Assim, consigo visualizar o código, as pull requests e o board em um só lugar, sem precisar alternar entre plataformas.

#### Kanban
Optei pelo Kanban porque, analisando o contexto, ele é a melhor forma de acompanhar o andamento das tarefas e manter o foco nas features em desenvolvimento. Como estou trabalhando sozinho neste projeto, o Kanban facilita o controle do progresso e a organização das demandas.


## Decisões técnicas

### Eslint
Além de ser uma das ferramentas obrigatórias, as configurações foram definidas para evitar erros comuns que costumo cometer no código, por exemplo, esquecer de usar o optional chaining.

### Shadcn
Escolhi o shadcn/ui por ser uma biblioteca de componentes já prontos, de alta qualidade e com fácil integração ao Tailwind CSS. Essa escolha facilita a implementação e agiliza o processo de customização da interface, tornando o desenvolvimento mais rápido e padronizado.

### 🤖 IA
Em relação ao uso de IA, utilizei as seguintes ferramentas:
- **Cursor com o agente Claude Sonnet 4.5** para gerar trechos de código, esclarecer dúvidas e explorar diferentes abordagens de implementação.

- **Cursor modo Ask** para conhecer outras abordagens para algumas problemas enfrentados durante o desenvolvimento

- **Chatgpt** para auxilio na escrita de textos do README.

- **Google Studio (Google Gemini)** para traduzir o objeto de internacionalização para inglês. (LLM treinada por mim mesmo) 

#### Exemplos
**Exemplo 1**

Usei o Cursor para gerar o layout padrão da aplicação (com o header e o menu lateral) com o seguinte comando no modo agent:

`Quero que faça um layout padrão para toda a aplicação, menos para as rotas de auth. Esse layout vai ter um menu lateral e um header `

O agent gerou alguns arquivos e depois avaliei o que estava de acordo com o pedido e o que não queria no projeto. Depois foi necessário alterar a estilização gerada pela IA, pois não estava nem próxima ao Figma.

**Exemplo 2**

Fazendo a implementação do Mapa de clientes, não sabia quais eram as abordagens para adicionar ícones nos pontos de atenção no mapa. Fiz o seguinte comando no modo ASK:

`Existe outras abordagens para adicionar os ícones ao feature.setStyle ?`

Por sua vez, ela apresentou algumas abordagens possíveis e eu escolhi qual era a mais interessante e implementei.
#### Decisão baseada pela IA

Utilizar selectors do Zustand para manipular apenas os tickets. Identifiquei que estavam ocorrendo renderizações desnecessárias: ao atualizar a listagem de tickets, todos os dados retornados pelo fetch causavam re-renderizações em componentes não relacionados.

### Feature-Sliced Design (FSD)
Escolhi utilizar a arquitetura Feature-Sliced Design (FSD) por considerar que ela favorece a escalabilidade e se adapta bem a um projeto de médio a grande porte. Pensando na possibilidade de expansão futura, essa arquitetura já oferece uma estrutura robusta e organizada, facilitando tanto a evolução das funcionalidades quanto a manutenção do código.

Além disso, o FSD permite separar cada feature de forma independente, o que torna o fluxo de trabalho mais simples, especialmente importante já que estou desenvolvendo este projeto sozinho.

### useDashboardStore
Optei por criar o hook useDashboardStore de forma unificada porque a requisição do dashboard já retorna todos os dados juntos. Dessa forma, consigo exibir o skeleton de uma única vez, mantendo o carregamento consistente em toda a tela.

Cheguei a considerar uma abordagem dividida, separar a resposta da requisição em partes e processá-las individualmente. Porém, isso tornaria a implementação mais complexa e adicionaria uma dificuldade que, ao meu ver, não fazia parte da intenção original dos desenvolvedores do teste.

Por esse motivo, decidi criar um hook maior do que o habitual, priorizando simplicidade e coerência com o formato da API.

### Autenticação - Credentials Provider

Escolhi implementar autenticação usando o provider Credentials do NextAuth ao invés de OAuth (Google, GitHub, etc.) porque o projeto utiliza uma API própria para autenticação.

A API já retorna um `accessToken` após validação das credenciais, então faz sentido manter essa integração direta. O NextAuth gerencia a sessão JWT e o middleware de proteção de rotas, enquanto a validação real das credenciais é feita pela API externa.


### Gerenciamento de Estado - Tickets

Optei por uma arquitetura híbrida para o módulo de tickets: Zustand para gerenciar os dados globais (listagem, loading, modal) e um hook customizado `useTicketFilters` para a lógica de filtros.

**Por que separar?**

Inicialmente, considerei colocar os filtros diretamente no store do Zustand. Porém, percebi que os filtros eram usados apenas pelo componente de filtro da listagem e toda a lógica dos filtros estava declarada na page de gerenciamento de ticket. Para solucionar isso, criei um hook para ser responsável por toda a lógica de filtragem e disponibilizar as funções e states para os outros componentes.

Além disso, utilizo seletores específicos do Zustand (`state.data?.tickets`) para evitar re-renders desnecessários em componentes que não precisam de toda a estrutura do store.
## Decisões de Priorização

### Funcionalidades Implementadas

Priorizei entregar features completas e funcionais:
- ✅ Sistema de filtros robusto (status, prioridade)
- ✅ CRUD de tickets com validações
- ✅ Visualizações de dados principais

### Funcionalidades Não Implementadas

Algumas otimizações e refinamentos ficaram pendentes devido ao prazo:
- Paginação de tabelas
- Filtros adicionais em visualizações
- Animações elaboradas

**Trade-off consciente:**
Preferi entregar features core bem implementadas do que adicionar funcionalidades complementares que comprometeriam a qualidade do essencial.

## 🧩 Desafios do projeto

### Estilização

Um dos desafios do projeto foi o uso do Tailwind CSS para a estilização. A ferramenta em si não é um problema, porém alguns requisitos do projeto, por exemplo a largura mínima de 1000px, dificultaram o processo.

Como o Tailwind segue a filosofia mobile-first, ele não fornece sugestões iniciais que facilitem a criação direta de uma interface fiel ao protótipo em breakpoints maiores. Isso tornou mais difícil começar pela resolução final desejada.

Para contornar essa situação, iniciei a estilização direto na resolução 2XL, que corresponde ao breakpoint mais próximo do que foi definido no Figma. A partir disso, fui reduzindo os breakpoints e ajustando o layout para garantir responsividade com resultados satisfatórios.

### OpenLayers

Tive dificuldade ao trabalhar com o mapa do OpenLayers. Foi a primeira vez que utilizei essa ferramenta de mapas e, por isso, precisei de mais tempo para entender seu funcionamento e me adaptar à sua API. No fim, tudo ocorreu bem.

## 📚 Aprendizados

Um dos aprendizados deste projeto foi utilizar Zustand em conjunto com Zod em um contexto de média escala. Até então, eu só havia trabalhado com essas ferramentas em projetos menores e experimentais.

Durante o desenvolvimento, foi interessante explorar abordagens que aproveitassem melhor as particularidades do Zustand, especialmente o uso de seletores de estado.

Por exemplo, no módulo de gerenciamento de tickets, percebi que poderia armazenar todo o estado de uma única vez e, posteriormente, acessar cada parte desse estado por meio de seletores específicos. Essa abordagem reduz renders desnecessários e melhora o desempenho da aplicação.
