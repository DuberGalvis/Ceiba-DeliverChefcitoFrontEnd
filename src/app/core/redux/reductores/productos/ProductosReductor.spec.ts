import { EstadoProducto } from 'app/core/redux/modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';
import { agregarProducto } from 'app/core/redux/acciones/productos/ProductosAcciones';
import reductorProductos from './productosReductor';

describe('Reductor productos', () => {
  it('debería agregar productos', () => {
    // Arrange
    const estadoInicial: EstadoProducto = {
      cantidadTotalProducto: 2,
      productos: [],
    };
    const nuevoProducto: Producto = {
      nombre: 'Bandeja Paisa',
      precio: 45000,
      detalle: 'Lorem Ipsum is simply dummy text of the printing and',
    };
    const estadoEsperado: EstadoProducto = {
      ...estadoInicial,
      productos: [nuevoProducto],
    };

    // Act
    const nuevoEstado = reductorProductos(
      estadoInicial,
      agregarProducto(nuevoProducto)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
