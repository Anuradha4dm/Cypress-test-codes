/// <reference types="cypress" />

describe('Upload file testing',()=>{

    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html');
    })

    it('Upload a file',()=>{
        cy.fixture('laptop.png','base64').then(fileContent=>{
            cy.get('#myFile').attachFile(

                {
                    fileContent,
                    fileName:'laptop.png',
                    mimeType:'image/png'
                },{
                    uploadType:'input'
                }

            )
        })

        cy.get('#submit-button').click();
    })

})

