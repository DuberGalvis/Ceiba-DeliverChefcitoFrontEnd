import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearReunion } from '../../components/FormCrearReunion';
import { ListarReuniones } from '../../components/ListarReuniones';
import { Reunion } from '../../models/Reunion';
import { useEffect } from 'react';
import store from 'app/core/redux/store';

interface GestionReunionProps {
  reuniones: Array<Reunion>;
  listarReuniones: (numeroReuniones: number) => void;
  agregarNuevaReunion: (reunion: Reunion) => void;
}

export const GestionReunion: React.FC<GestionReunionProps> = ({
  agregarNuevaReunion,
  listarReuniones,
  reuniones,
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
        <ListarReuniones
          reuniones={reuniones}
        />
      </DivRow>
      {listarReuniones}
    </DivContainer>
  );
};

GestionReunion.propTypes = {
  reuniones: PropTypes.array.isRequired,
  listarReuniones: PropTypes.func.isRequired,
  agregarNuevaReunion: PropTypes.func.isRequired,
};
