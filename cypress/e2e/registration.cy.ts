describe('registration check', () => {
  it('should navigate to signup page and show error alert while not entering data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="signUpLink"]').click();
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="nameError"]').should('exist');
    cy.get('[data-cy="phoneError"]').should('exist');
    cy.get('[data-cy="emailError"]').should('exist');
    cy.get('[data-cy="passwordError"]').should('exist');
  });
  it('should navigate to signup page and register and authorize user', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="signUpLink"]').click();
    cy.get('[data-cy="nameField"]').type('Terry');
    cy.get('[data-cy="phoneField"]').type('+31636363634');
    cy.get('[data-cy="emailField"]').type('terry@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
  });
});
