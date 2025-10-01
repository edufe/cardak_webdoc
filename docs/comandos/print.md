# PRINT

Imprime el contenido de un archivo de intercambio en formato legible.

## Sintaxis

```bash
cardak print [OPCIONES] <archivo>
```
```bash
$ cardak help print
usage: cardak print [<flags>] <files>...

print the contents of the file record by record

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -T, --file-type=FILE-TYPE  Filter by file type when supplying several files. File types are represented by a single letter as: I-IPM files, M-MPE files
  -R, --records=RECORDS      List of record numbers to be printed. Values are separated by comma (,) and ranges are indicated by the starting and ending
                             record separated by a hyphen (-)
  -F, --fields=FIELDS        List of IPM fields to be listed (can use a filter name)
  -d, --detailed             Print detailed information showing the contents of the fields
  -s, --subfields            Show subfields contents
  -C, --code=CODE            Filter by Function Code DESCRIPTION
  -l, --last                 Use the record numbers returned on the last GREP command

Args:
  <files>  File names to print
```
<!-- ![Ejemplo de uso del comando PRINT](/img/print-1.png) -->

## Descripción

Este comando se utiliza para visualizar los contenidos de archivos IPM.

Se recibe como parámetro el nombre del archivo a visualizar, y por defecto nos va a mostrar uno por uno los registros del archivo, indicando el numero de registro, su MTI y Function Code, así como una lista de campos DE y PDS presentes en cada registro.

Esta vista de por si no es de mucha utilidad, por lo que normalmente va en conjunto con el flag --detailed (-d) que nos muestra los valores de cada uno de los campos.

Como normalmente un archivo contiene muchos registros, la salida suele ser demasiado grande, y si bien es posible redireccionarla a un archivo de texto para luego ver su contenido con un editor de texto, el archivo generado puede llegar a ser muy grande.

Para ser mas prácticos, se suele agregar el flag --records (-R) donde indicamos los números de registro que deseamos ver, ignorando el resto.

Ademas, para reducir aun mas la salida, podemos especificar que campos queremos visualizar, utilizando el flag --fields (-F)

Podemos, al igual que con otros comandos, filtrar los registros por Function Code utilizando el flag --code (-C) y brindando un texto que se usara como filtro en la descripción del Function Code.

Otro flag que podemos utilizar es --subfields (-s) para mostrar los componentes de los subcampos en aquellos elementos que los tengan definidos.

Por ultimo, podemos utilizar el flag --last (-l) para mostrar solamente los registros devueltos por el ultimo comando GREP realizados sobre el archivo.

<!-- ### Formato Table

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
``` -->


<!-- ## Diferencias con EXPORT

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
- El comando no modifica el archivo original -->

