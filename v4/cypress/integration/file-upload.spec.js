/// <reference types="cypress" />

const ARQUIVOS = [
  'file4test.csv',
  'file4test.gif',
  'file4test.jpeg',
  'file4test.jpg',
  'file4test.json',
  'file4test.pdf',
  'file4test.png',
  'file4test.txt',
];

// Normalmente o cy.fixture identifica o encoding automaticamente.
// Para casos específicos, podemos passar o encoding como option.

const ARQUIVOS_COM_ENCODING = [
  {
    fileName: 'file4test.xls',
    encoding: 'utf8'
  },

]

context('Upload', () => {
  beforeEach(() => {
    cy.visit('https://dsheiko.github.io/react-html5-form/');
  });

  ARQUIVOS.forEach(arquivo => {
    it(`Deve aceitar arquivos no formato ${ arquivo.split('.')[1] }`, () => {
      cy.get('#fileInput').attachFile(arquivo);
    }); 
  });

  ARQUIVOS_COM_ENCODING.forEach(arquivo => {
    it(`Deve aceitar arquivos no formato ${ arquivo.fileName.split('.')[1] } com encoding`, () => {
      cy.get('#fileInput').attachFile({ filePath: arquivo.fileName, encoding: arquivo.encoding });      cy.wait(2500);
  });

  it('Deve aceitar mais de um arquivo por vez', () => {
    cy.get('#fileInput')
      .attachFile(ARQUIVOS[0])
      .attachFile(ARQUIVOS[1])
      .attachFile(ARQUIVOS[2]);
    });

  });

});