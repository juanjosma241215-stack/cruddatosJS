const verificarVocal = (cadena) => {
    return new Promise((resolve, reject) => {
        const ultimaLetra = cadena.trim().slice(-1);
        if (/[aeiouAEIOU]/.test(ultimaLetra)) {
            resolve(`Éxito: La vocal encontrada es "${ultimaLetra}"`);
        } else {
            reject("Error: El último carácter no es una vocal.");
        }
    });
};

document.getElementById("btnPromesa").onclick = () => {
    const texto = document.getElementById("palabraInput").value;
    const resDiv = document.getElementById("resultado");

    resDiv.classList.remove("d-none", "alert-success", "alert-danger");

    verificarVocal(texto)
        .then(mensaje => {
            resDiv.classList.add("alert-success");
            resDiv.innerText = mensaje;
        })
        .catch(error => {
            resDiv.classList.add("alert-danger");
            resDiv.innerText = error;
        });
};