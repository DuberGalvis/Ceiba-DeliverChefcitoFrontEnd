import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearReunion } from '../../components/FormCrearReunion';
import { ListaReuniones } from '../../components/ListaReuniones';
import { PaginadorReunion } from '../../components/PaginadorReunion';
import { Reunion } from '../../models/Reunion';
import { useEffect } from 'react';
import store from 'app/core/redux/store';

interface GestionReunionProps {
  reuniones: Array<Reunion>;
  listarReuniones: (numeroPagina: number) => void;
  agregarNuevaReunion: (reunion: Reunion) => void;
  cantidadTotalReuniones: number;
}

export const GestionReunion: React.FC<GestionReunionProps> = ({
  agregarNuevaReunion,
  reuniones= [],
  listarReuniones,
  cantidadTotalReuniones = 0,
}) => {
  useEffect(() => {
    listarReuniones(0);
  }, [listarReuniones]);
  reuniones = store.getState().reunion.reuniones;
  return (
    <DivContainer>
      <DivRow>
        <FormCrearReunion
          onSubmit={agregarNuevaReunion}
          formTitle="Crear Reunion"
        />
      </DivRow>
      <DivRow>
        <ListaReuniones
          reuniones={reuniones}
        />
        <PaginadorReunion
          cantidadTotalReuniones={cantidadTotalReuniones} 
          onClickCambiarPagina={listarReuniones}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionReunion.propTypes = {
  reuniones: PropTypes.array.isRequired,
  listarReuniones: PropTypes.func.isRequired,
  agregarNuevaReunion: PropTypes.func.isRequired,
  cantidadTotalReuniones: PropTypes.number.isRequired,
};
