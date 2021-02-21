///<reference types="cypress" />

describe('auto completion dropdown  list ',()=>{

    it('check correct navigation into the field',()=>{

        cy.visit('https://webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
        cy.url().should('equal','https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
    });

    it('check autoselection',()=>{
        cy.visit('https://webdriveruniversity.com');
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click();
        const textData='Dips';
        cy.get('#myInput').type('d');
        cy.get('#myInputautocomplete-list').find('strong').as('auto_list');
        cy.get('@auto_list').should('have.length','4');
        cy.get('@auto_list').eq(1).click();
        cy.get('#myInput').should('have.value',textData);
        cy.get('#submit-button').click();
        cy.url().should('include',textData)

    })

})

