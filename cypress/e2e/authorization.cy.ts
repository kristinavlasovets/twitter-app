describe('authorization check', () => {
  it('should navigate to login page and show error alert while not entering data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="errorAlert"]').should('exist');
  });
  it('should navigate to login page and authorize user', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('222222');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');
  });
});
