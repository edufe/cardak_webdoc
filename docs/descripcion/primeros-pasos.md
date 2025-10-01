# Primeros pasos

## Instalación

CardAK se distribuye como un ejecutable portable. No requiere instalación adicional.

Basta con copiar el archivo ejecutable en una carpeta que esté incluida en el PATH de la cuenta de usuario.

## Uso Básico

```bash
cardak [COMANDO] [OPCIONES] [ARCHIVO]
```

Para ver todos los comandos disponibles:

```bash
cardak --help
```

![Comandos disponibles en CardAK](/img/comandos-1.png)

Para obtener ayuda sobre un comando específico:

```bash
cardak [COMANDO] --help
```
o bien
```bash
cardak HELP [COMANDO]
```

## Modos de uso
Existen dos formas de utilizar esta herramienta. Una es en modo **CLI** (Command Line Interface) y la otra en modo **TUI** (Text User Interface).

### Modo CLI (Linea de comandos)
Esta es la modalidad preferida para acciones rapidas o que involucran archivos muy grandes, o cuando tenemos que procesar varios archivos.

Tambien es la forma en que la herramienta puede ser utilizada desde otros procesos batch.

### Modo Interactivo (TUI)

CardAK incluye una interfaz de usuario de texto interactiva que permite explorar archivos de intercambio de manera visual:

```bash
cardak OPEN [ARCHIVO]
```
