# SPLIT

Divide un archivo de intercambio grande en múltiples archivos más pequeños.

## Sintaxis

```bash
cardak split [OPCIONES] <archivo_entrada>
```

## Descripción

El comando `SPLIT` divide un archivo de intercambio en múltiples archivos más pequeños según diversos criterios como número de registros, tamaño de archivo, fecha, o campos específicos.

## Opciones de División

### Por Número de Registros

#### `--records <numero>`
Divide en archivos con un número específico de registros.

**Ejemplo**:
```bash
cardak split --records 1000 archivo.ipm
```

### Por Tamaño

#### `--size <tamaño>`
Divide en archivos de un tamaño aproximado.

Sufijos: `KB`, `MB`, `GB`

**Ejemplo**:
```bash
cardak split --size 10MB archivo.ipm
```

### Por Fecha

#### `--by-date`
Divide por fecha de transacción (crea un archivo por fecha).

**Ejemplo**:
```bash
cardak split --by-date archivo.ipm
```

#### `--date-field <campo>`
Campo de fecha a usar (por defecto: DE007).

**Ejemplo**:
```bash
cardak split --by-date --date-field DE012 archivo.ipm
```

### Por Campo

#### `--by-field <campo>`
Divide según el valor de un campo específico.

**Ejemplo**:
```bash
cardak split --by-field DE049 archivo.ipm  # Por moneda
cardak split --by-field PDS0023 archivo.ipm  # Por BIN
```

### Por Número de Partes

#### `--parts <numero>`
Divide en un número específico de partes iguales.

**Ejemplo**:
```bash
cardak split --parts 4 archivo.ipm
```

## Opciones de Salida

### `--output-dir <directorio>`
Directorio donde guardar los archivos divididos.

**Ejemplo**:
```bash
cardak split --records 1000 --output-dir ./divididos archivo.ipm
```

### `--prefix <prefijo>`
Prefijo para los nombres de archivo de salida.

**Ejemplo**:
```bash
cardak split --records 1000 --prefix "parte_" archivo.ipm
```

### `--suffix <sufijo>`
Sufijo para los nombres de archivo (por defecto: numérico).

Valores:
- `numeric`: 001, 002, 003... (por defecto)
- `alpha`: aaa, aab, aac...
- `date`: 2025-01-15, 2025-01-16...

**Ejemplo**:
```bash
cardak split --records 1000 --suffix alpha archivo.ipm
```

## Opciones Adicionales

### `--keep-together`
Mantiene registros relacionados juntos (ej: transacción y sus ajustes).

**Ejemplo**:
```bash
cardak split --records 1000 --keep-together archivo.ipm
```

### `--validate`
Valida cada archivo generado.

**Ejemplo**:
```bash
cardak split --records 1000 --validate archivo.ipm
```

## Ejemplos de Uso

### Dividir por número de registros

```bash
cardak split --records 1000 archivo.ipm
```

Genera:
```
archivo_001.ipm (1000 registros)
archivo_002.ipm (1000 registros)
archivo_003.ipm (1000 registros)
archivo_004.ipm (234 registros)
```

### Dividir por tamaño

```bash
cardak split --size 5MB --output-dir ./divididos archivo.ipm
```

### Dividir por fecha

```bash
cardak split --by-date --output-dir ./por_fecha archivo.ipm
```

Genera:
```
archivo_2025-01-15.ipm
archivo_2025-01-16.ipm
archivo_2025-01-17.ipm
```

### Dividir por BIN

```bash
cardak split --by-field PDS0023 --output-dir ./por_bin archivo.ipm
```

Genera:
```
archivo_512345.ipm
archivo_512346.ipm
archivo_512347.ipm
```

### Dividir por moneda

```bash
cardak split --by-field DE049 --output-dir ./por_moneda archivo.ipm
```

Genera:
```
archivo_840.ipm  (USD)
archivo_484.ipm  (MXN)
archivo_978.ipm  (EUR)
```

### Dividir en partes iguales

```bash
cardak split --parts 4 --prefix "cuarto_" archivo.ipm
```

Genera:
```
cuarto_001.ipm (1,308 registros)
cuarto_002.ipm (1,308 registros)
cuarto_003.ipm (1,308 registros)
cuarto_004.ipm (1,310 registros)
```

### División con validación

```bash
cardak split --records 1000 --validate --output-dir ./validados archivo.ipm
```

### División personalizada

```bash
cardak split \
  --records 500 \
  --prefix "lote_" \
  --suffix numeric \
  --output-dir ./lotes \
  --keep-together \
  --validate \
  archivo.ipm
```

## Estructura de Archivos Generados

Cada archivo generado incluye:

### Header
- Información del archivo original
- Metadatos actualizados
- Numeración de parte (si aplica)

### Registros
- Subset de transacciones según criterio
- Mantienen orden original
- Registros relacionados juntos (si se usa --keep-together)

### Trailer
- Totales recalculados para ese archivo
- Contadores específicos
- Hash de verificación

## Casos de Uso

### 1. Procesamiento Paralelo

```bash
# Dividir en 4 partes para procesamiento paralelo
cardak split --parts 4 --output-dir ./parallel archivo_grande.ipm

# Procesar cada parte
for parte in ./parallel/*.ipm; do
  procesar_archivo "$parte" &
done
wait
```

### 2. Distribución por Entidad

```bash
# Dividir por banco emisor (BIN)
cardak split --by-field PDS0023 --output-dir ./bancos archivo.ipm

# Enviar cada archivo al banco correspondiente
for bin_file in ./bancos/*.ipm; do
  enviar_a_banco "$bin_file"
done
```

### 3. Archivo Diario

```bash
# Dividir por fecha para procesamiento diario
cardak split --by-date --output-dir ./diarios archivo_mensual.ipm

# Procesar cada día
for dia in ./diarios/*.ipm; do
  procesar_dia "$dia"
done
```

### 4. Limitación de Tamaño

```bash
# Dividir para cumplir con límite de tamaño de transferencia
cardak split --size 50MB --output-dir ./transfer archivo_grande.ipm

# Transferir cada archivo
for archivo in ./transfer/*.ipm; do
  transferir "$archivo"
done
```

## Reunificación

Para reunir los archivos divididos:

```bash
# Dividir
cardak split --records 1000 archivo.ipm

# Más tarde, reunir
cardak join archivo_*.ipm -o reunificado.ipm

# Verificar que es idéntico al original
cardak describe archivo.ipm > original.txt
cardak describe reunificado.ipm > reunificado.txt
diff original.txt reunificado.txt
```

## Notas

- El archivo original no se modifica ni se elimina
- Cada archivo generado es válido e independiente
- Los totales se recalculan para cada archivo
- El header se actualiza con información de la parte
- Use `--keep-together` para mantener integridad de transacciones relacionadas
- La división por fecha usa la fecha de transacción, no la fecha del archivo
- Para archivos muy grandes, la división puede tomar tiempo
- Los archivos generados mantienen el formato del original
- Se recomienda usar `--validate` para asegurar integridad

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando SPLIT](/img/split-1.png)

