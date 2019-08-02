import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  SelectItem, MenuItem, ConfirmationService, MessageService, DialogService,
  DynamicDialogRef, DynamicDialogConfig
} from 'primeng/primeng';
import { GlobalService } from 'src/app/services/global.service';
import { ConstantService } from 'src/app/services/constant.service';
import { Registro } from 'src/app/clases/registro.class';
import { TipoServicio } from 'src/app/clases/tipoServicio.class';
import { Usuarios } from 'src/app/clases/usuarios.class';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent implements OnInit {

 

    item: Registro = new Registro( 0, null, true );
    lcActividades: any = [];
    editing: boolean;
    comienzo = new Date();
    fin = new Date();
    tipoServicioList = [];
    tipoTramiteList = [];
    codigoCausalList = [];
    tipoRespuestaList = [];
    tipoNotificacionList = [];
    ciudadList = [];
    es: any;
    cities = [];
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
      }else {
        this.item.activo=true;
      }
      this.fnLLenarSelects();

      this.es = {
        firstDayOfWeek: 1,
        dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar'
    }
    }


    public convertToDate(fec: string) {
      if (fec !== null && fec !== undefined) {
        const res = fec.split('-');
        const date = res[2] + '/' + res[1] + '/' + res[0];
        return date;
      }
      return null;
    }



    fnLLenarSelects() {
      this.fnBuscarListSelect(this.constant.servicios);
      this.fnBuscarListSelect(this.constant.tramites);
      this.fnBuscarListSelect(this.constant.causales);
      this.fnBuscarListSelect(this.constant.respuestas);
      this.fnBuscarListSelect(this.constant.notificaciones);
      this.fnBuscarListSelect(this.constant.ciudades);
    }
  
    buscar(id) {
      this.gService.getBy(this.constant.documento, id)
        .subscribe(
          (data: Registro) => {
            this.item = data;
            this.item.fecha = new Date(this.item.fecha);
            this.item.respfecha = new Date(this.item.respfecha);
            this.item.notifecha = new Date (this.item.notifecha);
         },
          error => {
            this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
          });
    }

    fnOnfocus() {
      if (this.item.numcuentaced) {
        const filtros = {f:['cedula'], v:[this.item.numcuentaced], l:[false]};
        this.gService.getAll(this.constant.suscriptores, filtros)
        .subscribe(
          (data: Usuarios[]) => {
            if (data.length > 0) {
              this.item.numcuentanom = data[0]['nombre'];
              this.item.numcuenta = data[0]['id'];
            }else {
              this.messageService.add({ severity: 'info', summary: 'Verifique', detail: 'Usuario '+this.item.numcuentaced+ ' no existe' });
              this.item.numcuentaced = null;
              this.item.numcuentanom = null;
              this.item.numcuenta = null;
            }
            
          },
          error => {
            this.messageService.add({ severity: 'info', summary: 'Verifique', detail: error });
          });
      } else {
        this.item.numcuentanom = null;
      }
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
        case this.constant.servicios: 
          this.tipoServicioList = listTmp;
          break;
      case this.constant.tramites:
          this.tipoTramiteList = listTmp;
          break;
      case this.constant.causales:
          this.codigoCausalList = listTmp;
          break;
      case this.constant.respuestas:
          this.tipoRespuestaList = listTmp;
          break;
      case this.constant.notificaciones:
          this.tipoNotificacionList = listTmp;
          break;
      case this.constant.ciudades:
          this.ciudadList = listTmp;
          break;
        default:
          break;
      }
    }
  
    onSubmit() {
      // inicia spinner
      this.item.id !== null ? this.onUpdate() : this.onCreate();
    }
  
    onCreate() {
      //this.item.comienzo = this.comienzo.getTime();
      //this.item.fin = this.fin.getTime();
      //console.log(this.item.fin);
      this.gService.save(this.constant.documento, this.item)
        .subscribe(
          (data: Registro) => {
            this.confirmationService.confirm({
              message:'¿Desea seguir guardando?',
              header: 'Confirmación',
              icon: 'fa fa-info-circle',
              accept: () => {
                this.item = new Registro(0, null, true);
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
      this.gService.update(this.constant.documento, this.item)
        .subscribe(
          (data: Registro) => {
            this.messageService.add({ severity: 'info', summary: 'Verifique', detail: 'Registro exitoso' });
            this.onClose();
          },
          error => {
            // cierra spinner
            this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
          }
        );
    }
  
    onClose() {
      // reset formulario
      this.dynamicDialogRef.close('');
    }
  }
  