// vi: set ts=2 sw=2 sts=2:

describe('Login', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('/login')
  })

  it('Login with valid admin credentials', () => {
    cy.get('#bx-form-element-ID input').type(Cypress.env('user_admin_email'));
    cy.get('#bx-form-element-Password input').type(Cypress.env('user_admin_pwd'));
    cy.get('#bx-form-element-login button.bx-form-input-submit').click();
    
    // check redirect page
    cy.get('.bx-msg-box').contains("Please Wait").should('be.visible');

    // check cookies for session
    expect(cy.getCookie('memberID')).to.be.an('object').that.is.not.empty.and.to.not.have.property('expiry');
  })

  it('Login with valid regular user credentials', () => {
    cy.get('#bx-form-element-ID input').type(Cypress.env('user_regular_email'));
    cy.get('#bx-form-element-Password input').type(Cypress.env('user_regular_pwd'));
    cy.get('#bx-form-element-login button.bx-form-input-submit').click();

    // check redirect page
    cy.get('.bx-msg-box').contains("Please Wait").should('be.visible');

    // check cookies for session
    expect(cy.getCookie('memberID')).to.be.an('object').that.is.not.empty.and.to.not.have.property('expiry');
  })

  it('Login with valid regular user credentials and remember me checkbox', () => {
    cy.get('#bx-form-element-ID input').type(Cypress.env('user_regular_email'));
    cy.get('#bx-form-element-Password input').type(Cypress.env('user_regular_pwd'));
    cy.get('#bx-form-element-rememberMe .bx-switcher-cont').click();
    cy.get('#bx-form-element-rememberMe input[name=rememberMe]').should('be.checked');

    cy.get('#bx-form-element-login button.bx-form-input-submit').click();

    // check redirect page
    cy.get('.bx-msg-box').contains("Please Wait").should('be.visible');

    // check remember me functionality
    cy.getCookie('memberID').its('expiry').should('be.gt', 0);
  })

  it('Login with invalid user credentials', () => {
    cy.get('#bx-form-element-ID input').type(Cypress.env('user_invalid_email'));
    cy.get('#bx-form-element-Password input').type(Cypress.env('user_invalid_pwd'));
    cy.get('#bx-form-element-login button.bx-form-input-submit').click();

    cy.get('#bx-form-element-ID .bx-form-warn').contains('incorrect').should('be.visible');    
  })

  it('Login with empty user credentials', () => {
    cy.get('#bx-form-element-login button.bx-form-input-submit').click();

    cy.get('#bx-form-element-ID .bx-form-warn').contains('Error Occurred').should('be.visible');    
  })

})
