import { Usuario } from 'app/feature/Usuario/models/Usuario';

export interface EstadoUsuario {
  usuarios: Usuario[];
  loading: boolean;
  mensajeError: string;
  mensajeConfirmacion: string;
  mostrarAgregar: boolean;
  mostrarInicio: boolean;
  mostrarPanel: boolean;
}
