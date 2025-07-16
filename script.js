// -----------------------------
// CALCULADORA DE PORCENTAJE
// -----------------------------
function calcularPorcentaje() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const resultadoTexto = document.getElementById('resultado');

  if (isNaN(cantidad) || isNaN(porcentaje)) {
    resultadoTexto.innerText = 'Por favor, ingresa valores válidos.';
    return;
  }

  const resultado = (cantidad * porcentaje) / 100;

  const formatoMoneda = new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 2
  });

  resultadoTexto.innerText = `El ${porcentaje}% de ${formatoMoneda.format(cantidad)} es ${formatoMoneda.format(resultado)}.`;

  registrarAccion(`Calculado ${porcentaje}% de ${formatoMoneda.format(cantidad)} → ${formatoMoneda.format(resultado)}`);
}

// -----------------------------
// CONVERTIR DOP A USD
// -----------------------------
function convertirDOPaUSD() {
  const dop = parseFloat(document.getElementById("dop").value);
  const tasa = parseFloat(document.getElementById("banco").value);
  const resultadoEl = document.getElementById("resultado-conversion");

  if (isNaN(dop) || isNaN(tasa)) {
    resultadoEl.innerText = "Completa ambos campos para calcular.";
    return;
  }

  const usd = dop / tasa;
  resultadoEl.innerText = `RD$${dop.toFixed(2)} equivale a aproximadamente US$${usd.toFixed(2)} al cambiar en ese banco.`;

  registrarAccion(`Convertido RD$${dop.toFixed(2)} a USD → US$${usd.toFixed(2)} (Tasa: ${tasa})`);
}

// -----------------------------
// CONVERTIR DOP A EUR
// -----------------------------
function convertirDOPaEUR() {
  const cantidadDOP = parseFloat(document.getElementById("dop-eur").value);
  const tasaEUR = parseFloat(document.getElementById("banco-eur").value);
  const resultadoEl = document.getElementById("resultado-conversion-eur");

  if (isNaN(tasaEUR)) {
    resultadoEl.innerText = "Selecciona una tasa de cambio válida para EUR.";
    return;
  }

  if (isNaN(cantidadDOP) || cantidadDOP <= 0) {
    resultadoEl.innerText = "Ingresa una cantidad válida en RD$.";
    return;
  }

  const resultadoEUR = cantidadDOP / tasaEUR;

  const formatoEuro = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  });

  resultadoEl.innerText = `Equivalente en EUR: ${formatoEuro.format(resultadoEUR)} (Tasa: RD$${tasaEUR.toFixed(2)})`;

  registrarAccion(`Convertido RD$${cantidadDOP.toFixed(2)} a EUR → ${formatoEuro.format(resultadoEUR)} (Tasa: ${tasaEUR})`);
}



  mostrarHistorial(); // También mostrar historial al cargar gráfico
});

// -----------------------------
// HISTORIAL DE ACCIONES
// -----------------------------
let historial = JSON.parse(localStorage.getItem('historialAcciones')) || [];

function mostrarHistorial() {
  const lista = document.getElementById('historial');
  if (!lista) return;

  lista.innerHTML = '';
  historial.slice().reverse().forEach((accion) => {
    const li = document.createElement('li');
    li.textContent = accion;
    lista.appendChild(li);
  });
}

function registrarAccion(descripcion) {
  const fecha = new Date().toLocaleString();
  const entrada = `${fecha} - ${descripcion}`;
  historial.push(entrada);
  localStorage.setItem('historialAcciones', JSON.stringify(historial));
  mostrarHistorial();
}

function limpiarHistorial() {
  if (confirm('¿Seguro que deseas borrar el historial?')) {
    historial = [];
    localStorage.removeItem('historialAcciones');
    mostrarHistorial();
  }
}
