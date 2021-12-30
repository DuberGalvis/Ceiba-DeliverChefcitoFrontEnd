import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pedido } from '../../../Pedido/models/Pedido';
import { Button } from 'app/shared/components/Button';
import { Link } from 'react-router-dom';

interface BtnModificarPedidoUsuarioProps {
    onModificar: (pedido: Pedido) => any;
    pedido: Pedido;
}

export const BtnModificarPedidoUsuario: React.FC<BtnModificarPedidoUsuarioProps> = ({
    onModificar,
    pedido,
}) => {
    const handleCancelar = () => onModificar(pedido);
    return(
        <Link to='/' replace={true}>
            <Button onClick={handleCancelar}>
                <span role='img' aria-labelledby='cancelar'>
                    💡
                </span>
            </Button>
        </Link>
    );
};

BtnModificarPedidoUsuario.propTypes = {
    pedido: PropTypes.shape({
        usuario: PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            clave: PropTypes.string.isRequired,
        }).isRequired,
        producto: PropTypes.shape({
            nombre: PropTypes.string.isRequired,
            detalle: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
        }).isRequired,
        reunion: PropTypes.shape({
            tipo: PropTypes.string.isRequired,
            precio: PropTypes.number.isRequired,
        }).isRequired,
        fechaRealizacion: PropTypes.string.isRequired,
        direccion: PropTypes.string.isRequired,
        valorTotal: PropTypes.number.isRequired,
        horasDeServicio: PropTypes.number.isRequired,
        productos: PropTypes.array.isRequired,
    }).isRequired,
    onModificar:PropTypes.func.isRequired,
};
