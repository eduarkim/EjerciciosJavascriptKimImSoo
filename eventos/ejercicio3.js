let notas=[
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
];

let idGlobal = 5;
/*
Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar 
un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR 
en caso de no haber elementos en el array
*/

function pintarTarjetas(notas){
    let contenedor = document.getElementById("contenedortarjetas")
contenedor.innerHTML ="";
if(notas.length===0){
  contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR";
}else{
  notas.forEach(nota =>{

    let tarjeta = document.createElement('div');
    tarjeta.className= "card";
    
      tarjeta.innerHTML = `
        <div class="card col">     
    <div class="card-body">
        <h5 class="card-title">${nota.titulo}</h5>
        <p class="card-text ${nota.realizada ? 'text-decoration-line-through':''}">${nota.texto}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
       
      
        <button onClick="borrarNota(${nota.id})" class="btn btn-primary" id="borrar-nota">Borrar nota
       </button>

       <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? 
"checked" : ""}>

    </div>
    
    </div>
      `

      contenedor.appendChild(tarjeta); 
    });
      
  }

}

   //  Llamada inicial para mostrar los primeros 4 objetos
pintarTarjetas(notas.slice(0, 4));
// crear una función agregarNota la cual necesitara 2 parametros: titulo y texto. La cual deberá crear un 
// objeto de tipo nota que sea como el array usado arriba, y agregarlo al array de notas.
function agregarNota (titulo, texto){
 let nota = {
  id: idGlobal,
  titulo: titulo,
  texto: texto,
  realizada: false
 };
 idGlobal ++;
 notas.push(nota);
 pintarTarjetas(notas);
}

// al presionar el botón guardar deberá guardar en variables los valores de los inputs y 
// verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregara la nueva
// nota y paso seguido volver a pintar las notas en la pantalla.
let botonguardar = document.getElementById("boton-guardar")

 botonguardar.addEventListener("click", a=>{
  let titulo = document.getElementById("titulo").value;
  let texto = document.getElementById("texto").value;
  if(titulo !== "" && texto !== ""){
    agregarNota(titulo, texto);
    document.getElementById("titulo").value ="";  
    document.getElementById('texto').value = '';
   
  
    }
  })


/* 
agregar en el template de la tarjeta en la función que pinta un botón con texto "borrar nota"
para borrar la nota, para este caso usaremos la propiedad onClick de la etiqueta button y dentro de ella
llamaremos a una función que crearemos llamada borrarNota() que recibirá como parámetro el id de la misma.
borrarNota(${elemento.id})
*/
/*
crearemos la funcion borrarNota la cual necesita el parámetro id. la misma deberá eliminar
el elemento cuyo id sea igual al recibido por parámetro y volver a pintar las notas para ver 
reflejado el cambio
*/
function borrarNota(id) {
  notas = notas.filter(nota => nota.id!== id);
  pintarTarjetas(notas);
}




/*
Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar 
un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR 
en caso de no haber elementos en el array
*/

document.getElementById('boton-borrar').addEventListener('click', function () {
  document.getElementById('titulo').value = '';
  document.getElementById('texto').value = '';
});



function marcarRealizada(id){
  let nota = notas.find(nota => nota.id === id);
  nota.realizada =! nota.realizada;

  pintarTarjetas(notas);
}


function filtrarPorRealizadas(notas){
  
  return notas.filter(nota => nota.realizada);

}

// Obtener el checkbox de filtro
const filtroRealizadas = document.getElementById('filtro-realizadas');

// Agregar el evento change
filtroRealizadas.addEventListener('change', () => {
  const notasFiltradas = filtroRealizadas.checked ? filtrarPorRealizadas(notas) : notas;
  pintarTarjetas(notasFiltradas);
});

// Función para filtrar por tareas realizadas
function filtrarPorRealizadas(notas) {
  return notas.filter(nota => nota.realizada);
}

// Obtener el campo de texto de filtro
const filtroTexto = document.getElementById('filtro-texto');

// Agregar el evento input
filtroTexto.addEventListener('input', () => {
  const textoFiltro = filtroTexto.value.toLowerCase();
  const notasFiltradas = filtrarPorTexto(notas, textoFiltro);
  pintarTarjetas(notasFiltradas);
});

// Función para filtrar por texto
function filtrarPorTexto(notas, texto) {
  if (!texto) return notas;
  return notas.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}
  