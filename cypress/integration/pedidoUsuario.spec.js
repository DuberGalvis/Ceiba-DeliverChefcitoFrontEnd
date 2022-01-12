/// <reference types="cypress" />
'use strict'

describe('Pruebas de Login', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3001/usuario`);
        cy.contains('h2', 'Inicia de Sesión').should('be.visible');
        cy.get('[name="nombre"]').type('UsuarioPrueba2');
        cy.get('[name="clave"]').type('1234');
        cy.contains('button', 'Siguiente').click();
        cy.wait(2000);
        cy.contains('a', '| Ajustes de Cuenta').should('be.visible');
    });

    it('Debe crear un pedido al Usuario', () => {
        cy.contains('a', '| Ir a Pedidos').click();
        cy.wait(2000);
        cy.get('[name="producto"]').select('Nombre: Arroz Chino | Precio: 26000');
        cy.get('[name="reunion"]').select('TIPO_MEDIANA | Precio: 50000');
        cy.get('.react-datepicker__input-container > input').type('January 13, 2022 3:00 PM');
        cy.get('.react-datepicker__day--013').click();
        cy.get('.react-datepicker__time-list-item--selected').click();
        cy.get('[name="direccion"]').type('carrera 80 # 77-44');
        cy.get('[type="number"]').type('5');
        cy.contains('button', 'Hacer Pedido').click();
        cy.contains('h2', 'Su pedido fue Created').should('be.visible');
        cy.wait(2000);
    });

    it('Debe mostrar el pedido realizado del Usuario', () => {
        cy.contains('a', '| Ir a Pedidos').click();
        cy.wait(1500);
    });

    it('Debe modificar un pedido del Usuario', () => {
        cy.contains('a', '| Ir a Pedidos').click();
        cy.wait(2000);
        cy.get('a > .sc-fzqBZW').click();
        cy.get('[name="producto"]').select('Nombre: Arroz Chino | Precio: 26000');
        cy.get('[name="reunion"]').select('TIPO_GRANDE | Precio: 75000');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--013').click();
        cy.get('.react-datepicker__time-list-item--selected').click();
        cy.get('[name="direccion"]').type('carrera 80 # 77-44');
        cy.get('[type="number"]').type('5');
        cy.contains('button', 'Modificar Pedido').click();
        cy.contains('h2', 'Su Pedido ha sido modificado OK').should('be.visible');
        cy.wait(1500);
        cy.contains('button', 'Regresar').click();
    });

    it('Debe cancelar el pedido del Usuario', () => {
        cy.contains('a', '| Ir a Pedidos').click();
        cy.wait(2000);
        cy.get(':nth-child(8) > .sc-fzqBZW').click();
        cy.contains('h2', 'Cancelación Exitosa').should('be.visible');
    });

    it('Debe de generar error al solicitar pedido del usuario', () => {
        cy.contains('a', '| Ir a Pedidos').click();
        cy.wait(2000);
        cy.get('a > .sc-fzqBZW').click();
        cy.get('[name="producto"]').select('Nombre: Bandeja Paisa | Precio: 45000');
        cy.get('[name="reunion"]').select('TIPO_PEQUENA | Precio: 25000');
        cy.get('.react-datepicker__input-container > input').click();
        cy.get('.react-datepicker__day--013').click();
        cy.get('.react-datepicker__time-list-item--selected').click();
        cy.get('[name="direccion"]').type('carrera 80 # 77-44');
        cy.get('[type="number"]').type('5');
        cy.contains('button', 'Modificar Pedido').click();
        cy.contains('h2', 'Su Pedido ha sido modificado OK').should('be.visible');
        cy.wait(1500);
        cy.contains('button', 'Regresar').click();
    });
});
