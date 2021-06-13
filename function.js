function cambiarPaso(){
    let h1 = document.getElementById("paso");
    let boton = document.getElementById("boton");
    let flag = false;
    let imagen = document.getElementById("imagen");
    imagen.style.display = "block";
        switch(h1.textContent){
        case "Algoritmo para freir papas":
            h1.textContent="Lavar las papas";
            boton.textContent="Siguiente paso";
            imagen.src="img/lavar.jpg";
        break;     
        case "Lavar las papas":
            h1.textContent="Pelar las papas";
            imagen.src="img/pelar.gif";
        break; 
        case "Pelar las papas":
            h1.textContent="Cortar las papas en tiras, cuadraditos o de forma redonda";
            imagen.src="img/cortar.gif";
            break;
        case "Cortar las papas en tiras, cuadraditos o de forma redonda":
            imagen.src="img/hornalla.jpg";
            h1.textContent="Encender fuego en la hornalla";
        break; 
        case "Encender fuego en la hornalla":
            imagen.src="img/aceitecaliente.gif";
            h1.textContent="Colocar aceite a calentar";
        break; 
        case "Colocar aceite a calentar":
            imagen.src="img/verificar.gif";
            h1.textContent="Colocar las papas una vez que el aceite esté caliente";
        break; 
        case "Colocar las papas una vez que el aceite esté caliente":
            imagen.src="img/patatas.gif";
            h1.textContent="Freir por 10 minutos";
        break; 
        case "Freir por 10 minutos":
            imagen.src="img/servidas.jpg";
            h1.textContent="Retirar las papas y servir";
        break; 
        case "Retirar las papas y servir":
            imagen.src="img/chef.jpg";
            h1.textContent="FIN!!!";
            boton.textContent="Finalizar"
        break;
        case "FIN!!!":
            h1.textContent="¿Volver a repetir?";
            imagen.style.display = "none";
            boton.textContent="SI";
            break;
        case "¿Volver a repetir?":
            imagen.src="img/papas.jpg";
             h1.textContent="Algoritmo para freir papas";
            boton.textContent="Comenzar";
            break;
        case "" : h1.textContent="Algoritmo para freir papas" 
        break;
        }
}