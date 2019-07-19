import { Component, OnInit } from '@angular/core';
import {
  SelectItem, MenuItem, ConfirmationService, MessageService, DialogService,
  DynamicDialogRef, DynamicDialogConfig } from 'primeng/primeng';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { ConstantService } from 'src/app/services/constant.service';
import { TipoServicio } from 'src/app/clases/tipoServicio.class';
import { TipoServicioFormComponent } from '../tipo-servicio-form/tipo-servicio-form.component';
import { DashboardComponent } from '../../share/dashboard/dashboard.component';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-tipo-servicio-list',
  templateUrl: './tipo-servicio-list.component.html',
  styleUrls: ['./tipo-servicio-list.component.scss']
})
export class TipoServicioListComponent implements OnInit {

  lcHeaders: { field: string; header: string; width: string; }[];
  lcFiltroConsulta: SelectItem[];
  lcFiltroStd: SelectItem[];
  lcSelectedFiltro: object;
  lcSelectedFiltroStd: object;
  lcListItems: TipoServicio[] = [];
  lcBreadcrumbItems: MenuItem[];
  lcHome: MenuItem;
  lcConsulta = '';
  lcSelectedRow: object = {};
  /** lcUsuarioSelect contiene todo el objeto seleccionado */
  lcUsuarioSelect: object = {};

  lcFiltros = { f: [], v: [], l: [] };

  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private gService: GlobalService,
    private eventos: EventosService,
    private constant: ConstantService,
    public ref: DynamicDialogRef,
    public dialogService: DialogService,
  ) { }

  ngOnInit() {
    this.lcHeaders = [
      { field: 'activ', header: 'Actividad', width: '30%' },
      { field: 'fecha', header: 'Fecha', width: '10%' },
      { field: 'comienzo', header: 'H. Comienzo', width: '10%' },
      { field: 'fin', header: 'H. Fin', width: '10%' },
      { field: 'tmpint', header: 'Interrupcion', width: '10%' },
      { field: 'tmptotal', header: 'Tem Total', width: '10%' },
    ];

    this.lcFiltroConsulta = [
      { label: 'Código', value: 'bid' },
      { label: 'Nombre', value: 'nme' }
    ];
    this.lcSelectedFiltro = { label: 'Codigo', value: 'bid' };

    this.lcFiltroStd = [
      { label: 'Todos', value: '' },
      { label: 'Activos', value: 1 },
      { label: 'Inactivos', value: 0 }
    ];
    this.lcSelectedFiltroStd = { label: 'Activos', value: 1 };
  }


  fnBuscar() {
    this.gService.getAll(this.constant.actividades, this.lcFiltros)
      .subscribe(
        (data: TipoServicio[]) => this.lcListItems = data,
        error => {
          this.messageService.add({ severity: 'info', summary: 'Verifique', detail: error });
          /*const snackBarRef = this.snackBar.open(error, 'OK', { duration: 4000 });
          snackBarRef.onAction().subscribe(() => {
            snackBarRef.dismiss();
          });*/
        });
  }

  showSuccess() {
    console.log('Ingreso');
    this.messageService.clear();
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }


  public fnAsignarRow(row) {
    this.lcSelectedRow = row;
    // this.fnPropiedades();
  }
  fnNuevo() {
    const data = { editing: true, id: '01' };
    const dialogConfig = new DynamicDialogConfig();
    dialogConfig.header = 'Registro Actividad';
    dialogConfig.width = '50%';
    dialogConfig.closeOnEscape = true;
    dialogConfig.data = data;
    const ref = this.dialogService.open(TipoServicioFormComponent, dialogConfig);
  }

  fnPropiedades() { }

  fnEliminar() { }
}
