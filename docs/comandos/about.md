# Acerca de los comandos

Cuando se utiliza cardak por linea de comandos, este recibe un comando y opcionalmente flags y parametros. El formato es:

```bash
cardak [flags] [comando] [parametros]
```
Si se omite el valor de comando, se asume por defecto el comando IDENTIFY

para obtener la lista de comandos reconocidos, podemos usar el comando HELP de esta forma:

```bash
$ cardak help
usage: cardak [<flags>] <command> [<args> ...]

A command-line tool for analyzing files.

Flags:
      --help     Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose  Add more information displayed on some commands.
      --mono     Supress color on output.
      --ignore   Try to ignore some errors and continue processing the file
  -W, --width    Ignore small terminal width check and force execution
  -z, --silent   Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf

Commands:
  help [<command>...]
  version
  chop [<flags>] <file>
  convert [<flags>] <format> <files>...
  create [<flags>] <file>
  delete [<flags>] <file>
  describe [<flags>] <field name> [<search pattern>]
  distribute [<flags>] <files>...
  duplicates [<flags>] <files>...
  export [<flags>] <files>...
  filter
    list [<flags>] [<file>]
    delete [<flags>] <file>
    rename [<flags>] <old> <new>
    copy [<flags>] <source> <destination>
    add [<flags>] <file> <fields>
    remove [<flags>] <file> <fields>
  fix [<flags>] <files>...
  grep [<flags>] <criteria> <files>...
  identify* [<flags>] <files>...
  import <file> <source>...
  join [<flags>] <files>...
  obfuscate [<flags>] <files>...
  open [<file>]
  print [<flags>] <files>...
  replace --search=SEARCH --replace=REPLACE [<flags>] <files>...
  split <files>...
  validate [<flags>] <files>...
```

## Lista de comandos disponibles

- **HELP**: Muestra esta ayuda rapida o la ayuda de un comando en particular
- **VERSION**: Muestra la version de la herramienta
- [CHOP](chop): Extrae un rango de registros de un archivo
- [CONVERT](convert): Convierte el formato de un archivo
- [CREATE](create): Crea un archivo IPM
- [DELETE](delete): Elimina registros de un archivo
- [DESCRIBE](describe): Muestra informacion sobre campos y valores
- [DISTRIBUTE](distribute): Separa registros de un archivo en varios segun criterios
- [DUPLICATES](duplicates): Detecta, reporta y permite eliminar registros duplicados
- [EXPORT](export): Exporta registros de un archivo
- [FILTER](filter): Filtra registros y permite realizar operaciones sobre ellos
- [FIX](fix): Intenta reparar automaticamente archivos con errores
- [GREP](grep): Busqueda de datos en archivos mediante criterios
- [IDENTIFY](identify): Identifica los archivos indicados
- [IMPORT](import): Importa datos a un archivo (generalmente, exportados previamente)
- [JOIN](join): Combina diferentes archivos en uno solo
- [OBFUSCATE](obfuscate): Permite modificar automaticamente datos sensibles
- [OPEN](open): Abre el archivo en modo TUI
- [PRINT](print): Imprime contenidos del archivo en formato legible
- [REPLACE](replace): Reemplaza valores en campos indicados
- [SPLIT](split): Divide un archivo en archivos mas pequeños
- [VALIDATE](validate): Valda la estructura e integridad de un archivo

