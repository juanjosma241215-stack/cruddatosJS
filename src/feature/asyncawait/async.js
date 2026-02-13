const duplicarConRetraso = (numero) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero * 2);
        }, 2000);
    });
};

document.getElementById("btnAsync").onclick = async () => {
    const n = document.getElementById("numInput").value;
    const loader = document.getElementById("loader");
    const display = document.getElementById("resultadoAsync");

    if(!n) return alert("Ingresa un número");

    loader.classList.remove("d-none");
    display.innerText = "";

    // Aquí usamos AWAIT para esperar la promesa
    const resultado = await duplicarConRetraso(Number(n));

    loader.classList.add("d-none");
    display.innerText = `Resultado final: ${resultado}`;
};