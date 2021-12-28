import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow, InicioSesionImg, DivImg } from './styles';
import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { Usuario } from '../../models/Usuario';
import { PaginaIniciarSesion } from '../../components/PaginaIniciarSesion';
import { FormActualizarContrasena } from '../../components/FormActualizarContrasena';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import store from 'app/core/redux/store';
import ImgIniciaSesion from 'assets/img/imgIniciaSesion.png';
import ImgRegistrate from 'assets/img/imgRegistrate.png';
import { useEffect } from 'react';

interface GestionUsuarioProps {
  usuarios: Array<Usuario>;
  agregarNuevoUsuario: (usuario: Usuario) => void;
  actualizarClave: (cambioClaveUsuario: CambioClaveUsuario) => void;
  darDeBajaUsuario: (usuario: Usuario) => void;
  agregarSesionUsuario: (usuarios: Usuario) => void;
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
    irInicioSesion,
    irAgregarUsuario,
    irPanelPrincipal,
}) => {
  useEffect(() => {
    actualizarClave({nombre: '', claveActual: '', nuevaClave: ''});
  }, [actualizarClave]);
  return (
    <DivContainer>
      <DivRow>
          {store.getState().usuario.mensajeError && <span>
            Ha ocurrido un error, intentelo mas tarde.
          </span>}
          {store.getState().usuario.mensajeConfirmacion && <span>
            Se ha creado su usuario satisfactoriamente. Inicie Sesión.
          </span>}
        <DivImg>{store.getState().usuario.mostrarAgregar && <InicioSesionImg
            src={ImgIniciaSesion} 
            onClick={irInicioSesion}>
          </InicioSesionImg>}
        </DivImg>
        {store.getState().usuario.mostrarAgregar && <FormCrearUsuario
          onSubmit={agregarNuevoUsuario}
          formTitle="Crear Usuario"
        />}
        <DivImg>{store.getState().usuario.mostrarInicio && <InicioSesionImg
            src={ImgRegistrate} 
            onClick={irAgregarUsuario}>
          </InicioSesionImg>}
        </DivImg>
        {store.getState().usuario.mostrarInicio && <PaginaIniciarSesion 
          onSubmit={agregarSesionUsuario}
          paginaTitle="Inicio de Sesión"
        />}
        {store.getState().usuario.mostrarPanel && <FormActualizarContrasena 
          onSubmit={actualizarClave}
          formTitle="Actualizar Clave"
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