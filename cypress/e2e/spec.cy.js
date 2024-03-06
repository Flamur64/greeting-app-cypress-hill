describe('template spec', () => {
  beforeEach(() => {
    cy.log('I run before every test in every spec file')
  })
  it('passes', () => {
    cy.visit('/greeting.html')
    const name = 'Cypress'
    cy.get('#nameInput').type(name);
    cy.get('button').click();
    cy.get('#greetingMessage').should('have.text', `Hello, ${name}!`);

  })
  afterEach(() => {
    cy.log('I run before after test in every spec file')
  })
})