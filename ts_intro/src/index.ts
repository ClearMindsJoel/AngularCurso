interface Pasajero{
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero={
    nombre: "Fernando"
}

const pasajero2: Pasajero={
    nombre: "Joel",
    hijos: ["Erick"]
}

function imprimeHijos(pasajero: Pasajero){
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1)