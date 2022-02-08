import { Producto } from 'app/feature/Producto/models/Producto';

export interface EstadoProducto {
  producto: Producto;
  productos: Producto[];
  cantidadTotalProducto: number;
}
