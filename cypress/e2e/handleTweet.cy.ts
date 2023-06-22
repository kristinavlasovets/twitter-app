describe('check module for handle with a tweet', () => {
  it('should navigate feed page and show ability to create a new tweet', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="createTweetButton"]').should('exist');
    cy.get('[data-cy="textArea"]').type('Good morning');
    cy.get('[data-cy="createTweetWrapper"]').find('button').contains('Tweet').should('exist');
    cy.get('[data-cy="createTweetWrapper"]').find('button').contains('Tweet').last().click();
    cy.get('[data-cy="textArea"]').should('exist');
    cy.get('[data-cy="textArea"]').contains('Good morning');
  });
  it('should navigate to feed page and show ability to like a tweet', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="tweetItemWrapper"]').should('exist');
    cy.get('[data-cy="tweetItemWrapper"]').find('[data-cy="likeIcon"]').should('exist');
    cy.get('[data-cy="likeIcon"]').first().click();
  });
  it('should navigate to feed page and show ability to delete a tweet', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="editIcon"]').should('exist').first().click();
    cy.get('[data-cy="closeIcon"]').should('exist').click();
    cy.get('[data-cy="editIcon"]').should('exist').first().click();
    cy.get('[data-cy="deleteIcon"]').should('exist');
    cy.get('[data-cy="deleteIcon"]').should('exist').click();
  });
});
