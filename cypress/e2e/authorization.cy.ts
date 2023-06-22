describe('authorization check', () => {
  it('should navigate to login page and show error message while not entering data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="emailError"]').should('exist');
    cy.get('[data-cy="passwordError"]').should('exist');
  });
  it('should navigate to login page and show error message while entering invalid data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="passwordField"]').type('456');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="passwordError"]').should('exist');
  });
  it('should navigate to login page and show error message while entering incorrect data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('7777777');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="loginErrorText"]').should('exist');
  });
  it('should navigate to login page and authorize user', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');
  });
});
