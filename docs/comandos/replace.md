# REPLACE

Reemplaza valores en campos específicos de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak replace [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `REPLACE` permite modificar valores en campos específicos de registros, aplicando transformaciones o reemplazos según criterios definidos.

## Opciones

### `--field <campo>`
Campo a modificar.

**Ejemplo**:
```bash
cardak replace --field DE049 --old 840 --new 484 archivo.ipm salida.ipm
```

### `--old <valor>` o `--from <valor>`
Valor a buscar para reemplazar.

**Ejemplo**:
```bash
cardak replace --field DE049 --old 840 --new 484 archivo.ipm salida.ipm
```

### `--new <valor>` o `--to <valor>`
Nuevo valor a establecer.

**Ejemplo**:
```bash
cardak replace --field DE049 --from 840 --to 484 archivo.ipm salida.ipm
```

### `--regex`
Interpreta old y new como expresiones regulares.

**Ejemplo**:
```bash
cardak replace --field DE002 --old "^5123" --new "5124" --regex archivo.ipm salida.ipm
```

### `--condition <expresion>`
Solo reemplaza en registros que cumplan la condición.

**Ejemplo**:
```bash
cardak replace \
  --field DE049 \
  --old 840 \
  --new 484 \
  --condition "DE004 > 100000" \
  archivo.ipm salida.ipm
```

### `--record-type <tipo>`
Solo reemplaza en registros de un tipo específico.

**Ejemplo**:
```bash
cardak replace --field DE049 --old 840 --new 484 --record-type "0240" archivo.ipm salida.ipm
```

### `--all-records`
Aplica el reemplazo a todos los registros que coincidan (por defecto).

### `--first-only`
Solo reemplaza en el primer registro que coincida.

### `--dry-run`
Muestra qué cambios se harían sin modificar el archivo.

**Ejemplo**:
```bash
cardak replace --field DE049 --old 840 --new 484 --dry-run archivo.ipm
```

### `--verbose` o `-v`
Muestra información detallada de los reemplazos.

## Ejemplos de Uso

### Reemplazo simple de moneda

```bash
# Cambiar USD (840) a MXN (484)
cardak replace --field DE049 --old 840 --new 484 archivo.ipm salida.ipm
```

### Reemplazo condicional

```bash
# Cambiar moneda solo para montos grandes
cardak replace \
  --field DE049 \
  --old 840 \
  --new 484 \
  --condition "DE004 > 100000" \
  archivo.ipm salida.ipm
```

### Reemplazo con expresión regular

```bash
# Cambiar prefijo de BIN
cardak replace \
  --field PDS0023 \
  --old "^5123" \
  --new "5124" \
  --regex \
  archivo.ipm salida.ipm
```

### Vista previa de cambios

```bash
cardak replace \
  --field DE049 \
  --old 840 \
  --new 484 \
  --dry-run \
  --verbose \
  archivo.ipm
```

Salida:
```
Analizando reemplazos...

Registros que serían modificados: 4,850

Ejemplos de cambios:
  Registro #2:
    DE049: 840 → 484

  Registro #3:
    DE049: 840 → 484

  Registro #4:
    DE049: 840 → 484

Total de cambios: 4,850
```

### Reemplazo en tipo de registro específico

```bash
cardak replace \
  --field DE024 \
  --old 200 \
  --new 201 \
  --record-type "0240" \
  archivo.ipm salida.ipm
```

### Reemplazo múltiple

```bash
# Primer reemplazo
cardak replace --field DE049 --old 840 --new 484 archivo.ipm temp1.ipm

# Segundo reemplazo
cardak replace --field DE024 --old 200 --new 201 temp1.ipm salida.ipm

# Limpiar archivo temporal
rm temp1.ipm
```

### Reemplazo con validación

```bash
# Hacer reemplazo
cardak replace --field DE049 --old 840 --new 484 archivo.ipm salida.ipm

# Validar resultado
cardak validate salida.ipm

# Describir para verificar
cardak describe salida.ipm
```

## Casos de Uso

### 1. Cambio de Moneda

```bash
# Convertir de USD a EUR
cardak replace --field DE049 --old 840 --new 978 archivo.ipm eur.ipm
```

### 2. Corrección de BIN

```bash
# Corregir BIN incorrecto
cardak replace \
  --field PDS0023 \
  --old "512345" \
  --new "512346" \
  archivo.ipm corregido.ipm
```

### 3. Actualización de Códigos

```bash
# Actualizar código de función
cardak replace \
  --field DE024 \
  --old 200 \
  --new 201 \
  --record-type "0240" \
  archivo.ipm actualizado.ipm
```

### 4. Enmascaramiento de Datos

```bash
# Enmascarar porción de PAN (para testing)
cardak replace \
  --field DE002 \
  --old "([0-9]{6})[0-9]{6}([0-9]{4})" \
  --new "$1******$2" \
  --regex \
  archivo.ipm test.ipm
```

### 5. Normalización de Datos

```bash
# Normalizar códigos de país
cardak replace --field DE019 --old "USA" --new "US" archivo.ipm normalizado.ipm
```

## Proceso Completo con Verificación

```bash
# 1. Describir archivo original
echo "=== Archivo Original ===" cardak describe --summary archivo.ipm

# 2. Vista previa de cambios
echo "=== Vista Previa de Cambios ==="
cardak replace \
  --field DE049 \
  --old 840 \
  --new 484 \
  --dry-run \
  --verbose \
  archivo.ipm

# 3. Aplicar reemplazo
echo "=== Aplicando Cambios ==="
cardak replace \
  --field DE049 \
  --old 840 \
  --new 484 \
  --verbose \
  archivo.ipm salida.ipm

# 4. Validar resultado
echo "=== Validando Resultado ==="
cardak validate salida.ipm

# 5. Describir archivo modificado
echo "=== Archivo Modificado ==="
cardak describe --summary salida.ipm

# 6. Comparar registros
echo "=== Comparación ==="
echo "Original:"
cardak print --records 2 archivo.ipm | grep DE049
echo "Modificado:"
cardak print --records 2 salida.ipm | grep DE049
```

## Consideraciones Importantes

### Validación de Campos
- El nuevo valor debe ser válido para el campo
- La longitud debe ser compatible
- El tipo de dato debe ser correcto

### Integridad del Archivo
- Los totales del trailer se actualizan automáticamente
- Se mantiene la estructura del archivo
- Se preserva la codificación y formato

### Seguridad
- Use `--dry-run` antes de aplicar cambios
- Mantenga backup del archivo original
- Valide el resultado después de reemplazar

## Limitaciones

- No se pueden reemplazar registros de header o trailer
- Algunos campos tienen validaciones específicas
- Los reemplazos no pueden violar la especificación IPM
- Los campos numéricos deben mantener su formato

## Notas

- El archivo original no se modifica
- Use `--dry-run` para verificar antes de aplicar
- Los reemplazos son case-sensitive a menos que use regex con flags
- Valide siempre el archivo resultante
- Para cambios complejos, considere usar EXPORT/IMPORT
- Los reemplazos con regex son más flexibles pero requieren cuidado