# Desafio de Estilização em React

Este projeto é uma demonstração de como implementar a mesma tela de e-commerce utilizando quatro metodologias de estilização CSS diferentes em uma única aplicação React. O objetivo é comparar as abordagens **CSS Global**, **CSS Modules**, **Tailwind CSS** e **Styled-Components**.

---

## Funcionalidades da Aplicação

A aplicação renderiza uma tela de e-commerce com as seguintes funcionalidades:

* **Navbar Fixa:** Com logo, toggle de tema (claro/escuro com persistência) e ícone de carrinho.
* **Grid de Produtos Responsivo:** O layout se adapta a diferentes tamanhos de tela (1 a 4 colunas).
* **Card de Produto:** Exibe imagem, título, preço, rating e tags.
* **Estados de UI:** Efeitos visuais de `hover`, `focus`, `disabled` e um estado de `loading` com `skeleton`.
* **Acessibilidade:** Navegação por teclado (`Tab`) e contraste de cores.
* **Lazy Loading:** As imagens dos produtos são carregadas de forma assíncrona para otimizar o desempenho.

<br>
<div align="center">
  <img src="[LINK_PARA_IMAGEM_DA_VERSAO_1]" alt="Versão CSS Global" width="400">
  <img src="[LINK_PARA_IMAGEM_DA_VERSAO_2]" alt="Versão CSS Modules" width="400">
  <img src="[LINK_PARA_IMAGEM_DA_VERSAO_3]" alt="Versão Tailwind CSS" width="400">
  <img src="[LINK_PARA_IMAGEM_DA_VERSAO_4]" alt="Versão Styled-Components" width="400">
</div>
<br>

---

## Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface.
* **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido.
* **Estilização:**
    * CSS Global
    * CSS Modules
    * Tailwind CSS
    * Styled-Components

---

## Instalação e Execução

Para rodar este projeto em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/gfamanso
    cd mini-loja-em-react
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute a aplicação:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## Visão Geral das Versões de Estilo

Cada versão está contida em sua própria pasta (`01-css-global/`, `02-css-modules/`, etc.) e pode ser ativada editando o arquivo `src/App.jsx`.

### **1. CSS Global**
Esta abordagem utiliza uma única folha de estilo (`styles.css`) para toda a aplicação. É simples e eficaz para projetos menores, mas pode levar a conflitos de nomes de classes em projetos maiores.

### **2. CSS Modules**
Com CSS Modules, as classes são escopadas localmente a cada componente, gerando nomes únicos para evitar conflitos. Os estilos de cada componente (`.module.css`) são isolados, mas as variáveis globais (`--cores`) ainda podem ser compartilhadas.

### **3. Tailwind CSS**
Um framework de CSS utilitário que permite criar interfaces diretamente no JSX, usando classes pré-definidas. É uma abordagem "utility-first" que acelera o desenvolvimento, eliminando a necessidade de escrever CSS personalizado.

### **4. Styled-Components**
Esta é uma biblioteca de "CSS-in-JS". O código CSS é escrito diretamente nos arquivos JavaScript (`.jsx`) usando a sintaxe de `template literals`. Permite a criação de componentes estilizados e o uso de props para lógica dinâmica (como variantes de botão e temas).

---

Gabriel Manso