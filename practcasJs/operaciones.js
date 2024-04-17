let n1 = 0;
let n2 = 0;
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;

function sumar() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    suma = n1 + n2;
    document.getElementById("resultado").value = suma;
}

function restar() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    resta = n1 - n2;
    document.getElementById("resultado").value = resta;
}

function multiplicar() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    multiplicacion = n1 * n2;
    document.getElementById("resultado").value = multiplicacion;
}

function dividir() {
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    division = n1 / n2;
    document.getElementById("resultado").value = division;
}
