import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { TiposRespuestaFormComponent } from './tipos-respuesta-form/tipos-respuesta-form.component';
import { TiposRespuestaListComponent } from './tipos-respuesta-list/tipos-respuesta-list.component';

export const routes: Routes = [
  { path: '', component: TiposRespuestaListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TiposRespuestaFormComponent
  ],
  declarations: [TiposRespuestaListComponent, TiposRespuestaFormComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class TiposRespuestaModule { }
