describe('Login', () => {
  it('Goto to login page, login with sample data, then logout', () => {
    cy.visit('https://ci.una.io/test3')

    // click login
    cy.get('#bx-menu-toolbar-item-login').click();

    // fill in form
    cy.get('#bx-form-element-ID input').type('admin@example.com');
    cy.get('#bx-form-element-Password input').type('unauna');
    cy.get('#bx-form-element-login button.bx-form-input-submit').click();

    // check if login is successfil by checking if tour is visible and then exit tour
    cy.get('#tour-homepage-label').should('be.visible');
    cy.get('.shepherd-button-secondary').click();

    // logout
    cy.get('.bx-menu-toolbar-item-title').click();
    cy.get('.bx-menu-item-logout > a').click();

    // check if logout was successful
    cy.get('#bx-menu-toolbar-item-login').should('be.visible');
  })
})
