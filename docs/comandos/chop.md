# CHOP

Extrae un rango específico de registros de un archivo de intercambio.

## Sintaxis

```bash
cardak chop [OPCIONES] <archivo_entrada> [archivo_salida]
```

```bash
$ cardak help chop
usage: cardak chop [<flags>] <file>

Create smaller physical files from an IPM file

Flags:
      --help        Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose     Add more information displayed on some commands.
      --mono        Supress color on output.
      --ignore      Try to ignore some errors and continue processing the file
  -W, --width       Ignore small terminal width check and force execution
  -z, --silent      Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like
                    fzf
  -m, --max=100000  Maximum number of records for each generated file

Args:
  <file>  File name to chop
  ```
<!-- ![Ejemplo de uso del comando CHOP](/img/chop-1.png) -->

## Descripción

Este comando sirve para fraccionar archivos granes en archivos mas pequeños, lo que facilita su uso, particularmente con comandos como OPEN, donde el consumo de memoria se incrementa de acuerdo al numero de registros, y podemos quedarnos sin recursos al intentar trabajar con archivos grandes.

Como ejemplo, un archivo con 50.000 registros consume un poco mas de 1 Gb de memoria, y uno de 100.000 registros consume unos 2.2 Gb de memoria, por lo que trabajar con archivos con mas cantidad de registros se puede volver poco practico. Con este comando podemos fraccionar un archivo con gran cantidad de registros en archivos mas chicos y manejables.

Si bien la mayoría de los comandos utilizan un método que consiste en ir procesando los registros a medida que son leídos, por lo que el consumo de memoria es acotado e independiente de la cantidad de registros, hay algunos en los que es necesario cargar el contenido total del archivo en memoria (por ejemplo con el comando OPEN, o el comando EXPORT con formato CSV, ya que para obtener la lista de campos presentes en el archivo, debemos haber leído el contenido total antes de proceder a la generación del archivo exportado).

Este comando toma el contenido del archivo de entrada, hace un estimado rápido de la cantidad de registros presentes en el archivo (es un estimado ya que para saber el numero exacto, habría que procesar todos los registros ya que son de longitud variable) y procede a ir leyendo los registros de entrada. Cuando encuentra un trailer (fin de un archivo lógico) o se llega a la cantidad de registros especificadas para los archivos de salida, se procede a generar un archivo parcial. Cada uno de los archivos generados tiene como nombre el del archivo original, mas un numero secuencial.

El parámetro que se puede incluir es el flag --max (-m) para indicar la cantidad de registros que queremos contenga cada archivo generado, ya que si no se indica ningún valor, se asume que cada uno va a contener 100 mil registros (que consumirán aproximadamente 2Gb), lo que consideramos es aceptable, pero se puede utilizar un valor menor en caso de utilizarse en una maquina con pocos recursos de memoria.



