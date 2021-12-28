import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pedido } from '../../models/Pedido';
import { Button } from 'app/shared/components/Button';

interface BtnCancelarPedidoProps {
    onCancelar: (pedido: Pedido) => any;
    pedido: Pedido;
}

export const BtnCancelarPedido: React.FC<BtnCancelarPedidoProps> = ({
    onCancelar,
    pedido,
}) => {
    const handleCancelar = () => onCancelar(pedido);
    return(
        <Button onClick={handleCancelar}>
            <span role='img' aria-labelledby='cancelar'>
                ❌
            </span>
        </Button>
    );
};

BtnCancelarPedido.propTypes = {
    pedido: PropTypes.shape({
        nombreUsuario: PropTypes.string.isRequired,
        nombreProducto: PropTypes.string.isRequired,
        tipoReunion: PropTypes.string.isRequired,
        fechaRealizacion: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        valorTotal: PropTypes.number.isRequired,
        horasDeServicio: PropTypes.number.isRequired,
    }).isRequired,
    onCancelar:PropTypes.func.isRequired,
};
