// --- LÓGICA CRUD ---
document.addEventListener("DOMContentLoaded", showData);

function showData() {
    let listData = JSON.parse(localStorage.getItem("listData")) || [];
    let html = "";
    listData.forEach((el, index) => {
        html += `<tr>
            <td>${el.email}</td>
            <td>${el.name}</td>
            <td>${el.doc}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editData(${index})"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-danger" onclick="deleteData(${index})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>`;
    });
    document.querySelector("#tablaDatos tbody").innerHTML = html;
}

function addData() {
    const name = document.getElementById("nombre").value;
    const doc = document.getElementById("documento").value;
    const email = document.getElementById("email").value;

    if (!name || !doc || !email) return alert("Completa todos los campos");

    let listData = JSON.parse(localStorage.getItem("listData")) || [];

    // Validar únicos (Actividad 2)
    if (listData.some(item => item.email === email || item.doc === doc)) {
        return alert("Error: El email o documento ya existen.");
    }

    listData.push({ name, doc, email });
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    document.getElementById("formRegistro").reset();
}

function deleteData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));
    listData.splice(index, 1);
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
}

function editData(index) {
    let listData = JSON.parse(localStorage.getItem("listData"));
    const item = listData[index];
    document.getElementById("nombre").value = item.name;
    document.getElementById("documento").value = item.doc;
    document.getElementById("email").value = item.email;
    document.getElementById("editIndex").value = index;

    document.getElementById("btnGuardar").classList.add("d-none");
    document.getElementById("btnActualizar").classList.remove("d-none");
}

function updateData() {
    let listData = JSON.parse(localStorage.getItem("listData"));
    const index = document.getElementById("editIndex").value;

    listData[index] = {
        name: document.getElementById("nombre").value,
        doc: document.getElementById("documento").value,
        email: document.getElementById("email").value
    };

    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    document.getElementById("formRegistro").reset();
    document.getElementById("btnGuardar").classList.remove("d-none");
    document.getElementById("btnActualizar").classList.add("d-none");
}

// --- LÓGICA CALLBACKS (Actividad 3) ---
const baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
const baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

function ejecutarBusqueda() {
    const pais = document.getElementById("inputPais").value;
    const res = document.getElementById("resCallback");
    res.classList.remove("d-none", "alert-success", "alert-danger");

    const encontrado = () => {
        res.innerText = "País encontrado";
        res.classList.add("alert-success");
    };

    const busqueda2 = (p, cbEnc) => {
        if (baseDatos2.includes(p)) cbEnc();
        else {
            res.innerText = "Dato no encontrado";
            res.classList.add("alert-danger");
        }
    };

    if (baseDatos1.includes(pais)) encontrado();
    else busqueda2(pais, encontrado);
}

// --- LÓGICA PROMISES (Actividad 4) ---
function ejecutarPromesa() {
    const cadena = document.getElementById("inputVocal").value;
    const res = document.getElementById("resPromise");

    const promesa = new Promise((resolve, reject) => {
        const ultima = cadena.trim().slice(-1).toLowerCase();
        if (['a','e','i','o','u'].includes(ultima)) resolve(ultima.toUpperCase());
        else reject("El carácter no es una vocal");
    });

    promesa
        .then(v => res.innerText = `Éxito: Termina en vocal ${v}`)
        .catch(e => res.innerText = e);
}

// --- LÓGICA ASYNC/AWAIT (Actividad 5) ---
async function ejecutarAsync() {
    const n = document.getElementById("inputDoble").value;
    const display = document.getElementById("resAsync");
    if(!n) return;

    display.innerText = "Calculando...";
    
    const double = await new Promise(res => {
        setTimeout(() => res(n * 2), 2000);
    });

    display.innerText = `El doble es: ${double}`;
}

// --- LÓGICA DESTRUCTURING (Actividad 6) ---
const person = { name: 'Juan Carlos Valencia', age: 30, city: 'Cali', profession: 'Desarrollador' };
document.getElementById("codeObj").innerText = JSON.stringify(person, null, 2);

function ejecutarDestructuring() {
    const { name, age, profession } = person;
    document.getElementById("resDestruct").innerHTML = `
        <div class="alert alert-info">
            <b>Nombre:</b> ${name} | <b>Edad:</b> ${age} | <b>Profesión:</b> ${profession}
        </div>
    `;
}