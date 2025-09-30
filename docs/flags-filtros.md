# Flags y Filtros

CardAK proporciona un conjunto común de flags y opciones de filtrado que se pueden usar con múltiples comandos.

## Flags Globales

Estos flags están disponibles para todos los comandos de CardAK.

### `--help` o `-h`
Muestra ayuda sobre el comando.

```bash
cardak --help
cardak convert --help
```

### `--version` o `-V`
Muestra la versión de CardAK.

```bash
cardak --version
```

### `--verbose` o `-v`
Activa el modo verbose con información detallada.

```bash
cardak convert --verbose archivo.ipm salida.ipm
```

### `--quiet` o `-q`
Suprime la salida normal, solo muestra errores.

```bash
cardak validate --quiet archivo.ipm
```

### `--color <opcion>`
Controla el uso de colores en la salida.

Valores:
- `auto`: Detecta automáticamente (por defecto)
- `always`: Siempre usa colores
- `never`: No usa colores

```bash
cardak describe --color never archivo.ipm
```

### `--format <formato>`
Formato de salida (disponible en comandos que generan reportes).

```bash
cardak describe --format json archivo.ipm
cardak validate --format json archivo.ipm
```

## Opciones de Entrada/Salida

### `--input <archivo>` o `-i <archivo>`
Especifica el archivo de entrada (alternativa al argumento posicional).

```bash
cardak describe --input archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Especifica el archivo de salida.

```bash
cardak export -i archivo.ipm -o salida.json
```

### `--overwrite`
Sobrescribe archivos de salida existentes sin preguntar.

```bash
cardak convert --overwrite archivo.ipm salida.ipm
```

## Opciones de Formato

### `--encoding <codificacion>`
Especifica la codificación del archivo.

Valores:
- `ebcdic`: Codificación EBCDIC
- `ascii`: Codificación ASCII
- `auto`: Detección automática

```bash
cardak convert --encoding ebcdic archivo.ipm salida.ipm
```

### `--structure <estructura>`
Especifica la estructura del archivo.

Valores:
- `rdw`: Record Descriptor Word
- `block1014`: Bloques de 1014 bytes
- `flat`: Archivo plano
- `auto`: Detección automática

```bash
cardak convert --structure block1014 archivo.ipm salida.ipm
```

## Filtros Comunes

Estos filtros están disponibles en comandos como `filter`, `grep`, `delete`, `export`, etc.

### Filtros por Campos Específicos

#### `--bin <numero>`
Filtra por número BIN (primeros 6 dígitos del PAN).

```bash
cardak filter --bin 512345 archivo.ipm
```

#### `--pan <patron>`
Filtra por patrón de PAN.

```bash
cardak filter --pan "5123********1234" archivo.ipm
```

#### `--amount <monto>`
Filtra por monto exacto.

```bash
cardak filter --amount 150.00 archivo.ipm
```

#### `--amount-gt <monto>`
Filtra montos mayores que el especificado.

```bash
cardak filter --amount-gt 1000 archivo.ipm
```

#### `--amount-lt <monto>`
Filtra montos menores que el especificado.

```bash
cardak filter --amount-lt 100 archivo.ipm
```

#### `--amount-between <min> <max>`
Filtra montos en un rango.

```bash
cardak filter --amount-between 100 1000 archivo.ipm
```

#### `--currency <codigo>`
Filtra por código de moneda ISO 4217.

```bash
cardak filter --currency 840 archivo.ipm  # USD
cardak filter --currency 484 archivo.ipm  # MXN
```

#### `--country <codigo>`
Filtra por código de país ISO 3166.

```bash
cardak filter --country US archivo.ipm
cardak filter --country MX archivo.ipm
```

#### `--date <fecha>`
Filtra por fecha específica (formato: YYYY-MM-DD).

```bash
cardak filter --date 2025-01-15 archivo.ipm
```

#### `--date-from <fecha>`
Filtra desde una fecha.

```bash
cardak filter --date-from 2025-01-01 archivo.ipm
```

#### `--date-to <fecha>`
Filtra hasta una fecha.

```bash
cardak filter --date-to 2025-01-31 archivo.ipm
```

#### `--date-range <inicio> <fin>`
Filtra por rango de fechas.

```bash
cardak filter --date-range 2025-01-01 2025-01-31 archivo.ipm
```

### Filtros por Tipo de Registro

#### `--record-type <tipo>`
Filtra por tipo de registro.

```bash
cardak filter --record-type "0240" archivo.ipm  # Solo transacciones
cardak filter --record-type "0442" archivo.ipm  # Solo ajustes
```

#### `--exclude-type <tipo>`
Excluye un tipo de registro.

```bash
cardak filter --exclude-type "0740" archivo.ipm  # Excluir fees
```

### Filtros Personalizados

#### `--field <campo>`
Campo a evaluar en el filtro.

```bash
cardak filter --field DE049 --value 840 archivo.ipm
```

#### `--value <valor>`
Valor a buscar.

```bash
cardak filter --field DE024 --value 200 archivo.ipm
```

#### `--condition <expresion>`
Expresión condicional compleja.

```bash
cardak filter --condition "DE004 > 100000 AND DE049 = 840" archivo.ipm
```

## Operadores de Condiciones

Cuando se usa `--condition`, se pueden utilizar los siguientes operadores:

### Operadores de Comparación

- `=` o `==`: Igual a
- `!=` o `<>`: Diferente de
- `>`: Mayor que
- `<`: Menor que
- `>=`: Mayor o igual que
- `<=`: Menor o igual que

```bash
cardak filter --condition "DE004 >= 100000" archivo.ipm
```

### Operadores Lógicos

- `AND` o `&&`: Y lógico
- `OR` o `||`: O lógico
- `NOT` o `!`: Negación

```bash
cardak filter --condition "DE004 > 1000 AND DE049 = 840" archivo.ipm
cardak filter --condition "DE049 = 840 OR DE049 = 484" archivo.ipm
cardak filter --condition "NOT (DE024 = 200)" archivo.ipm
```

### Operadores de Texto

- `LIKE`: Coincidencia de patrón (% como wildcard)
- `IN`: Valor en lista
- `BETWEEN`: Valor entre dos valores

```bash
# LIKE
cardak filter --condition "DE002 LIKE '5123%'" archivo.ipm

# IN
cardak filter --condition "DE049 IN (840, 484, 978)" archivo.ipm

# BETWEEN
cardak filter --condition "DE004 BETWEEN 1000 AND 10000" archivo.ipm
```

## Opciones de Filtrado

### `--case-sensitive`
Búsqueda sensible a mayúsculas/minúsculas (por defecto).

```bash
cardak grep --case-sensitive --field PDS0023 "abc" archivo.ipm
```

### `--ignore-case` o `-i`
Búsqueda insensible a mayúsculas/minúsculas.

```bash
cardak grep -i --field PDS0023 "abc" archivo.ipm
```

### `--regex` o `-E`
Interpreta patrones como expresiones regulares.

```bash
cardak grep --regex --field DE002 "^5123.*" archivo.ipm
```

### `--invert-match` o `-v`
Invierte el resultado del filtro (muestra lo que NO coincide).

```bash
cardak filter -v --currency 840 archivo.ipm
```

## Opciones de Límite

### `--limit <numero>`
Limita el número de resultados.

```bash
cardak filter --bin 512345 --limit 100 archivo.ipm
```

### `--offset <numero>`
Omite los primeros N resultados.

```bash
cardak filter --bin 512345 --offset 100 --limit 100 archivo.ipm
```

### `--head <numero>`
Muestra solo los primeros N resultados.

```bash
cardak filter --bin 512345 --head 10 archivo.ipm
```

### `--tail <numero>`
Muestra solo los últimos N resultados.

```bash
cardak filter --bin 512345 --tail 10 archivo.ipm
```

## Opciones de Ordenamiento

### `--sort-by <campo>`
Ordena resultados por un campo.

```bash
cardak filter --bin 512345 --sort-by DE007 archivo.ipm
```

### `--sort-order <orden>`
Orden de clasificación.

Valores:
- `asc`: Ascendente (por defecto)
- `desc`: Descendente

```bash
cardak filter --bin 512345 --sort-by DE004 --sort-order desc archivo.ipm
```

## Ejemplos de Uso Combinado

### Filtro Complejo 1: Transacciones Grandes de un BIN

```bash
cardak filter \
  --bin 512345 \
  --amount-gt 10000 \
  --date-from 2025-01-01 \
  --sort-by DE004 \
  --sort-order desc \
  --export csv \
  -o grandes_512345.csv \
  archivo.ipm
```

### Filtro Complejo 2: Rango de Fechas y Múltiples Monedas

```bash
cardak filter \
  --date-range 2025-01-01 2025-01-31 \
  --condition "DE049 IN (840, 484, 978)" \
  --amount-gt 1000 \
  --sort-by DE007 \
  -o enero_multi_moneda.ipm \
  archivo.ipm
```

### Filtro Complejo 3: Exclusión con Múltiples Condiciones

```bash
cardak filter \
  --bin 512345 \
  --condition "DE004 > 100 AND DE004 < 100000" \
  --exclude-type "0740" \
  --currency 840 \
  --export json \
  -o filtrado_complejo.json \
  archivo.ipm
```

### Búsqueda con Regex

```bash
cardak grep \
  --field DE002 \
  --regex "^5123.*1234$" \
  -i \
  --export csv \
  -o resultado_regex.csv \
  archivo.ipm
```

## Códigos de Moneda Comunes

| Código | Moneda | País |
|--------|--------|------|
| 840 | USD | Estados Unidos |
| 484 | MXN | México |
| 978 | EUR | Zona Euro |
| 124 | CAD | Canadá |
| 826 | GBP | Reino Unido |
| 392 | JPY | Japón |
| 986 | BRL | Brasil |
| 032 | ARS | Argentina |
| 152 | CLP | Chile |
| 170 | COP | Colombia |

## Códigos de Tipo de Registro Comunes

| Código | Descripción |
|--------|-------------|
| 0000 | File Header |
| 0001 | File Trailer |
| 0010 | Batch Header |
| 0011 | Batch Trailer |
| 0240 | Transaction (Financial) |
| 0442 | Reversal/Adjustment |
| 0740 | Fee Collection |
| 0644 | Administrative Message |

## Campos DE (Data Elements) Comunes

| Campo | Descripción |
|-------|-------------|
| DE002 | Primary Account Number (PAN) |
| DE004 | Amount, Transaction |
| DE007 | Transmission Date/Time |
| DE011 | System Trace Audit Number (STAN) |
| DE012 | Local Transaction Time |
| DE013 | Local Transaction Date |
| DE019 | Acquiring Institution Country Code |
| DE022 | POS Entry Mode |
| DE024 | Function Code |
| DE025 | Message Reason Code |
| DE032 | Acquiring Institution ID |
| DE033 | Forwarding Institution ID |
| DE049 | Currency Code, Transaction |
| DE050 | Currency Code, Settlement |
| PDS0023 | Card Product BIN |

## Notas

- Los filtros se pueden combinar libremente
- Todos los filtros se aplican con lógica AND a menos que se use OR en `--condition`
- Use `--dry-run` cuando esté disponible para preview
- Los montos deben especificarse en la unidad menor (centavos para USD/MXN)
- Las fechas usan formato ISO 8601 (YYYY-MM-DD)
- Los códigos de moneda siguen ISO 4217
- Los códigos de país siguen ISO 3166
- Las expresiones regulares siguen sintaxis de Rust regex

## Ejemplo Visual

![Ejemplo de uso de flags y filtros](/img/flags-y-filtros-1.png)
