import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../share/share.module';
import { CodigoDaneFormComponent } from './codigo-dane-form/codigo-dane-form.component';
import { CodigoDaneListComponent } from './codigo-dane-list/codigo-dane-list.component';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef } from 'primeng/api';


export const routes: Routes = [
  { path: '', component: CodigoDaneListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    CodigoDaneFormComponent
  ],
  declarations: [CodigoDaneFormComponent, CodigoDaneListComponent],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class CodigoDaneModule { }
