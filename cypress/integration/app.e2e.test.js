describe('test whole app', () => {
  it('log in', () => {
    cy.visit('/');
    cy.get('h1').contains('Word cloud game', { matchCase: false });
    cy.get('input').type('John Doe').should('have.value', 'John Doe');
    cy.get('button').contains('Log in', { matchCase: false }).click();
  });
  it('visit game view, click random words', () => {
    cy.get('h1').should('be.visible');
    cy.get('[data-testid="word"]').eq(2).click();
    cy.get('[data-testid="word"]').eq(3).click();
    cy.get('[data-testid="word"]').eq(8).click();
  });
  it('check results', () => {
    cy.get('button').contains('Check', { matchCase: false }).click();
  });
  it('finish game', () => {
    cy.get('h1').should('be.visible');
    cy.get('button')
      .contains('Finish game', { matchCase: false })
      .click();
  });
  it('log out', () => {
    cy.get('h1').contains('Points', { matchCase: false });
    cy.get('a').contains('Log out', { matchCase: false }).click();
  });
});
