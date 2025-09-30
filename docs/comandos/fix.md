# FIX

Repara archivos de intercambio con problemas estructurales o de integridad.

## Sintaxis

```bash
cardak fix [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `FIX` intenta reparar archivos de intercambio que tienen problemas estructurales, registros corruptos o inconsistencias de datos. Es útil para recuperar archivos dañados o corregir problemas de formato.

## Problemas que Puede Reparar

- Registros con longitud incorrecta
- Headers o trailers faltantes o corruptos
- Totales incorrectos en trailer
- Problemas de codificación
- Descriptores RDW incorrectos
- Relleno de bloques incorrecto
- Campos con valores inválidos

## Opciones

### `--validate`
Valida el archivo después de repararlo.

**Ejemplo**:
```bash
cardak fix --validate corrupto.ipm reparado.ipm
```

### `--fix-header`
Regenera el registro de header.

**Ejemplo**:
```bash
cardak fix --fix-header corrupto.ipm reparado.ipm
```

### `--fix-trailer`
Regenera el registro de trailer con totales correctos.

**Ejemplo**:
```bash
cardak fix --fix-trailer corrupto.ipm reparado.ipm
```

### `--fix-records`
Intenta reparar registros individuales corruptos.

**Ejemplo**:
```bash
cardak fix --fix-records corrupto.ipm reparado.ipm
```

### `--fix-lengths`
Corrige longitudes de registro incorrectas.

**Ejemplo**:
```bash
cardak fix --fix-lengths corrupto.ipm reparado.ipm
```

### `--fix-rdw`
Corrige descriptores RDW incorrectos.

**Ejemplo**:
```bash
cardak fix --fix-rdw corrupto.ipm reparado.ipm
```

### `--remove-invalid`
Elimina registros que no se pueden reparar.

**Ejemplo**:
```bash
cardak fix --remove-invalid corrupto.ipm reparado.ipm
```

### `--all`
Aplica todas las reparaciones posibles.

**Ejemplo**:
```bash
cardak fix --all corrupto.ipm reparado.ipm
```

### `--dry-run`
Muestra qué se repararía sin modificar archivos.

**Ejemplo**:
```bash
cardak fix --all --dry-run corrupto.ipm
```

### `--verbose` o `-v`
Muestra información detallada del proceso de reparación.

## Ejemplos de Uso

### Diagnóstico inicial

```bash
# Primero validar para ver qué problemas hay
cardak validate corrupto.ipm

# Usar fix con dry-run para ver qué se repararía
cardak fix --all --dry-run corrupto.ipm
```

### Reparación completa

```bash
cardak fix --all --validate --verbose corrupto.ipm reparado.ipm
```

Salida ejemplo:
```
Analizando archivo: corrupto.ipm
Problemas encontrados: 5

✓ Header regenerado
✓ 3 registros con longitud incorrecta reparados
✓ Trailer regenerado con totales correctos
✗ 2 registros irreparables eliminados

Archivo reparado guardado en: reparado.ipm
Validando archivo reparado...
✓ Archivo válido
```

### Reparar solo totales

```bash
cardak fix --fix-trailer corrupto.ipm reparado.ipm
```

### Reparar y eliminar registros inválidos

```bash
cardak fix --fix-records --remove-invalid corrupto.ipm reparado.ipm
```

### Proceso completo de recuperación

```bash
# 1. Validar y ver problemas
cardak validate corrupto.ipm > problemas.txt

# 2. Intentar reparación con dry-run
cardak fix --all --dry-run corrupto.ipm

# 3. Aplicar reparación
cardak fix --all --verbose corrupto.ipm reparado.ipm

# 4. Validar resultado
cardak validate reparado.ipm

# 5. Describir para verificar
cardak describe reparado.ipm
```

## Tipos de Reparaciones

### 1. Reparación de Header
- Regenera campos obligatorios
- Establece fechas correctas
- Recalcula valores de control

### 2. Reparación de Trailer
- Recalcula totales de registros
- Recalcula totales monetarios
- Actualiza contadores

### 3. Reparación de Registros
- Rellena campos faltantes
- Corrige valores fuera de rango
- Ajusta longitudes de campo

### 4. Reparación de Estructura
- Corrige descriptores RDW
- Ajusta relleno de bloques
- Normaliza longitudes

## Limitaciones

El comando `FIX` tiene limitaciones:

- No puede recuperar datos completamente perdidos
- No puede adivinar valores desconocidos
- Registros muy corruptos deben eliminarse
- Algunos problemas requieren intervención manual
- La reparación puede no ser perfecta

## Notas

- **IMPORTANTE**: Siempre mantenga una copia del archivo original
- Use `--dry-run` primero para ver qué cambios se harían
- Valide siempre el archivo reparado antes de usarlo
- Algunos problemas no son reparables automáticamente
- La opción `--remove-invalid` puede eliminar datos importantes
- Revise el log de reparación para entender qué se cambió
- El archivo de salida puede ser más pequeño si se eliminaron registros

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando FIX](/img/fix-1.png)

