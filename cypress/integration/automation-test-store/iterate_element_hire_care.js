/// <reference types="cypress" />


describe("Iterate through elements",()=>{

    beforeEach(()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('.nav-pills > li').find("a[href$='category&path=52']").click();

    })

    it("List down all the elements",()=>{
       
        cy.get('.fixed_wrapper .fixed .prdocutname').each(($element,index,list)=>{
            cy.selectProduct($element,'Seaweed Conditioner');
        })


    })

})

