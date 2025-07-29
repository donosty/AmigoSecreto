// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

const botonAnadir = document.querySelector('#add-amigo')
const alerta = document.querySelector('#alerta')
const seccionAmigos = document.querySelector('#listaAmigos')

cargarEventListeners();
function cargarEventListeners(){

    botonAnadir.addEventListener('click', anadirAmigo)
}

function anadirAmigo(e){
    
    const contenedor = e.target.parentElement
    
    let nombre = contenedor.querySelector('#amigo')
    
    if(nombre.value.trim() == ''){

        crearAlerta()
        return
    }

    amigos.push(nombre.value)
    nombre.value = ''
    mostrarAmigos()

}

function crearAlerta(){

    alerta.classList.remove('oculto')

    setTimeout(() =>{

        alerta.classList.add('oculto')
    },2000)
}

function mostrarAmigos(){

    const li = document.createElement('li')

    for(const amigo of amigos){

        li.textContent = amigo
        seccionAmigos.appendChild(li)
    }

}

function sortearAmigo(){
    
}