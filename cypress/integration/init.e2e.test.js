describe('Test the app', () => {
  it('log in', () => {
    cy.visit('/');
    cy.get('input').type('John Doe');
    cy.get('button').contains('Log in').click();
  });
  it('click random words in game container', () => {
    cy.get('[data-testid="word"]').eq(2).click();
    cy.get('[data-testid="word"]').eq(3).click();
    cy.get('[data-testid="word"]').eq(8).click();
  });
  it('check results', () => {
    cy.get('button').contains('Check').click();
  });
  it('finish game', () => {
    cy.get('button').contains('Finish game').click();
  });
  it('log out', () => {
    cy.get('a').contains('Log out').click();
  });
});
