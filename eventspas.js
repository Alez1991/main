function separadorDeEventos(fechaEvento){
    return fechaEvento.filter(fhecht => filtroDeFecha(fhecht.date))
}
function filtroDeFecha(fech){
    if(fech.includes("2021")){
        return true
    }else{
        return false
    }
}



let contenedor = document.getElementById("contenedor")
    let contador = 0;
    let contadorDefila = 0;
    
for(let event of separadorDeEventos(data.events)){
        if(contador === 0){

        contenedor.innerHTML += `<div id="fila${contadorDefila}"></div>`
    }
    let pedasitoDeFila = document.getElementById(`fila${contadorDefila}`)
    pedasitoDeFila.innerHTML += `<div class="p-1">
    <div class="card car-he" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top img-card" alt="comida">
        <div class="card-body">
            <h6 class="card-title">"${event.name}"</h6>
            <p class="card-text">"${event.description}"</p>
            <div class="d-flex justify-content-between">
            <div><p><strong>$${event.price}</strong></p></div>
            <div><button><a class="bu" href="./details.html" class="btn btn-primary">Details</a></button></div>
        </div>
        </div>
        </div>
        </div>`;
    if(contador === 1){
        contadorDefila ++
    contador = 0
    }else{
        contador++
    }
    }