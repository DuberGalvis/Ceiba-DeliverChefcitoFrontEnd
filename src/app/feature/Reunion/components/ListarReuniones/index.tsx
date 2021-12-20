import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Reunion } from '../../models/Reunion';
import { Table } from './styles';

export interface ListarReunionesProps {
    reuniones: Array<Reunion>; 
}

export const ListarReuniones: React.FC<ListarReunionesProps> = ({reuniones}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <td>
                        <b>Tipo de Reunion</b>
                    </td>
                    <td>
                        <b>Precio</b>
                    </td>
                </tr>
            </thead>
            <tbody>
                {reuniones.map((reunion: Reunion) => {
                        return (
                            <tr key={reunion.tipo}>
                                <td>{reunion.tipo}</td>
                                <td>{reunion.precio}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
};

ListarReuniones.propTypes = {
    reuniones: PropTypes.array.isRequired,
}