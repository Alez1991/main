import { cardsDinamicas, categoriaDinamicas,filtroPorCategoria,filtrarBusqueda } from './module/funciones.js'

let contenedorDeCards = document.getElementById("contenedorDeCards")
let contenedorCheckss = document.getElementById("contenedorCheckss")
let contenedorPadre = document.getElementById("contenedorPadre")
let contenedorBusqueda = document.getElementById("busqueda")

let evento= data.events

let categoriasNoRepetidas= Array.from(new Set(evento.map(elemento => elemento.category)))

cardsDinamicas(evento, contenedorDeCards)
categoriaDinamicas(categoriasNoRepetidas, contenedorCheckss)

contenedorPadre.addEventListener('change', (e) =>{
    let filtrado = cruseDeFiltros()
    cardsDinamicas(filtrado, contenedorDeCards)
})

contenedorBusqueda.addEventListener('input', (e) =>{
    let filtradoBusqueda= cruseDeFiltros()
    cardsDinamicas(filtradoBusqueda, contenedorDeCards)
})

function cruseDeFiltros(){
    let checkbox= 
    document.querySelectorAll('input[type="checkbox"]:checked')
    let categoriaSeleccionada = Array.from(checkbox).map(elemento => elemento.value)
    
    let filtrado=  filtroPorCategoria(evento,categoriaSeleccionada)
    let filtradoBusqueda=  filtrarBusqueda(filtrado,contenedorBusqueda.value)
    return filtradoBusqueda
}







