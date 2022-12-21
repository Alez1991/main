import { cardsDinamicas, categoriaDinamicas,filtroPorCategoria,filtrarBusqueda } from './module/funciones.js'

let contenedorDeCards = document.getElementById("contenedorDeCards")
let contenedorCheckss = document.getElementById("contenedorCheckss")
let contenedorPadre = document.getElementById("contenedorPadre")
let contenedorBusqueda = document.getElementById("busqueda")

fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( res => res.json())
        .then(eventos=>{ 
            let evento = eventos.events
        
        let categoriasNoRepetidas= Array.from(new Set(evento.map(elemento => elemento.category)))

            cardsDinamicas(evento, contenedorDeCards)
            categoriaDinamicas(categoriasNoRepetidas, contenedorCheckss)
            
            function cruseDeFiltros(datos){
                let checkbox= document.querySelectorAll('input[type="checkbox"]:checked')
            let categoriaSeleccionada = Array.from(checkbox).map(elemento => elemento.value)
            let filtrado=  filtroPorCategoria(datos,categoriaSeleccionada)
            let filtradoBusqueda=  filtrarBusqueda(filtrado,contenedorBusqueda.value)
            return filtradoBusqueda
            }
            
            contenedorPadre.addEventListener('change', (e) =>{
                let filtrado= cruseDeFiltros(evento)
                cardsDinamicas(filtrado, contenedorDeCards)

            })

            contenedorBusqueda.addEventListener('input', (e) =>{
                let filtrado= cruseDeFiltros(evento)
                cardsDinamicas(filtrado, contenedorDeCards)

            })
        })
        







