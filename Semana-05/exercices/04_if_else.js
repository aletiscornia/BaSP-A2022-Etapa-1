// If Else
// A) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
//mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
var numero = Math.random();
numero >+ 0.5 ? alert('Greater than 0,5') : alert('Lower than 0,5');

// B) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Bebe” si la edad es menor a 2 años;
// “Niño” si la edad es entre 2 y 12 años;
// “Adolescente” entre 13 y 19 años;
// “Joven” entre 20 y 30 años;
// “Adulto” entre 31 y 60 años;
// “Adulto mayor” entre 61 y 75 años;
// “Anciano” si es mayor a 75 años.
var Age = Math.random() * (100 - 0) + 0;
console.log(Age);
if (Age < 2) {
    alert('Bebe');
} else if(Age >= 2 & Age <= 12) {
    alert('Niño');
} else if( Age >= 13 & Age <= 19 ) {
    alert('Adolescente');
} else if(Age >= 20 & Age <= 30){
    alert('Joven');
}else if(Age >= 31 & Age <= 60){
    alert('Adulto');
} else if(Age >= 61 & Age <= 75){
    alert('Adulto mayor');
}else{
    alert('Anciano');
} 