import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Producto/models/Producto';
import { agregarUsuario } from 'app/core/redux/acciones/usuario/usuarioAcciones';
import reductorUsuario from './usuarioReductor';

describe('Reductor usuario', () => {
  it('debería mostrar mensaje de usuario creado', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
        usuarios: [],
        usuario: {nombre: '', clave: ''},
        cambioClaveUsuario: {
          nombre: '', 
          claveActual: '', 
          claveNueva: '',
        },
        mensajeError: '',
        mensajeConfirmacion: '',
        mostrarAgregar: false,
        mostrarInicio: true,
        mostrarPanel: false,
        mostrarActualizar: false,
    };
    const nuevoMensajeConfirmacion: string = 'Created'; 
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      mensajeConfirmacion: '¡Su cuenta ha sido Created!',
      mensajeError: '',
      mostrarPanel: false,
      mostrarAgregar: false,
      mostrarInicio: true,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      agregarUsuario(nuevoMensajeConfirmacion)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
