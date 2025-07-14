
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

