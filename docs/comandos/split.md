# SPLIT

Divide un archivo de intercambio grande en múltiples archivos más pequeños.

## Sintaxis

```bash
cardak split [OPCIONES] <archivo_entrada>
```
```bash
$ cardak help split
usage: cardak split <files>...

Create phisical files from logical files present in an IPM file (a transmission)

Flags:
      --help     Show context-sensitive help (also try --help-long and --help-man).
  -v, --verbose  Add more information displayed on some commands.
      --mono     Supress color on output.
      --ignore   Try to ignore some errors and continue processing the file
  -W, --width    Ignore small terminal width check and force execution
  -z, --silent   Suppress all output (banner, headers, summary) except the results. Specially useful for DESCRIBE command piped to a search utility like fzf

Args:
  <files>  File names to split
```
<!-- ![Ejemplo de uso del comando SPLIT](/img/split-1.png) -->

## Descripción

Este comando es el opuesto al comando [JOIN](join), y permite separar los archivos lógicos contenidos dentro de un archivo IPM físico, en tantos archivos físicos como archivos lógicos contenga.
