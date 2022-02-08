import * as React from 'react';
import { MenuNav, SpanUsuario } from './styles';
import { NavList } from '../NavigationHeader/NavList';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
import store from 'app/core/redux/store';

const MenuLogueadoComponent: React.FC = () => {
  const usuario: Usuario = store.getState().usuario.usuarios[0];
  const routes = [
    { label: '| Ver Productos', url: '/productos' },
    { label: '| Ir a Pedidos', url: '/pedidos' },
    { label: '| Ajustes de Cuenta', url: '/ajustes-usuario' },
  ];
  return (
    <MenuNav>
        <NavList items={routes} />
        <SpanUsuario>
            Bienvenid@: {usuario.nombre}
        </SpanUsuario>
    </MenuNav>
  );
};

export const MenuLogueado = React.memo(MenuLogueadoComponent);
