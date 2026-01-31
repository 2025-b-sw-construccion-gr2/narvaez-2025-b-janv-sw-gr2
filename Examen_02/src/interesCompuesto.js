/**
 * Calcula el monto final con interés compuesto
 * Fórmula: A = P(1 + r/n)^(nt)
 *
 * @param {number} principal - Capital inicial (P)
 * @param {number} tasa - Tasa de interés anual en decimal (r) - ej: 0.05 para 5%
 * @param {number} tiempo - Tiempo en años (t)
 * @param {number} n - Número de veces que se capitaliza por año (default: 12 = mensual)
 * @returns {number} - Monto final
 * @throws {Error} - Si algún valor es inválido
 */
function calcularInteresCompuesto(principal, tasa, tiempo, n = 12) {
  if (principal < 0 || tasa < 0 || tiempo < 0 || n <= 0) {
    throw new Error('Los valores deben ser positivos');
  }

  const monto = principal * Math.pow(1 + tasa / n, n * tiempo);
  return Math.round(monto * 100) / 100;
}

/**
 * Calcula solo el interés generado (monto - capital)
 * @param {number} principal - Capital inicial
 * @param {number} tasa - Tasa de interés anual en decimal
 * @param {number} tiempo - Tiempo en años
 * @param {number} n - Capitalizaciones por año
 * @returns {number} - Interés generado
 */
function calcularGananciaCompuesta(principal, tasa, tiempo, n = 12) {
  const monto = calcularInteresCompuesto(principal, tasa, tiempo, n);
  return Math.round((monto - principal) * 100) / 100;
}

module.exports = {
  calcularInteresCompuesto,
  calcularGananciaCompuesta,
};
