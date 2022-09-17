// For
//  A) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript 
// para mostrar una alerta utilizando cada una de las palabras.
//  B) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por 
// cada palabra modificada.
//  C) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
// recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
// Al final mostrar una única alerta con la cadena completa.
//  D) Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la
// repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro 
// del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array 
// final (utilizar console.log).

// A)
var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
semana.forEach(function (dias){
    alert(dias);
});

// B)
semana.forEach(function(dias){
    dias = dias.substring(0,1).toUpperCase() + dias.substring(1,dias.length);
    alert(dias);
})

// C)
var sentence = '';
semana.forEach(function(dias){
    sentence = sentence + dias; 
})
alert(sentence);

// D)
var arreglo = [];
for(var i = 0;i < 10; i++){
    arreglo.push(i);
}
console.log(arreglo);