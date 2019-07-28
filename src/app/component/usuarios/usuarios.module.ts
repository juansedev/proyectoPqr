import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


export const routes: Routes = [
  { path: '', component: UsuarioListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    UsuarioFormComponent
  ], 
  declarations: [ UsuarioFormComponent, UsuarioListComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})

export class UsuariosModule { }
