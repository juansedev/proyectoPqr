import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  SelectItem, MenuItem, ConfirmationService, MessageService, DialogService,
  DynamicDialogRef, DynamicDialogConfig
} from 'primeng/primeng';
import { GlobalService } from 'src/app/services/global.service';
import { ConstantService } from 'src/app/services/constant.service';
import { Causal } from 'src/app/clases/causal.class';

@Component({
  selector: 'app-detalle-causal-form',
  templateUrl: './detalle-causal-form.component.html',
  styleUrls: ['./detalle-causal-form.component.scss']
})
export class DetalleCausalFormComponent implements OnInit {
  item: Causal = new Causal('', '', 'p', true);
  tipo: any[] = [];
  editing: boolean;

  constructor(
    public dynamicDialogRef: DynamicDialogRef,
    public dynamicDialogConfig: DynamicDialogConfig,
    private gService: GlobalService,
    private constant: ConstantService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.tipo = [
      { label: 'Reclamaciones', value: 'r' },
      { label: 'Petitiocnes', value: 'p' }
    ];
    this.item = this.dynamicDialogConfig.data; // valida si esta para editar o no
    // tslint:disable-next-line:no-unused-expression
    if (this.item.id !== null) {
      this.buscar(this.item.id);
      this.editing = true;
    } else {
      this.item.activo = true;
    }
  }

  buscar(id) {
    this.gService.getBy(this.constant.causal, id)
      .subscribe(
        (data: Causal) => this.item = data,
        error => {
          this.messageService.add({ severity: 'error', summary: 'Verifique', detail: error });
        });
  }

  onSubmit() {
    // inicia spinner
    this.item.id !== null ? this.onUpdate() : this.onCreate();
  }

  onCreate() {
    this.gService.save(this.constant.causal, this.item)
      .subscribe(
        (data: Causal) => {
          this.confirmationService.confirm({
            message: '¿Desea seguir guardando?',
            header: 'Confirmación',
            icon: 'fa fa-info-circle',
            accept: () => {
              this.item = new Causal('', '', 'p', true);
            },
            reject: () => {
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
    this.gService.update(this.constant.causal, this.item)
      .subscribe(
        (data: Causal) => {
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
    this.dynamicDialogRef.close('');
  }
}
