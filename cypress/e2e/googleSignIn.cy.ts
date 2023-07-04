describe('google sign in check', () => {
  it('should navigate to signup page and show error alert while not entering data', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="GoogleSignIn"]').click();
  });
});
