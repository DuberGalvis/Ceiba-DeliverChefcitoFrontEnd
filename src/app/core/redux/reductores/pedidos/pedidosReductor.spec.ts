import { EstadoPedido } from 'app/core/redux/modelo/EstadoPedido';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { agregarPedido } from 'app/core/redux/acciones/pedido/PedidosAcciones';
import reductorPedidos from './pedidosReductor';

describe('Reductor pedidos', () => {
  it('debería agregar pedidos', () => {
    // Arrange
    const estadoInicial: EstadoPedido = {
      cantidadTotalPedido: 0,
      pedidosListar: [],
      pedidos: [],
      usuario: {nombre: '', clave: ''},
      producto: {nombre: '', detalle: '', precio: 0},
      reunion: {tipo: '', precio: 0},
    };
    const nuevoPedido: Pedido = {
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
      fechaRealizacion: '2021-12-28T16:00:00.194Z',
      direccion: 'Carrera 80 # 50-32',
      horasDeServicio: 6,
      valorTotal: 67000,
    };
    const estadoEsperado: EstadoPedido = {
      ...estadoInicial,
      pedidos: [nuevoPedido],
    };

    // Act
    const nuevoEstado = reductorPedidos(
      estadoInicial,
      agregarPedido(nuevoPedido)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
