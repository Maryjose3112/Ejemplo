
let arregloprincipal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Arreglo principal:", arregloprincipal);

let arregloordenado = arregloprincipal.sort((a, b) => a - b);

console.log("Arreglo ordenado:", arregloordenado);

arregloordenado.splice(0, 3);

arregloordenado.push(...Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1));

console.log("Arreglo final:", arregloordenado);

