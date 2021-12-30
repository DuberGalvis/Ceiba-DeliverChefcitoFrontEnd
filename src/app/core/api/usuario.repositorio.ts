import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { CambioClaveUsuario }  from 'app/feature/Usuario/models/CambioClaveUsuario'
import { axiosIntance } from '../config/AxiosConfig';
import { Pedido } from 'app/feature/Pedido/models/Pedido';
import { PedidoListar } from 'app/feature/Pedido/models/PedidoListar';

export const UsuarioRepositorio = {
    iniciarSesion: ({nombre, clave}: Usuario) => 
        axiosIntance.get(`/usuarios?nombre=${nombre}&clave=${clave}`),
    agregarUsuario: ({nombre, clave}: Usuario) => 
        axiosIntance.post('/usuarios', { nombre,  clave, fechaCreacion: new Date().toISOString()}),
    actualizar: ({nombre, claveActual, nuevaClave}: CambioClaveUsuario) => 
        axiosIntance.patch('/usuarios', { nombre,  claveActual, 'claveNueva': nuevaClave}),
    darDeBaja: (nombre: string) => 
        axiosIntance.delete(`/usuarios/:${nombre}`),
    cancelarPedido: ({id}: PedidoListar) =>
        axiosIntance.patch('/pedidos/cancelar', {id}),
    consultarPedidosUsuario: (nombre: string) => 
        axiosIntance.get(`/pedidos?nombre=${nombre}`),
    consultarProductos: () =>
        axiosIntance.get('/productos'),
    consultarReuniones: () => 
        axiosIntance.get('/reuniones'),
    agregarPedido: (
            {usuario, 
            producto, 
            reunion, 
            fechaRealizacion, 
            direccion, 
            valorTotal, 
            horasDeServicio,}: Pedido) =>
            axiosIntance.post('/pedidos', {
                'usuario': usuario, 
                'producto': producto,
                'reunion': reunion,
                fechaRealizacion,
                direccion,
                valorTotal,
                horasDeServicio,
            }),
};
