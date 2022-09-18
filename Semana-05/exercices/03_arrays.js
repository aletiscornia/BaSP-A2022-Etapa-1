// Arrays
// A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"];
console.log(meses[5-1]);
console.log(meses[11-1]);

// B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(meses.sort())

// C) Agregar un elemento al principio y al final del array (utilizar unshift y push).
meses.unshift('verano');
meses.push('invierno');
console.log(meses);

// D) Quitar un elemento del principio y del final del array (utilizar shift y pop).
meses.shift();
meses.pop();
console.log(meses);

// E) Invertir el orden del array (utilizar reverse).
console.log(meses.reverse());

// F) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log(meses.join('-'));

// G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"];
var menosMeses = meses.slice(4, meses.length - 1);
console.log(menosMeses);