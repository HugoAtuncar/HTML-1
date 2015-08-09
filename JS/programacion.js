
/*Programa para poder hacer un tabla de multplicación*/
var numero=prompt();
numero=parseInt(numero);

var cont=0;
var producto;

while (cont<=12){
    producto=numero*cont;
    console.log(numero+" * "+cont+" = "+producto);
    cont++;
}