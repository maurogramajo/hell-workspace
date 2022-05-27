/*
 * Clase practica programacion
 * Viernes 27/05
 * Quinta semana curso
 */

//Primer ejemplo

function complex(value, action) {
	try{
		return action(value);
	} catch (err) {
		return null;
	}
}

function myAction(v) {
	return v * 10;
}

var result = complex(4, function(n) {
	return n * 2;
});

console.info('resultado: ', result);
