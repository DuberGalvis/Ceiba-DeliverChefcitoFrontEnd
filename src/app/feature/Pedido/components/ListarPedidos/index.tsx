import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pedido } from '../../models/Pedido';
import { BtnCancelarPedido } from '../CancelarPedido';
import { Table } from './styles';

export interface ListarPedidosProps {
  pedidos: Array<Pedido>;
  onClickCancelarPedido: (pedido: Pedido) => void;
}

export const ListarPedidos: React.FC<ListarPedidosProps> = ({
  pedidos,
  onClickCancelarPedido,
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
        {pedidos.map((pedido: Pedido, index) => {
          return (
            <tr key={index}>
              <td>{`${pedido.nombreProducto} `}</td>
              <td>{`${pedido.tipoReunion} `}</td>
              <td>{`${pedido.fechaRealizacion} `}</td>
              <td>{`${pedido.direccion} `}</td>
              <td>{`${pedido.horasDeServicio} `}</td>
              <td>{`${pedido.valorTotal} `}</td>
              <td>
                <BtnCancelarPedido
                pedido={pedido}
                onCancelar={onClickCancelarPedido} 
                ></BtnCancelarPedido>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ListarPedidos.propTypes = {
    pedidos: PropTypes.array.isRequired,
    onClickCancelarPedido: PropTypes.func.isRequired,
};
