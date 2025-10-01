# FILTER

Filtra registros de un archivo de intercambio basándose en múltiples criterios.

## Sintaxis

```bash
cardak filter [OPCIONES] <archivo_entrada> [archivo_salida]
```

![Ejemplo de uso del comando FILTER](/img/filter-1.png)

## Descripción

El comando `FILTER` permite seleccionar registros específicos de un archivo de intercambio usando condiciones complejas sobre campos de datos. Es una de las herramientas más poderosas para análisis y extracción de datos.

## Opciones de Filtrado

### Filtros por Campo Específico

#### `--bin <numero>`
Filtra por número BIN (primeros 6 dígitos).

**Ejemplo**:
```bash
cardak filter --bin 512345 archivo.ipm
```

#### `--pan <patron>`
Filtra por patrón de número de tarjeta.

**Ejemplo**:
```bash
cardak filter --pan "5123********1234" archivo.ipm
```

#### `--amount <monto>`
Filtra por monto exacto.

**Ejemplo**:
```bash
cardak filter --amount 150.00 archivo.ipm
```

#### `--amount-gt <monto>`
Filtra montos mayores que el especificado.

**Ejemplo**:
```bash
cardak filter --amount-gt 10000 archivo.ipm
```

#### `--amount-lt <monto>`
Filtra montos menores que el especificado.

**Ejemplo**:
```bash
cardak filter --amount-lt 100 archivo.ipm
```

#### `--currency <codigo>`
Filtra por código de moneda (ISO 4217).

**Ejemplo**:
```bash
cardak filter --currency 840 archivo.ipm  # USD
```

#### `--country <codigo>`
Filtra por código de país (ISO 3166).

**Ejemplo**:
```bash
cardak filter --country US archivo.ipm
```

#### `--date <fecha>`
Filtra por fecha específica (formato: YYYY-MM-DD).

**Ejemplo**:
```bash
cardak filter --date 2025-01-15 archivo.ipm
```

#### `--date-from <fecha>`
Filtra desde una fecha.

**Ejemplo**:
```bash
cardak filter --date-from 2025-01-01 archivo.ipm
```

#### `--date-to <fecha>`
Filtra hasta una fecha.

**Ejemplo**:
```bash
cardak filter --date-to 2025-01-31 archivo.ipm
```

#### `--record-type <tipo>`
Filtra por tipo de registro.

**Ejemplo**:
```bash
cardak filter --record-type "0240" archivo.ipm
```

### Filtros Personalizados

#### `--field <campo>`
Campo a evaluar.

#### `--value <valor>`
Valor a buscar.

**Ejemplo**:
```bash
cardak filter --field DE049 --value 840 archivo.ipm
```

#### `--condition <expresion>`
Expresión condicional compleja.

**Ejemplo**:
```bash
cardak filter --condition "DE004 > 100000 AND DE049 = 840" archivo.ipm
```

## Opciones de Salida

### `--output <archivo>` o `-o <archivo>`
Archivo de salida con registros filtrados.

**Ejemplo**:
```bash
cardak filter --bin 512345 -o filtrado.ipm archivo.ipm
```

### `--export <formato>`
Exporta directamente al formato especificado.

Valores posibles: `json`, `csv`, `xml`, `text`

**Ejemplo**:
```bash
cardak filter --bin 512345 --export csv -o resultado.csv archivo.ipm
```

### `--count`
Muestra solo el conteo de registros que coinciden.

**Ejemplo**:
```bash
cardak filter --bin 512345 --count archivo.ipm
```

### `--show-fields <campos>`
Muestra solo los campos especificados en la salida.

**Ejemplo**:
```bash
cardak filter --bin 512345 --show-fields "DE002,DE004,DE049" archivo.ipm
```

## Combinación de Filtros

Los filtros se pueden combinar para crear condiciones complejas. Todos los filtros se aplican con lógica AND.

**Ejemplo**:
```bash
cardak filter \
  --bin 512345 \
  --amount-gt 1000 \
  --currency 840 \
  --date-from 2025-01-01 \
  -o resultado.ipm \
  archivo.ipm
```

## Ejemplos de Uso

### Filtrar por BIN específico

```bash
cardak filter --bin 512345 --export csv -o bin_512345.csv archivo.ipm
```

### Filtrar transacciones grandes

```bash
cardak filter --amount-gt 10000 -o grandes.ipm archivo.ipm
```

### Filtrar por rango de fechas

```bash
cardak filter \
  --date-from 2025-01-01 \
  --date-to 2025-01-31 \
  -o enero.ipm \
  archivo.ipm
```

### Filtrar y contar

```bash
cardak filter --bin 512345 --count archivo.ipm
```

Salida:
```
Registros encontrados: 1,234
```

### Filtro complejo con múltiples condiciones

```bash
cardak filter \
  --bin 512345 \
  --amount-gt 1000 \
  --amount-lt 10000 \
  --currency 840 \
  --date-from 2025-01-01 \
  --export json \
  -o resultado.json \
  archivo.ipm
```

### Filtro con expresión personalizada

```bash
cardak filter \
  --condition "(DE004 > 100000 OR DE004 < 100) AND DE049 = 840" \
  -o extremos.ipm \
  archivo.ipm
```

### Filtrar y mostrar solo campos específicos

```bash
cardak filter \
  --bin 512345 \
  --show-fields "DE002,DE004,DE007,DE049" \
  --export text \
  archivo.ipm
```

### Filtrar por país y exportar

```bash
cardak filter \
  --country MX \
  --export csv \
  -o transacciones_mexico.csv \
  archivo.ipm
```

## Operadores en Condiciones

Cuando se usa `--condition`, se pueden usar los siguientes operadores:

### Operadores de Comparación
- `=`: Igual a
- `!=`: Diferente de
- `>`: Mayor que
- `<`: Menor que
- `>=`: Mayor o igual que
- `<=`: Menor o igual que

### Operadores Lógicos
- `AND`: Y lógico
- `OR`: O lógico
- `NOT`: Negación

### Operadores de Texto
- `LIKE`: Coincidencia de patrón
- `IN`: Valor en lista

**Ejemplos**:
```bash
# Múltiples BINs
cardak filter --condition "PDS0023 IN (512345, 512346, 512347)" archivo.ipm

# Patrón de texto
cardak filter --condition "DE002 LIKE '5123%'" archivo.ipm

# Condición compleja
cardak filter --condition "(DE004 > 10000 AND DE049 = 840) OR (DE004 > 5000 AND DE049 = 484)" archivo.ipm
```

## Notas

- Los filtros no modifican el archivo original
- El archivo de salida incluye header y trailer actualizados
- Los totales se recalculan automáticamente
- Las condiciones se evalúan de izquierda a derecha
- Se recomienda usar `--count` primero para verificar resultados
- Para archivos grandes, use filtros específicos para mejor rendimiento

## Ejemplos

![Ejemplo adicional del comando FILTER](/img/filter-2.png)

![Ejemplo adicional del comando FILTER](/img/filter-3.png)

![Ejemplo adicional del comando FILTER](/img/filter-4.png)

![Ejemplo adicional del comando FILTER](/img/filter-5.png)

![Ejemplo adicional del comando FILTER](/img/filter-6.png)

![Ejemplo adicional del comando FILTER](/img/filter-7.png)

![Ejemplo adicional del comando FILTER](/img/filter-8.png)

![Ejemplo adicional del comando FILTER](/img/filter-9.png)

![Ejemplo adicional del comando FILTER](/img/filter-10.png)

![Ejemplo adicional del comando FILTER](/img/filter-11.png)

![Ejemplo adicional del comando FILTER](/img/filter-12.png)

