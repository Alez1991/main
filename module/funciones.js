export function cardsDinamicas(data, contenedor){
    contenedor.innerHTML= ""
    let dinamicards= ""
    data.forEach(card => {
        dinamicards += `<div class="p-1">
        <div class="card car-he" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top img-card" alt="comida">
            <div class="card-body">
                <h6 class="card-title">"${card.name}"</h6>
                <p class="card-text">"${card.description}"</p>
                <div class="d-flex justify-content-between">
                <div><p><strong>$${card.price}</strong></p></div>
                <div><button><a class="bu" href="./details.html?id=${card._id}" class="btn btn-primary">Details</a></button></div>
            </div>
            </div>
            </div>
            </div>`
    });
    contenedor.innerHTML=dinamicards;
}


export function categoriaDinamicas(categoria,contenedorDeCategorias){
    contenedorDeCategorias.innerHTML= ""
    let dinamicaCategory= ""
    categoria.forEach(card => {
        dinamicaCategory += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${card}">
        <label class="form-check-label" for="inlineCheckbox1">${card}</label>
        </div>`
    });
    contenedorDeCategorias.innerHTML=dinamicaCategory;
}


export function filtroPorCategoria(datos,seleccionCategoria){
    if(seleccionCategoria.length === 0){
        return datos
    }
    return datos.filter(dato => seleccionCategoria.includes(dato.category))
}

export function filtrarBusqueda(datos, value){
    return  datos.filter(dato => dato.name.toLowerCase().includes(value.toLowerCase()))
    }
    