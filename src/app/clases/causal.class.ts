export class Causal {
    constructor(
        public codigo: string,
        public nombre: string,
        public tipo: string,
        public activo: boolean,
        public acueducto?: boolean,
        public definicion?: string,
        public aseo?: boolean,
        public alcantarillado?: boolean,
        public nomtipo?: string,
        public id?: number
    ) { }
}
