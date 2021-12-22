import { EstadoProducto } from './EstadoProducto';
import { EstadoReunion } from './EstadoReunion';
import { EstadoUsuario } from './EstadoUsuario';

export interface EstadoGeneral {
  productos: EstadoProducto;
  reuniones: EstadoReunion;
  usuario: EstadoUsuario;
}
