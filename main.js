// Array para almacenar productos
const carrito = [];

// Función para agregar productos al carrito

function agregarAlCarrito(producto) {
  carrito.push(producto);
  alert(`"${producto.nombre}" ha sido agregado al carrito.`);
}

// Función para calcular el precio total en el carrito
function calcularPrecioTotal() {
  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  return total;
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  let contenidoCarrito = 'Contenido del carrito:\n';
  carrito.forEach((producto, index) => {
    contenidoCarrito += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  alert(`${contenidoCarrito}\nTotal de productos: ${carrito.length}\nPrecio total: $${calcularPrecioTotal()}`);
}

const cantidadProductos = parseInt(prompt('¿Cuántos productos desea agregar al carrito?'));

// Ciclo para agregar múltiples productos
for (let i = 0; i < cantidadProductos; i++) {
  const nombreProducto = prompt(`Ingrese el nombre del producto #${i + 1}:`);
  const precioProducto = parseFloat(prompt(`Ingrese el precio del producto #${i + 1}:`));

  const producto = { nombre: nombreProducto, precio: precioProducto };
  agregarAlCarrito(producto);
}

mostrarCarrito();
