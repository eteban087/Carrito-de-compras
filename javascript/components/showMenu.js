const showMenu = () =>{
 
 const  icono_menu = document.getElementById("icono_menu");
 const nav = document.getElementById("nav")
 console.log(nav)
 
 icono_menu.addEventListener("click",()=>{
   nav.classList.toggle("visi");
   nav.classList.toggle("animate__animated");
   nav.classList.toggle("animate__backInUp");

 })

}


export default showMenu;