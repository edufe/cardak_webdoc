# Image Placement Guide

This document shows where each extracted image should be placed in the documentation.

## Image Locations

### UNKNOWN

#### Comandos

**Image:** `comandos-1.png`
*Context:* Para ver los comandos disponibles se puede utilizar el comando HELP que nos muestra lo siguiente:
```markdown
![Comandos](/img/comandos-1.png)
```


### docs/casos-de-uso.md

#### Búsqueda de datos en archivos IPM

**Image:** `búsqueda-de-datos-en-archivos-ipm-1.png`
*Context:* Primero, intentemos utilizar el comando grep del sistema:
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-1.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-2.png`
*Context:* Podemos, por supuesto, abrir el archivo con un editor hexadecimal y realizar ahí la búsqueda. Probem...
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-2.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-3.png`
*Context:* Intentemos utilizar otra herramienta, en este caso una herramienta grafica (ya que en Windows tambié...
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-3.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-4.png`
*Context:* Por el momento busquemos el texto “carpinteria”. Observemos que la busqueda no es case-sensitive
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-4.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-5.png`
*Context:* Veamos la salida de este comando:
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-5.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-6.png`
*Context:* Podemos entonces, buscar ese registro especifico de la siguiente forma:
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-6.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-7.png`
*Context:* Vamos a ver el contenido del registro encontrado con el comando GREP utilizado anteriormente. Vimos ...
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-7.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-8.png`
*Context:* Si queremos ver los valores de cada campo, agregaremos el flag --detailed (-d)
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-8.png)
```

**Image:** `búsqueda-de-datos-en-archivos-ipm-9.png`
*Context:* Podemos agregar la opción --subfields (-s) para ver el contenido de cada uno de los subcampos de aqu...
```markdown
![Búsqueda de datos en archivos IPM](/img/búsqueda-de-datos-en-archivos-ipm-9.png)
```

#### Cambiar el formato de los archivos

**Image:** `cambiar-el-formato-de-los-archivos-1.png`
*Context:* Por ejemplo, veamos el formato del archivo file14:
```markdown
![Cambiar el formato de los archivos](/img/cambiar-el-formato-de-los-archivos-1.png)
```

**Image:** `cambiar-el-formato-de-los-archivos-2.png`
*Context:* Es un archivo codificado en EBCDIC, y no esta en bloques de 1014. Supongamos que queremos convertirl...
```markdown
![Cambiar el formato de los archivos](/img/cambiar-el-formato-de-los-archivos-2.png)
```

#### Corregir errores automáticamente

**Image:** `corregir-errores-automáticamente-1.png`
*Context:* Habíamos visto previamente que el archivo file10 contenía dos errores y que era posible corregirlos ...
```markdown
![Corregir errores automáticamente](/img/corregir-errores-automáticamente-1.png)
```

#### Eliminar registros de un archivo

**Image:** `eliminar-registros-de-un-archivo-1.png`
*Context:* A modo de ejemplo, utilizaremos el mismo criterio utilizado en el caso tratado anteriormente, de bús...
```markdown
![Eliminar registros de un archivo](/img/eliminar-registros-de-un-archivo-1.png)
```

**Image:** `eliminar-registros-de-un-archivo-2.png`
*Context:* A modo de ejemplo, utilizaremos el mismo criterio utilizado en el caso tratado anteriormente, de bús...
```markdown
![Eliminar registros de un archivo](/img/eliminar-registros-de-un-archivo-2.png)
```

**Image:** `eliminar-registros-de-un-archivo-3.png`
*Context:* Para ello podemos utilizar el flag --last que utiliza el resultado del ultimo comando GREP realizado...
```markdown
![Eliminar registros de un archivo](/img/eliminar-registros-de-un-archivo-3.png)
```

#### Identificar y obtener información de los archivos

**Image:** `identificar-y-obtener-información-de-los-archivos-1.png`
*Context:* A modo de ejemplo, veamos el contenido de un directorio con archivos para explicar esta situación co...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-1.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-2.png`
*Context:* Veamos ahora como utilizaría la herramienta para determinar esto. Cuando la invocamos sin especifica...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-2.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-3.png`
*Context:* A continuación, y a efectos de mostrar ejemplos concretos, vamos a trabajar con los siguientes archi...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-3.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-4.png`
*Context:* Veamos de que se tratan estos archivos:
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-4.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-5.png`
*Context:* Esta vista es compacta, con los datos de cada archivo en una sola linea. Podemos tener una vista dif...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-5.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-6.png`
*Context:* Si quisiéramos tener mas información, podemos especificar el flag --analyze (-a), que leerá el conte...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-6.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-7.png`
*Context:* Para investigar un poco mas, indicaremos como parámetro solamente el nombre del archivo a verificar,...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-7.png)
```

**Image:** `identificar-y-obtener-información-de-los-archivos-8.png`
*Context:* Si ademas agregáramos el flag --verbose (-v), se nos mostraría la cantidad de registros encontrados ...
```markdown
![Identificar y obtener información de los archivos](/img/identificar-y-obtener-información-de-los-archivos-8.png)
```

#### Manejar archivos lógicos

**Image:** `manejar-archivos-lógicos-1.png`
*Context:* El comando JOIN hace lo contrario, toma la lista de archivos físicos que le indiquemos, y genera un ...
```markdown
![Manejar archivos lógicos](/img/manejar-archivos-lógicos-1.png)
```

#### Pasar registros de un archivo a otro

**Image:** `pasar-registros-de-un-archivo-a-otro-1.png`
*Context:* Primero, vamos a seleccionar los registros que queremos exportar. Utilizaremos nuevamente el ejemplo...
```markdown
![Pasar registros de un archivo a otro](/img/pasar-registros-de-un-archivo-a-otro-1.png)
```

**Image:** `pasar-registros-de-un-archivo-a-otro-2.png`
*Context:* Primero, vamos a seleccionar los registros que queremos exportar. Utilizaremos nuevamente el ejemplo...
```markdown
![Pasar registros de un archivo a otro](/img/pasar-registros-de-un-archivo-a-otro-2.png)
```

**Image:** `pasar-registros-de-un-archivo-a-otro-3.png`
*Context:* Primero, vamos a seleccionar los registros que queremos exportar. Utilizaremos nuevamente el ejemplo...
```markdown
![Pasar registros de un archivo a otro](/img/pasar-registros-de-un-archivo-a-otro-3.png)
```

#### Validar los archivos en busca de errores

**Image:** `validar-los-archivos-en-busca-de-errores-1.png`
*Context:* Veamos como funciona. Primero, validaremos los archivos cuyo nombre son file*
```markdown
![Validar los archivos en busca de errores](/img/validar-los-archivos-en-busca-de-errores-1.png)
```

**Image:** `validar-los-archivos-en-busca-de-errores-2.png`
*Context:* Una salida alternativa es agregar el flag --silent (-z) para analizar la salida y tomar acciones en ...
```markdown
![Validar los archivos en busca de errores](/img/validar-los-archivos-en-busca-de-errores-2.png)
```

**Image:** `validar-los-archivos-en-busca-de-errores-3.png`
*Context:* Continuando con su utilidad para las automatizaciones, podemos especificar si queremos obtener solam...
```markdown
![Validar los archivos en busca de errores](/img/validar-los-archivos-en-busca-de-errores-3.png)
```

**Image:** `validar-los-archivos-en-busca-de-errores-4.png`
*Context:* Volviendo a la validación, podemos obtener información mas detallada de los errores encontrados, agr...
```markdown
![Validar los archivos en busca de errores](/img/validar-los-archivos-en-busca-de-errores-4.png)
```

#### Visualizar el contenido en algún programa externo

**Image:** `visualizar-el-contenido-en-algún-programa-externo-1.png`
*Context:* Para mas detalles de como utilizar estos flags, ver la sección llamada FLAGS y FILTROS
```markdown
![Visualizar el contenido en algún programa externo](/img/visualizar-el-contenido-en-algún-programa-externo-1.png)
```


### docs/comandos/chop.md

#### CHOP

**Image:** `chop-1.png`
```markdown
![CHOP](/img/chop-1.png)
```


### docs/comandos/convert.md

#### CONVERT

**Image:** `convert-1.png`
```markdown
![CONVERT](/img/convert-1.png)
```

**Image:** `convert-2.png`
*Context:* Podemos utilizar el flag -T para indicar el tipo de archivo que queremos procesar de la lista de arc...
```markdown
![CONVERT](/img/convert-2.png)
```


### docs/comandos/delete.md

#### DELETE

**Image:** `delete-1.png`
```markdown
![DELETE](/img/delete-1.png)
```

**Image:** `delete-2.png`
*Context:* Como ejemplo, eliminaremos los registros numero 5, y los registros 10 al 15 del archivo file10:
```markdown
![DELETE](/img/delete-2.png)
```

**Image:** `delete-3.png`
*Context:* Por ejemplo, vemos los primeros 5 registros:
```markdown
![DELETE](/img/delete-3.png)
```

**Image:** `delete-4.png`
*Context:* Supongamos que queremos eliminar los campos PDS0023 y PDS1011 de los registros 3 y 4, haríamos lo si...
```markdown
![DELETE](/img/delete-4.png)
```

**Image:** `delete-5.png`
*Context:* Es importante aclarar que no hay un chequeo en la eliminación de campos, por lo que podemos estar el...
```markdown
![DELETE](/img/delete-5.png)
```

**Image:** `delete-6.png`
*Context:* Podemos realizar una validación del archivo generado:
```markdown
![DELETE](/img/delete-6.png)
```

**Image:** `delete-7.png`
*Context:* Podemos también generar un archivo HEXA con los registros eliminados:
```markdown
![DELETE](/img/delete-7.png)
```


### docs/comandos/describe.md

#### DESCRIBE

**Image:** `describe-1.png`
```markdown
![DESCRIBE](/img/describe-1.png)
```

**Image:** `describe-2.png`
*Context:* Por ejemplo, tomemos el campo DE43. Si no estamos seguros que contiene, podemos hacer lo siguiente:
```markdown
![DESCRIBE](/img/describe-2.png)
```

**Image:** `describe-3.png`
*Context:* O digamos que queremos buscar un importe pero no recordamos en que campo viene dicho dato. En ese ca...
```markdown
![DESCRIBE](/img/describe-3.png)
```

**Image:** `describe-4.png`
*Context:* Por ejemplo, veamos los Function codes:
```markdown
![DESCRIBE](/img/describe-4.png)
```


### docs/comandos/distribute.md

#### DISTRIBUTE

**Image:** `distribute-1.png`
```markdown
![DISTRIBUTE](/img/distribute-1.png)
```

**Image:** `distribute-2.png`
*Context:* Para ver las configuraciones existentes, podemos utilizar el parámetro “list” de esta forma:
```markdown
![DISTRIBUTE](/img/distribute-2.png)
```

**Image:** `distribute-3.png`
*Context:* Para ver el contenido de las definiciones, podemos agregar el flag -v o especificar el nombre de la ...
```markdown
![DISTRIBUTE](/img/distribute-3.png)
```

**Image:** `distribute-4.png`
*Context:* Para ello, vamos a crear un archivo llamado “money.json” y le colocaremos este contenido:
```markdown
![DISTRIBUTE](/img/distribute-4.png)
```

**Image:** `distribute-5.png`
*Context:* Respecto a las condiciones, no voy a utilizar ni los rangos de bines ni los MTI, pero si le indico q...
```markdown
![DISTRIBUTE](/img/distribute-5.png)
```

**Image:** `distribute-6.png`
*Context:* Ya que no resulta practico dejar la configuración en el directorio local, vamos a cargarlo en el HOM...
```markdown
![DISTRIBUTE](/img/distribute-6.png)
```

**Image:** `distribute-7.png`
*Context:* En este caso tomaremos los contenidos del archivo file10. Primero vamos a realizar una simulación y ...
```markdown
![DISTRIBUTE](/img/distribute-7.png)
```

**Image:** `distribute-8.png`
*Context:* Para generar los archivos, omitimos el flag --dry
```markdown
![DISTRIBUTE](/img/distribute-8.png)
```


### docs/comandos/duplicates.md

#### DUPLICATES

**Image:** `duplicates-1.png`
```markdown
![DUPLICATES](/img/duplicates-1.png)
```


### docs/comandos/export.md

#### EXPORT

**Image:** `export-1.png`
```markdown
![EXPORT](/img/export-1.png)
```


### docs/comandos/filter.md

#### FILTER

**Image:** `filter-1.png`
```markdown
![FILTER](/img/filter-1.png)
```

**Image:** `filter-2.png`
*Context:* Veamos como utilizar esta funcionalidad. Comenzaremos por el subcomando LIST para ver las configurac...
```markdown
![FILTER](/img/filter-2.png)
```

**Image:** `filter-3.png`
*Context:* Veamos como utilizar esta funcionalidad. Comenzaremos por el subcomando LIST para ver las configurac...
```markdown
![FILTER](/img/filter-3.png)
```

**Image:** `filter-4.png`
*Context:* Vamos a crear otro filtro mas llamado “otherfilter” pero con otros campos
```markdown
![FILTER](/img/filter-4.png)
```

**Image:** `filter-5.png`
*Context:* Veamos ahora que filtros tenemos definidos utilizando el comando FILTER LIST
```markdown
![FILTER](/img/filter-5.png)
```

**Image:** `filter-6.png`
*Context:* Veamos ahora que filtros tenemos definidos utilizando el comando FILTER LIST
```markdown
![FILTER](/img/filter-6.png)
```

**Image:** `filter-7.png`
*Context:* Si necesitamos ver en detalle uno solo de estos, podemos indicar el nombre
```markdown
![FILTER](/img/filter-7.png)
```

**Image:** `filter-8.png`
*Context:* Ahora, supongamos que no fue una buena elección el nombre de “myfilter” porque no nos da ningún indi...
```markdown
![FILTER](/img/filter-8.png)
```

**Image:** `filter-9.png`
*Context:* Vamos a crear un nuevo filtro a partir de uno ya existente. Tomaremos el filtro “otherfilter” y crea...
```markdown
![FILTER](/img/filter-9.png)
```

**Image:** `filter-10.png`
*Context:* A continuación vamos a agregar nuevos campos al filtro “prueba”. Para probar, vamos a incluir alguno...
```markdown
![FILTER](/img/filter-10.png)
```

**Image:** `filter-11.png`
*Context:* También podemos quitar campos de un filtro. Por ejemplo, quitemos el PDS0023
```markdown
![FILTER](/img/filter-11.png)
```

**Image:** `filter-12.png`
*Context:* Y por ultimo, podemos eliminar un filtro que ya no necesitemos mas.
```markdown
![FILTER](/img/filter-12.png)
```


### docs/comandos/fix.md

#### FIX

**Image:** `fix-1.png`
```markdown
![FIX](/img/fix-1.png)
```


### docs/comandos/grep.md

#### GREP

**Image:** `grep-1.png`
```markdown
![GREP](/img/grep-1.png)
```


### docs/comandos/identify.md

#### IDENTIFY

**Image:** `identify-1.png`
```markdown
![IDENTIFY](/img/identify-1.png)
```


### docs/comandos/import.md

#### IMPORT

**Image:** `import-1.png`
```markdown
![IMPORT](/img/import-1.png)
```


### docs/comandos/join.md

#### JOIN

**Image:** `join-1.png`
```markdown
![JOIN](/img/join-1.png)
```


### docs/comandos/open.md

#### OPEN

**Image:** `open-1.png`
```markdown
![OPEN](/img/open-1.png)
```


### docs/comandos/print.md

#### PRINT

**Image:** `print-1.png`
```markdown
![PRINT](/img/print-1.png)
```

**Image:** `print-2.png`
*Context:* Por ultimo, podemos utilizar el flag --last (-l) para mostrar solamente los registros devueltos por ...
```markdown
![PRINT](/img/print-2.png)
```


### docs/comandos/split.md

#### SPLIT

**Image:** `split-1.png`
```markdown
![SPLIT](/img/split-1.png)
```


### docs/comandos/validate.md

#### VALIDATE

**Image:** `validate-1.png`
```markdown
![VALIDATE](/img/validate-1.png)
```


### docs/flags-filtros.md

#### Flags y Filtros

**Image:** `flags-y-filtros-1.png`
*Context:* Veamos los flags globales:
```markdown
![Flags y Filtros](/img/flags-y-filtros-1.png)
```


### docs/tui.md

#### TUI (Text User Interface)

**Image:** `tui-text-user-interface-1.png`
*Context:* Para este ejemplo vamos a utilizar un archivo file20 que contiene 4 archivos lógicos tal como vemos ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-1.png)
```

**Image:** `tui-text-user-interface-2.png`
*Context:* Ahora ejecutaremos el comando “cardak open file20”
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-2.png)
```

**Image:** `tui-text-user-interface-3.png`
*Context:* Presionando la tecla F1 podemos acceder a una ayuda relacionada a la pantalla en la que estemos posi...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-3.png)
```

**Image:** `tui-text-user-interface-4.png`
*Context:* Podemos ir a un numero de registro especifico con la combinación Ctrl-G, que nos pedirá un numero de...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-4.png)
```

**Image:** `tui-text-user-interface-5.png`
*Context:* Si queremos ver los detalles de un registro, estando parados sobre el, presionaremos la tecla SPACE ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-5.png)
```

**Image:** `tui-text-user-interface-6.png`
*Context:* Esta vista nos muestra los campos presentes con su descripción y sus valores, y por defecto muestra ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-6.png)
```

**Image:** `tui-text-user-interface-7.png`
*Context:* Si nos movemos por los diferentes campos, en la parte inferior vamos a ver información mas detallada...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-7.png)
```

**Image:** `tui-text-user-interface-8.png`
*Context:* Para ingresar el criterio de búsqueda, presionamos la tecla “s” y se nos va a abrir un dialogo donde...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-8.png)
```

**Image:** `tui-text-user-interface-9.png`
*Context:* Al presionar la tecla ENTER, se realiza la búsqueda y se nos marcan los registros que contienen ese ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-9.png)
```

**Image:** `tui-text-user-interface-10.png`
*Context:* Al presionar la tecla ENTER, se realiza la búsqueda y se nos marcan los registros que contienen ese ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-10.png)
```

**Image:** `tui-text-user-interface-11.png`
*Context:* Ahora realizaremos la misma búsqueda, pero usando un filtro en lugar de una simple búsqueda. Para es...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-11.png)
```

**Image:** `tui-text-user-interface-12.png`
*Context:* Ahora, solamente vamos a ver los registros que contienen ese dato
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-12.png)
```

**Image:** `tui-text-user-interface-13.png`
*Context:* Por ejemplo, vamos a buscar nuevamente las transacciones que contengan la palabra “RUBEN”, pero que ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-13.png)
```

**Image:** `tui-text-user-interface-14.png`
*Context:* Ahora solamente nos muestra dos registros:
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-14.png)
```

**Image:** `tui-text-user-interface-15.png`
*Context:* Vemos que el importe de la transacción viene en el campo DE4, así que nos paramos sobre el y presion...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-15.png)
```

**Image:** `tui-text-user-interface-16.png`
*Context:* Esto hace que el identificador de campo se coloque automáticamente por nosotros en la entrada del cr...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-16.png)
```

**Image:** `tui-text-user-interface-17.png`
*Context:* Vemos que nos trae mas registros de los deseados. Eso es porque todos ellos contienen el valor “40” ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-17.png)
```

**Image:** `tui-text-user-interface-18.png`
*Context:* Sabemos que el importe se guarda con dos posiciones decimales para esta moneda, y que el campo viene...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-18.png)
```

**Image:** `tui-text-user-interface-19.png`
*Context:* Esto nos muestra una serie de opciones, donde podemos ir seleccionando los tipos de transacción que ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-19.png)
```

**Image:** `tui-text-user-interface-20.png`
*Context:* Otro tipo de filtrado que podemos realizar, es decidir que campos queremos ver en la vista de detall...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-20.png)
```

**Image:** `tui-text-user-interface-21.png`
*Context:* Si nos paramos sobre el area llamada “Defined filter” y presionamos el cursor hacia abajo, se nos mu...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-21.png)
```

**Image:** `tui-text-user-interface-22.png`
*Context:* Al igual que en todos los lugares donde se nos permite ingresar una lista de campos, podemos presion...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-22.png)
```

**Image:** `tui-text-user-interface-23.png`
*Context:* Y presionando ENTER
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-23.png)
```

**Image:** `tui-text-user-interface-24.png`
*Context:* A continuación, presionamos el botón Apply, y cuando entremos a la vista de detalle, solamente verem...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-24.png)
```

**Image:** `tui-text-user-interface-25.png`
*Context:* Podemos marcar registros para luego efectuar operaciones sobre ellos y no sobre el contenido total d...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-25.png)
```

**Image:** `tui-text-user-interface-26.png`
*Context:* Podemos también marcar un rango de registros. Por ejemplo, si queremos marcar los registros 10 al 14...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-26.png)
```

**Image:** `tui-text-user-interface-27.png`
*Context:* Primero, aplicamos el filtro y presionamos la tecla “+”, y a continuación Shift-F5
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-27.png)
```

**Image:** `tui-text-user-interface-28.png`
*Context:* Antes de proceder al borrado, se nos presenta un cuadro de dialogo para confirmar la operación, most...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-28.png)
```

**Image:** `tui-text-user-interface-29.png`
*Context:* Antes de proceder al borrado, se nos presenta un cuadro de dialogo para confirmar la operación, most...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-29.png)
```

**Image:** `tui-text-user-interface-30.png`
*Context:* Lo primero que podemos hacer es borrar un campo. Tomemos como ejemplo este registro y borremos el ca...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-30.png)
```

**Image:** `tui-text-user-interface-31.png`
*Context:* Si presionamos el botón Delete, el campo sera eliminado del registro. Debemos tener en cuenta que no...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-31.png)
```

**Image:** `tui-text-user-interface-32.png`
*Context:* Para eso nos posicionamos sobre el campo DE4 y presionamos Ctrl-E
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-32.png)
```

**Image:** `tui-text-user-interface-33.png`
*Context:* Para eso nos posicionamos sobre el campo DE4 y presionamos Ctrl-E
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-33.png)
```

**Image:** `tui-text-user-interface-34.png`
*Context:* Para eso nos posicionamos sobre el campo DE4 y presionamos Ctrl-E
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-34.png)
```

**Image:** `tui-text-user-interface-35.png`
*Context:* Entonces, se nos presenta un dialogo donde tenemos la lista de campos a agregar, y a la derecha un l...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-35.png)
```

**Image:** `tui-text-user-interface-36.png`
*Context:* Ahí colocamos el valor deseado, y cuando el criterio de validación se cumple, el recuadro (originalm...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-36.png)
```

**Image:** `tui-text-user-interface-37.png`
*Context:* Nuevamente vemos que la barra superior queda en color rojo para indicar modificaciones en el archivo...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-37.png)
```

**Image:** `tui-text-user-interface-38.png`
*Context:* Volviendo a la vista principal, vemos que el registro 6 queda con una marca (el carácter #) para ind...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-38.png)
```

**Image:** `tui-text-user-interface-39.png`
*Context:* Tenemos este archivo:
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-39.png)
```

**Image:** `tui-text-user-interface-40.png`
*Context:* Y queremos reemplazar el nombre del comercio de “Processor A” al valor “Main processor”. Presionamos...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-40.png)
```

**Image:** `tui-text-user-interface-41.png`
*Context:* Presionando el botón “Start”, nos queda esto:
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-41.png)
```

**Image:** `tui-text-user-interface-42.png`
*Context:* Si, por ejemplo, queremos hacer el reemplazo solamente en algunos registros, los debemos marcar prev...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-42.png)
```

**Image:** `tui-text-user-interface-43.png`
*Context:* Y el resultado es este:
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-43.png)
```

**Image:** `tui-text-user-interface-44.png`
*Context:* Para esto, presionamos la función de guardado con Ctrl-S donde se nos muestra un dialogo en el cual ...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-44.png)
```

**Image:** `tui-text-user-interface-45.png`
*Context:* Si seleccionamos formato CSV, hay que tener en cuenta que si existe un filtro de campos seleccionado...
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-45.png)
```

**Image:** `tui-text-user-interface-46.png`
*Context:* En la barra inferior de estado, sobre la izquierda, podemos observar lo siguiente:
```markdown
![TUI (Text User Interface)](/img/tui-text-user-interface-46.png)
```

