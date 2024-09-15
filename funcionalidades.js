let estados_descripcion = [];

let estado_panel_descripcion = false; //13:41 Acá desplegamos el panel

let index = 0;


document.getElementById("crear_evento").addEventListener("click", ()=>{
let evento = document.createElement("li");
evento.innerHTML = ` <div class="bg-white py-2 flex px-2 my-2">
<svg class="h-8 w-8 text-black-400 mt-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
<input placeholder="Ingrese nombre del evento" style="width: 300px;" class="ml-2 p-2 text-gray-900 rounded-lg bg-gray-50 focus:outline-none">
<div class="ml-auto flex py-2">
    <!--DANGER-->
    <div class="relative tooltip-container">
        <svg class="h-8 w-8 text-yellow-400 mr-2" id="tooltip" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M12 9v2m0 4v.01" />
            <path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" />
        </svg>
        <div class="tooltip">¡Necesita ingresar todos los datos para este evento!</div>
    </div>
    <!---->
    <!--ID-->
    <div class="mt-1 flex mr-4"><p class="font-bold mr-1">ID</p><p>10051</p></div>
    <!---->
    <!--MODIFICAR-->
    <p onclick="visiblePanelModificar(${index})" class="bg-green-200 px-2 py-1 ml-2 mr-2 hover:bg-green-300 hover:cursor-pointer rounded disabled:pointer-events-none transition-all" id="collapse-${index}">Modificar</p>
    <!---->
    <!--ESTADISTICAS-->
    <p class="bg-blue-200 px-2 py-1 hover:bg-blue-300 hover:cursor-pointer">Estadísticas</p>
    <!---->
    <!--ELIMINAR-->
    <div class="bg-red-100 mr-2 ml-2">
        <svg class="h-8 w-8 text-red-900 hover:bg-red-300 hover:cursor-pointer"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <line x1="4" y1="7" x2="20" y2="7" />  
            <line x1="10" y1="11" x2="10" y2="17" />  
            <line x1="14" y1="11" x2="14" y2="17" />  
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
    </div>
    <!---->
</div>
</div>

<!--Panel de descripción-->
<div id="collapse-panel-${index}" style="display:none">
  <div class="bg-green-200 p-1"></div>
<div class="bg-slate-200 p-5 grid grid-cols-3">
  <div>
    <div class="ml-2">
      <input placeholder="Nombre del evento" style="width: 300px;" class="p-2 text-gray-900 rounded-lg bg-gray-50 focus:outline-none">
      <p class="text-xs ml-1">Nombre del evento*</p>
    </div>

    <div class="ml-2 my-1">
      <input type="date" placeholder="Fecha del evento" style="width: 300px;" class="p-2 text-gray-900 rounded-lg bg-gray-50 focus:outline-none">
      <p class="text-xs ml-1">Fecha del evento*</p>
    </div>

    <div class="ml-2">
      <input onclick="visibleModalCategoriaEntradas(${index})" id="input_categoria" placeholder="Categorías de entrada" style="width: 300px;" class="p-2 text-gray-900 rounded-lg bg-gray-50 focus:outline-none">
      <p class="text-xs ml-1">Categorías de entrada*</p>
    </div>
  </div>

  <div>
    <textarea placeholder="Describe el evento..." class="w-full focus:outline-none p-2"></textarea>
    <p class="text-xs ml-1">Descripción del evento*</p>
  </div>


  <div>
    <div class="bg-white px-5 ml-5 mb-1 flex" style="width: 150px; height: 150px;">
      <img src="images/imagen.png" class="my-auto mx-auto">

    </div>
    <p class="text-xs ml-5 my-1">Imagen del evento*</p>
    <input type="file" class="ml-5">
    <div class="flex">
      <button class="p-2 bg-green-300 hover:bg-green-400 rounded mt-2 ml-auto">GUARDAR</button>
    </div>
  </div>

</div>
</div>
<!------------------------>
`;
//Cada vez que creamos un evento, vamos a usar el array de estados
let estado_panel_evento = {
    "id":index,
    "modificar":false
}
estados_descripcion.push(estado_panel_evento);
index++;
document.getElementById("eventos").appendChild(evento);
})

//Vamos a crear una función que identifique el evento donde lo aparezca y desaparezca a voluntad.
function visiblePanelModificar(e){

    estados_descripcion.forEach(elemento => {
    if(elemento.id == e){
        if(elemento.modificar == false){
            document.getElementById("collapse-panel-"+e).style.display="block";
            elemento.modificar = true;
        }else{
            document.getElementById("collapse-panel-"+e).style.display="none";
            elemento.modificar = false;
        }
    }
});    
}

function visibleModalCategoriaEntradas(e){
  document.getElementById("categoria_entrada").style.display="flex";
}

//Cerrar modal
document.getElementById("categoria_entrada").addEventListener('click',(event)=>{
  console.log("LLEGAMOS ACA 1")
  if (event.target.id == "categoria_entrada") {
    console.log("LLEGAMOS ACA 2")
    document.getElementById("categoria_entrada").style.display="none"; 
  }
  
})

//Mostrar inputs en el modal por checks

function verificarCheck(e){
  let check = document.getElementById(e);
  if(check.checked){
    document.getElementById(e+"-input").style.display="flex";
  }else{
    document.getElementById(e+"-input").style.display="none";
  }
  
}



