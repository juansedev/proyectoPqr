import { Time } from '@angular/common';

export class TipoServicio {
    constructor(
        public fecha: Date,
        public comienzo: Time,
        public fin: Time,
        public tmptotal: number,
        public activ: string,
        public id?: number,
        public coment?: string,
        public tmpint?: number, // tiempo de interrupcion
    ) {}
}
