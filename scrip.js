// TASA FIJA USADA EN TODAS LAS CONVERSIONES
    const tasaDOPaUSD = 1 / 60.90; // 1 USD = RD$ 60.90
    const tasaUSDaDOP = 60.90;

  function calcularPorcentaje() {
  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const porcentaje = parseFloat(document.getElementById('porcentaje').value);
  const resultadoTexto = document.getElementById('resultado');

  if (isNaN(cantidad) || isNaN(porcentaje)) {
    resultadoTexto.innerText = 'Por favor, ingresa valores válidos.';
    return;
  }

  const resultado = (cantidad * porcentaje) / 100;
  resultadoTexto.innerText = `El ${porcentaje}% de RD$ ${cantidad} es RD$ ${resultado.toFixed(2)}.`;
}

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

    // CONVERSIÓN USD a DOP
    function convertirUSDaDOP() {
      const usd = parseFloat(document.getElementById('usd').value);
      const resultadoEl = document.getElementById('resultado-conversion-usd');

      if (isNaN(usd) || usd <= 0) {
        resultadoEl.innerText = 'Por favor ingresa una cantidad válida.';
        return;
      }

      const resultado = usd * tasaUSDaDOP;
      resultadoEl.innerText = `USD $${usd} equivalen a RD$ ${resultado.toFixed(2)} (tasa fija USD 1 = RD$ 60.90).`;
    }