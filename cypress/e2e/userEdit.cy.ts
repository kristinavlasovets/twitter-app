describe('check module for editing user data', () => {
  it('should show modal for editing user data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="profileButton"]').should('exist');
    cy.visit('http://localhost:5173/profile/vc6Qtqgwf8fBqjk2d8JHw8TR05i1');
    cy.get('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').click();
    cy.get('[data-cy="nameField"]').type('Jay');
    cy.get('[data-cy="telegramField"]').type('@jojo');
    cy.get('[data-cy="genderField"]').type('male');
  });
});
