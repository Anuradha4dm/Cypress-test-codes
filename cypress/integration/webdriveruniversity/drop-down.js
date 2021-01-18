///<reference types="cypress" />

describe('Drop Down list checking',()=>{

    it('checking inbound to checking page',()=>{

        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});
        cy.url().should('include','https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    });

    it('select item from the dropdown list',()=>{
        cy.visit('https://webdriveruniversity.com/');  
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true});

        cy.get('.section-title > #dropdowm-menu-1').select('python').should('have.value','python');
        cy.get('.section-title > #dropdowm-menu-1').select('python').contains('Python')
    })

})