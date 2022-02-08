import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Producto } from '../../models/Producto';
import { Button } from 'app/shared/components/Button';
import { DivProducto, 
  DivProductoInfo, 
  ImgProducto, 
  H2ProductoInfo,
  PProductoInfo, } from './styles';

export interface ArticuloProductoProps {
  producto: Producto;
  seleccionarProducto: (producto: Producto) => void;
}

export const ArticuloProducto: React.FC<ArticuloProductoProps> = ({
  producto,
  seleccionarProducto,
}) => {
  const handleClickProducto = () => {
    seleccionarProducto(producto);
  };
  return (
    <DivProducto>
      <ImgProducto src={require(`assets/img/${producto.nombreImagen}`)} alt={producto.nombre} />
      <DivProductoInfo>
        <H2ProductoInfo>
          {producto.nombre}: ${producto.precio}
        </H2ProductoInfo>
        <PProductoInfo>{producto.detalle}</PProductoInfo>
      </DivProductoInfo>
      <Link to='/reuniones' replace={true}>
        <Button type="button" onClick={handleClickProducto}>Ordenar Pedido</Button>
      </Link>
    </DivProducto>
  );
};

ArticuloProducto.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    detalle: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    nombreImagen: PropTypes.string.isRequired,
  }).isRequired,
};
