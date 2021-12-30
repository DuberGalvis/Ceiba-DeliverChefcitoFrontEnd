import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { axiosIntance } from '../config/AxiosConfig';

export const PedidoRepositorio = {
    agregarPedido: (
        {usuario, 
        producto, 
        reunion, 
        fechaRealizacion, 
        direccion, 
        valorTotal, 
        horasDeServicio,}: Pedido) =>
        axiosIntance.post('/pedidos', {'usuario': usuario, 
        'producto': producto,
        'reunion': reunion,
        fechaRealizacion,
        direccion,
        valorTotal,
        horasDeServicio,}),
    cancelarPedido: () =>
        axiosIntance.patch('/pedidos'),
    consultarPedidosUsuario: (nombre: string) => 
        axiosIntance.get(`/pedidos?nombre=${nombre}`),
};
