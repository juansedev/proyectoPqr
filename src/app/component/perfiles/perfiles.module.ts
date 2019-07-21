import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { PerfilesComponent } from './perfiles.component';


export const routes: Routes = [
  { path: '', component: PerfilesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  /* entryComponents: [
    TiposDocumentosFormComponent
  ], */
  declarations: [PerfilesComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})

export class PerfilesModule { }
