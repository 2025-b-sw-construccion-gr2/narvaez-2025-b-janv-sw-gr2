# 💰 Calculadora de Intereses

Aplicación de línea de comandos para calcular interés simple y compuesto.

![CI Pipeline](https://github.com/2025-b-sw-construccion-gr2/narvaez-2025-b-janv-sw-gr2/actions/workflows/ci.yml/badge.svg)

## 📖 Descripción

Esta calculadora permite calcular:

- **Interés Simple**: I = P × r × t
- **Interés Compuesto**: A = P(1 + r/n)^(nt)

## 🛠️ Tecnologías

| Herramienta | Propósito           |
| ----------- | ------------------- |
| Node.js 20+ | Runtime             |
| ESLint      | Análisis de código  |
| Prettier    | Formateo            |
| Jest        | Testing + Cobertura |

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- Node.js v20 o superior
- npm

### Instalación

```bash
git clone https://github.com/2025-b-sw-construccion-gr2/narvaez-2025-b-janv-sw-gr2.git
cd narvaez-2025-b-janv-sw-gr2/Examen_02
npm install
```

### Uso

```bash
# Interés Simple (capital, tasa, años)
node src/index.js simple 1000 0.05 2

# Output:
# 💰 Calculadora de Intereses
# ===========================
# 📊 Datos de entrada:
#    Capital inicial: $1000.00
#    Tasa anual:      5.00%
#    Tiempo:          2 año(s)
#
# 📈 Resultado (Interés Simple):
#    Fórmula: I = P × r × t
#    Interés generado: $100.00
#    Monto total:      $1100.00
```

## 🧪 Comandos de Desarrollo

| Comando              | Descripción                      |
| -------------------- | -------------------------------- |
| `npm run lint`       | Ejecutar ESLint                  |
| `npm run format`     | Verificar formato con Prettier   |
| `npm run format:fix` | Corregir formato automáticamente |
| `npm test`           | Ejecutar tests con cobertura     |
| `npm run build`      | Generar build de producción      |

## 🔄 Pipeline de CI/CD

Este proyecto usa **GitHub Actions** para integración continua.

### Flujo del Pipeline (en orden):

```
┌─────────┐    ┌──────────┐    ┌────────┐    ┌─────────┐
│  LINT   │ -> │  FORMAT  │ -> │  TEST  │ -> │  BUILD  │
│ ESLint  │    │ Prettier │    │  Jest  │    │  Copy   │
└─────────┘    └──────────┘    └────────┘    └─────────┘
```

1. **Lint**: Analiza el código con ESLint
2. **Format**: Verifica el estilo con Prettier
3. **Test**: Ejecuta pruebas unitarias y genera reporte de cobertura
4. **Build**: Genera el bundle de producción

### Triggers

- Push a `main`, `develop`, o ramas `feature/**`
- Pull Requests hacia `main` o `develop`

## 📸 Capturas de Ejecución

### Pipeline Exitoso

<!-- Agregar captura después de ejecutar pipeline -->

### Cobertura de Tests

<!-- Agregar captura después de ejecutar tests -->

## Pull Requests

- [ ]

## 📄 Licencia

MIT
