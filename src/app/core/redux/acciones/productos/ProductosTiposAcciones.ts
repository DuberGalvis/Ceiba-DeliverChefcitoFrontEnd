import { Producto } from 'app/feature/Producto/models/Producto';

export const LISTAR_PRODUCTOS = 'LISTAR_PRODUCTOS';
export const AGREGAR_PRODUCTO = 'AGREGAR_PRODUCTO';
export const SELECCIONAR_PRODUCTO = 'SELECCIONAR_PRODUCTO';

interface AccionListarProductos {
  type: typeof LISTAR_PRODUCTOS;
  payload: Producto[];
  cantidadTotalProducto: number;
}

interface AccionAgregarProducto {
  type: typeof AGREGAR_PRODUCTO;
  payload: Producto;
}

interface AccionSeleccionarProducto {
  type: typeof SELECCIONAR_PRODUCTO;
  payload: Producto;
}

export type TiposAccionesProducto =
  | AccionListarProductos
  | AccionAgregarProducto
  | AccionSeleccionarProducto;
