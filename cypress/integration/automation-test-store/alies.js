///<reference types="cypress"/>

describe("Home page item test",()=>{


    it("Chacking the cart icon available",()=>{

        cy.visit('https://automationteststore.com/');
        cy.get('div .thumbnail').find('.productcart')   .each(($ele,index,list)=>{
            cy.wrap($ele).should('have.attr','title','Add to Cart');
            // cy.wrap($ele).find('.productcart').invoke('attr','title').should('include','Add to Cart');
        })

    });

    it('number of item in home page checking',()=>{
        cy.visit('https://automationteststore.com/');
        cy.get('div .thumbnail').should('have.lengthOf',16);

    });

    it.only("Item price checing", ()=>{
        cy.visit('https://automationteststore.com/');
        var array=[];
        var sum=0;
        cy.get('div .thumbnail').find('.oneprice').each(($element,index,list)=>{
          sum+=(parseFloat($element.text().split('$')[1]));
        }).then(()=>{
            cy.log(sum);
        })

    })


})