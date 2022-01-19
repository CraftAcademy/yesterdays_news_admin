describe('A user is able to register an account as journalist', () => {
  describe('when the account has been created', () => {
    before(() => {
      cy.visit("registration");
      cy.get("[data-cy=name-input]").type('John Skoglund');
      cy.get("[data-cy=email-input]").type('johnskoglung@test.com');
      cy.get("[data-cy=password-input]").type('1234567890');
      cy.get("[data-cy=conf-password-input]").type('1234567890');
      cy.get('[data-cy=register-button]').click();
    });
    
    it('is expected to display a successful message', () => {
      cy.get('[data-cy=flash-message]')
        .should('contain.text', 'Your account has been created')
        .and('be.visible');
    });
  });

  describe('if password mismatch', () => {
    before(() => {
      cy.visit("registration");
      cy.get("[data-cy=name-input]").type('John Skoglund');
      cy.get("[data-cy=email-input]").type('johnskoglung@test.com');
      cy.get("[data-cy=password-input]").type('1234567890');
      cy.get("[data-cy=conf-password-input]").type('123434');
      cy.get('[data-cy=register-button]').click();
    });

    it('is expected to display an error message', () => {
      cy.get('[data-cy=flash-message]')
        .should('contain.text', 'Password must match')
        .and('be.visible');
    });
  });
});