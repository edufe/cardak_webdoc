# GREP

Busca patrones específicos en campos de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak grep [OPCIONES] <patron> <archivo>
```
```bash
$ cardak help grep
usage: cardak grep [<flags>] <criteria> <files>...

Find data in files.

It can search for values regardless of the file format, and it has the ability to understand IPM records to specify in what fields to perform the search

Flags:
      --help                 Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose              Add more information displayed on some commands.
      --mono                 Supress color on output.
      --ignore               Try to ignore some errors and continue processing the file
  -W, --width                Ignore small terminal width check and force execution
  -z, --silent               Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search
                             utility like fzf
  -T, --file-type=FILE-TYPE  Filter by file type when supplying several files. File types are represented by a single letter as: I-IPM files, M-MPE files
  -R, --records=RECORDS      List of record numbers to be searched. Values are separated by comma (,) and ranges are indicated by the starting and ending
                             record separated by a hyphen (-)
  -F, --fields=FIELDS        List of IPM fields to list from a matching record, even if these fields don-t have a match (can use a filter name)
      --summary              Only display file names and the matching count for each one.
      --matches              Only display file names and the list of record numbers that match.
  -C, --code=CODE            Filter by Function Code description

Args:
  <criteria>  Search criteria. This is a list of criteria, elements separated by a comma (,) are ANDed together, while elements separated by a semi-colon
              are ORed together. Each element consists of an optional field descriptor followed by a colon (:) and the value to search. Field descriptors
              consist of an optional letter (D-DE fields, P-PDS fields) and the corresponding field number. If the field descriptor consist of only numbers,
              then a three digit number is taken as a DE field, and a four digit number is taken as a PDS field. An example could be: 'DE43:Supermarket' to
              search for records having field DE43 that contain the string "Supermarket"
  <files>     List of files. This can be a single file or you can use wildcards
```
<!-- ![Ejemplo de uso del comando GREP](/img/grep-1.png) -->

## Descripción

Este comando sirve para realizar búsquedas en archivos IPM.

El primer parámetro es el criterio de búsqueda, y el resto son nombres de archivos donde realizar la búsqueda.

Ese primer parámetro consiste en una lista de criterios individuales, donde cada uno de ellos es, o bien un valor a buscar en todos los campos del registro, o bien un identificador de campo y el valor a buscar, separados por punto y coma (:). Este identificador de campo obedece a la forma normal de definir identificadores de campos (ver la sección Flags y Filtros para mas información)

Esta lista de criterios puede estar formada por uno o mas criterios. Los criterios separados por una coma (,) se unen mediante la operación lógica AND (o sea, deben cumplirse todos ellos para considerar una coincidencia), y los separados por punto y coma (;) se unen mediante la operación lógica OR

Podemos limitar la búsqueda solamente en algunos registros. Para eso utilizamos el flag -R donde especificamos la lista de números de registro o rangos donde realizar la búsqueda.

El flag -F nos permite definir una lista de campos que serán mostrados de los registros que coincidan con el criterio de búsqueda, aunque no formen parte del criterio de la misma. Esto es útil para visualizar valores de registros que buscamos independientemente del criterio de búsqueda.

Si aplicamos el flag --summary, solamente mostraremos los nombres de archivo y la cantidad de coincidencias encontradas en cada uno

Aplicando el flag --matches, mostraremos el nombre del archivo y la lista de registros donde se encontraron coincidencias.

Otro filtro que podemos aplicar para limitar la búsqueda, es mediante el flag --code (-C), donde podemos colocar un texto que forme parte de la descripción del Function Code deseado (por ejemplo “Second Presentment”, o “Partial”)

<!-- ## Campos Comunes

Campos frecuentemente buscados:

- **DE002**: PAN (Primary Account Number)
- **DE004**: Monto de transacción
- **DE007**: Fecha y hora de transmisión
- **DE011**: STAN (System Trace Audit Number)
- **DE049**: Código de moneda
- **PDS0023**: BIN (primeros 6 dígitos del PAN)
- **DE032**: Acquiring Institution ID
- **DE033**: Forwarding Institution ID -->
