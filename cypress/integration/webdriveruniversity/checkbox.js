/// <reference types="cypress"/>

describe('Testing the check boxes',()=>{


    it('Page checking',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.url().should('equal','https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('#main-header').find('h1').invoke('text').should('include','Dropdown Menu(s), Checkboxe(s) & Radio Button(s)');
    })
    
    it('one checkbox testing process',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get(".thumbnail >.section-title > label >  input[type='checkbox']").eq(0).as('option_1');
        cy.get('@option_1').invoke('val').should('equal','option-1');
        cy.get('@option_1').should('not.be.checked')
    });

    it('Checkbox title checking',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get('.thumbnail > h2 ').contains('Dropdown Menu(s)').invoke('text').should('include','Dropdown Menu(s)');

    })

    it('all checkboxes testing process',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        
        var count=1;

        cy.get("input[type='checkbox']").each(($ele,index,list)=>{
            
            cy.wrap($ele).as('option');
            cy.get('@option').invoke('val').should('equal','option-'+count);

            if(index===2){
                cy.get('@option').should('be.checked');
            }else{
                cy.get('@option').should('not.be.checked');
            }

            count++;
        })
        
    });

    //this is the best of all

    it('Uncheck selected checkbox',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get("input[type='checkbox']").uncheck('option-3').should('not.be.checked');
    });

    it.only('Select multiple checkboxes onece',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get("input[type='checkbox']").check(['option-1','option-2','option-3']).should('be.checked');
    })

})