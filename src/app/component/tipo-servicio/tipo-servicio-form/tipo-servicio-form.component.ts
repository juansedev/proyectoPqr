import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';

@Component({
  selector: 'app-tipo-servicio-form',
  templateUrl: './tipo-servicio-form.component.html',
  styleUrls: ['./tipo-servicio-form.component.scss']
})
export class TipoServicioFormComponent implements OnInit {

  // @Input
  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    public dynamicDialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    console.log(this.dynamicDialogConfig.data);
  }


}
