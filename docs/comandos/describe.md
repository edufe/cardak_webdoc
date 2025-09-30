# DESCRIBE

Proporciona información detallada y estadísticas sobre un archivo de intercambio.

## Sintaxis

```bash
cardak describe [OPCIONES] <archivo>
```

## Descripción

El comando `DESCRIBE` analiza un archivo de intercambio y muestra información detallada sobre su contenido, incluyendo:

- Información del header
- Número total de registros por tipo
- Contadores de transacciones
- Totales monetarios
- Información del trailer
- Estadísticas generales

## Opciones

### `--format <formato>`
Formato de salida de la información.

Valores posibles:
- `text`: Formato texto legible (por defecto)
- `json`: Formato JSON
- `csv`: Formato CSV

**Ejemplo**:
```bash
cardak describe --format json archivo.ipm
```

### `--detailed` o `-d`
Muestra información más detallada.

**Ejemplo**:
```bash
cardak describe --detailed archivo.ipm
```

### `--summary`
Muestra solo un resumen breve.

**Ejemplo**:
```bash
cardak describe --summary archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Guarda la descripción en un archivo.

**Ejemplo**:
```bash
cardak describe --format json -o descripcion.json archivo.ipm
```

## Información Mostrada

### Header
- Tipo de registro
- Fecha de creación
- Identificadores de archivo
- Parámetros de configuración

### Estadísticas de Registros
- Total de registros por tipo
- Número de transacciones
- Registros de ajuste
- Registros de fee

### Totales Monetarios
- Suma total de montos
- Totales por tipo de transacción
- Totales por moneda

### Trailer
- Contadores de control
- Totales de validación
- Hash de verificación

### Información General
- Tamaño del archivo
- Formato detectado
- Codificación
- Estructura

## Ejemplos de Uso

### Descripción básica

```bash
cardak describe archivo.ipm
```

Salida ejemplo:
```
=== Archivo de Intercambio IPM ===

Información del Header:
  Tipo: 0000 (Header)
  Fecha: 2025-01-15
  Archivo ID: ABC123
  Formato: ASCII Block 1014

Estadísticas:
  Total de registros: 5,234
  Transacciones (0240): 4,850
  Ajustes (0442): 142
  Fees (0740): 240

Totales Monetarios:
  Total general: $1,245,678.90
  Transacciones: $1,200,000.00
  Ajustes: $45,678.90

Información del Trailer:
  Tipo: 0001 (Trailer)
  Total registros: 5,234
  Hash: OK
```

### Descripción detallada en JSON

```bash
cardak describe --detailed --format json archivo.ipm -o reporte.json
```

### Resumen rápido

```bash
cardak describe --summary archivo.ipm
```

Salida ejemplo:
```
Archivo: archivo.ipm
Registros: 5,234
Transacciones: 4,850
Total: $1,245,678.90
```

### Descripción para múltiples archivos

```bash
for archivo in *.ipm; do
  echo "=== $archivo ==="
  cardak describe --summary "$archivo"
  echo
done
```

## Salida en JSON

Ejemplo de salida con `--format json`:

```json
{
  "file": "archivo.ipm",
  "format": "ascii-block1014",
  "header": {
    "record_type": "0000",
    "date": "2025-01-15",
    "file_id": "ABC123"
  },
  "statistics": {
    "total_records": 5234,
    "transactions": 4850,
    "adjustments": 142,
    "fees": 240
  },
  "totals": {
    "amount": 124567890,
    "currency": "840"
  },
  "trailer": {
    "record_type": "0001",
    "record_count": 5234,
    "hash_valid": true
  }
}
```

## Notas

- El comando no modifica el archivo original
- La información se obtiene de manera eficiente sin cargar todo el archivo en memoria
- Los totales se verifican contra los valores del trailer
- Si hay discrepancias, se muestran advertencias
- El formato JSON es útil para automatización y procesamiento posterior

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando DESCRIBE](/img/describe-1.png)

![Ejemplo adicional del comando DESCRIBE](/img/describe-2.png)

![Ejemplo adicional del comando DESCRIBE](/img/describe-3.png)

![Ejemplo adicional del comando DESCRIBE](/img/describe-4.png)

