import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PruebaListComponent } from './prueba-list/prueba-list.component';


export const routes: Routes = [
  { path: '', component: PruebaListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [PruebaListComponent]
})
export class PruebaModule { }
