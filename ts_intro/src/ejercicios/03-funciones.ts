
function sumar(a:number, b:number): number{
    return (a + b);
}
const sumarFlecha = (a: number, b: number):number =>{
    return a+b;
}

function multiplicar(numero: number, otroNumero: number, base: number = 2): number{
    return (numero*base);
}

interface PersonajeLOR extends Record<string, any>{
    nombre: string;
    pv: number;
    mostrarHP: ()=> void;
}

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.hp +=curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR={
    nombre: "Strider",
    pv: 50,
    mostrarHP():void{
        console.log("Su pv es : "+this.pv);
    }
}

curar(nuevoPersonaje,20);
const resultado = multiplicar(10,20);
nuevoPersonaje.mostrarHP();
console.log(resultado)