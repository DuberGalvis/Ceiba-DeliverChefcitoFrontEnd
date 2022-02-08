import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Reunion } from '../../models/Reunion';
import { Button } from 'app/shared/components/Button';
import { DivReunion, 
  DivReunionInfo, 
  ImgReunion, 
  H2ReunionInfo } from './styles';

export interface TipoReunionProps {
  reunion: Reunion;
  seleccionarReunion: (producto: Reunion) => void;
}

export const TipoReunion: React.FC<TipoReunionProps> = ({
  reunion,
  seleccionarReunion,
}) => {
  const handleClickReunion = () => {
    seleccionarReunion(reunion);
  };
  return (
    <DivReunion onClick={handleClickReunion}>
      <ImgReunion src={require(`assets/img/${reunion.tipo}.png`)} alt={reunion.tipo} />
      <DivReunionInfo>
        <H2ReunionInfo>
          {reunion.tipo}: ${reunion.precio}
        </H2ReunionInfo>
      </DivReunionInfo>
      <Link to='/crear-pedido' replace={true}>
        <Button type="button" onClick={handleClickReunion}>Seleccionar</Button>
      </Link>
    </DivReunion>
  );
};

TipoReunion.propTypes = {
  reunion: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
};
