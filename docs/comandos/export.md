# EXPORT

Exporta datos de archivos de intercambio a formatos legibles como JSON, CSV o XML.

## Sintaxis

```bash
cardak export [OPCIONES] <archivo_entrada> <archivo_salida>
```
```bash
$ cardak help export
usage: cardak export [<flags>] <files>...

Exports the contents of the file as CSV (comma separated values) or HEX records

It can write the values to a file or display them on the console

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -T, --file-type=FILE-TYPE  Filter by file type when supplying several files. File types are represented by a single letter as: I-IPM files, M-MPE files
  -R, --records=RECORDS      List of record numbers to be exported. Values are separated by comma (,) and ranges are indicated by the starting and ending
                             record separated by a hyphen (-)
  -F, --fields=FIELDS        List of IPM fields to be exported (can use a filter name)
      --console              Do now wirite the file and display output on console
  -C, --code=CODE            Filter by Function Code description
  -x, --hex                  Export a .ckh file with records in HEX format
  -l, --last                 Use the record numbers returned on the last GREP command

Args:
  <files>  File names to export
```
<!-- ![Ejemplo de uso del comando EXPORT](/img/export-1.png) -->

## Descripción

Este comando permite extraer registros completos o parciales de archivos IPM y guardarlos en archivos en formato CSV o HEX, que pueden ser utilizados por programas externos, o como fuente para ser importados en otros archivos IPM

En su defecto, cuando no se especifican otras opciones, se genera un archivo CSV con el mismo nombre del original, pero agregándole “-EXP.csv”

Este archivo puede ser abierto en una planilla tipo Excel para manipular sus datos utilizando las herramientas que ofrecen estas planillas.

Los campos binarios se muestran mediante su representación en Hexa

Si quisiéramos exportar solamente algunos registros, podemos utilizar el flag -R, y si solamente queremos incluir algunos campos, podemos utilizar el flag -F (por mas información de como utilizar estos filtros, por favor leer la sección Flags y Filtros )

Podemos utilizar el flag --hex (x) para exportar los registros en un archivo de formato HEX y no en CSV. En este caso, se ignora el filtro por campo y se exportan los registros completos.

Tenemos la opción de mostrar los registros exportados (en el formato solicitado) por consola sin generar ningún archivo. Para eso debemos utilizar la opción --console

Por ultimo, podemos utilizar la opción --last para exportar los registros devueltos por el ultimo comando GREP realizado sobre el archivo.