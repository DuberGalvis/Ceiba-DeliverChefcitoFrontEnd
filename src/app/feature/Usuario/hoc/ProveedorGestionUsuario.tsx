import{
    agregarNuevoUsuario,
    iniciarSesionUsuarioAsync,
    actualizarClave,
    darDeBajaUsuario,
    mostrarinicioSesion,
    mostrarAgregarUsuario,
    mostrarPanelPrincipal,
} from 'app/core/redux/acciones/usuario/UsuarioAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionUsuario } from '../containers/GestionUsuario';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
    return state.usuarios
}

export const ProveedorGestionUsuario = connect(mapStateToProps, {
    agregarNuevoUsuario,
    agregarSesionUsuario: iniciarSesionUsuarioAsync,
    actualizarClave,
    darDeBajaUsuario,
    mostrarinicioSesion,
    mostrarAgregarUsuario,
    mostrarPanelPrincipal,
})(GestionUsuario)
