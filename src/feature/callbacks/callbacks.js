const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

const encontrado = () => "¡País encontrado!";

const busquedaBaseDatos2 = (pais, callbackEncontrado) => {
    if (baseDatos2.includes(pais)) {
        return callbackEncontrado();
    }
    return "Dato no encontrado";
};

const busquedaBaseDatos1 = (pais, callbackEncontrado, callbackSiguiente) => {
    if (baseDatos1.includes(pais)) {
        return callbackEncontrado();
    }
    return callbackSiguiente(pais, callbackEncontrado);
};

document.getElementById("btnBuscar").onclick = () => {
    const p = document.getElementById("paisBusqueda").value;
    const res = busquedaBaseDatos1(p, encontrado, busquedaBaseDatos2);
    document.getElementById("resultado").innerText = res;
};