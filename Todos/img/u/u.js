const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function analizarEdades(edades) {
    const menoresDeEdad = edades.filter(edad => edad < 18).length;
    const mayoresDeEdad = edades.filter(edad => edad >= 18).length;
    const adultosMayores = edades.filter(edad => edad >= 60).length;
    const edadMinima = Math.min(...edades);
    const edadMaxima = Math.max(...edades);
    const promedioEdades = edades.reduce((a, b) => a + b) / edades.length;

    return { menoresDeEdad, mayoresDeEdad, adultosMayores, edadMinima, edadMaxima, promedioEdades };
}

let edades = [];
let contador = 0;

function ingresarEdad() {
    if (contador < 10) {
        readline.question(`Ingrese la edad de la persona ${contador + 1}: `, (edad) => {
            const edadNum = parseInt(edad);
            if (edadNum >= 1 && edadNum <= 120) {
                edades.push(edadNum);
                contador++;
                ingresarEdad();
            } else {
                console.log("Edad no válida. Debe estar entre 1 y 120.");
                ingresarEdad();
            }
        });
    } else {
        const resultadosEdades = analizarEdades(edades);
        console.log(resultadosEdades);
        readline.close();
    }
}

ingresarEdad();