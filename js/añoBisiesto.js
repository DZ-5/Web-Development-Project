function verificarBisiesto() {
    // 1. Extraer el valor del input usando su ID
    let anioStr = document.getElementById("entradaAnio").value;
    let anio = Number.parseInt(anioStr);

    // Validar que se haya ingresado un número válido
    let showResult = document.getElementById("resultado");
    if (Number.isNaN(anio)) {
        showResult.innerHTML = `<h2 style="color: orange;">Por favor, ingresa un número de año válido.</h2>`;
        return;
    }

    // 2. Determinar si es bisiesto
    // Un año es bisiesto si es divisible por 4, y (no es divisible por 100 o es divisible por 400)
    let esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);

    // 3. Mostrar el resultado en letras verdes si es bisiesto, o rojas si no lo es
    if (esBisiesto) {
        showResult.innerHTML = `<h2 style="color: green;">El año ${anio} ES bisiesto.</h2>`;
    } else {
        showResult.innerHTML = `<h2 style="color: red;">El año ${anio} NO es bisiesto.</h2>`;
    }
}
