import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow, BotonesUsuarioImg, DivImg } from './styles';
import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { Usuario } from '../../models/Usuario';
import { PaginaIniciarSesion } from '../../components/PaginaIniciarSesion';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import store from 'app/core/redux/store';
import ImgIniciaSesion from 'assets/img/imgIniciaSesion.png';
import ImgRegistrate from 'assets/img/imgRegistrate.png';
import ImgSalidaSegura from 'assets/img/imgSalidaSegura.png';
import ImgDarDeBaja from 'assets/img/imgDarDeBaja.png';
import ImgActualizarClave from 'assets/img/imgActualizarClave.png';
import { useEffect } from 'react';
import { PanelInicialUsuario } from '../../components/PanelInicialUsuario';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { FormCrearPedidoUsuario } from '../../components/FormCrearPedidoUsuario';
import { Producto } from 'app/feature/Producto/models/Producto';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';
import { FormModificarPedidoUsuario } from '../../components/FormModificarPedidoUsuario';
import { Link } from 'react-router-dom';
import { FormActualizarContrasena } from '../../components/FormActualizarContrasena';

interface GestionUsuarioProps {
  usuarios: Array<Usuario>;
  pedidosListar: Array<PedidoListar>;
  productos: Array<Producto>;
  reuniones: Array<Reunion>;
  pedidoListar: PedidoListar;
  listarProductos: (numeroPagina: number) => void;
  listarReuniones: (numeroPagina: number) => void;
  listarPedidosUsuario: (usuario: Usuario, numeroPagina: number) => void;
  cancelarPedidoUsuario: (pedidoListar: PedidoListar) => void;
  agregarNuevoUsuario: (usuario: Usuario) => void;
  actualizarClave: (cambioClaveUsuario: CambioClaveUsuario) => void;
  darDeBajaUsuario: (usuario: Usuario) => void;
  agregarSesionUsuario: (usuarios: Usuario) => void;
  agregarPedidoUsuario: (pedido: Pedido) => void;
  modificarPedidoUsuario: (pedidoListar: PedidoListar, pedido: Pedido) => void;
  cerrarSesionUsuario: () => void;
  irInicioSesion: () => void;
  irAgregarUsuario: () => void;
  irPanelPrincipal: () => void;
  irActualizarClave: () => void;
  irModificarPedidoUsuario: (pedidoListar: PedidoListar) => void;
}

export const GestionUsuario: React.FC<GestionUsuarioProps> = ({
    agregarNuevoUsuario,
    actualizarClave,
    darDeBajaUsuario,
    agregarSesionUsuario,
    usuarios,
    pedidosListar,
    productos,
    reuniones,
    pedidoListar,
    listarProductos,
    listarReuniones,
    listarPedidosUsuario,
    cancelarPedidoUsuario,
    agregarPedidoUsuario,
    modificarPedidoUsuario,
    cerrarSesionUsuario,
    irInicioSesion,
    irAgregarUsuario,
    irPanelPrincipal,
    irActualizarClave,
    irModificarPedidoUsuario,
}) => {
  useEffect(() => {
    listarProductos(0);
  }, [listarProductos]);
  useEffect(() => {
    listarReuniones(0);
  }, [listarReuniones]);
  const handleDarDeBaja = () => darDeBajaUsuario(usuarios[0]);
  return (
    <DivContainer>
      <DivRow>
        <DivImg>
          {store.getState().usuario.mostrarInicio && <BotonesUsuarioImg
            src={ImgRegistrate} 
            onClick={irAgregarUsuario}
            />}
          {store.getState().usuario.mostrarAgregar && 
            <BotonesUsuarioImg
              src={ImgIniciaSesion} 
              onClick={irInicioSesion} 
            />}
          {store.getState().usuario.usuarios.length > 0 && 
            <BotonesUsuarioImg
              src={ImgActualizarClave} 
              onClick={irActualizarClave} 
            />}
          {store.getState().usuario.usuarios.length > 0 && 
          <Link to='/usuario' replace={true}>
            <BotonesUsuarioImg 
              src={ImgSalidaSegura} 
              onClick={cerrarSesionUsuario}
            />
          </Link>}
          {store.getState().usuario.usuarios.length > 0 && 
          <Link to='/' replace={true}>
            <BotonesUsuarioImg 
              src={ImgDarDeBaja} 
              onClick={handleDarDeBaja}
             />
          </Link>}
        </DivImg>
        {store.getState().usuario.usuarios.length === 0 &&  
        store.getState().usuario.mostrarAgregar && 
        <FormCrearUsuario
          onSubmit={agregarNuevoUsuario}
          formTitle="Crear Usuario"
        />}
        {store.getState().usuario.usuarios.length === 0 && 
        store.getState().usuario.mostrarInicio && 
        <PaginaIniciarSesion 
          onSubmit={agregarSesionUsuario}
          paginaTitle="Inicio de Sesión"
        />}
        {store.getState().usuario.usuarios.length > 0 && 
        store.getState().usuario.mostrarPanel &&
        <PanelInicialUsuario
          pedidosListar={pedidosListar}
          usuario={usuarios[0]}
          onClickCancelarPedido={cancelarPedidoUsuario}
          onClickModificarPedido={irModificarPedidoUsuario} 
          tablaListarTitulo="Pedios actuales"
          listarPedidosUsuario={listarPedidosUsuario}
        />}
        {store.getState().usuario.usuarios.length > 0 && 
        store.getState().usuario.mostrarPanel &&
        <FormCrearPedidoUsuario
          onSubmit={agregarPedidoUsuario}
          productos={productos}
          usuarios={usuarios}
          reuniones={reuniones}
          formTitle="Crear Pedido" 
        />}
        {store.getState().usuario.usuarios.length > 0 &&
        store.getState().usuario.mostrarModificar &&
        <FormModificarPedidoUsuario
          onSubmit={modificarPedidoUsuario}
          productos={productos}
          usuarios={usuarios}
          reuniones={reuniones}
          pedidoListar={pedidoListar}
          formTitle="Modificar Pedido" 
        />}
        {store.getState().usuario.usuarios.length > 0 &&
        store.getState().usuario.mostrarActualizar &&
        <FormActualizarContrasena
          onSubmit={actualizarClave}
          formTitle="Actualiza la Clave"
          usuario={usuarios[0]}
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
