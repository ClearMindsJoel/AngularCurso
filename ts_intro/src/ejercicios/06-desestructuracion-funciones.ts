export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto={
    desc: "Nokia A1",
    precio: 150
}

const tableta: Producto={
    desc: "Ipad Air",
    precio:350
}


export function calcularISV(productos: Producto[]): number[]{
    let total =0;

    productos.forEach(({precio})=>{
        total+=precio;
    });

    return [total,total + 0.15];
}

const articulos = [telefono, tableta];
const isv = calcularISV(articulos);

console.log(`ISV: ${isv}`)