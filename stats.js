let tdContenedor= document.getElementById("contenedorTd")
let contenedorFuturo = document.getElementById("contenedorEventoFuturo")
let contenedorPasado = document.getElementById("contenedorEventoPasado")

fetch( 'https://amazing-events.onrender.com/api/events' )
        .then( res => res.json())
        .then(eventos=>{ 
            let fecha= eventos.currentDate
            let evento = eventos.events
            let eventoAlto=eventoPorcentajeAlto(evento)
            let eventoBajo = eventoPorcentajeBajo(evento)
            let masCapacidad = eventoCapacidadMayor(evento)
            contenedorTable(eventoAlto.name, eventoBajo.name, masCapacidad.name,tdContenedor)
            eventosFuturos(evento,contenedorFuturo,fecha)
            eventosPasados(evento,contenedorPasado,fecha)
        })

        function contenedorTable (data1, data2, data3,contenedor){
            let html = `<tr>
            <td>${data1}</td>
            <td>${data2}</td>
            <td>${data3}</td>
            </tr>`
            contenedor.innerHTML += html
        }


        function eventoPorcentajeAlto(data){
            let asistenciaDeEvento = data.filter(element =>element.assistance ) 
            let PorcentajeDeEvento= asistenciaDeEvento.map(element => {
                let aux = {
                    name:element.name,
                    percentage: element.assistance / element.capacity * 100
                }
                return aux
            })
            let EventoPorcentajeOrdenados = PorcentajeDeEvento.sort( (a,b)=>a.percentage - b.percentage)
            return EventoPorcentajeOrdenados.slice(-1)[0] 
        }


        function eventoPorcentajeBajo(data){
            let asistenciaDeEvento = data.filter(element =>element.assistance ) 
            let PorcentajeDeEvento= asistenciaDeEvento.map(element => {
                let aux = {
                    name:element.name,
                    percentage: element.assistance / element.capacity * 100
                }
                return aux
            })
            let EventoPorcentajeOrdenados = PorcentajeDeEvento.sort( (a,b)=>a.percentage - b.percentage)
            return EventoPorcentajeOrdenados.slice(0,1)[0] 
        } 


        function eventoCapacidadMayor(data){
            let eventoCapacidad = data.map(element => {
                let aux={
                    name:element.name,
                    capacity: element.capacity
                }
                return aux
            })
            let eventosOrdenadosPorCapacidad = eventoCapacidad.sort((a,b)=> a.capacity - b.capacity)
            return eventosOrdenadosPorCapacidad.slice(-1)[0]
        }

        function eventosFuturos (eventos, contenedor,fecha){
            contenedor.innerHTML= ""
            let listaEventos = ""
            let filtacionDeEventos = eventos.filter(events => events.date > fecha)
            filtacionDeEventos.forEach(element =>{
                listaEventos += `<tr>
                <td>${element.category}</td>
                <td>$${(element.price * element.estimate).toLocaleString()}</td>
                <td>${((element.estimate * 100) / element.capacity).toFixed(2)}%</td>
                </tr>`
            })
            contenedor.innerHTML = listaEventos
        }
        
        function eventosPasados (eventos, contenedor,fecha){
            contenedor.innerHTML= ""
            let listaEventos = ""
            let filtacionDeEventos = eventos.filter(events => events.date < fecha)
            filtacionDeEventos.forEach(element =>{
                listaEventos += `<tr>
                <td>${element.category}</td>
                <td>$${(element.price * element.assistance).toLocaleString()}</td>
                <td>${((element.assistance * 100) / element.capacity).toFixed(2)}%</td>
                </tr>`
            })
            contenedor.innerHTML = listaEventos
        }

       