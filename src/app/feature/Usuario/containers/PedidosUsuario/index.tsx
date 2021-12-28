import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { ListarPedidos } from 'app/feature/Pedido/components/ListarPedidos';
import { FormCrearPedido } from 'app/feature/Pedido/components/FormCrearPedido';
import { PaginadorPedidos } from 'app/feature/Pedido/components/PaginadorPedidos';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { Usuario } from '../../models/Usuario';

interface PedidosUsuarioProps {
  pedidos: Array<Pedido>;
  cantidadTotalPedido: number;
  listarPedidosUsuario: (usuario: Usuario, numeroPagina: number) => void;
  agregarPedido: (pedido: Pedido) => void;
  cancelarPedido: (pedido: Pedido) => void;
}

export const PedidosUsuario: React.FC<PedidosUsuarioProps> = ({
    pedidos,
    cantidadTotalPedido,
    listarPedidosUsuario,
    agregarPedido,
    cancelarPedido
}) => {
  return (
    <DivContainer>
      <DivRow>
        <FormCrearPedido
          onSubmit={agregarPedido}
          formTitle="Crear Pedidos"
        />
        </DivRow>
        <DivRow>
        <ListarPedidos 
          pedidos={pedidos}
          onClickCancelarPedido={cancelarPedido}
        />
        <PaginadorPedidos
          cantidadTotalPedidos={cantidadTotalPedido}
          onClickCambiarPagina={listarPedidosUsuario}
        />
      </DivRow>
    </DivContainer>
  );
};

PedidosUsuario.propTypes = {
  pedidos: PropTypes.array.isRequired,
  cantidadTotalPedido: PropTypes.number.isRequired,
  listarPedidosUsuario: PropTypes.func.isRequired,
  agregarPedido: PropTypes.func.isRequired,
};