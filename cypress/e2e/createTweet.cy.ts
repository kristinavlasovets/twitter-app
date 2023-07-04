describe('check module for creating a new tweet', () => {
  it('should navigate feed page and show ability to create a new tweet in modal window', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('button').should('exist');
    cy.get('button').contains('Tweet').should('exist');
    cy.get('button').contains('Tweet').first().click();
    cy.get('[data-cy="modalTextArea"]').type('Good morning');
    cy.get('button').contains('Tweet').should('exist');
    cy.get('button').contains('Tweet').next().click();
    cy.get('[data-cy="tweetItemText"]').contains('Good morning').should('exist');
  });
  it('should navigate feed page and show ability to create a new tweet', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('button').should('exist');
    cy.get('[data-cy="textArea"]').type('Good morning');
    cy.get('[data-cy="createTweetWrapper"]').find('button').contains('Tweet').last().click();
    cy.get('[data-cy="tweetItemText"]').contains('Good morning').should('exist');
  });
});
