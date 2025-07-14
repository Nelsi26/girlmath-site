
// Calcular porcentaje
function calcularPorcentaje() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const resultadoTexto = document.getElementById('resultado');

  if (isNaN(cantidad) || isNaN(porcentaje)) {
    resultadoTexto.innerText = 'Por favor, ingresa valores válidos.';
    return;
  }

  const resultado = (cantidad * porcentaje) / 100;

  // Formatear a moneda (pesos dominicanos)
  const formatoMoneda = new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 2
  });

  resultadoTexto.innerText = `El ${porcentaje}% de ${formatoMoneda.format(cantidad)} es ${formatoMoneda.format(resultado)}.`;
}

// Conversión DOP a USD usando banco seleccionado
function convertirDOPaUSD() {
  const cantidadDOP = parseFloat(document.getElementById("dop").value);
  const tasaVenta = parseFloat(document.getElementById("banco").value);
  const resultadoEl = document.getElementById("resultado-conversion");

  if (isNaN(tasaVenta)) {
    resultadoEl.innerText = "Por favor, selecciona un banco antes de convertir.";
    return;
  }

  if (isNaN(cantidadDOP) || cantidadDOP <= 0) {
    resultadoEl.innerText = "Por favor ingresa una cantidad válida en RD$.";
    return;
  }

  const resultadoUSD = cantidadDOP / tasaVenta;
  resultadoEl.innerText = `Equivalente en USD: $${resultadoUSD.toFixed(2)} (Tasa: RD$ ${tasaVenta.toFixed(2)})`;
}
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
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoTasas").getContext("2d");
 // 🔄 Mover esta función fuera del DOMContentLoaded
function convertirDOPaEUR() {
  // Aquí va tu lógica para convertir de DOP a EUR
  const cantidadDOP = parseFloat(document.getElementById("dop").value);
  const tasaEUR = parseFloat(document.getElementById("banco-eur").value); // Asegúrate de tener este ID
  const resultadoEl = document.getElementById("resultado-eur");

  if (isNaN(tasaEUR)) {
    resultadoEl.innerText = "Selecciona una tasa de cambio válida para EUR.";
    return;
  }

  if (isNaN(cantidadDOP) || cantidadDOP <= 0) {
    resultadoEl.innerText = "Ingresa una cantidad válida en RD$.";
    return;
  }

  const resultadoEUR = cantidadDOP / tasaEUR;
  resultadoEl.innerText = `Equivalente en EUR: €${resultadoEUR.toFixed(2)} (Tasa: RD$${tasaEUR.toFixed(2)})`;
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("graficoTasas").getContext("2d");
}

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Banco Popular", "Banreservas", "BHD León", "Scotiabank"],
      datasets: [
        {
          label: "Venta USD",
          backgroundColor: "#f26abcff",
          data: [60.75, 60.70, 60.75, 60.85]
        },
        {
          label: "Venta EUR",
          backgroundColor: "#fffb7cff",
          data: [65.30, 65.20, 65.40, 65.60]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Tasas de Venta por Banco (USD y EUR)"
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
});
