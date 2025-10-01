---
slug: /
---

# CardAK - Presentación

**Gestor de Archivos de Intercambio de Tarjetas y Utilidades**

Versión: 0.42.x

## Introducción

CardAK (Card Army Knife) es una herramienta de línea de comandos diseñada para gestionar archivos de intercambio de tarjetas MasterCard IPM (Interchange Processing Message). Proporciona un conjunto completo de utilidades para manipular, analizar y validar archivos de intercambio.

## ¿Qué es CardAK?

CardAK es una navaja suiza para el manejo de archivos de intercambio de tarjetas. Ofrece funcionalidades para:

- **Lectura y análisis** de archivos de intercambio
- **Conversión** entre diferentes formatos (EBCDIC, ASCII, RDW, Block 1014)
- **Validación** de estructuras y datos
- **Filtrado y búsqueda** de transacciones específicas
- **Exportación** a formatos legibles (JSON, CSV, XML)
- **Manipulación** de archivos (split, join, fix)
- **Interfaz de usuario interactiva** (TUI - Text User Interface)

## Características Principales

- Soporte para múltiples formatos de archivo
- Conversión entre codificaciones EBCDIC y ASCII
- Validación de estructuras de archivos IPM
- Búsqueda y filtrado avanzado de transacciones
- Exportación a formatos estándar
- Identificación automática de formato de archivo
- Interfaz de línea de comandos intuitiva
- Modo interactivo TUI para exploración visual

## Instalación

CardAK se distribuye como un ejecutable portable. No requiere instalación adicional.

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

## Modo Interactivo (TUI)

CardAK incluye una interfaz de usuario de texto interactiva que permite explorar archivos de intercambio de manera visual:

```bash
cardak open [ARCHIVO]
```

## Próximos Pasos

Explore la documentación para conocer más sobre:

- [Características y Funcionalidades](descripcion/caracteristicas)
- [Casos de Uso](casos-de-uso)
- [Comandos Disponibles](comandos/chop)
- [Flags y Filtros](flags-filtros)
- [Interfaz TUI](tui)