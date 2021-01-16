/// <reference types="cypress" />


describe("Testing the automationtest store",()=>{

    
    it("test with contact us page",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('a').contains('Contact Us').click().then(elementData=>{
            console.log(elementData)
        })
        cy.get('#ContactUsFrm_first_name').type("Damith Anuradha");
        cy.get('#ContactUsFrm_email').type('damith@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type('this is the text that i include to test the if the test is successfully pass');
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!");
        
    });
    
    
    it.skip("Test clicking items by pointing the specifics item",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    })
    
    it.only("check make up link",()=>{
        cy.visit("https://automationteststore.com/");
        
        //Jquery method
        cy.get("a[href$='contact']").contains("Contact Us").click().then($contactUsPage=>{
            const val=$contactUsPage.find('#field_11').text();
            expect(val).to.contains('First name');
        })

    })

    it("Test Product",()=>{
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    })



})