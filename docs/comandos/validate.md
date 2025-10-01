# VALIDATE

Valida la estructura e integridad de un archivo de intercambio.

## Sintaxis

```bash
cardak validate [OPCIONES] <archivo>
```
```bash
$ cardak help validate
usage: cardak validate [<flags>] <files>...

Validate the IPM files

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -T, --file-type=FILE-TYPE  Filter by file type when supplying several files. File types are represented by a single letter as: I-IPM files, M-MPE files
      --mcc                  Check that MCC values are valid (incomplete list, use with caution)
      --fail                 Just display the list of file names that have errors
      --pass                 Just display the list of file names that don't have errors

Args:
  <files>  List of files to validate.
```
<!-- ![Ejemplo de uso del comando VALIDATE](/img/validate-1.png) -->

## Descripción

Este comando hace una verificación de la integridad y correctitud de los datos contenidos en un archivo IPM. Es una versión mas avanzada al comando IDENTIFY con el parámetro --analyze, y esta pensado para ser utilizado en sistemas de automatización.

Se analizan los archivos indicados y se presentan los resultados de cada uno de los archivos, indicando el resultado de la validación como PASS o FAIL

Ademas, se devuelve al sistema operativo un código que es cero si todos los archivos pasan la prueba correctamente, o con valor 1 si alguno de los archivos contiene errores.

Se muestra, ademas, si los errores encontrados pueden ser corregidos automáticamente (con el comando FIX por ejemplo) o no, ademas de mostrar la cantidad de registros que contienen errores..

Como variantes, podemos agregar el flag --silent (-z) para tener una salida compacta que puede ser analizada por algún proceso externo.

Otra variante es utilizar el flag --pass para tener la lista de archivos sin errores, o el flag --fail para obtener la lista de archivos con errores. Esto permite procesar automáticamente los archivos en función de si tienen o no errores, como ser moverlos a otras carpetas, enviar alertas, etc.