import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventosService {

  // Evento de suscrición Tipo servicio
  @Output() serviciosBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() documentosBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() documentoCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() documentoActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() documentoEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() ciudadesBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() ciudadCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() ciudadActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() ciudadEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() notificacionesBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() notificacionCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() notificacionActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() notificacionEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() respuestasBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() respuestaCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() respuestaActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() respuestaEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() tramitesBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() tramiteCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() tramiteActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() tramiteEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuariosBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuarioCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuarioActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() usuarioEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() suscriptoresBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() suscriptorCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() suscriptorActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() suscriptorEliminacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() causalesBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() causalCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() causalActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() causalEliminacion: EventEmitter<any> = new EventEmitter<any>();
}
