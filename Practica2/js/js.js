function mostrarDatos1() {
    let nombre = document.getElementById("nombre").value;
    let genero = document.getElementById("apellido").value;
    let precio = document.getElementById("correo").value;
    let artista = document.getElementById("artista");
    let artistaSeleccionado = artista.options[artista.selectedIndex].text;
    alert(
        "Datos del disco:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Género: " + genero + "\n" +
        "Precio: " + precio + "\n" +
        "Artista: " + artistaSeleccionado
    );
}
function mostrarDatos2() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("apellido").value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let artista = document.getElementById("artista");
    let trayectoria = artista.options[artista.selectedIndex].text;
    let generoSeleccionado;
    if (genero) {
        if (genero.value == "M") {
            generoSeleccionado = "Masculino";
        } else {
            generoSeleccionado = "Femenino";
        }
    } else {
        generoSeleccionado = "No seleccionado";
    }
    alert(
        "Datos del cantante:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Edad: " + edad + "\n" +
        "Género: " + generoSeleccionado + "\n" +
        "Trayectoria: " + trayectoria
    );
}

function mostrarDatos3() {
    let nombre = document.getElementById("nombre").value;
    let duracion = document.getElementById("apellido").value;
    let compositor = document.getElementById("correo").value;

    let cantante = document.getElementById("artista");
    let cantanteSeleccionado = cantante.options[cantante.selectedIndex].text;

    alert(
        "Datos de la canción:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Duración: " + duracion + "\n" +
        "Compositor: " + compositor + "\n" +
        "Cantante: " + cantanteSeleccionado
    );
}

function mostrarDatos4() {
    let nombre = document.getElementById("nombre").value;

    let usuario = document.getElementById("artista");
    let usuarioSeleccionado = usuario.options[usuario.selectedIndex].text;

    alert(
        "Datos de la playlist:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Usuario: " + usuarioSeleccionado
    );
}

