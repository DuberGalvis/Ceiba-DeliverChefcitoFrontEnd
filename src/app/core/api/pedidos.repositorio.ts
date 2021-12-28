import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { axiosIntance } from '../config/AxiosConfig';

export const PedidoRepositorio = {
    agregarPedido: (
        {nombreUsuario, 
        nombreProducto, 
        tipoReunion, 
        fechaRealizacion, 
        direccion, 
        valorTotal, 
        horasDeServicio,}: Pedido) =>
        axiosIntance.post('/pedidos', {'usuario': nombreUsuario, 
        'producto': nombreProducto,
        'reunion': tipoReunion,
        fechaRealizacion,
        direccion,
        valorTotal,
        horasDeServicio,}),
    cancelarPedido: () =>
        axiosIntance.patch('/pedidos'),
    consultarPedidosUsuario: (nombre: string) => 
        axiosIntance.get(`/pedidos?nombre=${nombre}`),
};
