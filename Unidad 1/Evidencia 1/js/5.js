
let productos = [
    { nombre: "Producto 1", precio: 300, categoria: "Zapatos" },
    { nombre: "Producto 2", precio: 450, categoria: "Zapatos" },
    { nombre: "Producto 3", precio: 120, categoria: "Ropa" },
    { nombre: "Producto 4", precio: 90, categoria: "Ropa" },
    { nombre: "Producto 5", precio: 250, categoria: "Zapatos" },
    { nombre: "Producto 6", precio: 30, categoria: "Accesorio" },
    { nombre: "Producto 7", precio: 75, categoria: "Accesorios" },
    { nombre: "Producto 8", precio: 300, categoria: "Zapatos" },
    { nombre: "Producto 9", precio: 50, categoria: "Ropa" },
    { nombre: "Producto 10", precio: 100, categoria: "Accesorios" }
];


let productosFiltrados = productos
    .filter(producto => producto.categoria === "Zapatos" && producto.precio > 100)
    .map(producto => ({ nombre: producto.nombre, precio: producto.precio }));


console.log(productosFiltrados);
