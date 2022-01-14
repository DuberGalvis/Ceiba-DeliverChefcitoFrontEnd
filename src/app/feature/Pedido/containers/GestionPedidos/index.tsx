import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { ListarPedidosUsuario } from '../../components/ListarPedidosUsuario';
import { PaginadorPedidos } from '../../components/PaginadorPedidos';
import { Pedido } from '../../models/Pedido';
import { useEffect } from 'react';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { FormCrearPedidoUsuario } from '../../components/FormCrearPedidoUsuario';
import { PedidoListar } from '../../models/PedidoListar';
import { MenuLogueado } from 'app/shared/components/MenuLogueado';
import { EstadoUsuario } from 'app/core/redux/modelo/EstadoUsuario';
import { EstadoPedido } from 'app/core/redux/modelo/EstadoPedido';
import { FormModificarPedidoUsuario } from '../../components/FormModificarPedidoUsuario';
import { EstadoProducto } from 'app/core/redux/modelo/EstadoProducto';
import { EstadoReunion } from 'app/core/redux/modelo/EstadoReunion';

interface GestionPedidosProps {
  usuario: EstadoUsuario;
  pedidos: EstadoPedido;
  productos: EstadoProducto;
  reuniones: EstadoReunion;
  listarPedidosUsuario: (usuario: Usuario) => void;
  agregarPedidoUsuario: (pedido: Pedido) => void;
  cancelarPedidoUsuario: (pedidoListar: PedidoListar) => void;
  modificarPedidoUsuario: (pedidoListar: PedidoListar, pedido: Pedido) => void;
  listarPedidos: (numeroPagina: number) => void;
  validarDiaFestivo: (fechaFestivo: Date) => void;
  listarProductos: (numeroPaginas: number) => void;
  listarReuniones: (numeroPagina: number) => void;
  irModificarPedidoUsuario: (pedidoListar: PedidoListar) => void;
  irPedidosUsuario: () => void;
}

export const GestionPedidos: React.FC<GestionPedidosProps> = ({
  usuario,
  pedidos,
  productos,
  reuniones,
  agregarPedidoUsuario,
  listarPedidosUsuario,
  cancelarPedidoUsuario,
  modificarPedidoUsuario,
  listarPedidos,
  listarProductos,
  listarReuniones,
  validarDiaFestivo,
  irModificarPedidoUsuario,
  irPedidosUsuario,
}) => {
  useEffect(() => {
    listarProductos(0);
  },[listarProductos]);
  useEffect(() => {
    listarReuniones(0);
  },[listarReuniones]);
  return (
    <DivContainer>
      {usuario && 
      <MenuLogueado 
        usuario={usuario.usuarios[0]}
      />}
      <DivRow>
      {usuario && !pedidos.mostrarModificar && 
      <ListarPedidosUsuario
          usuario={usuario.usuarios[0]}
          tablaListarTitulo={'Lista de Pedidos Pendientes'}
          listarPedidosUsuario={listarPedidosUsuario}
          onClickCancelarPedido={cancelarPedidoUsuario}
          onClickModificarPedido={irModificarPedidoUsuario}
          pedidosListar={pedidos.pedidosListar}
          mensajeCancelar={pedidos.mensajeExitoCancelar}
        />}
        {usuario && !pedidos.mostrarModificar && 
        <PaginadorPedidos
          cantidadTotalPedidos={pedidos.cantidadTotalPedidos}
          onClickCambiarPagina={listarPedidos}
        />}
      </DivRow>
      <DivRow>
      {usuario && !pedidos.mostrarModificar  && 
      <FormCrearPedidoUsuario 
          onSubmit={agregarPedidoUsuario}
          validarDiaFestivo={validarDiaFestivo}
          productos={productos.productos}
          usuarioPedido={usuario.usuarios[0]}
          reuniones={reuniones.reuniones}
          formTitle="Crea tu Pedido"
          mensajePedido={pedidos.mensajeConfirmacion}
          mensajeExcepcion={pedidos.mensajeExcepcion} 
          esFestivo={pedidos.esFestivo}
        />}
      </DivRow>
      {pedidos.mostrarModificar && 
      <FormModificarPedidoUsuario
        onSubmit={modificarPedidoUsuario}
        irPedidos={irPedidosUsuario}
        formTitle={'Modifique su Pedido'}
        productos={productos.productos}
        usuarios={usuario.usuarios}
        reuniones={reuniones.reuniones}
        mensajeModificar={pedidos.mensajeConfirmacion}
        mensajeExcepcion={pedidos.mensajeExcepcion}
        pedidoListar={pedidos.pedidoListar}
        esFestivo={pedidos.esFestivo}
      />}    
    </DivContainer>
  );
};

GestionPedidos.propTypes = {
  usuario: PropTypes.shape({
      usuarios: PropTypes.array.isRequired,
      usuario: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        clave: PropTypes.string.isRequired,
      }).isRequired,
      cambioClaveUsuario: PropTypes.shape({
        nombre: PropTypes.string.isRequired, 
        claveActual: PropTypes.string.isRequired, 
        claveNueva: PropTypes.string.isRequired,
      }).isRequired,
      mensajeError: PropTypes.string.isRequired,
      mensajeConfirmacion: PropTypes.string.isRequired,
      mostrarAgregar: PropTypes.bool.isRequired,
      mostrarInicio: PropTypes.bool.isRequired,
      mostrarPanel: PropTypes.bool.isRequired,
      mostrarActualizar: PropTypes.bool.isRequired,
    }).isRequired,
  pedidos: PropTypes.shape({
    pedido: PropTypes.shape({
      usuario: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        clave: PropTypes.string.isRequired,
      }).isRequired,
      producto: PropTypes.shape({
        nombre: PropTypes.string.isRequired, 
        detalle: PropTypes.string.isRequired, 
        precio: PropTypes.number.isRequired,
      }).isRequired,
      reunion: PropTypes.shape({
        tipo: PropTypes.string.isRequired, 
        precio: PropTypes.number.isRequired,
      }).isRequired,
      fechaRealizacion: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
      horasDeServicio: PropTypes.number.isRequired,
      valorTotal: PropTypes.number.isRequired,
  }).isRequired,
  pedidos: PropTypes.array.isRequired,
  pedidoListar: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombreUsuario: PropTypes.string.isRequired,
      nombreProducto: PropTypes.string.isRequired,
      tipoReunion: PropTypes.string.isRequired,
      fechaRealizacion: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
      horasDeServicio: PropTypes.number.isRequired,
      valorTotal: PropTypes.number.isRequired,
  }).isRequired,
    pedidosListar: PropTypes.array.isRequired,
    productos: PropTypes.array.isRequired,
    reuniones: PropTypes.array.isRequired,
    mensajeConfirmacion: PropTypes.string.isRequired,
    mensajeExcepcion: PropTypes.string.isRequired,
    mensajeExitoCancelar: PropTypes.string.isRequired,
    esFestivo: PropTypes.bool.isRequired,
    cantidadTotalPedidos: PropTypes.number.isRequired,
    cantidadTotalProductos: PropTypes.number.isRequired,
    mostrarModificar: PropTypes.bool.isRequired,
  }).isRequired,
  listarPedidosUsuario: PropTypes.func.isRequired,
  agregarPedidoUsuario: PropTypes.func.isRequired,
  cancelarPedidoUsuario: PropTypes.func.isRequired,
  listarPedidos: PropTypes.func.isRequired,
  listarProductos: PropTypes.func.isRequired,
  listarReuniones: PropTypes.func.isRequired,
};
