# Superpower: Brainstorming

**Use isto ANTES de qualquer trabalho criativo** — criar features, construir componentes, adicionar funcionalidade ou modificar comportamento.

---

## 1. Objetivo e escopo

- **O que** exatamente será criado ou alterado?
- **Por quê** — qual problema resolve ou qual valor entrega?
- **Quem** usa (usuário final, outro dev, sistema)?
- **Escopo mínimo** — o menor conjunto de mudanças que já entrega valor?

---

## 2. Contexto do código

- Onde isso se encaixa no projeto (pasta, feature, fluxo)?
- Quais componentes/hooks/APIs já existem e podem ser reutilizados?
- Há padrões do projeto (design system, convenções de nome, estrutura de pastas) a seguir?
- Dependências: algo precisa ser criado antes (tipos, endpoints, utils)?

---

## 3. Alternativas e trade-offs

- **Opção A** vs **Opção B** — comparar pelo menos duas abordagens (ex.: componente único vs composável, estado local vs global).
- Trade-offs: performance, manutenção, acessibilidade, bundle size.
- Riscos: quebra de comportamento atual, regressões, impacto em outras telas.

---

## 4. Comportamento e edge cases

- Fluxo feliz: passo a passo do que deve acontecer.
- Estados vazios, loading e erro: como a UI se comporta?
- Validação e feedback: o que o usuário vê quando algo falha ou está incompleto?
- Acessibilidade: foco, leitura por leitor de tela, teclado.

---

## 5. Plano de implementação (resumido)

1. **Ordem** — em que ordem implementar (tipos → API/hook → UI → integração).
2. **Checklist** — itens concretos (ex.: "criar tipo X", "adicionar filtro Y no FiltersTickets").
3. **Critério de “pronto”** — como saber que a feature está completa e aceitável.

---

## 6. Decisão e próximo passo

- Resumir a abordagem escolhida e o motivo.
- Confirmar com o usuário (se fizer sentido) antes de codar.
- Só então partir para a implementação.

---

*Quando o usuário pedir algo criativo, executar este brainstorming primeiro e só depois escrever código.*
