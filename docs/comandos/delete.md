# DELETE

Elimina registros específicos de un archivo de intercambio.

## Sintaxis

```bash
cardak delete [OPCIONES] <archivo_entrada> <archivo_salida>
```

## Descripción

El comando `DELETE` permite eliminar registros de un archivo de intercambio basándose en diversos criterios de filtrado.

## Opciones de Filtrado

### `--record-number <numero>`
Elimina un registro específico por su número.

**Ejemplo**:
```bash
cardak delete --record-number 150 archivo.ipm salida.ipm
```

### `--range <inicio>-<fin>`
Elimina un rango de registros.

**Ejemplo**:
```bash
cardak delete --range 100-200 archivo.ipm salida.ipm
```

### `--record-type <tipo>`
Elimina todos los registros de un tipo específico.

**Ejemplo**:
```bash
cardak delete --record-type "0240" archivo.ipm salida.ipm
```

### `--field <campo>`
Campo a evaluar para el filtro.

### `--value <valor>`
Valor que debe tener el campo para eliminar el registro.

**Ejemplo**:
```bash
cardak delete --field PDS0023 --value "123456" archivo.ipm salida.ipm
```

### `--condition <condicion>`
Condición compleja para eliminación.

**Ejemplo**:
```bash
cardak delete --condition "DE004 > 100000" archivo.ipm salida.ipm
```

## Opciones Adicionales

### `--dry-run`
Muestra qué registros serían eliminados sin eliminarlos realmente.

**Ejemplo**:
```bash
cardak delete --field PDS0023 --value "123456" --dry-run archivo.ipm
```

### `--verbose` o `-v`
Muestra información detallada sobre los registros eliminados.

## Ejemplos de Uso

### Eliminar un registro específico

```bash
cardak delete --record-number 500 archivo.ipm limpio.ipm
```

### Eliminar un rango de registros

```bash
cardak delete --range 100-200 archivo.ipm limpio.ipm
```

### Eliminar por BIN específico

```bash
cardak delete --field PDS0023 --value "456789" archivo.ipm limpio.ipm
```

### Eliminar transacciones grandes

```bash
cardak delete --condition "DE004 > 1000000" archivo.ipm limpio.ipm
```

### Vista previa antes de eliminar

```bash
# Primero ver qué se eliminaría
cardak delete --field PDS0023 --value "123456" --dry-run archivo.ipm

# Si está correcto, ejecutar sin --dry-run
cardak delete --field PDS0023 --value "123456" archivo.ipm limpio.ipm
```

## Notas

- Usar `--dry-run` primero es una buena práctica
- Los registros de header y trailer no se pueden eliminar
- La eliminación no modifica el archivo original
- Se actualizan automáticamente los totales en header y trailer
- Se recomienda validar el archivo resultante

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando DELETE](/img/delete-1.png)

![Ejemplo adicional del comando DELETE](/img/delete-2.png)

![Ejemplo adicional del comando DELETE](/img/delete-3.png)

![Ejemplo adicional del comando DELETE](/img/delete-4.png)

![Ejemplo adicional del comando DELETE](/img/delete-5.png)

![Ejemplo adicional del comando DELETE](/img/delete-6.png)

![Ejemplo adicional del comando DELETE](/img/delete-7.png)

