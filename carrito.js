// OBTENER ELEMENTO DEL ID - Mandamos el ID padre del html al JS.
const shopContent = document.getElementById ("shopContent");

const verCarritoContainer = document.getElementById ("verCarrito");

let total = 0;


// FOOTER
//////////////////////////////////////////////////////////////////////////////////////////
// Obtener el elemento del footer por clase
let footer = document.getElementsByClassName("footer")[0];

// Crear elementos para el footer
let footerContent = document.createElement("div");
footerContent.innerHTML = "<p> &copy; 2024 LUCHO MARKET. - Todos los derechos reservados.</p>";

let btnSubir = document.createElement("button");
btnSubir.textContent = "Subir";
btnSubir.addEventListener("click", scrollToTop);

// Agregar elementos al footer
footer.append(footerContent);
footer.append(btnSubir);

// Función para desplazarse hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
//////////////////////////////////////////////////////////////////////////////////////////


/*const productos = [
    {
        id: 1,
        nombre: " Cerveza",
        precio: 1500,
        img:
        "https://masonlineprod.vtexassets.com/arquivos/ids/217732-800-auto?v=637854086316200000&width=800&height=auto&aspect=true"
    },
    {
        id: 2,
        nombre: " Queso",
        precio: 2100,
        img:
        "https://superdepaso.com.ar/wp-content/uploads/2021/06/SANTAROSA-PATEGRAS-04.jpg"
    },

    {
        id: 3,
        nombre: " Leche",
        precio: 900,
        img:
        "https://www.libreriasullivan.com.ar/images/000000000524-00428369524-004.jpeg"
    },

    {
        id: 4,
        nombre: " Papel Higienico",
        precio: 2000,
        img:
        "https://http2.mlstatic.com/D_NQ_NP_771939-MLU73785129942_012024-O.webp"
    },

]*/

// Obtener el contenido del JSON desde el elemento con ID productosJSON / o sea mis productos en JSON.
const jsonText = document.getElementById('productosJSON').textContent;

// Converto el texto JSON en un objeto JavaScript !
const productos = JSON.parse(jsonText);

// variable 'productos' en mi código
console.log(productos);




let carrito = [];
//este array sirve para darle funcionavilidad a los productos de arriba.
productos.forEach((products /*palabra que quiera*/) => {
    let content = document.createElement ("div");
    
    /*//CLASE para desarrollar en CSS
    content.className = "card";Funciona en la fila 70 y no entiendo por que..
    */

    content.innerHTML = `
    <img src= "${products.img}">
    <h3> ${products.nombre}</h3>
    <p class= "precio">  ${products.precio} $ AR .- </p>
    `;
    /*me ayuda a crear etiquetas html que despues de agrega en este div etc*/

    shopContent.append(content);
    // le manda todo "content a la pagina"
    ////////////////////////////////////////////////////////////////////////////////////////
    
    // BOTON DE COMPRA
    let comprarBoton = document.createElement("button");
    comprarBoton.innerText = "Comprar";
    //Es parecido a .innerHTML pero es para agregar texto a las etiquetas.
   
    //CLASE para desarrollar en CSS
    /*content.className = "Comprar";

    //CLASE para desarrollar en CSS
    content.className = "card";*/

    content.classList.add("Comprar", "card");

    content.append(comprarBoton);


    comprarBoton.addEventListener ("click", () => {
        carrito.push
        ({ //esto es para que ponga que es lo que quiera agregar dentro del carrito
            id : products.id,
            nombre: products.nombre,
            img: products.img,
            precio: products.precio,

        })
        console.log(carrito); // agregue esta línea para verificar el contenido del carrito

        // Actualizar el total
        total += products.precio;

        // Mostrar el mensaje con el total actual
        console.log( total);
        
    })
});



// AL APRETAR EL CHANGUITO, esta formula flecha hace que se vea el total con un ALERT
/*verCarritoContainer.addEventListener("click", () => {
    console.log("Contenido del carrito:", carrito);
    alert(`Total a abonar es: ${total}`);
})*/

//AL APRETAR EL CHANGUITO, esta formula flecha hace que se vea el total con un ALERT
verCarritoContainer.addEventListener("click", () => {
    console.log("Contenido del carrito:", carrito);
    Swal.fire(`Su total a abonar es de $: ${total}.- ,      
         Gracias por comprar en LUCHOMARKET`);

})