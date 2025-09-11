describe('Smoke Test - Verificação de Sanidade da Aplicação', () => {
  // 'it' define um caso de teste individual e específico.
  // Descreve o que este teste em particular deve fazer.
  it('Deve carregar a página inicial e exibir o título principal e título da aba', () => {
    // O comando 'cy.visit('/')' diz ao Cypress para abrir o navegador
    // na URL base que você configurou no arquivo 'cypress.config.js'.
    cy.visit('/');
    
    // O comando 'cy.get('h1')' procura por um elemento <h1> na página.
    // A segunda parte, '.should('be.visible')', é uma "asserção". Ela verifica
    // se o elemento <h1> foi encontrado E se ele está visível para o usuário.
    // Se qualquer uma dessas condições falhar, o teste inteiro falha.
    cy.get('h1').should('be.visible');
    cy.get('h1').should('have.text', 'Eskimozin');
    cy.title().should('include', 'Eskimozin | Eskimozin Craft - Todos os Links');
  });
  
});
