import {
  CERRAR_SESION_USUARIO,
  SESION_USUARIO,
  INICIO_SESION_USUARIO,
  ERROR_CONSULTA,
  MOSTRAR_AGREGAR,
  MOSTRAR_INICIO,
  MOSTRAR_PANEL,
  USUARIO_CREADO,
  LISTAR_PEDIDOS_USUARIO,
  CANCELAR_PEDIDO_USUARIO,
  AGREGAR_PEDIDO_USUARIO,
  LISTAR_PRODUCTOS,
  LISTAR_REUNIONES,
  TiposAccionesUsuario,
} from '../../acciones/usuario/UsuarioTiposAcciones';
import { EstadoUsuario } from '../../modelo/EstadoUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';

const initialState: EstadoUsuario = {
  usuarios: Array<Usuario>(),
  pedidosListar: Array<PedidoListar>(),
  pedidos: Array<Pedido>(),
  productos: Array<Producto>(),
  reuniones: Array<Reunion>(),
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
  loading: false,
  mensajeError: '',
  mensajeConfirmacion: '',
  mostrarAgregar: false,
  mostrarInicio: true,
  mostrarPanel: false,
};

export default function (
  state = initialState,
  action: TiposAccionesUsuario,
): EstadoUsuario {
  switch (action.type) {
    case CERRAR_SESION_USUARIO: {
      const usuario = action.payload;
      return {
        ...state,
        usuarios: [
          ...state.usuarios.filter((u) => u.nombre !== usuario.nombre),
        ],
        mostrarPanel: false,
        mostrarAgregar: false,
        mostrarInicio: true,
        mensajeConfirmacion: action.confirmacion,
      };
    }
    case SESION_USUARIO: {
      const usuario = action.payload;
      return {
        ...state,
        usuarios: [...state.usuarios, usuario],
        loading: false,
        mostrarPanel: true,
        mostrarAgregar: false,
        mostrarInicio: false,
      };
    }
    case INICIO_SESION_USUARIO: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case LISTAR_PEDIDOS_USUARIO: {
      const pedidosListar = action.payload;
      return {
        ...state,
        pedidosListar,
        cantidadTotalPedido: action.cantidadTotalPedido,
      };
    }
    case USUARIO_CREADO: {
      const confirmacion: string = action.payload;
      return {
        ...state,
        mensajeConfirmacion: confirmacion,
        mostrarPanel: false,
        mostrarAgregar: false,
        mostrarInicio: true,
      };
    }    
    case CANCELAR_PEDIDO_USUARIO: {
      const pedidoListar: PedidoListar = action.payload;
      return {
        ...state,
        pedidosListar: [
          ...state.pedidosListar.filter((p) => p.fechaRealizacion !== pedidoListar.fechaRealizacion),
        ],
        mensajeConfirmacion: action.confirmacion,
      };
    }
    case ERROR_CONSULTA: {
      const error: string = action.payload;
      return {
        ...state,
        mensajeError: error,
      };
    }
    case AGREGAR_PEDIDO_USUARIO: {
      const pedido = action.payload;
      return {
        ...state,
        pedidos: [...state.pedidos, pedido],
        mostrarPanel: true,
        mostrarAgregar: false,
        mostrarInicio: false,
        //mensajeConfirmacion: action.confirmacion,
      };
    }
    case MOSTRAR_AGREGAR: {
      return {
        ...state,
        mostrarAgregar: action.payload,
        mostrarInicio: false,
        mostrarPanel: false,
      };
    }
    case MOSTRAR_INICIO: {
      return {
        ...state,
        mostrarInicio: action.payload,
        mostrarAgregar: false,
        mostrarPanel: false,
      };
    }
    case MOSTRAR_PANEL: {
      return {
        ...state,
        mostrarPanel: action.payload,
        mostrarAgregar: false,
        mostrarInicio: false,
      };
    }
    case LISTAR_PRODUCTOS: {
      const productos = action.payload;
      return {
        ...state,
        productos,
        cantidadTotalProducto: action.cantidadTotalProducto,
      };
    }
    case LISTAR_REUNIONES: {
      const reuniones = action.payload;
      return {
        ...state,
        reuniones,
        cantidadTotalReuniones: action.cantidadTotalReuniones,
      };
    }
    
    default:
      return state;
  }
}

