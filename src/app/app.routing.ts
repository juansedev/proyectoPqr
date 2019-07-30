import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './component/share/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '**', pathMatch: 'full', redirectTo: 'home' ,canActivate: [AuthGuardService] },
      // Gestion
      { path: 'registro', loadChildren: './component/registro/registro.module#RegistroModule' ,canActivate: [AuthGuardService]},
      // Catalogos
      { path: 'tipo-servicio', loadChildren: './component/tipo-servicio/tipo-servicio.module#TipoServicioModule' ,canActivate: [AuthGuardService]},
      { path: 'codigo-dane', loadChildren: './component/codigo-dane/codigo-dane.module#CodigoDaneModule' ,canActivate: [AuthGuardService]},
      { path: 'tipo-tramite', loadChildren: './component/tipo-tramite/tipo-tramite.module#TipoTramiteModule' ,canActivate: [AuthGuardService]},
      { path: 'detalle-causal', loadChildren: './component/detalle-causal/detalle-causal.module#DetalleCausalModule' ,canActivate: [AuthGuardService] },
      { path: 'tipo-respuesta', loadChildren: './component/tipos-respuesta/tipos-respuesta.module#TiposRespuestaModule',canActivate: [AuthGuardService] },
      { path: 'tipo-notificacion', loadChildren: './component/tipos-notificacion/tipos-notificacion.module#TiposNotificacionModule' ,canActivate: [AuthGuardService]},
      { path: 'suscriptores', loadChildren: './component/suscriptores/suscriptores.module#SuscriptoresModule' ,canActivate: [AuthGuardService] },      
      // Herramientas
      { path: 'contrasena', loadChildren: './component/contrasena/contrasena.module#ContrasenaModule',canActivate: [AuthGuardService] },
      { path: 'informes', loadChildren: './component/informes/informes.module#InformesModule',canActivate: [AuthGuardService] },
      // Sitema    
      { path: 'usuarios', loadChildren: './component/usuarios/usuarios.module#UsuariosModule',canActivate: [AuthGuardService] }
    ]
  },
  { path: 'home', component: HomeComponent,canActivate: [AuthGuardService]},
  { path: 'login', component: LoginComponent ,canActivate: [AuthGuardService]},
  { path: '**', pathMatch: 'full', redirectTo: 'login' ,canActivate: [AuthGuardService] }
  
     
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
