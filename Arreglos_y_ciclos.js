// Declaró un arreglo con varios tipos de frutas
const frutas = ["manzana", "pera", "manzana", "plátano", "naranja", "pera", "manzana", "plátano", "naranja", "naranja"];

// Objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

// Usar un ciclo for para recorrer el arreglo y contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas usando 'for':", conteoFrutas);

// Reiniciar el objeto para usar el ciclo while
const conteoFrutasWhile = {};
let index = 0;

// Usar un ciclo while para recorrer el arreglo y contar las frutas
while (index < frutas.length) {
    let fruta = frutas[index];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    index++;
}

console.log("Conteo de frutas usando 'while':", conteoFrutasWhile);
