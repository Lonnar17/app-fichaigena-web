# Ficha Ígnea — CSS separado

Arquivos organizados por área:

- `00-base.css`: base global, body, fontes, header principal e inputs antigos globais.
- `01-player-ficha.css`: ficha do jogador, personagem, atributos, combate, inventário e poderes.
- `02-login.css`: tela de login.
- `03-master-grimorio.css`: base antiga do Grimório/Master.
- `04-jornada-modo.css`: tela de escolha Jornada/Grimório.
- `05-grimorio-componentes.css`: componentes do grimório, compêndio, cards, botões e símbolos.
- `06-final-overrides.css`: bloco final que já existia no seu CSS para sobrescrever duplicatas antigas sem quebrar.
- `07-paleta-master.css`: palheta final do Grimório/Master.
- `08-campanhas-master.css`: tela de campanhas, cards grandes e isolamento visual das campanhas.

Alterações feitas além da separação:

1. `index.html` agora carrega os CSS separados na ordem certa.
2. `listaCampanhasMaster` deixou de usar `compendio-grid` e virou `lista-campanhas`.
3. No `script.js`, o card de campanha deixou de usar `monstro-card` e agora usa `campanha-card`.
4. Ao criar campanha, o preview da imagem é limpo para não repetir imagem sem querer na próxima campanha.

Coloque a pasta `css/` junto do `index.html`, `script.js` e dos seus assets atuais (`img/`, logos, manifest, etc.).
