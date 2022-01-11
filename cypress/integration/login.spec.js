/// <reference types="cypress" />
'use strict'

describe('Pruebas de Login', () => {
    it('Debe cargar el loguin', () => {
        cy.visit(`http://localhost:3001/usuario`);
    });
});