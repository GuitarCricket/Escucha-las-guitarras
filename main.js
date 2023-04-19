let columnaActiva = 1;

const columnas = document.querySelectorAll('.columna');

/**columnas.forEach(columna => {
  columna.addEventListener('click', () => {
    alert('¡Hiciste clic en una columna!');
  });
}); **/

columnas.forEach((columna, indice)=>{
    columna.addEventListener("click", function(){
        cambiarColumna(indice)
    })
})

function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice;
}

var botonLAzul = document.getElementById("botonLAzul");

botonLAzul.addEventListener("click", function(){
    var strato = document.getElementById("sonido1");
    strato.play();
})

var botonLVerde = document.getElementById("botonLVerde");

botonLVerde.addEventListener("click", function(){
    var tele = document.getElementById("sonido2");
    tele.play();
})

var botonLRojo = document.getElementById("botonLRojo");

botonLRojo.addEventListener("click", function(){
    var lesp = document.getElementById("sonido3");
    lesp.play();
})