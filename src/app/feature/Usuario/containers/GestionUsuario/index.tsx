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
  usuario: Usuario;
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
    usuario,
    mostrarinicioSesion = true,
    mostrarAgregarUsuario = false,
    mostrarPanelPrincipal = false,
}) => {
  useEffect(() => {
    agregarSesionUsuario(usuario);
  }, [agregarSesionUsuario]);
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
  usuarios: PropTypes.array.isRequired,
  agregarNuevoUsuario: PropTypes.func.isRequired,
  agregarSesionUsuario: PropTypes.func.isRequired,
  actualizarClave: PropTypes.func.isRequired,
  darDeBajaUsuario: PropTypes.func.isRequired,
};