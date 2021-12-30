import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow, InicioSesionImg, DivImg } from './styles';
import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { Usuario } from '../../models/Usuario';
import { PaginaIniciarSesion } from '../../components/PaginaIniciarSesion';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import store from 'app/core/redux/store';
import ImgIniciaSesion from 'assets/img/imgIniciaSesion.png';
import ImgRegistrate from 'assets/img/imgRegistrate.png';
import { useEffect } from 'react';
import { PanelInicialUsuario } from '../../components/PanelInicialUsuario';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { FormCrearPedidoUsuario } from '../../components/FormCrearPedidoUsuario';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';

interface GestionUsuarioProps {
  usuarios: Array<Usuario>;
  pedidos: Array<Pedido>;
  pedidosListar: Array<PedidoListar>;
  productos: Array<Producto>;
  reuniones: Array<Reunion>;
  pedido: Pedido;
  pedidoListar: PedidoListar;
  cambioClaveUsuario: CambioClaveUsuario;
  listarProductos: (numeroPagina: number) => void;
  listarReuniones: (numeroPagina: number) => void;
  listarPedidosUsuario: (usuario: Usuario, numeroPagina: number) => void;
  cancelarPedidoUsuario: (pedidoListar: PedidoListar) => void;
  agregarNuevoUsuario: (usuario: Usuario) => void;
  actualizarClave: (cambioClaveUsuario: CambioClaveUsuario) => void;
  darDeBajaUsuario: (usuario: Usuario) => void;
  agregarSesionUsuario: (usuarios: Usuario) => void;
  agregarPedidoUsuario: (pedido: Pedido) => void;
  irInicioSesion: () => void;
  irAgregarUsuario: () => void;
  irPanelPrincipal: () => void;
}

export const GestionUsuario: React.FC<GestionUsuarioProps> = ({
    agregarNuevoUsuario,
    actualizarClave,
    darDeBajaUsuario,
    agregarSesionUsuario,
    usuarios,
    pedidos,
    pedidosListar,
    productos,
    reuniones,
    pedido,
    pedidoListar,
    cambioClaveUsuario,
    listarProductos,
    listarReuniones,
    listarPedidosUsuario,
    cancelarPedidoUsuario,
    agregarPedidoUsuario,
    irInicioSesion,
    irAgregarUsuario,
    irPanelPrincipal,
}) => {
  useEffect(() => {
    cancelarPedidoUsuario(pedidoListar);
  }, [cancelarPedidoUsuario]);
  useEffect(() => {
    listarProductos(0);
  }, [listarProductos]);
  useEffect(() => {
    listarReuniones(0);
  }, [listarReuniones]);
  useEffect(() => {
    agregarPedidoUsuario(pedido);
  }, []);
  return (
    <DivContainer>
      <DivRow>
          {store.getState().usuario.mensajeConfirmacion && <span>
            Se ha creado su usuario satisfactoriamente. Inicie Sesión.
          </span>}
        <DivImg>{store.getState().usuario.mostrarAgregar && <InicioSesionImg
            src={ImgIniciaSesion} 
            onClick={irInicioSesion}>
          </InicioSesionImg>}
        </DivImg>
        {store.getState().usuario.usuarios.length === 0 &&  
        store.getState().usuario.mostrarAgregar && 
        <FormCrearUsuario
          onSubmit={agregarNuevoUsuario}
          formTitle="Crear Usuario"
        />}
        <DivImg>{store.getState().usuario.mostrarInicio && <InicioSesionImg
            src={ImgRegistrate} 
            onClick={irAgregarUsuario}>
          </InicioSesionImg>}
        </DivImg>
        {store.getState().usuario.usuarios.length === 0 && 
        store.getState().usuario.mostrarInicio && 
        <PaginaIniciarSesion 
          onSubmit={agregarSesionUsuario}
          paginaTitle="Inicio de Sesión"
        />}
        {store.getState().usuario.usuarios.length > 0 && <PanelInicialUsuario
          pedidosListar={pedidosListar}
          usuario={usuarios[0]}
          onClickCancelarPedido={cancelarPedidoUsuario}
          tablaListarTitulo="Pedios actuales"
          // onClickModificarPedido={} 
        />}
        {store.getState().usuario.usuarios.length > 0 && <FormCrearPedidoUsuario
          onSubmit={agregarPedidoUsuario}
          productos={productos}
          usuarios={usuarios}
          reuniones={reuniones}
          formTitle="Crear Pedido" 
        />}
      </DivRow>
    </DivContainer>
  );
};

GestionUsuario.propTypes = {
  usuarios: PropTypes.array.isRequired,
  agregarNuevoUsuario: PropTypes.func.isRequired,
  agregarSesionUsuario: PropTypes.func.isRequired,
  actualizarClave: PropTypes.func.isRequired,
  darDeBajaUsuario: PropTypes.func.isRequired,
};