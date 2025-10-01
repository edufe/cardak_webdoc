# IMPORT

Importa datos desde formatos externos (JSON, CSV, XML) para crear archivos de intercambio IPM.

## Sintaxis

```bash
cardak import [OPCIONES] <archivo_entrada> <archivo_salida>
```
```bash
$ cardak help import
usage: cardak import <file> <source>...

Import records into the specified IPM file from files containing hex or csv records

Flags:
      --help     Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose  Add more information displayed on some commands.
      --mono     Supress color on output.
      --ignore   Try to ignore some errors and continue processing the file
  -W, --width    Ignore small terminal width check and force execution
  -z, --silent   Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf

Args:
  <file>    IPM file name where imported records will be added
  <source>  File that contains the records to be imported (hex or csv)
```
<!-- ![Ejemplo de uso del comando IMPORT](/img/import-1.png) -->

## Descripción

Este comando efectúa la operación inversa al comando EXPORT

Nos permite agregar a un archivo IPM, registros previamente exportados. Se pueden importar archivos HEX o CSV que contengan un export de registros completos.