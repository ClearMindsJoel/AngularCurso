function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(2);
let soyArreglo = queTipoSoy([2,3]);
let soyExplicito = queTipoSoy<number>(111);