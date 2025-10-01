# CREATE

Crea un nuevo archivo de intercambio desde cero o a partir de plantillas.

## Sintaxis

```bash
cardak create [OPCIONES] <archivo_salida>
```
```bash
$ cardak help create
usage: cardak create [<flags>] <file>

Create a new IPM file

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
      --import=IMPORT        File containing the records to be imported
      --pds105=PDS105        String representing the value of PDS 0105
      --file-type=FILE-TYPE  File Type to be used in the header
      --file-date=FILE-DATE  File date, defaults to today
      --processor-id=PROCESSOR-ID
                             The processor ID
      --sequence-number=SEQUENCE-NUMBER
                             The sequence number
      --processing-mode=PROCESSING-MODE
                             The processing mode, T or P
      --encoding=ENCODING    Encoding for new file, default ASCII
      --block                If present, the file will be in block 1014

Args:
  <file>  IPM file name to create
  ```
<!-- ![Ejemplo del comando CREATE](/img/convert-2.png) -->

## Descripción

Con este comando podemos crear un nuevo archivo IPM y opcionalmente cargar registros exportados previamente mediante el comando EXPORT

Para la creación del nuevo archivo, necesitamos indicar el valor del File ID que forma parte del cabezal del archivo, y el File Processing Mode. Podemos indicar el contenido completo del PDS 0105 (los 25 caracteres del File ID), o indicar los subcampos de dicho PDS.

Si decidimos indicar los subcampos, es necesario al menos indicar el SF 01(File Type) y el SF 03 (Processor ID). Si no indicamos el SF 02 (File Reference Date) se va a tomar por defecto la fecha actual, y para el SF 04 (File Sequence Number) se toma el valor 1000

Si no indicamos el Processing Mode, se va a tomar por defecto el valor “T” (Test)

Otros parámetros a indicar son la codificación (si no indicamos nada, se asume ASCII) y si el archivo va a estar o no en Block 1014 (por defecto no)

Si no indicamos un archivo que contenga registros previamente exportados, se va a generar un archivo “vacio”, es decir, conteniendo solamente un Header y un Trailer

En caso de indicar un archivo con registros exportados previamente, el mismo puede ser un export en formato CSV completo, o un export en formato HEX (extension .ckh)
