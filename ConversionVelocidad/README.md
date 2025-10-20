# 🚀 Librería de Conversión de Velocidades

> **Proyecto creado para convertir unidades de velocidad de forma reutilizable**

---

## 📝 Prompt Original

```
Explícame cómo crear una librería en Javascript que permita reutilizar código
para convertir unidades de velocidad entre sí: milla por hora, pie por segundo,
metro por segundo, kilómetro por hora, nudo.

Dame la estructura del proyecto en una carpeta aparte con las librerías para
las operaciones de conversión que me permitirían transformar. En sí, solo quiero
una carpeta que tenga las librerías o convertores en un solo .js para ser
reutilizado y luego el index.js que tendrá para preguntarle el tipo de conversión
y el número.
```

---

## 📋 Descripción

Librería JavaScript que convierte entre 5 unidades de velocidad:

- **mph** - Millas por hora
- **kph** - Kilómetros por hora
- **mps** - Metros por segundo
- **fps** - Pies por segundo
- **knots** - Nudos

---

## 📁 Estructura de carpetas

Crea el proyecto y las carpetas así:

```
ConversionVelocidad/
├─ package.json
├─ index.js              # Programa interactivo principal
├─ lib/
│  └─ conversorVelocidad.js   # Librería de conversiones (reutilizable)
```

---

## ⚙️ Instalación

En la terminal:

```bash
mkdir ConversionVelocidad
cd ConversionVelocidad
npm init -y
mkdir lib
```

---

## 🚀 Cómo ejecutar

```bash
node index.js
```

---

## 💡 Uso de la librería

```javascript
const conversor = require("./lib/conversorVelocidad");

// Convertir de una unidad a otra
const resultado = conversor.convertir(100, "kph", "mph");
console.log(`100 km/h = ${resultado.toFixed(2)} mph`);

// Convertir a todas las unidades desde km/h
const conversiones = conversor.desdeKPH(120);
console.log(conversiones);
// { kph: 120, mph: 74.56, mps: 33.33, fps: 109.36, knots: 64.79 }
```

---

## 🎯 Características

✅ Sin dependencias externas  
✅ Código limpio y documentado  
✅ Manejo de errores  
✅ Completamente reutilizable  
✅ Conversiones precisas

---

## 📝 Requisitos

- Node.js (versión 12 o superior)
