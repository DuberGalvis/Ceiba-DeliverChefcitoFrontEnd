import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Producto } from '../../models/Producto';
import { ArticuloProducto } from '../ArticuloProducto';
import { DivArticulosProducto } from './styles';

export interface ListaProductosProps {
  productos: Array<Producto>;
  seleccionarProducto: (producto: Producto) => void;
}

export const ListaProductos: React.FC<ListaProductosProps> = ({
  productos,
  seleccionarProducto,
}) => {
  return (
    <DivArticulosProducto>
      {productos.map((producto: Producto) => {
        return (
          <ArticuloProducto 
            key={producto.nombre} 
            producto={producto} 
            seleccionarProducto={seleccionarProducto}
          />
        );
      })}
    </DivArticulosProducto>
  );
};

ListaProductos.propTypes = {
  productos: PropTypes.array.isRequired,
};
