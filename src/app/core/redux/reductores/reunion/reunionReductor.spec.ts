import { EstadoReunion } from 'app/core/redux/modelo/EstadoReunion';
import { Reunion } from 'app/feature/Reunion/models/Reunion';
import { respuestaAgregado } from 'app/core/redux/acciones/reunion/ReunionAcciones';
import reductorReunion from './reunionReductor';

describe('Reductor Reunion', () => {
  it('debería agregar Reuniones', () => {
    // Arrange
    const estadoInicial: EstadoReunion = {
      reuniones: [],
    };
    const nuevaReunion: Reunion = {
      tipo: 'TIPO_GRANDE',
      precio: 45000,
    };
    const estadoEsperado: EstadoReunion = {
      ...estadoInicial,
      reuniones: [nuevaReunion],
    };

    // Act
    const nuevoEstado = reductorReunion(
      estadoInicial,
      respuestaAgregado(nuevaReunion)
    );

    // Assert
    expect(nuevoEstado).toStrictEqual(estadoEsperado);
  });
});
