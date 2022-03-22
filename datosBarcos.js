let padre = window.opener;

let arrayBarcos = padre.barcosCreados;

//crear funciones para mostrar datos de cada barco

let mostrarInfo = () => {
	for(let cont= 0; cont < 6; cont++){
		if(cont < 1 ){

			let divPorta = document.getElementById("portaviones");
			let container = document.createElement("div");

			let pNum = document.createElement("p");
			let textNum = document.createTextNode("Portavion N "+cont);
			
			let pTipo = document.createElement("p");
			let textTipo = document.createTextNode(`tipo ${arrayBarcos[cont].get("tipo")}`);
			
			let pTamano = document.createElement("p");
			let textTamano = document.createTextNode(`tamano ${arrayBarcos[cont].get("tamano")}`);
			
			let pos = arrayBarcos[cont].get("pos");
			let pPos = document.createElement("p");
			let textPos = document.createTextNode(`posicion en tablero ${pos[0]} , ${pos[1]} , ${pos[2]}, ${pos[3]} , ${pos[4]} y ${pos[5]}`);
			let br1 = document.createElement("br");

			pNum.appendChild(textNum);
			pTipo.appendChild(textTipo);
			pTamano.appendChild(textTamano);
			pPos.appendChild(textPos);

			container.appendChild(pNum);
			container.appendChild(pTipo);
			container.appendChild(pTamano);
			container.appendChild(pPos);
			container.appendChild(br1);

			divPorta.appendChild(container);

		}
		if (cont > 0 && cont < 3  ) {
			let divFrag = document.getElementById("fragatas");
			let container = document.createElement("div");

			let pNum = document.createElement("p");
			let textNum = document.createTextNode("Fragata N "+cont);
			
			let pTipo = document.createElement("p");
			let textTipo = document.createTextNode(`tipo ${arrayBarcos[cont].get("tipo")}`);
			
			let pTamano = document.createElement("p");
			let textTamano = document.createTextNode(`tamano ${arrayBarcos[cont].get("tamano")}`);
			
			let pos = arrayBarcos[cont].get("pos");
			let pPos = document.createElement("p");
			let textPos = document.createTextNode(`posicion en tablero ${pos[0]} , ${pos[1]} , ${pos[2]} y ${pos[3]}`);
			let br1 = document.createElement("br");

			pNum.appendChild(textNum);
			pTipo.appendChild(textTipo);
			pTamano.appendChild(textTamano);
			pPos.appendChild(textPos);

			container.appendChild(pNum);
			container.appendChild(pTipo);
			container.appendChild(pTamano);
			container.appendChild(pPos);
			container.appendChild(br1);

			divFrag.appendChild(container);
		}
		if(cont > 2){
			let divLanch = document.getElementById("lanchas");
			let container = document.createElement("div");

			let pNum = document.createElement("p");
			let textNum = document.createTextNode("Lancha N "+cont);
			
			let pTipo = document.createElement("p");
			
			let pos = arrayBarcos[cont].get("pos");
			let textoNuevo=document.createTextNode(`Numero de barco:${cont}
														Tipo:${arrayBarcos[cont].get("tipo")} 
														Tamaño:${arrayBarcos[cont].get("tamano")} 
														Posicion:${pos[0]} y ${pos[1]}`);
			
			
			let br1 = document.createElement("br");

			pNum.appendChild(textNum);
			pTipo.appendChild(textoNuevo);

			container.appendChild(pNum);
			container.appendChild(pTipo);
			container.appendChild(br1);

			divLanch.appendChild(container);
		}

	}
}


if (arrayBarcos != undefined) {
	mostrarInfo();
}