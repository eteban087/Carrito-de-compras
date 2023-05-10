

const cart = (db, printProducts) =>{
  const ls = localStorage;
  


  
  
//   console.log(ls)

    let cart = JSON.parse(ls.getItem("cartDB")) || []  ;
   
    const notificacion = document.getElementById("notificacion");
    const productos_carrito = document.getElementById("productos_carrito");
    const container_tarjetas = document.getElementById("c_tarjetas");
    const cantidad = document.getElementById("cantidad");
    const total = document.getElementById("total");
    const btn_comprar = document.getElementById("btn_comprar");
    const  no_products = document.getElementById("no_products");
    const container_carrito = document.getElementById("container_carrito");
    
    const printCart = () =>{
        let html = ""
        if(cart === 0){
            
            notificacion.classList.remove("ver_notificacion")

        }else{
            notificacion.classList.add("ver_notificacion")
        }

        if(cart.length === 0){
            no_products.style.display ="block"
        }else{
           
            no_products.style.display ="none"
            cart.forEach(item=>{
              
                
              
            
                const producto = db.find(p => p.id === item.id)
           
     
                // console.log(producto)
           
                html += ` <div class="tarjeta_productos_car">
            <div class ="imagen_carrito">
              <img src="${producto.image}" alt="${producto.name}">
            </div>
            <div class="info_carrito">
      
      
              <div class="contenedor_btns">
                <h3>${producto.name}</h3>
      
                <div class="btns_carrito">
                  <p>$${producto.price}</p>
                  <div class="btns_cantidad">
                    <button data-id ="${item.id}" class="btn_menos"><i class="fa-solid fa-minus"></i></button>
                    <p class="cantidad">${item.qty}</p>
                    <button data-id ="${item.id}" class="btn_mas"><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <button data-id ="${item.id}"  class="eliminar"><i class="fa-solid fa-trash"></i></button>
                </div>
      
      
              </div>
              
      
            </div>
           
            
          </div>`
    
          ls.setItem("cartDB", JSON.stringify(cart))
         
        })

   
  
        }

      
        
       
        
        productos_carrito.innerHTML = html
        notificacion.innerHTML = showItemsCount();
        cantidad.innerHTML = showItemsCount();
        total.innerHTML = ShowTotalPrice()

      
     
    
    }
   

   
    // addEventListener("load",()=>{
        
    //     if(cart.length>0){
              
    //        container_carrito.classList.add("mostrar") 
    //     }
    // })
    
    

    
   

    const addToCar = (id, qty = 1) =>{
        const itemFinded = cart.find(i=> i.id === id);
        if(itemFinded){
            
          itemFinded.qty += qty
        }else{
            cart.push({id: id, qty: qty});
        }
       
        printCart()
       
    }

    const removeFromcart = (id, qty = 1) =>{

        const itemFinded = cart.find((i) => i.id === id);
        let result = itemFinded.qty - qty
        if(result > 0){
            itemFinded.qty -= qty;
           
        }else{
            cart = cart.filter(pro=> pro.id !== id)
            
            
        }

       

        printCart()
      

    }

    const remove = (id) =>{

        
      cart = cart.filter(i=> i.id !== id);
      if(cart.length ===0){
        ls.clear()
      }

      printCart();
     
        
       


        
    }

  
   
    const ShowTotalPrice = () =>{
        
        let suma = 0;
        cart.forEach(item=>{
          
            const itemFinded = db.find(p=> p.id === item.id);
            suma += item.qty * itemFinded.price

        })
        
        return suma;

        
    }

   const showItemsCount = () =>{

    let suma = 0;
    cart.forEach(item=>{
        suma += item.qty
    })
   
    
    return suma;
    


   }
  
   const checkout = ()=>{
    cart.forEach(pro=>{
        
        const itemFinded = db.find(p=> p.id === pro.id);
        itemFinded.quantity -= pro.qty

    })

    cart = [];
    printCart();
    printProducts();
    container_carrito.classList.remove("mostrar")
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada con exito',
        showConfirmButton: false,
        timer: 1500
      })
      
   }
  
//    eventos

container_tarjetas.addEventListener("click",(e)=>{
    if(e.target.closest(".add_to_car")){
        const id = +e.target.closest(".add_to_car").dataset.id;
       
        addToCar(id)

    }
})

productos_carrito.addEventListener("click",(e)=>{
    if(e.target.closest(".btn_menos")){
        const id = +e.target.closest(".btn_menos").dataset.id;
       removeFromcart(id)

    }
})

productos_carrito.addEventListener("click",(e)=>{
    if(e.target.closest(".btn_mas")){
        const id = +e.target.closest(".btn_mas").dataset.id;
       
        addToCar(id)

    }
})

productos_carrito.addEventListener("click",(e)=>{
    if(e.target.closest(".eliminar")){
        const id = +e.target.closest(".eliminar").dataset.id;
       
        remove(id)

    }
})


btn_comprar.addEventListener("click",()=>{
    if(cart.length>0){
        checkout()
    }else
    {
        container_carrito.classList.remove("mostrar")
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Opps...',
            text: "No has seleccionado ningun producto",
            showConfirmButton: false,
            timer: 2000
          })
    }
})

printCart();  








   
    



}

export default cart;