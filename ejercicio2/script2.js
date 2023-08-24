
const mostrar_apellido = document.getElementById('boton_apellido'); 
const span_apellido = document.getElementById('apellido');


mostrar_apellido.addEventListener('click', agregarApellido); 
  
function agregarApellido(){
    
  let input_apellido = document.getElementById('campo_apellido'); 
  let apellido= input_apellido.value;
  
  if (apellido !== '') {
    span_apellido.innerHTML = apellido;
  }else{
    span_apellido.innerHTML="No has ingresado ningún apellido";
  }

}