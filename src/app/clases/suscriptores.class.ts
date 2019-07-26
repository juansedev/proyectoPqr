import { Time } from '@angular/common';

export class Suscriptores {
    constructor(
        public cedula: number,
        public nombre: string,
        public direccion: string,
        public telefono1: string,
        public telefono2: string,
        public ciudad: string,
        public activo: boolean,
        public tipo: string,
        public id?: number        
    ) {}
}

