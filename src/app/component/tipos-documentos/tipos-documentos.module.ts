import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { TiposDocumentosFormComponent } from './tipos-documentos-form/tipos-documentos-form.component';
import { TiposDocumentosListComponent } from './tipos-documentos-list/tipos-documentos-list.component';

export const routes: Routes = [
  { path: '', component: TiposDocumentosListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    TiposDocumentosFormComponent
  ],
  declarations: [TiposDocumentosListComponent, TiposDocumentosFormComponent ],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})

export class TiposDocumentosModule { }
