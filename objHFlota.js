
/*----------------------
 	JSON
*/
 	let autor = {
		nombre: "carlos",
		apellidos: "izq",
		edad: "55",
		github: "http://www...",
		nombreJuego:"Hundir La Flota",
		fecha: new Date(1996,11,26),
		lenguaje: "",
		version: "",
		
		infoAutor: function (){
			return `Nombre:${this.nombre} apellidos:${this.apellidos} edad:${this.edad} git:${this.github} juego:${this.nombreJuego} fechaSalida: ${this.fecha} lenguaje:${this.lenguaje} version:${this.version} `;
		}
 	}
	

	let jugador = {
		nombre: "jugador1",
		apellidos: "ap1",
		edad: "05",
		identificador:"xxxxx",
		puntuacion:"x",
		aciertos:"x",
		fallos:"x",

		infoJugador: function (){
			
			return `nombre: ${this.nombre} apellidos:${this.apellidos} id:${this.identificador} puntos:${this.puntuacion} aciertos:${this.aciertos}  fallos:${this.fallos}`;
		}
	}

class Persona{
	constructor(n,a,e){
		this._nombre = n;
		this._apellido = a;
		this._edad = e;
	}
	#especie = "humano";

	get nombre(){
		return this._nombre;
	}

	set nombre(v){
		this._nombre=v;
	}

	get apellido(){
		return this._apellido;
	}

	set apellido(v){
		this._apellido=v;
	}

	get edad(){
		return this._edad;
	}

	set edad(v){
		this._edad=v;
	}

	static saludar(){
		return alert("soy una persona");
	}

	#decirEspecie(){
		return this.#especie;
	}

	mostrarEspecie(){
		return this.#decirEspecie();
	}
	toString(){
		let nombreCompleto = this.nombre +" "+this.apellido;
		return nombreCompleto;
	}

	valueOf(){
		return this.edad;
	}
}

class Autor extends Persona{
	constructor(n,a,e,nJ,l,v){
		super(n,a,e);
		this._nombreJuego=nJ;
		this._lenguaje = l;
		this._version = v;
		this._fecha = new Date();
		this._github = "http://www.github";
	}

	#firma = "sawarma";

	get nombreJuego(){
		return this._nombreJuego;
	}

	set nombreJuego(v){
		this._nombreJuego=v;
	}

	get lenguaje(){
		return this._lenguaje;
	}

	set lenguaje(v){
		this._lenguaje=v;
	}

	get version(){
		return this._version;
	}

	set version(v){
		this._version=v;
	}

	set version(v){
		this._version=v;
	}

	get github(){
		return this._github;
	}

	set github(v){
		this._github=v;
	}

	get fecha(){
		return this._fecha;
	}

	set fecha(v){
		this._fecha=v;
	}

	static hablar(){
		return alert("soy un Autor");
	}

	#saberFirma(){
		alert(this.#firma);
	}

	mostrarFirma(){
		return this.#saberFirma();
	}

	toString(){
		let datos = `nombreJuego ${this.nombreJuego} lenguaje ${this.lenguaje} version${this.version}`;
		return datos;
	}

	valueOf(){
		return this.fecha;
	}

	mostrarInfoAutor(){
			let cadena = `Datos Autor ---- 
			Nombre:${this.nombre} Ap:${this.apellido} 
			Edad${this.edad} Git:${this.github} 
			Nombre del Juego:${this.nombreJuego} Lenguaje:${this.lenguaje} Version:${this.version}`;
			return alert(cadena);
	}

	static completarInfoAutor(){
		let  jug = new Autor("Carlos","Izq",24,"ilJuego","JS","00,1");
		return jug;
	}
}
// funcionrecibe un formulario devuelve el objeto
class Jugador extends Persona{
	constructor(n,a,e){
		super(n,a,e);
		this._puntuacion=0;
		this._aciertos=0;
		this._fallos=0;
		this._identificador ="ID";
	}

	get puntuacion(){
		return this._puntuacion;
	}

	set puntuacion(v){
		this._puntuacion=v;
	}

	get aciertos(){
		return this._aciertos;
	}

	set aciertos(v){
		this._aciertos=v;
	}

	get fallos(){
		return this._fallos;
	}

	set fallos(v){
		this._fallos=v;
	}

	get identificador(){
		return this._identificador;
	}

	set identificador(v){
		this._identificador=v;
	}

	#gamer = "soy un Hamer";

	#seceto(){
		return this.#gamer;
	}

	decirSecreto(){
		return this.#seceto();
	}

	static hablar(){
		return alert("soy un Jugador");
	}

	toString(){
		let datos = `identificador${this.identificador} puntuacion ${this.puntuacion} aciertos ${this.aciertos} fallos${this.fallos}`;
		return datos;
	}

	valueOf(){
		return this.puntuacion;
	}

	aumentarFallos(){
		this.fallos = (this.fallos) + 1;
	}

	aumentarAciertos(){
		this.aciertos = (this.aciertos) + 1;
	}

	aumentarPuntos(){
		this.puntuacion = (this.puntuacion) + 10;
	}

	mostrarInfoJugador(){
			let cadena = `Datos Jugador ---- 
			Nombre:${this.nombre} Ap:${this.apellido} 
			Edad${this.edad} ID:${this.identificador} 
			Puntuacion${this.puntuacion} Aciertos:${this.aciertos} Fallos:${this.fallos}`;
			return alert(cadena);
	}
	
}

function completarInfoJugador(){
		//info del usuario por formulario
		let datosUsuario = window.opener.datosUsuario;

		if (datosUsuario == null) {
			alet("no hay datos de usuario");
		}
		else{
			let  jug = new Jugador(datosUsuario.get("nombre"),datosUsuario.get("apellido"),datosUsuario.get("edad"));
			console.log(jug);
			return jug;
		}	
}

//funciones para llamar los datos
function llamarMostrarJug(e) {
	player.mostrarInfoJugador();
}

function llamarMostrarAut(e) {
	testA.mostrarInfoAutor();
}

//usar completarInfoJugador() para crear jugador con los datos con los datos del form
var player = completarInfoJugador();

var testA = Autor.completarInfoAutor();


//al hacer click sobre una celda, comprueba si hay barco o no
function disparo(e){

	let idCelda=this.id;
	console.log(idCelda);

	let fila=idCelda.substring(3,4);
	let col=idCelda.substring(5);

		if(tablero[fila][col]==1){
			this.style.backgroundColor="orange";
			player.aumentarPuntos();
			player.aumentarAciertos();
		}else{
			alert("MENUDO FALLO MAS TONTO");
			player.aumentarFallos();
		}
}
//agregar evento a las celdas
let todasCeldas=document.getElementsByTagName("td");
let arrayTodasCeldas=Array.from(todasCeldas);
console.log(tablero);

//añadir el evento a las celdas
arrayTodasCeldas.forEach(function(e){

	e.addEventListener("click",disparo);
})


//elementos html main (botones) y eventos
let botonDatosAutor = document.getElementById("botonDatosAutor");

botonDatosAutor.addEventListener("click",llamarMostrarAut);

let botonDatosJugador = document.getElementById("botonDatosJugador");

botonDatosJugador.addEventListener("click",llamarMostrarJug);


//actualizar tabla de Puntuaciones

let celdaNombre = document.getElementById("idNJug");
let celdaAciertos = document.getElementById("idAJug");
let celdaFallos = document.getElementById("idFJug");
let celdaPuntos= document.getElementById("idPJug");


function actualizarAciertos() {
	celdaAciertos.innerHTML = player.aciertos;
}

function actualizarFallos() {
	celdaFallos.innerHTML = player.fallos;
}

function actualizarPuntos() {
	celdaPuntos.innerHTML = player.puntuacion;
}

if (player) {
	celdaNombre.innerHTML = player.nombre;

	let idAciertos = setInterval(actualizarAciertos,6);
	let idFallos = setInterval(actualizarFallos,6);
	let idPuntos = setInterval(actualizarPuntos,6);
}