// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

const botonAnadir = document.querySelector('#add-amigo')
const alerta = document.querySelector('#alerta')
const seccionAmigos = document.querySelector('#listaAmigos')
const botonSorteo = document.querySelector('#boton-sorteo')
const textoAlerta = document.querySelector('#texto-alerta')
const seccionSecreto = document.querySelector('#resultado')
const botonBorrar = document.querySelector('#boton-borrar')

cargarEventListeners();
function cargarEventListeners(){

    botonAnadir.addEventListener('click', anadirAmigo)
    botonSorteo.addEventListener('click', sortearAmigo)

    botonBorrar.addEventListener('click', () =>{

        seccionAmigos.innerHTML = ''
        seccionSecreto.innerHTML=''
        amigos = []
    })
}

function anadirAmigo(e){
    
    const contenedor = e.target.parentElement
    
    let nombre = contenedor.querySelector('#amigo')
    
    if(nombre.value.trim() == ''){

        crearAlerta("Nombre no valido")
        return
    }

    amigos.push(nombre.value)
    nombre.value = ''
    mostrarAmigos()

}

function crearAlerta(mensaje){

    alerta.classList.remove('oculto')
    textoAlerta.textContent = mensaje

    setTimeout(() =>{

        alerta.classList.add('oculto')
    },2000)
}

function mostrarAmigos(){

    seccionSecreto.innerHTML = ''

    if(amigos.length > 0){

        seccionAmigos.innerHTML = ''
    }

    for(const amigo of amigos){

        const li = document.createElement('li')
        li.textContent = amigo
        console.log(amigo)
        seccionAmigos.appendChild(li)
    }

}

function sortearAmigo(){
    
    let longitud = amigos.length

    if(longitud == 0){

        crearAlerta("No hay amigos en la fila")
        return
    }

    let sorteo = Math.floor(Math.random() * longitud) + 1

    seccionAmigos.innerHTML = ''
    let amigoSecreto = amigos[sorteo-1]

    seccionSecreto.innerHTML = ''

    const li = document.createElement('li')
    li.textContent = amigoSecreto
    seccionSecreto.appendChild(li)
}