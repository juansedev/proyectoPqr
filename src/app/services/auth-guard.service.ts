import { Injectable } from '@angular/core';
/*Importaciones para bloquear acceso a ruta si no esta logueado*/
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements  CanActivate {
  lcEmpresa = {};

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  /*Meto para bloquear acceso a rutas privadas o que necesitan login*/
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log('Next', next);
    /*console.log('state', state);*/
    const empresa = localStorage.getItem('lcEmpresa');
    // this.lcEmpresa = JSON.parse(empresa);
    if (this.authService.isAuthenticated()) {
      /*if (next.url[0].path !== 'login' && next.url[0].path !== 'SelectEnterprise') {
        if (this.lcEmpresa === null || this.lcEmpresa === undefined || !this.lcEmpresa) {
          this.router.navigate(['/SelectEnterprise']);
          return false;
        }
      }*/
      if (next.url[0].path === 'login') {
        this.router.navigate(['/dashboard/home']);
        return false;
      }
      return true;
    } else {
      if (next.url[0].path === 'login') {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
    // return true;
  }



}

