// Strings
// A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el 
// texto en mayúscula (utilizar toUpperCase).
var a = 'holamundoo';
console.log(a.toUpperCase());

// B) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
// los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var b = 'holamundoo';
var c = b.substring (0,5);
console.log(c);

// C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
// los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var d = 'holamundoo';
var e = d.substring(7,10);
console.log (e);
console.log(l);

// D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
// primea y las demás en minúscula. Guardar el resultado en una nueva
// variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var f = 'holamundoo';
var g = f.substring(0,1).toUpperCase() + f.substring(1,10);
console.log(g)

// E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var h = 'hola mundo';
var i = h.indexOf(' ');
console.log(i);

// F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
// ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, 
// toLowerCase y el operador +).
var j = 'hOLa muNDOo'; 
var k = j.indexOf(' ');
var l = f.substring(0,1).toUpperCase() + f.substring(1,k).toLowerCase() + f.substring(k,k+1).toUpperCase() + f.substring(k+1,j.length).toLowerCase();
console.log(l);