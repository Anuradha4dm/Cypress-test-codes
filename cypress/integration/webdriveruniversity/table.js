

describe('Table test with cypress',()=>{

    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/');
        cy.get('#data-table').invoke('removeAttr','target').click();
    })


    it('Get summation of the ages in the table',()=>{

        var sum=0;
        cy.get('#thumbnail-1').find('td').each(($ele)=>{

          if(Number($ele.text())){
             sum+=parseInt($ele.text());
          }

        }).then(()=>{
            expect(sum).to.eq(322);
        })

    });

    it.only('check whether the woods\' age 80',()=>{

        cy.get('#thumbnail-1').find('td').each(($ele,index)=>{
            if($ele.text()==='Woods'){
                cy.get('#thumbnail-1 td:nth-child(3)').eq(5).invoke('text').should('equal','80')
            }
        })
    })

})