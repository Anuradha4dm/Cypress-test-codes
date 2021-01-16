/// <reference types="cypress" />


describe("Iterate through elements",()=>{

    it("List down all the elements",()=>{

        cy.visit('https://automationteststore.com/');
        cy.get('.nav-pills > li').find("a[href$='category&path=52']").click();

        cy.get('.fixed_wrapper .fixed .prdocutname').each(($element,index,list)=>{

           if($element.text()==="Seaweed Conditioner"){
               cy.wrap($element).click().should('have.title',"Seaweed Conditioner")
           }
        })


    })

})

