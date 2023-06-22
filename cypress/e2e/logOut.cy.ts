describe('check the ability to logout', () => {
  it('should navigate profile page and show ability to logout', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="profileButton"]').should('exist');
    cy.visit('http://localhost:5173/profile/d047SAHWiPePu2WCh5qC0vZc4gq1');
    cy.get('button').contains('Log out').first().click();
    cy.get('[data-cy="logInLink"]').should('exist');
  });
});
