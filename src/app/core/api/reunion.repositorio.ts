import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { axiosIntance } from '../config/AxiosConfig';

export const ReunionRepositorio = {
  listarReuniones: () => 
  axiosIntance.get('/reuniones'),
  crearReunion: ({tipo, precio}: Reunion) => 
  axiosIntance.post('/reuniones', { "tipo": tipo, "precio": Number(precio)}),
};

