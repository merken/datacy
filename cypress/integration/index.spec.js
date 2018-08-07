describe('Index tests', function () {
  before(function () {
    // runs once before all tests in the block
  })

  after(function () {
    // runs once after all tests in the block
  })

  beforeEach(function () {
    // runs before each test in the block
    cy.visit('http://localhost:4200/');
  })

  afterEach(function () {
    // runs after each test in the block
  })

  it('homepage should contain nothing', function () {
    cy.get('[data-cy=content]').should('have.text', 'nothing');
  })

  it('homepage should contain first', function () {
    cy.get('[data-cy=first]').click();
    cy.get('[data-cy=content]').should('have.text', 'First was pressed');
  })

  it('homepage should contain second', function () {
    cy.get('[data-cy=second]').click();
    cy.get('[data-cy=content]').should('have.text', 'Second was pressed');
  })

  it('homepage should contain third', function () {
    cy.get('[data-cy=third]').click();
    cy.get('[data-cy=content]').should('have.text', 'Third was pressed');
  })
})
