/**
 * Calcula el interés simple
 * Fórmula: I = P × r × t
 *
 * @param {number} principal - Capital inicial (P)
 * @param {number} tasa - Tasa de interés anual en decimal (r) - ej: 0.05 para 5%
 * @param {number} tiempo - Tiempo en años (t)
 * @returns {number} - Interés generado
 * @throws {Error} - Si algún valor es negativo
 */
function calcularInteresSimple(principal, tasa, tiempo) {
  if (principal < 0 || tasa < 0 || tiempo < 0) {
    throw new Error('Los valores deben ser positivos');
  }

  const interes = principal * tasa * tiempo;
  return Math.round(interes * 100) / 100;
}

/**
 * Calcula el monto total (capital + interés)
 * @param {number} principal - Capital inicial
 * @param {number} tasa - Tasa de interés anual en decimal
 * @param {number} tiempo - Tiempo en años
 * @returns {number} - Monto total
 */
function calcularMontoTotal(principal, tasa, tiempo) {
  const interes = calcularInteresSimple(principal, tasa, tiempo);
  return Math.round((principal + interes) * 100) / 100;
}

module.exports = {
  calcularInteresSimple,
  calcularMontoTotal,
};
