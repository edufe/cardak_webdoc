# IMPORT

Importa datos desde formatos externos (JSON, CSV, XML) para crear archivos de intercambio IPM.

## Sintaxis

```bash
cardak import [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `IMPORT` convierte datos desde formatos legibles (JSON, CSV, XML) a archivos de intercambio IPM binarios. Es el proceso inverso del comando `EXPORT`.

## Opciones de Formato

### `--format <formato>`
Formato del archivo de entrada.

Valores posibles:
- `json`: JavaScript Object Notation
- `csv`: Comma-Separated Values
- `xml`: Extensible Markup Language

**Ejemplo**:
```bash
cardak import --format json datos.json archivo.ipm
```

### `--output-encoding <codificacion>`
Codificación del archivo de salida.

Valores posibles:
- `ebcdic`: Codificación EBCDIC
- `ascii`: Codificación ASCII (por defecto)

**Ejemplo**:
```bash
cardak import --format json --output-encoding ebcdic datos.json archivo.ipm
```

### `--output-structure <estructura>`
Estructura del archivo de salida.

Valores posibles:
- `rdw`: Record Descriptor Word
- `block1014`: Bloques de 1014 bytes (por defecto)
- `flat`: Archivo plano

**Ejemplo**:
```bash
cardak import --format csv --output-structure rdw datos.csv archivo.ipm
```

## Opciones de Mapeo

### `--field-mapping <archivo>`
Archivo de mapeo de campos JSON.

**Ejemplo**:
```bash
cardak import --format csv --field-mapping mapping.json datos.csv archivo.ipm
```

### `--header-template <archivo>`
Plantilla para el registro de header.

### `--trailer-auto`
Genera trailer automáticamente con totales calculados.

**Ejemplo**:
```bash
cardak import --format json --trailer-auto datos.json archivo.ipm
```

## Opciones de Validación

### `--validate`
Valida el archivo después de importar.

**Ejemplo**:
```bash
cardak import --format json --validate datos.json archivo.ipm
```

### `--strict`
Modo estricto: falla si hay errores de validación.

**Ejemplo**:
```bash
cardak import --format csv --strict datos.csv archivo.ipm
```

## Formatos de Entrada

### Formato JSON

Estructura esperada:

```json
{
  "header": {
    "record_type": "0000",
    "date": "2025-01-15",
    "file_id": "ABC123",
    "sender": "123456",
    "receiver": "789012"
  },
  "transactions": [
    {
      "record_type": "0240",
      "DE002": "5123456789012345",
      "DE004": "000000015000",
      "DE007": "0115123045",
      "DE011": "123456",
      "DE049": "840"
    }
  ],
  "trailer": {
    "record_type": "0001",
    "total_records": 1,
    "total_amount": "000000015000"
  }
}
```

### Formato CSV

Encabezados y datos:

```csv
RecordType,PAN,Amount,Currency,Date,STAN
0240,5123456789012345,15000,840,0115123045,123456
0240,5123456789015678,7550,840,0115123050,123457
```

### Formato XML

Estructura esperada:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ipm_file>
  <header>
    <record_type>0000</record_type>
    <date>2025-01-15</date>
    <file_id>ABC123</file_id>
  </header>
  <transactions>
    <transaction>
      <record_type>0240</record_type>
      <DE002>5123456789012345</DE002>
      <DE004>000000015000</DE004>
    </transaction>
  </transactions>
</ipm_file>
```

## Ejemplos de Uso

### Importar desde JSON

```bash
cardak import --format json --validate transacciones.json archivo.ipm
```

### Importar desde CSV

```bash
cardak import --format csv --trailer-auto transacciones.csv archivo.ipm
```

### Importar a formato EBCDIC

```bash
cardak import \
  --format json \
  --output-encoding ebcdic \
  --output-structure rdw \
  --validate \
  datos.json mainframe.ipm
```

### Importar con mapeo personalizado

Archivo `mapping.json`:
```json
{
  "field_mappings": {
    "PAN": "DE002",
    "Amount": "DE004",
    "Currency": "DE049",
    "Date": "DE007",
    "STAN": "DE011"
  },
  "defaults": {
    "DE022": "0000",
    "DE024": "200"
  }
}
```

Comando:
```bash
cardak import \
  --format csv \
  --field-mapping mapping.json \
  --trailer-auto \
  datos.csv archivo.ipm
```

### Proceso completo de conversión

```bash
# 1. Exportar desde archivo existente
cardak export --format json archivo_original.ipm datos.json

# 2. Modificar datos.json según necesidad

# 3. Re-importar con cambios
cardak import --format json --validate datos.json archivo_modificado.ipm

# 4. Verificar resultado
cardak describe archivo_modificado.ipm
```

## Archivo de Mapeo

El archivo de mapeo permite especificar:

### Mapeo de Campos

```json
{
  "field_mappings": {
    "NombreCSV": "CampoIPM",
    "PAN": "DE002",
    "Amount": "DE004"
  }
}
```

### Valores por Defecto

```json
{
  "defaults": {
    "DE022": "0000",
    "DE024": "200",
    "DE025": "00"
  }
}
```

### Transformaciones

```json
{
  "transformations": {
    "Amount": {
      "type": "multiply",
      "factor": 100
    },
    "Date": {
      "type": "date_format",
      "input_format": "%Y-%m-%d",
      "output_format": "%m%d%H%M%S"
    }
  }
}
```

## Validaciones Automáticas

Durante la importación se valida:

- Longitud de campos
- Tipos de datos
- Valores obligatorios
- Checksums
- Formato de campos especiales (PAN, fechas, etc.)

## Notas

- Los archivos JSON deben estar bien formados
- CSV debe tener headers en la primera línea
- Los montos en JSON/CSV/XML son en la unidad más pequeña (centavos)
- Las fechas deben estar en formato IPM o especificar transformación
- El header y trailer se generan automáticamente si no se especifican
- Use `--validate` para asegurar que el archivo generado es válido
- El mapeo de campos es flexible pero debe ser consistente
- Para CSV, todas las filas deben tener el mismo número de columnas

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando IMPORT](/img/import-1.png)

