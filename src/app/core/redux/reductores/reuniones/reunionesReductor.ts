import {
    AGREGAR_REUNION,
    LISTAR_REUNIONES,
    SELECCIONAR_REUNION,
    TiposAccionesReunion,
  } from '../../acciones/reunion/ReunionTiposAcciones';
  import { EstadoReunion } from '../../modelo/EstadoReunion';
  import { Reunion } from 'app/feature/Reunion/models/Reunion';
  
const initialState: EstadoReunion = {
  reuniones: Array<Reunion>(),
  reunion: {
    tipo: '',
    precio: 0,
  },
  cantidadTotalReunion: 0,
};
  
export default function (
  state = initialState,
  action: TiposAccionesReunion,
): EstadoReunion {
  switch (action.type) {
    case LISTAR_REUNIONES: {
      const reuniones = action.payload;
      return {
        ...state,
        reuniones,
        cantidadTotalReunion: action.cantidadTotalReuniones,
      };
    }
    case AGREGAR_REUNION: {
      const reunion = action.payload;
      return {
        ...state,
        reuniones: [...state.reuniones, reunion],
      };
    }
    case SELECCIONAR_REUNION: {
      const reunion = action.payload;
      return {
        ...state,
        reunion,
      };
    }

    default:
      return state;
  }
}
