/// <reference types="cypress" />

describe("Date Picker Testing", () => {

  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/Datepicker/index.html");
  });

  it('Select date',()=>{
    
    var dateRef=new Date();

    var year=dateRef.getFullYear()+1;
    var month=dateRef.toLocaleDateString('default',{month:'long'});
    var day=dateRef.getDate()+5;

  cy.get('#datepicker').find('input').click().then(()=>{
      selectDayMonthYear();
  }).then(()=>{
      dataSelection();
  })

    function selectDayMonthYear(){
        cy.get('.datepicker').find('.datepicker-switch').first().then(currentDate=>{
            if(!currentDate.text().includes(year) || !currentDate.text().includes(month)){
                cy.get('.next').first().click();
                selectDayMonthYear();
            }
        });
    }

    function dataSelection(){
        cy.get("[class='day']").contains(day).click();
    }

  });

});
