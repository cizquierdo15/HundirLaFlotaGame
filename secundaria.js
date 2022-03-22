let padre = window.opener;

let tableroSecond = padre.tablero;

//funcion internete delay
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}


async function pintar(){
	for(let i = 0; i < 10; i++){
		for(let y = 0; y < 10; y++){
			if (tableroSecond[i][y] == 1) {
				let casilla = document.getElementById(`id_${i}_${y}`);
				if (casilla != null) {
					await delay(2);
					casilla.style.backgroundColor="red";
				}
			}
		}
	}
}

if (tableroSecond == undefined) {
	alert("no se pudo cargar el tablero");
}
