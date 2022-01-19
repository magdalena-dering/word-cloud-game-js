describe('test response', () => {
  it('get mocked data', () => {
    cy.intercept('GET', '**/data.json', {
      fixture: 'game.json',
    });
    cy.visit('/game');
  });
  it('visit game view, click random words', () => {
    cy.get('h1').contains('Select cloths', { matchCase: false });
    cy.get('[data-testid="word"]').eq(8).click();
    cy.get('[data-testid="word"]').eq(9).click();
    cy.get('[data-testid="word"]').eq(10).click();
  });
  it('check results', () => {
    cy.get('button').contains('Check', { matchCase: false }).click();
  });
  it('finish game', () => {
    cy.get('h1').contains('Review of select cloths', {
      matchCase: false,
    });
    cy.get('button')
      .contains('Finish game', { matchCase: false })
      .click();
  });
  it('see points', () => {
    cy.get('h1').contains('Points', {
      matchCase: false,
    });
    cy.get('p').contains('Points: 6', {
      matchCase: false,
    });
    cy.get('p').contains('Congrats, you get the MAX points!!!', {
      matchCase: false,
    });
  });
});
