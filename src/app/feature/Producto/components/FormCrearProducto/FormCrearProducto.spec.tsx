import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormCrearProducto } from './';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormCrearProducto test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormCrearProducto> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      onSubmit: stub(),
    };
    componentWrapper = render(<FormCrearProducto {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const POSICION_DOS = 2;
    const POSICION_TRES = 3;
    const NUMERO_CUATRO = 4;
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(NUMERO_CUATRO);
    expect(spans[0].textContent).toBe('El campo nombre es requerido.');
    expect(spans[1].textContent).toBe('El campo precio es requerido.');
    expect(spans[POSICION_DOS].textContent).toBe('El campo detalle es requerido.');
    expect(spans[POSICION_TRES].textContent).toBe('El campo nombre de la imagen es requerido.');
  });

  it('should fail on submit two fields missing', async () => {
    const NUMERO_DOS = 2;
    const elem = componentWrapper.container;
    const nombre = elem.querySelector('input[name="nombre"]');
    const nombreImagen = elem.querySelector('input[name="nombreImagen"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });
    await wait(() => {
      nombreImagen && fireEvent.change(nombreImagen, setTextEvent('nombreImagen', 'imagen.png'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(NUMERO_DOS);
    expect(spans[0].textContent).toBe('El campo precio es requerido.');
    expect(spans[1].textContent).toBe('El campo detalle es requerido.');
  });

  it('should fail on submit one fields missing', async () => {
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const precio = elem.querySelector('input[name="precio"]');
    const nombreImagen = elem.querySelector('input[name="nombreImagen"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });
    await wait(() => {
      precio && fireEvent.change(precio, setTextEvent('precio', '45000'));
    });
    await wait(() => {
      nombreImagen && fireEvent.change(nombreImagen, setTextEvent('nombreImagen', 'imagen.png'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('El campo detalle es requerido.');
  });

  it('should submit', async () => {
    const VALOR_PRECIO = 25000;
    const elem = componentWrapper.container;

    const nombre = elem.querySelector('input[name="nombre"]');
    const precio = elem.querySelector('input[name="precio"]');
    const detalle = elem.querySelector('input[name="detalle"]');
    const nombreImagen = elem.querySelector('input[name="nombreImagen"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      nombre && fireEvent.change(nombre, setTextEvent('nombre', 'Lorem'));
    });
    await wait(() => {
      precio && fireEvent.change(precio, setTextEvent('precio', '25000'));
    });
    await wait(() => {
      detalle && fireEvent.change(detalle, setTextEvent('detalle', 'Dolor'));
    });
    await wait(() => {
      nombreImagen && fireEvent.change(nombreImagen, setTextEvent('nombreImagen', 'imagen.png'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.nombre).toBe('Lorem');
    expect(formSubmitted.precio).toBe(VALOR_PRECIO);
    expect(formSubmitted.detalle).toBe('Dolor');
    expect(formSubmitted.nombreImagen).toBe('imagen.png');
  });
});
