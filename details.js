const info = data.events
const  queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get("id")
const profile = info.find(card => card._id == id)

let container= document.getElementById("contenedorDetails")

    container.innerHTML += ` <div class="med">
    <div class="card mb-3 p-5" style="max-width: 540px;">
        <div class="row g-0">
        <div class="col-md-4">
            <img src="${profile.image}" class="img-fluid rounded-start img-card-2 col-12" alt="museo">
        </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">${profile.name}</h5>
            <p class="card-text">${profile.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`

