const { calcularInteresCompuesto, calcularGananciaCompuesta } = require('../src/interesCompuesto');

describe('Interés Compuesto', () => {
  describe('calcularInteresCompuesto', () => {
    test('calcula correctamente con capitalización mensual', () => {
      // 1000 al 5% anual por 1 año, capitalizado mensualmente
      const resultado = calcularInteresCompuesto(1000, 0.05, 1, 12);
      expect(resultado).toBeCloseTo(1051.16, 2);
    });

    test('calcula correctamente con capitalización anual', () => {
      // 1000 al 10% anual por 2 años, capitalizado anualmente
      const resultado = calcularInteresCompuesto(1000, 0.1, 2, 1);
      expect(resultado).toBe(1210);
    });

    test('calcula correctamente con capitalización trimestral', () => {
      // 5000 al 8% anual por 3 años, capitalizado trimestralmente
      const resultado = calcularInteresCompuesto(5000, 0.08, 3, 4);
      expect(resultado).toBeCloseTo(6341.21, 2);
    });

    test('retorna el principal cuando el tiempo es 0', () => {
      expect(calcularInteresCompuesto(1000, 0.05, 0, 12)).toBe(1000);
    });

    test('retorna el principal cuando la tasa es 0', () => {
      expect(calcularInteresCompuesto(1000, 0, 5, 12)).toBe(1000);
    });

    test('usa capitalización mensual por defecto', () => {
      const conDefault = calcularInteresCompuesto(1000, 0.05, 1);
      const conMensual = calcularInteresCompuesto(1000, 0.05, 1, 12);
      expect(conDefault).toBe(conMensual);
    });

    test('lanza error con principal negativo', () => {
      expect(() => calcularInteresCompuesto(-1000, 0.05, 1, 12)).toThrow(
        'Los valores deben ser positivos'
      );
    });

    test('lanza error con tasa negativa', () => {
      expect(() => calcularInteresCompuesto(1000, -0.05, 1, 12)).toThrow(
        'Los valores deben ser positivos'
      );
    });

    test('lanza error con n igual a 0', () => {
      expect(() => calcularInteresCompuesto(1000, 0.05, 1, 0)).toThrow(
        'Los valores deben ser positivos'
      );
    });
  });

  describe('calcularGananciaCompuesta', () => {
    test('calcula correctamente la ganancia', () => {
      // 1000 al 5% anual por 1 año = 1051.16 - 1000 = 51.16
      const ganancia = calcularGananciaCompuesta(1000, 0.05, 1, 12);
      expect(ganancia).toBeCloseTo(51.16, 2);
    });

    test('retorna 0 cuando no hay ganancia', () => {
      expect(calcularGananciaCompuesta(1000, 0, 5, 12)).toBe(0);
    });

    test('calcula correctamente con valores grandes', () => {
      // 10000 al 12% por 5 años capitalizado mensualmente
      const ganancia = calcularGananciaCompuesta(10000, 0.12, 5, 12);
      expect(ganancia).toBeCloseTo(8166.97, 2);
    });
  });
});
