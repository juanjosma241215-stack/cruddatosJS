document.addEventListener("DOMContentLoaded", showData);

function showData() {
    const listData = JSON.parse(localStorage.getItem("listData")) || [];
    const tbody = document.querySelector("#tablaDatos tbody");

    if (!listData.length) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="empty-state">
                    <i class="bi bi-inbox"></i>
                    <span>Aún no hay registros. Agrega el primero desde el formulario.</span>
                </td>
            </tr>
        `;
        return;
    }

    let html = "";
    listData.forEach((el, index) => {
        html += `
            <tr>
                <td>${el.email}</td>
                <td>${el.name}</td>
                <td>${el.doc}</td>
                <td>
                    <div class="action-group">
                        <button class="btn btn-sm btn-warning action-btn" onclick="editData(${index})" aria-label="Editar registro">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-danger action-btn" onclick="deleteData(${index})" aria-label="Eliminar registro">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function addData() {
    const name = document.getElementById("nombre").value.trim();
    const doc = document.getElementById("documento").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !doc || !email) {
        alert("Completa todos los campos.");
        return;
    }

    const listData = JSON.parse(localStorage.getItem("listData")) || [];

    if (listData.some((item) => item.email === email || item.doc === doc)) {
        alert("El email o documento ya existen.");
        return;
    }

    listData.push({ name, doc, email });
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    resetForm();
}

function deleteData(index) {
    const listData = JSON.parse(localStorage.getItem("listData")) || [];
    listData.splice(index, 1);
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    resetForm();
}

function editData(index) {
    const listData = JSON.parse(localStorage.getItem("listData")) || [];
    const item = listData[index];

    if (!item) {
        return;
    }

    document.getElementById("nombre").value = item.name;
    document.getElementById("documento").value = item.doc;
    document.getElementById("email").value = item.email;
    document.getElementById("editIndex").value = index;

    document.getElementById("btnGuardar").classList.add("d-none");
    document.getElementById("btnActualizar").classList.remove("d-none");
}

function updateData() {
    const listData = JSON.parse(localStorage.getItem("listData")) || [];
    const index = Number(document.getElementById("editIndex").value);
    const name = document.getElementById("nombre").value.trim();
    const doc = document.getElementById("documento").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !doc || !email) {
        alert("Completa todos los campos.");
        return;
    }

    if (listData.some((item, itemIndex) => itemIndex !== index && (item.email === email || item.doc === doc))) {
        alert("No puedes actualizar con un email o documento repetido.");
        return;
    }

    listData[index] = { name, doc, email };
    localStorage.setItem("listData", JSON.stringify(listData));
    showData();
    resetForm();
}

function resetForm() {
    document.getElementById("formRegistro").reset();
    document.getElementById("editIndex").value = "";
    document.getElementById("btnGuardar").classList.remove("d-none");
    document.getElementById("btnActualizar").classList.add("d-none");
}

const baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"];
const baseDatos2 = ["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"];

function ejecutarBusqueda() {
    const pais = document.getElementById("inputPais").value.trim();
    const res = document.getElementById("resCallback");
    res.classList.remove("d-none", "alert-success", "alert-danger");

    const encontrado = () => {
        res.innerText = "País encontrado";
        res.classList.add("alert-success");
    };

    const busqueda2 = (p, cbEnc) => {
        if (baseDatos2.includes(p)) {
            cbEnc();
        } else {
            res.innerText = "Dato no encontrado";
            res.classList.add("alert-danger");
        }
    };

    if (baseDatos1.includes(pais)) {
        encontrado();
    } else {
        busqueda2(pais, encontrado);
    }
}

function ejecutarPromesa() {
    const cadena = document.getElementById("inputVocal").value;
    const res = document.getElementById("resPromise");

    const promesa = new Promise((resolve, reject) => {
        const ultima = cadena.trim().slice(-1).toLowerCase();
        if (["a", "e", "i", "o", "u"].includes(ultima)) {
            resolve(ultima.toUpperCase());
        } else {
            reject("El carácter final no es una vocal.");
        }
    });

    promesa
        .then((v) => {
            res.innerText = `Éxito: termina en vocal ${v}`;
        })
        .catch((e) => {
            res.innerText = e;
        });
}

async function ejecutarAsync() {
    const n = document.getElementById("inputDoble").value;
    const display = document.getElementById("resAsync");

    if (!n) {
        display.innerText = "Ingresa un número para calcular el doble.";
        return;
    }

    display.innerText = "Calculando...";

    const double = await new Promise((resolve) => {
        setTimeout(() => resolve(Number(n) * 2), 2000);
    });

    display.innerText = `El doble es: ${double}`;
}

const person = {
    name: "Juan Carlos Valencia",
    age: 30,
    city: "Cali",
    profession: "Desarrollador"
};

document.getElementById("codeObj").innerText = JSON.stringify(person, null, 2);

function ejecutarDestructuring() {
    const { name, age, profession } = person;
    document.getElementById("resDestruct").innerHTML = `
        <div class="alert alert-info">
            <b>Nombre:</b> ${name} | <b>Edad:</b> ${age} | <b>Profesión:</b> ${profession}
        </div>
    `;
}
