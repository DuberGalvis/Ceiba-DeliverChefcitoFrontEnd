import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { agregarSesionUsuario, cerrarSesionUsuario } from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import reductorUsuario from './usuarioReductor';

describe('Reductor Usuario', () => {
  it('debería agregar la sesion de un Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: true,
      mostrarPanel: false,
      mostrarModificar: false,
      mostrarActualizar: false,
      pedidosListar: [],
      pedidos: [],
      productos: [],
      reuniones: [],
      pedido: {
        usuario: {nombre: '', clave: ''},
        producto: {nombre: '', detalle: '', precio: 0},
        reunion: {tipo: '', precio: 0},
        fechaRealizacion: '',
        direccion: '',
        horasDeServicio: 0,
        valorTotal: 0,
      },
      pedidoListar: {
        id: 0,
        nombreUsuario: '',
        nombreProducto: '',
        tipoReunion: '',
        fechaRealizacion: '',
        direccion: '',
        horasDeServicio: 0,
        valorTotal: 0,
      },
      cambioClaveUsuario: {
        nombre: '', 
        claveActual: '', 
        nuevaClave: ''},
      cantidadTotalPedido: 0,
      cantidadTotalProducto: 0,
      cantidadTotalReuniones: 0,
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
      mostrarModificar: false,
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

  it('debería cerrar sesión del Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: true,
      mostrarPanel: false,
      mostrarModificar: true,
      mostrarActualizar: false,
      pedidosListar: [],
      pedidos: [],
      productos: [],
      reuniones: [],
      pedido: {
        usuario: {nombre: '', clave: ''},
        producto: {nombre: '', detalle: '', precio: 0},
        reunion: {tipo: '', precio: 0},
        fechaRealizacion: '',
        direccion: '',
        horasDeServicio: 0,
        valorTotal: 0,
      },
      pedidoListar: {
        id: 0,
        nombreUsuario: '',
        nombreProducto: '',
        tipoReunion: '',
        fechaRealizacion: '',
        direccion: '',
        horasDeServicio: 0,
        valorTotal: 0,
      },
      cambioClaveUsuario: {
        nombre: '', 
        claveActual: '', 
        nuevaClave: ''},
      cantidadTotalPedido: 0,
      cantidadTotalProducto: 0,
      cantidadTotalReuniones: 0,
    };
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      usuarios: [],
      mostrarPanel: false,
      mostrarAgregar: false,
      mostrarInicio: true,
      mostrarModificar: false,
      mensajeConfirmacion: 'Se ha cerrado sesión correctamente',
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      cerrarSesionUsuario()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
