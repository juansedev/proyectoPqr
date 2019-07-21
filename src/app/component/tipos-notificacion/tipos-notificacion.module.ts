import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { TiposNotificacionFormComponent } from './tipos-notificacion-form/tipos-notificacion-form.component';
import { TiposNotificacionListComponent } from './tipos-notificacion-list/tipos-notificacion-list.component';

export const routes: Routes = [
  { path: '', component: TiposNotificacionListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TiposNotificacionFormComponent
  ],
  declarations: [TiposNotificacionListComponent, TiposNotificacionFormComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class TiposNotificacionModule { }
