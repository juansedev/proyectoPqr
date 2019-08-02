import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroListComponent } from './registro-list/registro-list.component';
import { MessageService, ConfirmationService, DialogService, DynamicDialogRef} from 'primeng/api';
import { RegistroFormComponent } from './registro-form/registro-form.component';
import { SharedModule } from '../share/share.module';
import {DropdownModule} from 'primeng/dropdown';
export const routes: Routes = [
  { path: '', component: RegistroListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    SharedModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    RegistroFormComponent
  ],
  declarations: [ RegistroListComponent, RegistroFormComponent],
  providers: [MessageService, ConfirmationService, DialogService, DynamicDialogRef]
})
export class RegistroModule { }
