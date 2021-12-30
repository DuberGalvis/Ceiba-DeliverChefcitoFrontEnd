import{
    agregarNuevoUsuario,
    iniciarSesionUsuarioAsync,
    listarPedidosUsuarioAsync,
    cancelarPedidoUsuarioAsync,
    listarProductosAsync,
    listarReunionesAsync,
    agregarPedidoUsuarioAsync,
    actualizarClave,
    darDeBajaUsuario,
    irAgregarUsuario,
    irInicioSesion,
    irPanelPrincipal,
} from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionUsuario } from '../containers/GestionUsuario';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
    return state.usuario;
}

export const ProveedorGestionUsuario = connect(mapStateToProps, {
    agregarNuevoUsuario,
    agregarSesionUsuario: iniciarSesionUsuarioAsync,
    listarPedidosUsuario: listarPedidosUsuarioAsync,
    cancelarPedidoUsuario :cancelarPedidoUsuarioAsync,
    listarProductos: listarProductosAsync,
    listarReuniones: listarReunionesAsync,
    agregarPedidoUsuario: agregarPedidoUsuarioAsync,
    actualizarClave,
    darDeBajaUsuario,
    irAgregarUsuario,
    irInicioSesion,
    irPanelPrincipal,
})(GestionUsuario);
