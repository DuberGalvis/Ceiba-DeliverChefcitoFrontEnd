import { Usuario } from 'app/feature/Usuario/models/Usuario';
import * as PropTypes from 'prop-types';
import * as React from 'react';

interface PaginadorPedidosProps {
  cantidadTotalPedidos: number;
  onClickCambiarPagina: (usuario: Usuario, numeroPagina: number) => void;
}

const PRODUCTOS_VISIBLES_POR_PAGINA = 10;

export const PaginadorPedidos: React.FC<PaginadorPedidosProps> = ({
  onClickCambiarPagina,
  cantidadTotalPedidos,
}) => {
  if (cantidadTotalPedidos <= PRODUCTOS_VISIBLES_POR_PAGINA) {
    return null;
  }

  const rango = Array.from(
    Array(
      Math.ceil(cantidadTotalPedidos / PRODUCTOS_VISIBLES_POR_PAGINA)
    ).keys()
  );

  return (
    <nav>
      {rango.map((index) => {
        return (
          <button
            onClick={() => onClickCambiarPagina({nombre: '', clave: ''}, index)}
            key={index.toString()}
          >
            {index + 1}
          </button>
        );
      })}
    </nav>
  );
};

PaginadorPedidos.propTypes = {
  cantidadTotalPedidos: PropTypes.number.isRequired,
  onClickCambiarPagina: PropTypes.func.isRequired,
};
