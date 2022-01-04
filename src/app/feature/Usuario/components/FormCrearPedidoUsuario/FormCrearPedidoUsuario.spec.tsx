import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearPedidoUsuario } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearPedidoUsuario test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearPedidoUsuario> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
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
    };
    componentWrapper = render(<FormCrearPedidoUsuario {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const horasDeServicio = elem.querySelector('input[name="horasDeServicio"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        horasDeServicio && fireEvent.change(horasDeServicio, setTextEvent('horasDeServicio', ''));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(5);
    expect(spans[0].textContent).toBe('El Producto es requerido.');
    expect(spans[1].textContent).toBe('La Reunion es requerida.');
    expect(spans[2].textContent).toBe('El campo Direccion es requerido.');
    expect(spans[3].textContent).toBe('El campo Horas de Servicio es requerido.');
    expect(spans[4].textContent).toBe('El valor del pedido no puede ser 0');
  });

  it('should fail on submit five fields missing', async () => {
    const elem = componentWrapper.container;
    const producto = elem.querySelector('select[name="producto"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        producto && fireEvent.change(producto, setTextEvent('producto', `"{\\"nombre\\":\\"Paella Española\\",\\"precio\\":\\"38000\\",\\"detalle\\":\\"Verduras y sustituye\\"}"`));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe('La Reunion es requerida.');
    expect(spans[1].textContent).toBe('El campo Direccion es requerido.');
    expect(spans[2].textContent).toBe('Minimo 4 horas');
  });

  it('should fail on submit two fields missing', async () => {
    const elem = componentWrapper.container;

    const producto = elem.querySelector('select[name="producto"]');
    const reunion = elem.querySelector('select[name="reunion"]');
    const fechaRealizacion = elem.querySelector('input[name="fechaRealizacion"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        producto && fireEvent.change(producto, setTextEvent('producto', `"{\\"nombre\\":\\"Paella Española\\",\\"precio\\":\\"38000\\",\\"detalle\\":\\"Verduras y sustituye\\"}"`));
    });
    await wait(() => {
        reunion && fireEvent.change(reunion, setTextEvent('reunion', `"{\\"tipo\\":\\"TIPO_PEQUENA\\",\\"precio\\":25000}"`));
    });
    await wait(() => {
        fechaRealizacion && fireEvent.change(fechaRealizacion, setTextEvent('fechaRealizacion', 'January 4, 2022 3:00 PM'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('El campo Direccion es requerido.');
    expect(spans[1].textContent).toBe('Minimo 4 horas');
  });

  it('should fail on submit one fields missing', async () => {
    const elem = componentWrapper.container;

    const producto = elem.querySelector('select[name="producto"]');
    const reunion = elem.querySelector('select[name="reunion"]');
    const fechaRealizacion = elem.querySelector('input[name="fechaRealizacion"]');
    const direccion = elem.querySelector('input[name="direccion"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        producto && fireEvent.change(producto, setTextEvent('producto', `"{\\"nombre\\":\\"Paella Española\\",\\"precio\\":\\"38000\\",\\"detalle\\":\\"Verduras y sustituye\\"}"`));
    });
    await wait(() => {
        reunion && fireEvent.change(reunion, setTextEvent('reunion', `"{\\"tipo\\":\\"TIPO_PEQUENA\\",\\"precio\\":25000}"`));
    });
    await wait(() => {
        fechaRealizacion && fireEvent.change(fechaRealizacion, setTextEvent('fechaRealizacion', 'January 4, 2022 3:00 PM'));
    });
    await wait(() => {
        direccion && fireEvent.change(direccion, setTextEvent('direccion', 'calle 10 # 30-40'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('Minimo 4 horas');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const fechaDeHoy: Date = new Date();
    const fechaDiaSiguiente: Date = new Date(fechaDeHoy.getTime() + (24 * 60 * 60 * 1000));

    const producto = elem.querySelector('select[name="producto"]');
    const reunion = elem.querySelector('select[name="reunion"]');
    const fechaRealizacion = elem.querySelector('input[name="fechaRealizacion"]');
    const direccion = elem.querySelector('input[name="direccion"]');
    const horasDeServicio = elem.querySelector('input[name="horasDeServicio"]');
    const valorTotalPedido = elem.querySelector('label[name="valorTotalPedido"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        producto && fireEvent.change(producto, setTextEvent('producto', `"{\\"nombre\\":\\"Paella Española\\",\\"precio\\":\\"38000\\",\\"detalle\\":\\"Verduras y sustituye\\"}"`));
    });
    await wait(() => {
        reunion && fireEvent.change(reunion, setTextEvent('reunion', `"{\\"tipo\\":\\"TIPO_PEQUENA\\",\\"precio\\":25000}"`));
    });
    await wait(() => {
        fechaRealizacion && fireEvent.change(fechaRealizacion, setTextEvent('fechaRealizacion', 'January 4, 2022 3:00 PM'));
    });
    await wait(() => {
        direccion && fireEvent.change(direccion, setTextEvent('direccion', 'calle 10 # 30-40'));
    });
    await wait(() => {
        horasDeServicio && fireEvent.change(horasDeServicio, setTextEvent('horasDeServicio', 4));
    });
    await wait(() => {
        valorTotalPedido && fireEvent.change(valorTotalPedido, setTextEvent('valorTotalPedido', 63000));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

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
    expect(formSubmitted.fechaRealizacion).toBe(new Date(fechaDiaSiguiente.setHours(15,0,0))
      .toLocaleString('es-CO', { hour12: true}));
    expect(formSubmitted.direccion).toBe('calle 10 # 30-40');
    expect(formSubmitted.valorTotal).toBe(63000);
    expect(formSubmitted.horasDeServicio).toBe(4);
  });
});