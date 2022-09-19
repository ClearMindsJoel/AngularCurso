import { calcularISV, Producto } from "./06-desestructuracion-funciones";

const carritoCompras: Producto[] = [
  {
    desc: "Huawei",
    precio: 100,
  },
  {
    desc: "Samsung",
    precio: 20,
  },
];

const [total, isv] = calcularISV(carritoCompras);

console.log(`El total es  ${total}`);
console.log(`El isv es ${isv}`);
