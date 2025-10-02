# CONVERT

Convierte archivos de intercambio entre diferentes formatos y codificaciones.

## Sintaxis

```bash
cardak convert [OPCIONES] <archivo_entrada> <archivo_salida>
```

```bash
$ cardak help convert
usage: cardak convert [<flags>] <format> <files>...

Convert files between formats.

Files have three characteristics:

  Encoding         : Which characters each byte value represents (ASCII or EBCDIC are supported)
  Record definition: Records can be of fixed length, delimited, or determined by a length
  File packing     : Then can have no packing (NORMAL) or can be packed in blocks (typically 1014)

This tool allow to convert files changing those formats

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
  <format>  New file format The format consists of three consecutive characters that indicate the Encoding, the record format, and the file format. Valid
            values are:

              Encoding      : [E] - EBCDIC, [A] - ASCII
              Record format : [R] - RDW, [F] - Fixed 1400, [1] - Fixed 1400, [6] - Fixed 600, [D] - Delimited
              File format   : [B] - Block 1014, [N] - Normal
  <files>   List of files. This can be a single file or you can use wildcards
```
<!-- ![Ejemplo de uso del comando CONVERT](/img/convert-1.png) -->

## Descripción

Este comando permite convertir el formato de archivos.

Los archivos y en particular los que utiliza MasterCard, tienen tres propiedades que son la codificación, el formato del registro, y el formato del archivo.

Las codificaciones utilizadas son ASCII o EBCDIC

El formato del registro puede ser de longitud variable, de longitud fija, o delimitado.

Los archivos IPM y MPE manejados por MasterCard contienen registros de longitud variable. Archivos manejados por otras marcas, suelen ser de longitud fija (típicamente de 600 o 1400 caracteres), y archivos de texto son delimitados (en Windows por los bytes 0x0A y 0x0D) y en Unix y variantes, por el carácter 0x0D

Por ultimo, MasterCard suele marcar el contenido de sus archivos de intercambios en bloques de 1014 bytes, es decir, los archivos contienen bloques de 1014 bytes (por lo que su tamaño es siempre múltiplo de ese valor), y en cada bloque, el contenido del archivo esta en los primeros 1012 bytes, agregando dos bytes con el valor 0x40 cada uno para completar el bloque. A su vez, el ultimo bloque es es completado con el valor 0x40 hasta llegar a 1014 bytes si los bytes del dato no llegan a los 1012 bytes.

Generalmente, los sistemas que generan o procesan archivos de intercambio con MasterCard suelen estar configurados para procesar solamente una combinación de estos valores, por lo que es importante estipular con la marca cual sera el formato a utilizar. En etapas tempranas, especialmente durante el desarrollo, test y certificación, suele suceder que los archivos no están en el formato correcto, lo que hace necesario cambiar la configuración del sistema en cada caso.

Esta herramienta permite convertir el formato de un archivo, independientemente de cual sea ese formato, en un archivo en el formato deseado.

El formato lo especificamos utilizando tres letras (consecutivas, sin espacios), donde la primera corresponde a la codificación, la segunda al tipo de registro, y la tercera al formato del archivo.

Para la codificación, utilizaremos la letra A para indicar ASCII, o la letra E para indicar EBCDIC (las dos opciones utilizadas en los archivos de intercambio)

Para el tipo de registro utilizaremos R para registro de longitud variable (o RDW), F o 1 para registros de longitud fija de 1400 caracteres, 6 para registros de longitud fija de 600 caracteres, o D para archivos delimitados (el delimitador va a depender de si estamos utilizando la herramienta bajo Windows o Linux)

Por ultimo, para la tercer opción, utilizaremos la letra B si queremos que el archivo quede en bloques de 1014, o N si queremos que el archivo quede en formato normal (sin bloques)

El primer parámetro debe ser el formato, y a continuación viene uno o mas nombres de archivos para convertir.

El archivo convertido se nombra a partir del nombre del archivo original, un punto y las tres letras correspondientes al formato, mas los caracteres “.cvt”

Este comando se puede utilizar con cualquier tipo de archivo, pero los archivos IPM son tratados en forma diferente, ya que pueden contener datos que son binarios y no debemos intentar convertir su formato ya que estaríamos cambiando el valor y su significado. Por eso, la herramienta, al detectar que se trata de un archivo IPM, interpreta los registros y solamente cambia la codificación de aquellos campos que no son binarios.

Este comando esta optimizado y procesa los registros uno por uno, por lo que es capaz de trabajar con archivos grandes sin requerir un uso excesivo de memoria.

Podemos utilizar el flag -T para indicar el tipo de archivo que queremos procesar de la lista de archivos indicados. Esto nos permite utilizar comodines pero solamente aplicarlo a aquellos archivos del tipo especificado. Actualmente podemos indicar el tipo utilizando la letra I para archivos IPM, y la letra M para archivos de MPE