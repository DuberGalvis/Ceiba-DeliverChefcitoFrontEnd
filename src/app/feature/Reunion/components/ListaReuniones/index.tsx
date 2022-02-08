import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Reunion } from '../../models/Reunion';
import { TipoReunion } from '../TipoReunion';
import { DivReuniones, H2Titulo } from './styles';
import { Button } from 'app/shared/components/Button';

export interface ListaReunionesProps {
    reuniones: Array<Reunion>;
    seleccionarReunion: (reunion: Reunion) => void; 
}

export const ListaReuniones: React.FC<ListaReunionesProps> = ({
    reuniones,
    seleccionarReunion,
}) => {
    return (
        <div>
            <H2Titulo>Seleccione el Tipo de su Reunión</H2Titulo>        
            <DivReuniones>
                {reuniones.map((reunion: Reunion, index) => {
                    return (
                        <TipoReunion 
                            key={reunion.tipo} 
                            reunion={reunion} 
                            seleccionarReunion={seleccionarReunion} 
                        />                    
                    );
                })}
            </DivReuniones>
          <Link to='/usuario' replace={true}>
            <Button type="button">Cancelar</Button>
          </Link>
        </div>
    );
};

ListaReuniones.propTypes = {
    reuniones: PropTypes.array.isRequired,
};
