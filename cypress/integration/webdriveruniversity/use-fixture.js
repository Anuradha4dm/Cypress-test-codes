/// <reference types="cypress" />


describe('use fixture to load data',()=>{


    before(()=>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html');
        // method 1
        cy.fixture('example').then(dataSet=>{
            globalThis.data=dataSet;
        }) ;
        
        //method 2
        cy.fixture('example').as('data');
    })

    it("filling values with data",()=>{

        cy.get('#contact_form').within(()=>{
            cy.get('[name="first_name"]').type(data.first_name);
            cy.get('[name="last_name"]').type(data.last_name);
            cy.get('[name="email"]').type(data.email);
            cy.get('[name="message"]').type(data.comment);
        })
    })

})