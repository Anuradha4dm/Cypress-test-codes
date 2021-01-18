/// <reference types="cypress" />


describe('Alert message handling',()=>{

    it('Java sctipr alert message with message 1 handling',()=>{

        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click();
        cy.get('#button1').click();

        cy.on('window:alert',(str)=>{
            expect(str).be.equal('I am an alert box!')
        })

    })

    it('Java sctipr alert message with message 4 ok press',()=>{

        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click();
        cy.get('#button4').click();
        cy.on('window:alert',(str)=>{
           return true;
        });
        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it('Java sctipr alert message with message 4 cansel press',()=>{
        cy.visit('https://webdriveruniversity.com');
        cy.get('#popup-alerts').invoke('removeAttr','target').click();
        cy.get('#button4').click();
        cy.on('window:confirm',(str)=>{
           return false;
        });
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    });

    

})