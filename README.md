# Dev Burger 🍔

**Descrição**

Projeto front-end simples de uma hamburgueria feito com **React** + **Vite** para demonstrar um menu interativo, adicionar itens ao carrinho e simular o fluxo de pedido. Ideal para estudo, prototipagem e testes de componentes.

---

## 🚀 Recursos principais

-   Visualização do cardápio e itens (`src/constants/menuItems.js`)
-   Componentes modulados: `Header`, `Menu`, `Card`, `CartModal`, `Footer`
-   Carrinho interativo com modal
-   Layout responsivo e estrutura limpa para aprendizagem

---

## 🧰 Tecnologias

-   **React** — biblioteca principal para construção da interface interativa e componetizada.
-   **Tailwind CSS** — sistema de utilitários para estilização rápida, responsiva e facilmente customizável.
-   **Vite** — bundler/servidor de desenvolvimento rápido com HMR.
-   **WhatsApp API** — integração que envia o pedido formatado diretamente para o número da hamburgueria via WhatsApp (ex.: WhatsApp Business API ou link de "click-to-chat").
-   **ESLint** — garante qualidade e consistência do código.

---

## 💼 Utilidade comercial (foco do projeto)

Este projeto demonstra um fluxo de pedido prático e de baixo atrito para hamburguerias: o cliente monta o pedido no site e o pedido é enviado automaticamente para a hamburgueria pelo WhatsApp, permitindo atendimento rápido sem necessidade de um sistema complexo de backend.

Principais vantagens:

-   **Pedidos entregues diretamente via WhatsApp:** mensagens de pedido chegam ao número configurado da hamburgueria em formato legível (itens, quantidades, total, observações), reduzindo tempo de atendimento.
-   **Redução de custo e complexidade:** sem necessidade imediata de gateway de pagamento ou backend; pedidos via WhatsApp são fáceis de adotar por pequenos estabelecimentos.
-   **Conversão em dispositivos móveis:** interface leve e responsiva (Tailwind) melhora a taxa de conversão de clientes em celulares.
-   **Aumento do ticket médio:** o fluxo permite destacar combos e extras no carrinho, incentivando upsell.

> Observação: o projeto já implementa a integração com o WhatsApp (configurar o número de destino no arquivo de configuração) — se preferir, posso documentar exatamente onde ajustar o número e o template de mensagem.

---

## ⚙️ Pré-requisitos

-   Node.js v16+ instalado
-   npm ou yarn

---

## ▶️ Como rodar localmente

1. Clone o repositório:

```bash
git clone <repo-url>
cd dev-burger
```

2. Instale as dependências:

```bash
npm install
# ou
# yarn
```

3. Rode em modo desenvolvimento:

```bash
npm run dev
```

4. Build para produção:

```bash
npm run build
```

5. Pré-visualizar build:

```bash
npm run preview
```

---

## 🗂 Estrutura do projeto (resumo)

```
src/
  App.jsx
  main.jsx
  index.css
  components/
    Header.jsx
    Home.jsx
    Menu.jsx
    Card.jsx
    CartModal.jsx
    Footer.jsx
  constants/
    menuItems.js
public/
package.json
README.md
```

---

## ✨ Personalização rápida

-   Edite `src/constants/menuItems.js` para alterar itens, preços e imagens.
-   Componentes isolados facilitam adição de filtros, busca, autenticação, etc.

---

## 🤝 Como contribuir

1. Faça um fork e clone o projeto
2. Crie uma branch: `git checkout -b feature/minha-melhora`
3. Faça commits claros e envie um Pull Request
4. Abra issues para bugs ou sugestões

---

> **Nota:** Consulte o arquivo `LICENSE` para detalhes sobre a licença.
