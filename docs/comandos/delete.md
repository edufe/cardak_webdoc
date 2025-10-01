# DELETE

Elimina registros específicos de un archivo de intercambio.

## Sintaxis

```bash
cardak delete [OPCIONES] <archivo_entrada> <archivo_salida>
```

```bash
$ cardak help delete
usage: cardak delete [<flags>] <file>

Delete records and/or fields from the IPM file

Flags:
      --help             Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose          Add more information displayed on some commands.
      --mono             Supress color on output.
      --ignore           Try to ignore some errors and continue processing the file
  -W, --width            Ignore small terminal width check and force execution
  -z, --silent           Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility
                         like fzf
  -R, --records=RECORDS  List of record numbers to be considered for deletion. Values are separated by comma (,) and ranges are indicated by the starting and
                         ending record separated by a hyphen (-)
  -F, --fields=FIELDS    List of IPM fields to be deleted (can use a filter name)
  -l, --last             Use the record numbers returned on the last GREP command
  -O, --omitdel          Do not create a file with deleted records
  -x, --export           Export the deleted records to a .ckx file (in Hex format)

Args:
  <file>  IPM file name to delete the records from
```
<!-- ![Ejemplo de uso del comando DELETE](/img/delete-1.png) -->

## Descripción

Este comando permite borrar registros y/o campos de un archivo IPM.

El archivo original no es modificado, y en su lugar se generan por defecto dos archivos con el nombre del original, pero agregándole “_DISCARD” al archivo que contiene los registros eliminados, y “_KEEP” al archivo resultante que no contiene los registros eliminados.

Si lo que se solicita es eliminar campos, el nombre del archivo resultante contendrá “_DISCARDEDFIELDS” en su nombre

En todos los casos, se agrega la extensión “.ipm” al nombre

El parámetro requerido es el nombre del archivo que contiene los registros que queremos borrar, y para indicar los registros a eliminar o modificar (quitando los campos indicados) utilizaremos el flag -R (referirse a la sección Flags y Filtros para ver en detalle como funciona ese flag.

Como ejemplo, eliminaremos los registros numero 5, y los registros 10 al 15 del archivo file10:
![Ejemplo adicional del comando DELETE](/img/delete-2.png)

De los 43 registros del archivo original, se genera un archivo con 9 registros (los 7 seleccionados mas el header y trailer), y otro archivo con 36 registros (los 34 restantes mas el header y trailer)

Para que los archivos puedan ser procesados correctamente por otros sistemas, el valor del PDS0105 SF04 (File Sequence Number) del header del _KEEP contendrá el valor siguiente al del archivo original, y el del _DISCARD dos valores mas.

Si no nos interesa que se genere el archivo _DISCARD, podemos utilizar el flag --omitdel (-O), y utilizando el flag --export (-x), se va a generar un archivo de extension .ckx conteniendo esos registros eliminados en formato HEX (que pueden ser importados en otro archivo en forma posterior)

Si quisieramos eliminar algunos campos pero no registros enteros, podemos utilizar el flag -F para indicar la lista de campos a eliminar. Si no especificamos ningun registro o rango de registros (mediante el flag -R), los campos se eliminaran de todos los registros del archivo, de lo contrario, solamente se van a eliminar de los registros indicados.

Por ejemplo, vemos los primeros 5 registros:
![Ejemplo adicional del comando DELETE](/img/delete-3.png)

Supongamos que queremos eliminar los campos PDS0023 y PDS1011 de los registros 3 y 4, haríamos lo siguiente:
![Ejemplo adicional del comando DELETE](/img/delete-4.png)

Veremos ahora como han quedado los 5 primeros registros del archivo generado.

Podemos observar que los registros 3 y 4 ahora no contienen los campos eliminados.

Es importante aclarar que no hay un chequeo en la eliminación de campos, por lo que podemos estar eliminando campos que son mandatorios y el resultado puede ser un archivo incorrecto.
![Ejemplo adicional del comando DELETE](/img/delete-5.png)

Podemos realizar una validación del archivo generado:
![Ejemplo adicional del comando DELETE](/img/delete-6.png)

Podemos también generar un archivo HEXA con los registros eliminados:
![Ejemplo adicional del comando DELETE](/img/delete-7.png)

