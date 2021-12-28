import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { ListarPedidos } from '../../components/ListarPedidos';
import { PaginadorPedidos } from '../../components/PaginadorPedidos';
import { Pedido } from '../../models/Pedido';
import { useEffect } from 'react';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { FormCrearPedido } from '../../components/FormCrearPedido';

interface GestionPedidosProps {
  pedidos: Array<Pedido>;
  agregarPedido: (pedido: Pedido) => void;
  listarPedidosUsuario: (usuario: Usuario, numeroPagina: number) => void;
  cancelarPedido: (pedido: Pedido) => void;
  cantidadTotalPedido: number;
}

export const GestionPedidos: React.FC<GestionPedidosProps> = ({
  pedidos,
  agregarPedido,
  listarPedidosUsuario,
  cancelarPedido,
  cantidadTotalPedido,
}) => {
  useEffect(() => {
    listarPedidosUsuario({nombre: 'Duber', clave: '4577'}, 0);
  }, [listarPedidosUsuario]);
  return (
    <DivContainer>
      <DivRow>
        <ListarPedidos
          pedidos={pedidos}
          onClickCancelarPedido={cancelarPedido}
        />
        <PaginadorPedidos
          cantidadTotalPedidos={cantidadTotalPedido}
          onClickCambiarPagina={listarPedidosUsuario}
        />
        <FormCrearPedido 
          onSubmit={agregarPedido}
          formTitle='Ingresar Pedido'
        />
      </DivRow>
    </DivContainer>
  );
};

GestionPedidos.propTypes = {
    pedidos: PropTypes.array.isRequired,
    listarPedidosUsuario: PropTypes.func.isRequired,
    cancelarPedido: PropTypes.func.isRequired,
    cantidadTotalPedido: PropTypes.number.isRequired,
};