   
   const getProducts = async() =>{

    const peticion =  await fetch("https://ecommercebackend.fundamentos-29.repl.co/")
    const data = await peticion.json();
    return data ;
    
   }
   

   export default getProducts;