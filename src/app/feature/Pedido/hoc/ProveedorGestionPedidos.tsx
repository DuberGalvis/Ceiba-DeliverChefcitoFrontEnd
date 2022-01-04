import {
    agregarPedidoAsync,
    listarPedidosUsuarioAsync,
    cancelarPedido,
  } from 'app/core/redux/acciones/pedido/PedidosAcciones';
  import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
  import { GestionPedidos } from '../containers/GestionPedidos';
  import { connect } from 'react-redux';
  
  const mapStateToProps = (state: EstadoGeneral) => {
    return state.pedidos;
  };
  
  export const ProveedorGestionPedidos = connect(mapStateToProps, {
    agregarPedido: agregarPedidoAsync,
    listarPedidosUsuario: listarPedidosUsuarioAsync,
    cancelarPedido,
  })(GestionPedidos);
  