var lista = [67, 5, 234, -1, 27, 23, 79, 11, 3, 55, 93, 5];

function OrdenarLista(lista) {
	for(var i = 0; i < lista.length; i++) {
		for(var j = i; j < lista.length; j++) {
			var aux;
			if(lista[i] > lista[j]) {
				aux = lista[i];
				lista[i] = lista[j];
				lista[j] = aux;
			}
		}
	}
	//Esta funcion edita directamente la lista que recibe como parametro, por eso no hay return
}

console.info('Lista inicial', lista);
OrdenarLista(lista);
console.info('Lista ordenada', lista);
