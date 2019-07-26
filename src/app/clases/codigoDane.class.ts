import { Time } from '@angular/common';

export class CodigoDane {
    constructor(
        public codigo: number,
        public nombre: string,
        public activo: boolean,
        public id?: number
    ) {}
}
