describe('Test response', () => {
  it('get mocked data', () => {
    cy.intercept('GET', '**/data.json', {
      fixture: 'game.json',
    });

    cy.visit('/game');
  });
});
