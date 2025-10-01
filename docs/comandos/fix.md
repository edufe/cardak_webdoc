# FIX

Repara archivos de intercambio con problemas estructurales o de integridad.

## Sintaxis

```bash
cardak fix [OPCIONES] <archivo_entrada> <archivo_salida>
```
```bash
$ cardak help fix
usage: cardak fix [<flags>] <files>...

Fixes an IPM file that has errors

Flags:
      --help           Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose        Add more information displayed on some commands.
      --mono           Supress color on output.
      --ignore         Try to ignore some errors and continue processing the file
  -W, --width          Ignore small terminal width check and force execution
  -z, --silent         Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like
                       fzf
      --format=FORMAT  Optional format for the fixed files

Args:
  <files>  File names to fix
```
<!-- ![Ejemplo de uso del comando FIX](/img/fix-1.png) -->

## Descripción

Con este comando podemos intentar corregir errores en archivos.

No todos los tipos de error pueden ser corregidos automáticamente, en particular cuando faltan campos mandatorios o falta algún header, no suele ser posible la corrección automática.

Se genera un archivo con nombre igual al original pero agregándole “-FIX.ipm” al final. El nuevo archivo generado tiene por defecto el mismo formato que el original, pero podemos especificar un formato diferente mediante la opción --format