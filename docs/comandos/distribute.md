# DISTRIBUTE

Distribuye registros de un archivo en múltiples archivos de salida según criterios específicos.

## Sintaxis

```bash
cardak distribute [OPCIONES] <archivo_entrada>
```

## Descripción

El comando `DISTRIBUTE` divide un archivo de intercambio en múltiples archivos basándose en criterios como BIN, fecha, tipo de transacción, u otros campos. Es útil para separar transacciones para procesamiento individual o enrutamiento a diferentes destinos.

## Opciones

### `--by-bin`
Distribuye por número BIN (los primeros 6 dígitos de la tarjeta).

**Ejemplo**:
```bash
cardak distribute --by-bin archivo.ipm
```

Crea archivos: `archivo_123456.ipm`, `archivo_234567.ipm`, etc.

### `--by-date`
Distribuye por fecha de transacción.

**Ejemplo**:
```bash
cardak distribute --by-date archivo.ipm
```

### `--by-field <campo>`
Distribuye según el valor de un campo específico.

**Ejemplo**:
```bash
cardak distribute --by-field DE049 archivo.ipm
```

### `--by-type`
Distribuye por tipo de registro.

**Ejemplo**:
```bash
cardak distribute --by-type archivo.ipm
```

### `--output-dir <directorio>`
Directorio donde guardar los archivos distribuidos.

**Ejemplo**:
```bash
cardak distribute --by-bin --output-dir ./distribuidos archivo.ipm
```

### `--prefix <prefijo>`
Prefijo para los archivos de salida.

**Ejemplo**:
```bash
cardak distribute --by-bin --prefix "distribuido_" archivo.ipm
```

## Ejemplos de Uso

### Distribuir por BIN

```bash
cardak distribute --by-bin --output-dir ./por_bin archivo.ipm
```

### Distribuir por fecha

```bash
cardak distribute --by-date --output-dir ./por_fecha archivo.ipm
```

### Distribuir por moneda

```bash
cardak distribute --by-field DE049 --output-dir ./por_moneda archivo.ipm
```

### Distribuir con prefijo personalizado

```bash
cardak distribute --by-bin --prefix "bank_" --output-dir ./bancos archivo.ipm
```

## Notas

- Cada archivo de salida incluye su propio header y trailer
- Los totales se recalculan para cada archivo
- El directorio de salida se crea si no existe
- Los nombres de archivo se generan automáticamente basándose en el criterio
- Se mantiene el formato del archivo original

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando DISTRIBUTE](/img/distribute-1.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-2.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-3.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-4.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-5.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-6.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-7.png)

![Ejemplo adicional del comando DISTRIBUTE](/img/distribute-8.png)

