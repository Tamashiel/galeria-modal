
const enlaces = document.querySelectorAll(".galeria a"); // Seleccionamos todos los enlaces con ALL
const modal = document.querySelector(".modal"); // Seleccionamos de forma única
const imgModal = document.querySelector(".modal img");
const botones = document.querySelectorAll(".modal button"); // Seleccionamos los dos botones
let imgActual = 0;

// al hacer click en cada enlace, se "abre" la modal

enlaces.forEach((enlace, i) => {       // Para que vaya por todas las imagenes usamos un bucle.
    enlace.addEventListener("click", evento => { //Como le hacemos click a la imagen
        evento.preventDefault(); // Para que el enlace no funcione le quitamos su forma de actuar normal
        imgActual = i;
        imgModal.setAttribute("src", enlace.getAttribute("href")); // Primero lee la ruta de cada imagen. A la imagen grande le modificamos el SRC poniendo el HREF que tenemos de las imagenes.
        modal.classList.add("visible");
    });
});


// al hacer click en la modal (en cualquier parte), se "cierra"

modal.addEventListener("click", () => {
    modal.classList.remove("visible");
});

// Al hacerle click a la flechita tiene que salir en el console log algo

botones.forEach((boton, i) => {
    boton.addEventListener("click", evento => {
        evento.stopPropagation(); // cuando addEventListener termina el click retrocede, por eso paramos el evento para que no llegue al modal y haga su evento.
        if (i == 0){
            imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1; 
        }else{
            imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0; // ? --> if/else
        }
        imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
    });
});

// Si la imagen en la que te encuentras es menor a 8 podemos continuar a la siguiente, la condición es verdadera, en el momento en el que ya llegas al final, esta condición ya no sería verdadera cuando no pase de 8 por lo cual volvería al 0, creando un anillo constante. Lo mismo pasaría al contrario.






