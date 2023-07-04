describe('check module for editing user data', () => {
  it('should show modal for editing user data, show ability to change user data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-testid="profileButton"]').should('exist');
    cy.get('[data-cy="createTweetWrapper"]').should('exist');
    cy.visit('http://localhost:5173/profile/d047SAHWiPePu2WCh5qC0vZc4gq1');
    cy.get('[data-cy="userBannerWrapper"]').should('exist');
    cy.get('[data-cy="userBannerWrapper"]').find('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="userBannerName"]').contains('John').should('exist');
    cy.get('[data-cy="userBannerGender"]').contains('female').should('exist');
    cy.get('[data-cy="userBannerTelegram"]').contains('@noname').should('exist');
    cy.get('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').click();

    cy.get('[data-cy="nameField"]').type('Johny');
    cy.get('[data-cy="telegramField"]').type('@jo');
    cy.get('[data-cy="genderField"]').type('male');

    cy.get('[data-cy="formWrapper"]').find('button').contains('Edit profile').should('exist');
    cy.get('[data-cy="formWrapper"]').find('button').contains('Edit profile').click();

    cy.get('[data-cy="userBannerName"]').contains('Johny').should('exist');
    cy.get('[data-cy="userBannerGender"]').contains('male').should('exist');
    cy.get('[data-cy="userBannerTelegram"]').contains('@jo').should('exist');
    cy.get('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').click();

    cy.get('button').contains('Log out').first().click();
    cy.get('[data-cy="logInLink"]').should('exist');

    cy.get('[data-cy="logInLink"]').click();
    cy.get('[data-cy="emailField"]').type('john@gmail.com');
    cy.get('[data-cy="passwordField"]').type('111111');
    cy.get('[data-cy="logInButton"]').click();
    cy.get('[data-cy="toggleTheme"]').should('exist');

    cy.visit('http://localhost:5173/profile/d047SAHWiPePu2WCh5qC0vZc4gq1');
    cy.get('[data-cy="userBannerWrapper"]').should('exist');
    cy.get('[data-cy="userBannerWrapper"]').find('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').should('exist');
    cy.get('[data-cy="editButton"]').click();

    cy.get('[data-cy="nameField"]').type('John');
    cy.get('[data-cy="telegramField"]').type('@noname');
    cy.get('[data-cy="genderField"]').type('female');

    cy.get('[data-cy="formWrapper"]').find('button').contains('Edit profile').should('exist');
    cy.get('[data-cy="formWrapper"]').find('button').contains('Edit profile').click();

    cy.get('[data-cy="userBannerName"]').contains('John').should('exist');
    cy.get('[data-cy="userBannerGender"]').contains('female').should('exist');
    cy.get('[data-cy="userBannerTelegram"]').contains('@noname').should('exist');
  });
});
