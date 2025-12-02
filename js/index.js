import { productos } from "./productos.js";

import { agregar } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";


document.addEventListener("DOMContentLoaded",()=>{
    const contenedor = document.getElementById("contenedor-tarjetas")


    const carrito=obtenerCarrito()
    actualizarContador(carrito)


    fetch("./data/productos.json")
        .then((res)=>{
            if(!res.ok){
                throw new Error(`Error HTTP Status ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log("Datos cargados (data):", data);
            data.forEach((producto)=>{
                const tarjeta=document.createElement("article")
                tarjeta.classList.add("tarjeta-producto")
                
                const img=document.createElement("img")
                img.src=producto.img
                img.alt=`./${producto.nombre}`


                const titulo=document.createElement("h3")
                titulo.textContent=producto.nombre

                const detalle=document.createElement("p")
                detalle.textContent=`$${producto.precio}`


                const boton=document.createElement("button")
                boton.classList.add("btn")
                boton.textContent="Agregar"

                boton.addEventListener("click",()=>{
                    agregar(producto)
                })

                tarjeta.appendChild(img)
                tarjeta.appendChild(titulo)
                tarjeta.appendChild(detalle)
                tarjeta.appendChild(boton)


                contenedor.appendChild(tarjeta)
 
                })
        })
        .then((err)=>{
            console.log(err)
        })

/*const contenidoBody = document.body.innerHTML;

console.log(contenidoBody);*/

   
}

)