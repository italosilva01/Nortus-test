
# Notus-dw

A Nortus-dw é uma solução ficticia de inteligência artificial para times de vendas e atendimentos que utilza fato baseado em coomportamentos e analise de perfil. O projeto foi desenvolvido como um teste para a loomi.

## 📋 Status do Projeto
### ✅ Features Implementadas
- [x] **Login** - Autenticação com validações e middleware
- [x] **Dashboard** - KPIs, gráficos e mapas interativos
- [ ] **Gestão de Tickets** - [status atual]
- [ ] **Chat** - [status atual]

## ⏰ Cronologia
- **Dia 1:** Setup + Login completo
- **Dia 2:** Dashboard [em andamento/completo]
- **Dia 3:** [planejado]
- **Dia 4:** [planejado]

## 🎯 Decisões

### Github & Kanban
Usei o Kanban para gerenciar minhas tarefas diretamente no GitHub.

Por que essas decisões?
Escolhi o GitHub porque é onde o projeto e o repositório estão hospedados. Assim, consigo visualizar o código, as pull requests e o board em um só lugar, sem precisar alternar entre plataformas.

#### Kanban
Optei pelo Kanban porque, analisando o contexto, ele é a melhor forma de acompanhar o andamento das tarefas e manter o foco nas features em desenvolvimento. Como estou trabalhando sozinho neste projeto, o Kanban facilita o controle do progresso e a organização das demandas.

## Contexto das Decisões Técnicas

Quis deixar registrado o contexto porque algumas das escolhas técnicas podem ser questionadas pela equipe, especialmente em cenários onde optei por soluções mais robustas, mesmo quando alternativas mais simples seriam possíveis.

É importante destacar que desenvolvi o projeto pensando em escalabilidade. Por isso, em vários pontos tomei decisões que priorizam uma base mais sólida para crescimento futuro, mesmo adicionando um pouco mais de complexidade no curto prazo.

Um exemplo disso é a escolha da arquitetura Feature-Sliced Design (FSD), que oferece uma estrutura mais organizada e preparada para evolução. Outro caso é a decisão de utilizar o Zustand para gerenciar os dados do dashboard.

Ao analisar o protótipo, percebi que esses dados não se repetiam em outras telas. Inicialmente, cheguei a considerar usar apenas useState ou até um contexto simples. Porém, avaliando a perspectiva de crescimento do projeto e a possibilidade de novas telas consumirem esses dados no futuro, optei por implementar diretamente com Zustand. Isso me permitiu criar uma solução mais próxima de um cenário real de expansão.

Em resumo, minhas decisões foram feitas pensando no horizonte do projeto, privilegiando uma base escalável e mais fácil de manter.

## Decisões técnicas

### Eslint
Além de ser uma das ferramentas obrigatórias, as configurações foram definidas para evitar erros comuns que costumo cometer no código, por exemplo, esquecer de usar o optional chaining.# Nortus-test

### Shadcn
Escolhi o shadcn/ui por ser uma biblioteca de componentes já prontos, de alta qualidade e com fácil integração ao Tailwind CSS. Essa escolha facilita a implementação e agiliza o processo de customização da interface, tornando o desenvolvimento mais rápido e padronizado.

### 🤖 IA
Em relação ao uso de IA, utilizei o Cursor com o agente Claude Sonnet 4.5 para gerar trechos de código, esclarecer dúvidas e explorar diferentes abordagens de implementação.

#### exemplo
Como exemplo, usei o cursor para gerar o layout default da aplicação ( com o header e o menu lateral) com o seguinte comando no modo agent:

`Quero que faça um layout padrão para toda a aplicação, menos para as rotas de auth. Esse layout vai ter um menu lateral e um header `

O agent gerou alguns arquivos e depois avaliei o que estava de acordo com o pedido e o que não queria no projeto. Depois foi necessários alterar a estilização gerada pela IA, pois não estava nem próxima ao figma

### Feature-Sliced Design (FSD)
Escolhi utilizar a arquitetura Feature-Sliced Design (FSD) por considerar que ela favorece a escalabilidade e se adapta bem a um projeto de médio a grande porte. Pensando na possibilidade de expansão futura, essa arquitetura já oferece uma estrutura robusta e organizada, facilitando tanto a evolução das funcionalidades quanto a manutenção do código.

Além disso, o FSD permite separar cada feature de forma independente, o que torna o fluxo de trabalho mais simples,especialmente importante já que estou desenvolvendo este projeto sozinho.

### useDashboardStore
Optei por criar o hook useDashboardStories de forma unificada porque a requisição do dashboard já retorna todos os dados juntos. Dessa forma, consigo exibir o skeleton de uma única vez, mantendo o carregamento consistente em toda a tela.

Cheguei a considerar uma abordagem dividida, separar a resposta da requisição em partes e processá-las individualmente. Porém, isso tornaria a implementação mais complexa e adicionaria uma dificuldade que, ao meu ver, não fazia parte da intenção original dos desenvolvedores do teste.

Por esse motivo, decidi criar um hook maior do que o habitual, priorizando simplicidade e coerência com o formato da API.

## Decisões de Priorização

### Funcionalidades Implementadas

Priorizei entregar features completas e funcionais:
- ✅ Sistema de filtros robusto (status, prioridade)
- ✅ CRUD de tickets com validações
- ✅ Visualizações de dados principais

### Funcionalidades Não Implementadas

Algumas otimizações e refinamentos ficaram pendentes 
devido ao prazo:
- Paginação de tabelas
- Filtros adicionais em visualizações
- Animações elaboradas

**Trade-off consciente:**
Preferi entregar features core bem implementadas do que 
adicionar funcionalidades complementares que comprometeriam 
a qualidade do essencial.

## Desafios do projeto

### Estilização

Um dos desafios do projeto foi o uso do Tailwind CSS para a estilização. A ferramenta em si não é um problema, porém alguns requisitos do projeto, por exemplo a largura mínima de 1000px, dificultaram o processo.

Como o Tailwind segue a filosofia mobile-first, ele não fornece sugestões iniciais que facilitem a criação direta de uma interface fiel ao protótipo em breakpoints maiores. Isso tornou mais difícil começar pela resolução final desejada.

Para contornar essa situação, iniciei a estilização direto na resolução 2XL, que corresponde ao breakpoint mais próximo do que foi definido no Figma. A partir disso, fui reduzindo os breakpoints e ajustando o layout para garantir responsividade com resultados satisfatórios.

### OpenLayers

Tive dificuldade ao trabalhar com o mapa do OpenLayers. Foi a primeira vez que utilizei essa ferramenta de mapas e, por isso, precisei de mais tempo para entender seu funcionamento e me adaptar à sua API.
