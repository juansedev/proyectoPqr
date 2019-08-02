import { Time } from '@angular/common';

export class Suscriptores {
    constructor(
        public cedula: number,
        public nombre: string,
        public nuid: string,
        public direc: string,
        public telefono: string,
        public telfon2: string,    
        public estado: boolean,
        public tipo: string,
        public ciudad?: number,
        public id?: number        
    ) {}
}

