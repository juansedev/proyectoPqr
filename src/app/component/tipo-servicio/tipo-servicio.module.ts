import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoServicioListComponent } from './tipo-servicio-list/tipo-servicio-list.component';
import { SharedModule } from '../share/share.module';

export const routes: Routes = [
{ path: '', component: TipoServicioListComponent, pathMatch: 'full' }
];

@NgModule({
imports: [
SharedModule,
RouterModule.forChild(routes)
],
declarations: [
  TipoServicioListComponent
],
})
export class TipoServicioModule { }
