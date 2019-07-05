import 'cypress-react-unit-test'
import React from 'react'
import Ripple from '../../src/Ripple'

describe('App', ()=> {

    afterEach(function () {
        cy.wait(500)
      })

    it('mount ripple in cypress', () => {
        cy.mount(<Ripple><div className='button' style={{width:10 + 'em', height:10+'em', backgroundColor:'#666666'}}>Click me</div></Ripple>);
        let buttonCoords;
        const button = cy.get('.button').then($el => {
            buttonCoords = $el[0].getBoundingClientRect();
            console.log(buttonCoords);
            console.log($el[0].innerHTML);
            cy.get('.button').parent().click(buttonCoords.width/2, buttonCoords.height/2);
        });
    })

    it('mount ripple in cypress', () => {
        cy.mount(<Ripple>
            <div id='left' style={{width:10 + 'em', height:10+'em', backgroundColor:'#999999', float:'left'}}>Left</div>
            <div id='right' style={{width:10 + 'em', height:10+'em', backgroundColor:'#999999', float:'right'}}>Right</div>
        </Ripple>);
        let buttonCoords;
        const leftButton = cy.get('#left').then($el => {
            buttonCoords = $el[0].getBoundingClientRect();
            console.log(buttonCoords);
            console.log($el[0].innerHTML);
            cy.get('#left').parent().click(buttonCoords.left + buttonCoords.width/2, buttonCoords.top + buttonCoords.height/2);
        });

        cy.wait(500);

        const rightButton = cy.get('#right').then($el => {
            buttonCoords = $el[0].getBoundingClientRect();
            console.log(buttonCoords);
            console.log($el[0].innerHTML);
            cy.get('#right').parent().click(buttonCoords.left + buttonCoords.width/2, buttonCoords.top + buttonCoords.height/2);
        });
    })
})