import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventosService {

  @Output() fasesBusqueda: EventEmitter<any> = new EventEmitter<any>();
  @Output() faseCreacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() faseActualizacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() faseEliminacion: EventEmitter<any> = new EventEmitter<any>();
}
