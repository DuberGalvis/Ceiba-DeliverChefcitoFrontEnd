import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { Usuario } from '../../models/Usuario';
import { PaginaIniciarSesion } from '../../components/PaginaIniciarSesion';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';
import { useEffect } from 'react';
import store from 'app/core/redux/store';

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
    irInicioSesion();
  }, );
  return (
    <DivContainer>
      <DivRow>
        <FormCrearUsuario
          onSubmit={agregarNuevoUsuario}
          formTitle="Crear Usuario"
        />
        {store.getState().usuario.mostrarInicio && <PaginaIniciarSesion 
          onSubmit={agregarSesionUsuario}
          paginaTitle="Inicio de Sesión"
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