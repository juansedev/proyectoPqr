import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
/*import { HttpClient,HttpHeaders } from '@angular/common/http';*/
import { ConstantService } from './constant.service';

import { GlobalService } from './global.service';
// import { ProfileService } from './profile.service';

@Injectable()
export class AuthService {
  private headers;
  private httpHeaders = new HttpHeaders();
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private constan: ConstantService,
    public _globalService: GlobalService
    // public _profileService: ProfileService
  ) {
  }

  public getLogin(user: string, contra: string) {
    const url = `${this.constan.API_URL}public/login`;
    const body = JSON.stringify({ 'cdg': user, 'ctr': contra });
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-type', 'application/json');
    return this.httpClient.post(url, body, { headers: this.headers, observe: 'response' }).pipe(res => res);
    /* return this.httpClient.post(url, body, { headers: this.headers, observe: 'response' }).pipe(
       tap(res => {
         console.log('RES', res.headers.get('token'));
       })
     );*/
  }

  public isAuthenticated(): boolean {
    let auth = false;
    if (localStorage.getItem('token') && localStorage.getItem('time')) {
      auth = true;
    }
    return auth;
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.clear();
    sessionStorage.clear();
    // this._profileService.lcPerfil = undefined;
    // this._globalService.glVisibleModal = true;
    // Go back to the home route
    // this._utilService.lcLink = '/login';
    // this._utilService.Valid_Obj();
    document.body.style.background = 'none';
    this.router.navigate(['/login']);
  }

  public formato_ingreso(str: string) {
    let retorna = '';
    if (str != null && str.length > 0) {
      let POSICION = '';
      let VAL1 = '';
      let tclave = 0;
      tclave = str.trim().length;
      const cadena = '4pq1rsAJtBu2vwCxQy3DE5zF6G7H8I90KL/M*N-Ñ+OZaPbcdeRfSgThUiVjklmWnXñYo';
      for (let i = 0; i < tclave; i++) {
        VAL1 = str.substring(i, i + 1);
        const pos = ((cadena.lastIndexOf(VAL1) + 1) * 5);
        POSICION = pos + 'O';
        retorna = retorna + POSICION;
      }
    }
    retorna = retorna.trim();
    return retorna;
  }

  public fnCapturaNombreUsuario() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }
}

	
	
	
