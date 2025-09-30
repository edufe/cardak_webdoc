# GREP

Busca patrones específicos en campos de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak grep [OPCIONES] <patron> <archivo>
```

## Descripción

El comando `GREP` permite buscar registros que contengan patrones específicos en campos determinados, similar al comando Unix grep pero específico para archivos de intercambio IPM.

## Opciones

### `--field <campo>`
Campo donde buscar el patrón.

**Ejemplo**:
```bash
cardak grep --field DE002 "5123" archivo.ipm
```

### `--regex` o `-E`
Interpreta el patrón como expresión regular.

**Ejemplo**:
```bash
cardak grep --field DE002 --regex "^5123.*1234$" archivo.ipm
```

### `--ignore-case` o `-i`
Búsqueda sin distinguir mayúsculas/minúsculas.

**Ejemplo**:
```bash
cardak grep -i --field PDS0023 "abc" archivo.ipm
```

### `--invert-match` o `-v`
Muestra registros que NO coinciden con el patrón.

**Ejemplo**:
```bash
cardak grep -v --field DE049 "840" archivo.ipm
```

### `--count` o `-c`
Muestra solo el conteo de registros coincidentes.

**Ejemplo**:
```bash
cardak grep --count --field PDS0023 "512345" archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Guarda los registros coincidentes en un archivo.

**Ejemplo**:
```bash
cardak grep --field PDS0023 "512345" -o resultado.ipm archivo.ipm
```

### `--export <formato>`
Exporta resultados al formato especificado.

**Ejemplo**:
```bash
cardak grep --field PDS0023 "512345" --export csv -o resultado.csv archivo.ipm
```

### `--context <numero>` o `-C <numero>`
Muestra N registros antes y después de cada coincidencia.

**Ejemplo**:
```bash
cardak grep -C 2 --field DE002 "5123" archivo.ipm
```

## Ejemplos de Uso

### Búsqueda simple

```bash
cardak grep --field PDS0023 "512345" archivo.ipm
```

### Búsqueda con expresión regular

```bash
# Buscar todos los registros con BIN que empiece con 5123
cardak grep --field PDS0023 --regex "^5123" archivo.ipm
```

### Búsqueda de múltiples patrones

```bash
# Buscar varios BINs
cardak grep --field PDS0023 --regex "^(512345|512346|512347)" archivo.ipm
```

### Búsqueda por monto

```bash
# Buscar montos específicos
cardak grep --field DE004 "000000015000" archivo.ipm
```

### Búsqueda inversa

```bash
# Encontrar todos los registros que NO son USD
cardak grep -v --field DE049 "840" archivo.ipm
```

### Contar coincidencias

```bash
cardak grep --count --field PDS0023 "512345" archivo.ipm
```

Salida:
```
1,234
```

### Buscar y exportar

```bash
cardak grep --field PDS0023 "512345" --export csv -o resultado.csv archivo.ipm
```

### Búsqueda con contexto

```bash
# Mostrar 2 registros antes y después de cada coincidencia
cardak grep -C 2 --field DE002 "5123456789012345" archivo.ipm
```

### Búsqueda en múltiples archivos

```bash
for archivo in *.ipm; do
  echo "=== $archivo ==="
  cardak grep --count --field PDS0023 "512345" "$archivo"
done
```

## Patrones de Expresiones Regulares

Cuando se usa `--regex`, se pueden utilizar expresiones regulares estándar:

### Metacaracteres Básicos
- `.`: Cualquier carácter
- `^`: Inicio de línea
- `$`: Fin de línea
- `*`: Cero o más repeticiones
- `+`: Una o más repeticiones
- `?`: Cero o una repetición
- `[abc]`: Cualquiera de a, b, o c
- `[^abc]`: Cualquiera excepto a, b, o c
- `[0-9]`: Cualquier dígito
- `\d`: Dígito (equivalente a [0-9])
- `\w`: Carácter de palabra (letras, dígitos, _)

### Ejemplos de Patrones

```bash
# BIN que empiece con 5123 y termine con 45
cardak grep --field PDS0023 --regex "^5123.*45$" archivo.ipm

# Montos mayores a 100000 (con exactamente 12 dígitos, primeros 2+ son 10+)
cardak grep --field DE004 --regex "^[1-9][0-9]{6,}" archivo.ipm

# Fechas de enero 2025
cardak grep --field DE007 --regex "^0125" archivo.ipm

# PANs que contengan secuencia 1234
cardak grep --field DE002 --regex "1234" archivo.ipm
```

## Campos Comunes

Campos frecuentemente buscados:

- **DE002**: PAN (Primary Account Number)
- **DE004**: Monto de transacción
- **DE007**: Fecha y hora de transmisión
- **DE011**: STAN (System Trace Audit Number)
- **DE049**: Código de moneda
- **PDS0023**: BIN (primeros 6 dígitos del PAN)
- **DE032**: Acquiring Institution ID
- **DE033**: Forwarding Institution ID

## Notas

- La búsqueda no modifica el archivo original
- Los patrones son sensibles a mayúsculas/minúsculas a menos que se use `-i`
- El formato del archivo se mantiene en la salida
- Para búsquedas complejas, considere usar el comando `filter`
- Las expresiones regulares siguen la sintaxis de Rust regex
- Para búsquedas en múltiples campos, use múltiples comandos o el comando `filter`

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando GREP](/img/grep-1.png)

