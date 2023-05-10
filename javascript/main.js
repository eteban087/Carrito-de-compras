import loader from "./components/loader.js";
import showcart from "./components/showCart.js";
import getProducts from "./helpers/getProducts.js";
import products from "./components/products.js";
import cart from "./components/cart.js";

// loader
loader();

// mostrar el carrito
showcart();

// mostrar tarjetas
products(await getProducts())

const {db,printProducts} = products(await getProducts())

cart(db,printProducts)

   

   
 