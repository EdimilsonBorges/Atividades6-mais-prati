# Versão 01 — CSS Global

## Descrição
Nesta versão, toda a estilização foi feita com **CSS global** usando um único arquivo `.css`, aplicado de forma direta aos componentes.

## Técnicas usadas
- Arquivo `index.css` com classes globais.
- Dark mode implementado via `body.dark-theme`.
- Tokens definidos como variáveis CSS (`:root`).
- Media queries manuais para breakpoints.

## Pontos principais
- Organização simples, mas pode gerar conflitos de classes.
- Dark mode persistido com `localStorage`.
