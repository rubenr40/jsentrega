import { guardarCarrito,obtenerCarrito, vaciarCarrito } from "./storage.js"

import { actualizarContador,mostrarMsje} from "./ui.js" 

export const agregar=(producto)=>{
    const carrito = obtenerCarrito()
    carrito.push(producto)

    guardarCarrito(carrito)

    actualizarContador(carrito)
    mostrarMsje("producto Agreegado")

    
}

export const eliminarProducto=(indice)=>{
    const carrito=obtenerCarrito()
    carrito.splice(indice,1)
    guardarCarrito(carrito)
    actualizarContador(carrito)
    mostrarMsje("Producto Eliminado")
}

export const vaciarCarritoFunction=()=>{
    vaciarCarrito()
    actualizarContador(carrito)
    mostrarMsje("Carrito Vacio")

}