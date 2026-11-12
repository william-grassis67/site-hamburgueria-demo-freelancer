# Burguer House — Cardápio Digital (Demonstração)

Cardápio digital estilo app de delivery, 100% estático (HTML + CSS + JS puro). Marca, preços e avaliações são fictícios.

## Como executar
Abra `index.html` no navegador (duplo clique) ou sirva a pasta: `python3 -m http.server 8000` → http://localhost:8000

## Funcionalidades
Busca, categorias horizontais, mais vendidos, promoções, combos, detalhe do produto (adicionais, remover ingredientes, bebida, quantidade, observações), carrinho com edição e barra fixa no celular, finalização sem cadastro com mensagem pronta no WhatsApp.

## Configuração
Em `js/app.js`, objeto `CONFIG`: `whatsapp` (DDI+DDD+número), `delivery`, `minOrder`.
Produtos, adicionais e bebidas estão no mesmo arquivo (`P`, `EXTRAS`, `DRINKS`). Fotos via Unsplash (com fallback em emoji se offline).
