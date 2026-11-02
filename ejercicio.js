const prompt = require('prompt-sync')();

function pedirNumero(mensaje = "Ingresa un número para factorial:  ") {
    return Number(prompt(mensaje));
}

function factorialNumero() {
    const numeroUsuario = pedirNumero();
    let resultado = 1;

    if (numeroUsuario >= 0 && Number.isInteger(numeroUsuario)) {

        for (let i = 1; i <= numeroUsuario; i++) {

            resultado = resultado * i;
        }

        console.log("El factorial es: " + resultado);

    }else{
        console.log("Número ingresado no es válido");
        
    }
}

factorialNumero()