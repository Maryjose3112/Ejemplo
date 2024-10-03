let persona = {
    nombre: "Maryjose",
    edad: 18,
    ciudad: "Durango"
  };

  console.log("Objeto persona inicial:", persona);

  persona.hobbies = ["leer", "danza", "musica"];
  
  console.log("Objeto persona después de agregar hobbies:", persona);


  function incrementarEdad(personaOriginal) {
    let nuevaPersona = { ...personaOriginal };
  
    if (personaOriginal.edad) {
      nuevaPersona.edad = personaOriginal.edad + 1;
    }
  
    return nuevaPersona;
  }
  
  let nuevaPersona = incrementarEdad(persona);
  console.log("Nueva persona con edad incrementada:", nuevaPersona);

  delete persona.edad;
  console.log("Objeto persona después de eliminar la edad:", persona);
  
  