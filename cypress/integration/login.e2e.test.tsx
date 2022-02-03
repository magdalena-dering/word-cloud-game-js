describe('render LogIn component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('render heading', () => {
    cy.contains('Word Cloud Game').should('be.visible');
  });

  it('disable button and display error when input is empty on button click', () => {
    cy.get('button').contains('Log in').click();
    cy.get('p')
      .contains('* This field is required')
      .should('be.visible');
    cy.get('button').should('be.disabled');
  });

  it('type user name and check if button redirects to "game" page', () => {
    cy.get('input').type('John Doe');
    cy.get('button').contains('Log in').click();
    cy.url({ timeout: 3000 }).should('includes', '/game');
  });
});
