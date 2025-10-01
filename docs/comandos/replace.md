# REPLACE

Reemplaza valores en campos específicos de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak replace [OPCIONES] <archivo_entrada> <archivo_salida>
```
```bash
$ cardak help replace
usage: cardak replace --search=SEARCH --replace=REPLACE [<flags>] <files>...

Search and replace values in files

Flags:
      --help             Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose          Add more information displayed on some commands.
      --mono             Supress color on output.
      --ignore           Try to ignore some errors and continue processing the file
  -W, --width            Ignore small terminal width check and force execution
  -z, --silent           Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility
                         like fzf
  -s, --search=SEARCH    Value of condition to search for
  -r, --replace=REPLACE  Value to use for the sustitution
  -R, --records=RECORDS  List of record numbers to be Searched. Values are separated by comma (,) and ranges are indicated by the starting and ending record
                         separated by a hyphen (-)
  -F, --fields=FIELDS    List of IPM fields to be searched (can use a filter name)
  -l, --last             Use the record numbers returned on the last GREP command

Args:
  <files>  File names to search and replace
```

## Descripción

Este comando permite reemplazar valores en un archivo IPM. El valor a buscar se indica con el flag --search (-s) y el valor a reemplazar se indica con el flag --replace (-r)

El valor a buscar puede indicarse como un valor constante, o utilizar expresiones regulares.

Si queremos limitar la búsqueda y reemplazo a ciertos registros, podemos utilizar el flag --records (-R), y si queremos limitarnos a buscar y reemplazar en ciertos campos, podemos utilizar el flag --fields (-F)

También podemos utilizar el resultado del ultimo GREP realizado utilizando --last (-L) para hacer el reemplazo solamente en los registros devueltos por el ultimo comando GREP