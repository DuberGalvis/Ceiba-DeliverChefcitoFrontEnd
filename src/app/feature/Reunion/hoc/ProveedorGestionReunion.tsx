import{
    agregarNuevaReunion,
    listarReunionesAsync,
} from 'app/core/redux/acciones/reunion/ReunionAcciones';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { GestionReunion } from '../containers/GestionReunion';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
    return state.reuniones;
}

export const ProveedorGestionReunion = connect(mapStateToProps, {
    listarReuniones: listarReunionesAsync,
    agregarNuevaReunion,
})(GestionReunion);
