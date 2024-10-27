alert("INGRESE 10 NUMEROS CORRESPONDIENTES A EDAD:");

let listadenumeros = [];

listadenumeros[0] = parseInt(prompt('N1: '));
listadenumeros[1] = parseInt(prompt('N2: '));
listadenumeros[2] = parseInt(prompt('N3: '));
listadenumeros[3] = parseInt(prompt('N4: '));
listadenumeros[4] = parseInt(prompt('N5: '));
listadenumeros[5] = parseInt(prompt('N6: '));
listadenumeros[6] = parseInt(prompt('N7: '));
listadenumeros[7] = parseInt(prompt('N8: '));
listadenumeros[8] = parseInt(prompt('N9: '));
listadenumeros[9] = parseInt(prompt('N10: '));

let menoredad = 0;
let mayoredad = 0;
let adultoedad = 0;
let datoinv = 0;

// CONDICIONALES
if (listadenumeros[0] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[0] = null;
} else if (listadenumeros[0] < 18) {
    menoredad = menoredad + 1;
}
if (listadenumeros[0] >= 18 && listadenumeros[0] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[0] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}

// CONDICIONAL LISTA[1]
if (listadenumeros[1] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[1] = null;
} else if (listadenumeros[1] < 18) {
    menoredad = menoredad + 1;
} else if (listadenumeros[1] >= 18 && listadenumeros[1] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[1] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}

// CONDICIONAL LISTA[2]
if (listadenumeros[2] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[2] = null;
} else if (listadenumeros[2] < 18) {
    menoredad = menoredad + 1;
} else if (listadenumeros[2] >= 18 && listadenumeros[2] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[2] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}
// CONDICIONAL LISTA [3]
if (listadenumeros[3] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[3] = null;
} else if (listadenumeros[3] < 18) {
    menoredad = menoredad + 1;
} else if (listadenumeros[3] >= 18 && listadenumeros[3] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[3] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}

// CONDICIONAL LISTA [4]
if (listadenumeros[4] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[4] = null;
} else if (listadenumeros[4] < 18) {
    menoredad = menoredad + 1;
} else if (listadenumeros[4] >= 18 && listadenumeros[4] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[4] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}

// CONDICIONAL LISTA [5]
if (listadenumeros[5] >= 120) {
    datoinv = datoinv + 1;
    listadenumeros[5] = null;
} else if (listadenumeros[5] < 18) {
    menoredad = menoredad + 1;
} else if (listadenumeros[5] >= 18 && listadenumeros[5] < 60) {
    mayoredad = mayoredad + 1;
} else if (listadenumeros[5] >= 60) {
    mayoredad = mayoredad + 1;
    adultoedad = adultoedad + 1;
}
else if (listadenumeros[5] >= 18 && listadenumeros[5] < 60){
    mayoredad = mayoredad + 1
}

else if (listadenumeros[5] >= 60){
    mayoredad = mayoredad + 1;
    adulteedad = adulteedad + 1;
}

//CODICIONAL LISTA[6]//

if (listadenumeros[6] >= 120){
    datoinv = datoinv + 1;
    listadenumeros[6] = null;
}

else if (listadenumeros[6] < 18){
    menoredad = menoredad + 1;
}

else if (listadenumeros[6] >= 18 && listadenumeros[6] < 60){
    mayoredad = mayoredad + 1;
}

else if (listadenumeros[6] >= 60){
    mayoredad = mayoredad + 1;
    adulteedad = adulteedad + 1;
}

//CODICIONAL LISTA [7]//

if (listadenumeros[7] >= 120){
    datoinv = datoinv + 1;
    listadenumeros[7] = null;
}

else if (listadenumeros[7] < 18){
    menoredad = menoredad + 1;
}

else if (listadenumeros[7] >= 18 && listadenumeros[7] < 60){
    mayoredad = mayoredad + 1;
}

else if (listadenumeros[7] >= 60){
    mayoredad = mayoredad + 1;
    adulteedad = adulteedad + 1;
}
//CODICIONAL [8]//

if (listadenumeros[8] >= 120){
    datoinv = datoinv +1;
    listadenumeros[8]= null;
}
else if (listadenumeros[8] < 18){
    menoredad = menoredad +1;
}
else if (listadenumeros[8] >= 18 && listadenumeros[8] < 60){
    mayoredad = mayoredad +1;
}
else if (listadenumeros[8] >= 60){
    mayoredad = mayoredad +1;
    adultoedad = adultoedad +1;
}

//CODICIONAL [9]//

if (listadenumeros[9] >= 120){
    datoinv = datoinv +1;
    listadenumeros[9]= null;
}
else if (listadenumeros[9] < 18){
    menoredad = menoredad +1;
}
else if (listadenumeros[9] >= 18 && listadenumeros[9] < 60){
    mayoredad = mayoredad +1;
}
else if (listadenumeros[9] >= 60){
    mayoredad = mayoredad +1;
    adultoedad = adultoedad +1;
}

promed = ((listadenumeros[0] + listadenumeros[1] + listadenumeros[2] + listadenumeros[3] + 
    listadenumeros[4] + listadenumeros[5] + listadenumeros[6] + listadenumeros[7] + 
    listadenumeros[8] + listadenumeros[9]) / 10);

alert("Hay: " + mayoredad + " Mayor(es) de edad.");
alert("Hay: " + menoredad + " Menor(es) de edad.");
alert("Hay: " + adultoedad + " Adulto(s) Mayor(es).");
alert("El promedio de edades ingresado es: " + promed + " Años.");
alert("Datos invalidos ingresados en la lista: " + datoinv);

max = Math.max(listadenumeros[0], listadenumeros[1], listadenumeros[2], 
    listadenumeros[3], listadenumeros[4], listadenumeros[5], listadenumeros[6], 
    listadenumeros[7], listadenumeros[8], listadenumeros[9]);

    mini = Math.min(listadenumeros[0], listadenumeros[1], listadenumeros[2],
    listadenumeros[3], listadenumeros[4], listadenumeros[5], listadenumeros[6],
    listadenumeros[7], listadenumeros[8], listadenumeros[9]);
    
    alert("El número menor ingresado es: " + Math.min(mini) );
    alert("El número mayor ingresado es: " + Math.max(max) );
    