# IDENTIFY

Identifica automáticamente el formato y características de un archivo de intercambio.

## Sintaxis

```bash
cardak identify [OPCIONES] <archivo>
```

## Descripción

El comando `IDENTIFY` analiza un archivo de intercambio y detecta automáticamente sus características, incluyendo formato de codificación, estructura, versión IPM y otra información relevante. Es especialmente útil cuando se recibe un archivo sin documentación.

## Información Detectada

### Codificación
- **EBCDIC** o **ASCII**
- Conjunto de caracteres específico
- Tabla de codificación

### Estructura
- **RDW** (Record Descriptor Word)
- **Block 1014** (Bloques de 1014 bytes)
- **Flat** (Sin estructura adicional)
- Tamaño de bloque si aplica

### Versión IPM
- Versión del formato IPM
- Especificación aplicable
- Campos soportados

### Información de Header
- Tipo de archivo
- Fecha de creación
- Identificadores
- Parámetros de configuración

### Estadísticas Básicas
- Número total de registros
- Tipos de registros presentes
- Tamaño del archivo

## Opciones

### `--format <formato>`
Formato de salida de la información.

Valores posibles:
- `text`: Formato texto legible (por defecto)
- `json`: Formato JSON
- `brief`: Resumen breve

**Ejemplo**:
```bash
cardak identify --format json archivo.ipm
```

### `--detailed` o `-d`
Muestra información más detallada.

**Ejemplo**:
```bash
cardak identify --detailed archivo.ipm
```

### `--brief` o `-b`
Muestra solo información básica.

**Ejemplo**:
```bash
cardak identify --brief archivo.ipm
```

## Ejemplos de Uso

### Identificación básica

```bash
cardak identify archivo.ipm
```

![Ejemplo de salida del comando IDENTIFY](/img/identify-1.png)

Salida ejemplo:
```
=== Identificación de Archivo IPM ===

Archivo: archivo.ipm
Tamaño: 2,456,789 bytes

Codificación: ASCII
Estructura: Block 1014
Versión IPM: 1014 v1.5

Header detectado:
  Tipo: 0000 (File Header)
  Fecha: 2025-01-15
  File ID: ABC123456
  Sender: 123456
  Receiver: 789012

Estadísticas:
  Total registros: 5,234
  Tipos encontrados:
    - 0000 (Header): 1
    - 0240 (Transaction): 4,850
    - 0442 (Adjustment): 142
    - 0740 (Fee): 240
    - 0001 (Trailer): 1

Estado: ✓ Archivo válido y completo
```

### Identificación detallada

```bash
cardak identify --detailed archivo.ipm
```

Salida ejemplo:
```
=== Identificación Detallada de Archivo IPM ===

Archivo: archivo.ipm
Ruta completa: /path/to/archivo.ipm
Tamaño: 2,456,789 bytes
Fecha modificación: 2025-01-15 14:30:00

Codificación:
  Tipo: ASCII
  Charset: US-ASCII
  Orden de bytes: Big Endian

Estructura:
  Tipo: Block 1014
  Tamaño de bloque: 1014 bytes
  Bloques totales: 2,422
  Relleno: Espacios (0x20)

Versión IPM:
  Versión: 1014 v1.5
  Release: 2024-06
  Campos soportados: 128 data elements
  Especificación: MasterCard IPM Clearing Format

Header (Registro 0000):
  Offset: 0
  Longitud: 144 bytes
  Tipo: File Header
  Fecha creación: 2025-01-15
  File ID: ABC123456
  Sender ID: 123456
  Receiver ID: 789012
  Test/Production: Production
  Currency: 840 (USD)

Registros:
  Total: 5,234
  Tipos:
    0000 (Header): 1 registro
    0240 (Transaction): 4,850 registros
    0442 (Adjustment): 142 registros
    0740 (Fee): 240 registros
    0001 (Trailer): 1 registro

Trailer (Registro 0001):
  Offset: 2,456,645
  Longitud: 144 bytes
  Tipo: File Trailer
  Total registros: 5,234
  Total transacciones: 4,850
  Total monto: $1,245,678.90
  Hash: 0x1234ABCD (válido)

Validación:
  ✓ Estructura válida
  ✓ Header presente
  ✓ Trailer presente
  ✓ Totales coinciden
  ✓ No hay registros corruptos

Estado: ✓ Archivo válido y completo
```

### Identificación breve

```bash
cardak identify --brief archivo.ipm
```

Salida ejemplo:
```
archivo.ipm: ASCII Block1014 IPM-v1.5 5234-records VALID
```

### Salida en JSON

```bash
cardak identify --format json archivo.ipm
```

Salida ejemplo:
```json
{
  "file": "archivo.ipm",
  "size": 2456789,
  "encoding": {
    "type": "ascii",
    "charset": "US-ASCII",
    "byte_order": "big_endian"
  },
  "structure": {
    "type": "block1014",
    "block_size": 1014,
    "total_blocks": 2422
  },
  "ipm_version": {
    "version": "1014 v1.5",
    "release": "2024-06"
  },
  "header": {
    "record_type": "0000",
    "date": "2025-01-15",
    "file_id": "ABC123456",
    "sender": "123456",
    "receiver": "789012"
  },
  "statistics": {
    "total_records": 5234,
    "record_types": {
      "0000": 1,
      "0240": 4850,
      "0442": 142,
      "0740": 240,
      "0001": 1
    }
  },
  "trailer": {
    "record_type": "0001",
    "total_records": 5234,
    "total_amount": 124567890,
    "hash_valid": true
  },
  "validation": {
    "is_valid": true,
    "has_header": true,
    "has_trailer": true,
    "totals_match": true
  }
}
```

### Identificar múltiples archivos

```bash
for archivo in *.ipm; do
  echo "=== $archivo ==="
  cardak identify --brief "$archivo"
  echo
done
```

### Identificar y guardar reporte

```bash
cardak identify --detailed --format json archivo.ipm > identificacion.json
```

## Casos de Uso

### 1. Archivo Desconocido

Cuando se recibe un archivo sin documentación:

```bash
# Identificar el archivo
cardak identify archivo_desconocido.dat

# Si es válido, convertir al formato deseado
cardak convert --from auto --to ascii archivo_desconocido.dat convertido.ipm
```

### 2. Validación Rápida

Verificar rápidamente si un archivo es válido:

```bash
cardak identify --brief archivo.ipm
```

### 3. Automatización

En scripts para procesamiento automático:

```bash
#!/bin/bash
for archivo in *.dat; do
  # Identificar formato
  formato=$(cardak identify --brief "$archivo")

  if [[ $formato == *"VALID"* ]]; then
    echo "✓ $archivo es válido"
    # Procesar el archivo...
  else
    echo "✗ $archivo no es válido"
  fi
done
```

## Notas

- El comando solo lee el archivo, no lo modifica
- La identificación es rápida, no carga todo el archivo en memoria
- Si el archivo está corrupto, se informa en la salida
- La detección automática tiene alta precisión pero no es infalible
- Para archivos muy corruptos, puede no detectar el formato correctamente