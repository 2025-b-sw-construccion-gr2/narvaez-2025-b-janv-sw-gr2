const { calcularInteresSimple, calcularMontoTotal } = require('../src/interesSimple');

describe('Interés Simple', () => {
  describe('calcularInteresSimple', () => {
    test('calcula correctamente con valores estándar', () => {
      // 1000 al 5% anual por 2 años = 100
      expect(calcularInteresSimple(1000, 0.05, 2)).toBe(100);
    });

    test('calcula correctamente con valores decimales', () => {
      // 5000 al 3.5% anual por 3 años = 525
      expect(calcularInteresSimple(5000, 0.035, 3)).toBe(525);
    });

    test('retorna 0 cuando el tiempo es 0', () => {
      expect(calcularInteresSimple(1000, 0.05, 0)).toBe(0);
    });

    test('retorna 0 cuando la tasa es 0', () => {
      expect(calcularInteresSimple(1000, 0, 5)).toBe(0);
    });

    test('retorna 0 cuando el principal es 0', () => {
      expect(calcularInteresSimple(0, 0.05, 5)).toBe(0);
    });

    test('lanza error con principal negativo', () => {
      expect(() => calcularInteresSimple(-1000, 0.05, 2)).toThrow(
        'Los valores deben ser positivos'
      );
    });

    test('lanza error con tasa negativa', () => {
      expect(() => calcularInteresSimple(1000, -0.05, 2)).toThrow(
        'Los valores deben ser positivos'
      );
    });

    test('lanza error con tiempo negativo', () => {
      expect(() => calcularInteresSimple(1000, 0.05, -2)).toThrow(
        'Los valores deben ser positivos'
      );
    });
  });

  describe('calcularMontoTotal', () => {
    test('calcula correctamente el monto total', () => {
      // 1000 + (1000 * 0.05 * 2) = 1000 + 100 = 1100
      expect(calcularMontoTotal(1000, 0.05, 2)).toBe(1100);
    });

    test('retorna el principal cuando no hay interés', () => {
      expect(calcularMontoTotal(1000, 0, 5)).toBe(1000);
    });

    test('calcula correctamente con valores grandes', () => {
      // 10000 al 8% por 5 años = 10000 + 4000 = 14000
      expect(calcularMontoTotal(10000, 0.08, 5)).toBe(14000);
    });
  });
});
