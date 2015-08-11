
/*Programa para poder hacer un tabla de multplicación usando while*/
var numero=prompt();
numero=parseInt(numero);

var cont=0;
var producto;

while (cont<=12){
    producto=numero*cont;
    console.log(numero+" * "+cont+" = "+producto);
    cont++;
}

/*Programa para poder hacer un tabla de multplicación usando el for*/
var numero=prompt();
numero=parseInt(numero);

var producto;

for(var i=0;i<=12;i++){
    producto=numero*i;
    console.log(numero+" * "+i+" = "+producto);
}

/*Programa para poder calcular el factorial de un número ingresado*/
var numero=prompt();
numero=parseInt(numero);

var factorial=1;

for(var i=1;i<=numero;i++){
    factorial=factorial*i;
}

console.log(factorial);

/*Funcion suma*/
var suma = function (a,b){
    console.log(a+b);
}

/*Funcion imprimir*/
var imprimir = function(a,b,c){
    console.log(a+" "+b + c);
}

/*
*FUNCIONES
*
*/
var suma = function(){	
    return 5+10;
};

//console.log(suma());
suma();

/***/
var saludar=function(b){
    return "hola "+b;
};

saludar("mundo");


/***/
var porDos=function(a){
    return a*2;
};

var multiplicar=porDos(6);

console.log(multiplicar);

/***/
//todas las funciones se colocan en la parte superior, por defecto
console.log("El futuro me dice: "+futuro());

function futuro(){
    return "Aún no existen los carros voladores";
}

//suma todos los naturales menores a 1000 que son multiplos de 3 o 5

var numero=1000;
var suma=0;

for(var i=0;i<numero;i++){
    if(i%3===0 || i%5===0){
        suma=suma+i;
    }
}

console.log(suma);

//suma todos los naturales menores a 1000 que son multiplos de 3 o 5

function multiploDeTres(n){
    return n%3===0;   
}

function multiploDeCinco(n){
    return n%5===0;
}

function aceptable(n){
    return multiploDeTres(n) || multiploDeCinco(n);
}

function sumar(n){
    var suma=0;
    var contador=0;
    
    for(contador;contador<n;contador++){
        if(aceptable(contador)){
            suma=suma+contador;
        }
    }
    return suma;
}

console.log(sumar(1000));

//Scope(alcance de una variable en una funcion)
var color="rojo";

function mostrarColor(){
    var pincel = true;
    console.log(color);
    console.log(pincel);
}

mostrarColor();
console.log(color);
console.log(pincel);

//Declarar las variables siempre con var
//mala practica
function hoisted(){
    console.log(a);
    var a=1;
    console.log(a);
}
hoisted();

//buena practica
function hoisted(){
    var a;
    console.log(a);
    a=1;
    console.log(a);
}
hoisted();

//Serie FIBONACCI, suma de los impares menores que la suma de 4000000 (4e+6)
var fibonacci = [1,2];
var suma=0;
var temporal=0;

function calcular(arr){
    return fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2];
}

while(fibonacci[fibonacci.length-1]<4e+6){
    fibonacci.push(calcular(fibonacci));
}

fibonacci.forEach(function(n){
   if(n%2 !==0){
       suma +=n;
   } 
});

console.log(suma);

//namespace
//Para no declarar variables globales, librería JQUERY
(function(){
    var a=0;
    
    var incremento=function(){
        a += 1;
        return a;
    }
    
    console.log(a);
    
    var b = incremento();
    
    console.log(a);
    console.log(b);
    
}())

//Numero minimo divisible del 1 al 20

var divisor=20;
var numero=0;
var i=1;
var encontrado=false;

while(encontrado===false){
    numero+=divisor;
    while(numero%i===0 && i<=divisor){
        if(i===divisor) encontrado=true;
        i++;
    }
    i=1;
}

console.log(numero);


/**
*Con una función anónima
**/
(function(){
    function minimoDivisible(n){
        var numero=0;
        var i=1;
        var encontrado=false;
        
        while(encontrado===false){
            numero+=n;
            while(numero%i===0 && i<=n){
                if(i===n) encontrado=true;
                i++;
            }
            i=1;
        }
        return numero;
    }
    
    console.log(minimoDivisible(20));

}())

