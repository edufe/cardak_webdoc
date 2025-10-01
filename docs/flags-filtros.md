# Flags y Filtros

Con el fin de limitar la acción de algunos comandos a algunos registros o campos, existen filtros con algunas reglas definidas que se mantienen a través de toda la aplicación. A continuación veremos como utilizarlos.

Los Flags se usan en la linea de comandos y están indicados por dos guiones seguidos de una palabra , o algunas veces de un guion seguido de una letra (esto suele usarse como un “alias” para simplificar). Algunos flags pueden aceptar valores que son los parámetros del mismo y funcionan como filtro. Otras veces el comportamiento varia simplemente ante la presencia o ausencia del flag.

Hay flags que son globales a la aplicación, otros específicos a un comando, y otros que funcionan de forma similar pero no están presentes en todos los comandos ya que carecen de sentidos.

## Flags Globales

Estos flags están disponibles para todos los comandos de CardAK.

```
Flags:
      --help     Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose  Add more information displayed on some commands.
      --mono     Supress color on output.
      --ignore   Try to ignore some errors and continue processing the file
  -W, --width    Ignore small terminal width check and force execution
  -z, --silent   Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf
```

* **--help**: Este flag se comporta de forma similar al comando HELP, y se puede agregar a cualquier comando para obtener ayuda especifica del mismo.
* **--verbose** (-v): En algunos comandos, incrementa la información que se muestra. Usualmente se limita un poco la salida para evitar tener un exceso de información, pero agregando este flag podemos obtener en algunos casos la información completa.
* **--mono**: Por defecto la salida utiliza colores para mejorar la presentación. Esto puede ser un problema al redireccionar la salida a un archivo ya que el color se logra insertando caracteres de control que la terminal puede entender para representar los colores. Al redireccionarlo a un archivo y luego abrirlo con un editor de textos, vamos a estar viendo estos caracteres de control que molestan en la visualización. En estos casos es aconsejable agregar este flag para suprimir los colores en la salida y hacer mas amigable la posterior utilización de la salida.
* **--ignore**: Este flag casi no se usa, pero en algunos casos puede suceder que al leer un archivo se encuentren errores de formato y se detenga el proceso del archivo. Agregando este flag se intenta ignorar el error y continuar (de ser posible) con la lectura y carga del archivo. Las ultimas versiones de la herramienta intentan corregir automáticamente estas situaciones por lo que son muy pocos los casos en que este flag es necesario.
* **--silent** (-z): Normalmente la salida por pantalla de los comandos contiene información extra como ser el banner (mostrando la versión e información del build), así como el tiempo total de ejecución. En otros casos la salida esta en un formato pensado para la visualización en pantalla del operador. Pero hay ocasiones en que necesitamos procesar esa salida mediante alguna herramienta externa. Este flag siempre elimina el color, evita desplegar el banner y la información al pie con el tiempo total de ejecución, y evita mostrar las barras de progreso en archivos grandes. Ademas, dependiendo del comando, modifica el formato de la salida a su mínima expresión para facilitar su procesamiento por herramientas externas, orientado a la automatización de procesos.

## Flags de comandos

Cada comando puede manejar flags particulares cuyo significado esta explicado en la sección correspondiente. Sin embargo, hay algunos que son compartidos por varios comandos por lo que para no repetir su uso en detalle en cada sección, se explican a continuación:

### -T
Este flag requiere de un valor asociado que es una letra, que puede ser la “I” o la “M”

Se utiliza cuando le pasamos una lista de archivos para procesar (por ejemplo utilizando comodines) pero el comando solamente esta pensado para procesar archivos IPM o MPE

La presencia de este flag con el valor correspondiente, hace que de esa lista solamente se tomen en cuenta los archivos del tipo indicado (IPM o MPE) y el resto sea ignorado.

### -C
Este flag es un filtro que toma en cuenta registros del archivo de acuerdo al Function Code. Recibe un texto y solamente se tomaran en cuenta aquellos registros cuya descripción del Function Code contenga el texto indicado.

Por ejemplo, si queremos tomar en cuenta solamente registros que contengan información de Chargebacks, podemos agregar “-C chargeback” (para ver la lista completa de los Function Codes disponibles, podemos ejecutar “cardak describe func”

### -R
Filtro por numero de registro. Con este flag podemos indicar los registros que queremos considerar utilizando su numero dentro del archivo físico. Recibe una lista separada por comas que contiene numeros específicos de registro o rangos. Para definir un rango, simplemente colocamos el numero de registro inicial y final separados por un guion. Ambos extremos serán incluidos en el rango.

Si por ejemplo, quisiéramos procesar solamente los registros numero 10, 12, 30 al 39 y 50, tendríamos que poner: “-R 10,12,30-39,50”

Existe una particularidad con el comando GREP, ya que cuando lo utilizamos sobre un solo archivo y se encuentran registros que cumplan con la condición, estos números de registros se guardan automáticamente y pueden ser utilizados por el siguiente comando si aplicamos el flag --last, lo que nos evita tener que escribir la lista de números de registro (que puede ser extensa) para operar sobre los registros encontrados por el ultimo comando GREP. La herramienta chequea que al usar este flag, estemos utilizando el mismo archivo que el utilizado sobre el comando GREP anterior.

### -F
Filtro por campo (fields). En algunos casos, no solo queremos indicar sobre que registros queremos aplicar el comando, sino también limitarnos a determinados campos. Al igual que el flag de filtro por registro, este flag recibe una lista que identifica a los campos, pero con algunas diferencias.

Antes que nada, veamos como identificar un campo. En los archivos IPM tenemos dos tipos de elementos, los llamados Data Elements (DE) y los Private Data Subelement (PDS). A su vez, estos pueden estar subdivididos en campos mas pequeños llamados SubFields.

La nomenclatura utilizada en los manuales y en la aplicación es la siguiente. Los DE van seguidos de un numero de entre 1 y 3 cifras que identifican a cada uno de ellos, mientras que los PDS van seguidos de un numero de cuatro cifras. Los SubFields se indican colocando las letras “SF” y un numero de dos cifras a continuación del identificador de campo. Por ejemplo, el campo llamado “Card Acceptor Name” seria el DE043, y estaría dividido en 6 partes, donde cada una seria: DE043SF01, DE043SF02, etc.

Esta herramienta, y a fin de simplificar la forma de identificar los campos, acepta lo siguiente:

Los DE pueden representarse con las letras DE o D, seguidas de uno a tres dígitos, o simplemente con tres dígitos.

Los PDS pueden representarse con las letras PDS, PD o P seguidas de uno a cuatro dígitos, o simplemente usando cuatro dígitos.

Los SubFields se indican agregando las letras SF o S, seguidas de uno o dos dígitos

Teniendo esto en cuenta, el campo DE43 se puede indicar de cualquiera de estas formas:
DE043, DE43, D43, D043, 043

Si quisiéramos indicar un SubField especifico, a cualquiera de las opciones anteriores deberíamos agregarle SF o S y el numero de SubField. Por ejemplo, para indicar el SubField 03, podríamos poner:
DE043SF03, D43S3, 043S3, etc.

Para los PDS es algo similar, pero si no agregamos las letras debemos colocar un numero de 4 dígitos. Por ejemplo, para el PDS0021 podemos utilizar:
PDS0021, P21, PD21, P21, 0021, etc.

Para indicar un SubField, se aplica la misma regla que para los DE



<!-- ## Códigos de Moneda Comunes

| Código | Moneda | País |
|--------|--------|------|
| 840 | USD | Estados Unidos |
| 484 | MXN | México |
| 978 | EUR | Zona Euro |
| 124 | CAD | Canadá |
| 826 | GBP | Reino Unido |
| 392 | JPY | Japón |
| 986 | BRL | Brasil |
| 032 | ARS | Argentina |
| 152 | CLP | Chile |
| 170 | COP | Colombia |

## Códigos de Tipo de Registro Comunes

| Código | Descripción |
|--------|-------------|
| 0000 | File Header |
| 0001 | File Trailer |
| 0010 | Batch Header |
| 0011 | Batch Trailer |
| 0240 | Transaction (Financial) |
| 0442 | Reversal/Adjustment |
| 0740 | Fee Collection |
| 0644 | Administrative Message |

## Campos DE (Data Elements) Comunes

| Campo | Descripción |
|-------|-------------|
| DE002 | Primary Account Number (PAN) |
| DE004 | Amount, Transaction |
| DE007 | Transmission Date/Time |
| DE011 | System Trace Audit Number (STAN) |
| DE012 | Local Transaction Time |
| DE013 | Local Transaction Date |
| DE019 | Acquiring Institution Country Code |
| DE022 | POS Entry Mode |
| DE024 | Function Code |
| DE025 | Message Reason Code |
| DE032 | Acquiring Institution ID |
| DE033 | Forwarding Institution ID |
| DE049 | Currency Code, Transaction |
| DE050 | Currency Code, Settlement |
| PDS0023 | Card Product BIN |
 -->
