import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { InformesComponent } from './informes.component';


export const routes: Routes = [
  { path: '', component: InformesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  /* entryComponents: [
    TiposDocumentosFormComponent
  ], */
  declarations: [InformesComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})

export class InformesModule { }
