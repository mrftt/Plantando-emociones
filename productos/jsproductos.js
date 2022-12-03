var cantidadComprados = 0;
var totalvalor = 0;
function comprar(precio) {
  cantidadComprados = cantidadComprados + 1;
  totalvalor = totalvalor + precio;
  // alert("Producto añadido, total en carrito: "+ cantidadComprados);
  document.getElementById("resultado").innerHTML = cantidadComprados;
  document.getElementById("totalprecio").innerHTML = totalvalor;
  document.getElementById("cantidad-carro").innerHTML = cantidadComprados;
}
function vaciar() {
  if (confirm("¿Deseas vaciar tu carrito?")) {
    cantidadComprados = 0;
    totalvalor = 0;
    alert("Carrito Vacio, elementos en carrito: " + cantidadComprados);
    document.getElementById("resultado").innerText = 0;
    document.getElementById("totalprecio").innerHTML = 0;
    document.getElementById("cantidad-carro").innerHTML = 0;
  }
}

function mensaje() {
  alert("Se te dirigirá a la pasarela de pagos");
}
