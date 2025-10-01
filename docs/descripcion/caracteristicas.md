# Características y Funcionalidades

CardAK ofrece un conjunto completo de herramientas para el manejo de archivos de intercambio de tarjetas MasterCard IPM.

Sus características principales son:
    - Multiplataforma (existe una versión para Linux y para Windows)
    - No requiere de una instalación especial, se trata de un solo binario ejecutable y basta con copiarlo en un directorio que se encuentre en el PATH
    - Es una aplicación de linea de comandos, por lo que se utiliza desde una consola o terminal. Esto permite utilizarla fácilmente en servidores remotos
    - Se puede utilizar tanto para procesos automatizados, como en forma interactiva por un usuario

Entre sus funcionalidades se destacan:
    - Identificar los tipos de archivo por su contenido y no por su nombre
    - Convertir entre formatos (ASCII/EBCDIC, con/sin bloques de 1014, etc.)
    - Validar los archivos ante errores de formato y algunos errores de datos
    - Posibilidad de corrección de algunos errores en forma automática
    - Soporta archivos lógicos en archivos físicos (trasnsmissions), permitiendo separarlos en archivos físicos y viceversa
    - Permite exportar sus datos en formatos "legibles", como ser archivos de texto planos, en formato CSV (que pueden abrirse en Excel), o como valores en hexadecimal para poder ser importados en otro archivo
    - Importar en un archivo datos previamente exportados desde otro
    - Detección de registros duplicados dentro de un mismo archivo
    - Fraccionamiento de archivos grandes en archivos mas chicos para facilitar su manejo
    - Búsqueda de datos mediante condiciones flexibles en uno o varios archivos
    - Distribución de registros de un archivo en otros, de acuerdo a criterios definidos por el usuario
    - Eliminación de registros de un archivo
    - Abrir los archivos en forma interactiva, donde se pueden realizar acciones tales como:
        - Visualizar el contenido de los registros.
        - Eliminar registros y/o campos de un registro
        - Editar registros
        - Realizar búsquedas y filtrado
        - Exportar los registros deseados
        - Importar registros exportados desde otro archivo
        - Agregar registros y/o campos

Ademas, hay nuevas funcionalidades en desarrollo.

## Resumen de funcionalidades

### 1. Lectura y Análisis de Archivos

CardAK puede leer archivos de intercambio en múltiples formatos:

- **EBCDIC**: Codificación nativa de mainframes
- **ASCII**: Codificación estándar para sistemas modernos
- **RDW (Record Descriptor Word)**: Archivos de longitud variable con descriptores
- **Block 1014**: Formato de bloques de 1014 bytes

### 2. Identificación Automática

El comando `IDENTIFY` detecta automáticamente:
- Formato de archivo (EBCDIC/ASCII)
- Tipo de estructura (RDW/Block/Flat)
- Versión del formato IPM
- Información del header

### 3. Conversión de Formatos

CardAK permite convertir archivos entre diferentes formatos:

```bash
cardak convert --from ebcdic --to ascii input.ipm output.ipm
cardak convert --from rdw --to block1014 input.ipm output.ipm
```

### 4. Validación de Archivos

El comando `VALIDATE` verifica:
- Integridad estructural del archivo
- Validez de los registros
- Coherencia de los datos
- Cumplimiento con especificaciones IPM

### 5. Búsqueda y Filtrado

CardAK ofrece capacidades avanzadas de búsqueda:

- **GREP**: Búsqueda por patrones en campos específicos
- **FILTER**: Filtrado por condiciones múltiples
- **DUPLICATES**: Detección de transacciones duplicadas

### 6. Exportación de Datos

Exporte transacciones a formatos legibles:

- **JSON**: Para procesamiento programático
- **CSV**: Para análisis en hojas de cálculo
- **XML**: Para integración con otros sistemas
- **Texto plano**: Para revisión humana

### 7. Manipulación de Archivos

- **SPLIT**: Dividir archivos grandes en múltiples archivos más pequeños
- **JOIN**: Combinar múltiples archivos en uno solo
- **CHOP**: Extraer rangos específicos de registros
- **FIX**: Reparar archivos con problemas estructurales

### 8. Descripción de Contenido

El comando `DESCRIBE` proporciona estadísticas detalladas:

- Número total de registros por tipo
- Contadores de transacciones
- Totales monetarios
- Información de header y trailer
- Distribución de tipos de registro

### 9. Interfaz Interactiva (TUI)

Interfaz de usuario de texto con navegación visual:

- Exploración de registros
- Búsqueda interactiva
- Vista detallada de campos
- Navegación por teclado
- Filtrado en tiempo real

### 10. Gestión de Duplicados

Identificación y gestión de transacciones duplicadas:

- Detección automática
- Comparación de campos clave
- Reportes de duplicados
- Opciones de eliminación

## Ventajas de CardAK

- **Portabilidad**: Ejecutable único sin dependencias
- **Rendimiento**: Procesamiento rápido de archivos grandes
- **Flexibilidad**: Múltiples formatos y opciones
- **Confiabilidad**: Validación exhaustiva de datos
- **Facilidad de uso**: Comandos intuitivos y ayuda integrada
- **Automatización**: Scripts y procesamiento batch
- **Interactividad**: Modo TUI para exploración visual