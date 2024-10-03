class Nodo {
    constructor(data) {
        this.back = null; 
        this.data = data;
        this.next = null; 
    }
}

let nodo1 = new Nodo("Dato 1");
let nodo2 = new Nodo("Dato 2");
let nodo3 = new Nodo("Dato 3");

nodo1.data = "Dato 1";
nodo2.data = "Dato 2";
nodo3.data = "Dato 3";


nodo1.next = nodo2; 
nodo2.next = nodo3; 
nodo3.next = null;  

nodo1.back = null;   
nodo2.back = nodo1; 
nodo3.back = nodo2;  

console.log("Nodo 1:", nodo1);
console.log("Nodo 2:", nodo2);
console.log("Nodo 3:", nodo3);
