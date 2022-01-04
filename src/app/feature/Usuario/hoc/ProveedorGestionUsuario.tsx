import{
    agregarNuevoUsuario,
    iniciarSesionUsuarioAsync,
    listarPedidosUsuarioAsync,
    cancelarPedidoUsuarioAsync,
    listarProductosAsync,
    listarReunionesAsync,
    agregarPedidoUsuarioAsync,
    modificarPedidoUsuarioAsync,
    actualizarClave,
    darDeBajaUsuario,
    irAgregarUsuario,
    irInicioSesion,
    irPanelPrincipal,
    irActualizarClave,
    irModificarPedidoUsuario,
    cerrarSesionUsuario,
} from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionUsuario } from '../containers/GestionUsuario';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
    return state.usuario;
};

export const ProveedorGestionUsuario = connect(mapStateToProps, {
    agregarSesionUsuario: iniciarSesionUsuarioAsync,
    listarPedidosUsuario: listarPedidosUsuarioAsync,
    cancelarPedidoUsuario :cancelarPedidoUsuarioAsync,
    listarProductos: listarProductosAsync,
    listarReuniones: listarReunionesAsync,
    agregarPedidoUsuario: agregarPedidoUsuarioAsync,
    modificarPedidoUsuario :modificarPedidoUsuarioAsync,
    agregarNuevoUsuario,
    actualizarClave,
    darDeBajaUsuario,
    irAgregarUsuario,
    irInicioSesion,
    irPanelPrincipal,
    irActualizarClave,
    irModificarPedidoUsuario,
    cerrarSesionUsuario,
})(GestionUsuario);
