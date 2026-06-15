# PEAK Academia Praia Azul — Site

Site institucional estático (HTML + CSS + JS puro, sem dependências de build).

## Como abrir
Abra o arquivo **`index.html`** no navegador (duplo clique). Pronto — não precisa instalar nada.

Para hospedar de graça: suba a pasta inteira no **Netlify**, **Vercel** ou **GitHub Pages**.

## Estrutura
```
peak/
├─ index.html        → conteúdo do site (todas as seções)
├─ css/styles.css    → estilo e cores
├─ js/main.js        → menu mobile e animações
└─ assets/           → coloque aqui as fotos reais do Instagram
```

## ⚠️ O que você PRECISA ajustar antes de publicar

0. **Logo no cabeçalho** — salve o logo da PEAK como **`assets/logo.png`**
   (de preferência PNG com fundo transparente, altura ~100px). Ele aparece
   automaticamente no topo. Enquanto o arquivo não existir, mostramos o logo em
   texto "▲ PEAK" como reserva. Pegue o logo no Instagram da empresa.

1. **Fotos de fundo** — hoje o hero e a seção "Sobre" usam imagens de banco
   (Unsplash). Baixe fotos reais, salve em `assets/` e troque as URLs em
   `css/styles.css` nas seções `.hero-bg` e `.about-img`
   (ex.: `url('../assets/foto1.jpg')`).

1b. **Galeria = feed ao vivo do Instagram (LightWidget)** — a seção "A PEAK por
   dentro" está pronta para mostrar os últimos posts automaticamente. Para ativar:
   - Crie uma conta grátis em https://lightwidget.com
   - "Create new widget" → conecte/selecione **@peakacademiapraiaazul** → layout em grade → salve
   - Copie o ID do widget (ex.: `lightwidget.com/widgets/**1234567**.html`)
   - Cole esse número no atributo `data-lw-id` da `<div id="igFeed">` no `index.html`
   - O JS injeta o feed real no lugar do placeholder, atualizando sozinho.

2. **Cronograma de aulas** — a grade em `index.html` (seção `#cronograma`) é uma
   **referência**. Edite com os horários oficiais das aulas de sala.

3. **Planos Wellhub / TotalPass** — confirme com a recepção a partir de qual nível
   de plano cada benefício libera a PEAK (hoje: Wellhub *Basic* e TotalPass *TP1*),
   pois pode variar por empresa/região. Ajuste na seção `#planos`.

4. **Confira os dados de contato** — WhatsApp (19) 99917-3344, endereço e mapa.

## Dados usados (fontes)
- Endereço, horários, comodidades e plano Wellhub: página da PEAK no Wellhub.
- Modalidades e funcionamento: TotalPass + Wellhub.
- Contato/Instagram: @peakacademiapraiaazul.
