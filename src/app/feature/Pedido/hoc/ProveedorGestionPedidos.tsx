import {
    listarPedidosUsuarioAsync,
    agregarPedidoUsuarioAsync,
    cancelarPedidoUsuarioAsync,
    modificarPedidoUsuarioAsync,
    listarProductosAsync,
    listarReunionesAsync,
    validarDiaFestivoAsync,
    listarPedidos,
    irModificarPedidoUsuario,
    irPedidosUsuario,
  } from 'app/core/redux/acciones/pedido/PedidosAcciones';
  import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
  import { GestionPedidos } from '../containers/GestionPedidos';
  import { connect } from 'react-redux';
  
  const mapStateToProps = ({pedidos, usuario}: EstadoGeneral) => {
    return {pedidos, usuario};
  };
  
  export const ProveedorGestionPedidos = connect(mapStateToProps, {
    listarPedidosUsuario: listarPedidosUsuarioAsync,
    agregarPedidoUsuario: agregarPedidoUsuarioAsync,
    cancelarPedidoUsuario: cancelarPedidoUsuarioAsync,
    modificarPedidoUsuario: modificarPedidoUsuarioAsync,
    listarProductos: listarProductosAsync,
    listarReuniones: listarReunionesAsync,
    validarDiaFestivo: validarDiaFestivoAsync,
    listarPedidos,
    irModificarPedidoUsuario,
    irPedidosUsuario,
  })(GestionPedidos);
