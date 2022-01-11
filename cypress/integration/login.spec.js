/// <reference types="cypress" />
'use strict'

describe('Pruebas de Login', () => {

    beforeEach(() => {
        cy.visit(`http://localhost:3001/usuario`);
        cy.contains('h2', 'Inicia de Sesión').should('be.visible');
    });

    it('Debe registar un Usuario', () => {
        cy.get('.sc-fznKkj').click();
        cy.get('[name="nombre"]').type('UsuarioPrueba');
        cy.get('[name="clave"]').type('1235');
        cy.get('[name="confirmarClave"]').type('1235');
        cy.contains('button', 'Registrar').click();
        cy.wait(2000);
        cy.get('.sc-fzoLag').should('not.exist');
    });

    it('Debe iniciar sesión el Usuario', () => {
        cy.get('[name="nombre"]').type('UsuarioPrueba');
        cy.get('[name="clave"]').type('1235');
        cy.contains('button', 'Siguiente').click();
        cy.wait(2000);
        cy.contains('a', '| Ajustes de Cuenta').should('be.visible');
    });

    it('Debe fallar con un Usuario erroneo', () => {
        cy.get('[name="nombre"]').type('UsuarioErroneo');
        cy.get('[name="clave"]').type('1235');
        cy.contains('button', 'Siguiente').click();
        cy.wait(2000);
        cy.contains('h2', 'Error de Credenciales o Usuario no Existe').should('be.visible');
    });

    it('Debe de ingresar a ajustes y cambiar la contraseña de Usuario', () => {
        cy.get('[name="nombre"]').type('UsuarioPrueba');
        cy.get('[name="clave"]').type('1235');
        cy.contains('button', 'Siguiente').click();
        cy.wait(2000);
        cy.contains('a', '| Ajustes de Cuenta').should('be.visible');
        cy.contains('a', '| Ajustes de Cuenta').click();
        cy.get('[name="claveActual"]').type('1235');
        cy.get('[name="claveNueva"]').type('1235');
        cy.get('[name="confirmarclaveNueva"]').type('1235');
        cy.wait(2000);
        cy.contains('button', 'Actualizar').click();
        cy.contains('h2', 'Se ha Actualizado su Clave, Inicie Sesión').should('be.visible');
    });

    it('Debe ingresar a ajustes y dar de Baja al Usuario', () => {
        cy.get('[name="nombre"]').type('UsuarioPrueba');
        cy.get('[name="clave"]').type('1235');
        cy.contains('button', 'Siguiente').click();
        cy.wait(2000);
        cy.contains('a', '| Ajustes de Cuenta').should('be.visible');
        cy.contains('a', '| Ajustes de Cuenta').click();
        cy.get('[href="/"] > .sc-fzoiQi').click();
        cy.wait(2000);
    });
});
