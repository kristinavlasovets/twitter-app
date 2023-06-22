describe('theme toogle check', () => {
  it('should navigate to login page and toggle theme', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');
    cy.get('[data-cy="toggleTheme"]').click();
    cy.get('[data-cy="header"]')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)');
  });
});
