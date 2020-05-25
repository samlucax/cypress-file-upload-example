<h1 align="center"> Upload de arquivos no Cypress </h1>

<p align="center"> Exemplo para testes de upload de arquivos no Cypress com o cypress-file-upload plugin. </p>

**Upload de arquivo simples:**

![upload-arquivo-simples](upload-arquivo-simples.gif "Exemplo com upload de arquivo simples")

**Upload de múltiplos arquivos:**


![upload-multiplos-arquivos](upload-multiplos-arquivos.gif "Exemplo com upload de multiplos arquivos")

## Plugin
- [cypress-file-upload](https://github.com/abramenal/cypress-file-upload "cypress-file-upload")

## Sobre  o plugin
Atualmente o plugin está na versão 4. Entretanto, como os próprios desenvolvedores [recomendam](https://github.com/abramenal/cypress-file-upload#note-v4-is-unstable-and-at-the-moment-there-is-no-capacity-to-look-through-all-the-issues-so-please-consider-using-v3-httpsgithubcomabramenalcypress-file-uploadtreev353 "recomendam") o uso da versão 3 por questões de estabilidade, adicionei exemplos para ambas versões do plugin:

- [v3](/v3)
- [v4](/v4)

## Como configurar no projeto

1 . Instale o plugin como dependencia de desenvolvimento:

`npm install --save-dev cypress-file-upload`

2 . Adicione os comandos do cypress-file-upload no arquivo cypress/support/commands.js, da seguinte forma:

```js
import 'cypress-file-upload';
```

3 . Adicione os arquivos que deseja na pasta cypress/fixtures

4 . Pronto! Agora voce pode adicionar arquivos, como no exemplo abaixo:

```js
// sintaxe v4
const arquivo = 'file4test.pdf'
cy.get('#fileInput').attachFile(arquivo);
```

## Como executar os exemplos

1 . Acesse os diretórios v3 ou v4

2 . Instale as dependencias do projeto

`npm install`

3 . Abra o Cypress e selecione o teste desejado

`npm run cypress`

------------

