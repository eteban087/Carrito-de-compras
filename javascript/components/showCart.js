const showcart = () =>{

    const icono_carrito = document.getElementById("icono_carrito");
    const container_carrito = document.getElementById("container_carrito");
    
    icono_carrito.addEventListener("click",()=>{

        container_carrito.classList.add("mostrar")
        container_carrito.classList.add("animate__animated")
        container_carrito.classList.add("animate__bounceInRight")

  
  
    })

// cerrar el carrito

    const cerrar = document.getElementById("cerrar");

        cerrar.addEventListener("click",()=>{

 
    container_carrito.classList.remove("mostrar")
    container_carrito.classList.remove("animate__animated")
    container_carrito.classList.remove("animate__bounceInRight")
  
    });

}

export default showcart;