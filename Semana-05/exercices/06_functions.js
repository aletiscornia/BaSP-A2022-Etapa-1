// Funciones
// A) Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
// dicha variable en la consola del navegador.
 function suma(valor1, valor2){
    var resultado =  valor1 + valor2  ;
    console.log(resultado);
 }

// B) A la función suma anterior, agregarle una validación para controlar si alguno de los 
// parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno 
// de los parámetros tiene error y retornar el valor NaN como resultado.
function esNumero(valor1, valor2){
    if(typeof valor1 === 'number' || typeof valor2 === 'number'){
        alert('Uno de los parametros no es un numero')
        return NaN;
    }
    return valor1 + valor2;     
}

// C) Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva 
// verdadero si es un número entero.
function validaciónEntero(entero){
    return Number.isInteger(entero);
}

// D) A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que 
// valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error 
// y retornar el número convertido a entero (redondeado).
function suma2(valor1, valor2){
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
       alert('Uno de los parametros no es un numero');
       return NaN;
    }
    if(validaciónEntero(valor1) === false){
        alert('Uno de los valores no es entero');
        return Math.round(valor1);
    }
    if(validaciónEntero(valor2) === false){
        alert('Uno de los valores no es entero');
        return Math.round(valor2);
    }
    return valor1 + valor2;
}

// E) Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
// probando que todo siga funcionando igual.
function validacion(valor1, valor2){
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        alert('Uno de los parametros no es un numero');
        return NaN;
     }
     if(validaciónEntero(valor1) === false ){
         alert('Uno de los valores no es entero');
         return Math.round(valor1);
     }
     if(validaciónEntero(valor2) === false){
         alert('Uno de los valores no es entero');
         return Math.round(valor2);
     }
     return true;
}

function suma3(valor1, valor2){
    if(validacion(valor1, valor2)) return valor1 + valor2;
}