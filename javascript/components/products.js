const products = (product)=>{
    
    const db = [...product]
   
        const printProducts = () =>{
            
        const container_tarjetas = document.getElementById("c_tarjetas");
        let html = ""
        product.forEach(producto=>{
                
             html +=`  <div class="tarjeta">
            
            <div class="container_imagen">
                <img src="${producto.image}" alt="">
            </div>
                <div data-id = "${producto.id}" class ="add_to_car"><i class="fa-solid fa-cart-plus"> 
                    </i></div>
            <div class="info_tarjeta">
                <p>$${producto.price}</p>
                <p>Disponibles: ${producto.quantity}</p>
            </div>
        
            <div class="descripcion_tarjeta">
                <p>${producto.name}</p>
            </div>
        
            </div> `
            container_tarjetas.innerHTML = html
        });

  }

  printProducts();

  return{
    db,
    printProducts
  }
    
   
}

export default products;