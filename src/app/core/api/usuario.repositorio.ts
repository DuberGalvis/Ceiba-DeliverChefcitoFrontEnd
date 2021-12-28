import { Usuario } from 'app/feature/Usuario/models/Usuario';
import { CambioClaveUsuario }  from 'app/feature/Usuario/models/CambioClaveUsuario'
import { axiosIntance } from '../config/AxiosConfig';

export const UsuarioRepositorio = {
    iniciarSesion: ({nombre, clave}: Usuario) => 
        axiosIntance.get(`/usuarios?nombre=${nombre}&clave=${clave}`),
    agregarUsuario: ({nombre, clave}: Usuario) => 
        axiosIntance.post('/usuarios', {"nombre": nombre, "clave": clave, fechaCreacion: new Date().toISOString()}),
    actualizar: ({nombre, claveActual, nuevaClave}: CambioClaveUsuario) => 
        axiosIntance.patch('/usuarios', {"nombre": nombre, "claveActual": claveActual, "claveNueva": nuevaClave}),
    darDeBaja: ({nombre}: Usuario) => 
        axiosIntance.delete(`/usuarios/:${nombre}`),
};
