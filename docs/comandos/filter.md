# FILTER

Filtra registros de un archivo de intercambio basándose en múltiples criterios.

## Sintaxis

```bash
cardak filter [OPCIONES] <archivo_entrada> [archivo_salida]
```
```bash
$ cardak help filter
usage: cardak filter <command> [<args> ...]

Manages filter files

Flags:
      --help     Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose  Add more information displayed on some commands.
      --mono     Supress color on output.
      --ignore   Try to ignore some errors and continue processing the file
  -W, --width    Ignore small terminal width check and force execution
  -z, --silent   Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf

Commands:
  filter
    list [<flags>] [<file>]
    delete [<flags>] <file>
    rename [<flags>] <old> <new>
    copy [<flags>] <source> <destination>
    add [<flags>] <file> <fields>
    remove [<flags>] <file> <fields>
```
<!-- ![Ejemplo de uso del comando FILTER](/img/filter-1.png) -->

## Descripción

Este comando no actúa sobre archivos, sino que ayuda en el mantenimiento de filtros. Los filtros son configuraciones que nos ayudan a evitar tener que escribir grandes listas de campos para ser usados como filtros. Para ello, este comando maneja (a diferencia de otros comandos), subcomandos.

Para entender mejor el concepto, imaginemos que frecuentemente queremos utilizar los campos DE2, DE3, DE4, DE12, DE24, DE25 y DE26, porque no nos interesa desplegar siempre los valores de todos los campos que vienen en los registros.

Podemos, cada vez que usemos un comando como PRINT, agregar esto:
-R D4,D12,D24,D25,D26

Pero eso es poco practico. Entonces, lo que podemos hacer es definir esta lista de campos como un filtro, y para ello necesitamos darle un nombre. El nombre es una cadena de caracteres que no debe contener espacios.

Veamos como utilizar esta funcionalidad. Comenzaremos por el subcomando LIST para ver las configuraciones definidas
![Ejemplo adicional del comando FILTER](/img/filter-2.png)

Como podemos ver, no tenemos ningún filtro definido. Procederemos a crear uno llamado “myfilter” y que contenga la lista de campos que mencionamos anteriormente.
![Ejemplo adicional del comando FILTER](/img/filter-3.png)

El comando FILTER ADD va a agregar los campos indicados a un archivo de filtro existente, o, en este caso, nos pregunta si queremos crear uno nuevo. Le indicamos que si y nos muestra como quedo configurado este nuevo filtro llamado “myfilter”

A partir de este momento, cuando necesitemos especificar una lista de campos, podemos utilizar el nombre del filtro en su lugar. O sea, en vez de colocar esto:
-R D4,D12,D24,D25,D26
podemos utilizar simplemente:
-R myfilter

Vamos a crear otro filtro mas llamado “otherfilter” pero con otros campos
![Ejemplo adicional del comando FILTER](/img/filter-4.png)

Veamos ahora que filtros tenemos definidos utilizando el comando FILTER LIST
![Ejemplo adicional del comando FILTER](/img/filter-5.png)

ya tenemos dos filtros definidos. Podemos definir todos los que necesitemos, y en caso de tener muchos definidos, podemos ver el contenido en forma mas compacta, usando --summary
![Ejemplo adicional del comando FILTER](/img/filter-6.png)

Si necesitamos ver en detalle uno solo de estos, podemos simplemente indicar el nombre
![Ejemplo adicional del comando FILTER](/img/filter-7.png)

Ahora, supongamos que no fue una buena elección el nombre de “myfilter” porque no nos da ningún indicio de su uso. Quisiéramos que se llamara, por ejemplo, “basico”. Podemos renombrarlo de la siguiente forma:
![Ejemplo adicional del comando FILTER](/img/filter-8.png)

Vamos a crear un nuevo filtro a partir de uno ya existente. Tomaremos el filtro “otherfilter” y crearemos uno llamado “prueba”
![Ejemplo adicional del comando FILTER](/img/filter-9.png)

A continuación vamos a agregar nuevos campos al filtro “prueba”. Para probar, vamos a incluir algunos campos ya existentes y ver que sucede
![Ejemplo adicional del comando FILTER](/img/filter-10.png)

Observamos que los campos ya existentes son ignorados, y que podemos agregar directamente subcampos sin tener que incluir el campo genérico (por ejemplo el DE022S05 esta sin haber incluido el DE022).
También podemos quitar campos de un filtro. Por ejemplo, quitemos el PDS0023
![Ejemplo adicional del comando FILTER](/img/filter-11.png)

Y por ultimo, podemos eliminar un filtro que ya no necesitemos mas.
![Ejemplo adicional del comando FILTER](/img/filter-12.png)

