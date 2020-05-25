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
      const fileName = arquivo;

      cy.fixture(fileName).then(fileContent => {
        // .upload(fileOrArray, processingOpts);
        cy.get('#fileInput').upload(
        // fileOrArray ↙️
        {
          fileContent,
          fileName,
          mimeType: `application/${ arquivo.split('.')[1] }`,
        });
      })
    }); 
  });

  ARQUIVOS_COM_ENCODING.forEach(arquivo => {
    it(`Deve aceitar arquivos no formato ${ arquivo.fileName.split('.')[1] } com encoding`, () => {
      const fileName = arquivo.fileName;
      const encoding = arquivo.encoding;

      cy.fixture(fileName).then(fileContent => {
        // .upload(fileOrArray, processingOpts);
        cy.get('#fileInput').upload(
        // fileOrArray ↙️
        {
          fileContent,
          fileName,
          encoding,
          mimeType: `application/${ arquivo.fileName.split('.')[1] }`,
        });
      })
    });    
  });

});