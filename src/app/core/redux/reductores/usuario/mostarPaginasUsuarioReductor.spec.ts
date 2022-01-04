import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { irActualizarClave, irAgregarUsuario, irInicioSesion, irPanelPrincipal, irModificarPedidoUsuario } from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import reductorUsuario from './usuarioReductor';
import { PedidoListar } from '../../../../feature/Pedido/models/PedidoListar';

describe('Reductor mostrar paginas Usuario', () => {
  it('debería mostrar Form actualizar clave Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
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
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      mostrarActualizar: true,
      mostrarPanel: false,
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarModificar: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      irActualizarClave()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería motrar Form agregar un Usuario', () => {
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
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      usuarios: [],
      mostrarPanel: false,
      mostrarAgregar: true,
      mostrarInicio: false,
      mostrarModificar: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      irAgregarUsuario()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería motrar Form iniciar sesión Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: true,
      mostrarInicio: false,
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
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      usuarios: [],
      mostrarPanel: false,
      mostrarAgregar: false,
      mostrarInicio: true,
      mostrarModificar: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      irInicioSesion()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería motrar pagina inicial de Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
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
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      mostrarPanel: true,
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarModificar: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      irPanelPrincipal()
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería motrar pagina modificar Pedido Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarPanel: true,
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
      pedidoListar: {},
      cambioClaveUsuario: {
        nombre: '', 
        claveActual: '', 
        nuevaClave: ''},
      cantidadTotalPedido: 0,
      cantidadTotalProducto: 0,
      cantidadTotalReuniones: 0,
    };
    const pedidoAModificar: PedidoListar = {
      id: 4,
      nombreUsuario: 'Lorem',
      nombreProducto: 'Paella Española',
      tipoReunion: 'TIPO_PEQUENA',
      fechaRealizacion: 'January 4, 2022 3:00 PM',
      direccion: 'calle 10 # 30-40',
      horasDeServicio: 4,
      valorTotal: 63000,
    };
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      pedidoListar: pedidoAModificar,
      mostrarPanel: false,
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarActualizar: false,
      mostrarModificar: true,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      irModificarPedidoUsuario(pedidoAModificar)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
