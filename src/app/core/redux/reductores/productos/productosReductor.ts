import {
  AGREGAR_PRODUCTO,
  LISTAR_PRODUCTOS,
  SELECCIONAR_PRODUCTO,
  TiposAccionesProducto,
} from '../../acciones/productos/ProductosTiposAcciones';
import { EstadoProducto } from '../../modelo/EstadoProducto';
import { Producto } from 'app/feature/Producto/models/Producto';

const initialState: EstadoProducto = {
  producto: {
    nombre: '',
    detalle: '',
    precio: 0,
    nombreImagen: '',
  },
  productos: Array<Producto>(),
  cantidadTotalProducto: 0,
};

export default function (
  state = initialState,
  action: TiposAccionesProducto,
): EstadoProducto {
  switch (action.type) {
    case LISTAR_PRODUCTOS: {
      const productos = action.payload;
      return {
        ...state,
        productos,
        cantidadTotalProducto: action.cantidadTotalProducto,
      };
    }
    case AGREGAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        productos: [...state.productos, producto],
      };
    }
    case SELECCIONAR_PRODUCTO: {
      const producto = action.payload;
      return {
        ...state,
        producto,
      };
    }

    default:
      return state;
  }
}
