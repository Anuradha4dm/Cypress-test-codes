/// <reference types="cypress"/>

describe('Navations throught the web pages',()=>{

    it('forword movement',()=>{

        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr','target').click();
        cy.url().should('include',"https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type('Damith Anuradha');

        cy.go('back');
        cy.url().should('include','https://webdriveruniversity.com');
        cy.get('#login-portal').invoke('removeAttr','target').click();
        cy.go('back');
    })

})