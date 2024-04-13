// Creando una app de notas
const { Console } = require("console");
const  readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let listaDeNotas = [];

//Create
function crear (){
    rl.question("Escribe tu nota: ", function(nota){
        listaDeNotas.push(nota);
        console.log("Su nota fue agregada correctamente.");
        menu();
    })
}


//read
function listar() {
    console.log("Este es tu listado de notas ")
    for (let index = 0; index < listaDeNotas.length; index++){
        console.log(index+1, listaDeNotas[index])
    }
    menu();
}

//Update

function editar (){
    rl.question("Que nota quieres cambiar?", function(numero){
        rl.question("Escribe el nuevo contenido", function(texto){
            listaDeNotas[numero-1] = texto;
            menu();
        })
    })
}

//Delete

function borrar() {
    rl.question("Que nota quieres borrar", function(numero){
        let nuevoListadoDeNotas = []
        for(let i = 0; i < listaDeNotas.length; i++){
            if (i !== numero-1){
                nuevoListadoDeNotas.push(listaDeNotas[i])
            }
        }
        listaDeNotas = nuevoListadoDeNotas
        menu();
    })
}

//menu

function menu(){
    console.log("Bienvenido a Jnotes");
    console.log("Menu de usuario");
    console.log("Elije una opcion");
    console.log("1. Crear una nota");
    console.log("2. Listar una nota");
    console.log("3. Editar una nota");
    console.log("4. borrar una nota");
    console.log("5. Cerrar el programa");

    rl.question("Escribe el numero elejido ", function(num){
        switch(num){
            case "1":
                crear();
                break
            case "2":
                listar();
                break
            case "3":
                editar();
                break
            case "4":
                borrar();
                break
            case "5":
                console.log("Chao");
                rl.close;
            default:
                console.log("opcion incorrecta");
        }
    })
}

menu();