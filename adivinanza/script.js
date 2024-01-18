
let limite = prompt('Ingrese el número fijo para jugar: ')

let introducirP = document.getElementById('introducirP')

introducirP.innerHTML = 'Introduce un número entre 1 y ' + limite + ':';

let numeroAzar = Math.floor(Math.random() *limite) + 1; 

let numeroEntrada = document.getElementById('numeroEntrada');

let mensaje = document.getElementById('mensaje');

let intento = document.getElementById('intento');

let intentos = 0;

let revisarResultado = ()=>{
    intentos ++;
    intento.textContent = intentos;

    let numeroIngresado = parseInt(numeroEntrada.value);

    if(numeroIngresado < 1 || numeroIngresado > limite || isNaN (numeroIngresado)){
        mensaje.textContent = 'Por favor ingrese un numero valido entre 1 y' + limite
        mensaje.style.color = 'black'
        return
    } 

    if( numeroIngresado === numeroAzar ){
        mensaje.textContent = '¡Felicidades! ¡Has adivinado el número!'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }else if (numeroIngresado < numeroAzar){
        mensaje.textContent = ' ¡Más alto! el número es mayor al que ingresaste'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = '¡Más bajo! el número es menor al que ingresaste'
        mensaje.style.color = 'red'
    }
}