import { Time } from '@angular/common';

export class TipoNotificacion {
    constructor(
        public codigo: number,
        public nombre: string,
        public activo: boolean,
        public id?: number
    ) {}
}
