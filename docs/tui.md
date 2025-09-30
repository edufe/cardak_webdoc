# TUI - Interfaz de Usuario de Texto

La interfaz de usuario de texto (TUI) de CardAK proporciona una forma interactiva y visual de explorar archivos de intercambio IPM.

## Iniciar el TUI

```bash
cardak open archivo.ipm
```

## Características del TUI

### 1. Navegación Visual
- Lista scrolleable de registros
- Vista detallada de campos
- Navegación por teclado
- Indicadores visuales

### 2. Búsqueda Interactiva
- Búsqueda en tiempo real
- Búsqueda por campos específicos
- Soporte para expresiones regulares
- Navegación entre resultados

### 3. Filtrado Dinámico
- Aplicar filtros sin cerrar el TUI
- Ver resultados inmediatamente
- Combinar múltiples filtros
- Limpiar filtros fácilmente

### 4. Exportación
- Exportar registros seleccionados
- Múltiples formatos (JSON, CSV, XML)
- Exportar con filtros aplicados

### 5. Estadísticas en Tiempo Real
- Información del archivo
- Contadores de registros
- Totales monetarios
- Estado del filtro actual

## Pantallas del TUI

### Pantalla Principal

La pantalla principal muestra una lista de todos los registros:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ CardAK v0.8.x - archivo.ipm                              5,234 registros ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Archivo: /ruta/a/archivo.ipm                                   ASCII/1014 ║
║ Tamaño: 2.4 MB │ Filtrado: No │ Total visible: 5,234                     ║
╠══════════════════════════════════════════════════════════════════════════╣
║ #      Tipo  PAN              Monto       Moneda  Fecha/Hora    STAN     ║
╠══════════════════════════════════════════════════════════════════════════╣
║ 1      0000  [Header Record]  -           -       2025-01-15    -        ║
║ 2    → 0240  5123****1234     $150.00     USD     01-15 12:30   123456   ║
║ 3      0240  5123****5678     $75.50      USD     01-15 12:31   123457   ║
║ 4      0240  5123****9012     $200.00     USD     01-15 12:32   123458   ║
║ 5      0240  5123****3456     $1,250.00   USD     01-15 12:33   123459   ║
║ 6      0240  5123****7890     $85.75      USD     01-15 12:34   123460   ║
║ 7      0240  5123****2345     $325.00     USD     01-15 12:35   123461   ║
║ ...                                                                       ║
║ 5234   0001  [Trailer Record] $1,245,678  -       -            -        ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Registro 2 de 5,234                                      [?] Ayuda       ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [↑↓] Navegar │ [Enter] Detalles │ [/] Buscar │ [f] Filtrar │ [q] Salir  ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Pantalla de Detalles

Presionando `Enter` en un registro se muestra la vista detallada:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Registro #2 - Tipo: 0240 (Financial Transaction)                        ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Campo              Descripción                          Valor            ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Record Type        Message Type                         0240             ║
║                                                                           ║
║ DE002              Primary Account Number               5123456789012345 ║
║                    [BIN: 512345]                                         ║
║                                                                           ║
║ DE004              Amount, Transaction                  000000015000     ║
║                    Decimal: $150.00 USD                                  ║
║                                                                           ║
║ DE007              Transmission Date and Time           0115123045       ║
║                    Parsed: 2025-01-15 12:30:45                          ║
║                                                                           ║
║ DE011              System Trace Audit Number            123456           ║
║                                                                           ║
║ DE012              Local Transaction Time               123045           ║
║                    Time: 12:30:45                                        ║
║                                                                           ║
║ DE013              Local Transaction Date               0115             ║
║                    Date: 2025-01-15                                      ║
║                                                                           ║
║ DE022              Point of Service Entry Mode          000              ║
║                    Mode: Manual Key Entry                                ║
║                                                                           ║
║ DE024              Function Code                        200              ║
║                    Function: Financial Transaction                       ║
║                                                                           ║
║ DE025              Message Reason Code                  00               ║
║                                                                           ║
║ DE049              Currency Code, Transaction           840              ║
║                    Currency: USD (US Dollar)                             ║
║                                                                           ║
║ PDS0023            Card Product BIN                     512345           ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Esc] Volver │ [↑↓] Scroll │ [e] Exportar │ [c] Copiar │ [n] Siguiente  ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Pantalla de Búsqueda

Presionando `/` se abre la búsqueda interactiva:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Búsqueda Interactiva                                                     ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Patrón de búsqueda:                                                      ║
║ [512345_____________________________________________________________]    ║
║                                                                           ║
║ Opciones de búsqueda:                                                    ║
║   [x] Buscar en todos los campos                                         ║
║   [ ] Buscar en campo específico: [___________________]                  ║
║   [ ] Usar expresión regular                                             ║
║   [ ] Ignorar mayúsculas/minúsculas                                      ║
║   [ ] Solo registros de tipo: [____]                                     ║
║                                                                           ║
║ ───────────────────────────────────────────────────────────────────────  ║
║                                                                           ║
║ Resultados encontrados: 1,234 registros                                 ║
║                                                                           ║
║ Primeros resultados:                                                     ║
║   Registro #15   - BIN: 512345                                           ║
║   Registro #28   - BIN: 512345                                           ║
║   Registro #45   - BIN: 512345                                           ║
║   Registro #67   - BIN: 512345                                           ║
║   Registro #89   - BIN: 512345                                           ║
║   ...                                                                     ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Enter] Ir a primero │ [n] Siguiente │ [N] Anterior │ [Esc] Cancelar    ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Pantalla de Filtro

Presionando `f` se abre el panel de filtros:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Aplicar Filtros                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Expresión de filtro:                                                     ║
║ [PDS0023 = 512345 AND DE004 > 100000__________________________________]  ║
║                                                                           ║
║ O usar filtros rápidos:                                                  ║
║                                                                           ║
║ ┌─ Por BIN ──────────────────────────────────────────────────────────┐  ║
║ │ BIN: [______]  [Aplicar]                                            │  ║
║ └─────────────────────────────────────────────────────────────────────┘  ║
║                                                                           ║
║ ┌─ Por Fecha ────────────────────────────────────────────────────────┐  ║
║ │ Desde: [____-__-__]  Hasta: [____-__-__]  [Aplicar]               │  ║
║ └─────────────────────────────────────────────────────────────────────┘  ║
║                                                                           ║
║ ┌─ Por Monto ────────────────────────────────────────────────────────┐  ║
║ │ Mínimo: [________]  Máximo: [________]  [Aplicar]                 │  ║
║ └─────────────────────────────────────────────────────────────────────┘  ║
║                                                                           ║
║ ┌─ Por Moneda ───────────────────────────────────────────────────────┐  ║
║ │ Código: [___]  [Aplicar]                                            │  ║
║ └─────────────────────────────────────────────────────────────────────┘  ║
║                                                                           ║
║ Filtros activos:                                                         ║
║   • PDS0023 = 512345                                                     ║
║   • DE004 > 100000                                                       ║
║                                                                           ║
║ Resultados: 234 de 5,234 registros (4.5%)                               ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Enter] Aplicar │ [F] Limpiar filtros │ [Esc] Cancelar                  ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Pantalla de Exportación

Presionando `e` o `E` se abre el diálogo de exportación:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Exportar Registros                                                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║ ¿Qué desea exportar?                                                     ║
║   [x] Registro actual (#2)                                               ║
║   [ ] Registros marcados (12 registros)                                 ║
║   [ ] Todos los registros visibles (234 registros)                      ║
║   [ ] Todos los registros del archivo (5,234 registros)                 ║
║                                                                           ║
║ Formato de exportación:                                                  ║
║   ( ) JSON                                                               ║
║   (•) CSV                                                                ║
║   ( ) XML                                                                ║
║   ( ) Texto                                                              ║
║   ( ) IPM (archivo de intercambio)                                      ║
║                                                                           ║
║ Opciones:                                                                ║
║   [x] Enmascarar PANs                                                    ║
║   [ ] Incluir todos los campos                                           ║
║   [x] Pretty format (legible)                                            ║
║                                                                           ║
║ Archivo de salida:                                                       ║
║ [exportacion.csv___________________________________________________]     ║
║                                                                           ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Enter] Exportar │ [Esc] Cancelar                                        ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### Pantalla de Ayuda

Presionando `?` o `h` se muestra la ayuda:

```
╔══════════════════════════════════════════════════════════════════════════╗
║ CardAK TUI - Ayuda                                                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                           ║
║ NAVEGACIÓN                                                               ║
║   ↑, k              Registro anterior                                    ║
║   ↓, j              Registro siguiente                                   ║
║   Page Up, Ctrl+B   Página anterior                                      ║
║   Page Down, Ctrl+F Página siguiente                                     ║
║   Home, g           Primer registro                                      ║
║   End, G            Último registro                                      ║
║   [número]G         Ir al registro número                                ║
║                                                                           ║
║ VISUALIZACIÓN                                                            ║
║   Enter             Ver detalles del registro                            ║
║   Tab               Cambiar vista (lista/tabla/compacta)                 ║
║   Esc               Volver a vista anterior                              ║
║   r                 Refrescar vista                                      ║
║                                                                           ║
║ BÚSQUEDA Y FILTRADO                                                      ║
║   /                 Búsqueda interactiva                                 ║
║   n                 Siguiente resultado de búsqueda                      ║
║   N                 Resultado anterior de búsqueda                       ║
║   *                 Buscar valor del campo bajo cursor                   ║
║   f                 Aplicar filtro                                       ║
║   F                 Limpiar filtros                                      ║
║                                                                           ║
║ SELECCIÓN Y MARCAS                                                       ║
║   Space, m          Marcar/desmarcar registro actual                     ║
║   M                 Marcar todos los visibles                            ║
║   U                 Desmarcar todos                                      ║
║                                                                           ║
║ ACCIONES                                                                 ║
║   e                 Exportar registro actual                             ║
║   E                 Exportar múltiples registros                         ║
║   c                 Copiar valor al portapapeles                         ║
║   d                 Ver descripción del archivo                          ║
║   i                 Ver información del archivo                          ║
║                                                                           ║
║ GENERAL                                                                  ║
║   h, ?              Mostrar esta ayuda                                   ║
║   q, Ctrl+C         Salir                                                ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Esc] Cerrar ayuda                                                       ║
╚══════════════════════════════════════════════════════════════════════════╝
```

## Atajos de Teclado

### Navegación

| Tecla | Acción |
|-------|--------|
| `↑` `k` | Registro anterior |
| `↓` `j` | Registro siguiente |
| `Page Up` `Ctrl+B` | Página anterior (20 registros) |
| `Page Down` `Ctrl+F` | Página siguiente (20 registros) |
| `Home` `g` | Primer registro |
| `End` `G` | Último registro |
| `[número]G` | Ir al registro número N |
| `Ctrl+U` | Media página arriba |
| `Ctrl+D` | Media página abajo |

### Visualización

| Tecla | Acción |
|-------|--------|
| `Enter` | Ver detalles del registro |
| `Esc` | Volver/Cerrar |
| `Tab` | Cambiar modo de vista |
| `v` | Toggle visualización de campos |
| `r` | Refrescar pantalla |
| `w` | Toggle wrap de texto largo |

### Búsqueda

| Tecla | Acción |
|-------|--------|
| `/` | Abrir búsqueda |
| `n` | Siguiente resultado |
| `N` | Resultado anterior |
| `*` | Buscar valor bajo cursor |
| `#` | Buscar valor anterior |

### Filtrado

| Tecla | Acción |
|-------|--------|
| `f` | Abrir panel de filtros |
| `F` | Limpiar todos los filtros |
| `Ctrl+F` | Filtro rápido |

### Selección

| Tecla | Acción |
|-------|--------|
| `Space` `m` | Marcar/desmarcar actual |
| `M` | Marcar todos visibles |
| `U` | Desmarcar todos |
| `Ctrl+A` | Seleccionar todos |

### Acciones

| Tecla | Acción |
|-------|--------|
| `e` | Exportar registro actual |
| `E` | Exportar múltiples |
| `c` | Copiar valor |
| `C` | Copiar registro completo |
| `y` | Copiar campo (vim-style) |
| `d` | Ver descripción del archivo |
| `i` | Ver información del archivo |

### General

| Tecla | Acción |
|-------|--------|
| `h` `?` | Ayuda |
| `q` `Ctrl+C` | Salir |
| `:` | Comando directo |

## Flujos de Trabajo Comunes

### 1. Exploración Básica

```
1. Abrir archivo:
   $ cardak open archivo.ipm

2. Navegar con ↑↓ o j/k

3. Ver detalles con Enter

4. Volver con Esc

5. Salir con q
```

### 2. Búsqueda y Exportación

```
1. Abrir archivo y presionar /

2. Buscar "512345"

3. Navegar resultados con n/N

4. Marcar registros interesantes con Space

5. Presionar E para exportar marcados

6. Seleccionar formato CSV

7. Guardar como resultado.csv
```

### 3. Filtrado Avanzado

```
1. Presionar f para filtros

2. Usar filtro rápido por monto:
   Mínimo: 10000
   Máximo: 100000

3. Ver resultados filtrados

4. Agregar filtro por BIN:
   BIN: 512345

5. Exportar con E

6. Limpiar filtros con F
```

### 4. Análisis de Datos

```
1. Presionar d para ver descripción

2. Revisar estadísticas

3. Presionar f para filtrar por BIN específico

4. Ver cantidad de registros

5. Presionar E para exportar

6. Analizar en herramienta externa
```

## Características Especiales

### Modo de Vista

El TUI soporta diferentes modos de visualización:

- **Lista**: Vista estándar con campos principales
- **Tabla**: Vista tabular compacta
- **Compacta**: Máximo número de registros visibles
- **Detallada**: Más información por registro

Cambiar con `Tab`.

### Búsqueda Incremental

La búsqueda muestra resultados mientras escribes, permitiendo refinar el patrón en tiempo real.

### Filtros Persistentes

Los filtros se mantienen activos hasta que los limpies explícitamente con `F`.

### Copiar al Portapapeles

Soportado en terminales modernas. Copia valores, campos completos o registros enteros.

### Temas de Color

El TUI se adapta automáticamente al tema de tu terminal (claro/oscuro).

## Rendimiento

### Archivos Grandes

El TUI usa carga lazy (perezosa):
- Solo carga registros visibles
- Funciona bien con archivos de millones de registros
- Memoria constante, independiente del tamaño del archivo

### Búsqueda Optimizada

- Índices en memoria para búsquedas rápidas
- Búsqueda paralela en múltiples threads
- Cache de resultados

## Limitaciones

- Solo lectura (no se puede editar)
- Requiere terminal con soporte de colores
- Mejor experiencia con terminales de al menos 100x30 caracteres
- Algunas funciones requieren terminal moderno (copiar/pegar)

## Tips y Trucos

### Navegación Rápida

```
# Ir al registro 1000
1000G

# Ir al 50%
50%

# Buscar y marcar
/512345
n, Space, n, Space, n, Space...
E (exportar)
```

### Filtros Complejos

```
# Combinar múltiples condiciones
f
PDS0023 = 512345 AND DE004 > 100000 AND DE049 = 840
Enter
```

### Exportación Selectiva

```
# Marcar varios registros
Space (en cada uno)

# O marcar rango
f (filtrar primero)
M (marcar todos visibles)
E (exportar)
```

## Solución de Problemas

### Colores No Se Ven

```bash
# Verificar soporte de colores
echo $TERM

# Forzar colores
TERM=xterm-256color cardak open archivo.ipm
```

### Terminal Pequeña

```bash
# Usar vista compacta
# En TUI presionar Tab hasta vista compacta
```

### Performance Lento

```bash
# Abrir con filtro inicial
cardak open --filter "PDS0023 = 512345" archivo.ipm

# O limitar registros
cardak open --limit 10000 archivo.ipm
```

## Notas

- El TUI no modifica archivos, es solo lectura
- Se puede usar con archivos de cualquier tamaño
- Los atajos son similares a vim/less para familiaridad
- Soporta mouse en terminales compatibles
- El estado del TUI no se persiste al salir

## Galería de Capturas de Pantalla

A continuación se muestran ejemplos visuales de la interfaz TUI en acción:

![Interfaz TUI - Ejemplo 1](/img/tui-text-user-interface-1.png)

![Interfaz TUI - Ejemplo 2](/img/tui-text-user-interface-2.png)

![Interfaz TUI - Ejemplo 3](/img/tui-text-user-interface-3.png)

![Interfaz TUI - Ejemplo 4](/img/tui-text-user-interface-4.png)

![Interfaz TUI - Ejemplo 5](/img/tui-text-user-interface-5.png)

![Interfaz TUI - Ejemplo 6](/img/tui-text-user-interface-6.png)

![Interfaz TUI - Ejemplo 7](/img/tui-text-user-interface-7.png)

![Interfaz TUI - Ejemplo 8](/img/tui-text-user-interface-8.png)

![Interfaz TUI - Ejemplo 9](/img/tui-text-user-interface-9.png)

![Interfaz TUI - Ejemplo 10](/img/tui-text-user-interface-10.png)

![Interfaz TUI - Ejemplo 11](/img/tui-text-user-interface-11.png)

![Interfaz TUI - Ejemplo 12](/img/tui-text-user-interface-12.png)

![Interfaz TUI - Ejemplo 13](/img/tui-text-user-interface-13.png)

![Interfaz TUI - Ejemplo 14](/img/tui-text-user-interface-14.png)

![Interfaz TUI - Ejemplo 15](/img/tui-text-user-interface-15.png)

![Interfaz TUI - Ejemplo 16](/img/tui-text-user-interface-16.png)

![Interfaz TUI - Ejemplo 17](/img/tui-text-user-interface-17.png)

![Interfaz TUI - Ejemplo 18](/img/tui-text-user-interface-18.png)

![Interfaz TUI - Ejemplo 19](/img/tui-text-user-interface-19.png)

![Interfaz TUI - Ejemplo 20](/img/tui-text-user-interface-20.png)

<details>
<summary>Ver más capturas de pantalla</summary>

![Interfaz TUI - Ejemplo 21](/img/tui-text-user-interface-21.png)

![Interfaz TUI - Ejemplo 22](/img/tui-text-user-interface-22.png)

![Interfaz TUI - Ejemplo 23](/img/tui-text-user-interface-23.png)

![Interfaz TUI - Ejemplo 24](/img/tui-text-user-interface-24.png)

![Interfaz TUI - Ejemplo 25](/img/tui-text-user-interface-25.png)

![Interfaz TUI - Ejemplo 26](/img/tui-text-user-interface-26.png)

![Interfaz TUI - Ejemplo 27](/img/tui-text-user-interface-27.png)

![Interfaz TUI - Ejemplo 28](/img/tui-text-user-interface-28.png)

![Interfaz TUI - Ejemplo 29](/img/tui-text-user-interface-29.png)

![Interfaz TUI - Ejemplo 30](/img/tui-text-user-interface-30.png)

![Interfaz TUI - Ejemplo 31](/img/tui-text-user-interface-31.png)

![Interfaz TUI - Ejemplo 32](/img/tui-text-user-interface-32.png)

![Interfaz TUI - Ejemplo 33](/img/tui-text-user-interface-33.png)

![Interfaz TUI - Ejemplo 34](/img/tui-text-user-interface-34.png)

![Interfaz TUI - Ejemplo 35](/img/tui-text-user-interface-35.png)

![Interfaz TUI - Ejemplo 36](/img/tui-text-user-interface-36.png)

![Interfaz TUI - Ejemplo 37](/img/tui-text-user-interface-37.png)

![Interfaz TUI - Ejemplo 38](/img/tui-text-user-interface-38.png)

![Interfaz TUI - Ejemplo 39](/img/tui-text-user-interface-39.png)

![Interfaz TUI - Ejemplo 40](/img/tui-text-user-interface-40.png)

![Interfaz TUI - Ejemplo 41](/img/tui-text-user-interface-41.png)

![Interfaz TUI - Ejemplo 42](/img/tui-text-user-interface-42.png)

![Interfaz TUI - Ejemplo 43](/img/tui-text-user-interface-43.png)

![Interfaz TUI - Ejemplo 44](/img/tui-text-user-interface-44.png)

![Interfaz TUI - Ejemplo 45](/img/tui-text-user-interface-45.png)

![Interfaz TUI - Ejemplo 46](/img/tui-text-user-interface-46.png)

</details>
