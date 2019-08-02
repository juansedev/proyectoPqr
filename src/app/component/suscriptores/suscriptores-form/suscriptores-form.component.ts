import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  SelectItem, MenuItem, ConfirmationService, MessageService, DialogService,
  DynamicDialogRef, DynamicDialogConfig
} from 'primeng/primeng';
import { GlobalService } from 'src/app/services/global.service';
import { ConstantService } from 'src/app/services/constant.service';
import { Suscriptores } from 'src/app/clases/suscriptores.class';


@Component({
  selector: 'app-suscriptores-form',
  templateUrl: './suscriptores-form.component.html',
  styleUrls: ['./suscriptores-form.component.scss']
})
export class SuscriptoresFormComponent implements OnInit {



  item: Suscriptores = new Suscriptores(0, null,null, null, null, null, true, null);
  lcActividades: any = [];
  editing: boolean;
  comienzo = new Date();
  fin = new Date();
  ciudadList = [];
  lcFiltroConsulta: SelectItem[];
  lcSelectedFiltro: object; // = {label: '', value: ''};

  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    public dynamicDialogConfig: DynamicDialogConfig,
    private gService: GlobalService,
    private constant: ConstantService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.item = this.dynamicDialogConfig.data;// valida si esta para editar o no
    // tslint:disable-next-line:no-unused-expression
    if (this.item.id !== null) {
      this.buscar(this.item.id);
      this.editing = true;
    } else {
      this.item.estado = true;
    }
    this.fnLLenarSelects();

    this.lcFiltroConsulta = [
      { label: 'Particular', value: 'par' },
      { label: 'Empresa', value: 'emp' }
    ];
    this.lcSelectedFiltro = { label: 'Particular', value: 'par' };
  }

  

  
  fnLLenarSelects() {
        this.fnBuscarListSelect(this.constant.ciudades);
  }

  buscar(id) {
    this.gService.getBy(this.constant.suscriptor, id)
      .subscribe(
        (data: Suscriptores) => {
          this.comienzo = new Date('1970-01-01T');// + data.comienzo);
          this.fin = new Date('1970-01-01T');// + data.fin);
          this.item = data;
          if (this.item.tipo.trim() === 'par') {
            this.lcSelectedFiltro = { label: 'Particular', value: 'par' };
          }else {
            this.lcSelectedFiltro = { label: 'Empresa', value: 'emp' };
          }
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
        });
  }

  onSubmit() {
    // inicia spinner
    this.item.id !== null ? this.onUpdate() : this.onCreate();
  }

  onCreate() {
    //this.item.comienzo = this.comienzo.getTime();
    //this.item.fin = this.fin.getTime();
    //console.log(this.item.fin);
    console.log(this.item);
    this.item.tipo = this.lcSelectedFiltro['value'];
    this.gService.save(this.constant.suscriptor, this.item)
      .subscribe(
        (data: Suscriptores) => {
          this.confirmationService.confirm({
            message: '¿Desea seguir guardando?',
            header: 'Confirmación',
            icon: 'fa fa-info-circle',
            accept: () => {
              this.item = new Suscriptores(0, null, null , null, null, null, true, null);
            },
            reject: () => {
              //this.messageService.add({ severity: 'info', summary: 'Proceso Cancelado', detail: 'Se canceló la eliminación del registro' });
              this.dynamicDialogRef.close();
            },
          });


          this.messageService.add({ severity: 'info', summary: 'Verifique', detail: 'Registro exitoso' });
          // this.cerrar();
        },
        error => {
          // cierra spinner
          this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
        }
      );
  }

  onUpdate() {
    this.item.tipo = this.lcSelectedFiltro['value'];
    this.gService.update(this.constant.suscriptor, this.item)
      .subscribe(
        (data: Suscriptores) => {
          this.messageService.add({ severity: 'info', summary: 'Verifique', detail: 'Registro exitoso' });
          // this.cerrar();
        },
        error => {
          // cierra spinner
          this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
        }
      );
  }

  onClose() {
    // reset formulario
    this.dynamicDialogRef.close('Carro 1');
  }

  fnBuscarListSelect(modulo: string) {
    const filtros = {f:[], v:[], l:[]};
    this.gService.getAll(modulo, filtros)
    .subscribe(
      (data: []) => this.fnConstruirList(data, modulo),
      error => {
        this.messageService.add({ severity: 'info', summary: 'Verifique', detail: error });
        /*const snackBarRef = this.snackBar.open(error, 'OK', { duration: 4000 });
        snackBarRef.onAction().subscribe(() => {
          snackBarRef.dismiss();
        });*/
      });
  }


  fnConstruirList(data: [], modulo: string) {
    const listTmp = [];
    data.forEach(element => {
      listTmp.push({label: element['nombre'], value: element['id'] })
    });
    switch (modulo) {
      
    case this.constant.ciudades:
        this.ciudadList = listTmp;
        break;
      default:
        break;
    }
    console.log(listTmp);
  }



  
}
