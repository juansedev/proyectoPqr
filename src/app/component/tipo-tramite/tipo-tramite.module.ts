import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { TipoTramiteFormComponent } from './tipo-tramite-form/tipo-tramite-form.component';
import { TipoTramiteListComponent } from './tipo-tramite-list/tipo-tramite-list.component';

export const routes: Routes = [
  { path: '', component: TipoTramiteListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TipoTramiteFormComponent
  ],
  declarations: [TipoTramiteListComponent, TipoTramiteFormComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class TipoTramiteModule { }