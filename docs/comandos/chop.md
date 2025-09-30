# CHOP

Extrae un rango específico de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak chop [OPCIONES] <archivo_entrada> [archivo_salida]
```

## Descripción

El comando `CHOP` permite extraer una porción específica de registros de un archivo de intercambio, especificando un rango de inicio y fin. Es útil para crear archivos de prueba o extraer subconjuntos específicos de transacciones.

## Opciones

### `--start <numero>`
Número de registro inicial (comienza en 1).

**Ejemplo**:
```bash
cardak chop --start 100 archivo.ipm
```

### `--end <numero>`
Número de registro final (inclusive).

**Ejemplo**:
```bash
cardak chop --start 100 --end 200 archivo.ipm
```

### `--count <numero>`
Número de registros a extraer desde el inicio.

**Ejemplo**:
```bash
cardak chop --start 100 --count 50 archivo.ipm
```

### `--output <archivo>` o `-o <archivo>`
Archivo de salida. Si no se especifica, se usa stdout.

**Ejemplo**:
```bash
cardak chop --start 1 --end 100 -o primeros_100.ipm archivo.ipm
```

## Ejemplos de Uso

### Extraer los primeros 100 registros

```bash
cardak chop --start 1 --count 100 archivo.ipm -o inicio.ipm
```

### Extraer registros del 500 al 1000

```bash
cardak chop --start 500 --end 1000 archivo.ipm -o rango.ipm
```

### Extraer registros desde el 1000 hasta el final

```bash
cardak chop --start 1000 archivo.ipm -o final.ipm
```

## Notas

- Los números de registro comienzan en 1, no en 0
- Si no se especifica `--end`, se extraen todos los registros desde `--start` hasta el final
- El archivo de salida mantiene el mismo formato que el archivo de entrada
- Los registros de header y trailer se mantienen si están en el rango especificado

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando CHOP](/img/chop-1.png)

