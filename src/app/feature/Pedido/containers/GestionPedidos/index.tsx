import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { ListarPedidos } from '../../components/ListarPedidos';
import { PaginadorPedidos } from '../../components/PaginadorPedidos';
import { Pedido } from '../../models/Pedido';
import { useEffect } from 'react';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { FormCrearPedido } from '../../components/FormCrearPedido';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { PedidoListar } from '../../models/PedidoListar';

interface GestionPedidosProps {
  usuario: Usuario;
  producto: Producto;
  reunion: Reunion;
  pedidosListar: Array<PedidoListar>;
  agregarPedido: (pedido: Pedido) => void;
  listarPedidosUsuario: (usuario: Usuario, numeroPagina: number) => void;
  cancelarPedido: (pedidoListar: PedidoListar) => void;
  cantidadTotalPedido: number;
}

export const GestionPedidos: React.FC<GestionPedidosProps> = ({
  usuario,
  producto,
  reunion,
  pedidosListar,
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
          pedidosListar={pedidosListar}
          onClickCancelarPedido={cancelarPedido}
        />
        <PaginadorPedidos
          cantidadTotalPedidos={cantidadTotalPedido}
          onClickCambiarPagina={listarPedidosUsuario}
        />
        <FormCrearPedido 
          onSubmit={agregarPedido}
          formTitle='Ingresar Pedido'
          usuario={usuario}
          producto={producto}
          reunion={reunion}
        />
      </DivRow>
    </DivContainer>
  );
};

GestionPedidos.propTypes = {
    pedidosListar: PropTypes.array.isRequired,
    listarPedidosUsuario: PropTypes.func.isRequired,
    cancelarPedido: PropTypes.func.isRequired,
    cantidadTotalPedido: PropTypes.number.isRequired,
};