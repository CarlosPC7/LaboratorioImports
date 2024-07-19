/*const botonEmpezarPartida = document.getElementById("carta");

const generarNumeroAleatorio = () => Math.floor (Math.random()*10);

const empezarPartida = () => {
const numeroAleatorio = generarNumeroAleatorio();
const carta = generarCarta(numeroAleatorio);
const urlCarta = obtenerUrlCarta (carta);
mostrarImagen(urlCarta);
sumarANuevaPuntuacion(carta);
mostrarPuntuacion();
gestionarPartida();
apareceBoton();
};

const generarCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    } else {
        return numeroAleatorio;
    }
};

const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg`;
        case 2:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg`;
        case 3:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg`;
        case 4:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg`;
        case 5:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg`;
        case 6:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg`;
        case 7:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg`;
        case 10:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg`;
        case 11:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg`;
        case 12:
        return `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg`;
        default:
        return `https://github.com/Lemoncode/fotos-ejemplos/blob/main/cartas/back.jpg`;
        }
};

const mostrarImagen = (urlCarta: string) => {
    const elementoImagen = document.getElementById("imagenCarta");
            if (
                elementoImagen !== null &&
                elementoImagen !== undefined &&
                elementoImagen instanceof HTMLImageElement
            ) {
                elementoImagen.src = urlCarta;
            } else {
                console.error("Elemento img no encontrado en el DOM");
            }
};

let guardarPuntuacion: number = 0;

const mostrarPuntuacion = () => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if(elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `${guardarPuntuacion}`;
    }
};

const sumarANuevaPuntuacion = (carta: number) => {
    if (carta > 7) {
        guardarPuntuacion +=0.5;
    } else {
        guardarPuntuacion += carta
    }
};

const totalPuntuacion = 7.5;

const deshabilitarBoton = () => {
    if (guardarPuntuacion > totalPuntuacion) {
        const elementoButton = document.getElementById("carta");
        if (
            elementoButton!== null &&
            elementoButton!== undefined &&
            elementoButton &&
            elementoButton instanceof HTMLButtonElement
        ) {
            elementoButton.disabled = true;
        } else {
            console.error ("gestionarGameOver: No se ha encontrado el elemendo id con Button"
            );
        }
    }
};

const gestionarPartida = () => {
    if (guardarPuntuacion === 7.5) {
      mostrarMensaje("He ganado");
    }
  
    if (guardarPuntuacion > totalPuntuacion) {
      mostrarMensaje("GAME OVER. HAS SUPERADO EL MÁXIMO DE PUNTUACIÓN!!");
      deshabilitarBoton();
    }
  };

if(
botonEmpezarPartida !== null &&
botonEmpezarPartida !== undefined &&
botonEmpezarPartida instanceof HTMLButtonElement
) {
botonEmpezarPartida.addEventListener("click",empezarPartida)
};

const botonMePlanto = document.getElementById("meplanto");
 
const seAcabaPartida = () => {
    nosPlantamos();
    const mensajeMeRindo = puntuacionObtenida();
    mostrarMensaje(mensajeMeRindo);
    apareceBoton();
  };

const nosPlantamos =() => {
    const elementoButton = document.getElementById("carta");
    if (
        elementoButton!== null &&
        elementoButton !== undefined &&
        elementoButton &&
        elementoButton instanceof HTMLButtonElement
    ) {
        elementoButton.disabled = true;
    } else {
        console.error (
        "gestionarGameOver: No se ha encontrado el elemendo id con Button"
    );
    }
};

const numeroCuatro = 4;
const numeroCinco = 5;
const numeroSeis = 6;
const numeroSiete = 7;
const numeroSieteYMedio = 7.5;

const puntuacionObtenida = (): string => {
    if (guardarPuntuacion <= numeroCuatro) {
      return `Has sido muy conservador`;
    }
    if (guardarPuntuacion === numeroCinco) {
      return `Te ha entrado el canguelo eh?`;
    }
    if (guardarPuntuacion === numeroSeis) {
      return `Casi casi...`;
    }
    if (guardarPuntuacion <= numeroSiete) {
      return `Casi casi...`;
    }
    if (guardarPuntuacion === numeroSieteYMedio) {
      return `¡Lo has clavado! ¡Enhorabuena!`;
    }
  
    if (guardarPuntuacion > 7.5) {
      return "Game over";
    }
  
    return "No deberías de llegar aquí";
  };

  const mostrarMensaje = (mensaje: string) => {
    const elementoMensaje2 = document.getElementById("mensaje");
    if (
      elementoMensaje2 !== null &&
      elementoMensaje2 !== undefined &&
      elementoMensaje2 instanceof HTMLDivElement
    ) {
      elementoMensaje2.innerText = mensaje;
    }
  };

if(
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
    ) {
    botonMePlanto.addEventListener("click",seAcabaPartida);
    };


    const botonReiniciar = document.getElementById("reiniciar");

    const seReiniciaPartida = () => {
        vamosAPorOtraPartida();
        resetPartida();
    };

    const apareceBoton = () => {
        const elementoButton3 = document.getElementById("reiniciar");
        if (
          elementoButton3 !== null &&
          elementoButton3 !== undefined &&
          elementoButton3 instanceof HTMLButtonElement
        ) {
          elementoButton3.disabled = false;
        } else {
          console.error("Error not found 404");
        }
      };

    const vamosAPorOtraPartida = () => {
        const elementoButton2 = document.getElementById("carta");
        if (
          elementoButton2 !== null &&
          elementoButton2 !== undefined &&
          elementoButton2 instanceof HTMLButtonElement
        ) {
          elementoButton2.disabled = false;
        } else {
          console.error("Error not found 404");
        }
      };

    const resetPartida = () => {
        guardarPuntuacion = 0;
        mostrarPuntuacion();
        mostrarImagen("");
        mostrarMensaje("");
      };


    if (
        botonReiniciar !== null &&
        botonReiniciar !== undefined &&
        botonReiniciar instanceof HTMLButtonElement
      ) {
        botonReiniciar.addEventListener("click", seReiniciaPartida);
      };
      */