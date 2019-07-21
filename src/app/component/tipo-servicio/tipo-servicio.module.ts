import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoServicioListComponent } from './tipo-servicio-list/tipo-servicio-list.component';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { TipoServicioFormComponent } from './tipo-servicio-form/tipo-servicio-form.component';
import { SharedModule } from '../share/share.module';

export const routes: Routes = [
  { path: '', component: TipoServicioListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TipoServicioFormComponent
  ],
  declarations: [TipoServicioListComponent, TipoServicioFormComponent],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class TipoServicioModule { }
