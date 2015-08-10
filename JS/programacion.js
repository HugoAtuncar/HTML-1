
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


