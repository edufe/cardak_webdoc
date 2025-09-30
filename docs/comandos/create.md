# CREATE

Crea un nuevo archivo de intercambio desde cero o a partir de plantillas.

## Sintaxis

```bash
cardak create [OPCIONES] <archivo_salida>
```

## Descripción

El comando `CREATE` permite crear nuevos archivos de intercambio IPM, ya sea vacíos con solo header y trailer, o a partir de plantillas predefinidas.

## Opciones

### `--format <formato>`
Formato del archivo a crear.

Valores posibles:
- `ebcdic`: Crear en codificación EBCDIC
- `ascii`: Crear en codificación ASCII

**Ejemplo**:
```bash
cardak create --format ascii nuevo.ipm
```

### `--structure <estructura>`
Estructura del archivo.

Valores posibles:
- `rdw`: Record Descriptor Word
- `block1014`: Bloques de 1014 bytes
- `flat`: Archivo plano

**Ejemplo**:
```bash
cardak create --format ascii --structure block1014 nuevo.ipm
```

### `--template <plantilla>`
Usar una plantilla predefinida.

**Ejemplo**:
```bash
cardak create --template basic nuevo.ipm
```

### `--header-data <datos>`
Datos para el registro de header.

### `--trailer-data <datos>`
Datos para el registro de trailer.

## Ejemplos de Uso

### Crear archivo vacío en ASCII

```bash
cardak create --format ascii --structure block1014 nuevo.ipm
```

### Crear archivo desde plantilla

```bash
cardak create --template basic --format ebcdic nuevo.ipm
```

### Crear archivo con header personalizado

```bash
cardak create \
  --format ascii \
  --header-data "0000001120250101..." \
  nuevo.ipm
```

## Notas

- Los archivos creados incluyen registros de header y trailer válidos
- Las plantillas proporcionan estructuras básicas válidas
- Es recomendable validar el archivo creado antes de usarlo