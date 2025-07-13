
function calcularPorcentaje() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const resultadoTexto = document.getElementById('resultado');

  if (isNaN(cantidad) || isNaN(porcentaje)) {
  let resultadoTexto.innerText = 'Por favor, ingresa valores válidos.';
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


  const resultado = (cantidad * porcentaje) / 100;
  resultadoTexto.innerText = `El ${porcentaje}% de RD$ ${cantidad} es RD$ ${resultado.toFixed(2)}.`;


    // CONVERSIÓN DOP a USD
    function convertirDOPaUSD() {
      const dop = parseFloat(document.getElementById('dop').value);
      const resultadoEl = document.getElementById('resultado-conversion');

      if (isNaN(dop) || dop <= 0) {
        resultadoEl.innerText = 'Por favor ingresa una cantidad válida.';
        return;
      }

      const resultado = dop * tasaDOPaUSD;
      resultadoEl.innerText = `RD$ ${dop} equivalen a USD $${resultado.toFixed(2)} (tasa fija RD$ 60.90 = USD 1).`;
    }

    // Conversión DOP a USD usando banco seleccionado
function convertirDOPaUSD() {
  const cantidadDOP = parseFloat(document.getElementById("dop").value);
  const tasaVenta = document.getElementById("banco").value;
  const resultadoEl = document.getElementById("resultado-conversion");

  if (tasaVenta === "") {
    resultadoEl.innerText = "Por favor, selecciona un banco antes de convertir.";
    return;
  }

  if (isNaN(cantidadDOP) || cantidadDOP <= 0) {
    resultadoEl.innerText = "Por favor ingresa una cantidad válida en RD$.";
    return;
  }

  const resultadoUSD = cantidadDOP / parseFloat(tasaVenta);
  resultadoEl.innerText = `Equivalente en USD: $${resultadoUSD.toFixed(2)} (Tasa: RD$ ${parseFloat(tasaVenta).toFixed(2)})`;
}
