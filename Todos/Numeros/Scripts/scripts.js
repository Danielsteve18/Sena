alert("El siguiente programa le pedirá que ingrese 10 números y este le ordenará la lista en orden ascendente y decreciente");

listaDeNumeros = [];
listaDeNumeros2 = [];

listaDeNumeros[0] = parseInt(prompt("N°1: "));
listaDeNumeros[1] = parseInt(prompt("N°2: "));
listaDeNumeros[2] = parseInt(prompt("N°3: "));
listaDeNumeros[3] = parseInt(prompt("N°4: "));
listaDeNumeros[4] = parseInt(prompt("N°5: "));

listaDeNumeros2[0] = parseInt(prompt("N°6: "));
listaDeNumeros2[1] = parseInt(prompt("N°7: "));
listaDeNumeros2[2] = parseInt(prompt("N°8: "));
listaDeNumeros2[3] = parseInt(prompt("N°9: "));
listaDeNumeros2[4] = parseInt(prompt("N°10: "));

listaDeNumeros = listaDeNumeros.concat(listaDeNumeros2);

listaDeNumeros.sort((a, b) => {
    if(a == b) {
        return 0;
    }
    if(a < b) {
        return -1;
    }
    return 1;
});

alert("Lista Completa ordenada ascendente: " + listaDeNumeros);
alert("Lista Completa ordenada descendente: " + listaDeNumeros.reverse());
