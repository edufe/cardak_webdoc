# CONVERT

Convierte archivos de intercambio entre diferentes formatos y codificaciones.

## Sintaxis

```bash
cardak convert [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `CONVERT` permite convertir archivos de intercambio entre diferentes formatos de codificación (EBCDIC/ASCII) y estructuras de archivo (RDW/Block/Flat). Esta es una de las funcionalidades más utilizadas para interoperabilidad entre sistemas mainframe y modernos.

## Opciones de Codificación

### `--from <formato>`
Formato de origen del archivo.

Valores posibles:
- `ebcdic`: Codificación EBCDIC
- `ascii`: Codificación ASCII
- `auto`: Detección automática

**Ejemplo**:
```bash
cardak convert --from ebcdic archivo.ipm
```

### `--to <formato>`
Formato de destino del archivo.

Valores posibles:
- `ebcdic`: Codificación EBCDIC
- `ascii`: Codificación ASCII

**Ejemplo**:
```bash
cardak convert --from ebcdic --to ascii archivo.ipm archivo_ascii.ipm
```

## Opciones de Estructura

### `--from-structure <estructura>`
Estructura de archivo de origen.

Valores posibles:
- `rdw`: Record Descriptor Word (longitud variable)
- `block1014`: Bloques de 1014 bytes
- `flat`: Archivo plano sin estructura
- `auto`: Detección automática

### `--to-structure <estructura>`
Estructura de archivo de destino.

Valores posibles:
- `rdw`: Record Descriptor Word
- `block1014`: Bloques de 1014 bytes
- `flat`: Archivo plano

**Ejemplo**:
```bash
cardak convert --from-structure rdw --to-structure block1014 archivo.ipm salida.ipm
```

## Opciones Adicionales

### `--validate`
Valida el archivo después de la conversión.

**Ejemplo**:
```bash
cardak convert --from ebcdic --to ascii --validate archivo.ipm salida.ipm
```

### `--preserve-rdw`
Preserva los descriptores RDW en la conversión.

### `--block-size <tamaño>`
Especifica el tamaño de bloque para conversiones a formato block.

## Ejemplos de Uso

### Conversión EBCDIC a ASCII

```bash
cardak convert --from ebcdic --to ascii mainframe.ipm ascii.ipm
```

### Conversión ASCII a EBCDIC

```bash
cardak convert --from ascii --to ebcdic ascii.ipm mainframe.ipm
```

### Conversión de RDW a Block 1014

```bash
cardak convert --from-structure rdw --to-structure block1014 variable.ipm block.ipm
```

### Conversión completa de formato mainframe a moderno

```bash
cardak convert \
  --from ebcdic \
  --to ascii \
  --from-structure rdw \
  --to-structure block1014 \
  --validate \
  mainframe.ipm moderno.ipm
```

### Detección automática y conversión

```bash
cardak convert --from auto --to ascii archivo.ipm salida.ipm
```

## Notas

- La detección automática (`auto`) examina el archivo para determinar su formato
- La conversión preserva la integridad de los datos
- Se recomienda usar `--validate` para verificar la conversión
- Los archivos RDW incluyen un descriptor de 4 bytes antes de cada registro
- Los archivos Block 1014 agrupan registros en bloques de tamaño fijo
- La conversión de codificación afecta a todos los campos de texto
- Los campos numéricos se manejan de manera especial para preservar su valor

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando CONVERT](/img/convert-1.png)

![Ejemplo adicional del comando CONVERT](/img/convert-2.png)

