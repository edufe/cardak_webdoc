# JOIN

Combina múltiples archivos de intercambio en un solo archivo consolidado.

## Sintaxis

```bash
cardak join [OPCIONES] <archivo1> <archivo2> [archivo3...] --output <archivo_salida>
```

## Descripción

El comando `JOIN` permite combinar múltiples archivos de intercambio en un solo archivo, consolidando headers y trailers, y recalculando totales automáticamente.

## Opciones

### `--output <archivo>` o `-o <archivo>` (Requerido)
Archivo de salida con los datos combinados.

**Ejemplo**:
```bash
cardak join archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### `--format <formato>`
Formato del archivo de salida.

Valores posibles:
- `auto`: Mantener formato del primer archivo (por defecto)
- `ebcdic`: Forzar salida en EBCDIC
- `ascii`: Forzar salida en ASCII

**Ejemplo**:
```bash
cardak join --format ascii archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### `--structure <estructura>`
Estructura del archivo de salida.

Valores posibles:
- `auto`: Mantener estructura del primer archivo (por defecto)
- `rdw`: Record Descriptor Word
- `block1014`: Bloques de 1014 bytes

**Ejemplo**:
```bash
cardak join --structure block1014 archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### `--sort-by <campo>`
Ordena los registros combinados por un campo específico.

**Ejemplo**:
```bash
cardak join --sort-by DE007 archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### `--dedupe`
Elimina duplicados después de combinar.

**Ejemplo**:
```bash
cardak join --dedupe archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### `--validate`
Valida el archivo resultante.

**Ejemplo**:
```bash
cardak join --validate archivo1.ipm archivo2.ipm -o consolidado.ipm
```

## Comportamiento

### Headers
- Se usa el header del primer archivo como base
- Se puede especificar header personalizado con `--header-from <archivo>`

### Registros de Transacción
- Se combinan todos los registros de transacción
- Se mantiene el orden de cada archivo
- Opcionalmente se pueden ordenar con `--sort-by`

### Trailers
- Se genera un nuevo trailer con totales recalculados
- Incluye suma de todos los registros y montos

## Ejemplos de Uso

### Combinar dos archivos

```bash
cardak join archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### Combinar múltiples archivos

```bash
cardak join archivo1.ipm archivo2.ipm archivo3.ipm archivo4.ipm -o consolidado.ipm
```

### Combinar todos los archivos en un directorio

```bash
cardak join *.ipm -o consolidado_todos.ipm
```

### Combinar con conversión de formato

```bash
# Archivos de entrada en EBCDIC, salida en ASCII
cardak join --format ascii ebcdic1.ipm ebcdic2.ipm -o ascii_consolidado.ipm
```

### Combinar y ordenar por fecha

```bash
cardak join --sort-by DE007 archivo1.ipm archivo2.ipm -o consolidado_ordenado.ipm
```

### Combinar y eliminar duplicados

```bash
cardak join --dedupe archivo1.ipm archivo2.ipm -o consolidado_limpio.ipm
```

### Combinar con validación

```bash
cardak join --validate --dedupe archivo1.ipm archivo2.ipm -o consolidado.ipm
```

### Proceso completo de consolidación

```bash
# 1. Describir archivos individuales
for archivo in archivo*.ipm; do
  echo "=== $archivo ==="
  cardak describe --summary "$archivo"
done

# 2. Combinar con opciones
cardak join \
  --format ascii \
  --structure block1014 \
  --sort-by DE007 \
  --dedupe \
  --validate \
  archivo1.ipm archivo2.ipm archivo3.ipm \
  -o consolidado.ipm

# 3. Verificar resultado
cardak describe consolidado.ipm

# 4. Verificar duplicados
cardak duplicates --check consolidado.ipm
```

### Combinar archivos de diferentes fuentes

```bash
# Archivos de diferentes procesadores
cardak join \
  procesador_a/*.ipm \
  procesador_b/*.ipm \
  procesador_c/*.ipm \
  --dedupe \
  --sort-by DE007 \
  -o consolidado_mensual.ipm
```

## Compatibilidad de Archivos

### Misma Codificación y Estructura
Los archivos deben ser compatibles:
- Misma versión de IPM
- Formatos que se puedan convertir automáticamente

### Conversión Automática
CardAK puede convertir automáticamente entre:
- EBCDIC ↔ ASCII
- RDW ↔ Block 1014 ↔ Flat

### Validación de Compatibilidad
Antes de combinar, se valida:
- Versión de formato IPM
- Estructura de registros
- Compatibilidad de campos

## Generación de Header y Trailer

### Header Consolidado
```
Información del primer archivo:
  - File ID
  - Sender
  - Receiver

Información actualizada:
  - Fecha de creación (fecha actual)
  - Totales recalculados
```

### Trailer Consolidado
```
Totales recalculados:
  - Total de registros combinados
  - Suma de montos de todos los archivos
  - Contadores actualizados
  - Hash de verificación
```

## Notas

- Los archivos originales no se modifican
- Se requiere especificar `--output` explícitamente
- La combinación mantiene la integridad de los datos
- Se pueden combinar archivos de diferentes formatos
- Los totales se recalculan automáticamente
- Use `--validate` para asegurar el resultado es válido
- Para archivos muy grandes, el proceso puede tomar tiempo
- Se recomienda hacer backup de archivos originales
- El orden de los archivos en la línea de comandos determina el orden en el archivo consolidado

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando JOIN](/img/join-1.png)

