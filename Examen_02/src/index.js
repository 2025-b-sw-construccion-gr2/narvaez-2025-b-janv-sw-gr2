const readline = require('readline');
const { calcularInteresSimple, calcularMontoTotal } = require('./interesSimple');

/**
 * Calculadora de Intereses - CLI Interactivo
 */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pregunta(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (respuesta) => {
      resolve(respuesta);
    });
  });
}

function mostrarBanner() {
  console.log('');
  console.log('╔══════════════════════════════════════╗');
  console.log('║   💰 CALCULADORA DE INTERESES 💰    ║');
  console.log('╚══════════════════════════════════════╝');
  console.log('');
}

function mostrarMenu() {
  console.log('Selecciona el tipo de interés:');
  console.log('');
  console.log('  [1] Interés Simple');
  console.log('  [2] Interés Compuesto (En desarrollo 🚧)');
  console.log('  [0] Salir');
  console.log('');
}

async function obtenerDatos() {
  console.log('');
  const principalStr = await pregunta('💵 Capital inicial ($): ');
  const tasaStr = await pregunta('📊 Tasa de interés anual (%): ');
  const tiempoStr = await pregunta('📅 Tiempo (años): ');

  const principal = parseFloat(principalStr);
  const tasaPorcentaje = parseFloat(tasaStr);
  const tiempo = parseFloat(tiempoStr);

  if (isNaN(principal) || isNaN(tasaPorcentaje) || isNaN(tiempo)) {
    console.log('');
    console.log('❌ Error: Ingresa valores numéricos válidos');
    return null;
  }

  // Convertir porcentaje a decimal (5% -> 0.05)
  const tasa = tasaPorcentaje / 100;

  return { principal, tasa, tiempo, tasaPorcentaje };
}

function mostrarResultadoSimple(datos) {
  const { principal, tasa, tiempo, tasaPorcentaje } = datos;

  try {
    const interes = calcularInteresSimple(principal, tasa, tiempo);
    const montoTotal = calcularMontoTotal(principal, tasa, tiempo);

    console.log('');
    console.log('╔══════════════════════════════════════╗');
    console.log('║         📈 RESULTADO                 ║');
    console.log('╚══════════════════════════════════════╝');
    console.log('');
    console.log('📊 Datos ingresados:');
    console.log('   Capital inicial: $' + principal.toFixed(2));
    console.log('   Tasa anual:      ' + tasaPorcentaje + '%');
    console.log('   Tiempo:          ' + tiempo + ' año(s)');
    console.log('');
    console.log('💡 Fórmula: I = P × r × t');
    console.log('');
    console.log('💰 Resultados:');
    console.log('   Interés generado: $' + interes.toFixed(2));
    console.log('   Monto total:      $' + montoTotal.toFixed(2));
    console.log('');
  } catch (error) {
    console.log('');
    console.log('❌ Error: ' + error.message);
  }
}

async function main() {
  mostrarBanner();

  let continuar = true;

  while (continuar) {
    mostrarMenu();

    const opcion = await pregunta('Elige una opción: ');

    switch (opcion.trim()) {
      case '1': {
        console.log('');
        console.log('── Interés Simple ──');
        const datos = await obtenerDatos();
        if (datos) {
          mostrarResultadoSimple(datos);
        }
        break;
      }

      case '2':
        console.log('');
        console.log('🚧 Interés Compuesto está en desarrollo...');
        console.log('   ¡Próximamente disponible!');
        console.log('');
        break;

      case '0':
        console.log('');
        console.log('👋 ¡Hasta luego!');
        continuar = false;
        break;

      default:
        console.log('');
        console.log('❌ Opción no válida. Intenta de nuevo.');
        console.log('');
    }
  }

  rl.close();
}

main();
