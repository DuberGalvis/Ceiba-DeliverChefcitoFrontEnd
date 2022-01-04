import * as PropTypes from 'prop-types';
import * as React from 'react';
import { PedidoListar } from '../../models/PedidoListar';
import { Table } from './styles';

export interface ListarPedidosProps {
  pedidosListar: Array<PedidoListar>;
}

export const ListarPedidos: React.FC<ListarPedidosProps> = ({
  pedidosListar,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>
            <b>Producto</b>
          </td>
          <td>
            <b>Tipo de reunión</b>
          </td>
          <td>
            <b>Fecha y hora de Realización</b>
          </td>
          <td>
            <b>Dirección</b>
          </td>
          <td>
            <b>Numero de Horas de servicio</b>
          </td>
          <td>
            <b>Valor Total</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {pedidosListar.map((pedidoListar: PedidoListar, index) => {
          return (
            <tr key={index}>
              <td>{`${pedidoListar.nombreProducto} `}</td>
              <td>{`${pedidoListar.tipoReunion} `}</td>
              <td>{`${pedidoListar.fechaRealizacion} `}</td>
              <td>{`${pedidoListar.direccion} `}</td>
              <td>{`${pedidoListar.horasDeServicio} `}</td>
              <td>{`${pedidoListar.valorTotal} `}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListarPedidos.propTypes = {
    pedidosListar: PropTypes.array.isRequired,
};
