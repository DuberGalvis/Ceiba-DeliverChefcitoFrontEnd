import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Usuario } from '../../models/Usuario';
import { BtnCancelarPedidoUsuario } from '../CancelarPedidoUsuario';
//import { BtnModificarPedidoUsuario } from '../ModificarPedidoUsuario';
import { Table } from './styles';

export interface PanelInicialUsuarioProps {
  pedidosListar: Array<PedidoListar>;
  usuario: Usuario;
  tablaListarTitulo: string;
  //onClickModificarPedido: (pedido: Pedido) => void;
  onClickCancelarPedido: (pedidoListar: PedidoListar) => void;
}

export const PanelInicialUsuario: React.FC<PanelInicialUsuarioProps> = ({
  pedidosListar,
  usuario,
  tablaListarTitulo,
  // onClickModificarPedido,
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
      {pedidosListar.map((pedidoListar: PedidoListar, index) => {
          return (
            <tr key={index}>
              <td>{`${pedidoListar.nombreProducto} `}</td>
              <td>{`${pedidoListar.tipoReunion} `}</td>
              <td>{`${pedidoListar.fechaRealizacion} `}</td>
              <td>{`${pedidoListar.direccion} `}</td>
              <td>{`${pedidoListar.horasDeServicio} `}</td>
              <td>{`${pedidoListar.valorTotal} `}</td>
              <td>
                {/* <BtnModificarPedidoUsuario
                pedido={pedido}
                onModificar={onClickModificarPedido} 
                ></BtnModificarPedidoUsuario> */}
              </td>
              <td>
                <BtnCancelarPedidoUsuario
                pedidoListar={pedidoListar}
                usuario={usuario}
                onCancelar={onClickCancelarPedido} 
                ></BtnCancelarPedidoUsuario>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

PanelInicialUsuario.propTypes = {
  pedidosListar: PropTypes.array.isRequired,
};