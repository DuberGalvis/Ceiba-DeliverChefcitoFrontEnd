import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { Usuario } from 'app/feature/Usuario/models/Usuario';
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
        axiosIntance.post('/pedidos', {"usuario": nombreUsuario, 
        "producto": nombreProducto,
        "reunion": tipoReunion,
        "fechaRealizacion": fechaRealizacion,
        "direccion": direccion,
        "valorTotal": valorTotal,
        "horasDeServicio": horasDeServicio,}),
    cancelarPedido: () =>
        axiosIntance.patch('/pedidos'),
    consultarPedidosUsuario: ({nombre}: Usuario) => 
        axiosIntance.get(`/pedidos?nombre=${nombre}`),
    consultarPedidosActivos: () => 
        axiosIntance.get('/pedidos'),
};
