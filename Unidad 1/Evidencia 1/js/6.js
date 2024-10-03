
function dividir(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Ambos valores deben ser numéricos.");
        }

        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }

        return a / b;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
console.log(dividir(18, 2));   
console.log(dividir(10, 0));  
console.log(dividir(10, "a")); 