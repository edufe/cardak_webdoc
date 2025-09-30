# OPEN

Abre un archivo de intercambio en modo interactivo (TUI - Text User Interface).

## Sintaxis

```bash
cardak open [OPCIONES] <archivo>
```

## Descripción

El comando `OPEN` inicia la interfaz de usuario de texto (TUI) de CardAK, que permite explorar archivos de intercambio de manera interactiva y visual. Es la forma más intuitiva de navegar y analizar archivos IPM.

## Interfaz TUI

La interfaz TUI proporciona:

- **Vista de lista de registros**: Navegación por todos los registros
- **Vista detallada**: Información completa de cada campo
- **Búsqueda interactiva**: Búsqueda en tiempo real
- **Filtrado**: Filtros dinámicos por campos
- **Exportación**: Exportar registros seleccionados
- **Estadísticas**: Información resumida del archivo

## Opciones

### `--filter <condicion>`
Inicia con un filtro aplicado.

**Ejemplo**:
```bash
cardak open --filter "PDS0023 = 512345" archivo.ipm
```

### `--goto <numero>`
Inicia en un registro específico.

**Ejemplo**:
```bash
cardak open --goto 1000 archivo.ipm
```

### `--search <patron>`
Inicia con una búsqueda activa.

**Ejemplo**:
```bash
cardak open --search "512345" archivo.ipm
```

## Controles de Teclado

### Navegación Básica

| Tecla | Acción |
|-------|--------|
| `↑` / `k` | Registro anterior |
| `↓` / `j` | Registro siguiente |
| `Page Up` | Página anterior |
| `Page Down` | Página siguiente |
| `Home` / `g` | Primer registro |
| `End` / `G` | Último registro |
| `Enter` | Ver detalles del registro |
| `Esc` / `q` | Volver / Salir |

### Búsqueda y Filtrado

| Tecla | Acción |
|-------|--------|
| `/` | Búsqueda |
| `n` | Siguiente resultado |
| `N` | Resultado anterior |
| `f` | Aplicar filtro |
| `F` | Limpiar filtro |
| `*` | Buscar valor bajo cursor |

### Acciones

| Tecla | Acción |
|-------|--------|
| `e` | Exportar registro(s) actual(es) |
| `E` | Exportar todos |
| `d` | Ver descripción del archivo |
| `h` / `?` | Ayuda |
| `r` | Refrescar vista |

### Visualización

| Tecla | Acción |
|-------|--------|
| `Tab` | Cambiar vista (lista/detalle) |
| `v` | Cambiar formato de visualización |
| `c` | Copiar valor al portapapeles |
| `m` | Marcar/desmarcar registro |

## Pantallas del TUI

### 1. Pantalla Principal (Lista de Registros)

```
╔══════════════════════════════════════════════════════════════════════════╗
║ CardAK - archivo.ipm                                     5,234 registros ║
╠══════════════════════════════════════════════════════════════════════════╣
║ #      Tipo  PAN              Monto      Moneda  Fecha         STAN      ║
╠══════════════════════════════════════════════════════════════════════════╣
║ 1      0000  [Header]         -          -       2025-01-15    -         ║
║ 2    → 0240  5123****1234     $150.00    USD     01-15 12:30   123456    ║
║ 3      0240  5123****5678     $75.50     USD     01-15 12:31   123457    ║
║ 4      0240  5123****9012     $200.00    USD     01-15 12:32   123458    ║
║ ...                                                                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [/] Buscar  [f] Filtrar  [Enter] Detalles  [e] Exportar  [q] Salir      ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### 2. Pantalla de Detalles

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Registro #2 - Tipo: 0240 (Transaction)                                  ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Campo              Descripción                          Valor            ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Record Type        Tipo de registro                     0240             ║
║ DE002              Primary Account Number               5123456789012345 ║
║ DE004              Amount, Transaction                  000000015000     ║
║                    (Equivalente: $150.00)                                ║
║ DE007              Transmission Date/Time               0115123045       ║
║                    (2025-01-15 12:30:45)                                ║
║ DE011              STAN                                 123456           ║
║ DE022              POS Entry Mode                       000              ║
║ DE024              Function Code                        200              ║
║ DE025              Message Reason Code                  00               ║
║ DE049              Currency Code                        840              ║
║                    (USD - US Dollar)                                     ║
║ PDS0023            BIN                                  512345           ║
║ ...                                                                       ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Esc] Volver  [e] Exportar  [c] Copiar  [↑↓] Navegar                    ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### 3. Pantalla de Búsqueda

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Búsqueda                                                                 ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Patrón: [512345________________]                                         ║
║                                                                           ║
║ Buscar en:                                                               ║
║   [x] Todos los campos                                                   ║
║   [ ] Campo específico: [_____________]                                  ║
║                                                                           ║
║ Opciones:                                                                ║
║   [ ] Expresión regular                                                  ║
║   [ ] Ignorar mayúsculas                                                 ║
║                                                                           ║
║ Resultados: 1,234 registros encontrados                                 ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Enter] Buscar  [Esc] Cancelar  [n] Siguiente  [N] Anterior             ║
╚══════════════════════════════════════════════════════════════════════════╝
```

### 4. Pantalla de Filtro

```
╔══════════════════════════════════════════════════════════════════════════╗
║ Aplicar Filtro                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ Condición: [PDS0023 = 512345___________________________________]         ║
║                                                                           ║
║ Ejemplos:                                                                ║
║   PDS0023 = 512345                                                       ║
║   DE004 > 100000                                                         ║
║   DE049 = 840 AND DE004 > 10000                                          ║
║   PDS0023 IN (512345, 512346)                                            ║
║                                                                           ║
║ Filtros Rápidos:                                                         ║
║   [1] BIN específico                                                     ║
║   [2] Rango de fechas                                                    ║
║   [3] Rango de montos                                                    ║
║   [4] Moneda específica                                                  ║
║                                                                           ║
╠══════════════════════════════════════════════════════════════════════════╣
║ [Enter] Aplicar  [Esc] Cancelar  [F] Limpiar filtro                     ║
╚══════════════════════════════════════════════════════════════════════════╝
```

## Ejemplos de Uso

### Abrir archivo simple

```bash
cardak open archivo.ipm
```

### Abrir con filtro inicial

```bash
cardak open --filter "PDS0023 = 512345" archivo.ipm
```

### Abrir en registro específico

```bash
cardak open --goto 1000 archivo.ipm
```

### Abrir con búsqueda activa

```bash
cardak open --search "512345" archivo.ipm
```

## Funciones Avanzadas

### Exportación desde TUI

1. Presionar `e` en un registro para exportar ese registro
2. Marcar múltiples registros con `m` y luego `e`
3. Presionar `E` para exportar todos los registros visibles (con filtro aplicado)

### Flujo de Trabajo Típico

```bash
# 1. Abrir archivo
cardak open archivo.ipm

# 2. En TUI:
#    - Navegar con flechas
#    - Presionar '/' para buscar
#    - Ingresar "512345"
#    - Presionar 'n' para siguiente resultado

# 3. Ver detalles:
#    - Presionar Enter en registro interesante

# 4. Filtrar:
#    - Presionar 'f' para filtro
#    - Ingresar "DE004 > 100000"
#    - Enter para aplicar

# 5. Exportar:
#    - Presionar 'E' para exportar filtrados
#    - Seleccionar formato (CSV, JSON, XML)
#    - Especificar archivo de salida
```

## Notas

- El TUI es de solo lectura, no modifica el archivo
- Funciona con archivos de cualquier tamaño (carga lazy)
- Los filtros y búsquedas son en tiempo real
- Se puede copiar al portapapeles (en terminales que lo soporten)
- Los colores se adaptan al tema de la terminal
- Use `h` o `?` dentro del TUI para ver ayuda completa
- El TUI se cierra con `q` o `Esc` (desde vista principal)

Para más información sobre el TUI, consulte la [documentación detallada de TUI](../tui).

## Ejemplos con Capturas de Pantalla

![Ejemplo de uso del comando OPEN](/img/open-1.png)

