import { Time } from '@angular/common';

export class TipoTramite {
    constructor(     
        public codigo: number,
        public nombre: string,
        public activo: number,
        public id?: number
    ) {}
}
