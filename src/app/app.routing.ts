import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './component/share/dashboard/dashboard.component';

export const routes: Routes = [
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
      // Gestion
      { path: 'registro', loadChildren: './component/registro/registro.module#RegistroModule' },
      // Catalogos
      { path: 'tipo-servicio', loadChildren: './component/tipo-servicio/tipo-servicio.module#TipoServicioModule' },
      { path: 'codigo-dane', loadChildren: './component/codigo-dane/codigo-dane.module#CodigoDaneModule' },
      { path: 'tipo-tramite', loadChildren: './component/tipoTramite/tipoTramite.module#TipoTramiteModule' },
      { path: 'detalle-causal', loadChildren: './component/detalle-causal/detalle-causal.module#DetalleCausalModule' },
      { path: 'tipo-respuesta', loadChildren: './component/tipos-respuesta/tipos-respuesta.module#TiposRespuestaModule' },
      { path: 'tipo-notificacion', loadChildren: './component/tipos-notificacion/tipos-notificacion.module#TiposNotificacionModule' },
      { path: 'suscriptores', loadChildren: './component/suscriptores/suscriptores.module#SuscriptoresModule' },      
      // Herramientas
      { path: 'contrasena', loadChildren: './component/contrasena/contrasena.module#ContrasenaModule' },
      { path: 'informes', loadChildren: './component/informes/informes.module#InformesModule' },
      // Sitema    
      { path: 'usuarios', loadChildren: './component/usuarios/usuarios.module#UsuariosModule' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
