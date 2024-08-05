describe('NYSC Portal Login', () => {
    beforeEach(() => {
        // Visit the NYSC website before each test
        cy.visit('/');
    });
    it('Should enter email in the email field', () => {
        // Click on the login button
        cy.get('.clients-logo-wrapper > :nth-child(2) > img').click();

        // Enter the email address
        cy.get('#ctl00_ContentPlaceHolder1_txtemailAddress')
            .type('tushab19@gmail.com')
            .should('have.value', 'tushab19@gmail.com');
            // Enter the password
        cy.get('#ctl00_ContentPlaceHolder1_txtPassCode')
        .type('AL831997')
        .should('have.value', 'AL831997');
        // Cick resume button
        cy.get('#ctl00_ContentPlaceHolder1_btnResume').click();
        // Logout of the system 
        cy.get('#ctl00_alogout > .link').click();

        // cypress/support/index.js

Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

    });
});
