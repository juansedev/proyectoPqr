import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { SuscriptoresFormComponent } from './suscriptores-form/suscriptores-form.component';
import { SuscriptoresListComponent } from './suscriptores-list/suscriptores-list.component';

export const routes: Routes = [
  { path: '', component: SuscriptoresListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    SuscriptoresFormComponent
  ],
  declarations: [SuscriptoresListComponent, SuscriptoresFormComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class SuscriptoresModule { }
