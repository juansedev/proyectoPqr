import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { UsuariosComponent } from './usuarios.component';


export const routes: Routes = [
  { path: '', component: UsuariosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  /* entryComponents: [
    TiposDocumentosFormComponent
  ], */
  declarations: [UsuariosComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})

export class UsuariosModule { }
