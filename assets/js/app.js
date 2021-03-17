/* Banderas */
var capturar = false;

/* Variables globales */
var arrayAlumnos = [];
var arrayCalificaciones = [];
var posicion = 0;
var tableData = "";

/* Elementos */

var buttonCapturar = document.getElementById("btnCapturar");
var buttonLimpiar = document.getElementById("btnLimpiar");
var buttonGuardar = document.getElementById("btnGuardar");

var infoBox = document.getElementById("info");

var textNombre = document.getElementById("nombre");
var textCalificacion = document.getElementById("calificacion");

var tableBody = document.getElementById("data");


/* Eventos globales */

buttonCapturar.addEventListener("click", function() {
    capturar = !capturar;
    capturarInfo();
});

buttonLimpiar.addEventListener("click", function() {
    textNombre.value = "";
    textCalificacion.value = "";
});

buttonGuardar.addEventListener("click", function() {
    arrayAlumnos[posicion] = textNombre.value;
    arrayCalificaciones[posicion] = textCalificacion.value;

    tableData += `
                <tr>
                    <td>${posicion+1}</td>
                    <td>${arrayAlumnos[posicion]}</td>
                    <td>${arrayCalificaciones[posicion]}</td>
                    <td>Sin definir</td>
                </tr>
                `
    tableBody.innerHTML = tableData;

    posicion++;
    textNombre.value = "";
    textCalificacion.value = "";
    console.log(arrayAlumnos);
    console.log(arrayCalificaciones);
});



/* Funciones */

function test() {
    alert("Funciona!");
}

function capturarInfo() {

    if (capturar) {
        infoBox.classList.remove("d-none");
        infoBox.classList.add("d-block");
        buttonCapturar.classList.remove("btn-outline-primary");
        buttonCapturar.classList.add("btn-outline-danger");
        buttonCapturar.innerHTML = "Dejar de capturar";
    } else {
        infoBox.classList.remove("d-block");
        infoBox.classList.add("d-none");
        buttonCapturar.classList.remove("btn-outline-danger");
        buttonCapturar.classList.add("btn-outline-primary");
        buttonCapturar.innerHTML = "Capturar";
    }

}


$(document).ready(function() {
    //menu();

    //saludar();

    //calificaciones();
});

var opcion;

function menu() {
    console.log("Elige una opción:");
    console.log("1. Edad de Pedro");
    console.log("2. Nombre de Pedro");
    console.log("3. Lugar de nacimiento de Pedro");
    opcion = Number(prompt("Elige una opción"));
    switch (opcion) {
        case 1:
            console.log("22");
            break;
        case 2:
            console.log("Pedro Luis Alcedo Andrade");
            break;
        case 3:
            console.log("San Cristóbal, Venezuela")
            break;
        default:
            console.log("Opción no disponible");
            break;
    }
}

function saludar() {
    var saludar = true;

    do {
        console.log("Hola!");
        opcion = prompt("¿Saludar otra vez?\n1. Si\n2. No");
        if (opcion == 1) {
            saludar = true;
        } else {
            saludar = false;
        }
    } while (saludar)
}

function calificaciones() {
    var capturar = true;
    console.log("Programa para determinar calificaciones");

    do {

        var calificacion = Number(prompt("Ingresa la calificación:"));
        switch (calificacion) {
            case 1:
                console.log("Reprobado");
                break;
            case 2:
                console.log("Reprobado");
                break;
            case 3:
                console.log("Reprobado");
                break;
            case 4:
                console.log("Reprobado");
                break;
            case 5:
                console.log("Reprobado");
                break;
            case 6:
                console.log("Normal");
                break;
            case 7:
                console.log("Normal");
                break;
            case 8:
                console.log("Normal");
                break;
            case 9:
                console.log("Sobresaliente");
                break;
            case 10:
                console.log("Sobresaliente");
                break;
            default:
                console.log("Ingresa una calificación del 1 al 10");
        }

        var opcion = Number(prompt("¿Deseas capturar otra calificación?\n1. Si\n2. No"));
        if (opcion == 1) {
            capturar = true;
        } else {
            capturar = false;
        }
    } while (capturar);
}