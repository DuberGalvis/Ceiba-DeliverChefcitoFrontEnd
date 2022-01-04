import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { agregarPedidoUsuario, listarPedidosUsuario, 
    modificarPedidoUsuario, listarProductos, listarReuniones, } from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import reductorUsuario from './usuarioReductor';
import { Pedido } from '../../../../feature/Pedido/models/Pedido';
import { PedidoListar } from '../../../../feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';

describe('Reductor pedidos Usuario', () => {
  it('debería agregar el pedido de un Usuario', () => {
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
      productos: [{
            nombre: 'Paella Española',
            precio: 38000,
            detalle: 'Verduras y sustituye la carne por diversos mariscos, moluscos y pescados'
        }
      ],
      reuniones: [{
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
    const nuevoPedidoUsuario: Pedido = {
        usuario: {nombre: 'Lorem', clave: '1234'},
        producto: {
            nombre: 'Paella Española',
            precio: 38000,
            detalle: 'Verduras y sustituye la carne por diversos mariscos, moluscos y pescados'
        },
        reunion: {
            tipo: 'TIPO_PEQUENA',
            precio: 25000
        },
        fechaRealizacion: new Date('January 4, 2022 3:00 PM').toUTCString(),
        direccion: 'calle 10 # 30-40',
        valorTotal: 63000,
        horasDeServicio:4,
    };
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      pedidos: [...estadoInicial.pedidos, nuevoPedidoUsuario],
        mostrarPanel: true,
        mostrarAgregar: false,
        mostrarInicio: false,
        mostrarModificar: false,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      agregarPedidoUsuario(nuevoPedidoUsuario)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería listar pedidos del Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
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
    const pedidosAListar: PedidoListar[] = [
        {
            id: 4,
            nombreUsuario: 'Lorem',
            nombreProducto: 'Paella Española',
            tipoReunion: 'TIPO_PEQUENA',
            fechaRealizacion: 'January 4, 2022 3:00 PM',
            direccion: 'calle 10 # 30-40',
            horasDeServicio: 4,
            valorTotal: 63000,
        },
        {
            id: 5,
            nombreUsuario: 'Lorem',
            nombreProducto: 'Bandeja Paisa',
            tipoReunion: 'TIPO_MEDIANA',
            fechaRealizacion: 'January 4, 2022 3:00 PM',
            direccion: 'calle 15 # 35-45',
            horasDeServicio: 5,
            valorTotal: 80000,
        }
    ];
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      pedidosListar: pedidosAListar,
        cantidadTotalPedido: pedidosAListar.length,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      listarPedidosUsuario(pedidosAListar, pedidosAListar.length)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería modificar pedidos del Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarPanel: false,
      mostrarModificar: true,
      mostrarActualizar: false,
      pedidosListar: [{
            id: 4,
            nombreUsuario: 'Lorem',
            nombreProducto: 'Paella Española',
            tipoReunion: 'TIPO_PEQUENA',
            fechaRealizacion: 'January 4, 2022 3:00 PM',
            direccion: 'calle 10 # 30-40',
            horasDeServicio: 4,
            valorTotal: 63000,
        },
        {
            id: 5,
            nombreUsuario: 'Lorem',
            nombreProducto: 'Bandeja Paisa',
            tipoReunion: 'TIPO_MEDIANA',
            fechaRealizacion: 'January 4, 2022 3:00 PM',
            direccion: 'calle 15 # 35-45',
            horasDeServicio: 5,
            valorTotal: 80000,
        }
      ],
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
    const pedidoAModificar: Pedido = {
        usuario: estadoInicial.usuarios[0],
        producto: {
            nombre: 'Paella Española',
            precio: 38000,
            detalle: 'Verduras y sustituye la carne por diversos mariscos, moluscos y pescados'
        },
        reunion: {
            tipo: 'TIPO_MEDIANA',
            precio: 50000
        },
        fechaRealizacion: new Date('January 5, 2022 3:00 PM').toUTCString(),
        direccion: 'calle 15 # 35-45',
        valorTotal: 88000,
        horasDeServicio:4,
    };
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      pedidos: [...estadoInicial.pedidos, pedidoAModificar],
      mostrarPanel: true,
      mostrarAgregar: false,
      mostrarInicio: false,
      mostrarModificar: false
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      modificarPedidoUsuario(pedidoAModificar)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería listar productos para el Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
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
    const listaProductos: Producto[] = [
        {
            nombre: 'Paella Española',
            precio: 38000,
            detalle: 'Verduras y sustituye la carne por diversos mariscos, moluscos y pescados'
        },
        {
            nombre: 'Bandeja Paisa',
            precio: 45000,
            detalle: 'Tiene Carne en polvo, chorizo, chicharron, huevo, aguacate, frijoles, arroz, tajada de maduro'
        }
    ];
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      productos: listaProductos,
      cantidadTotalProducto: listaProductos.length,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      listarProductos(listaProductos, listaProductos.length),
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

it('debería listar reuniones para el Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
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
    const listaProductos: Producto[] = [
        {
            nombre: 'Paella Española',
            precio: 38000,
            detalle: 'Verduras y sustituye la carne por diversos mariscos, moluscos y pescados'
        },
        {
            nombre: 'Bandeja Paisa',
            precio: 45000,
            detalle: 'Tiene Carne en polvo, chorizo, chicharron, huevo, aguacate, frijoles, arroz, tajada de maduro'
        }
    ];
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      productos: listaProductos,
      cantidadTotalProducto: listaProductos.length,
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      listarProductos(listaProductos, listaProductos.length),
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });

  it('debería listar reuniones para el Usuario', () => {
    // Arrange
    const estadoInicial: EstadoUsuario = {
      usuarios: [{nombre: 'Lorem', clave: '1234'}],
      loading: false,
      mensajeError: '',
      mensajeConfirmacion: '',
      mostrarAgregar: false,
      mostrarInicio: false,
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
    const listaReuniones: Reunion[] = [
        {
            tipo: 'TIPO_PEQUENA',
            precio: 25000
        }, {
            tipo: 'TIPO_MEDIANA',
            precio: 50000
        }, {
            tipo: 'TIPO_GRANDE',
            precio: 75000
        }
    ];
    const estadoEsperado: EstadoUsuario = {
      ...estadoInicial,
      reuniones: listaReuniones,
      cantidadTotalReuniones: listaReuniones.length,
      
    };

    // Act
    const nuevoEstado = reductorUsuario(
      estadoInicial,
      listarReuniones(listaReuniones, listaReuniones.length),
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
