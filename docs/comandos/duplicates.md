# DUPLICATES

Detecta, reporta y elimina transacciones duplicadas en archivos de intercambio.

## Sintaxis

```bash
cardak duplicates [OPCIONES] <archivo>
```
![Ejemplo de uso del comando DUPLICATES](/img/duplicates-1.png)

## Descripción

El comando `DUPLICATES` identifica transacciones duplicadas en un archivo de intercambio basándose en campos clave como número de tarjeta, monto, fecha, y otros identificadores.

## Opciones

### `--check`
Verifica si hay duplicados sin modificar el archivo.

**Ejemplo**:
```bash
cardak duplicates --check archivo.ipm
```

### `--remove`
Elimina las transacciones duplicadas.

**Ejemplo**:
```bash
cardak duplicates --remove archivo.ipm --output limpio.ipm
```

### `--report <archivo>`
Genera un reporte de duplicados.

**Ejemplo**:
```bash
cardak duplicates --report duplicados.txt archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Archivo de salida sin duplicados.

**Ejemplo**:
```bash
cardak duplicates --remove -o limpio.ipm archivo.ipm
```

### `--keep <opcion>`
Especifica qué registro mantener cuando hay duplicados.

Valores posibles:
- `first`: Mantener el primero (por defecto)
- `last`: Mantener el último

**Ejemplo**:
```bash
cardak duplicates --remove --keep last -o limpio.ipm archivo.ipm
```

### `--keys <campos>`
Campos a usar para determinar duplicados (separados por coma).

**Ejemplo**:
```bash
cardak duplicates --check --keys "DE002,DE004,DE007" archivo.ipm
```

## Criterios de Duplicados

Por defecto, se consideran duplicados los registros que coincidan en:

- **DE002**: Número de tarjeta (PAN)
- **DE004**: Monto de transacción
- **DE007**: Fecha y hora de transmisión
- **DE011**: STAN (System Trace Audit Number)

## Ejemplos de Uso

### Verificar si hay duplicados

```bash
cardak duplicates --check archivo.ipm
```

Salida ejemplo:
```
Analizando archivo: archivo.ipm
Total de registros: 5,234

Duplicados encontrados: 12 registros
  - 6 pares de duplicados exactos
  - Registros: 145, 146 | 289, 290 | 567, 568 | ...

Resumen:
  ✓ 5,222 registros únicos
  ✗ 12 registros duplicados
```

### Generar reporte detallado

```bash
cardak duplicates --report duplicados.txt archivo.ipm
```

Contenido de `duplicados.txt`:
```
=== Reporte de Duplicados ===
Archivo: archivo.ipm
Fecha: 2025-01-15 10:30:00

Duplicado #1:
  Registros: 145, 146
  PAN: 5123********1234
  Monto: $150.00
  Fecha: 2025-01-14 15:23:45

Duplicado #2:
  Registros: 289, 290
  PAN: 5123********5678
  Monto: $75.50
  Fecha: 2025-01-14 18:45:12
...
```

### Eliminar duplicados manteniendo el primero

```bash
cardak duplicates --remove --keep first -o limpio.ipm archivo.ipm
```

### Eliminar duplicados manteniendo el último

```bash
cardak duplicates --remove --keep last -o limpio.ipm archivo.ipm
```

### Usar criterios personalizados

```bash
cardak duplicates --check --keys "DE002,DE004" archivo.ipm
```

### Proceso completo

```bash
# 1. Verificar si hay duplicados
cardak duplicates --check archivo.ipm

# 2. Generar reporte detallado
cardak duplicates --report reporte_duplicados.txt archivo.ipm

# 3. Eliminar duplicados
cardak duplicates --remove -o limpio.ipm archivo.ipm

# 4. Verificar resultado
cardak describe limpio.ipm
```

## Notas

- El análisis no modifica el archivo original a menos que se use `--remove`
- Los registros de header y trailer no se consideran para duplicados
- Se recomienda revisar el reporte antes de eliminar duplicados
- Los totales del trailer se actualizan automáticamente al eliminar duplicados
- La detección es sensible a mayúsculas/minúsculas en campos de texto
- Para archivos muy grandes, el proceso puede tomar tiempo


