# Análisis de Código Limpio - Proyecto Python 30 Days

**Estudiante:** Aleks  
**Fecha:** 14 de noviembre de 2025  
**Archivos Analizados:** `day-3.py` (Operadores) y `day_4.py` (Strings)

---

## Introducción

Este documento presenta un análisis detallado de dos archivos del proyecto Python 30 Days, evaluando su calidad desde la perspectiva de los principios de código limpio. Se examinan aspectos como la claridad de nombres, la estructura de funciones, la organización del código y la presencia de malas prácticas. El objetivo es identificar áreas de mejora y proponer soluciones concretas que aumenten la legibilidad, mantenibilidad y escalabilidad del código.

---

## Acceso Rápido

| Archivo | Descripción | Líneas | Ir a Sección |
|---------|-------------|--------|-------------|
| `day-3.py` | Operadores aritméticos y cálculos básicos | ~120 | [Ver Análisis](#parte-1-análisis-de-day-3py-operadores) |
| `day_4.py` | Operaciones con strings en Python | ~250 | [Ver Análisis](#parte-2-análisis-de-day_4py-strings) |

---

## PARTE 1: ANÁLISIS DE `day-3.py` (Operadores)

### Descripción del Archivo
Archivo de demostración de operadores aritméticos, comparaciones y operadores lógicos en Python. Incluye ejemplos de cálculos básicos como área de círculo, rectángulo y peso.

- **Líneas de código:** ~120 líneas
- **Funciones:** 0 (código procedural puro)
- **Ubicación:** `DiasOficiales/30-Days-Of-Python/03_Day_Operators/day-3.py`

---

### Análisis según Principios de Código Limpio

#### 1. **¿Los nombres son claros?**

**Problemas detectados:**
- Variables genéricas de una sola letra: `a`, `b` no comunican su propósito
- Variables reutilizadas para diferentes contextos: `total`, `diff`, `product` se declaran múltiples veces
- Nombres ambiguos: `num_one`, `num_two` (¿números para qué propósito?)
- Variables sin contexto semántico: `div` en lugar de `division`

---

#### 2. **¿Las funciones son cortas y hacen una sola cosa?**

**Problemas detectados:**
- **No existen funciones en el archivo**
- Todo el código está en el scope global (120 líneas procedurales)
- Lógica de cálculo sin encapsular
- Múltiples responsabilidades mezcladas: operaciones aritméticas, comparaciones, operadores lógicos, cálculos geométricos

---

#### 3. **¿Hay comentarios útiles o innecesarios?**

**Comentarios innecesarios detectados:**
```python
print('Addition: ', 1 + 2)          # Se explica solo
print('Subtraction: ', 2 - 1)       # Redundante
print('Multiplication: ', 2 * 3)    # Obvio por el label
print('a + b = ', total)            # El label ya lo dice
```

**Principio violado:** "El código limpio no necesita comentarios para explicar qué hace"

- Repiten lo obvio del código
- Generan ruido visual innecesario
- El código debería explicarse a sí mismo mediante nombres descriptivos
- Los labels en los prints ya documentan la operación

---

#### 4. **¿Hay olores de código (duplicación, funciones largas, variables ambiguas)?**

**Code Smell #1: Duplicación masiva**
- Mismo patrón repetido 3 veces para operaciones aritméticas con diferentes variables (`a/b`, `num_one/num_two`, cálculos específicos)
- Cada bloque repite: declaración de variables → operaciones → prints

**Code Smell #2: Variables mágicas**
- Número `3.14` hardcodeado para PI (debería ser constante)
- Gravedad `9.81` hardcodeada (debería ser constante con unidades)
- No hay constantes definidas en mayúsculas

**Code Smell #3: Script monolítico**
- 120+ líneas sin estructura organizativa
- Mezcla operaciones aritméticas, comparaciones, lógica booleana y cálculos físicos
- Imposible navegar o encontrar secciones específicas

**Code Smell #4: Falta de validación**
- Cálculos sin validar inputs (división por cero posible)
- Sin manejo de errores

---

#### 5. **¿Cómo está organizada la estructura?**

**Estructura actual:**
```
[Operaciones básicas] → [Variables a/b] → [Operaciones con a/b] → 
[Variables num_one/num_two] → [Operaciones] → [Cálculos geométricos] → 
[Comparaciones] → [Operadores booleanos] → [Operadores lógicos]
```

**Problemas:**
- Código completamente procedural sin organización modular
- Sin separación lógica entre diferentes tipos de operaciones
- Conceptos similares repetidos en diferentes secciones
- No hay punto de entrada definido (`if __name__ == "__main__"`)
- Imposible reutilizar cálculos específicos (área, peso, etc.)

---

## PARTE 2: ANÁLISIS DE `day_4.py` (Strings)

### Descripción del Archivo
Archivo de demostración de operaciones con strings en Python. Incluye concatenación, slicing, métodos de strings y escape sequences.

- **Líneas de código:** ~250 líneas
- **Funciones:** 0 (código procedural puro)
- **Ubicación:** `DiasOficiales/30-Days-Of-Python/04_Day_Strings/day_4.py`

---

### Análisis según Principios de Código Limpio

#### 1. **¿Los nombres son claros?**

**Problemas detectados:**

**Variables genéricas sin contexto:**
  - `letter`, `sentence`, `challenge` no comunican su propósito pedagógico
  - Variables reutilizadas con diferentes valores: `challenge` se redefine ~20 veces
  - `a, b, c, d, e, f` para desempaquetar caracteres (demasiado genéricas)

**Inconsistencia en naming:**
  - `first_name`, `last_name` (snake_case) vs `multiline_string` (compuesto)
  - `web_tech` (singular) cuando contiene array plural

---

#### 2. **¿Las funciones son cortas y hacen una sola cosa?**

**Problemas detectados:**

  - **No existen funciones en todo el archivo (250+ líneas procedurales)**
  - Todo el código está en scope global sin encapsulación
  - Mezcla demostraciones de: concatenación, unpacking, indexing, slicing, escape sequences, y ~30 métodos de strings
  - Imposible ejecutar ejemplos específicos de forma aislada

---

#### 3. **¿Hay comentarios útiles o innecesarios?**

**Comentarios redundantes detectados:**

```python
print(letter)               # P  ← Repite lo obvio
print(len(letter))          # 1  ← Se ve en output
multiline_string = '''...'''  # Sin explicar POR QUÉ usar triple quotes
print('Day 1\t3\t5')         # Sin explicar el propósito de tabs
```

**Problemas:**

**Comentarios inútiles:**
  - `# P`, `# y`, `# t` solo repiten el output sin explicar concepto
  - `# Single line comment` es obvio por la sintaxis
  - `# Another way of doing the same thing` sin explicar CUÁNDO usarlo

**Falta documentación importante:**
  - Sin explicar diferencias entre `'` y `"` en strings
  - Sin aclarar cuándo usar raw strings (`r''`)
  - No explica propósito de cada método de string

---

#### 4. **¿Hay olores de código (duplicación, funciones largas, variables ambiguas)?**

**Code Smell #1: Script monolítico de 250+ líneas**
- Sin funciones ni estructura organizativa
- Imposible navegar o encontrar secciones específicas
- Mezcla decenas de conceptos sin separación clara
- Difícil usar como referencia educativa

**Code Smell #2: Reutilización masiva de variable `challenge`**
- Variable `challenge = 'thirty days of python'` se redefine 20+ veces
- Cada ejemplo sobrescribe el anterior
- Difícil ver qué valor tiene `challenge` en cada momento
- Anti-patrón: usar misma variable para ejemplos no relacionados

**Code Smell #3: Código copy-paste sin abstracción**
```python
print(challenge.count('y'))     # 3
print(challenge.count('y', 7, 14)) # 1
print(challenge.count('th'))    # 2
# ↑ Repetido para ~30 métodos diferentes sin abstracción
```

**Code Smell #4: Prints hardcodeados sin estructura**
- 100+ statements `print()` directos sin organización
- Sin función helper para mostrar ejemplos consistentemente
- Formato inconsistente de output
- Difícil distinguir input vs output vs concepto

**Code Smell #5: Magic strings sin constantes**
- String `'thirty days of python'` repetido 20+ veces
- Strings de ejemplo hardcodeadas sin CONSTANTS
- Si se quiere cambiar ejemplo, hay que editar múltiples lugares

---

#### 5. **¿Cómo está organizada la estructura?**

**Estructura actual:**
```
[Comentarios básicos] → [Strings literales] → [Concatenación] → 
[Unpacking] → [Indexing] → [Slicing] → [Skip slicing] → 
[Escape sequences] → [30+ métodos de strings sin agrupación]
```

**Problemas:**

**Falta de organización lógica:**
  - Los 30+ métodos de strings están mezclados sin categorización
  - No separa métodos de búsqueda, transformación, validación
  - `capitalize()`, `count()`, `endswith()` aparecen sin agrupación conceptual

**Sin puntos de entrada claros:**
  - No hay función `main()` ni ejemplos ejecutables por separado
  - Imposible ejecutar solo "ejemplos de slicing" o "métodos de búsqueda"

**Falta estructura pedagógica:**
  - No agrupa conceptos básicos → intermedios → avanzados
  - Mezcla operaciones simples con métodos complejos

---

## MEJORAS PROPUESTAS Y JUSTIFICACIÓN

### Mejoras para `day-3.py` (Operadores)

| N° | Mejora | Descripción | Justificación |
|----|--------|-------------|---------------|
| **1** | **Encapsular en funciones** | Crear funciones para cada tipo de operación: `demostrar_operaciones_aritmeticas()`, `calcular_area_circulo(radio)`, `calcular_peso(masa)`. Agrupar operaciones relacionadas. | Permite reutilización, testing individual, y mejora organización. Cada función tiene responsabilidad única. Facilita mantenimiento. |
| **2** | **Definir constantes** | Declarar `PI = 3.14159` y `GRAVEDAD = 9.81` como constantes en mayúsculas al inicio del archivo. | Elimina números mágicos. Facilita actualización de valores. Cumple con PEP 8. Mejora legibilidad y mantenibilidad. |
| **3** | **Eliminar código duplicado** | Crear función genérica `mostrar_operaciones(num_a, num_b)` que realice y muestre todas las operaciones. Usar una sola vez en lugar de repetir 3 veces. | Aplica principio DRY. Un solo lugar para modificar. Reduce de 30+ líneas a 10 líneas. Mejora mantenibilidad drásticamente. |

### Mejoras para `day_4.py` (Strings)

| N° | Mejora | Descripción | Justificación |
|----|--------|-------------|---------------|
| **1** | **Organizar en funciones por categoría** | Crear funciones: `demo_string_basics()`, `demo_string_methods_search()`, `demo_string_methods_transform()`, `demo_string_methods_validation()`. Cada función agrupa conceptos relacionados. | Mejora navegabilidad y comprensión. Permite ejecutar ejemplos específicos. Facilita uso como referencia educativa. Aplica SRP. |
| **2** | **Crear helper para demos consistentes** | Función `mostrar_ejemplo(operacion, codigo, resultado, explicacion)` que formatea outputs de manera uniforme con código, resultado y explicación del concepto. | Elimina duplicación de 100+ prints. Output consistente y profesional. Facilita mantenimiento. Un solo lugar para cambiar formato. |
| **3** | **Definir constantes para ejemplos** | Declarar `EJEMPLO_BASICO = 'thirty days of python'`, `EJEMPLO_NOMBRE = 'Asabeneh'` como constantes. Reutilizar en todos los ejemplos. | Elimina magic strings. Cambiar ejemplo en un solo lugar. Mejora consistencia. Facilita traducción o personalización. |

---


### CÓDIGO MEJORADO DE `day-3.py`

```python
"""
Módulo de demostración de operadores aritméticos y cálculos básicos.
Incluye funciones para operaciones matemáticas, cálculos geométricos y físicos.
"""

from typing import Dict, Tuple

# Constantes
PI = 3.14159
GRAVEDAD = 9.81  # m/s²


class CalculadoraAritmetica:
    """Realiza y muestra operaciones aritméticas básicas."""
    
    @staticmethod
    def calcular_operaciones(operando_1: float, operando_2: float) -> Dict[str, float]:
        """
        Calcula todas las operaciones aritméticas básicas.
        
        Args:
            operando_1: Primer número
            operando_2: Segundo número
            
        Returns:
            Diccionario con resultados de todas las operaciones
            
        Example:
            >>> CalculadoraAritmetica.calcular_operaciones(10, 5)
            {'suma': 15, 'resta': 5, 'multiplicacion': 50, ...}
        """
        return {
            'suma': operando_1 + operando_2,
            'resta': operando_1 - operando_2,
            'multiplicacion': operando_1 * operando_2,
            'division': operando_1 / operando_2 if operando_2 != 0 else float('inf'),
            'modulo': operando_1 % operando_2 if operando_2 != 0 else None,
            'division_entera': operando_1 // operando_2 if operando_2 != 0 else None,
            'exponente': operando_1 ** operando_2
        }
    
    @staticmethod
    def mostrar_operaciones(operando_1: float, operando_2: float) -> None:
        """
        Calcula y muestra todas las operaciones aritméticas.
        
        Args:
            operando_1: Primer número
            operando_2: Segundo número
        """
        resultados = CalculadoraAritmetica.calcular_operaciones(operando_1, operando_2)
        
        print(f"\nOperaciones con {operando_1} y {operando_2}:")
        print(f"  Suma: {resultados['suma']}")
        print(f"  Resta: {resultados['resta']}")
        print(f"  Multiplicación: {resultados['multiplicacion']}")
        print(f"  División: {resultados['division']:.2f}")
        print(f"  Módulo: {resultados['modulo']}")
        print(f"  División entera: {resultados['division_entera']}")
        print(f"  Exponente: {resultados['exponente']}")


class CalculadoraGeometrica:
    """Realiza cálculos geométricos."""
    
    @staticmethod
    def calcular_area_circulo(radio: float) -> float:
        """
        Calcula el área de un círculo.
        
        Args:
            radio: Radio del círculo
            
        Returns:
            Área del círculo
            
        Raises:
            ValueError: Si el radio es negativo
        """
        if radio < 0:
            raise ValueError("El radio no puede ser negativo")
        return PI * radio ** 2
    
    @staticmethod
    def calcular_area_rectangulo(largo: float, ancho: float) -> float:
        """
        Calcula el área de un rectángulo.
        
        Args:
            largo: Largo del rectángulo
            ancho: Ancho del rectángulo
            
        Returns:
            Área del rectángulo
            
        Raises:
            ValueError: Si largo o ancho son negativos
        """
        if largo < 0 or ancho < 0:
            raise ValueError("Las dimensiones no pueden ser negativas")
        return largo * ancho


class CalculadoraFisica:
    """Realiza cálculos físicos."""
    
    @staticmethod
    def calcular_peso(masa: float, gravedad: float = GRAVEDAD) -> Tuple[float, str]:
        """
        Calcula el peso de un objeto.
        
        Args:
            masa: Masa del objeto en kg
            gravedad: Aceleración gravitacional (por defecto gravedad terrestre)
            
        Returns:
            Tupla (peso, unidad)
            
        Raises:
            ValueError: Si la masa es negativa
        """
        if masa < 0:
            raise ValueError("La masa no puede ser negativa")
        peso = masa * gravedad
        return peso, "N"


def ejecutar_demostracion() -> None:
    """Función principal que ejecuta todas las demostraciones."""
    print("="*60)
    print("DEMOSTRACIÓN DE OPERADORES Y CÁLCULOS")
    print("="*60)
    
    # Demostración de operaciones aritméticas
    print("\n1. OPERACIONES ARITMÉTICAS:")
    CalculadoraAritmetica.mostrar_operaciones(10, 3)
    
    # Demostración de cálculos geométricos
    print("\n2. CÁLCULOS GEOMÉTRICOS:")
    try:
        area_circulo = CalculadoraGeometrica.calcular_area_circulo(10)
        print(f"  Área de círculo (radio=10): {area_circulo:.2f} unidades²")
        
        area_rectangulo = CalculadoraGeometrica.calcular_area_rectangulo(10, 20)
        print(f"  Área de rectángulo (10x20): {area_rectangulo:.2f} unidades²")
    except ValueError as error:
        print(f"  ❌ Error: {error}")
    
    # Demostración de cálculos físicos
    print("\n3. CÁLCULOS FÍSICOS:")
    try:
        peso, unidad = CalculadoraFisica.calcular_peso(75)
        print(f"  Peso de objeto (masa=75kg): {peso:.2f} {unidad}")
    except ValueError as error:
        print(f"  ❌ Error: {error}")


if __name__ == "__main__":
    ejecutar_demostracion()
```


### CÓDIGO MEJORADO DE `day_4.py`

```python
"""
Módulo de demostración de operaciones con Strings en Python.

Este módulo proporciona ejemplos organizados de manipulación de strings,
incluyendo concatenación, slicing, métodos de búsqueda, transformación
y validación.

Author: Tutorial 30 Days of Python
Version: 2.0 (Refactorizado)
"""

from typing import List, Tuple


# ============ CONSTANTES ============
EJEMPLO_BASICO = 'thirty days of python'
EJEMPLO_NOMBRE_COMPLETO = ('Asabeneh', 'Yetayeh')
EJEMPLO_MULTILINE = '''I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.'''


# ============ HELPER FUNCTIONS ============

def mostrar_ejemplo(titulo: str, codigo: str, resultado: any, explicacion: str = "") -> None:
    """
    Muestra un ejemplo de forma consistente y profesional.
    
    Args:
        titulo: Título del ejemplo
        codigo: Código ejecutado (string)
        resultado: Resultado de la operación
        explicacion: Explicación opcional del concepto
    """
    print(f"\n{'='*60}")
    print(f"📌 {titulo}")
    print(f"{'='*60}")
    print(f"Código: {codigo}")
    print(f"Resultado: {resultado}")
    if explicacion:
        print(f"💡 {explicacion}")


# ============ DEMOSTRACIONES CATEGORIZADAS ============

def demo_string_basics() -> None:
    """Demuestra conceptos básicos de strings: creación, longitud, multiline."""
    print("\n" + "="*80)
    print("SECCIÓN 1: CONCEPTOS BÁSICOS DE STRINGS")
    print("="*80)
    
    # String de un solo carácter
    letter = 'P'
    mostrar_ejemplo(
        "String de un carácter",
        "letter = 'P'",
        f"'{letter}' (longitud: {len(letter)})",
        "Los strings pueden ser de un solo carácter"
    )
    
    # String con comillas simples/dobles
    greeting = 'Hello, World!'
    mostrar_ejemplo(
        "String con comillas",
        "greeting = 'Hello, World!'",
        f"'{greeting}' (longitud: {len(greeting)})",
        "Se pueden usar comillas simples o dobles indistintamente"
    )
    
    # Multiline string
    mostrar_ejemplo(
        "String multilínea (triple quotes)",
        "multiline_string = '''...'''",
        EJEMPLO_MULTILINE,
        "Triple quotes permiten strings de múltiples líneas"
    )


def demo_string_concatenation() -> None:
    """Demuestra concatenación y operaciones de combinación."""
    print("\n" + "="*80)
    print("SECCIÓN 2: CONCATENACIÓN DE STRINGS")
    print("="*80)
    
    first_name, last_name = EJEMPLO_NOMBRE_COMPLETO
    space = ' '
    full_name = first_name + space + last_name
    
    mostrar_ejemplo(
        "Concatenación con operador +",
        f"'{first_name}' + ' ' + '{last_name}'",
        full_name,
        "El operador + une strings"
    )
    
    mostrar_ejemplo(
        "Comparación de longitudes",
        f"len('{first_name}') > len('{last_name}')",
        len(first_name) > len(last_name),
        "Podemos comparar longitudes de strings"
    )


def demo_string_indexing_slicing() -> None:
    """Demuestra indexing, slicing y unpacking."""
    print("\n" + "="*80)
    print("SECCIÓN 3: INDEXING Y SLICING")
    print("="*80)
    
    language = 'Python'
    
    # Unpacking
    a, b, c, d, e, f = language
    mostrar_ejemplo(
        "Unpacking de caracteres",
        "a, b, c, d, e, f = 'Python'",
        f"a={a}, b={b}, c={c}, d={d}, e={e}, f={f}",
        "Asigna cada carácter a una variable"
    )
    
    # Indexing positivo
    mostrar_ejemplo(
        "Acceso por índice positivo",
        "language[0]",
        language[0],
        "Los índices comienzan en 0"
    )
    
    # Indexing negativo
    mostrar_ejemplo(
        "Acceso por índice negativo",
        "language[-1]",
        language[-1],
        "Índices negativos acceden desde el final"
    )
    
    # Slicing
    mostrar_ejemplo(
        "Slicing básico",
        "language[0:3]",
        language[0:3],
        "Extrae substring desde índice inicial hasta final-1"
    )
    
    mostrar_ejemplo(
        "Slicing con skip",
        "language[0:6:2]",
        language[0:6:2],
        "Tercer parámetro indica paso (skip characters)"
    )


def demo_string_methods_search() -> None:
    """Demuestra métodos de búsqueda y conteo."""
    print("\n" + "="*80)
    print("SECCIÓN 4: MÉTODOS DE BÚSQUEDA Y CONTEO")
    print("="*80)
    
    # count()
    mostrar_ejemplo(
        "count(): Contar ocurrencias",
        f"'{EJEMPLO_BASICO}'.count('y')",
        EJEMPLO_BASICO.count('y'),
        "Cuenta cuántas veces aparece una substring"
    )
    
    # find()
    mostrar_ejemplo(
        "find(): Encontrar posición",
        f"'{EJEMPLO_BASICO}'.find('th')",
        EJEMPLO_BASICO.find('th'),
        "Retorna índice de primera ocurrencia (-1 si no existe)"
    )
    
    # startswith() / endswith()
    mostrar_ejemplo(
        "startswith() / endswith()",
        f"'{EJEMPLO_BASICO}'.endswith('on')",
        EJEMPLO_BASICO.endswith('on'),
        "Verifica si string comienza/termina con substring"
    )


def demo_string_methods_transform() -> None:
    """Demuestra métodos de transformación."""
    print("\n" + "="*80)
    print("SECCIÓN 5: MÉTODOS DE TRANSFORMACIÓN")
    print("="*80)
    
    # capitalize()
    mostrar_ejemplo(
        "capitalize(): Primera letra mayúscula",
        f"'{EJEMPLO_BASICO}'.capitalize()",
        EJEMPLO_BASICO.capitalize(),
        "Convierte primer carácter a mayúscula"
    )
    
    # upper() / lower()
    mostrar_ejemplo(
        "upper() / lower(): Cambiar case",
        f"'{EJEMPLO_BASICO}'.upper()",
        EJEMPLO_BASICO.upper(),
        "Convierte todo a mayúsculas/minúsculas"
    )
    
    # replace()
    mostrar_ejemplo(
        "replace(): Reemplazar substring",
        f"'{EJEMPLO_BASICO}'.replace('python', 'coding')",
        EJEMPLO_BASICO.replace('python', 'coding'),
        "Reemplaza todas las ocurrencias de una substring"
    )
    
    # split()
    mostrar_ejemplo(
        "split(): Dividir en lista",
        f"'{EJEMPLO_BASICO}'.split()",
        EJEMPLO_BASICO.split(),
        "Divide string en lista de palabras"
    )
    
    # join()
    web_tech = ['HTML', 'CSS', 'JavaScript', 'React']
    mostrar_ejemplo(
        "join(): Unir lista en string",
        "'#, '.join(['HTML', 'CSS', 'JavaScript', 'React'])",
        '#, '.join(web_tech),
        "Une elementos de lista con separador"
    )


def demo_string_methods_validation() -> None:
    """Demuestra métodos de validación."""
    print("\n" + "="*80)
    print("SECCIÓN 6: MÉTODOS DE VALIDACIÓN")
    print("="*80)
    
    # isalpha()
    mostrar_ejemplo(
        "isalpha(): ¿Solo letras?",
        "'Python'.isalpha()",
        'Python'.isalpha(),
        "True si todos los caracteres son alfabéticos"
    )
    
    # isdigit()
    mostrar_ejemplo(
        "isdigit(): ¿Solo dígitos?",
        "'123'.isdigit()",
        '123'.isdigit(),
        "True si todos los caracteres son dígitos"
    )
    
    # isalnum()
    mostrar_ejemplo(
        "isalnum(): ¿Alfanumérico?",
        "'Python3'.isalnum()",
        'Python3'.isalnum(),
        "True si contiene solo letras y/o números"
    )
    
    # islower() / isupper()
    mostrar_ejemplo(
        "islower(): ¿Todo minúsculas?",
        f"'{EJEMPLO_BASICO}'.islower()",
        EJEMPLO_BASICO.islower(),
        "True si todas las letras están en minúsculas"
    )


def demo_string_formatting() -> None:
    """Demuestra formateo de strings."""
    print("\n" + "="*80)
    print("SECCIÓN 7: FORMATEO DE STRINGS")
    print("="*80)
    
    first_name, last_name = EJEMPLO_NOMBRE_COMPLETO
    job = 'teacher'
    country = 'Finland'
    
    # .format()
    sentence = 'I am {} {}. I am a {}. I live in {}.'.format(
        first_name, last_name, job, country
    )
    mostrar_ejemplo(
        "format(): Formateo posicional",
        "string.format(var1, var2, ...)",
        sentence,
        "Inserta variables en placeholders {}"
    )
    
    # f-strings (más moderno)
    sentence_fstring = f'I am {first_name} {last_name}. I am a {job}. I live in {country}.'
    mostrar_ejemplo(
        "f-strings: Formateo moderno",
        "f'I am {first_name} {last_name}...'",
        sentence_fstring,
        "Sintaxis más legible (Python 3.6+)"
    )


# ============ FUNCIÓN PRINCIPAL ============

def main() -> None:
    """Ejecuta todas las demostraciones de forma organizada."""
    print("\n" + "🐍"*40)
    print("TUTORIAL COMPLETO: OPERACIONES CON STRINGS EN PYTHON")
    print("🐍"*40)
    
    demo_string_basics()
    demo_string_concatenation()
    demo_string_indexing_slicing()
    demo_string_methods_search()
    demo_string_methods_transform()
    demo_string_methods_validation()
    demo_string_formatting()
    
    print("\n" + "="*80)
    print("TUTORIAL COMPLETADO")
    print("="*80)


if __name__ == "__main__":
    main()
```

---

## Conclusión

El análisis de los archivos `day-3.py` y `day_4.py` revela múltiples oportunidades de mejora desde la perspectiva del código limpio. Ambos archivos presentan patrones comunes de código procedural sin estructura, variables con nombres poco descriptivos, duplicación de lógica y falta de encapsulación. Las mejoras propuestas transforman el código en soluciones modulares, reutilizables y mantenibles que siguen los principios de diseño SOLID y las mejores prácticas de programación. La implementación de estas mejoras no solo facilita el mantenimiento futuro, sino que también convierte estos archivos en recursos educativos más efectivos y profesionales.




