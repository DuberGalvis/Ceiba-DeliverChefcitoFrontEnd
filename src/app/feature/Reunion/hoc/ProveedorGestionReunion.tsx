import{
    agregarNuevaReunion,
    listarReunionesAsync,
    seleccionarReunion,
} from 'app/core/redux/acciones/reunion/ReunionAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionReuniones } from '../containers/GestionReuniones';
import { connect } from 'react-redux';

const mapStateToProps = ({reuniones, usuario}: EstadoGeneral) => {
    return {reuniones, usuario};
};

export const ProveedorGestionReunion = connect(mapStateToProps, {
    listarReuniones: listarReunionesAsync,
    agregarNuevaReunion,
    seleccionarReunion,
})(GestionReuniones);
