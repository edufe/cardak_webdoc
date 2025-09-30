# PRINT

Imprime el contenido de un archivo de intercambio en formato legible.

## Sintaxis

```bash
cardak print [OPCIONES] <archivo>
```

## Descripción

El comando `PRINT` muestra el contenido de un archivo de intercambio en la consola de manera legible, similar a comandos como `cat` pero con formato específico para archivos IPM.

## Opciones

### `--format <formato>`
Formato de salida.

Valores posibles:
- `text`: Formato texto (por defecto)
- `table`: Formato tabla
- `hex`: Vista hexadecimal
- `raw`: Datos crudos

**Ejemplo**:
```bash
cardak print --format table archivo.ipm
```

### `--records <rango>`
Imprime solo registros específicos.

**Ejemplo**:
```bash
cardak print --records 1-10 archivo.ipm
cardak print --records 100,200,300 archivo.ipm
```

### `--record-type <tipo>`
Imprime solo registros de un tipo específico.

**Ejemplo**:
```bash
cardak print --record-type "0240" archivo.ipm
```

### `--fields <campos>`
Muestra solo campos específicos (separados por coma).

**Ejemplo**:
```bash
cardak print --fields "DE002,DE004,DE049" archivo.ipm
```

### `--limit <numero>`
Limita el número de registros a imprimir.

**Ejemplo**:
```bash
cardak print --limit 50 archivo.ipm
```

### `--no-header`
No muestra el registro de header.

**Ejemplo**:
```bash
cardak print --no-header archivo.ipm
```

### `--no-trailer`
No muestra el registro de trailer.

**Ejemplo**:
```bash
cardak print --no-trailer archivo.ipm
```

### `--mask-pan`
Enmascara números de tarjeta (PANs).

**Ejemplo**:
```bash
cardak print --mask-pan archivo.ipm
```

## Formatos de Salida

### Formato Text

```bash
cardak print --format text archivo.ipm
```

Salida:
```
=== Record #1 - Type: 0000 (Header) ===
Record Type: 0000
Date: 2025-01-15
File ID: ABC123
Sender: 123456
Receiver: 789012

=== Record #2 - Type: 0240 (Transaction) ===
Record Type: 0240
DE002: 5123456789012345
DE004: 000000015000 ($150.00)
DE007: 0115123045 (2025-01-15 12:30:45)
DE011: 123456
DE049: 840 (USD)
...
```

### Formato Table

```bash
cardak print --format table archivo.ipm
```

Salida:
```
╔═══════╦══════╦══════════════════╦════════════╦══════════╦═════════════╗
║ #     ║ Tipo ║ PAN              ║ Monto      ║ Moneda   ║ Fecha       ║
╠═══════╬══════╬══════════════════╬════════════╬══════════╬═════════════╣
║ 1     ║ 0000 ║ [Header]         ║ -          ║ -        ║ 2025-01-15  ║
║ 2     ║ 0240 ║ 5123****1234     ║ $150.00    ║ USD      ║ 01-15 12:30 ║
║ 3     ║ 0240 ║ 5123****5678     ║ $75.50     ║ USD      ║ 01-15 12:31 ║
║ 4     ║ 0240 ║ 5123****9012     ║ $200.00    ║ USD      ║ 01-15 12:32 ║
║ ...   ║ ...  ║ ...              ║ ...        ║ ...      ║ ...         ║
╚═══════╩══════╩══════════════════╩════════════╩══════════╩═════════════╝
```

### Formato Hex

```bash
cardak print --format hex --records 1 archivo.ipm
```

Salida:
```
=== Record #1 - Offset: 0x0000 - Length: 144 bytes ===

00000000: 30 30 30 30 20 32 30 32  35 30 31 31 35 41 42 43  |0000 20250115ABC|
00000010: 31 32 33 34 35 36 37 38  39 30 31 32 33 34 35 36  |1234567890123456|
00000020: 20 20 20 20 20 20 20 20  20 20 20 20 20 20 20 20  |                |
...
```

## Ejemplos de Uso

### Imprimir todo el archivo

```bash
cardak print archivo.ipm
```

### Imprimir primeros 10 registros

```bash
cardak print --limit 10 archivo.ipm
```

### Imprimir rango de registros

```bash
cardak print --records 100-200 archivo.ipm
```

### Imprimir solo transacciones

```bash
cardak print --record-type "0240" --format table archivo.ipm
```

### Imprimir campos específicos

```bash
cardak print --fields "DE002,DE004,DE007,DE049" --format table archivo.ipm
```

### Imprimir con PANs enmascarados

```bash
cardak print --mask-pan --format table archivo.ipm
```

### Imprimir sin header ni trailer

```bash
cardak print --no-header --no-trailer archivo.ipm
```

### Imprimir registros específicos en hexadecimal

```bash
cardak print --format hex --records 150-152 archivo.ipm
```

### Imprimir y paginar

```bash
cardak print archivo.ipm | less
```

### Imprimir y guardar en archivo

```bash
cardak print --format text archivo.ipm > salida.txt
```

### Imprimir resumen tabular

```bash
cardak print \
  --format table \
  --fields "DE002,DE004,DE049,DE007" \
  --record-type "0240" \
  --limit 100 \
  --mask-pan \
  archivo.ipm
```

## Uso en Pipelines

### Con grep

```bash
cardak print archivo.ipm | grep "512345"
```

### Contar registros de un tipo

```bash
cardak print --record-type "0240" archivo.ipm | grep "Record #" | wc -l
```

### Extraer campo específico

```bash
cardak print --fields "DE004" --no-header --no-trailer archivo.ipm
```

## Diferencias con EXPORT

| Característica | PRINT | EXPORT |
|---------------|-------|--------|
| Salida | Consola (stdout) | Archivo |
| Formato | Texto legible | JSON/CSV/XML |
| Propósito | Visualización rápida | Procesamiento posterior |
| Estructura | Formateado para lectura | Datos estructurados |
| Uso | Inspección manual | Automatización |

## Notas

- `PRINT` es para visualización rápida, no procesamiento
- Para exportar datos, use el comando `EXPORT`
- Los PANs se enmascaran por defecto en formato table
- Use `--format hex` para depuración de bajo nivel
- El formato table se adapta al ancho de la terminal
- Para archivos grandes, use `--limit` o `--records`
- Combine con `less` o `more` para paginación
- El comando no modifica el archivo original

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando PRINT](/img/print-1.png)

![Ejemplo adicional del comando PRINT](/img/print-2.png)

