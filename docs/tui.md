# TUI - Modo interactivo

La herramienta tiene una opcion para visualizar y realizar operaciones sobre los archivos IPM en forma interactiva. Si bien no es una opcion grafica clasica, es un intermedio, donde la apariencia es similar a la de un entorno grafico, pero confinado a una terminal. Esto ofrece la posibilidad de ser ejecutada en forma remota, por ejemplo mediante una sesion SSH

A esta forma le llamamos Text User Interface.

Para acceder a esta modalidad, utilizamos el comando OPEN, el cual lee el contenido de un archivo y lo presenta en un formato que ocupa la totalidad de la terminal y permite navegar y realizar acciones mediante combinaciones de teclas. En algunas terminales también se acepta el uso del ratón.

Para este ejemplo vamos a utilizar un archivo file20 que contiene 4 archivos lógicos tal como vemos aquí
![Interfaz TUI - Ejemplo 1](/img/tui-text-user-interface-1.png)

Ahora ejecutaremos el comando “cardak open file20”
![Interfaz TUI - Ejemplo 2](/img/tui-text-user-interface-2.png)

Se nos presenta la pantalla principal con el contenido del archivo (file20 en este caso). La pantalla esta dividida en 5 secciones verticales que detallaremos a continuación.

En la parte superior, tenemos una barra que contiene información del archivo. Vemos el tamaño en bytes, la cantidad de registros total, la codificación y si esta en formato de bloque. También vemos la fecha incluida en el cabezal del primer header, y luego un área donde vamos a tener la cantidad de registros activos (mas información en secciones posteriores de este manual)

Por ultimo, sobre la derecha, vemos información sobre el uso de memoria (reservadas por la aplicación y total utilizadas en el sistema)

Debajo de esta barra viene el área principal donde vemos los datos principales de los registros incluidos en el archivo. Vemos, por ejemplo, el numero de registro dentro del archivo, el MTI y el tipo de registro. Dependiendo del tipo de transacción que viene en el registro, vemos mas detalles del contenido. Por ejemplo, para las compras, vemos en PAN (enmascarado), el importe, la moneda y su código, la fecha y hora de la transacción, el MCC y el nombre del comercio.

Debajo de esta area tenemos una mas pequeña donde podemos ver con mas detalle información del registro.

Debajo tenemos una barra con fondo gris donde se nos muestra un recordatorio/ayuda de las teclas disponibles y sus acciones.

Por ultimo, debajo de todo, tenemos la barra de estado. Sobre la parte izquierda tenemos un indicador de “slots” de memoria (que veremos mas adelante), un área central para mensajes, y a la derecha información sobre el registro sobre el que estamos posicionados. Vemos el numero de registro y el total, luego vemos el numero de archivo lógico (en este caso estamos viendo el primero de 4 archivos lógicos contenidos en el archivo físico), y por ultimo el indicador de “Auto Save” (mas información sobre esto cuando veamos el uso)

Presionando la tecla F1 podemos acceder a una ayuda relacionada a la pantalla en la que estemos posicionados. Por ejemplo, en esta pantalla principal, presionando F1 vemos lo siguiente:
![Interfaz TUI - Ejemplo 3](/img/tui-text-user-interface-3.png)

Veremos ahora las acciones que podemos realizar

## Navegación

Para movernos por los registros utilizaremos las teclas de cursores, PgUp, PgDn, Home y End.

Podemos ir a un numero de registro especifico con la combinación Ctrl-G, que nos pedirá un numero de registro, y al presionar ENTER nos posicionaremos directamente sobre el, tal como vemos a continuación:

![Interfaz TUI - Ejemplo 4](/img/tui-text-user-interface-4.png)

Con las teclas Tab y BackTab (Shift-Tab), vamos a ir pasando de un archivo lógico al siguiente/anterior (si hay mas de un archivo lógico presente, de lo contrario esta tecla no tendrá efecto alguno). El archivo lógico sobre el que estaremos trabajando lo veremos reflejado en la parte inferior derecha, y también en la linea superior.

Si queremos ver los detalles de un registro, estando parados sobre el, presionaremos la tecla SPACE o ENTER, y se nos abrirá una nueva área donde veremos el contenido detallado del registro

![Interfaz TUI - Ejemplo 5](/img/tui-text-user-interface-5.png)

Esta vista nos muestra los campos presentes con su descripción y sus valores, y por defecto muestra también los subcampos. En algunos casos incluso se muestra el significado del valor de cada campo. Si queremos omitir los buscamos y ver solo los campos principales, podemos cambiar la vista con la tecla F2

![Interfaz TUI - Ejemplo 6](/img/tui-text-user-interface-6.png)

Si nos movemos por los diferentes campos, en la parte inferior vamos a ver información mas detallada sobre ese campo. Por ejemplo, si nos paramos sobre el elemento DE022, vamos a ver debajo la definición del largo y tipo de datos, así como el valor debajo de una regla que nos facilita encontrar posiciones dentro del valor.

![Interfaz TUI - Ejemplo 7](/img/tui-text-user-interface-7.png)

Presionando la tecla Esc volvemos a la vista principal.

## Búsqueda y Filtros

Si bien la opción de visualizar los registros es útil, cuando tenemos miles de registros se vuelve difícil encontrar los datos que necesitamos. Para eso tenemos la herramienta de búsqueda y de filtro. Ambas son muy similares ya que nos permiten realizar búsquedas especificando los criterios, pero se diferencian en que la búsqueda nos marca los registros que cumplen con la condición, mientras que el filtro nos muestra solamente aquellos registros que cumplen con esa condición de búsqueda. De todos modos es muy sencillo pasar de una vista a la otra como veremos mas adelante.

Veamos como funciona. Comenzaremos haciendo una búsqueda global, queremos buscar la palabra “RUBEN” pero no estamos seguros en que campo se encuentra.
Para ingresar el criterio de búsqueda, presionamos la tecla “s” y se nos va a abrir un dialogo donde podemos ingresar lo que queremos buscar

![Interfaz TUI - Ejemplo 8](/img/tui-text-user-interface-8.png)

Al presionar la tecla ENTER, se realiza la búsqueda y se nos marcan los registros que contienen ese valor. Para navegar entre los resultados, podemos utilizar los cursores para derecha e izquierda

![Interfaz TUI - Ejemplo 9](/img/tui-text-user-interface-9.png)

Si entramos en la vista detallada, veremos en que campo se encontró ese dato

![Interfaz TUI - Ejemplo 10](/img/tui-text-user-interface-10.png)

Ahora realizaremos la misma búsqueda, pero usando un filtro en lugar de una simple búsqueda. Para eso, en lugar de presionar la tecla “s”, presionamos la tecla “f”

![Interfaz TUI - Ejemplo 11](/img/tui-text-user-interface-11.png)

Ahora, solamente vamos a ver los registros que contienen ese dato

![Interfaz TUI - Ejemplo 12](/img/tui-text-user-interface-12.png)

Podemos pasar del resultado de filtro al de búsqueda (y viceversa) presionando la tecla F4

Pero el motor de búsqueda nos permite mas flexibilidad en las búsquedas. Podemos utilizar los mismos métodos que las condiciones de búsqueda del comando GREP analizado en otra parte de este documento.

Podemos por ejemplo, indicar en que campo realizar la búsqueda. Para eso debemos colocar el identificador de campo, separado del valor a buscar por dos puntos (:)

Por ejemplo, vamos a buscar nuevamente las transacciones que contengan la palabra “RUBEN”, pero que ademas hayan sido efectuadas entre las 14:00 y las 15:00 horas. Como sabemos que el campo hora esta en el DE12S02, y como podemos utilizar expresiones regulares, realizaremos la búsqueda de esta forma:

![Interfaz TUI - Ejemplo 13](/img/tui-text-user-interface-13.png)

El criterio empleado es, buscar la palabra “ruben” en todos los campos, pero un valor en el campo DE012SF02 que comience con “14”. Al estar ambas condiciones separadas por una coma, ambas deben cumplirse simultáneamente

![Interfaz TUI - Ejemplo 14](/img/tui-text-user-interface-14.png)

Ahora solamente nos muestra dos registros:

Veamos otro ejemplo, supongamos que queremos buscar un importe de 40

Podemos arrancar la búsqueda presionando la tecla “f”, pero supongamos que no recordamos en que campo se guarda el importe de la transacción. En ese caso, cuando estamos ingresando la condicion, podemos presionar la tecla F8 para que nos muestre un listado de todos los campos. Simplemente escribimos la palabra “amount” y se nos van a filtrar las lineas para mostrar solamente aquellas que contengan la palabra “amount” en su descripción.

Vemos que el importe de la transacción viene en el campo DE4, así que nos paramos sobre el y presionamos la tecla ENTER.

![Interfaz TUI - Ejemplo 15](/img/tui-text-user-interface-15.png)

Esto hace que el identificador de campo se coloque automáticamente por nosotros en la entrada del criterio, y también coloca los dos puntos separadores para colocar el valor que queremos buscar. 

![Interfaz TUI - Ejemplo 16](/img/tui-text-user-interface-16.png)

Colocamos el valor 40 y presionamos ENTER

Vemos que nos trae mas registros de los deseados. Eso es porque todos ellos contienen el valor “40” en alguna parte, pero no era lo que teníamos intención de buscar.

![Interfaz TUI - Ejemplo 17](/img/tui-text-user-interface-17.png)

Sabemos que el importe se guarda con dos posiciones decimales para esta moneda, y que el campo viene con ceros a la izquierda para completar el largo. Entonces, podemos utilizar una expresión regular para forzar esa condición. Nos quedaría de esta forma:

![Interfaz TUI - Ejemplo 18](/img/tui-text-user-interface-18.png)

Y ahora si, solo nos muestra los importes de valor 40.00

Si tuviéramos todavía muchos resultados, podríamos seguir afinando la búsqueda, por ejemplo por la hora, por el comercio, por el PAN, etc.

Tenemos otra opción de filtrado rápido, a la cual accedemos mediante la combinación Ctrl-F

Esto nos muestra una serie de opciones, donde podemos ir seleccionando los tipos de transacción que nos interesa, sin necesidad de buscar los campos y códigos correspondientes.

![Interfaz TUI - Ejemplo 19](/img/tui-text-user-interface-19.png)

## Filtrado de presentación

Otro tipo de filtrado que podemos realizar, es decidir que campos queremos ver en la vista de detalle. Quizás solo nos interese ver un par de Data Elements y tener a la vista todo nos puede generar confusión. Para eso tenemos la tecla F5 que nos permite colocar la lista de campos que deseamos ver, y opcionalmente, seleccionar uno de los archivos de filtros tal como vimos en el comando [FILTER](comandos/filter)

![Interfaz TUI - Ejemplo 20](/img/tui-text-user-interface-20.png)

Si nos paramos sobre el area llamada “Defined filter” y presionamos el cursor hacia abajo, se nos muestran los filtros definidos

![Interfaz TUI - Ejemplo 21](/img/tui-text-user-interface-21.png)

Al igual que en todos los lugares donde se nos permite ingresar una lista de campos, podemos presionar la tecla F8 y obtener la lista de campos posibles. En este caso, marcamos los campos deseados utilizando la combinación Ctrl-Space, y cuando tengamos todos los campos marcados, presionando ENTER nos devuelve la lista armada

![Interfaz TUI - Ejemplo 22](/img/tui-text-user-interface-22.png)

Y presionando ENTER

![Interfaz TUI - Ejemplo 23](/img/tui-text-user-interface-23.png)

A continuación, presionamos el botón Apply, y cuando entremos a la vista de detalle, solamente veremos los campos seleccionados

![Interfaz TUI - Ejemplo 24](/img/tui-text-user-interface-24.png)

Para quitar el filtro de campos, presionamos Shift-F5

## Marcar registros

Podemos marcar registros para luego efectuar operaciones sobre ellos y no sobre el contenido total del archivo. Primero veamos como marcar registros. La primer opción es simplemente posicionarse sobre el registro deseado y presionar las teclas Ctrl-Space. En este ejemplo, nos posicionamos sobre el registro numero 6 y presionamos esas teclas. Veremos que el numero de registro queda de otro color, indicando que tiene una marca

![Interfaz TUI - Ejemplo 25](/img/tui-text-user-interface-25.png)

Vemos también que en la barra de estado (la inferior) y sobre la izquierda, nos muestra el texto “Marks” y la cantidad de registros actualmente marcados, en este caso 1

Podemos también marcar un rango de registros. Por ejemplo, si queremos marcar los registros 10 al 14, nos paramos sobre el primero del rango (el registro 10) y presionamos la tecla “m” y luego la tecla “a”.

A continuación, nos movemos al ultimo registro del rango (el registro 14) y presionamos las teclas “m” y luego la “z”. Vemos que quedan marcados todos los registros comprendidos en ese rango. Vemos también que el registro marcado anteriormente sigue como marcado, por lo que las acciones de marcar registros son aditivas, o sea, no borran otras marcas.

Si queremos borrar las marcas, podemos hacerlo una por una posicionándonos sobre el registro y presionando nuevamente Ctrl-Space (es un toggle, o sea, cambia el estado de la marca del registro por el estado opuesto).

También podemos presionar la tecla “-” para borrar todas las marcas de una vez

![Interfaz TUI - Ejemplo 26](/img/tui-text-user-interface-26.png)

Otra opción es utilizar el filtro para dejar visibles los registros que deseamos marcar, y presionar la tecla “+” que marcara todos los registros visibles. A continuación presionamos Shift-F para limpiar el filtro, pero las marcas permanecerán. Vamos a agregar los registros que habíamos encontrado con el importe 40.00

Primero, aplicamos el filtro y presionamos la tecla “+”, y a continuación Shift-F5

![Interfaz TUI - Ejemplo 27](/img/tui-text-user-interface-27.png)


## Borrar registros
Presionando la tecla Del o Ctrl-D podemos eliminar registros del archivo. Si no tenemos ningún registro marcado, borraremos el registro sobre el que estemos posicionados, de lo contrario, se borraran los registros marcados.

Antes de proceder al borrado, se nos presenta un cuadro de dialogo para confirmar la operación, mostrando ademas la cantidad de registros que serán afectados.

![Interfaz TUI - Ejemplo 28](/img/tui-text-user-interface-28.png)

Si presionamos el botón de confirmación, esos registros serán eliminados y como recordatorio, la barra superior y el borde del área de información quedaran de color rojo, ademas que en la barra superior se nos indicara ahora la cantidad de registros presentes y la cantidad de registros borrados.

![Interfaz TUI - Ejemplo 29](/img/tui-text-user-interface-29.png)

Debemos tomar en cuenta que todas estas acciones no son destructivas, o sea, nunca van a modificar el archivo original. Para guardar los cambios, debemos guardarlos en un nuevo archivo tal como veremos mas adelante.

![Interfaz TUI - Ejemplo 30](/img/tui-text-user-interface-30.png)

## Recuperación de registros borrados

A pesar de requerir de una confirmación para eliminar registros, es posible que encontremos que alguno no debía ser borrado. En ese caso, y antes de salir de la aplicación, podemos recuperar los registros marcados como borrados presionando Ctrl-U

Eso nos lleva a una pantalla donde vemos todos los registros borrados, y presionando ENTER sobre cualquiera, lo desmarcamos y vuelve a estar accesible junto con el resto.

## Modificación de registros

Estando en la vista de detalle (presionando ENTER o SPACE sobre el registro deseado de la vista general), podemos modificar los registros de varias formas. 

Lo primero que podemos hacer es borrar un campo. Tomemos como ejemplo este registro y borremos el campo PDS1003. Para ello nos posicionamos sobre este campo y presionamos la tecla Del

![Interfaz TUI - Ejemplo 31](/img/tui-text-user-interface-31.png)

Si presionamos el botón Delete, el campo sera eliminado del registro. Debemos tener en cuenta que no se nos permitirá eliminar campos que sean mandatorios, por ejemplo, si intentamos eliminar el campo DE024, no nos va a dejar.

![Interfaz TUI - Ejemplo 32](/img/tui-text-user-interface-32.png)

Otra cosa que podemos hacer es modificar el valor de un campo. Vamos a modificar el importe, de 1758,00 lo vamos a cambiar a 5100,00

Para eso nos posicionamos sobre el campo DE4 y presionamos Ctrl-E

![Interfaz TUI - Ejemplo 33](/img/tui-text-user-interface-33.png)

Modificamos el valor y presionamos ENTER, con lo que se guardara el cambio en el registro

![Interfaz TUI - Ejemplo 34](/img/tui-text-user-interface-34.png)

![Interfaz TUI - Ejemplo 35](/img/tui-text-user-interface-35.png)

Vemos el nuevo valor, y ademas la descripción del campo cambia de color para indicarnos visualmente que el valor de ese campo fue modificado.

Otra cosa que podemos hacer es agregar un campo. Para ello presionamos Ctrl-A y se nos abre una lista de campos que podemos agregar (no se muestran los que ya están presentes en el registro). Seleccionamos por ejemplo el 1003 (que casualmente fue el que habíamos borrado) y presionamos ENTER

Entonces, se nos presenta un dialogo donde tenemos la lista de campos a agregar, y a la derecha un lugar donde colocar el valor. Vemos que se nos indica el tipo de dato (en este caso numérico) y el largo del mismo (en este caso, 12)

![Interfaz TUI - Ejemplo 36](/img/tui-text-user-interface-36.png)

Ahí colocamos el valor deseado, y cuando el criterio de validación se cumple, el recuadro (originalmente rojo) pasa a color verde, indicando que hemos ingresado un valor valido.

![Interfaz TUI - Ejemplo 37](/img/tui-text-user-interface-37.png)

En este momento podemos presionar Ctrl-S para agregar el nuevo campo.

Nuevamente vemos que la barra superior queda en color rojo para indicar modificaciones en el archivo, y el recuadro de la vista de detalles queda de color amarillo para indicar modificaciones

![Interfaz TUI - Ejemplo 38](/img/tui-text-user-interface-38.png)

Volviendo a la vista principal, vemos que el registro 6 queda con una marca (el carácter #) para indicar que ese registro ha sido modificado.

![Interfaz TUI - Ejemplo 39](/img/tui-text-user-interface-39.png)

## Buscar y reemplazar valores

Presionando las teclas Ctrl-R se nos muestra un cuadro de dialogo donde podemos ingresar un valor a buscar y el valor por el que lo queremos reemplazar. El valor de búsqueda acepta expresiones regulares, y podemos también especificar en que campos queremos realizar dicha búsqueda

Tenemos este archivo:

![Interfaz TUI - Ejemplo 40](/img/tui-text-user-interface-40.png)

Y queremos reemplazar el nombre del comercio de “Processor A” al valor “Main processor”. Presionamos Ctrl-r

![Interfaz TUI - Ejemplo 41](/img/tui-text-user-interface-41.png)

Presionando el botón “Start”, nos queda esto:

![Interfaz TUI - Ejemplo 42](/img/tui-text-user-interface-42.png)

Vemos que hubieron 11 reemplazos, y la linea superior queda con fondo rojo para indicar que el archivo ha sido modificado. Vemos también sobre la izquierda los registros modificados indicados con el carácter “#” en color celeste.

Debemos recordar que para no perder los cambios, es necesario salvar el archivo.

Si, por ejemplo, queremos hacer el reemplazo solamente en algunos registros, los debemos marcar previamente. En este ejemplo, hemos marcado los registros 6, 8 y 9 (vemos que los numeros quedan en color amarillo) y reemplazamos el valor de “Main processor” por “Secondary processor” en esos registros:

![Interfaz TUI - Ejemplo 43](/img/tui-text-user-interface-43.png)

Y el resultado es este:

![Interfaz TUI - Ejemplo 44](/img/tui-text-user-interface-44.png)

## Función de auto guardado

Existe la función de auto guardado, la cual se activa automáticamente cuando el archivo contiene pocos registros (menos de 2000) pero que puede activarse o desactivarse en cualquier momento mediante la tecla  F6. La razón es que el guardado puede llevar cierto tiempo, y si tenemos muchos registros esta operación puede interferir con el uso normal, por lo que para agilizar la respuesta de la aplicación, solo se aplica si los registros son pocos y el tiempo de guardado es despreciable.

El auto guardado se activa cuando hacemos modificaciones en el archivo, y se guarda automáticamente una copia donde al nombre del archivo original se le agrega “_AUTOSAVE.ipm”

## Guardado manual

Luego de haber realizado modificaciones al archivo, podemos elegir descartarlas o guardar los cambios en un nuevo archivo.

Para esto, presionamos la función de guardado con Ctrl-S donde se nos muestra un dialogo en el cual podemos seleccionar el nombre del archivo a guardar, la codificación, el formato del archivo, y seleccionar si solamente queremos guardar los registros marcados o todos los registros (que no hayan sido borrados)

![Interfaz TUI - Ejemplo 45](/img/tui-text-user-interface-45.png)

El nombre por defecto es el nombre del archivo original, agregándole “_SAVE.ipm”. El formato de codificación y de archivo sugeridos son los mismos que los del archivo original, pero pueden cambiarse, por lo que ademas de guardar las modificaciones, estaríamos efectuando una conversión de formatos.

Aquí ya podemos apreciar una de las utilidades de poder marcar registros.

## Exportar registros

Presionando Ctrl-X se nos permite exportar los registros marcados, o todos los registros en caso que no haya ninguno marcado.

Los formatos de exportación son los mismos que los del comando EXPORT, o sea, CSV o HEX. La forma de indicar el tipo de archivo que queremos generar es cambiando la extensión. Si al archivo generado le colocamos la extensión “.csv” entonces su contenido seran lineas en formato CSV, si la extensión es “.ckh” entonces el archivo generado sera en formato HEX

Como facilidad para cambiar la extensión, podemos presionar la tecla F3 que ira cambiando entre las dos extensiones.
Si seleccionamos formato CSV, hay que tener en cuenta que si existe un filtro de campos seleccionado, solamente se incluirán en el archivo los campos activos

![Interfaz TUI - Ejemplo 46](/img/tui-text-user-interface-46.png)

## Importación de registros

Al igual que con el comando IMPORT, podemos importar registros previamente exportados, tanto en formato CSV como HEX
Los archivos CSV que pueden ser importados, deben contener un export de registros enteros, es decir, haber sido exportados con todos su campos ya que un export con campos filtrados no sirve para ser importado.

Para ello, presionamos Ctrl-L y se nos mostrara un campo donde seleccionar uno de los archivos que contienen datos exportados, si es que hay alguno.

Al presionar ENTER, se agregan los registros desde el archivo y quedan colocados al final. Es necesario salvar el archivo para no perder estos cambios.

## Mark slots

En la barra inferior de estado, sobre la izquierda, podemos observar lo siguiente:

![Mark slots](/img/mark-slots.png)

Este es un indicador de los diferentes “Mark slots” y un indicador de su contenido. Disponemos de 10 diferentes “memorias” donde se guardan hasta 10 listas de registros marcados. Cada vez que marcamos registros, se guarda la lista de esos registros en el área activa. Por defecto el área activa es la 0, pero podemos seleccionar cualquiera de ellas.

La utilidad que presenta es tener hasta 10 grupos diferentes de marcas, por ejemplo cada una con resultados de diferentes búsquedas, y al cambiar de área recuperamos la lista de marcas.

Por ejemplo, podemos hacer 4 búsquedas diferentes y el resultado de cada una la almacenamos en un área diferente. Luego, podemos seleccionar las que queremos y exportar o guardar los registros correspondientes.

Para cambiar el área activa, basta con presionar la tecla “m” y a continuación una tecla del “0” al “9


<!-- 
## Galería de Capturas de Pantalla

<details>
<summary>Ver más capturas de pantalla</summary>
uno
dos
tres
</details> -->
