// tslint:disable:max-line-length
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  public API_URL = 'http://192.168.0.18:8810/wsserviciopqr';
  public tipoServicio = 'servicio';
  public tiposServicios = 'servicios';

  constructor() { }

}
