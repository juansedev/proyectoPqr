import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';
import { SharedModule } from '../share/share.module';
import { DetalleCausalFormComponent } from './detalle-causal-form/detalle-causal-form.component';
import { DetalleCausalListComponent } from './detalle-causal-list/detalle-causal-list.component';

export const routes: Routes = [
  { path: '', component: DetalleCausalListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    DetalleCausalFormComponent
  ],
  declarations: [DetalleCausalListComponent, DetalleCausalFormComponent],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class DetalleCausalModule { }
