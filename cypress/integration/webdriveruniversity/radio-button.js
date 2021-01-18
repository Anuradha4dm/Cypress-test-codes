///<reference types="cypress" />

describe('Radio buttun checking',()=>{

    it('checking inbound to checking page',()=>{

        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.url().should('include','https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    });

    it('Click on first radio button',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.get(".section-title > #radio-buttons > input[type='radio']").eq(0).should('not.be.checked');
    })

    it("check all radio buttons are not clicked",()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});

      
        const colors=['green','blue','yellow','orange','purple'];
        cy.get(".section-title > #radio-buttons > input[type='radio']").each(($ele,index,list)=>{
            cy.wrap($ele).should('not.be.checked');
        })
    })

    it("check all radio buttons are working",()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});

      
        const colors=['green','blue','yellow','orange','purple'];
        cy.get(".section-title > #radio-buttons > input[type='radio']").each(($ele,index,list)=>{
            cy.wrap($ele).check(colors[index]).should('be.checked');
        })
    });

    it("check one radio button is selected",()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});

        cy.get(".section-title >  #radio-buttons-selected-disabled >input[type='radio']").each(($ele,index,list)=>{
            if(index===2){
                cy.wrap($ele).should('be.checked');
                
            }else{
                
                cy.wrap($ele).should('not.be.checked');
                cy.wrap($ele).should('not.be.checked');
            }
        })
    });

    it.only('When one item is check from the list the check the next one unchecked',()=>{

        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});

        cy.get(".section-title >  #radio-buttons-selected-disabled >input[type='radio']").check('lettuce').should('be.checked');
        cy.get(".section-title >  #radio-buttons-selected-disabled >input[type='radio']").eq(1).should('not.be.checked');
        cy.get(".section-title >  #radio-buttons-selected-disabled >input[type='radio']").eq(2).should('not.be.checked');

    })

})