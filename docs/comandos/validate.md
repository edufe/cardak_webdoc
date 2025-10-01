# VALIDATE

Valida la estructura e integridad de un archivo de intercambio.

## Sintaxis

```bash
cardak validate [OPCIONES] <archivo>
```

![Ejemplo de uso del comando VALIDATE](/img/validate-1.png)

## Descripción

El comando `VALIDATE` realiza una validación exhaustiva de un archivo de intercambio, verificando su estructura, integridad de datos, y cumplimiento con las especificaciones IPM.

## Validaciones Realizadas

### Estructura del Archivo
- Presencia de header y trailer
- Longitud de registros
- Descriptores RDW (si aplica)
- Relleno de bloques (si aplica)
- Orden de registros

### Integridad de Datos
- Totales en trailer
- Contadores de registros
- Checksums y hashes
- Longitudes de campo
- Valores obligatorios

### Formato de Campos
- Formatos numéricos
- Formatos de fecha
- Códigos válidos (moneda, país, etc.)
- PANs válidos (algoritmo de Luhn)
- Rangos de valores

### Cumplimiento IPM
- Versión de formato
- Campos requeridos
- Relaciones entre campos
- Reglas de negocio

## Opciones

### `--strict`
Modo estricto: falla en cualquier advertencia.

**Ejemplo**:
```bash
cardak validate --strict archivo.ipm
```

### `--format <formato>`
Formato de salida del reporte.

Valores posibles:
- `text`: Formato texto legible (por defecto)
- `json`: Formato JSON
- `summary`: Resumen breve

**Ejemplo**:
```bash
cardak validate --format json archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Guarda el reporte de validación en un archivo.

**Ejemplo**:
```bash
cardak validate --output reporte.txt archivo.ipm
```

### `--ignore-warnings`
Ignora advertencias, solo reporta errores.

**Ejemplo**:
```bash
cardak validate --ignore-warnings archivo.ipm
```

### `--check <categoria>`
Valida solo una categoría específica.

Categorías:
- `structure`: Solo estructura
- `data`: Solo integridad de datos
- `format`: Solo formato de campos
- `business`: Solo reglas de negocio

**Ejemplo**:
```bash
cardak validate --check structure archivo.ipm
```

### `--verbose` o `-v`
Muestra información detallada de validación.

## Niveles de Severidad

### Error (ERROR)
Problema crítico que hace el archivo inválido.
- Falta header o trailer
- Totales incorrectos
- Estructura corrupta

### Advertencia (WARNING)
Problema que puede afectar el procesamiento.
- Campos opcionales faltantes
- Valores inusuales
- Formatos no estándar

### Información (INFO)
Información adicional no crítica.
- Estadísticas del archivo
- Versiones detectadas
- Sugerencias de optimización

## Ejemplos de Uso

### Validación básica

```bash
cardak validate archivo.ipm
```

Salida exitosa:
```
✓ Validación completada: archivo.ipm

Estructura: ✓ OK
  ✓ Header presente y válido
  ✓ Trailer presente y válido
  ✓ Longitudes de registro correctas
  ✓ 5,234 registros válidos

Integridad: ✓ OK
  ✓ Totales coinciden (5,234 registros)
  ✓ Suma de montos correcta ($1,245,678.90)
  ✓ Hash de verificación válido

Formato: ✓ OK
  ✓ Todos los campos tienen formato correcto
  ✓ Códigos de moneda válidos
  ✓ PANs válidos (algoritmo de Luhn)

Resultado: ✓ ARCHIVO VÁLIDO
```

Salida con errores:
```
✗ Validación fallida: archivo.ipm

Estructura: ✗ ERRORES ENCONTRADOS
  ✓ Header presente y válido
  ✗ Trailer: total de registros incorrecto
    Esperado: 5,234
    Encontrado: 5,235
  ✓ Longitudes de registro correctas
  ⚠ Registro #1523 tiene longitud inusual

Integridad: ✗ ERRORES ENCONTRADOS
  ✗ Total de registros no coincide
  ✗ Suma de montos incorrecta
    Esperado: $1,245,678.90
    Encontrado: $1,245,528.90
    Diferencia: -$150.00
  ✓ Hash de verificación válido

Formato: ⚠ ADVERTENCIAS
  ✓ Campos obligatorios presentes
  ⚠ Registro #234: PAN no pasa validación de Luhn
  ⚠ Registro #567: Código de moneda obsoleto (999)

Resumen:
  Errores: 3
  Advertencias: 3

Resultado: ✗ ARCHIVO INVÁLIDO

Ejecute 'cardak fix' para intentar reparar el archivo.
```

### Validación estricta

```bash
cardak validate --strict archivo.ipm
```

### Validación con reporte JSON

```bash
cardak validate --format json archivo.ipm -o reporte.json
```

Salida JSON:
```json
{
  "file": "archivo.ipm",
  "timestamp": "2025-01-15T14:30:00Z",
  "is_valid": false,
  "summary": {
    "errors": 3,
    "warnings": 3,
    "info": 0
  },
  "structure": {
    "status": "error",
    "checks": [
      {
        "name": "header_present",
        "status": "ok",
        "message": "Header presente y válido"
      },
      {
        "name": "trailer_totals",
        "status": "error",
        "message": "Total de registros incorrecto",
        "expected": 5234,
        "found": 5235
      }
    ]
  },
  "integrity": {
    "status": "error",
    "checks": [
      {
        "name": "record_count",
        "status": "error",
        "message": "Total de registros no coincide"
      },
      {
        "name": "amount_totals",
        "status": "error",
        "message": "Suma de montos incorrecta",
        "expected": 124567890,
        "found": 124552890,
        "difference": -15000
      }
    ]
  },
  "format": {
    "status": "warning",
    "checks": [
      {
        "name": "pan_validation",
        "status": "warning",
        "record": 234,
        "message": "PAN no pasa validación de Luhn"
      }
    ]
  }
}
```

### Validación de solo estructura

```bash
cardak validate --check structure archivo.ipm
```

### Validación ignorando advertencias

```bash
cardak validate --ignore-warnings archivo.ipm
```

### Validación de múltiples archivos

```bash
for archivo in *.ipm; do
  echo "Validando $archivo..."
  if cardak validate --format summary "$archivo"; then
    echo "✓ $archivo: VÁLIDO"
  else
    echo "✗ $archivo: INVÁLIDO"
  fi
  echo
done
```

### Validación con reporte detallado

```bash
cardak validate --verbose --output reporte_detallado.txt archivo.ipm
```

## Integración en Workflows

### Pre-procesamiento

```bash
#!/bin/bash
archivo=$1

# Validar antes de procesar
if cardak validate --strict "$archivo"; then
  echo "✓ Archivo válido, procediendo con procesamiento..."
  procesar_archivo "$archivo"
else
  echo "✗ Archivo inválido, abortando."
  exit 1
fi
```

### Post-conversión

```bash
#!/bin/bash
# Convertir de EBCDIC a ASCII
cardak convert --from ebcdic --to ascii entrada.ipm salida.ipm

# Validar resultado
if cardak validate salida.ipm; then
  echo "✓ Conversión exitosa y válida"
else
  echo "✗ Error en conversión, archivo inválido"
  exit 1
fi
```

### Pipeline de validación

```bash
#!/bin/bash
archivo=$1

echo "=== Pipeline de Validación ==="

# 1. Identificar
echo "1. Identificando archivo..."
cardak identify --brief "$archivo"

# 2. Validar
echo "2. Validando archivo..."
if ! cardak validate "$archivo"; then
  echo "   ✗ Validación fallida"

  # 3. Intentar reparar
  echo "3. Intentando reparar..."
  cardak fix --all "$archivo" "${archivo%.ipm}_reparado.ipm"

  # 4. Re-validar
  echo "4. Re-validando..."
  if cardak validate "${archivo%.ipm}_reparado.ipm"; then
    echo "   ✓ Archivo reparado exitosamente"
  else
    echo "   ✗ No se pudo reparar"
    exit 1
  fi
else
  echo "   ✓ Archivo válido"
fi

echo "=== Pipeline completado ==="
```

## Códigos de Salida

El comando `validate` usa códigos de salida estándar:

- `0`: Archivo válido (sin errores)
- `1`: Archivo inválido (errores encontrados)
- `2`: Archivo con advertencias (si se usa --strict)
- `3`: Error al leer el archivo

## Notas

- La validación no modifica el archivo
- Para archivos grandes, la validación puede tomar tiempo
- Use `--check` para validaciones rápidas de aspectos específicos
- El modo `--strict` es útil para ambientes de producción
- Los reportes JSON son ideales para automatización
- Siempre valide archivos después de modificarlos
- La validación de PANs usa el algoritmo de Luhn
- Algunos warnings pueden ser aceptables según el caso de uso


