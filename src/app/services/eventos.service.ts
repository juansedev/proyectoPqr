import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventosService {

  // Evento de suscrición Tipo servicio
  @Output() servicioBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() servicioEliminacion: EventEmitter<any> = new EventEmitter<any>();
}
