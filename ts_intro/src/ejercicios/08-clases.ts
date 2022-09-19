class PersonaNormal{
    constructor(
        public nombre?: string,
        public direccion?: string
    ){
        this.imprimirNormalidad();
    }
    private imprimirNormalidad(){
        console.log(`-> ${this.nombre} -> ${this.direccion}`)
    }
}

class Heroe extends PersonaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;
    constructor(
        private alterEgo:string, 
        private edad?:number,
        private nombreReal?: string,
        direccion?: string
        ){
            super(nombreReal, direccion);
    }
    imprimirAlterEgo(){
        return this.alterEgo+ ' ' + this.nombreReal
    }
}

interface Personaje2{
    alterEgo: string;
    edad: number;
    nombreReal: number;
}

const ironman= new Heroe("Ironman",45,"Tony Stark","New York");

console.log(ironman.imprimirAlterEgo())
