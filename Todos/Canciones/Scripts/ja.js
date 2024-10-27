// Array para almacenar los datos de las personas
let personas = [];

// Función para agregar una persona
function agregarPersona() {
    let nombre = prompt("Ingrese el nombre:");
    let cedula = prompt("Ingrese el número de identificación (cédula):");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento (dd/mm/yyyy):");
    let correo = prompt("Ingrese el correo electrónico:");
    let ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    let ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    let canciones = [];
    for (let i = 1; i <= 3; i++) {
        let artista = prompt(`Ingrese el nombre del artista favorito ${i}:`);
        let titulo = prompt(`Ingrese el título de la canción favorita ${i}:`);
        canciones.push({ artista, titulo });
    }

    personas.push({
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones
    });
    alert("Persona agregada exitosamente.");
}

// Función para mostrar la información de una persona
function mostrarPersona(posicion) {
    if (posicion < 0 || posicion >= personas.length) {
        alert("Posición inválida.");
        return;
    }

    let persona = personas[posicion];
    alert(`Nombre: ${persona.nombre}`);
    alert(`Cédula: ${persona.cedula}`);
    alert(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    alert(`Correo: ${persona.correo}`);
    alert(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
    alert(`Ciudad de Origen: ${persona.ciudadOrigen}`);

    persona.canciones.forEach((cancion, index) => {
        alert(`Canción Favorita ${index + 1}: ${cancion.artista} - ${cancion.titulo}`);
    });
}

// Menú principal
function menu() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar persona\n2. Mostrar información de una persona\n3. Salir");
        switch (opcion) {
            case '1':
                agregarPersona();
                break;
            case '2':
                let posicion = parseInt(prompt("Ingrese la posición de la persona en el vector (0-5):"));
                mostrarPersona(posicion);
                break;
            case '3':
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción inválida.");
        }
    } while (opcion !== '3');
}

// Iniciar el menú
menu();

