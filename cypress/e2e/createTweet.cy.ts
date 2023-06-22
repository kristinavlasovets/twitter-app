describe('check module for creating a new tweet', () => {
  it('should navigate feed page and show ability to create a new tweet', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="createTweetButton"]').should('exist');
  });
});
