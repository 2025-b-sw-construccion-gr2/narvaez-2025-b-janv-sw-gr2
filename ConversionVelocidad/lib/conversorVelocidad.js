const FACTORES_A_MPS = {
    mps: 1,                    // Metro por segundo (base)
    kph: 1 / 3.6,             // Kilómetro por hora
    mph: 0.44704,             // Milla por hora
    fps: 0.3048,              // Pie por segundo
    knots: 0.514444           // Nudo
};

const FACTORES_DESDE_MPS = {
    mps: 1,                    // Metro por segundo (base)
    kph: 3.6,                 // Kilómetro por hora
    mph: 2.23694,             // Milla por hora
    fps: 3.28084,             // Pie por segundo
    knots: 1.94384            // Nudo
};


function convertir(valor, unidadOrigen, unidadDestino) {
    // Validar que las unidades existan
    if (!FACTORES_A_MPS[unidadOrigen]) {
        throw new Error(`Unidad de origen inválida: ${unidadOrigen}`);
    }
    if (!FACTORES_DESDE_MPS[unidadDestino]) {
        throw new Error(`Unidad de destino inválida: ${unidadDestino}`);
    }
    
    // Validar que el valor sea un número
    if (typeof valor !== 'number' || isNaN(valor)) {
        throw new Error('El valor debe ser un número válido');
    }
    
    // Convertir a m/s primero, luego a la unidad destino
    const valorEnMPS = valor * FACTORES_A_MPS[unidadOrigen];
    const valorConvertido = valorEnMPS * FACTORES_DESDE_MPS[unidadDestino];
    
    return valorConvertido;
}


function desdeMPH(mph) {
    return {
        mph: mph,
        kph: convertir(mph, 'mph', 'kph'),
        mps: convertir(mph, 'mph', 'mps'),
        fps: convertir(mph, 'mph', 'fps'),
        knots: convertir(mph, 'mph', 'knots')
    };
}


function desdeKPH(kph) {
    return {
        kph: kph,
        mph: convertir(kph, 'kph', 'mph'),
        mps: convertir(kph, 'kph', 'mps'),
        fps: convertir(kph, 'kph', 'fps'),
        knots: convertir(kph, 'kph', 'knots')
    };
}


function desdeMPS(mps) {
    return {
        mps: mps,
        kph: convertir(mps, 'mps', 'kph'),
        mph: convertir(mps, 'mps', 'mph'),
        fps: convertir(mps, 'mps', 'fps'),
        knots: convertir(mps, 'mps', 'knots')
    };
}


function desdeFPS(fps) {
    return {
        fps: fps,
        kph: convertir(fps, 'fps', 'kph'),
        mph: convertir(fps, 'fps', 'mph'),
        mps: convertir(fps, 'fps', 'mps'),
        knots: convertir(fps, 'fps', 'knots')
    };
}


function desdeKnots(knots) {
    return {
        knots: knots,
        kph: convertir(knots, 'knots', 'kph'),
        mph: convertir(knots, 'knots', 'mph'),
        mps: convertir(knots, 'knots', 'mps'),
        fps: convertir(knots, 'knots', 'fps')
    };
}


function obtenerUnidadesDisponibles() {
    return Object.keys(FACTORES_A_MPS);
}


function obtenerNombreUnidad(codigo) {
    const nombres = {
        mps: 'Metros por segundo',
        kph: 'Kilómetros por hora',
        mph: 'Millas por hora',
        fps: 'Pies por segundo',
        knots: 'Nudos'
    };
    return nombres[codigo] || 'Unidad desconocida';
}

module.exports = {
    convertir,
    desdeMPH,
    desdeKPH,
    desdeMPS,
    desdeFPS,
    desdeKnots,
    obtenerUnidadesDisponibles,
    obtenerNombreUnidad
};

