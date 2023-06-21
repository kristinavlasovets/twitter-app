describe('check module for editing user data', () => {
  it('should show modal for editing user data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('222222');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="profileButton"]').should('exist');
    cy.visit('http://localhost:5173/profile/1qoGrwLOWoaW1ADPTVsVFEFKdLn2');
    cy.get('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').click();
    cy.get('[data-cy="nameField"]').type('Johny');
    cy.get('[data-cy="telegramField"]').type('@jo');
    cy.get('[data-cy="genderField"]').type('male');
  });
});
