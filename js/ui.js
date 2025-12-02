
export const actualizarContador=(carrito) =>{
    const contador=document.getElementById("contador-carrito")

    if(contador) {
        contador.textContent=`(${carrito.length}) Total productos`

    }
}


export const mostrarMsje=(texto) =>{
        alert(texto);
}