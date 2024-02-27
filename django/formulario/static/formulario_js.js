const ficha = document.getElementById("ficha");
const nombre = document.getElementById("nombre")
const apellidos = document.getElementById("apellidos")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const genero = document.getElementById("genero")

/**--------------------
 * para validar que lo que sea valodo sean letras 
 * let declara variables
 */
/** validacion con match */
/*
const validar = function () {
  
  let valor = /^[a-zA-Z]{3}[_]{1}[0-9]{5}$/;
  let campo = ficha.value
  if (campo.match(valor) != null) {
    
  } else {
    alert("no valido")
  }
}

ficha.addEventListener("blur", validar);
*/
/*
Operacion ternaria, Buscar pregunta? verdadero: falso;
*/
/* Validacion de ficha [3 letras] [_] [5 numeros] */
const val_ficha = function () {
  
  let validation = /^[a-zA-Z]{3}_[0-9]{5}$/;
  /*test nos permite ver si la asignacion es verdadera o falsa */
  console.log(validation.test(ficha.value))
  
  let campo = ficha.value
  /*console.log () me permite capturar la info ingresada en el formulario* crl + r borra los registros de la consola*/
  console.log(campo)
  
  if (campo.match(validation) != null) {
    
  } else {
    alert("no valido")
  }
}
ficha.addEventListener("blur", val_ficha);

/* Validacion de nombre con espacio */
const val_nombre = function () {
  
  let validation = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  console.log(validation.test(nombre.value))
  
  let campo = nombre.value
  console.log(campo)
  
  if (campo.match(validation) != null) {
    
  } else {
    alert("no valido")
  }
}
nombre.addEventListener("blur", val_nombre);

/* Validacion de apellido con espacio */
const val_apellidos = function (){
  
  let validation = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
  console.log(validation.test(apellidos.value))
  
  let campo = apellidos.value
  console.log(campo)
  
  if (campo.match(validation) != null) {
    
  } else {
    alert("no valido")
  }
}
apellidos.addEventListener("blur", val_apellidos);

/* Validacion de correo electronico */
const val_correo = function () {
  
  let validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  console.log(validation.test(correo.value))
  
  let campo = correo.value
  console.log(campo)

  if (campo.match(validation) != null) {
    
  } else {
    alert("no valido")
  }
}
correo.addEventListener("blur", val_correo);

/* Validacion de solo numeros */
const val_telefono = function () {
  
  let validation = /[0-9]{10}/;
  console.log(validation.test(telefono.value))
  
  let campo = telefono.value
  console.log(campo)
  
  if (campo.match(validation) != null) {
    
  } else {
    alert("no valido")
  }
}
telefono.addEventListener("blur", val_telefono);

const val_genero = function (conf) {
  
  let genero_check = 0

  for (const hit of genero) {
    if (hit.checked) {
      genero_check = hit.value
      break
    }
  }
  if (genero_check === 0) {
    conf.preventDefault()
    alert ("mama huevo")
  }
}