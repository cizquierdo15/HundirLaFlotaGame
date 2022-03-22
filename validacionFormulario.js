// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
let botonEnviar =document.getElementById("idEnviar"); 
botonEnviar.addEventListener('click', validar, false);

//del array de form el del id
let formulario=document.forms["idFormulario"];

//datos del USU
var datosUsuario = new Map;

function validar(e){
	 //foreach para limpiar mensajes de error
    document.querySelectorAll(".errorSpam").forEach(e =>{
        e.innerHTML="";
    });
    //dehabilitar el boton
    this.disabled = true;

    if(validarAPIHTML(e) && validarJS(e) &&confirm("¿Deseas enviar el formulario?")){
    	abrirTablero();
        return true;

    }else{
        e.preventDefault();
        //volver a habilitar el boton
        this.disabled = false;
        return false  
    }
}

//abrir pagina principal
function abrirTablero() {
	let vs = window.open("tablero2.html");
}
//*****************************//
//validar con JS

function validarJS(event) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombreJs() && validarApellidoJs() && validarEdadJs();          
}

function validarNombreJs() {
    let inputNombre= formulario.elements["idNombre"];

    if (inputNombre.value == ""){        
        
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco";
        
        return false
    }
    else{
    	return true
    }
    
}

function validarApellidoJs() {
    let inputNombre= formulario.elements["idApellidos"];

    if (inputNombre.value == ""){        
        
        formulario.elements["idApellidos"].focus();
        document.getElementById('idApellidosError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco";
        
        return false
    }
    else{
    	return true
    }
}

function validarEdadJs() {
 
    let inputEdad=formulario.elements["idEdad"];
    
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.(de 18 a 100 años)
    
    if(inputEdad.value < 18 || inputEdad.value > 100  && inputEdad.value != ""){
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML="El campo: " + formulario.elements["idEdad"].name + " debe estar entre 18 y 100 años";
        return false;
    }
    else{
    	return true
    }
}

//*************************************************//

//validar con api,cada imput y confirm
function validarAPIHTML(event) { 
   return(validarNombre() && validarApellido() && validarEdad() )
}

//validar nombre
function validarNombre() {
	let inputNombre = document.getElementById("idNombre");
	if (inputNombre.checkValidity() == false) {
		let estado = inputNombre.validity;
		if (estado.valueMissing) {
			inputNombre.setCustomValidity("ZyH el campo Nombre ha de estar relleno");
		}else{
			inputNombre.setCustomValidity("");
		}
		document.getElementById("idNombreError").innerHTML = inputNombre.validationMessage;
		return false;
	}
	else{
		//añadir nombre a datosUsu
		datosUsuario.set("nombre",inputNombre.value);
		return true
	}
}

//validar apellido
function validarApellido() {
	let inputApellido = document.getElementById("idApellidos");
	if (inputApellido.checkValidity() == false) {
		let estado = inputApellido.validity;
		if (estado.valueMissing) {
			inputApellido.setCustomValidity("ZyH el campo Apellido ha de estar relleno");
		}else{
			inputApellido.setCustomValidity("");
		}
		document.getElementById("idApellidosError").innerHTML = inputApellido.validationMessage;
		return false;
	}
	else{
		//añadir apellido a datosUsu
		datosUsuario.set("apellido",inputApellido.value);
		return true
	}
}

//validar edad
function validarEdad() {
	let inputEdad = document.getElementById("idEdad");
	if (inputEdad.checkValidity() == false) {
		let estado = inputEdad.validity;
		if (estado.rangeUnderflow || estado.rangeOverflow) {
			inputEdad.setCustomValidity("ZyH el campo Edad ha de estar entre 18 y 100");
		}
		else if(estado.valueMissing){
			inputEdad.setCustomValidity("ZyH el campo Edad ha de estar relleno");

		}else{
			inputEdad.setCustomValidity("");
		}
		document.getElementById("idEdadError").innerHTML = inputEdad.validationMessage;
		return false;
	}
	else{
		//añadir edad a datosUsu
		datosUsuario.set("edad",inputEdad.value);
		return true}
}