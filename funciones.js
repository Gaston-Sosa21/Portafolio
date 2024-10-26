
//Cambiar a modo oscuro

function ModoOscuro() {
    console.log("Modo darkside activado");
    document.body.style.backgroundImage = "linear-gradient(to right, #fafad9, #f2f27e)";
    document.body.style.color = "#2b2b27";

    const circulos = document.querySelectorAll(".circulo");
    circulos.forEach(circulo => {
        circulo.style.backgroundImage = "-webkit-gradient(linear, left 0%, left 100%, from(#f7e48d), to(#fad83e))";
    });

}

//Circulos del fondo

document.addEventListener("DOMContentLoaded", function() {

            const fondoDePantalla = document.getElementById("fdoPantalla");
            var animaciones = ['desplazarse_1', 'desplazarse_2', 'desplazarse_3','desplazarse_4'];

            var cantCirculos = 5;

            for(let i=0;i<=cantCirculos;i++){
                const circle = document.createElement("div");
                circle.classList.add("circulo");

                let animacionAsignada = animaciones[i];

                if(i >= cantCirculos){
                 animacionAsignada =  animaciones[Math.floor(Math.random() * animaciones.length)];
                }

                circle.style.animationName = animacionAsignada;                    


                fondoDePantalla.appendChild(circle);
            }


 });