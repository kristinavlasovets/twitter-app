describe('theme toogle check', () => {
  it('should navigate to login page and toggle theme to dark mode', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');
    cy.get('[data-cy="toggleTheme"]').click();
    cy.get('[data-cy="header"]').should('have.css', 'background-color').and('eq', 'rgb(0, 0, 0)');
  });
  it('should navigate to login page and toggle theme to light mode', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');
    cy.get('[data-cy="toggleTheme"]').click();
    cy.get('[data-cy="toggleTheme"]').click();
    cy.get('[data-cy="header"]').should('exist');
    cy.get('[data-cy="header"]')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)');
  });
});
