let barcos = new Set(["lanchas","fragatas","portaviones"]);
let tamanos = new Map([["lanchas",1],["fragatas",2],["portaviones",3]]);
let numBarcos = new Map([["lanchas",3],["fragatas",2],["portaviones",1]]);

//variables a pasar
var tablero =  [];
var barcosCreados = [];


for (let i = 0; i < 10; i++) {
	tablero.push([0,0,0,0,0,0,0,0,0,0]);
}


let nAleatorioCol = ()=>{
	let n = parseInt(Math.random()*7)+1;
	return n;
}
//del 1 al 9
let nAleatorioFil = ()=>{
	let n = parseInt(Math.random()*8)+1;
	return n;
}

let comprobarHueco = (tipo,fila,col)=>{
	let puesto = false;
	
	while(puesto == false){
		//segun el tipo
		if (tipo == "lanchas") {
			//comprueba la pos original y las adyacentes
			if (tablero[fila][col] == 0 && tablero[fila][col-1] == 0 && tablero[fila][col+1] == 0 && tablero[fila-1][col] == 0 && tablero[fila+1][col] == 0) {
				tablero[fila][col] = 1;

				tablero[fila][col-1] = 2;
				tablero[fila][col+1] = 2;
				tablero[fila-1][col] = 2;
				tablero[fila+1][col] = 2;
				console.log("pinta lancha en "+ fila+col);
				puesto = true;
			}
		}
		if (tipo == "fragatas") {
			if (tablero[fila][col] == 0 && tablero[fila][col+1] == 0 && tablero[fila][col-1] == 0 && tablero[fila][col+2] == 0 && tablero[fila-1][col] == 0 && tablero[fila+1][col] == 0 && tablero[fila-1][col+1] == 0 && tablero[fila+1][col+1] == 0) {
				tablero[fila][col] = 1;
				tablero[fila][col+1] = 1;

				tablero[fila][col-1] = 3;
				tablero[fila][col+2] = 3;
				tablero[fila-1][col] = 3;
				tablero[fila+1][col] = 3;
				tablero[fila-1][col+1] = 3;
				tablero[fila+1][col+1] = 3;
				console.log("pinta frag en "+ fila+col);
				puesto = true;
			}
		}
		if (tipo == "portaviones") {
			if (tablero[fila][col] == 0 && tablero[fila][col+1] == 0 && tablero[fila][col-1] == 0 && tablero[fila][col+2] == 0 && tablero[fila][col+3] == 0  && tablero[fila-1][col] == 0 && tablero[fila+1][col] == 0 && tablero[fila-1][col+1] == 0 && tablero[fila+1][col+1] == 0 && tablero[fila-1][col+2] == 0 && tablero[fila+1][col+2] == 0 ) {
				tablero[fila][col] = 1;
				tablero[fila][col+1] = 1;
				tablero[fila][col+2] = 1;

				tablero[fila][col-1] = 4;
				tablero[fila][col+3] = 4;
				tablero[fila-1][col] = 4;
				tablero[fila+1][col] = 4;
				tablero[fila-1][col+1] = 4;
				tablero[fila+1][col+1] = 4;
				tablero[fila-1][col+2] = 4;
				tablero[fila+1][col+2] = 4;

				console.log("pinta port en "+ fila+col);
				puesto = true;  
			}
		}
		if(puesto == false){
			console.log("ocupado "+ fila+col);
			fila = nAleatorioFil();
			col = nAleatorioCol();
		}
	}
	return puesto;
}

let crearLancha =()=>{
	let lancha = new Map();
	let fila = nAleatorioFil();
	let col = nAleatorioCol();

	for (let valor of barcos) {
		if (valor == "lanchas") {lancha.set("tipo",valor)}
	}
	for(let [clave,valor] of tamanos){
		if (clave == "lanchas") {lancha.set("tamano",valor)}
	}
	
	let com = comprobarHueco(lancha.get("tipo"),fila,col);

	if (com) {
		lancha.set("pos",[fila,col]);
	}
	return lancha;
}

let crearFragata =()=>{
	let frag = new Map();
	let fila = nAleatorioFil();
	let col = nAleatorioCol();

	for (let valor of barcos) {
		if (valor == "fragatas") {frag.set("tipo",valor)}
	}
	for(let [clave,valor] of tamanos){
		if (clave == "fragatas") {frag.set("tamano",valor)}
	}
	
	let com = comprobarHueco(frag.get("tipo"),fila,col);

	if (com) {
		frag.set("pos",[fila,col,fila,(col+1)]);
	}
	return frag;
}

let crearPorta =()=>{
	let porta = new Map();
	let fila = nAleatorioFil();
	let col = nAleatorioCol();

	for (let valor of barcos) {
		if (valor == "portaviones") {porta.set("tipo",valor)}
	}
	for(let [clave,valor] of tamanos){
		if (clave == "portaviones") {porta.set("tamano",valor)}
	}
	
	let com = comprobarHueco(porta.get("tipo"),fila,col);

	if (com) {
		porta.set("pos",[fila,col,fila,(col+1),fila,(col+2)]);
	}
	return porta;
}

let crearBarcos = () =>{

	let port = crearPorta();
	barcosCreados.push(port);

	for(let i = 0; i < 2; i++){
		let frag = crearFragata();
		barcosCreados.push(frag);
	}
	
	for(let i = 0; i < 3; i++){
		let lanchi = crearLancha();
		barcosCreados.push(lanchi);
	}

}

let abrirDemo = () => {
	let vs = window.open("secundariaBarcos.html");
}

let abrirInfo = () =>{
	let vs = window.open("infoBarcos.html");
}


//Botones Y Eventos

let botonGenerarB = document.getElementById("botonGenerarBarcos");

botonGenerarB.addEventListener("click",crearBarcos);


let botonAbrirDemo = document.getElementById("botonVerDemo");

botonAbrirDemo.addEventListener("click",abrirDemo);

let botonInfo = document.getElementById("botonInfo");

botonInfo.addEventListener("click",abrirInfo);
