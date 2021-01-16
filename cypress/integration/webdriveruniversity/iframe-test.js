///  <reference types="cypress" />

describe('Iframe',()=>{

    it('iframe checking',()=>{
        cy.visit('https://webdriveruniversity.com');
        cy.get('#iframe').invoke('removeAttr','target').click();

        cy.get('#frame').then(($iframe)=>{
            const iframeBody=$iframe.contents().find('body');
            cy.wrap(iframeBody).as('iframeBodyRef');
        })

        cy.get('@iframeBodyRef').find('#button-find-out-more').click();
        cy.get('@iframeBodyRef').find('#myModel').should('include','Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')

    })

})