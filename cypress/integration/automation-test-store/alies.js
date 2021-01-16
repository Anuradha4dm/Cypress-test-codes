///<reference types="cypress"/>

describe("Home page item test",()=>{


    it("Chacking the cart icon available",()=>{

        cy.visit('https://automationteststore.com/');
        cy.get('div .thumbnail').each(($ele,index,list)=>{
            cy.wrap($ele).find('.productcart').should('have.attr','title','Add to Cart');
            // cy.wrap($ele).find('.productcart').invoke('attr','title').should('include','Add to Cart');
        })

    })

    it('number of item in home page checking',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('div .thumbnail').should('have.lengthOf',16);

    })
})