let BD = [
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599664213,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599666345,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599666514,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599666645,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599666778,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599666911,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599667045,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599667178,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599667311,
  },
  {
    nombre: "Anthony",
    rut: "25.659.625-4",
    patente: "HGZK77",
    color: "blanco",
    id: 1679599668245,
  },
];

const nombre_vendedor = document.querySelector("#nombre");
const rut_vendedor = document.querySelector("#rut");
const patente_vehiculo = document.querySelector("#patente");
const marca_vehiculo = document.querySelector("#marca");
const color_vehiculo = document.querySelector("#color");
const modelo_vehiculo = document.querySelector("#modelo");
const btn_submit = document.querySelector("#btnsubmit");
const formulario = document.querySelector("#formulario");
const lista = document.querySelector("#lista");

formulario?.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
  if (nombre_vendedor.value === "") {
    alert("nombre inválido");
  }
  if (patente_vehiculo.value === "") {
    alert("patente inválida");
  }
  if (rut_vendedor.value === "") {
    alert("rut inválido");
  }
  if (marca_vehiculo.value === "") {
    alert("falta marca");
  }
  if (modelo_vehiculo.value === "") {
    alert("falta modelo");
  }
  if (color_vehiculo.value === "") {
    alert("falta color");
  } else {
    e.preventDefault();
    crearElemento();
    mapElementos();
  }
}

function crearElemento() {
  let elemento = {
    nombre: nombre_vendedor.value,
    rut: rut_vendedor.value,
    patente: patente_vehiculo.value,
    color: color_vehiculo.value,
    marca: marca_vehiculo.value,
    modelo: modelo_vehiculo.value,
    id: Date.now(),
  };
  if (BD.length > 9) {
    BD.pop();
    BD.unshift(elemento);
  } else {
    BD.unshift(elemento);
  }
  guardarBD();
}

const guardarBD = () => {
  localStorage.setItem("BD", JSON.stringify(BD));
  mapElementos();
};

const loca_bd = JSON.parse(localStorage.getItem("BD"));

const eliminar = (id) => {
  loca_bd = loca_bd.filer((ele) => ele !== id);
};

const mapElementos = () => {
  loca_bd.map((ele) => {
    lista.innerHTML += `
      <div class="fila2">
      <div class="div1">${ele.nombre}</div>
      <div class="div2">${ele.rut}</div>
      <div class="div2">${ele.patente}</div>
      <div class="div2">${ele.marca}</div>
      <div class="div2">${ele.modelo}</div>
      <div class="div2">${ele.color}</div>
      <button class="btn_eliminar"></button>
      </div>
      <hr class="divisor" />
      `;
  });
};

document.addEventListener("DOMContentLoaded", mapElementos);
