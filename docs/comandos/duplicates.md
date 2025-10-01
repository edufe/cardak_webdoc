# DUPLICATES

Detecta, reporta y elimina transacciones duplicadas en archivos de intercambio.

## Sintaxis

```bash
cardak duplicates [OPCIONES] <archivo>
```
```bash
$ cardak help duplicates
usage: cardak duplicates [<flags>] <files>...

Find identical records inside the same file

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -T, --file-type=FILE-TYPE  Filter by file type when supplying several files. File types are represented by a single letter as: I-IPM files, M-MPE files

Args:
  <files>  File names to analyze
```
<!-- ![Ejemplo de uso del comando DUPLICATES](/img/duplicates-1.png) -->

## Descripción

Este comando permite buscar registros duplicados en archivos IPM

Dos registros se consideran duplicados cuando contienen la misma información en todos los campos excepto en el DE71 (que es el numero de registro, en caso de duplicados, seguramente este campo pueda tener un valor diferente en cada uno)