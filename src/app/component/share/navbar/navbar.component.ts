import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-fw pi-home'
      },
      {
          label: 'Gestión',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Registra PQR', icon: 'pi pi-fw pi-briefcase', routerLink: ['/dashboard/registro']},
              {label: 'Informes', icon: 'pi pi-fw pi-chart-bar' , routerLink: ['/dashboard/informes']},
              {label: 'Usuarios', icon: 'pi pi-fw pi-user-minus' , routerLink: ['/dashboard/usuarios']}
          ]
      },
      {
          label: 'Catálogos',
          icon: 'pi pi-fw pi-th-large',
          items: [
              {label: 'Códigos DANE', icon: 'pi pi-fw pi-bars' , routerLink: ['/dashboard/codigo-dane']},
              {label: 'Tipos de Servicios', icon: 'pi pi-fw pi-bars', routerLink: ['/dashboard/tipo-servicio']},
              {label: 'Tipos de Trámite', icon: 'pi pi-fw pi-bars', routerLink: ['/dashboard/tipo-tramite']},
              {label: 'Detalles de la Causal', icon: 'pi pi-fw pi-bars', routerLink: ['/dashboard/detalle-causal']},
              {label: 'Tipos de Respuesta', icon: 'pi pi-fw pi-bars' , routerLink: ['/dashboard/tipo-respuesta']},
              {label: 'Tipos de Notificación', icon: 'pi pi-fw pi-bars' , routerLink: ['/dashboard/tipo-notificacion']},
              {label: 'Suscriptores', icon: 'pi pi-fw pi-bars' , routerLink: ['/dashboard/suscriptores']},
              //{label: 'Tipos de Documentos', icon: 'pi pi-fw pi-bars' , routerLink: ['/dashboard/tipos-documentos']}
          ]
      },
     /* {
          label: 'Herramientas',
          icon: 'pi pi-fw pi-key',
          items: [
             // {label: 'Cambiar contraseña', icon: 'pi pi-fw pi-lock' , routerLink: ['/dashboard/contrasena']},
              
          ]
      },
      {
          label: 'Sistema',
          icon: 'pi pi-fw pi-cog',
          items: [
             // {label: 'Perfiles', icon: 'pi pi-fw pi-users' , routerLink: ['/dashboard/perfiles']},
              
          ]
      }*/
  ];
  }

}
