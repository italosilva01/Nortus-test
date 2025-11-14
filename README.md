
# Notus-dw

A Nortus-dw é uma solução ficticia de inteligência artificial para times de vendas e atendimentos que utilza fato baseado em coomportamentos e analise de perfil. O projeto foi desenvolvido como um teste para a loomi.

## Decisões

### Github & Kanban
Usei o Kanban para gerenciar minhas tarefas diretamente no GitHub.

Por que essas decisões?
Escolhi o GitHub porque é onde o projeto e o repositório estão hospedados. Assim, consigo visualizar o código, as pull requests e o board em um só lugar, sem precisar alternar entre plataformas.

#### Kanban
Optei pelo Kanban porque, analisando o contexto, ele é a melhor forma de acompanhar o andamento das tarefas e manter o foco nas features em desenvolvimento. Como estou trabalhando sozinho neste projeto, o Kanban facilita o controle do progresso e a organização das demandas.


## Decisões técnicas

### Eslint
Além de ser uma das ferramentas obrigatórias, as configurações foram definidas para evitar erros comuns que costumo cometer no código, por exemplo, esquecer de usar o optional chaining.# Nortus-test

### Shadcn
Escolhi o shadcn/ui por ser uma biblioteca de componentes já prontos, de alta qualidade e com fácil integração ao Tailwind CSS. Essa escolha facilita a implementação e agiliza o processo de customização da interface, tornando o desenvolvimento mais rápido e padronizado.

### IA
Em relação ao uso de IA, utilizei o Cursor com o agente Claude Sonnet 4.5 para gerar trechos de código, esclarecer dúvidas e explorar diferentes abordagens de implementação.


## Desafios do projeto

Um dos desafios do projeto foi o uso do Tailwind CSS para a estilização. A ferramenta em si não é um problema, porém alguns requisitos do projeto, por exemplo a largura mínima de 1000px, dificultaram o processo.

Como o Tailwind segue a filosofia mobile-first, ele não fornece sugestões iniciais que facilitem a criação direta de uma interface fiel ao protótipo em breakpoints maiores. Isso tornou mais difícil começar pela resolução final desejada.

Para contornar essa situação, iniciei a estilização direto na resolução 2XL, que corresponde ao breakpoint mais próximo do que foi definido no Figma. A partir disso, fui reduzindo os breakpoints e ajustando o layout para garantir responsividade com resultados satisfatórios.