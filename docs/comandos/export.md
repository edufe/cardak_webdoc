# EXPORT

Exporta datos de archivos de intercambio a formatos legibles como JSON, CSV o XML.

## Sintaxis

```bash
cardak export [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `EXPORT` convierte datos de archivos de intercambio binarios a formatos estándar legibles por humanos y procesables por otras aplicaciones.

## Opciones de Formato

### `--format <formato>`
Formato de exportación.

Valores posibles:
- `json`: JavaScript Object Notation
- `csv`: Comma-Separated Values
- `xml`: Extensible Markup Language
- `text`: Texto plano formateado

**Ejemplo**:
```bash
cardak export --format json archivo.ipm salida.json
```

## Opciones de Contenido

### `--fields <campos>`
Lista de campos a exportar (separados por coma).

**Ejemplo**:
```bash
cardak export --format csv --fields "DE002,DE004,DE049" archivo.ipm salida.csv
```

### `--all-fields`
Exporta todos los campos disponibles.

**Ejemplo**:
```bash
cardak export --format json --all-fields archivo.ipm salida.json
```

### `--record-type <tipo>`
Exporta solo registros de un tipo específico.

**Ejemplo**:
```bash
cardak export --format csv --record-type "0240" archivo.ipm transacciones.csv
```

### `--pretty`
Formatea la salida de manera legible (para JSON y XML).

**Ejemplo**:
```bash
cardak export --format json --pretty archivo.ipm salida.json
```

## Opciones de Filtrado

### `--filter <condicion>`
Exporta solo registros que cumplan una condición.

**Ejemplo**:
```bash
cardak export --format csv --filter "DE004 > 100000" archivo.ipm grandes.csv
```

### `--limit <numero>`
Limita el número de registros exportados.

**Ejemplo**:
```bash
cardak export --format json --limit 100 archivo.ipm muestra.json
```

## Ejemplos de Uso

### Exportar a JSON

```bash
cardak export --format json archivo.ipm salida.json
```

Salida ejemplo:
```json
{
  "header": {
    "record_type": "0000",
    "date": "2025-01-15",
    "file_id": "ABC123"
  },
  "transactions": [
    {
      "record_type": "0240",
      "DE002": "5123456789012345",
      "DE004": "000000015000",
      "DE049": "840",
      "DE007": "0115123045"
    },
    ...
  ],
  "trailer": {
    "record_type": "0001",
    "total_records": 5234
  }
}
```

### Exportar a CSV

```bash
cardak export --format csv archivo.ipm salida.csv
```

Salida ejemplo:
```csv
RecordType,PAN,Amount,Currency,Date
0240,5123********2345,150.00,840,2025-01-15
0240,5123********5678,75.50,840,2025-01-15
...
```

### Exportar campos específicos a CSV

```bash
cardak export --format csv --fields "DE002,DE004,DE049,DE007" archivo.ipm salida.csv
```

### Exportar a XML

```bash
cardak export --format xml --pretty archivo.ipm salida.xml
```

Salida ejemplo:
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
      <DE049>840</DE049>
    </transaction>
    ...
  </transactions>
  <trailer>
    <record_type>0001</record_type>
    <total_records>5234</total_records>
  </trailer>
</ipm_file>
```

### Exportar solo transacciones grandes

```bash
cardak export --format csv --filter "DE004 > 100000" archivo.ipm grandes.csv
```

### Exportar muestra de datos

```bash
cardak export --format json --limit 10 --pretty archivo.ipm muestra.json
```

### Exportar para análisis en Excel

```bash
cardak export \
  --format csv \
  --fields "DE002,DE004,DE007,DE049,PDS0023" \
  --record-type "0240" \
  archivo.ipm analisis.csv
```

## Formatos de Campo

### JSON
- Campos numéricos: como números
- Campos de texto: como strings
- Fechas: formato ISO 8601
- Estructura jerárquica

### CSV
- Headers en primera línea
- Campos separados por coma
- Strings entre comillas si contienen comas
- PAN enmascarado por seguridad

### XML
- Estructura de árbol
- Cada campo como elemento
- Atributos para metadata
- Validación con DTD/XSD opcional

### Text
- Formato tabular
- Columnas alineadas
- Separadores visuales
- Paginación opcional

## Notas

- Los números de tarjeta (PAN) se enmascaran por defecto en CSV y text
- JSON y XML preservan la estructura completa
- Los montos se convierten a formato decimal en exportación
- Las fechas se convierten a formato legible
- Los archivos grandes pueden tardar en exportarse
- Se recomienda usar `--fields` para exportaciones grandes
- El formato CSV es ideal para Excel y análisis de datos
- El formato JSON es ideal para procesamiento programático

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando EXPORT](/img/export-1.png)

