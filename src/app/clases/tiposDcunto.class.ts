import { Time } from '@angular/common';

export class TiposDcunto {
    constructor(
        public fecha: Date,
        public codigo: number,
        public nombre: string,
        public activo: number,
        public id?: number
    ) {}
}
