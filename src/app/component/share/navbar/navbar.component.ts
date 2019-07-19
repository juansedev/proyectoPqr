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
          icon: 'pi pi-fw pi-home',
      },
      {
          label: 'Gestión',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Registra PQR', icon: 'pi pi-fw pi-briefcase'}
          ]
      },
      {
          label: 'Catálogos',
          icon: 'pi pi-fw pi-th-large',
          items: [
              {label: 'Códigos DANE', icon: 'pi pi-fw pi-bars'},
              {label: 'Tipos de Servicios', icon: 'pi pi-fw pi-bars'},
              {label: 'Tipos de Trámite', icon: 'pi pi-fw pi-bars'},
              {label: 'Detalles de la Causal', icon: 'pi pi-fw pi-bars'},
              {label: 'Tipos de Respuesta', icon: 'pi pi-fw pi-bars'},
              {label: 'Tipos de Notificación', icon: 'pi pi-fw pi-bars'},
              {label: 'Suscriptores', icon: 'pi pi-fw pi-bars'},
              {label: 'Tipos de Documentos', icon: 'pi pi-fw pi-bars'}
          ]
      },
      {
          label: 'Herramientas',
          icon: 'pi pi-fw pi-key',
          items: [
              {label: 'Cambiar contraseña', icon: 'pi pi-fw pi-lock'},
              {label: 'Informes', icon: 'pi pi-fw pi-chart-bar'}
          ]
      },
      {
          label: 'Sistema',
          icon: 'pi pi-fw pi-cog',
          items: [
              {label: 'Perfiles', icon: 'pi pi-fw pi-users'},
              {label: 'Usuarios', icon: 'pi pi-fw pi-user-minus'}
          ]
      }
  ];
  }

}
