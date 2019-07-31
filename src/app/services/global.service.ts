import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ConstantService } from './constant.service';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  private headers;

  constructor(
    public http: HttpClient,
    private constant: ConstantService,
    private eventos: EventosService,
  ) {
    this.create_headers();
  }
  private create_headers() {
    // this.DatosUser();
    this.headers = new HttpHeaders();
    this.headers.set('Content-type', 'application/json');
    /*this.headers.append('token', this.lcToken);
    this.headers.append('time', this.lcTime);
    this.headers.append('user', this.lcUser);
    this.headers.append('cmy', this.lcCmy);
    this.headers.append('etp', this.lcEtp);
    if (this.lcMch !== undefined) {
      this.headers.append('mch', this.lcMch);
    }*/
  }

  /* public change(ent, filtros) {
    return new Promise((resolve, reject) => {
      this.getAll(ent, filtros)
        .subscribe(data => {
          const value = data.json();
          if (value['code'] === 200) {
            resolve(value['data'][0]);
          } else {
            resolve(null);
          }
        });
    });
  } */

  getAll(module: string, filtros: any): Observable<any> {
    console.log(`getAll on ${module}`);
    // console.log('filtros', filtros);
    this.create_headers();
    const url = `${this.constant.API_URL}/${module}`;
    return this.http.post(url, filtros, { headers: this.headers }).pipe(
     tap(() => this.eventos[`${module}Busqueda`].emit()),
      catchError(this.handleError));
  }

  getBy(module: string, id: any) {
    console.log(`getBy on ${module}`);
    this.create_headers();
    const url = `${this.constant.API_URL}/${module}/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError));
  }

  save(module: string, object: any) {
    console.log('envío: ', object);
    this.create_headers();
    const url = `${this.constant.API_URL}/${module}`;
    object.usucrea = 0;
    return this.http.post(url, object, { headers: this.headers }).pipe(
      tap((data) => {
        console.log('recibo: ', data);
        this.eventos[`${module}Creacion`].emit(data);
      }),
      catchError(this.handleError)
    );
  }

  update(module: string, object: any) {
    console.log(`${module} enviado`, object);
    this.create_headers();
    const url = `${this.constant.API_URL}/${module}/${object.id}`;
    return this.http.put(url, object, { headers: this.headers }).pipe(
      tap((data) => {
        console.log(`${module} recibido`, object);
        this.eventos[`${module}Actualizacion`].emit(data);
      }),
      catchError(this.handleError)
    );
  }

  delete(module: string, id: any) {
    this.create_headers();
    const url = `${this.constant.API_URL}/${module}/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      tap(() => this.eventos[`${module}Eliminacion`].emit()),
      catchError(this.handleError)
    );
  }




  getFake(module: string): Observable<any> {
    const url = `../../assets/data/${module}.json`;
    // let data = '../services/fake-data/terceros.json';
    return this.http.get(url);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return observableThrowError(err.error.message);
  }

}
