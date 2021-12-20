import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DivContainer, DivRow } from './styles';
import { FormCrearUsuario } from '../../components/FormCrearUsuario';
import { Usuario } from '../../models/Usuario';
import { useEffect } from 'react';
import { PaginaIniciarSesion } from '../../components/PaginaIniciarSesion';
import { CambioClaveUsuario } from '../../models/CambioClaveUsuario';

interface GestionUsuarioProps {
  usuarios: Array<Usuario>;
  agregarNuevoUsuario: (usuario: Usuario) => void;
  actualizarClave: (cambioClaveUsuario: CambioClaveUsuario) => void;
  darDeBajaUsuario: (usuario: Usuario) => void;
  agregarSesionUsuario: (usuario: Usuario) => void;
  mostrarinicioSesion: boolean;
  mostrarAgregarUsuario: boolean;
  mostrarPanelPrincipal: boolean;
}

export const GestionUsuario: React.FC<GestionUsuarioProps> = ({
    agregarNuevoUsuario,
    actualizarClave,
    darDeBajaUsuario,
    agregarSesionUsuario,
    usuarios,
    mostrarinicioSesion = true,
    mostrarAgregarUsuario = false,
    mostrarPanelPrincipal = false,
}) => {
  // useEffect(() => {
  //   agregarSesionUsuario();
  // }, [agregarSesionUsuario]);
  return (
    <DivContainer>
      <DivRow>
        {mostrarAgregarUsuario && <FormCrearUsuario
          onSubmit={agregarNuevoUsuario}
          formTitle="Crear Usuario"
        />}
        {mostrarinicioSesion && <PaginaIniciarSesion 
          onSubmit={agregarSesionUsuario}
          paginaTitle="Inicio de Sesión"
        />}
      </DivRow>
    </DivContainer>
  );
};

GestionUsuario.propTypes = {
  agregarNuevoUsuario: PropTypes.func.isRequired,
  agregarSesionUsuario: PropTypes.func.isRequired,
  actualizarClave: PropTypes.func.isRequired,
  darDeBajaUsuario: PropTypes.func.isRequired,
};