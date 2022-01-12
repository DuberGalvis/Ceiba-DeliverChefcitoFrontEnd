import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormModificarPedidoUsuario } from '.';
import { setTextEvent } from 'app/shared/utils/test';
import { constantes } from 'app/shared/utils/constantes';

const {
    HORAS24,
    HORA15,
    MINUTOS60,
    SEGUNDOS60,
    MILISEGUNDOS,
    CUATRO,
} = constantes;

const fechaDeHoy: Date = new Date();
const fechaDiaSiguiente: Date = new Date(fechaDeHoy.getTime() + (HORAS24 * MINUTOS60 * SEGUNDOS60 * MILISEGUNDOS));
const SEISMIL3 = 63000;

describe('FormModificarPedidoUsuario test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormModificarPedidoUsuario> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
      irPedidos: stub(),
      productos: [{
              nombre: 'Paella Española',
              precio: 38000,
              detalle: 'Verduras y sustituye'
          }
        ],
      usuarios:[{nombre: 'Lorem', clave: '1234'}],
      reuniones:[{
              tipo: 'TIPO_PEQUENA',
              precio: 25000
          }, {
              tipo: 'TIPO_MEDIANA',
              precio: 50000
          }, {
              tipo: 'TIPO_GRANDE',
              precio: 75000
          }
        ],
        pedidoListar: {id: 4,
          nombreUsuario: 'Lorem',
          nombreProducto: 'Paella Española',
          tipoReunion: 'TIPO_PEQUENA',
          fechaRealizacion: 'January 4, 2022 3:00 PM',
          direccion: 'calle 10 # 30-40',
          horasDeServicio: 4,
          valorTotal: 63000,},
          mensajeModificar: '',
    };
    componentWrapper = render(<FormModificarPedidoUsuario {...componentProps} />);
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const producto = elem.querySelector('select[name="producto"]');
    const reunion = elem.querySelector('select[name="reunion"]');
    const fechaRealizacion = elem.querySelector('input[name="fechaRealizacion"]');
    const direccion = elem.querySelector('input[name="direccion"]');
    const horasDeServicio = elem.querySelector('input[name="horasDeServicio"]');
    const valorTotalPedido = elem.querySelector('label[name="valorTotalPedido"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    const fechaComparar = new Date(fechaDiaSiguiente.setHours(HORA15,0,0))
    .toISOString();

    await wait(() => {
        producto && fireEvent.change(producto, setTextEvent('producto', `"{\\"nombre\\":\\"Paella Española\\",
          \\"precio\\":\\"38000\\",\\"detalle\\":\\"Verduras y sustituye\\"}"`));
    });
    await wait(() => {
        reunion && fireEvent.change(reunion, setTextEvent('reunion', `"{\\"tipo\\":\\"TIPO_PEQUENA\\",\\"precio\\":25000}"`));
    });
    await wait(() => {
        fechaRealizacion && fireEvent.change(fechaRealizacion, setTextEvent('fechaRealizacion', fechaComparar));
    });
    await wait(() => {
        direccion && fireEvent.change(direccion, setTextEvent('direccion', 'calle 10 # 30-40'));
    });
    await wait(() => {
        horasDeServicio && fireEvent.change(horasDeServicio, setTextEvent('horasDeServicio', '4'));
    });
    await wait(() => {
        valorTotalPedido && fireEvent.change(valorTotalPedido, setTextEvent('valorTotalPedido', '63000'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[1];

    expect(formSubmitted.usuario).toStrictEqual({nombre: 'Lorem', clave: '1234'});
    expect(formSubmitted.producto).toStrictEqual({
        nombre: 'Paella Española',
        precio: 38000,
        detalle: 'Verduras y sustituye'
    });
    expect(formSubmitted.reunion).toStrictEqual({
        tipo: 'TIPO_PEQUENA',
        precio: 25000
    });
    expect(formSubmitted.fechaRealizacion).toBe(new Date(fechaComparar)
    .toISOString());
    expect(formSubmitted.direccion).toBe('calle 10 # 30-40');
    expect(parseInt(formSubmitted.valorTotal, 10)).toBe(SEISMIL3);
    expect(parseInt(formSubmitted.horasDeServicio, 10)).toBe(CUATRO);
  });
});
