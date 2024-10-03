/*function uno(){
    let a = 9
    let b = 10
    let suma = a+b
    console.log("funcion uno",suma);
    
}

/*let x = uno
console.log(uno()); 
uno()

dos(5,6)
//Funcion con parametros pero sin retornos
function dos(a,b){
    let suma = a + b
    console.log("Funcion dos", suma);
}

dos(5,6)

//Funcion sin parametros pero con retornos 
function tres(){
    let a = 7
    let b = 15
    let suma = a+b
    return suma
}

console.log("La funcion tres retorna:", tres());

//funcion con parametros y retorno
function cuatro(a,b){
    let suma = a+b
    return suma
}
console.log("Funcion cuatro retorna", cuatro(3,2));


let f5 = function(){
    return 6
}
console.log(f5());

let f6 = ()=>{
    return 7
}
console.log(f6());




let obj = {
    nombre:"Maryjose",
    edad: 18
}

obj.carrera = "Ingenieria"
obj[0] = 3

console.log(obj);
console.log(obj.nombre);


let obj2 ={
    prop1: "Soy local",
    prop2: "Juan",
    prop3: {
        prop31: true,
        prop32: false,
        prop33: [44,66,77,{
            uno: 1,
            dos: 2,
            tres: 3,
            cuatro: [22,4,5]
        }]
    },
    prop4: function(){console.log(this.prop1);},
    prop5: ()=>{return this.prop1;}
}

console.log(obj2.prop3.prop33[3].cuatro[2]); */

/*let medida = prompt ("Ingrese que tipo de unidad ingresara: ")
let J = prompt ("Ingresa una cantidad")

let metros  = Number (J) / 100
let kilometros = Number (J) / 1000;
let millas = kilometros / 1609.34;

console.log("La conversión en metros es: ", metros);
console.log("La conversión en kilometros es: ", kilometros);
console.log("La conversion en millas es: ", millas);*/

/*let x = 5000
alert(`Valor de x: ${x} y ${x}`)

let o ={ 
    nombre: "Juan",
    profecion: "Mecanico"
}

let a = o

console.log(o);
console.log(a);
a.nombre = "Pepe"
console.log(a);
console.log(o);

let s = "t"
let f = s

console.log(s);
*/
/*class Animal{
    constructor(tipo, genero, edad, color){
        this.tipo = tipo
        this.genero = genero
        this.edad = edad
        this.color = color
    }
    setTipo(dato){
        this.tipo = dato
    }
    getTipo(){
        return this.tipo
    }
}
class Perro extends Animal{
    constructor(tipo, genero, edad, color, raza){
        super(tipo, genero, edad, color)
        this.raza = raza

    }
}
let mamiferos = new Animal("terrestre", "canino", "15", "Cafe")
let bullDog = new Perro("terrestre", " canino", "15", "cafe", " bullDog")*/

/*class Vehiculo{
    constructor(navegacion, energia, propulsion){
        this.navegacion = navegacion
        this.energia = energia
        this.propulsion = propulsion
    }
    setTipo(dato){
        this.navegacion = dato
    }
    getTipo(){
        return this.navegacion
    }
}
class Aereo extends Vehiculo{
    constructor(navegacion, energia, propulsion, altitud){
        super(navegacion, energia, propulsion)
        this.altitud = altitud
    }
}
class Avion extends Aereo{
    constructor(navegacion, energia, propulsion, altitud, comunicacion){
        super(navegacion,energia, propulsion, altitud)
        this.comunicacion = comunicacion
    }
}
class Terrestre extends Vehiculo {
    constructor(navegacion, energia, propulsion, velocidad){
        super(navegacion, energia, propulsion)
        this.velocidad = velocidad
    }
}
class Moto extends Terrestre{
    constructor(navegacion, energia, propulsion, velocidad, cambios){
        super(navegacion,energia,propulsion,velocidad)
        this.cambios = cambios
    }
}
class Marino extends Vehiculo {
    constructor(navegacion, energia, propulsion, flotamiento){
        super(navegacion,energia,propulsion)
        this.flotamiento = flotamiento
    }
}
class Submarino extends Marino{
    constructor(navegacion,energia,propulsion, flotamiento, profundidad){
        super(navegacion, energia, propulsion,flotamiento)
        this.profundidad = profundidad
    }
}

let avion = new Avion("GPS", "Combustible", "Motor", "300","9.000","Radio" )
let moto = new Moto ( "GPS", "Combustible", "Motor", "120","5")
let submarino = new Submarino ("GPS", "Combustible", "Motor", "lastres", "400 m")

let arr =[1,2,7,8]

let a = arr
arr[9]=26
console.log(arr);
console.log(a);
let c = [arr]
arr[10]=55
console.log(c);

function uno(...dato){
    for(let i =0; i<dato.length; i++){
        console.log(dato[i]);
    }
}
uno(1,2,3,4,5,6,7)*/

let a = {
    nombre:"Maryjose",
    edad: 18
}

let {nombre, edad} = a
console.log(nombre, edad);



