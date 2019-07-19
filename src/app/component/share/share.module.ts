import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

/*PRIMENG*/
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
// import { PruebaListComponent } from './component/prueba/prueba-list/prueba-list.component';

@NgModule({
imports: [
RouterModule,
MenubarModule,
ButtonModule,
InputTextModule,
PanelModule,
FormsModule,
ReactiveFormsModule,
DropdownModule
],
exports: [
RouterModule,
MenubarModule,
ButtonModule,
InputTextModule,
PanelModule,
FormsModule,
ReactiveFormsModule,
DropdownModule
],
declarations: [
// ContentHeaderComponent,
// BreadcrumbComponent
]
})
export class SharedModule { }
