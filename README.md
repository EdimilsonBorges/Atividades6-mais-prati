# Desafio: Mesma Tela em 4 Técnicas de Estilização

## Descrição
O objetivo deste desafio é **implementar a mesma interface** em **quatro versões diferentes**, cada uma utilizando uma técnica distinta de estilização em React:

1. **CSS Global**  
2. **CSS Modules**  
3. **Tailwind CSS**  
4. **styled-components**  

A tela deve conter uma **Navbar fixa** e um **grid de produtos** responsivo, com todos os requisitos de acessibilidade, animações e dark mode.

---

## Tela a Construir

### Navbar (fixa)
- Logo
- Toggle de tema (**claro/escuro**, com persistência)
- Badge do carrinho

### Grid de Produtos
- Responsivo:
  - ≤480px → **1 coluna**
  - 481–768px → **2 colunas**
  - 769–1024px → **3 colunas**
  - ≥1025px → **4 colunas**

### Card de Produto
- Imagem com espaço reservado  
- Título   
- Preço   
- Botão **Adicionar ao carrinho**

---

## ✨ Estados e Interações Obrigatórios
- **Hover**: elevação/sombra      
- **Dark mode**: aplicado a cores, sombras e bordas  

---

## Animações
- Transições de **150–250ms**  
- Usar apenas `transform` / `opacity`  

---

## 📦 Dados
- Exibir **6 produtos** com:
  - `id`
  - `título`
  - `preço`
  - `imagem`

---

## Restrições
- Cada versão deve usar **apenas** a técnica indicada:
  - `01-css-global/` → CSS global  
  - `02-css-modules/` → CSS Modules  
  - `03-tailwind/` → apenas utilitários Tailwind  
  - `04-styled-components/` → CSS-in-JS (`ThemeProvider`, props)  
- Organização clara das pastas

---

## 🚀 Como Executar
```bash
# Clone o repositório
git clone https://github.com/EdimilsonBorges/Atividades6-mais-prati.git

# Execute cada versão
cd 01-css-global/mini-loja && npm install && npm run dev
cd 02-css-modules/mini-loja && npm install && npm run dev
cd 03-tailwind/mini-loja && npm install && npm run dev
cd 04-styled-components/mini-loja && npm install && npm run dev