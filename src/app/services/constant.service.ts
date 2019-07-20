// tslint:disable:max-line-length
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  // Rutas de los webservices
  // public API_URL = 'http://localhost:8080/wsmanagement/';
  // public API_URL = 'http://localhost:3000';
  // public API_URL = 'http://harvin-rengifo:8010/wsmanagement';
  public API_URL = 'http://192.168.0.18:8810/wspsptaller';
  public actividad = 'actividad';
  public actividades = 'actividades';

  constructor() { }

}
