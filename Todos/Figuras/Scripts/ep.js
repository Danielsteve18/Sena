// Variables
let figura = prompt("INGRESE UN DIGITO: TRIANGULO = 1, RECTANGULO = 2, CUADRADO = 3, CIRCULO = 4");
let base;
let altura;
let area;
let perimetro;
let perimetroA;
let perimetroB;
let perimetroTotal;
let radio;
const pi = 3.14;

switch (figura) {
    case "1":
        base = parseInt(prompt("Ingresa la base del triángulo: "));
        altura = parseInt(prompt("Ingresa la altura del triángulo: "));
        area = ((base * altura) / 2);
        perimetroA = parseInt(prompt("Ingresa el perimetro A: "));
        perimetroB = parseInt(prompt("Ingresa el perimetro B: "));
        perimetro = parseInt(prompt("Ingresa el perimetro C: "));
        perimetroTotal = (perimetroA + perimetroB + perimetro);
        alert("El area del triángulo es: " + area);
        alert("El perimetro del triángulo es: " + perimetroTotal);
        break;

    case "2":
        base = parseInt(prompt("Ingresa la base del rectángulo: "));
        altura = parseInt(prompt("Ingresa la altura del rectángulo: "));
        area = (base * altura);
        perimetro = 2 * (base + altura);
        alert("El area del rectángulo es: " + area);
        alert("El perimetro del rectángulo es: " + perimetro);
        break;

    case "3":
        base = parseInt(prompt("Ingresa la altura de los cuadros: "));
        area = Math.pow(base, 2);
        perimetro = (4 * base);
        alert("El area del cuadrado es: " + area);
        alert("El perimetro del cuadrado es: " + perimetro);
        break;

    case "4":
        radio = parseInt(prompt("Ingresa la circunferencia del círculo: "));
        area = (pi * Math.pow(radio, 2));
        perimetro = (2 * pi * radio);
        alert("El area del círculo es: " + area);
        alert("El perimetro del círculo es: " + perimetro);
        break;

    default:
      alert("Error de opción, intente nuevamente.");
        break;
}
