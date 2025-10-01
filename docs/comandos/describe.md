# DESCRIBE

Proporciona información sobre campos y valores sin necesidad de acudir a un manual

## Sintaxis

```bash
cardak describe [OPCIONES] <archivo>
```
```bash
$ cardak help describe
usage: cardak describe [<flags>] <field name> [<search pattern>]

Describe IPM fields and functions.

It accepts the following:

  MT[I]              - Show MTI values
  TRAN[SACTIONTYPES] - Show valid transaction types
  FUNC[TIONCODES]    - Show valid function codes
  D[E]n              - Data Element n (can use wildcards)
  P[DS]n             - PDS element n (can use wildcards)

Flags:
      --help       Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose    Add more information displayed on some commands.
      --mono       Supress color on output.
      --ignore     Try to ignore some errors and continue processing the file
  -W, --width      Ignore small terminal width check and force execution
  -z, --silent     Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf
  -x, --extended   Display extended information
  -s, --subfields  Show subfields if they exist

Args:
  <field name>        Field name to describe (can use wildcards)
  [<search pattern>]  Pattern used as filter for results
```
<!-- ![Ejemplo de uso del comando DESCRIBE](/img/describe-1.png) -->

## Descripción

Este comando no actúa sobre archivos, es una ayuda rápida para buscar información de campos y valores sin necesidad de recurrir a los manuales.
Nos sirve, por ejemplo, cuando queremos utilizar algún filtro pero no recordamos en que campo viaja el dato requerido.

Es un comando flexible en cuanto a la forma de busqueda, permitiéndose usar comodines y tambien filtrar por partes de la descripción buscada.

Podemos consultar campos como Data Elements (DE), Private Data Subelements (PDS), MTI, Function Codes y Transaction Codes.

Para el caso de los campos, podemos usar la nomenclatura utilizada en casi todas las partes de la herramienta (para detalles de uso, ver la sección Flags y Filtros. Podemos, ademas, utilizar comodines para referirnos a mas de un campo, y se puede agregar (opcionalmente) un texto que sera utilizado para filtrar los elementos a mostrar si contienen el texto indicado. Se nos mostrara información similar a la encontrada en los manuales de la marca.

Para los Function y Transaction codes, se nos mostraran los valores y descripciones de las combinaciones de datos correspondientes.

Por defecto se muestra una descripción sumarizada, pero podemos agregar el flag --subfields (-s) para mostrar los subcampos en caso que existan, o el flag --extended (-x) para mostrar información extendida en caso que exista.

Por ejemplo, tomemos el campo DE43. Si no estamos seguros que contiene, podemos hacer lo siguiente:
![Ejemplo adicional del comando DESCRIBE](/img/describe-2.png)

O digamos que queremos buscar un importe pero no recordamos en que campo viene dicho dato. En ese caso podemos pedir todos los DE pero filtrando por la descripción:
![Ejemplo adicional del comando DESCRIBE](/img/describe-3.png)

Vemos que en este caso pedimos todos los Data Elements indicándolo con ‘D*’. Es necesario usar comillas ya que de lo contrario el shell va a intentar expandir el asterisco.

Por ejemplo, veamos los Function codes:
![Ejemplo adicional del comando DESCRIBE](/img/describe-4.png)

Se nos muestra por cada valor de MTI, los valores que pueden utilizarse en el campo DE24 y su significado.

Esto nos ahorra tener que ir a buscar en los manuales los valores que corresponden a cada tipo de transacción, y es muy útil a la hora de realizar búsquedas en archivos cuando no siempre recordamos los valores que tenemos que usar para los filtros

