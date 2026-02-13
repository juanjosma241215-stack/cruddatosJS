const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
};

// Mostrar el objeto en el HTML para referencia
document.getElementById("codigoObjeto").innerText = JSON.stringify(person, null, 2);

document.getElementById("btnDestruct").onclick = () => {
    // IMPLEMENTACIÓN DE DESTRUCTURING
    const { name, age, profession } = person;

    const output = document.getElementById("output");
    output.innerHTML = `
        <p><strong>Nombre extraído:</strong> ${name}</p>
        <p><strong>Edad extraída:</strong> ${age}</p>
        <p><strong>Profesión extraída:</strong> ${profession}</p>
    `;
    console.log(name, age, profession);
};