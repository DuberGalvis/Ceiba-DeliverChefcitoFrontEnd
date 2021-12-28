import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { agregarSesionUsuario } from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import reductorUsuario from './usuarioReductor';

describe('Reductor Usuario', () => {
  it('debería agregar un Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: true,
      mostrarPanel: false,
    };
    const nuevoUsuario: Usuario = {
      nombre: 'Carlos',
      clave: '1234',
    };
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      usuarios: [nuevoUsuario],
      loading: false,
      mostrarPanel: true,
      mostrarAgregar: false,
      mostrarInicio: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      agregarSesionUsuario(nuevoUsuario)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
