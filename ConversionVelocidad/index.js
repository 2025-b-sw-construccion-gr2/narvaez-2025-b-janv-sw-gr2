/**
 * Programa interactivo para convertir unidades de velocidad
 * Usa la librería conversorVelocidad.js
 */

const readline = require('readline');
const conversor = require('./lib/conversorVelocidad');

// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Colores para la consola (opcional, funciona en la mayoría de terminales)
const colores = {
    reset: '\x1b[0m',
    cyan: '\x1b[36m',
    verde: '\x1b[32m',
    amarillo: '\x1b[33m',
    azul: '\x1b[34m'
};

/**
 * Muestra el menú principal
 */
function mostrarMenu() {
    console.log(`\n${colores.cyan}╔════════════════════════════════════════════════╗`);
    console.log(`║   CONVERSOR DE UNIDADES DE VELOCIDAD          ║`);
    console.log(`╚════════════════════════════════════════════════╝${colores.reset}\n`);
    
    console.log(`${colores.verde}Unidades disponibles:${colores.reset}`);
    console.log(`  ${colores.amarillo}1.${colores.reset} mph   - Millas por hora`);
    console.log(`  ${colores.amarillo}2.${colores.reset} kph   - Kilómetros por hora`);
    console.log(`  ${colores.amarillo}3.${colores.reset} mps   - Metros por segundo`);
    console.log(`  ${colores.amarillo}4.${colores.reset} fps   - Pies por segundo`);
    console.log(`  ${colores.amarillo}5.${colores.reset} knots - Nudos`);
    console.log(`  ${colores.amarillo}6.${colores.reset} Salir\n`);
}

/**
 * Obtiene el código de unidad según la opción del menú
 */
function obtenerCodigoUnidad(opcion) {
    const mapeo = {
        '1': 'mph',
        '2': 'kph',
        '3': 'mps',
        '4': 'fps',
        '5': 'knots'
    };
    return mapeo[opcion];
}

/**
 * Realiza la conversión y muestra los resultados
 */
function realizarConversion(valor, unidadOrigen) {
    console.log(`\n${colores.azul}═══════════════════════════════════════════════════${colores.reset}`);
    console.log(`${colores.verde}Conversión desde ${conversor.obtenerNombreUnidad(unidadOrigen)}${colores.reset}`);
    console.log(`${colores.azul}═══════════════════════════════════════════════════${colores.reset}\n`);
    
    try {
        const resultado = conversor.convertir(valor, unidadOrigen, unidadOrigen);
        
        // Mostrar todas las conversiones
        const unidades = conversor.obtenerUnidadesDisponibles();
        
        unidades.forEach(unidad => {
            const valorConvertido = conversor.convertir(valor, unidadOrigen, unidad);
            const nombreUnidad = conversor.obtenerNombreUnidad(unidad);
            
            if (unidad === unidadOrigen) {
                console.log(`  ${colores.amarillo}➜${colores.reset} ${valorConvertido.toFixed(4)} ${nombreUnidad} ${colores.amarillo}(original)${colores.reset}`);
            } else {
                console.log(`  ${colores.cyan}→${colores.reset} ${valorConvertido.toFixed(4)} ${nombreUnidad}`);
            }
        });
        
        console.log(`\n${colores.azul}═══════════════════════════════════════════════════${colores.reset}\n`);
    } catch (error) {
        console.log(`\n${colores.reset}❌ Error: ${error.message}\n`);
    }
}

/**
 * Pregunta por el valor a convertir
 */
function preguntarValor(unidadOrigen) {
    rl.question(`Ingrese el valor en ${conversor.obtenerNombreUnidad(unidadOrigen)}: `, (valorStr) => {
        const valor = parseFloat(valorStr);
        
        if (isNaN(valor)) {
            console.log('\n❌ Por favor, ingrese un número válido.\n');
            preguntarUnidadOrigen();
        } else {
            realizarConversion(valor, unidadOrigen);
            preguntarContinuar();
        }
    });
}

/**
 * Pregunta por la unidad de origen
 */
function preguntarUnidadOrigen() {
    rl.question('Seleccione la unidad de origen (1-6): ', (opcion) => {
        if (opcion === '6') {
            console.log(`\n${colores.verde}¡Gracias por usar el conversor de velocidades!${colores.reset}\n`);
            rl.close();
            return;
        }
        
        const unidadOrigen = obtenerCodigoUnidad(opcion);
        
        if (!unidadOrigen) {
            console.log('\n❌ Opción inválida. Por favor, seleccione una opción del 1 al 6.\n');
            preguntarUnidadOrigen();
        } else {
            preguntarValor(unidadOrigen);
        }
    });
}

/**
 * Pregunta si desea realizar otra conversión
 */
function preguntarContinuar() {
    rl.question('¿Desea realizar otra conversión? (s/n): ', (respuesta) => {
        if (respuesta.toLowerCase() === 's' || respuesta.toLowerCase() === 'si') {
            iniciar();
        } else {
            console.log(`\n${colores.verde}¡Gracias por usar el conversor de velocidades!${colores.reset}\n`);
            rl.close();
        }
    });
}

/**
 * Inicia el programa
 */
function iniciar() {
    mostrarMenu();
    preguntarUnidadOrigen();
}

// Iniciar el programa
iniciar();

