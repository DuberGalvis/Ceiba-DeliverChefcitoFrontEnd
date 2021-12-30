import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { CambioClaveUsuario } from 'app/feature/Usuario/models/CambioClaveUsuario';
import { Usuario } from 'app/feature/Usuario/models/Usuario';

export interface EstadoUsuario {
  usuarios: Usuario[];
  pedidosListar: PedidoListar[];
  pedidos: Pedido[];
  productos: Producto[];
  reuniones: Reunion[];
  pedido: Pedido;
  pedidoListar: PedidoListar;
  cambioClaveUsuario: CambioClaveUsuario;
  cantidadTotalPedido: number;
  cantidadTotalProducto: number;
  cantidadTotalReuniones: number;
  loading: boolean;
  mensajeError: string;
  mensajeConfirmacion: string;
  mostrarAgregar: boolean;
  mostrarInicio: boolean;
  mostrarPanel: boolean;
}
