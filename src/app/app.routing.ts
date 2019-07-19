import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './component/share/dashboard/dashboard.component';

export const routes: Routes = [
// { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
{
path: 'dashboard', component: DashboardComponent,
children: [
{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
{ path: 'tipo-servicio', loadChildren: './component/tipo-servicio/tipo-servicio.module#TipoServicioModule'}
]
},
{ path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
