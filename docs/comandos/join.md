# JOIN

Combina múltiples archivos de intercambio en un solo archivo consolidado.

## Sintaxis

```bash
cardak join [OPCIONES] <archivo1> <archivo2> [archivo3...] --output <archivo_salida>
```
```bash
$ cardak help join
usage: cardak join [<flags>] <files>...

Join several phisical files as logical files into one file

Flags:
      --help           Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose        Add more information displayed on some commands.
      --mono           Supress color on output.
      --ignore         Try to ignore some errors and continue processing the file
  -W, --width          Ignore small terminal width check and force execution
  -z, --silent         Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like
                       fzf
  -o, --output=OUTPUT  Name of the generated file
  -f, --fix            Automatically fix the resulting file
  -m, --merge          Merge the file records instead of generating logical files

Args:
  <files>  List of files to join
```
<!-- ![Ejemplo de uso del comando JOIN](/img/join-1.png) -->

## Descripción

Este comando se usa para unir varios archivos IPM en otro. Simplemente se indica una lista de archivos y se genera otro conteniendo los registros de todos esos archivos.

Por defecto, el comando genera un nuevo archivo y coloca los contenidos de los archivos indicados como archivos lógicos, por lo que los registros continúan separados en sus respectivos archivos lógicos.

Podemos cambiar este comportamiento con el flag --merge (-m), donde todos los registros de los diferentes archivos quedaran contenidos en un solo archivos lógico. El header de este archivo lógico sera el mismo que el del primer archivo indicado como parámetro en el join.

Tenemos ademas la posibilidad de utilizar el flag --fix (-f) para corregir automáticamente errores que puedan encontrarse en los archivos a unir.