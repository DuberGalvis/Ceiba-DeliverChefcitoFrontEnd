import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Producto } from '../../models/Producto';
import { ArticuloProducto } from '../ArticuloProducto';
import { DivArticulosProducto, H2Titulo } from './styles';
import { Button } from 'app/shared/components/Button';

export interface ListaProductosProps {
  productos: Array<Producto>;
  seleccionarProducto: (producto: Producto) => void;
}

export const ListaProductos: React.FC<ListaProductosProps> = ({
  productos,
  seleccionarProducto,
}) => {
  return (
    <div>
      <H2Titulo>Seleccione un Plato de los Disponibles</H2Titulo>
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
      <Link to='/usuario' replace={true}>
        <Button type="button">Cancelar</Button>
      </Link>
    </div>
  );
};

ListaProductos.propTypes = {
  productos: PropTypes.array.isRequired,
};
