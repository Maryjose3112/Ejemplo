const PI = 3.14

let nombre = "Maryjose"

function test(dato){
    console.log(dato);
    
}

class Alumno{
    constructor(...datos){
        this.carrera = datos[0]
        this.matricula = datos[1]
        this.seccion = datos[2]
        this.turno = datos[3]
    }
    getCarrera(){
        return this.carrera
    }
}

export {
    PI,
    nombre, 
    test,
    Alumno
}
