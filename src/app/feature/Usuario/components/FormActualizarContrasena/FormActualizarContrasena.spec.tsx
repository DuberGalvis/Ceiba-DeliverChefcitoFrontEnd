import * as React from 'react';
import { RenderResult, fireEvent, render, wait } from '@testing-library/react';
import { SinonStub, stub } from 'sinon';
import { FormActualizarContrasena } from '.';
import { setTextEvent } from 'app/shared/utils/test';

describe('FormActualizarContrasena test', () => {
  let componentWrapper: RenderResult;
  let componentProps: React.ComponentProps<typeof FormActualizarContrasena> & {
    onSubmit: SinonStub;
  };

  beforeEach(() => {
    componentProps = {
      formTitle: 'Form test',
      usuario: {nombre: 'Lorem', clave: '1234'},
      onSubmit: stub(),
    };
    componentWrapper = render(<FormActualizarContrasena {...componentProps} />);
  });

  it('should match snapshot', () => {
    expect(componentWrapper.container).toMatchSnapshot();
  });

  it('should fail on submit all fields missing', async () => {
    const elem = componentWrapper.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(3);
    expect(spans[0].textContent).toBe('El campo clave actual es requerido.');
    expect(spans[1].textContent).toBe('El campo de nueva clave es requerido.');
    expect(spans[2].textContent).toBe('El campo de confirmar nueva clave es requerido.');
  });

  it('should fail on submit two fields missing', async () => {
    const elem = componentWrapper.container;
    const claveActual = elem.querySelector('input[name="claveActual"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        claveActual && fireEvent.change(claveActual, setTextEvent('claveActual', '1234'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(2);
    expect(spans[0].textContent).toBe('El campo de nueva clave es requerido.');
    expect(spans[1].textContent).toBe('El campo de confirmar nueva clave es requerido.');
  });

  it('should fail on submit one fields missing', async () => {
    const elem = componentWrapper.container;

    const claveActual = elem.querySelector('input[name="claveActual"]');
    const nuevaClave = elem.querySelector('input[name="nuevaClave"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        claveActual && fireEvent.change(claveActual, setTextEvent('claveActual', '1234'));
    });
    await wait(() => {
        nuevaClave && fireEvent.change(nuevaClave, setTextEvent('nuevaClave', '4321'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('El campo de confirmar nueva clave es requerido.');
  });

  it('should fail on submit compare two fields nuevaClave and confirmarNuevaClave', async () => {
    const elem = componentWrapper.container;

    const claveActual = elem.querySelector('input[name="claveActual"]');
    const nuevaClave = elem.querySelector('input[name="nuevaClave"]');
    const confirmarNuevaClave = elem.querySelector('input[name="confirmarNuevaClave"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        claveActual && fireEvent.change(claveActual, setTextEvent('claveActual', '1234'));
    });
    await wait(() => {
        nuevaClave && fireEvent.change(nuevaClave, setTextEvent('nuevaClave', '4321'));
    });
    await wait(() => {
      confirmarNuevaClave && fireEvent.change(confirmarNuevaClave, setTextEvent('confirmarNuevaClave', '4322'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });
    const spans = elem.querySelectorAll('span');
    expect(spans.length).toBe(1);
    expect(spans[0].textContent).toBe('Error, La nueva clave no coincide');
  });

  it('should submit', async () => {
    const elem = componentWrapper.container;

    const claveActual = elem.querySelector('input[name="claveActual"]');
    const nuevaClave = elem.querySelector('input[name="nuevaClave"]');
    const confirmarNuevaClave = elem.querySelector('input[name="confirmarNuevaClave"]');
    const submitButton = elem.querySelector('button[type="submit"]');

    await wait(() => {
        claveActual && fireEvent.change(claveActual, setTextEvent('claveActual', '1234'));
    });
    await wait(() => {
        nuevaClave && fireEvent.change(nuevaClave, setTextEvent('nuevaClave', '4321'));
    });
    await wait(() => {
        confirmarNuevaClave && fireEvent.change(confirmarNuevaClave, setTextEvent('confirmarNuevaClave', '4321'));
    });

    await wait(() => {
      submitButton && fireEvent.click(submitButton);
    });

    const formSubmitted = componentProps.onSubmit.firstCall.args[0];

    expect(formSubmitted.nombre).toBe('Lorem');
    expect(formSubmitted.claveActual).toBe('1234');
    expect(formSubmitted.nuevaClave).toBe('4321');
  });
});
