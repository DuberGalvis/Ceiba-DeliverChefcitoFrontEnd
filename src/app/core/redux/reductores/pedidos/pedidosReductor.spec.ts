import { EstadoPedido } from 'app/core/redux/modelo/EstadoPedido';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { agregarPedido } from 'app/core/redux/acciones/pedido/PedidosAcciones';
import reductorPedidos from './pedidosReductor';

describe('Reductor productos', () => {
  it('debería agregar productos', () => {
    // Arrange
    const estadoInicial: EstadoPedido = {
      cantidadTotalPedido: 0,
      pedidos: [],
    };
    const nuevoPedido: Pedido = {
      nombreUsuario: 'Carlos',
      nombreProducto: 'Bandeja Paisa',
      tipoReunion: 'TIPO_GRANDE',
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
