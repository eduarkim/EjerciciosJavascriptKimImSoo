let nota=[
    {
    id:1,
    titulo: 'Sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
    },
    {
        id:2,
        titulo: 'Lavar los platos',
        texto: 'mi mama me va a retar si no lo hago',
        realizada: false
    },
    {
        id:3,
        titulo: 'hacer la tarea de programación',
        texto: 'debe hacerlo para aprobar la materia',
        realizada: false
    },
    {
        id:4,
        titulo: 'hacer la tarea de matematicas',
        texto: 'debe hacerlo para aprobar la materia',
        realizada: false
        }
]

let idGlobal = 4;

function pintarTarjetas(nota){
    let contenedor = document.getElementById("divtarjetas")
    for(let i = 0; i < nota.length; i++){

      let tarjeta = document.createElement('div')
      tarjeta.className= "card"
      
        tarjeta.innerHTML = `
          <div class="card col">     
      <div class="card-body">
          <h5 class="card-title">${nota[i].titulo}</h5>
          <p class="card-text">${nota[i].texto}</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
          <span>${nota[i].realizada}</span>
         
      </div>
      
      </div>
        `
  
        contenedor.appendChild(tarjeta)
      }
        
    }
    pintarTarjetas(nota)
