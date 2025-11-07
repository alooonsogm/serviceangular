export class Persona {
    //Para que realice el binding automatico, las propiedades deben llamarse como el JSON.
    constructor(
        public IdPersona: number,
        public Nombre: string,
        public Email: string,
        public Edad: number
    ){}
}