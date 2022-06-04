/*
 * Clase 30 programacion - del 5 de junio del 2022
 *
 * Usando arrays armamos una "base de datos" y aprendimos CRUD (Create Read Update Delete)
 */

var dbProductos = {
	productos: []
};

dbProductos.insert = function(producto) {
	producto._id = Math.random() + '-' + Math.random();
	this.productos.push(producto);
}

dbProductos.read = function(query) {
	var result = [];
	if (!query) {
		return this.productos;
	}

	for(var i = 0; i < this.productos.length; i++) {
		var producto = this.productos[i];

		if(query.name) {
			if(producto.name === query.name) result.push(producto);
		}
		if(query.price) {
			if(producto.price === query.price) result.push(producto);
		}
	}

	return result;
}

//Algoritmo de prueba de las funciones

for(var i = 1; i< 13; i ++) {
	dbProductos.insert({
		name: 'Iphone ' + i,
		price: Math.round(Math.random() * 2000)
	});
}

console.info(dbProductos);

console.info('Buscando Iphone 10');
dbProductos.read({name: 'Iphone 10'});
