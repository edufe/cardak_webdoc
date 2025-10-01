# IDENTIFY

Identifica automáticamente el formato y características de un archivo de intercambio.

## Sintaxis

```bash
cardak identify [OPCIONES] <archivo>
```
```bash
$ cardak help identify
usage: cardak identify [<flags>] <files>...

Identify the file type. This is the default command if none is specified

Flags:
      --help      Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose   Add more information displayed on some commands.
      --mono      Supress color on output.
      --ignore    Try to ignore some errors and continue processing the file
  -W, --width     Ignore small terminal width check and force execution
  -z, --silent    Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf
      --detailed  Force detailed information regardless of number of files. This option displays more than one line per file
      --compact   Force compact information regardless of number of files. This option displays summary information on just one line per file
  -a, --analyze   Analyze the contents of the file (for IPM files) and show extended information

Args:
  <files>  List of files to be identified.
```

## Descripción
Cuando no especificamos ningún comando, se asume IDENTIFY

Este comando recibe una lista de nombres de archivos y muestra información sobre los mismos, como ser el tamaño (en bytes), la codificación utilizada, el tipo de registros y si el archivo esta en bloques de 1014.

Si solamente indicamos un archivo, se muestra información detallada del mismo, de lo contrario, se muestra en forma compacta (información de un archivo por linea).

De todos modos podemos forzar la salida usando los flags --detailed o --compact

Si agregamos el flag --analyze (-a), se procederá a leer el contenido de los archivos y efectuar un análisis para determinar la cantidad de registros presentes, realizar un chequeo rápido para encontrar errores, y también mostrar algunas estadísticas, como por ejemplo la cantidad de archivos lógicos y cantidad de registros por cada uno, la cantidad de registros por MTI, cantidad de registros por Transaction Type, y la cantidad de registros por MCC (si agregamos la opción --verbose)
