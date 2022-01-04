import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Usuario } from '../../models/Usuario';
import { BtnCancelarPedidoUsuario } from '../CancelarPedidoUsuario';
import { BtnModificarPedidoUsuario } from '../ModificarPedidoUsuario';
import { Table } from './styles';
import { useEffect } from 'react';

const fechaYHora = (fechaRealizacion: string) => {
  if(fechaRealizacion.length === 0) {
    return 'Fecha no encontrada';
  }
  return new Date(fechaRealizacion).toLocaleString('es-CO', { hour12: true});
};

export interface PanelInicialUsuarioProps {
  pedidosListar: Array<PedidoListar>;
  usuario: Usuario;
  tablaListarTitulo: string;
  onClickModificarPedido: (pedidoListar: PedidoListar) => void;
  onClickCancelarPedido: (pedidoListar: PedidoListar) => void;
  listarPedidosUsuario: (usuario: Usuario, numeroPaginas: number) => void;
}

export const PanelInicialUsuario: React.FC<PanelInicialUsuarioProps> = ({
  pedidosListar,
  usuario,
  tablaListarTitulo,
  onClickModificarPedido,
  onClickCancelarPedido,
  listarPedidosUsuario,
}) => {
  useEffect(() => {
    listarPedidosUsuario(usuario, 0);
  },);
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
            <tr key={pedidoListar.id}>
              <td>{`${pedidoListar.nombreProducto} `}</td>
              <td>{`${pedidoListar.tipoReunion} `}</td>
              <td>{`${fechaYHora(pedidoListar.fechaRealizacion)}`}</td>
              <td>{`${pedidoListar.direccion} `}</td>
              <td>{`${pedidoListar.horasDeServicio} `}</td>
              <td>{`${pedidoListar.valorTotal} `}</td>
              <td>
                <BtnModificarPedidoUsuario
                pedidoListar={pedidoListar}
                onModificar={onClickModificarPedido} 
                ></BtnModificarPedidoUsuario>
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
