import { Reunion } from 'app/feature/Reunion/models/Reunion';

export interface EstadoReunion {
  reuniones: Reunion[];
  cantidadTotalReuniones: number;
}