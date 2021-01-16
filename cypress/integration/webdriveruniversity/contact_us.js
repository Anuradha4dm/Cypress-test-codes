///  <reference types="cypress" />

describe("This is testing the webdriveuniversity",()=>{

    it.only("testing successfull submission of the contact us page",()=>{
        cy.visit('https://webdriveruniversity.com');
        cy.get('#contact-us').invoke('removeAttr','target').click();
        cy.get('[name="first_name"]').type("Damith");
        cy.get('[name="last_name"]').type("Anuradha");
        cy.get('[name="email"]').type("damith@gmail.com");
        cy.get('[name="email"]').should("have.attr","name","email");
        cy.get('textarea.feedback-input').type("This is the text that i need to test in the comment box");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text',"Thank You for your Message!");
    })

})